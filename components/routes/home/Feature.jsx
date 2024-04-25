"use client";
import React from "react";
import Image from "next/image";
import S1 from "@/public/images/svg/compass.svg";
import S2 from "@/public/images/svg/boat.svg";
import S3 from "@/public/images/svg/tent.svg";

import { MoveRight } from "lucide-react";

const features = [
    {
        title: "Rafting",
        para: "Experience the thrill of the fast river with our expert guides, ensuring a safe and unforgettable adventure.",
        href: "/rafting",
        svg: S1,
    },
    {
        title: "Kayaking",
        para: "Join our experienced kayakers for an exciting trip down fast rivers, ensuring your safety and a great time.",
        href: "#",
        svg: S2,
    },
    {
        title: "Expedition",
        para: "Join our experienced adventurers on a fun camping trip. Explore the outdoors, stay safe, and have a great time with our team.",
        href: "#",
        svg: S3,
    },
];

const Feature = () => {
    return (
        <section className="relative isolate -mt-1 overflow-hidden bg-[#f5f5f5] py-24 font-swim sm:py-16">
            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
                <div className="mf:pb-16 relative mx-auto flex flex-col justify-between pb-6 md:flex-row">
                    <div className="flex flex-col justify-between gap-8">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 text-blue-300"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V10M21 15.21C20.9318 15.2141 20.7357 15.21 20.6667 15.21C19.6422 15.21 18.7077 14.7524 18 14C17.2923 14.7524 16.3578 15.2099 15.3333 15.2099C15.2643 15.2099 15.0684 15.2141 15.0002 15.21C15.0002 15.21 15 15.9855 15 16.3979C15 18.6121 16.2748 20.4725 18 21C19.7252 20.4725 21 18.6121 21 16.3979C21 15.9855 21 15.21 21 15.21Z"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{" "}
                            </g>
                        </svg>
                        <p className="mt-2 text-3xl font-bold text-black sm:text-5xl">
                            Select your adventure
                        </p>
                    </div>

                    <p className="mt-6 max-w-xl font-swim text-2xl leading-8 text-gray-600 md:mt-auto md:text-right">
                        Dive into the spirit of adventures: discover the blend of fun and
                        expertise in every expedition
                    </p>
                </div>

                <hr />

                <div className="mx-auto max-w-2xl pt-6 md:px-10 md:pt-16 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-20 gap-y-8 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, i) => (
                            <a
                                key={i}
                                href={feature.href}
                                className="group relative flex h-full flex-col overflow-hidden"
                            >
                                <dt className="flex flex-row items-center gap-6 text-2xl text-black">
                                    <Image src={feature.svg} alt="" className="w-12" />
                                    {feature.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-500">
                                    <p className="flex-auto">{feature.para}</p>
                                </dd>
                                <p className="mt-3 flex -translate-x-28 gap-3 transition-all duration-300 ease-linear group-hover:translate-x-1">
                                    <span className=" absolute inset-0 w-full"></span>
                                    View more
                                    <MoveRight className="w-4" />
                                </p>
                            </a>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Feature;