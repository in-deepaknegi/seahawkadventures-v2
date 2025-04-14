"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface BookingFormProps {
    packageName: string;
    packagePrice: string;
}

export default function BookingForm({
    packageName,
    packagePrice,
}: BookingFormProps) {
    const [date, setDate] = useState<Date>();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        participants: "1",
        time: "",
        specialRequests: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission - would connect to backend in production
        console.log("Booking submitted:", { ...formData, date, packageName });
        alert(
            "Thank you for your booking! We'll confirm your reservation shortly.",
        );
        setFormData({
            name: "",
            email: "",
            phone: "",
            participants: "1",
            time: "",
            specialRequests: "",
        });
        setDate(undefined);
    };

    const calculateTotal = () => {
        const basePrice = Number.parseInt(packagePrice.replace(/[^\d]/g, ""));
        const participants = Number.parseInt(formData.participants);
        return `₹${basePrice * participants}`;
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                </label>
                <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                </label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                </label>
                <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Date</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground",
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : "Select date"}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                // mode="single"
                                // selected={date}
                                // onSelect={setDate}
                                // initialFocus
                                // disabled={(date) => date < new Date()}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Time</label>
                    <Select
                        onValueChange={(value) =>
                            handleSelectChange("time", value)
                        }
                        required
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                            <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                            <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Number of Participants
                </label>
                <Select
                    defaultValue="1"
                    onValueChange={(value) =>
                        handleSelectChange("participants", value)
                    }
                    required
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select participants" />
                    </SelectTrigger>
                    <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "person" : "people"}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="specialRequests"
                    className="text-sm font-medium"
                >
                    Special Requests (Optional)
                </label>
                <Input
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any special requirements or requests"
                />
            </div>

            <div className="border-t pt-2">
                <div className="mb-2 flex justify-between">
                    <span>Package Price:</span>
                    <span>{packagePrice} per person</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>{calculateTotal()}</span>
                </div>
            </div>

            <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
            >
                Book Now
            </Button>

            <p className="text-center text-xs text-gray-500">
                By booking, you agree to our terms and conditions. A 20% deposit
                is required to confirm your booking.
            </p>
        </form>
    );
}
