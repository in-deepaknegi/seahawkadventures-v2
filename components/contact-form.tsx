"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you would typically send the data to your backend
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            subject: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="mb-6 text-2xl font-medium text-white">
                Send Us a Message
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                    >
                        Your Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="focus:ring-primary/50 w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-1.5 text-white focus:ring-2 focus:outline-none"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                    >
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="focus:ring-primary/50 w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-1.5 text-white focus:ring-2 focus:outline-none"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-300"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="focus:ring-primary/50 w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-1.5 text-white focus:ring-2 focus:outline-none"
                        placeholder="+91 98765 43210"
                    />
                </div>

                <div>
                    <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-gray-300"
                    >
                        Subject
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="focus:ring-primary/50 w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-1.5 text-white focus:ring-2 focus:outline-none"
                    >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="information">General Information</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                >
                    Your Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="focus:ring-primary/50 w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-1.5 text-white focus:ring-2 focus:outline-none"
                    placeholder="How can we help you?"
                ></textarea>
            </div>

            <Button
                type="submit"
                className="bg-blue-800 hover:bg-blue-700 cursor-pointer font-normal w-full rounded-full py-5 text-base"
            >
                Send Message
            </Button>
        </form>
    );
}
