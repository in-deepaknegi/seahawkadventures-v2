"use client"
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";
import { Clock, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import Link from "next/link";

const menuItems = [
    { label: "Home", href: "#" },
    { label: "Activities", href: "#" },
    { label: "About", href: "#" },
    { label: "Events", href: "#" },
    { label: "Blog", href: "#" },
];

const Navbar = () => {
    return (
        <>
            <motion.div
                className="hidden bg-gray-50 py-3.5 text-[0.82rem] text-gray-500 md:block"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mx-auto flex w-full max-w-[90%] flex-row justify-between">
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>
                                Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>+91 123-456-7890</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>Rishikesh, Uttarakhand, India</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="#"
                            className="transition-colors hover:text-blue-600"
                        >
                            <motion.span whileHover={{ scale: 1.1 }}>
                                Facebook
                            </motion.span>
                        </Link>
                        <Link
                            href="#"
                            className="transition-colors hover:text-blue-600"
                        >
                            <motion.span whileHover={{ scale: 1.1 }}>
                                Twitter
                            </motion.span>
                        </Link>
                        <Link
                            href="#"
                            className="transition-colors hover:text-blue-600"
                        >
                            <motion.span whileHover={{ scale: 1.1 }}>
                                Instagram
                            </motion.span>
                        </Link>
                    </div>
                </div>
            </motion.div>

            <div className="sticky top-0 z-50 mb-8 w-full bg-white font-insr">
                <div className="mx-auto flex h-20 max-w-[90%] items-center justify-between">
                    <motion.div
                        className=""
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/images/meta/logo.png"
                                alt=""
                                width={1080}
                                height={680}
                                className="size-10 md:size-12"
                            />
                            <span className="font-insm text-xl text-gray-900 md:text-2xl">
                                Sea Hawk Adventures
                            </span>
                        </Link>
                    </motion.div>
                    <nav className="hidden items-center space-x-8 font-insm md:flex">
                        {menuItems.map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                className="group relative font-medium text-neutral-900 transition-colors hover:text-blue-600"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-blue-600 transition-transform group-hover:scale-x-100" />
                            </motion.a>
                        ))}
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                        >
                            <ShoppingBag className="h-6 w-6 text-gray-700" />
                            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                                0
                            </span>
                        </motion.div>
                    </nav>
                    <MobileMenu />
                </div>
            </div>
        </>
    );
};

export default Navbar;
