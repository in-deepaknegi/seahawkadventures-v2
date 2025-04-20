"use client";

import type React from "react";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission - would connect to backend in production
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    return (
        <>
            <section id="contact" className="bg-gray-900 py-20 text-white">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-16 xl:px-10">
                    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                        <div className="text-sm uppercase">GET IN TOUCH</div>

                        <h2 className="mb-5 text-3xl font-medium md:text-4xl xl:text-5xl">
                            Contact Us
                        </h2>

                        <p className="text-gray-200">
                            Have questions or ready to book your adventure? Get
                            in touch with our team!
                        </p>
                    </div>

                    <div className="grid gap-16 md:grid-cols-2">
                        <div className="rounded-xl bg-gray-900 px-2 md:p-8">
                            <ContactForm />
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4 rounded-xl bg-gray-800 px-2 py-4 md:p-8">
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-900">
                                        <MapPin className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white">
                                            Our Location
                                        </h4>
                                        <p className="text-sm text-gray-400 md:text-base">
                                            Badrinath Rd, near Shivpuri Police
                                            Station, Rishikesh, Uttarakhand,
                                            India
                                            <br />
                                            PIN CODE: 249192
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-900">
                                        <Phone className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white">
                                            Phone Number
                                        </h4>
                                        <Link
                                            href="tel:+919756620538"
                                            className="text-sm text-gray-400 md:text-base"
                                        >
                                            +91 97566 20538
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-900">
                                        <Mail className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white">
                                            Email Address
                                        </h4>
                                        <Link
                                            href="mailto:kayakinginrishikesh@gmail.com"
                                            className="block text-sm text-gray-400 md:text-base"
                                        >
                                            kayakinginrishikesh@gmail.com
                                        </Link>

                                        <Link
                                            href="mailto:bookings@seahawkadventure.com"
                                            className="text-sm text-gray-400 md:text-base"
                                        >
                                            bookings@seahawkadventure.com
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-900">
                                        <Clock className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white">
                                            Office Hours
                                        </h4>
                                        <p className="text-sm text-gray-400 md:text-base">
                                            Monday - Saturday: 9:00 AM - 6:00 PM
                                        </p>
                                        <p className="text-sm text-gray-400 md:text-base">
                                            Sunday: 10:00 AM - 4:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Card className="overflow-hidden">
                                <div className="relative h-[250px] w-full border-none">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.7370203955406!2d78.3890825!3d30.137575999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091100497dec09%3A0x723dbf644ff9f1a7!2sSea%20Hawk%20Adventures!5e1!3m2!1sen!2sin!4v1744657313748!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Sea Hawk Adventure Location"
                                        className="border-none"
                                    ></iframe>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
