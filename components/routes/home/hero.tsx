import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Logo from "@/components/logo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Index() {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="mx-auto max-w-full md:max-w-[90%]">
                    <div className="relative h-[80vh] md:h-[62vh]">
                        <motion.video
                            autoPlay
                            loop
                            muted
                            className="h-full w-full overflow-hidden object-cover"
                        >
                            <source src="/video/vhc1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </motion.video>

                        <div className="absolute bottom-5 left-0 z-30 w-full md:bottom-10 md:px-10">
                            <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                                <motion.h1
                                    className="font-oggm text-center text-5xl text-white md:text-left lg:text-7xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Experience the <br />
                                    <span className="text-[#2f47db]">
                                        {" "}
                                        Thrill{" "}
                                    </span>
                                    of Adventure
                                </motion.h1>

                                <Link
                                    href="/adventure-in-rishikesh/river-rafting"
                                    className="mt-auto flex items-center gap-2 rounded-lg bg-[#2f47db] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-800"
                                >
                                    Book Adventure{" "}
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="absolute bottom-0 h-[40vh] md:h-[20vh] w-full bg-gradient-to-t from-black/90" />
                    </div>
                </div>
                <Logo />
            </section>
        </>
    );
}
