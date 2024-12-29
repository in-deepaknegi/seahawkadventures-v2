"use client"
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const links = [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-neutral-950 font-insr text-white">
            <div className="mx-auto max-w-7xl px-4 py-32 pb-10">
                <motion.h2
                    className="mb-16 max-w-2xl text-4xl font-insr md:text-5xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Create unforgettable memories with Us
                </motion.h2>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-xl font-insm">Address</h3>
                        <address className="not-italic text-gray-400">
                            India —<br />
                            Near Laxman Jhula
                            <br />
                            Rishikesh, Uttarakhand
                        </address>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-insm">Say Hello</h3>
                        <div className="space-y-2">
                            <a
                                href="mailto:info@seahawkadventures.com"
                                className="block text-gray-400 hover:text-white"
                            >
                                info@seahawkadventures.com
                            </a>
                            <a
                                href="tel:+911234567890"
                                className="block text-gray-400 hover:text-white"
                            >
                                +91 123 456 7890
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-insm text-white">Social</h3>
                        <ul className="space-y-2">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">
                            Newsletter
                        </h3>
                        <form className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    className="w-full border-b border-gray-600 bg-transparent py-2 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-2"
                                >
                                    <ArrowRight className="h-6 w-6 text-white" />
                                </button>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    className="rounded border-gray-600"
                                />
                                <label
                                    htmlFor="privacy"
                                    className="text-sm text-gray-400"
                                >
                                    I agree to the{" "}
                                    <a href="#" className="underline">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-gray-800 pt-8 md:flex-row md:space-y-0">
                    <p className="text-gray-400">
                        Sea Hawk Adventures © 2024. All Rights Reserved.
                    </p>
                    
                </div>
            </div>
        </footer>
    );
}
