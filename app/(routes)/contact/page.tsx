"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import Navbar from "@/components/routes/shared/navbar";
import Footer from "@/components/routes/shared/footer";

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
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="-mt-[5rem]">
                {/* Hero Section */}
                <section className="relative h-[400px] overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/dkuixrz40/image/upload/v1735479492/water-rafting-T0100.jpg"
                        alt="Contact Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                            Contact Us
                        </h1>
                        <p className="max-w-3xl text-xl">
                            Have questions or ready to book your adventure? Get
                            in touch with our team.
                        </p>
                    </div>
                </section>

                {/* Contact Form and Info */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid items-start gap-8 md:grid-cols-2">
                            {/* Contact Form */}
                            <Card className="shadow-md h-full">
                                <CardContent className="p-6">
                                    <h2 className="mb-6 text-2xl font-bold text-blue-800">
                                        Send Us a Message
                                    </h2>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="name"
                                                    className="text-sm font-medium"
                                                >
                                                    Your Name
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
                                                <label
                                                    htmlFor="email"
                                                    className="text-sm font-medium"
                                                >
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
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="phone"
                                                    className="text-sm font-medium"
                                                >
                                                    Phone Number
                                                </label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="subject"
                                                    className="text-sm font-medium"
                                                >
                                                    Subject
                                                </label>
                                                <Input
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Booking Inquiry"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="message"
                                                className="text-sm font-medium"
                                            >
                                                Your Message
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                placeholder="Tell us about your adventure plans..."
                                                rows={5}
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-blue-600 hover:bg-blue-700"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Contact Information */}
                            <div className="space-y-6">
                                <Card className="shadow-md">
                                    <CardContent className="p-6">
                                        <h2 className="mb-6 text-2xl font-bold text-blue-800">
                                            Contact Information
                                        </h2>
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                    <MapPin className="h-5 w-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">
                                                        Our Location
                                                    </h4>
                                                    <p className="text-gray-600">
                                                        Near Laxman Jhula,
                                                        Rishikesh, Uttarakhand,
                                                        India - 249302
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                    <Phone className="h-5 w-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">
                                                        Phone Number
                                                    </h4>
                                                    <p className="text-gray-600">
                                                        +91 98765 43210
                                                    </p>
                                                    <p className="text-gray-600">
                                                        +91 98765 43211
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                    <Mail className="h-5 w-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">
                                                        Email Address
                                                    </h4>
                                                    <p className="text-gray-600">
                                                        info@seahawkadventure.com
                                                    </p>
                                                    <p className="text-gray-600">
                                                        bookings@seahawkadventure.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                    <Clock className="h-5 w-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">
                                                        Office Hours
                                                    </h4>
                                                    <p className="text-gray-600">
                                                        Monday - Saturday: 9:00
                                                        AM - 6:00 PM
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Sunday: 10:00 AM - 4:00
                                                        PM
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Quick Contact */}
                                <Card className="shadow-md">
                                    <CardContent className="p-6">
                                        <h3 className="mb-3 text-lg font-bold text-blue-800">
                                            Quick Contact
                                        </h3>
                                        <p className="mb-4 text-gray-700">
                                            Need immediate assistance? Reach out
                                            to us through these channels:
                                        </p>
                                        <div className="space-y-3">
                                            <Button className="flex w-full items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700">
                                                <Phone className="h-4 w-4" />{" "}
                                                Call Us Now
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="flex w-full items-center justify-center gap-2"
                                            >
                                                <MessageSquare className="h-4 w-4" />{" "}
                                                Live Chat
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="flex w-full items-center justify-center gap-2"
                                            >
                                                <Mail className="h-4 w-4" />{" "}
                                                Email Us
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="col-span-2">
                                {/* Map */}
                                <Card className="overflow-hidden shadow-md">
                                    <div className="relative h-[300px] w-full">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13782.480160887305!2d78.31292672962051!3d30.12048198101542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091630a9b2c1f7%3A0x3c8ebb3f53f29187!2sLaxman%20Jhula%2C%20Rishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1713099481121!5m2!1sen!2sin"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Sea Hawk Adventure Location"
                                        ></iframe>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-blue-50 py-16">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-blue-800">
                                Frequently Asked Questions
                            </h2>
                            <p className="mx-auto max-w-3xl text-lg text-blue-600">
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
                                        className="rounded-lg bg-white p-6 shadow-sm"
                                    >
                                        <h3 className="mb-2 text-lg font-semibold text-blue-700">
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
            <Footer />
        </div>
    );
}
