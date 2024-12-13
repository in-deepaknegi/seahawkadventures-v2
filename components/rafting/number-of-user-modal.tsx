import React, { useState } from 'react';
import { Modal } from '../modal';
import { Package } from '@/types/booking';
import { format } from 'date-fns';

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
    console.log(totalAmount);
    

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Booking Details">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h3 className="font-semibold">Selected Package</h3>
                    <p>{selectedPackage.distance} - {selectedPackage.route}</p>
                    <p className="text-gray-600">Date: {format(selectedDate, 'MMMM d, yyyy')}</p>
                </div>

                <div className="space-y-2">
                    <label className="block font-medium">Number of Users</label>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        value={numberOfUsers}
                        onChange={(e) => setNumberOfUsers(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold">Price Details</h3>
                    <div className="flex justify-between">
                        <span>Price per person</span>
                        <span>₹ {selectedPackage.price}</span>
                    </div>
                    <div className="flex justify-between font-bold">
                        <span>Total Amount</span>
                        <span>₹ {totalAmount}</span>
                    </div>
                </div>

                <button
                    onClick={() => onConfirm(numberOfUsers)}
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                    Continue
                </button>
            </div>
        </Modal>
    );
}