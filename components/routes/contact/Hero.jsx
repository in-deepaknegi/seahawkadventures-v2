"use client";
import Image from "next/image";
import React from "react";
import { MapPinned, PhoneOutgoing, Mail, PenLine } from "lucide-react";

import S1 from "@/public/svg/watch.svg";
import S2 from "@/public/svg/address.svg";
import S3 from "@/public/svg/contact.svg";

const Hero = () => {
    return (
        <section className="relative isolate z-20 -mt-[6.5rem] bg-[#f5f5f5] py-24 font-swir sm:py-28">
            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
                <div className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-6">
                    <p className="mt-2 text-4xl font-bold text-black sm:text-6xl">
                        Contact us
                    </p>

                    <p className="mt-auto max-w-xl text-center font-swim text-2xl leading-8 text-gray-600">
                        Uncover what sets us apart and makes us your ideal choice for
                        quality sports beverages
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-full px-6 lg:px-0">
                <div className="relative mx-auto flex max-w-full lg:max-w-[70%]">
                    <ul className="grid w-full gap-x-2 gap-y-6 md:grid-cols-3">
                        <li className="flex h-full flex-col items-center gap-3">
                            <div className="flex flex-col items-center">
                                <Image src={S1} alt="" className="w-16" />
                                <span className="mt-3 font-swim text-2xl text-gray-800">
                                    Open hours
                                </span>
                            </div>
                            <div className="h-full w-full rounded-xl bg-white px-6 py-4 text-center">
                                <ul>
                                    <li className="my-1 text-md text-gray-700">
                                        Mon-Fri: 9 AM - 6 PM
                                    </li>
                                    <li className="my-1 text-md text-gray-700">
                                        Saturday: 9 AM - 4 PM
                                    </li>
                                    <li className="my-1 text-md text-gray-700">Sunday: Closed</li>
                                </ul>
                            </div>
                        </li>

                        <li className="relative flex h-full flex-col items-center gap-3 overflow-hidden">
                            <div className="flex flex-col items-center">
                                <Image src={S2} alt="" className="w-16" />
                                <span className="mt-3 font-swim text-2xl text-gray-800">
                                    Address
                                </span>
                            </div>
                            <div className="flex h-full w-full flex-col justify-between rounded-xl bg-white px-6 py-4 text-center text-gray-700">
                                <p className=" my-1 text-md">
                                    Badrinath Rd, Shivpuri, Rishikesh, Uttarakhand 249192
                                </p>
                                <a
                                    href="#map"
                                    className="mt-2 flex items-center justify-center gap-4 hover:text-primary"
                                >
                                    <MapPinned className="h-5 w-5" />
                                    View on map
                                </a>
                            </div>
                        </li>

                        <li className="flex h-full flex-col items-center gap-3">
                            <div className="flex flex-col items-center">
                                <Image src={S3} alt="" className="w-16" />
                                <span className="mt-3 font-swim text-2xl text-gray-800">
                                    Get in Touch
                                </span>
                            </div>
                            <div className="h-full w-full rounded-xl bg-white px-6 py-4 text-center text-gray-700">
                                <ul className="flex flex-col items-center justify-center">
                                    <li className="my-1 text-md text-gray-700">
                                        <a
                                            href="tel:+91 97566 20538"
                                            className="flex items-center gap-2"
                                        >
                                            <PhoneOutgoing className="h-5 w-5" />
                                            +91 97566 20538
                                        </a>
                                    </li>
                                    <li className="my-1 text-md text-gray-700">
                                        <a
                                            href="mailto:office@seahawkadventures.com"
                                            className="flex items-center gap-2"
                                        >
                                            <Mail className="h-5 w-5" />
                                            office@seahawkadventures.com
                                        </a>
                                    </li>
                                </ul>
                                <a
                                    href="#contact-form"
                                    className="mt-2 flex items-center justify-center gap-4 hover:text-primary"
                                >
                                    <PenLine className="h-5 w-5" />
                                    Contact form
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;