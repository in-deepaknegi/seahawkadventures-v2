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
import { Calendar } from "@/components/ui/calendar";
import { parseDate } from "@internationalized/date";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NumberOfUsersModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (numberOfUsers: number) => void;
    selectedPackage: Package;
    selectedDate: Date;
    onDateSelect: (date: Date) => void;
}

export function NumberOfUsersModal({
    isOpen,
    onClose,
    onConfirm,
    selectedPackage,
    selectedDate,
    onDateSelect,
}: NumberOfUsersModalProps) {
    const [numberOfUsers, setNumberOfUsers] = useState(1);
    const [showCalendar, setShowCalendar] = useState(false);
    const totalAmount = numberOfUsers * selectedPackage.price;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="m-auto w-full max-w-[90%] rounded-xl border-0 p-4 shadow-xl md:max-w-md md:p-6">
                <DialogHeader className="mb-8">
                    <DialogTitle className="text-2xl font-bold text-gray-800 md:text-3xl">
                        Booking Details
                    </DialogTitle>
                    <DialogClose className="absolute top-6 right-6 cursor-pointer text-gray-400 transition-colors hover:text-gray-600" />
                </DialogHeader>
                <div className="space-y-8">
                    <div className="space-y-2 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
                        <h3 className="text-base font-medium text-gray-800 md:text-lg">
                            Selected Package
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <p className="text-base font-medium text-gray-900">
                                    {selectedPackage.title}
                                </p>
                                <p className="text-sm font-medium text-blue-600">
                                    {selectedPackage.route}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <Button
                                variant="outline"
                                onClick={() => setShowCalendar(!showCalendar)}
                                className="w-full justify-between text-sm font-medium text-gray-900 hover:bg-blue-50 md:text-base"
                            >
                                <span>Select a Date</span>
                                <span className="text-blue-600">
                                    {selectedDate
                                        ? format(selectedDate, "MMMM d, yyyy")
                                        : "Choose Date"}
                                </span>
                            </Button>
                            {showCalendar && (
                                <div className="mt-2 rounded-lg border border-gray-200 p-2 shadow-sm">
                                    <Calendar
                                        value={
                                            selectedDate
                                                ? parseDate(
                                                      format(
                                                          selectedDate,
                                                          "yyyy-MM-dd",
                                                      ),
                                                  )
                                                : undefined
                                        }
                                        onChange={(date) => {
                                            if (date) {
                                                onDateSelect(
                                                    new Date(date.toString()),
                                                );
                                                setShowCalendar(false);
                                            }
                                        }}
                                        className="rounded-md"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-900 md:text-base">
                                Number of Users
                            </label>
                            <div className="relative">
                                <Input
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
                                    className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                />
                                <p className="mt-2 text-sm text-gray-500">
                                    Maximum 10 users per booking
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 text-white shadow-lg md:p-6">
                        <h3 className="text-lg font-semibold">Price Details</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-blue-100">
                                    Price per person
                                </span>
                                <span className="font-medium">
                                    ₹{selectedPackage.price.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-t border-blue-500/30 pt-3">
                                <span className="font-semibold">
                                    Total Amount
                                </span>
                                <span className="text-xl font-bold">
                                    ₹{totalAmount.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    <Button
                        onClick={() => onConfirm(numberOfUsers)}
                        className="w-full cursor-pointer rounded-lg bg-black py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl"
                    >
                        Continue to Booking
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
