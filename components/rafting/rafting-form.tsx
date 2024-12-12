import React, { useState } from 'react';
import { DateSelector } from '../date-selector';
import { PackageCard } from './package-card';
import { NumberOfUsersModal } from './number-of-user-modal';
import { UserDetailsModal } from './user-details-modal';
import { Package, BookingDetails, UserDetails } from '@/types/booking';

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

    const packages: Package[] = [
        {
            id: 1,
            distance: '12 KM',
            route: 'Club House to NIM Beach',
            grade: 'I-II',
            duration: '1 - 2 Hours',
            price: 349,
        },
        {
            id: 2,
            distance: '16 KM',
            route: 'Shivpuri to NIM Beach',
            grade: 'II - III',
            duration: '2 - 3 Hours',
            price: 499,
        },
        {
            id: 3,
            distance: '26 KM',
            route: 'Marine Drive to NIM Beach',
            grade: 'II - III',
            duration: '2 - 3 Hours',
            price: 499,
        },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.selectedPackage) {
            setShowUsersModal(true);
        }
    };

    const handleNumberOfUsersConfirm = (numberOfUsers: number) => {
        setFormData(prev => ({
            ...prev,
            numberOfUsers,
            users: Array(numberOfUsers).fill({ name: '', mobile: '' }),
        }));
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

        console.log('Booking completed:', bookingData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Select Date</h2>
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

            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={!formData.selectedPackage}
                    className={`px-8 py-3 rounded-lg font-medium text-lg transition-all duration-200 ${formData.selectedPackage
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Book Now
                </button>
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
    );
}