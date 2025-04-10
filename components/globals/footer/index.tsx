"use client";
import React from "react";
import { motion } from "motion/react";
import {
    ArrowRight,
    Twitter,
    Facebook,
    Instagram,
    Youtube,
} from "lucide-react";
import Link from "next/link";

const links = [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
    return (
        <footer className="mx-auto overflow-hidden bg-neutral-950 text-white md:max-w-[95%] xl:max-w-[90%]">
            <div className="mx-auto max-w-7xl px-4 py-32 pb-10">
                <motion.h2
                    className="font-insr mb-16 max-w-2xl text-4xl md:text-5xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Create unforgettable memories with Us
                </motion.h2>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="mb-4 font-bold">Company Info</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about">
                                    About Seahawk Adventure
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/careers">Careers</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQs</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-insm text-xl">See More</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/rafting">
                                    Rafting in Rishikesh
                                </Link>
                            </li>
                            <li>
                                <Link href="/camping">
                                    Camping in Rishikesh
                                </Link>
                            </li>
                            <li>
                                <Link href="/trekking">
                                    Trekking in Uttarakhand
                                </Link>
                            </li>
                            <li>
                                <Link href="/packages">Packages</Link>
                            </li>
                            <li>
                                <Link href="/gallery">Photo Gallery</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-insm text-xl">Address</h3>
                        <address className="space-y-2 text-sm text-gray-400 not-italic">
                            <p>Sea Hawk Adventures</p>
                            <p>Badrinath Rd, near Shivpuri Police Station,</p>
                            <p>Rishikesh, Uttarakhand, India</p>
                            <p>PIN CODE: 249192</p>
                            <p>OFFICE PHONE:+91 97566 20538</p>
                            <p>MOBILE: +91 97566 20538</p>
                            <p>WHATSAPP: +91 97566 20538</p>
                        </address>
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
                                    className="absolute top-2 right-0"
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

                {/* <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
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
                </div> */}
                <div className="mt-16 border-t border-neutral-700 pt-8 pb-4 text-neutral-400">
                    <div className="text-center text-xs">
                        <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-0">
                            <p>
                                Online booking system by Cnippet Labs ©
                                2025{" "}
                            </p>
                            <p>
                                Sea Hawk Adventures © 2025. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="mt-5 flex flex-wrap justify-center gap-4 md:mt-2">
                            <Link href="/sitemap" className="hover:text-white">
                                Sitemap
                            </Link>
                            <Link
                                href="/copyright"
                                className="hover:text-white"
                            >
                                Copyright Statement
                            </Link>
                            <Link href="/terms" className="hover:text-white">
                                Terms & Conditions
                            </Link>
                            <Link href="/privacy" className="hover:text-white">
                                Privacy Policy
                            </Link>
                            <Link href="/cookies" className="hover:text-white">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
