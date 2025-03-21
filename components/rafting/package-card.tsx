import React from "react";
import { Clock } from "lucide-react";

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
            <div
                className={`w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md ${isSelected ? "border-blue-600" : ""}`}
            >
                <div className="px-5 py-8">
                    <div className="flex items-center justify-between">
                        <h3 className="mb-2 text-2xl font-medium text-gray-900">
                            {title}
                        </h3>
                        <p className="mb-4 text-sm font-normal text-gray-800">
                            {route} | Rapid Grade: {grade}
                        </p>
                    </div>
                    <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-2xl text-gray-900">₹ {price}</div>
                        <button
                            onClick={onSelect}
                            className="rounded-lg bg-blue-600 hover:bg-blue-500 px-6 py-2 font-medium text-white transition-colors duration-200"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
