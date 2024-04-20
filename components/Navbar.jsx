"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Bg from "@/public/misc/bg.jpg";
import Logo from "@/public/images/logo-b.png";
import { ChevronDown, Search, PhoneOutgoing, Mail, MoveRight } from "lucide-react";
import R1 from '@/public/images/rafting/m00.jpg'
import K1 from '@/public/images/kayak/k06.jpg'
import M1 from '@/public/images/expedition/mu00.jpg'

const menu = [
    {
        title: "Rafting",
        image: R1,
        href: "/rafting",
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
        width: "max-w-[33rem]"
    },
    {
        title: "Kayak School",
        image: K1,
        href: "/kayak",
        solutions: [
            {
                name: "Beginner Course",
                description: "Read more about our 4 days kayak lesson.",
                href: "/kayak/beginners-course",
            },
            {
                name: "Intermediate Course",
                description: "Read more about our 7 days kayak lesson.",
                href: "/kayak/intermediate-course",
            },
        ],
        width: "max-w-[35rem]"
    },
    {
        title: "Multi-day trip",
        image: M1,
        href: "/multi-day-trip",
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
        width: "max-w-[33rem]"
    },
    {
        title: "Camping Package",
        image: K1,
        href: "#",
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
];


const Navbar = () => {
    const [mobilemenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobilemenu);
    };

    const [open, setOpen] = useState(null);

    const toggleOpen = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <>
            <nav className=" bg-[#f5f5f5] relative isolate z-30 font-swir border-b">
                <div className=" mx-auto max-w-[85%] py-1.5">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-black flex flex-col md:flex-row items-center justify-between text-sm my-auto mt-1 gap-6">
                            <div className="flex lg:flex-none">
                                <a href="/" className="-m-1.5 p-1.5 text-2xl font-medium flex flex-wrap justify-center gap-4 items-center">
                                    <Image
                                        src={Logo}
                                        priority="true"
                                        alt="site-logo"
                                        className="w-[10rem] md:w-[13rem]"
                                    />
                                    <span className="mt-auto text-lg md:text-4xl font-paris">It&apos;s time to paddle</span>
                                </a>
                            </div>
                            <div className="hidden md:flex flex-col gap-3 text-base">
                                <div className="flex items-center gap-2">
                                    <PhoneOutgoing className="w-5 h-5 text-gray-800" />
                                    <a href="tel:+91 97566 20538" className="font-medium">+91 97566 20538</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-gray-800" />
                                    <a href="mailto:office@seahawkadventures.com" className="font-medium">
                                        office@seahawkadventures.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="sticky top-0 isolate z-40 bg-[#0000] py-4 md:py-3 font-swim opacity-100 backdrop-blur-sm shadow-sm">
                <div className="mx-auto flex max-w-full items-center justify-between px-6 md:max-w-[87%] lg:px-0 transition-all duration-700 ease-in">

                    <nav className={`hidden rounded-3xl bg-[#ffffff3e] p-1.5 opacity-100 shadow-md backdrop-blur-sm lg:flex lg:gap-x-1`}>
                        <Link
                            href="/"
                            className="text-black uppercase text-base px-6 hover:bg-[#f5f5f5] rounded-full flex items-center"
                        >
                            home
                        </Link>
                        {menu.map((item, i) => (
                            <div key={i} className="relative hidden lg:flex lg:gap-x-2">
                                <div className="border h-[40%] border-gray-300 my-auto"></div>
                                <button
                                    onMouseEnter={() => toggleOpen(i)}
                                    onMouseLeave={() => toggleOpen(i)}
                                    className="inline-flex justify-center py-2 px-4 items-center gap-x-1 leading-6 hover:bg-[#f5f5f5] rounded-full"
                                >
                                    <span className="text-black uppercase text-base">{item.title}</span>
                                    <ChevronDown className={`h-4 w-4 text-black ${open === i ? 'rotate-180 transition-all ease-in duration-300' : ''}`} aria-hidden="true" />

                                    {open === i && (
                                        <div className="absolute -left-5 z-50 mt-3 top-5 pt-6 flex w-screen max-w-max px-4 "
                                        >
                                            <div className={`w-screen ${item.width} flex-auto overflow-hidden rounded-3xl bg-[#f5f5f5] bg-clip-padding backdrop-filter backdrop-blur-md text-[0.9005rem] leading-6 shadow-lg ring-1 ring-gray-900/5`}>
                                                <div className="p-2.5 flex flex-row space-x-3">
                                                    {item.image && (
                                                        <Image
                                                            src={item.image}
                                                            alt="image"
                                                            loading="eager"
                                                            className="w-[15rem] rounded-2xl object-cover brightness-110"
                                                        />
                                                    )}

                                                    <div className="p-2 w-full flex flex-col justify-between">
                                                        <div>
                                                            {item.solutions.map((c, j) => (
                                                                <a href={c.href}
                                                                    key={j}
                                                                    className="flex rounded-lg py-0.5 px-4 hover:bg-blue-100"
                                                                >
                                                                    <div className="text-left">
                                                                        <h3
                                                                            className="text-base text-black"
                                                                        >
                                                                            {c.name}
                                                                        </h3>
                                                                        <p className="text-gray-500">
                                                                            {c.description}
                                                                        </p>

                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                        <a href={item.href} className="text-gray-900 text-left pl-4 mt-2 flex gap-2 hover:text-blue-600/90">
                                                            View more
                                                            <MoveRight className="w-4" />
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )}
                                </button>
                            </div>
                        ))}

                        <div className="border h-4 border-gray-300 my-auto"></div>

                        <Link
                            href="/"
                            className="text-black mx-1 uppercase text-base px-4 hover:bg-[#f5f5f5] rounded-full flex items-center"
                        >
                            Gallery
                        </Link>
                        <div className="border h-4 border-gray-300 my-auto"></div>

                        <Link
                            href="/about"
                            className="text-black mx-1 uppercase text-base px-4 hover:bg-[#f5f5f5] rounded-full flex items-center"
                        >
                            About us
                        </Link>
                        <div className="border h-4 border-gray-300 my-auto"></div>

                        <Link
                            href="/contacts"
                            className="text-black mx-1 uppercase text-base px-4 hover:bg-[#f5f5f5] rounded-full flex items-center"
                        >
                            Contact us
                        </Link>
                    </nav>

                    <div className="flex lg:hidden justify-end ml-auto">

                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="-m-2.5 rounded-md p-4 text-white"
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
            </header>

            {mobilemenu && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-y-0 right-0 top-0 z-50 h-full w-full overflow-y-auto bg-white/70 bg-opacity-80 bg-clip-padding px-6 backdrop-blur-md backdrop-filter sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className=" w-full rounded-md p-4 text-gray-900"
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="ml-auto mr-1.5 mt-3.5 md:mr-3.5 md:mt-0.5 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                            </a>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {menu.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {link.title}
                                        </a>
                                    ))}
                                </div>

                                <div className="py-6">
                                    <a
                                        href="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;