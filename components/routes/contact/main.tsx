"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import Navbar from "@/components/routes/shared/navbar";
import Footer from "@/components/routes/shared/footer";
import CldImageComponent from "@/components/cld-image";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
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
        <main className="-mt-5">
            {/* Hero Section */}
            <section className="relative flex h-[60vh] items-center">
                <CldImageComponent
                    src="https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1218.jpg"
                    alt="About Sea Hawk Adventure"
                    fill
                    className="size-full object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="relative z-10 mx-auto w-full max-w-full px-4 md:px-16 xl:px-10">
                    <div className="max-w-2xl flex items-start justify-center flex-col">
                        <h5 className="mb-3 tracking-wide text-white/80">
                            GET IN TOUCH
                        </h5>
                        <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
                            Contact Us
                        </h1>
                        <p className="mb-8 max-w-md text-lg text-white/90">
                            Have questions or ready to book your adventure?
                            We&apos;re here to help!
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-10 mb-16 w-full max-w-7xl px-4 md:px-16 xl:px-0">
                <div className="grid gap-16 md:grid-cols-2">
                    <div className="rounded-xl bg-gray-900 px-2 md:p-8">
                        <ContactForm />
                    </div>

                    <div className="flex flex-col justify-between space-y-4 rounded-xl bg-orange-50 px-2 py-4 md:p-8">
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-200">
                                <MapPin className="h-5 w-5 text-black" />
                            </div>
                            <div>
                                <h4 className="font-medium text-black">
                                    Our Location
                                </h4>
                                <p className="text-sm text-gray-700 md:text-base">
                                    Badrinath Rd, near Shivpuri Police Station,
                                    Rishikesh, Uttarakhand, India
                                    <br />
                                    PIN CODE: 249192
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-200">
                                <Phone className="h-5 w-5 text-black" />
                            </div>
                            <div>
                                <h4 className="font-medium text-black">
                                    Phone Number
                                </h4>
                                <Link
                                    href="tel:+919756620538"
                                    className="text-sm text-gray-700 md:text-base"
                                >
                                    +91 97566 20538
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-200">
                                <Mail className="h-5 w-5 text-black" />
                            </div>
                            <div>
                                <h4 className="font-medium text-black">
                                    Email Address
                                </h4>
                                <Link
                                    href="mailto:kayakinginrishikesh@gmail.com"
                                    className="block text-sm text-gray-700 md:text-base"
                                >
                                    kayakinginrishikesh@gmail.com
                                </Link>

                                <Link
                                    href="mailto:bookings@seahawkadventure.com"
                                    className="text-sm text-gray-700 md:text-base"
                                >
                                    bookings@seahawkadventure.com
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-200">
                                <Clock className="h-5 w-5 text-black" />
                            </div>
                            <div>
                                <h4 className="font-medium text-black">
                                    Office Hours
                                </h4>
                                <p className="text-sm text-gray-700 md:text-base">
                                    Monday - Saturday: 9:00 AM - 6:00 PM
                                </p>
                                <p className="text-sm text-gray-700 md:text-base">
                                    Sunday: 10:00 AM - 4:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <Card className="col-span-2 overflow-hidden">
                        <div className="relative h-[350px] w-full border-none">
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
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-900 py-16 text-white">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-normal md:text-4xl xl:text-5xl">
                            Frequently Asked Questions
                        </h2>

                        <p className="mx-auto max-w-3xl text-lg">
                            Find answers to common questions about our
                            adventures and booking process
                        </p>
                    </div>

                    <div className="mx-auto max-w-4xl">
                        <div className="space-y-4">
                            {[
                                {
                                    question:
                                        "Do I need prior experience for rafting adventures?",
                                    answer: "No prior experience is needed for our beginner rafting adventures. Our expert guides will provide all necessary training before you start. For intermediate and advanced adventures, some experience is recommended.",
                                },
                                {
                                    question:
                                        "What should I bring for my adventure?",
                                    answer: "We recommend bringing comfortable swimwear, a change of clothes, water shoes or sandals with straps, a towel, sunscreen, and a waterproof camera if desired. All safety equipment will be provided by us.",
                                },
                                {
                                    question:
                                        "Is there an age limit for rafting?",
                                    answer: "Yes, participants must be at least 12 years old for beginner rafting, 16 years for intermediate, and 18 years for advanced rafting. All participants must know how to swim.",
                                },
                                {
                                    question: "How do I book an adventure?",
                                    answer: "You can book through our website, by phone, or by visiting our office in Rishikesh. We recommend booking at least 24 hours in advance, especially during peak season.",
                                },
                                {
                                    question:
                                        "What is your cancellation policy?",
                                    answer: "Full refunds are available for cancellations made 48 hours before the scheduled adventure. Cancellations within 24-48 hours receive a 50% refund. No refunds are available for cancellations less than 24 hours before the adventure.",
                                },
                            ].map((faq, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg bg-orange-50 p-6 shadow-sm"
                                >
                                    <h3 className="mb-2 text-lg font-semibold text-black">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-700">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
