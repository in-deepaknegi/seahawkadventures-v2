import React from "react";
import { delay, motion } from "framer-motion";

export default function CTASection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    return (
        <section className="relative h-[50vh] bg-black text-white">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1709810953776-ee6027ff8104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Adventure Background"
                    className="h-full w-full object-cover object-center opacity-50"
                />
            </div>
            <div className="absolute bottom-0 z-10 h-[30vh] w-full bg-gradient-to-t from-black"></div>
            <div className="relative z-40 mx-auto flex h-full max-w-7xl flex-col items-center justify-end px-4 text-center">
                <motion.span
                    className="mb-4 text-sm uppercase tracking-wider"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                >
                    SEA HAWK ADVENTURES
                </motion.span>
                <motion.h2
                    className="mb-8 text-4xl font-insm md:text-6xl"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Experience the ultimate
                    <br />
                    Adrenaline rush
                </motion.h2>
                <motion.button
                    className="bg-blue-600/95 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.7 }}

                >
                    About Us
                </motion.button>
            </div>
        </section>
    );
}
