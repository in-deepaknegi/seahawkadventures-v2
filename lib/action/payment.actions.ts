"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import Razorpay from "razorpay";
import crypto from "crypto";

// Initialize Razorpay
const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET_ID!,
});

export async function createPayment(amount: number) {
    try {
        // Create Razorpay order
        const amountInPaise = Math.round(amount * 100); // Convert to smallest currency unit (paise)
        const currency = "INR";

        if (!amountInPaise || amountInPaise <= 0) {
            return { error: "Invalid payment amount" };
        }

        const options = {
            amount: amountInPaise.toString(),
            currency,
            receipt: `rcpt_${Date.now().toString().slice(-8)}`,
        };

        try {
            console.log("[RAZORPAY_ORDER_CREATE] Creating order with options:", options);
            const order = await razorpay.orders.create(options);
            
            if (!order || !order.id) {
                console.error("[RAZORPAY_ORDER_CREATE] Order creation failed - no order ID returned");
                return { error: "Failed to create payment order" };
            }

            console.log("[RAZORPAY_ORDER_CREATE] Order created successfully:", order.id);

            // Store order details in database
            await prisma.payment.create({
                data: {
                    razorpayOrderId: order.id,
                    amount: amount,
                    currency: currency,
                    status: "pending",
                },
            });

            return {
                success: true,
                orderId: order.id,
                amount: amount,
                currency: currency,
            };
        } catch (error: any) {
            console.error("[RAZORPAY_ORDER_CREATE] Error details:", {
                message: error.message,
                stack: error.stack,
                options: options
            });
            return { error: error.message || "Failed to create payment order" };
        }
    } catch (error) {
        console.error("[PAYMENT_CREATE]", error);
        return { error: "Something went wrong" };
    }
}

export async function verifyPayment(
    razorpayOrderId: string,
    razorpayPaymentId: string,
    signature: string,
) {
    try {
        // Verify payment signature
        const body = razorpayOrderId + "|" + razorpayPaymentId;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET_ID!)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature !== signature) {
            return { error: "Invalid payment signature" };
        }

        // First find the payment by razorpayOrderId
        const payment = await prisma.payment.findFirst({
            where: {
                razorpayOrderId: razorpayOrderId,
            },
        });

        if (!payment) {
            return { error: "Payment not found" };
        }

        // Update payment status using the id
        await prisma.payment.update({
            where: {
                id: payment.id,
            },
            data: {
                status: "completed",
                paymentId: razorpayPaymentId,
            },
        });

        return { success: true };
    } catch (error) {
        console.error("[PAYMENT_VERIFY]", error);
        return { error: "Something went wrong" };
    }
}
