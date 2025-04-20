"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Wave4 } from "../shared/wave";
import Link from "next/link";
import Image from "next/image";
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
        <section id="contact" className="py-20 bg-gray-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h5 className="text-primary mb-3">GET IN TOUCH</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Contact Us</h2>
              <p className="text-gray-300">
                Have questions or ready to book your adventure? Get in touch with our team!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-gray-800 p-8 rounded-xl">
                <ContactForm />
              </div>

              <div className="space-y-8">
                <div className="bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-6">Our Location</h3>
                  <div className="flex items-start mb-6">
                    <MapPin className="h-5 w-5 mr-4 mt-1 text-primary" />
                    <p className="text-gray-300">
                      123 Adventure Lane, Near Laxman Jhula,
                      <br />
                      Rishikesh, Uttarakhand, India - 249201
                    </p>
                  </div>
                  <div className="flex items-center mb-6">
                    <Phone className="h-5 w-5 mr-4 text-primary" />
                    <p className="text-gray-300">+91 98765 43210</p>
                  </div>
                  <div className="flex items-center mb-6">
                    <Mail className="h-5 w-5 mr-4 text-primary" />
                    <p className="text-gray-300">info@seahawkadventure.com</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-4 text-primary" />
                    <p className="text-gray-300">Open Daily: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="h-64 bg-gray-800 rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Google+Map"
                    alt="Location Map"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-blue-50">
            <Wave4 />
            <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-52 md:px-10">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-medium md:text-4xl">
                        Contact Us
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg">
                        Have questions or ready to book your adventure? Get in
                        touch with our team.
                    </p>
                </div>

                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    {/* Contact Form */}
                    <Card className="h-full shadow-md">
                        <CardContent className="p-6">
                            <h3 className="mb-4 text-2xl font-medium">
                                Send Us a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="text-sm font-medium text-gray-600"
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
                                            className="text-sm font-medium text-gray-600"
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
                                            className="text-sm font-medium text-gray-600"
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
                                            className="text-sm font-medium text-gray-600"
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
                                        className="text-sm font-medium text-gray-600"
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
                        <Card className="h-full shadow-md">
                            <CardContent className="p-6">
                                <h3 className="mb-4 text-2xl font-medium">
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                            <MapPin className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">
                                                Our Location
                                            </h4>
                                            <p className="text-sm text-gray-600 md:text-base">
                                                Badrinath Rd, near Shivpuri
                                                Police Station, Rishikesh,
                                                Uttarakhand, India
                                                <br />
                                                PIN CODE: 249192
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
                                            <Link
                                                href="tel:+919756620538"
                                                className="text-sm text-gray-600 md:text-base"
                                            >
                                                +91 97566 20538
                                            </Link>
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
                                            <Link
                                                href="mailto:kayakinginrishikesh@gmail.com"
                                                className="text-sm text-gray-600 md:text-base block"
                                            >
                                                kayakinginrishikesh@gmail.com
                                            </Link>

                                            <Link
                                                href="mailto:bookings@seahawkadventure.com"
                                                className="text-sm text-gray-600 md:text-base"
                                            >
                                                bookings@seahawkadventure.com
                                            </Link>
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
                                            <p className="text-sm text-gray-600 md:text-base">
                                                Monday - Saturday: 9:00 AM -
                                                6:00 PM
                                            </p>
                                            <p className="text-sm text-gray-600 md:text-base">
                                                Sunday: 10:00 AM - 4:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Map */}
                    </div>

                    <div className="md:col-span-2">
                        <Card className="overflow-hidden shadow-md">
                            <div className="relative h-[300px] w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.7370203955406!2d78.3890825!3d30.137575999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091100497dec09%3A0x723dbf644ff9f1a7!2sSea%20Hawk%20Adventures!5e1!3m2!1sen!2sin!4v1744657313748!5m2!1sen!2sin"
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
            <div className="absolute bottom-0 z-0 h-full w-full max-w-full rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,96L120,106.7C240,117,480,139,720,133.3C960,128,1200,96,1320,80L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                    ></path>
                </svg>
            </div>
        </section>
        </>
       
    );
}
