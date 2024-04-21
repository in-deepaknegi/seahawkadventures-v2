"use client";
import Image from "next/image";
import React from "react";
import { MapPinned, PhoneOutgoing, Mail, PenLine } from "lucide-react";

import S1 from '@/public/svg/watch.svg'
import S2 from '@/public/svg/address.svg'
import S3 from '@/public/svg/contact.svg'

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

            <div className="mx-auto mt-16 max-w-full lg:px-0 px-6">
                <div className="relative mx-auto flex max-w-full lg:max-w-[70%]">
                    <ul className="grid w-full md:grid-cols-3 gap-y-6 gap-x-2">
                        <li className="flex flex-col h-full items-center gap-3">
                            <div className="flex flex-col items-center">
                                <Image
                                    src={S1}
                                    alt=""
                                    className="w-16"
                                />
                                <span className="mt-3 font-swim text-2xl text-gray-800">
                                    Open hours
                                </span>
                            </div>
                            <div className="rounded-xl w-full h-full bg-white px-6 py-4 text-center">
                                <ul>
                                    <li className="text-gray-700 text-md my-1">
                                        Mon-Fri: 9 AM - 6 PM
                                    </li>
                                    <li className="text-gray-700 text-md my-1">
                                        Saturday: 9 AM - 4 PM
                                    </li>
                                    <li className="text-gray-700 text-md my-1">
                                        Sunday: Closed
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="relative flex flex-col h-full items-center gap-3 overflow-hidden">
                            <div className="flex flex-col items-center">
                                <Image
                                    src={S2}
                                    alt=""
                                    className="w-16"
                                />
                                <span className="mt-3 font-swim text-2xl text-gray-800">
                                    Address
                                </span>
                            </div>
                            <div className="rounded-xl flex flex-col justify-between w-full h-full bg-white text-gray-700 px-6 py-4 text-center">
                                <p className=" text-md my-1">
                                    Badrinath Rd, Shivpuri, Rishikesh, Uttarakhand 249192
                                </p>
                                <a href="#map" className="mt-2 flex items-center justify-center gap-4 hover:text-primary">
                                    <MapPinned className="w-5 h-5"  />
                                    View on map
                                </a>
                            </div>
                        </li>

                        <li className="flex flex-col h-full items-center gap-3">
                            <div className="flex flex-col items-center">
                                <Image
                                    src={S3}
                                    alt=""
                                    className="w-16"
                                />
                                <span className="mt-3 font-swim text-2xl text-gray-800">
                                    Get in Touch
                                </span>
                            </div>
                            <div className="rounded-xl w-full h-full bg-white text-gray-700 px-6 py-4 text-center">
                                <ul className="flex flex-col justify-center items-center">
                                    <li className="text-gray-700 text-md my-1">
                                        <a href="tel:+91 97566 20538" className="flex gap-2 items-center">
                                            <PhoneOutgoing className="w-5 h-5" />
                                            +91 97566 20538
                                        </a>
                                    </li>
                                    <li className="text-gray-700 text-md my-1">
                                        <a href="mailto:office@seahawkadventures.com" className="flex gap-2 items-center">
                                            <Mail className="w-5 h-5" />
                                            office@seahawkadventures.com
                                        </a>
                                    </li>
                                </ul>
                                <a href="#contact-form" className="flex mt-2 items-center justify-center gap-4 hover:text-primary">
                                    <PenLine className="w-5 h-5" />
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