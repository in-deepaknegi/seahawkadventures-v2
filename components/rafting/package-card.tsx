import React from "react";
import { Clock } from "lucide-react";

interface PackageCardProps {
    title: string;
    route: string;
    grade: string;
    duration: string;
    price: number;
    isSelected: boolean;
    description?: string;
    onSelect: () => void;
}

export function PackageCard({
    title,
    route,
    grade,
    duration,
    price,
    description,
    isSelected,
    onSelect,
}: PackageCardProps) {
    return (
        <div
            className={`w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md ${isSelected ? "border-blue-600" : ""}`}
        >
            <div className="px-5 py-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="mb-2 text-2xl font-medium text-gray-900">
                        {title}
                    </h3>
                    <p className="mb-4 text-xs font-normal text-gray-800 md:text-sm">
                        {route} | Rapid Grade: {grade}
                    </p>

                </div>
                <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{duration}</span>
                </div>
                <div className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: description! }} />

                <div className="flex mt-2 items-center justify-between">
                    <div className="text-2xl text-gray-900">₹ {price}</div>
                    <button
                        onClick={onSelect}
                        className="rounded-lg bg-blue-600 px-6 py-1.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-500 md:py-2 md:text-base"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}
