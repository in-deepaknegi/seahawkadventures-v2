import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { packagesConfig } from "@/config/package"; // Import packagesConfig

import { fadeUp } from "@/lib/motion";
import Image from "next/image";

export default function AdventuresSection() {
    const [activeTab, setActiveTab] = useState<string>("rafting"); // State to track active tab
    const ref = useRef(null);

    // Find the data for the active tab
    const activeTabData = packagesConfig.find((tab) => tab.title === activeTab);

    return (
        <motion.section ref={ref} className="bg-white pt-32 font-insr">
            <div className="mx-auto max-w-[85%] px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <motion.span
                        className="font-insm text-sm uppercase tracking-wider text-gray-600"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        What we offer
                    </motion.span>
                    <motion.h2
                        className="mt-4 font-insr text-4xl text-gray-900 md:text-5xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Unleash your inner explorer, navigate the Untamed
                        Currents
                    </motion.h2>

                    <div
                        className="mx-auto mt-8 flex w-fit justify-center space-x-4 bg-[url(https://res.cloudinary.com/dkuixrz40/image/upload/v1735489454/deco-water.jpg)] bg-cover p-1"
                        style={{
                            objectFit: "cover",
                        }}
                    >
                        {/* Dynamic Tab Buttons */}
                        {packagesConfig.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(item.title)}
                                className={`px-6 py-2 font-insr text-xl ${
                                    activeTab === item.title
                                        ? "bg-white text-black"
                                        : "text-neutral-100"
                                }`}
                            >
                                {item.title.charAt(0).toUpperCase() +
                                    item.title.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Service Cards */}
                {activeTabData && (
                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {activeTabData.collection.map((service, i) => (
                            <div key={i} className="group relative shadow-lg">
                                <div
                                    className={`absolute -top-4 left-4 z-40 px-3 py-1 text-center text-white ${
                                        service.features.difficulty === "Easy"
                                            ? "bg-emerald-500"
                                            : ""
                                    } ${
                                        service.features.difficulty ===
                                        "Moderate"
                                            ? "bg-amber-500"
                                            : ""
                                    } ${
                                        service.features.difficulty ===
                                        "Challenging"
                                            ? "bg-rose-500"
                                            : ""
                                    }`}
                                >
                                    <div className="text-sm">
                                        {service.features.difficulty}
                                    </div>
                                </div>
                                <div className="relative h-[30rem] overflow-hidden">
                                    <Image
                                        src={service.image.src}
                                        alt={service.title}
                                        width={1080}
                                        height={680}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 z-20 h-52 w-full bg-gradient-to-t from-black/80 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 z-30 p-6 text-white">
                                    <h3 className="text-3xl">
                                        {service.title}
                                    </h3>
                                    <div
                                        className="mt-2 line-clamp-1 text-sm text-gray-300"
                                        dangerouslySetInnerHTML={{
                                            __html: service.description,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.section>
    );
}
