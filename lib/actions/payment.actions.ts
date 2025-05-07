"use server";

import prisma from "../prisma";
import Razorpay from "razorpay";
import crypto from "crypto";
import { Resend } from "resend";
import MessageUsEmail from "@/components/resend/email-booking";
import { generateUserId } from "../counters/user";
import { generateBookingId } from "../counters/booking";
import { generatePaymentId } from "../counters/payment";
import { BookingStatus, PaymentStatus } from "@prisma/client";

const resend: Resend = new Resend(process.env.RESEND_API_KEY as string);

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET_ID!,
});

interface UserDetails {
    name: string;
    email: string;
    mobile: string;
}

interface PackageDetails {
    title: string;
    price: number;
}

interface BookingData {
    date: string | null;
    package: PackageDetails;
    numberOfUsers: number;
    totalAmount: number;
    users: UserDetails[];
}

interface PaymentResult {
    success?: boolean;
    orderId?: string;
    amount?: number;
    currency?: string;
    bookingId?: string;
    paymentId?: string;
    error?: string;
}

interface VerificationResult {
    success?: boolean;
    error?: string;
}

// Sanitize user input
function sanitizeUserInput(input: string): string {
    return input.replace(/[<>]/g, "");
}

// Validate email format
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone number format
function isValidPhone(phone: string): boolean {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

export async function createPayment(
    amount: number,
    bookingData: BookingData,
): Promise<PaymentResult> {
    try {
        // Input validation
        if (
            !bookingData.users?.[0]?.email ||
            !isValidEmail(bookingData.users[0].email)
        ) {
            return { error: "Invalid email address" };
        }

        if (
            !bookingData.users[0].mobile ||
            !isValidPhone(bookingData.users[0].mobile)
        ) {
            return { error: "Invalid phone number" };
        }

        if (!bookingData.users[0].name) {
            return { error: "Name is required" };
        }

        const amountInPaise = Math.round(amount * 100);
        const currency = "INR";

        if (!amountInPaise || amountInPaise <= 0) {
            return { error: "Invalid payment amount" };
        }

        // Sanitize user input
        const sanitizedUserData = {
            ...bookingData,
            users: bookingData.users.map((user) => ({
                name: sanitizeUserInput(user.name),
                email: user.email.toLowerCase().trim(),
                mobile: user.mobile.trim(),
            })),
        };

        const userExists = await prisma.user.findUnique({
            where: {
                email: sanitizedUserData.users[0].email,
            },
        });

        if (userExists) {
            // Generate unique IDs first
            const bookingId = await generateBookingId();
            const paymentId = await generatePaymentId();

            // Create booking for existing user
            const booking = await prisma.booking.create({
                data: {
                    bookingId: bookingId,
                    customer: sanitizedUserData.users[0].name,
                    package: sanitizedUserData.package.title,
                    amount: amount,
                    date: new Date(sanitizedUserData.date || new Date()),
                    status: BookingStatus.PENDING,
                    userId: userExists.id,
                },
            });

            const options = {
                amount: amountInPaise.toString(),
                currency,
                receipt: `rcpt_${Date.now().toString().slice(-8)}`,
                notes: {
                    description: "Payment init",
                },
            };

            try {
                const order = await razorpay.orders.create(options);

                if (!order?.id) {
                    await prisma.payment.create({
                        data: {
                            paymentId: paymentId,
                            razorpayOrderId: order?.id || "unknown",
                            amount: amount,
                            currency: currency,
                            receiptId: options.receipt,
                            status: PaymentStatus.FAILED,
                            userId: userExists.id,
                        },
                    });
                    return { error: "Failed to create payment order" };
                }

                await prisma.payment.create({
                    data: {
                        paymentId: paymentId,
                        razorpayOrderId: order.id,
                        amount: amount,
                        currency: currency,
                        receiptId: options.receipt,
                        status: PaymentStatus.PENDING,
                        userId: userExists.id,
                    },
                });

                const result: PaymentResult = {
                    success: true,
                    orderId: order.id,
                    amount: amount,
                    currency: currency,
                    bookingId: booking.bookingId,
                    paymentId: paymentId,
                };

                return result;
            } catch (error: any) {
                console.error("[RAZORPAY_ORDER_CREATE] Error:", error.message);
                return {
                    error: "Failed to create payment order",
                };
            }
        }

        // Generate unique IDs for new user
        const bookingId = await generateBookingId();
        const paymentId = await generatePaymentId();
        const userId = await generateUserId();

        // Create user first
        const user = await prisma.user.create({
            data: {
                userId: userId,
                name: sanitizedUserData.users[0].name,
                email: sanitizedUserData.users[0].email,
                phone: sanitizedUserData.users[0].mobile,
                bookings: {
                    create: {
                        bookingId: bookingId,
                        customer: sanitizedUserData.users[0].name,
                        package: sanitizedUserData.package.title,
                        amount: amount,
                        date: new Date(sanitizedUserData.date || new Date()),
                        status: BookingStatus.PENDING,
                    },
                },
            },
            include: {
                bookings: true,
            },
        });

        const options = {
            amount: amountInPaise.toString(),
            currency,
            receipt: `rcpt_${Date.now().toString().slice(-8)}`,
            notes: {
                description: "Payment init",
            },
        };

        try {
            const order = await razorpay.orders.create(options);

            if (!order?.id) {
                await prisma.payment.create({
                    data: {
                        paymentId: paymentId,
                        razorpayOrderId: order?.id || "unknown",
                        amount: amount,
                        currency: currency,
                        receiptId: options.receipt,
                        status: PaymentStatus.FAILED,
                        userId: user.id,
                    },
                });
                return { error: "Failed to create payment order" };
            }

            await prisma.payment.create({
                data: {
                    paymentId: paymentId,
                    razorpayOrderId: order.id,
                    amount: amount,
                    currency: currency,
                    receiptId: options.receipt,
                    status: PaymentStatus.PENDING,
                    userId: user.id,
                },
            });

            const result: PaymentResult = {
                success: true,
                orderId: order.id,
                amount: amount,
                currency: currency,
                bookingId: user.bookings[0].bookingId,
                paymentId: paymentId,
            };

            return result;
        } catch (error: any) {
            console.error("[RAZORPAY_ORDER_CREATE] Error:", error.message);
            return { error: "Failed to create payment order" };
        }
    } catch (error: any) {
        console.error("[PAYMENT_CREATE] Error:", error.message);
        return { error: "Something went wrong" };
    }
}

export async function verifyPayment(
    razorpayOrderId: string,
    razorpayPaymentId: string,
    signature: string,
    bookingData: BookingData,
): Promise<VerificationResult> {
    try {
        if (!razorpayOrderId || !razorpayPaymentId || !signature) {
            return { error: "Missing payment verification details" };
        }

        // Verify payment signature
        const body = razorpayOrderId + "|" + razorpayPaymentId;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET_ID!)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature !== signature) {
            console.error("[PAYMENT_VERIFY] Invalid signature");
            return { error: "Invalid payment signature" };
        }

        // Find the payment first
        const payment = await prisma.payment.findUnique({
            where: {
                razorpayOrderId: razorpayOrderId,
            },
            include: {
                user: {
                    include: {
                        bookings: {
                            where: {
                                status: BookingStatus.PENDING,
                            },
                            orderBy: {
                                createdAt: "desc",
                            },
                            take: 1,
                        },
                    },
                },
            },
        });

        if (!payment) {
            console.error("[PAYMENT_VERIFY] Payment not found");
            return { error: "Payment not found" };
        }

        if (!payment.user?.bookings[0]) {
            console.error("[PAYMENT_VERIFY] No pending booking found");
            return { error: "No pending booking found for this payment" };
        }

        // Update payment status
        await prisma.payment.update({
            where: {
                razorpayOrderId: razorpayOrderId,
            },
            data: {
                status: PaymentStatus.SUCCESS,
                razorpayPaymentId: razorpayPaymentId,
            },
        });

        // Update the correct booking
        await prisma.booking.update({
            where: {
                bookingId: payment.user.bookings[0].bookingId,
            },
            data: {
                status: BookingStatus.SUCCESS,
            },
        });

        // Sanitize email addresses
        const sanitizedEmails = [
            "seahawk.adventures05@gmail.com",
            bookingData.users[0].email.toLowerCase().trim(),
        ];

        await resend.emails.send({
            from: "booking-mail-server@ui.cnippet.site",
            to: sanitizedEmails,
            subject: "Payment Success",
            react: MessageUsEmail({ bookingData }),
        });

        return { success: true };
    } catch (error: any) {
        console.error("[PAYMENT_VERIFY] Error:", error.message);
        return { error: "Something went wrong" };
    }
}
