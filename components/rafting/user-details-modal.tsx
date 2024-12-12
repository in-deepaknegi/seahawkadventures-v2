import React, { useState } from 'react';
import { Modal } from '../modal';
import { UserDetails } from '@/types/booking';

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
        Array.from({ length: numberOfUsers }, () => ({ name: '', mobile: '' }))
    );

    const handleUserChange = (index: number, field: keyof UserDetails, value: string) => {
        const newUsers = [...users];
        newUsers[index] = { ...newUsers[index], [field]: value };
        setUsers(newUsers);
    };

    const isValid = users.every(user => user.name && user.mobile.length === 10);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="User Details">
            <div className="space-y-6 max-h-[70vh] overflow-y-auto">
                {users.map((user, index) => (
                    <div key={index} className="space-y-4 pb-4 border-b last:border-0">
                        <h3 className="font-semibold">User {index + 1}</h3>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                value={user.name}
                                onChange={(e) => handleUserChange(index, 'name', e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Mobile Number</label>
                            <input
                                type="tel"
                                value={user.mobile}
                                onChange={(e) => handleUserChange(index, 'mobile', e.target.value.slice(0, 10))}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter 10-digit mobile number"
                                maxLength={10}
                                pattern="[0-9]*"
                            />
                        </div>
                    </div>
                ))}

                <button
                    onClick={() => onConfirm(users)}
                    disabled={!isValid}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${isValid
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Complete Booking
                </button>
            </div>
        </Modal>
    );
}