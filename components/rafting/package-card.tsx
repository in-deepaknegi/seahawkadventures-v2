import React from 'react';
import { Clock } from 'lucide-react';

interface PackageCardProps {
    title: string;
    route: string;
    grade: string;
    duration: string;
    price: number;
    isSelected: boolean;
    onSelect: () => void;
}

export function PackageCard({
    title,
    route,
    grade,
    duration,
    price,
    isSelected,
    onSelect,
}: PackageCardProps) {
    return (
        <>

            <div className={`w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md ${isSelected ? 'border-blue-600' : ''}`}>
                <div className="p-5">
                    <h3 className="text-xl font-insm text-gray-900 mb-2">
                    {title}
                    </h3>
                    <p className="text-gray-800 text-sm mb-4">{route} | Rapid Grade: {grade}</p>
                    <div className="flex items-center text-sm gap-2 text-gray-500 mb-6">
                        <Clock className="w-4 h-4" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-insm text-gray-900">₹ {price}</div>
                        <button
                            onClick={onSelect}
                            disabled={true}
                            className="px-6 py-2 cursor-not-allowed bg-blue-400 text-white rounded-lg font-medium transition-colors duration-200 hover:bg-blue-300"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}