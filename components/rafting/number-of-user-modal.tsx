import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/modal";
import { Package } from "@/types/booking";
import { format } from "date-fns";

interface NumberOfUsersModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (numberOfUsers: number) => void;
    selectedPackage: Package;
    selectedDate: Date;
}

export function NumberOfUsersModal({
    isOpen,
    onClose,
    onConfirm,
    selectedPackage,
    selectedDate,
}: NumberOfUsersModalProps) {
    const [numberOfUsers, setNumberOfUsers] = useState(1);
    const totalAmount = numberOfUsers * selectedPackage.price;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="m-auto w-full max-w-[90%] md:max-w-md p-5">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-3xl font-semibold text-gray-900">
                        Booking Details
                    </DialogTitle>
                    <DialogClose className="absolute top-4 right-4" />
                </DialogHeader>
                <div className="space-y-8">
                    <div className="space-y-3 rounded-lg bg-slate-100 p-4">
                        <h3 className="border-b border-gray-300 pb-2 text-base font-medium text-gray-900">
                            Selected Package
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="text-base text-black">
                                    {selectedPackage.title}
                                </p>
                                <p className="text-sm text-gray-700">
                                    {selectedPackage.route}
                                </p>
                            </div>
                            <p className="text-base text-gray-800">
                                <span className="font-medium text-gray-900">
                                    Date:
                                </span>{" "}
                                {format(selectedDate, "MMMM d, yyyy")}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="block text-base font-medium text-gray-900">
                            Number of Users
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={numberOfUsers}
                                onChange={(e) =>
                                    setNumberOfUsers(
                                        Math.max(
                                            1,
                                            parseInt(e.target.value) || 1,
                                        ),
                                    )
                                }
                                className="w-full rounded-lg border border-gray-300 px-4 py-1.5 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="mt-1 text-sm text-gray-500">
                                Maximum 10 users per booking
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3 rounded-lg bg-slate-900 p-4 text-sm">
                        <h3 className="border-b border-gray-500 pb-2 font-medium text-white">
                            Price Details
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-white">
                                    Price per person
                                </span>
                                <span className="font-medium text-white">
                                    ₹{selectedPackage.price.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-t pt-2">
                                <span className="font-medium text-white">
                                    Total Amount
                                </span>
                                <span className="text-base font-medium text-white">
                                    ₹{totalAmount.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => onConfirm(numberOfUsers)}
                        className="w-full rounded-lg bg-slate-900 py-2 text-base font-medium text-white shadow-sm transition-colors duration-200 hover:bg-slate-800"
                    >
                        Continue to Booking
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
