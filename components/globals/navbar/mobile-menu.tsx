"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-neutral-900"
            >
                <Menu className="h-6 w-6" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{
                            height: "100vh",
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{
                            height: 0,
                            transition: {
                                duration: 0.7,
                                delay: 0.5,
                            },
                        }}
                        className="absolute left-0 right-0 top-0 bg-black p-4 shadow-lg"
                    >
                        <div className="flex justify-between">
                            <motion.div
                                className="flex items-center space-x-2"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        delay: 0.3,
                                        staggerChildren: 0.2, // stagger for each item
                                        duration: 0.5,
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: 0.3,
                                        staggerChildren: 0.1, // stagger exit for each item
                                        ease: "easeOut",
                                    },
                                }}
                            >
                                <Image
                                    src="/images/meta/logo.png"
                                    alt=""
                                    width={1080}
                                    height={680}
                                    className="size-10"
                                />
                                <span className="font-satm text-xl text-gray-100">
                                    Sea Hawk Adventures
                                </span>
                            </motion.div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2"
                            >
                                <X className="h-6 w-6 text-white" />
                            </button>
                        </div>

                        {/* Animate the list items with a fade-left effect */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    delay: 0.3,
                                    staggerChildren: 0.2, // stagger for each item
                                    duration: 0.5,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.3,
                                    staggerChildren: 0.5, // stagger exit for each item
                                    ease: "easeOut",
                                },
                            }}
                            className="mt-10 flex flex-col space-y-3 px-4"
                        >
                            <motion.a
                                href="#"
                                className="flex items-center gap-4 py-2 text-gray-200 hover:text-blue-600"
                                initial={{ x: -20 }}
                                animate={{ x: 0 }}
                                exit={{ x: 20 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                Home
                                <ArrowRight className="size-4 text-white" />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="py-2 text-gray-200 hover:text-blue-600"
                                initial={{ x: -24 }}
                                animate={{ x: 0 }}
                                exit={{ x: 24 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                Activities
                            </motion.a>
                            <motion.a
                                href="#"
                                className="py-2 text-gray-200 hover:text-blue-600"
                                initial={{ x: -26 }}
                                animate={{ x: 0 }}
                                exit={{ x: 26 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                About
                            </motion.a>
                            <motion.a
                                href="#"
                                className="py-2 text-gray-200 hover:text-blue-600"
                                initial={{ x: -28 }}
                                animate={{ x: 0 }}
                                exit={{ x: 28 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                Events
                            </motion.a>
                            <motion.a
                                href="#"
                                className="py-2 text-gray-200 hover:text-blue-600"
                                initial={{ x: -29 }}
                                animate={{ x: 0 }}
                                exit={{ x: 29 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                Blog
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
