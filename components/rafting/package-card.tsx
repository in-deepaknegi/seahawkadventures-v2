import React from 'react';
import { Clock } from 'lucide-react';

interface PackageCardProps {
    distance: string;
    route: string;
    grade: string;
    duration: string;
    price: number;
    isSelected: boolean;
    onSelect: () => void;
}

export function PackageCard({
    distance,
    route,
    grade,
    duration,
    price,
    isSelected,
    onSelect,
}: PackageCardProps) {
    return (
        <>

            <div className={`w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md ${isSelected ? 'border-rose-400' : ''}`}>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {distance}
                    </h3>
                    <p className="text-gray-600 mb-4">{route} | Rapid Grade: {grade}</p>
                    <div className="flex items-center gap-2 text-gray-500 mb-6">
                        <Clock className="w-4 h-4" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-gray-900">₹ {price}</div>
                        <button
                            onClick={onSelect}
                            className="px-6 py-2 bg-rose-500 text-white rounded-lg font-medium transition-colors duration-200 hover:bg-rose-600"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}