"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Script from "next/script";
import { createPayment, verifyPayment } from "@/lib/actions/payment.actions";
import { toast } from "sonner";
import { DateValue } from "@internationalized/date";

declare global {
    interface Window {
        Razorpay: any;
    }
}

interface BookingFormProps {
    packageName?: string;
    packagePrice?: string;
}

export default function BookingForm({
    packageName = "Adventure Package",
    packagePrice = "0",
}: BookingFormProps) {
    const [date, setDate] = useState<DateValue | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        participants: "1",
        time: "",
        specialRequests: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (value: DateValue) => {
        setDate(value);
    };

    const handlePayment = async () => {
        setLoading(true);
        setError("");

        try {
            const amount = Number(packagePrice) * Number(formData.participants);
            const bookingData = {
                date: date ? date.toString() : null,
                package: {
                    title: packageName,
                    price: packagePrice,
                },
                numberOfUsers: Number(formData.participants),
                totalAmount: amount,
                users: [{
                    name: formData.name,
                    email: formData.email,
                    mobile: formData.phone,
                }],
            };

            // Create payment order
            const response = await createPayment(amount, bookingData);

            if ('error' in response) {
                setError(response.error);
                return;
            }

            console.log("Payment Response:", response);

            // Initialize Razorpay checkout
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: amount * 100, // Amount in paise
                currency: response.currency,
                name: "Sea Hawk Adventures",
                description: `Booking for ${packageName}`,
                order_id: response.orderId,
                handler: async (response: any) => {
                    try {
                        console.log("Razorpay Response:", response);
                        console.log("Booking ID:", response.bookingId);
                        console.log("Payment ID:", response.paymentId);

                        if (!response.razorpay_payment_id || !response.razorpay_signature) {
                            toast.error("Payment verification failed - Missing payment details");
                            return;
                        }

                        // Verify payment
                        const verification = await verifyPayment(
                            response.razorpay_order_id,
                            response.razorpay_payment_id,
                            response.razorpay_signature,
                            bookingData,
                        );

                        if (verification.error) {
                            setError(verification.error);
                            toast.error(verification.error);
                        } else {
                            toast.success("Booking successful!", {
                                description: `Thank you ${formData.name} for booking ${packageName}`,
                            });

                            // Reset form
                            setFormData({
                                name: "",
                                email: "",
                                phone: "",
                                participants: "1",
                                time: "",
                                specialRequests: "",
                            });
                            setDate(null);
                        }
                    } catch (err) {
                        setError("Payment verification failed");
                        toast.error("Payment verification failed");
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone,
                },
                theme: {
                    color: "#155dfc",
                },
            };

            if (typeof window !== 'undefined' && window.Razorpay) {
                const razorpay = new window.Razorpay(options);
                razorpay.open();
            } else {
                toast.error("Payment system not initialized");
            }
        } catch (err) {
            setError("Failed to initialize payment");
            toast.error("Failed to initialize payment");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handlePayment();
    };

    const calculateTotal = () => {
        const basePrice = Number.parseInt(packagePrice);
        const participants = Number.parseInt(formData.participants);
        return `₹${basePrice * participants}`;
    };

    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
                onError={(e) => {
                    console.error("Error loading Razorpay script:", e);
                    toast.error("Failed to load payment system");
                }}
                onLoad={() => {
                    console.log("Razorpay script loaded successfully");
                }}
            />

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-normal">
                        Full Name
                    </label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-normal">
                        Email Address
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-normal">
                        Phone Number
                    </label>
                    <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Date</label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !date && "text-muted-foreground",
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date.toDate('UTC'), "PPP") : "Select date"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    value={date}
                                    onChange={handleDateChange}
                                    isDisabled={false}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-normal">Time</label>
                        <Select
                            onValueChange={(value) =>
                                handleSelectChange("time", value)
                            }
                            required
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                                <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                                <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        Number of Participants
                    </label>
                    <Select
                        defaultValue="1"
                        onValueChange={(value) =>
                            handleSelectChange("participants", value)
                        }
                        required
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select participants" />
                        </SelectTrigger>
                        <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                    {num} {num === 1 ? "person" : "people"}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="specialRequests"
                        className="text-sm font-medium"
                    >
                        Special Requests (Optional)
                    </label>
                    <Input
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="Any special requirements or requests"
                    />
                </div>

                <div className="border-t pt-2">
                    <div className="mb-2 flex justify-between">
                        <span>Package Price:</span>
                        <span>{packagePrice} per person</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span>{calculateTotal()}</span>
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Book Now"}
                </Button>

                {error && (
                    <p className="text-center text-sm text-red-500">{error}</p>
                )}

                <p className="text-center text-xs text-gray-500">
                    By booking, you agree to our terms and conditions. A 20% deposit
                    is required to confirm your booking.
                </p>
            </form>
        </>
    );
}
