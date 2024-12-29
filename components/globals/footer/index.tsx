"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const links = [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
];

export default function Footer() {
    return (
        <footer className="overflow-hidden bg-neutral-950 font-insr text-white">
            <div className="mx-auto max-w-7xl px-4 py-32 pb-10">
                <motion.h2
                    className="mb-16 max-w-2xl font-insr text-4xl md:text-5xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Create unforgettable memories with Us
                </motion.h2>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="font-insm text-xl">Address</h3>
                        <address className="not-italic text-gray-400">
                            India —<br />
                            Badrinath Rd
                            <br />
                            near Shivpuri Police Station
                            <br />
                            Rishikesh, Uttarakhand
                        </address>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-insm text-xl">Say Hello</h3>
                        <div className="space-y-2">
                            <Link
                                href="mailto:info@seahawkadventures.com"
                                className="block text-gray-400 hover:text-white"
                            >
                                info@seahawkadventures.com
                            </Link>
                            <Link
                                href="tel:+919756620538"
                                className="block text-gray-400 hover:text-white"
                            >
                               +91 97566 20538
                            </Link>
                        </div>
                    </div>


                    <div className="space-y-4">
                        <h3 className="font-insm text-xl text-white">Social</h3>
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
                            <div className="relative w-full max-w-full">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    className="w-full max-w-sm border-b border-gray-600 bg-transparent py-2 text-white placeholder-gray-400 focus:border-white focus:outline-none"
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

                <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
                    <p className="text-sm text-gray-400">
                        Sea Hawk Adventures © 2025. All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap justify-start gap-3 text-xs text-gray-400 md:gap-5">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-white hover:underline"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms-and-conditions"
                            className="hover:text-white hover:underline"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/cancellation-terms"
                            className="hover:text-white hover:underline"
                        >
                            Cancellation Terms
                        </Link>
                    </div>
                    <div className="text-xs text-gray-400">
                        <Link
                            href="https://ui.cnippet.site/"
                            target="_blank"
                            className="hover:text-black dark:hover:text-white"
                        >
                            Website by Cnippet
                        </Link>{" "}
                    </div>
                </div>
            </div>
        </footer>
    );
}
