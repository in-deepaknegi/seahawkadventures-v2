import React from 'react';
import { format } from 'date-fns';

interface DateOption {
    date: Date;
}

interface DateSelectorProps {
    selectedDate: Date;
    price: any;
    onDateSelect: (date: Date) => void;
}

export function DateSelector({ selectedDate, price, onDateSelect }: DateSelectorProps) {
    const today = new Date();

    const dateOptions: DateOption[] = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(today.getDate() + i);
        return {
            date,
        };
    });

    return (
        <div className="w-full overflow-x-auto pb-4">
            <div className="flex gap-3">
                {dateOptions.map((option) => (
                    <button
                        key={option.date.toISOString()}
                        onClick={() => onDateSelect(option.date)}
                        className={`flex flex-col items-center gap-2 min-w-[100px] p-4 rounded-lg border-2 transition-all duration-200 ${format(selectedDate, 'yyyy-MM-dd') === format(option.date, 'yyyy-MM-dd')
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-indigo-300'
                            }`}
                    >
                        <span className="text-sm font-medium text-gray-600">
                            {format(option.date, 'EEE')}
                        </span>
                        <span className="text-lg font-bold text-gray-800">
                            {format(option.date, 'MMM d')}
                        </span>
                        <span className="text-sm font-medium font-monm text-indigo-600">
                            {price ? `₹${price}` : `-`}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}