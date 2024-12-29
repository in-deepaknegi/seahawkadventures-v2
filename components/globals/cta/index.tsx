import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Image from "next/image";

export default function CTASection() {
    return (
        <section className="relative h-[40vh] overflow-hidden bg-black text-white md:h-[50vh]">
            <div className="absolute inset-0">
                <Image
                    src="https://res.cloudinary.com/dkuixrz40/image/upload/v1735479492/water-rafting-T0100.jpg"
                    alt="Adventure Background"
                    width={1080}
                    height={680}
                    className="h-full w-full object-cover object-center opacity-50"
                />
            </div>
            <div className="absolute bottom-0 z-10 h-[30vh] w-full bg-gradient-to-t from-neutral-950"></div>
            <div className="relative z-40 mx-auto flex h-full max-w-7xl flex-col items-center justify-end px-4 text-center">
                <motion.span
                    className="mb-4 text-sm uppercase tracking-wider"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    SEA HAWK ADVENTURES
                </motion.span>
                <motion.h2
                    className="mb-8 font-insm text-4xl md:text-6xl"
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
