"use client";
import React, { useState } from "react";
import { DateSelector } from "../date-selector";
import { PackageCard } from "./package-card";
import { NumberOfUsersModal } from "./number-of-user-modal";
import { UserDetailsModal } from "./user-details-modal";
import { Package, UserDetails } from "@/types/booking";
import Script from "next/script";
import { createPayment, verifyPayment } from "@/lib/action/payment.actions";
import { toast } from "sonner";

interface FormData {
    selectedDate: Date;
    selectedPackage: Package | null;
    numberOfUsers: number;
    users: UserDetails[];
}

export function RaftingForm({
    packages,
    price,
}: {
    packages: Package[];
    price: any;
}) {
    const [formData, setFormData] = useState<FormData>({
        selectedDate: new Date(),
        selectedPackage: null,
        numberOfUsers: 1,
        users: [],
    });
    const validPackages = Array.isArray(packages) ? packages : [];
    const [showUsersModal, setShowUsersModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [paymentDetails, setPaymentDetails] = useState<any>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.selectedPackage) {
            setShowUsersModal(true);
        }
    };

    const handleNumberOfUsersConfirm = (numberOfUsers: number) => {
        const updatedFormData = {
            ...formData,
            numberOfUsers,
            users: Array(numberOfUsers).fill({ name: "", mobile: "" }),
        };
        setFormData(updatedFormData);

        // Calculate the amount after updating the form data
        const calculatedAmount =
            numberOfUsers * (updatedFormData.selectedPackage?.price || 0);
        setAmount(calculatedAmount.toString());

        setShowUsersModal(false);
        setShowDetailsModal(true);
    };

    const handleUserDetailsConfirm = (users: UserDetails[]) => {
        setFormData((prev) => ({ ...prev, users }));
        setShowDetailsModal(false);

        // Here you would typically submit the booking to your backend
        const bookingData = {
            date: formData.selectedDate,
            package: formData.selectedPackage,
            numberOfUsers: formData.numberOfUsers,
            totalAmount:
                formData.numberOfUsers * (formData.selectedPackage?.price || 0),
            users,
        };

        // Calculate the amount based on selected number of users and package price
        const calculatedAmount =
            formData.numberOfUsers * (formData.selectedPackage?.price || 0);
        setAmount(calculatedAmount.toString());

        handlePayment(bookingData);
    };

    const handlePayment = async (bookingData: any) => {
        // e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // Create payment order
            const response = await createPayment(Number(amount), bookingData);
            console.log(bookingData);

            if (response.error) {
                setError(response.error);
                return;
            }

            // Initialize Razorpay checkout
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: Number(amount) * 100, // Amount in paise
                currency: response.currency,
                name: "Cnippet",
                description: description,
                order_id: response.orderId,
                handler: async (response: any) => {
                    try {
                        // Verify payment
                        const verification = await verifyPayment(
                            response.razorpay_order_id,
                            response.razorpay_payment_id,
                            response.razorpay_signature,
                            bookingData,
                        );

                        if (verification.error) {
                            setError(verification.error);
                        } else {
                            // alert("Payment successful!");
                            toast.info("Event created successfully for:", {
                                description: `${bookingData.users[0].name} - ${bookingData.package.title} on ${bookingData.date.toLocaleDateString(
                                    "en-GB",
                                    {
                                        weekday: "short",
                                        month: "short",
                                        day: "2-digit",
                                        year: "numeric",
                                    },
                                )}`,
                            });

                            // Set payment details for receipt
                            setPaymentDetails({
                                amount: Number(amount),
                                razorpayPaymentId: response.razorpay_payment_id,
                                razorpayOrderId: response.razorpay_order_id,
                                createdAt: new Date(),
                                status: "SUCCESS",
                            });

                            setAmount("");
                            setDescription("");
                        }
                    } catch (err) {
                        setError("Payment verification failed");
                        toast.error("Payment verification failed");
                    }
                },
                prefill: {
                    name: formData.users[0].name,
                    email: formData.users[0].email,
                },
                theme: {
                    color: "#155dfc",
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (err) {
            setError("Failed to initialize payment");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />

            <form onSubmit={handleSubmit} className="mt-10 space-y-0">
                <div className="bg-white pb-6">
                    <h2 className="mb-4 text-2xl">Select Date</h2>
                    <DateSelector
                        price={price}
                        selectedDate={formData.selectedDate}
                        onDateSelect={(date) =>
                            setFormData((prev) => ({
                                ...prev,
                                selectedDate: date,
                            }))
                        }
                    />
                </div>

                <div className="space-y-4">
                    {validPackages.map((pkg) => (
                        <PackageCard
                            key={pkg.id}
                            {...pkg}
                            isSelected={formData.selectedPackage?.id === pkg.id}
                            onSelect={() =>
                                setFormData((prev) => ({
                                    ...prev,
                                    selectedPackage: pkg,
                                }))
                            }
                        />
                    ))}
                </div>

                {formData.selectedPackage && (
                    <>
                        <NumberOfUsersModal
                            isOpen={showUsersModal}
                            onClose={() => setShowUsersModal(false)}
                            onConfirm={handleNumberOfUsersConfirm}
                            selectedPackage={formData.selectedPackage}
                            selectedDate={formData.selectedDate}
                        />
                        <UserDetailsModal
                            isOpen={showDetailsModal}
                            onClose={() => setShowDetailsModal(false)}
                            onConfirm={handleUserDetailsConfirm}
                            numberOfUsers={formData.numberOfUsers}
                        />
                    </>
                )}
            </form>
        </>
    );
}
