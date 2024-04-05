"use client"
import React, { useState } from "react";
import Image from "next/image";
import Bg from "@/public/misc/bg.jpg";
import Logo from "@/public/l2.jpg";
import { ChevronDown, Search } from "lucide-react";

import Link from "next/link";

import R1 from '@/public/images/rafting/m00.jpg'
import K1 from '@/public/images/kayak/k06.jpg'
import M1 from '@/public/images/expedition/mu00.jpg'


const menu = [
    {
        title: "Rafting",
        image: R1,
        solutions: [
            {
                name: "12 Km Rafting",
                description: "Read more about 12 km Rafting",
                href: "/rafting/12-km-rafting",
            },
            {
                name: "16 Km Rafting",
                description: "Read more about 16 km Rafting",
                href: "/rafting/16-km-rafting",
            },
            {
                name: "26 Km Rafting",
                description: "Read more about 26 km Rafting",
                href: "/rafting/26-km-rafting",
            },
        ],
        width: "max-w-[35rem]"
    },
    {
        title: "Kayak School",
        image: K1,
        solutions: [
            {
                name: "Beginner",
                description: "Read more about our 4 days kayak lesson.",
                href: "/kayak/beginners-course",
            },
            {
                name: "Intermediate",
                description: "Read more about our 7 days kayak lesson.",
                href: "/kayak/intermediate-course",
            },
        ],
        width: "max-w-[35rem]"
    },
    {
        title: "Multi-day trip",
        image: M1,
        solutions: [
            {
                name: "Rafting Expedition",
                description: "Book your next expedition with us.",
                href: "#",
            },
            {
                name: "Kayak Expedition",
                description: "Book your next expedition with us.",
                href: "#",
            },
        ],
        width: "max-w-[32rem]"
    },
    {
        title: "Camping Package",
        image: K1,
        solutions: [
            {
                name: "Only Camping",
                description: "Book your next expedition with us.",
                href: "#",
            },
            {
                name: "Combo Package",
                description: "(Rafting + Camping)",
                href: "#",
            },
        ],
        width: "max-w-[33rem]"
    },
    {
        title: "More Links",
        solutions: [
            {
                name: "About us",
                href: "/about",
            },
            {
                name: "Contact us",
                href: "/contacts",
            },
            {
                name: "Gallery",
                href: "/gallery",
            },
        ],
        width: "max-w-[10rem]"
    },
];

const Navbar = () => {

    const [open, setOpen] = useState(null);

    const toggleOpen = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <>
            <nav>
                <div className=" mx-auto max-w-[85%] py-3">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-black flex items-center justify-between text-sm my-auto mt-1 gap-6">
                            <div className="flex lg:flex-none">
                                <a href="/" className="-m-1.5 p-1.5 text-2xl font-medium flex gap-4 items-center">
                                    <Image
                                        src={Logo}
                                        priority="true"
                                        alt="site-logo"
                                        className="w-[13rem]"
                                    />
                                    <span className="paris mt-auto text-4xl">It&apos;s time to paddle</span>
                                </a>
                            </div>
                            <div className="flex flex-col gap-y-3 text-base ">
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-gray-800"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <a href="tel:+91 97566 20538" className="text-blue-600 font-medium">+91 97566 20538</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-gray-800"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                    <a href="mailto:office@seahawkadventures.com" className="text-blue-600 font-medium">
                                        office@seahawkadventures.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="w-full sticky top-0"
             data-aos="fade-up"
             data-aos-duration="500">
                <div
                    className="flex items-center justify-between border-b border-gray-100 bg-white px-6 lg:px-8 "
                    style={{
                        backgroundImage: "url('/misc/bg.jpg')",
                        backgroundPosition: "center",
                        backgroundSize: "fill",
                    }}
                >
                    <div className="w-full max-w-[90%] mx-auto flex justify-between">
                        <div className="hidden lg:flex items-center lg:gap-x-5">
                            <Link
                                href="/"
                                className="text-gray-100 font-semibold font-mono uppercase text-base tracking-wide hover:bg-blue-700 h-20 px-4 flex items-center"
                            >
                                home
                            </Link>
                            <div className='hidden lg:flex lg:gap-x-5'>
                                {menu.map((item, i) => (
                                    <div key={i} className="relative hidden lg:flex lg:gap-x-2">
                                        <button
                                            onMouseEnter={() => toggleOpen(i)}
                                            onMouseLeave={() => toggleOpen(i)}
                                            className="inline-flex justify-center hover:bg-blue-700 h-20 px-4 items-center gap-x-1 tracking-wide font-semibold leading-6 "
                                        >
                                            <span className="text-gray-100 font-mono uppercase text-base">{item.title}</span>
                                            <ChevronDown className={`h-5 w-5 text-white ${open === i ? 'rotate-180 transition-all ease-in duration-300' : ''}`} aria-hidden="true" />

                                            {open === i && (
                                                <div className="absolute -left-5 z-50 mt-5 top-10 pt-6 flex w-screen max-w-max px-4"
                                                >
                                                    <div className={`w-screen ${item.width} flex-auto overflow-hidden rounded-3xl bg-white bg-clip-padding backdrop-filter bg-opacity-80 backdrop-blur-md text-[0.9005rem] leading-6 shadow-lg ring-1 ring-gray-900/5`}
                                                    style={{
                                                        backgroundImage: "url('/misc/bg.jpg')",
                                                        backgroundPosition: "center",
                                                        backgroundSize: "fill",
                                                    }}>
                                                        <div className="p-2.5 flex flex-row space-x-3">
                                                            {item.image && (
                                                                <Image
                                                                    src={item.image}
                                                                    alt="image"
                                                                    className="w-[15rem] rounded-2xl object-cover brightness-110"
                                                                />
                                                            )}

                                                            <div className="p-2 flex flex-col">
                                                                {item.solutions.map((c, j) => (
                                                                    <a href={c.href}
                                                                        key={j}
                                                                        className="group relative flex rounded-lg py-1 px-4 hover:bg-gray-700/60"
                                                                    >
                                                                        <div className="text-left">
                                                                            <h3
                                                                                className="font-semibold text-white"
                                                                            >
                                                                                {c.name}
                                                                            </h3>
                                                                            <p className="mt-1 text-gray-500 font-medium">
                                                                                {c.description}
                                                                            </p>
                                                                        </div>
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:ml-8 lg:flex lg:flex-none lg:items-center lg:gap-4 lg:pl-8">
                            <Link href="#">
                                <Search className=" text-white" />
                            </Link>
                        </div>

                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-4 text-gray-900"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>


                </div>
            </header>
        </>
    );
};

export default Navbar;
