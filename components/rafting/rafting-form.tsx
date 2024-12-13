import React, { useState } from 'react';
import { DateSelector } from '../date-selector';
import { PackageCard } from './package-card';
import { NumberOfUsersModal } from './number-of-user-modal';
import { UserDetailsModal } from './user-details-modal';
import { Package, UserDetails } from '@/types/booking';
import Script from 'next/script';


interface FormData {
    selectedDate: Date;
    selectedPackage: Package | null;
    numberOfUsers: number;
    users: UserDetails[];
}

export function RaftingForm() {
    const [formData, setFormData] = useState<FormData>({
        selectedDate: new Date(),
        selectedPackage: null,
        numberOfUsers: 1,
        users: [],
    });

    const [showUsersModal, setShowUsersModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const [amount, setAmount] = useState("0")
    const [currency, setCurrency] = useState("INR")

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
            users: Array(numberOfUsers).fill({ name: '', mobile: '' }),
        };
        setFormData(updatedFormData);

        // Calculate the amount after updating the form data
        const calculatedAmount = numberOfUsers * (updatedFormData.selectedPackage?.price || 0);
        setAmount(calculatedAmount.toString());

        setShowUsersModal(false);
        setShowDetailsModal(true);


    };

    const handleUserDetailsConfirm = (users: UserDetails[]) => {
        setFormData(prev => ({ ...prev, users }));
        setShowDetailsModal(false);

        // Here you would typically submit the booking to your backend
        const bookingData = {
            date: formData.selectedDate,
            package: formData.selectedPackage,
            numberOfUsers: formData.numberOfUsers,
            totalAmount: formData.numberOfUsers * (formData.selectedPackage?.price || 0),
            users,
        };
        // Calculate the amount based on selected number of users and package price
        const calculatedAmount = formData.numberOfUsers * (formData.selectedPackage?.price || 0);
        setAmount(calculatedAmount.toString());


        console.log('Booking completed:', bookingData);

        processPayment(bookingData);


    };

    const createOrderId = async () => {

        try {
            const response = await fetch("/api/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: parseFloat(amount) * 100,
                }),
            })

            if (!response.ok) {
                throw new Error("Network response was not ok")
            }


            const data = await response.json()
            return data.orderId
        } catch (error) {
            console.error(
                "There was a problem with your fetch operation:",
                error,
            )
        }
    }

    const processPayment = async (bookingData: any) => {

        try {
            const orderId: string = await createOrderId()
            const options = {
                key: process.env.key_id,
                amount: parseFloat(amount) * 100,
                currency: currency,
                name: "Cnippet",
                description: "description",
                order_id: orderId,
                handler: async function (response: any) {
                    const data = {
                        orderCreationId: orderId,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    }

                    const result = await fetch("/api/verify", {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: { "Content-Type": "application/json" },
                    })
                    const res = await result.json()

                    if (res.isOk) {
                        console.log("payment succeeded");


                        try {
                            const res = await fetch("/api/resend", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ bookingData }),
                            });

                            const json = await res.json();
                            console.log(json);

                        } catch (error) {
                            console.error("Error:", error);
                        }



                    } else {
                        console.log(res.message)
                    }
                },
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.on("payment.failed", function (response: any) {
                console.log(response.error.description)
            })
            paymentObject.open()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>

            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />



            <form onSubmit={handleSubmit} className="space-y-0">
                <div className="bg-white p-6">
                    <h2 className="text-2xl mb-4">Select Date</h2>
                    <DateSelector
                        selectedDate={formData.selectedDate}
                        onDateSelect={(date) => setFormData(prev => ({ ...prev, selectedDate: date }))}
                    />
                </div>

                <div className="space-y-4">
                    {packages.map((pkg) => (
                        <PackageCard
                            key={pkg.id}
                            {...pkg}
                            isSelected={formData.selectedPackage?.id === pkg.id}
                            onSelect={() => setFormData(prev => ({ ...prev, selectedPackage: pkg }))}
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

const packages: Package[] = [
    {
        id: 1,
        distance: '12 KM',
        route: 'Club House to NIM Beach',
        grade: 'I-II',
        duration: '1 - 2 Hours',
        price: 1,
    },
    {
        id: 2,
        distance: '16 KM',
        route: 'Shivpuri to NIM Beach',
        grade: 'II - III',
        duration: '2 - 3 Hours',
        price: 1,
    },
    {
        id: 3,
        distance: '26 KM',
        route: 'Marine Drive to NIM Beach',
        grade: 'II - III',
        duration: '2 - 3 Hours',
        price: 1,
    },
];
