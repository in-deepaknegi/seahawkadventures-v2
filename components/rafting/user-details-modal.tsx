import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/modal";
import { UserDetails } from "@/types/booking";

interface UserDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (users: UserDetails[]) => void;
    numberOfUsers: number;
}

export function UserDetailsModal({
    isOpen,
    onClose,
    onConfirm,
    numberOfUsers,
}: UserDetailsModalProps) {
    const [users, setUsers] = useState<UserDetails[]>(() =>
        Array.from({ length: numberOfUsers }, () => ({
            name: "",
            mobile: "",
            email: "",
        })),
    );

    const handleUserChange = (
        index: number,
        field: keyof UserDetails,
        value: string,
    ) => {
        const newUsers = [...users];
        newUsers[index] = { ...newUsers[index], [field]: value };
        setUsers(newUsers);
    };

    const isValid = users.every(
        (user) =>
            user.name && user.mobile.length === 10 && user.email.includes("@"),
    );

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="m-auto w-full max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-semibold text-gray-900">
                        Guest Information
                    </DialogTitle>
                    <DialogClose />
                </DialogHeader>
                <div className="max-h-[75vh] space-y-8 overflow-y-auto px-1">
                    {users.map((user, index) => (
                        <div
                            key={index}
                            className="space-y-6 border-b border-gray-200 pb-8 last:border-0"
                        >
                            <div>
                                {/* <h3 className="text-xl font-medium text-gray-900">Guest {index + 1}</h3> */}
                                <p className="mt-1 text-sm text-gray-600">
                                    Please provide accurate contact information,
                                    this will be used to contact you.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        value={user.name}
                                        onChange={(e) =>
                                            handleUserChange(
                                                index,
                                                "name",
                                                e.target.value,
                                            )
                                        }
                                        className="w-full rounded-lg border border-gray-300 px-4 py-1.5 text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        placeholder="Enter full name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={user.mobile}
                                        onChange={(e) =>
                                            handleUserChange(
                                                index,
                                                "mobile",
                                                e.target.value.slice(0, 10),
                                            )
                                        }
                                        className="w-full rounded-lg border border-gray-300 px-4 py-1.5 text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        placeholder="Enter 10-digit mobile number"
                                        maxLength={10}
                                        pattern="[0-9]*"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        onChange={(e) =>
                                            handleUserChange(
                                                index,
                                                "email",
                                                e.target.value,
                                            )
                                        }
                                        className="w-full rounded-lg border border-gray-300 px-4 py-1.5 text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        placeholder="Enter email address"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="pt-4">
                        <button
                            onClick={() => onConfirm(users)}
                            disabled={!isValid}
                            className={`w-full rounded-lg py-1.5 text-base font-medium transition-all duration-200 ${
                                isValid
                                    ? "bg-slate-900 text-white hover:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                    : "cursor-not-allowed bg-gray-200 text-gray-500"
                            }`}
                        >
                            Continue to Payment
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
