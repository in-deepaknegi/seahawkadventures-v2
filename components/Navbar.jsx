"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Bg from "@/public/misc/bg.jpg";
import Logo from "@/public/images/logo-b.png";
import {
    ChevronDown,
    Search,
    PhoneOutgoing,
    Mail,
    MoveRight,
} from "lucide-react";
import R1 from "@/public/images/rafting/m00.jpg";
import K1 from "@/public/images/kayak/k06.jpg";
import M1 from "@/public/images/expedition/mu00.jpg";

const menu = [
    {
        title: "Rafting",
        image: R1,
        href: "/rafting",
        sub: [
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
        width: "max-w-[33rem]",
    },
    {
        title: "Kayak School",
        image: K1,
        href: "/kayak",
        sub: [
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
        width: "max-w-[35rem]",
    },
    {
        title: "Multi-day trip",
        image: M1,
        href: "/multi-day-trip",
        sub: [
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
        width: "max-w-[33rem]",
    },
    {
        title: "Camping Package",
        image: K1,
        href: "#",
        sub: [
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
        width: "max-w-[33rem]",
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
            <nav className=" sticky top-0 isolate z-30 border-b bg-[#f5f5f5] font-swir md:relative">
                <div className=" mx-auto max-w-full py-1.5 md:max-w-[90%]">
                    <div className="mx-auto px-4 sm:px-6 lg:px-0">
                        <div className="my-auto mt-1 flex flex-row items-center justify-between gap-6 text-sm text-black">
                            <div className="flex lg:flex-none">
                                <a
                                    href="/"
                                    className="-m-1.5 flex flex-wrap items-center justify-center gap-4 p-1.5 text-2xl font-medium"
                                >
                                    <Image
                                        src={Logo}
                                        priority="true"
                                        alt="site-logo"
                                        className="w-[10rem] md:w-[12rem]"
                                    />
                                    <span className="mt-auto hidden font-paris text-lg md:block md:text-4xl">
                                        It&apos;s time to paddle
                                    </span>
                                </a>
                            </div>
                            <div className="ml-auto flex md:hidden">
                                <button
                                    onClick={toggleMobileMenu}
                                    type="button"
                                    className="mr-2 rounded-md p-1 text-black"
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
                            <div className="hidden flex-col gap-3 text-base md:flex">
                                <div className="flex items-center gap-2">
                                    <PhoneOutgoing className="h-5 w-5 text-gray-800" />
                                    <a href="tel:+91 97566 20538" className="font-medium">
                                        +91 97566 20538
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-gray-800" />
                                    <a
                                        href="mailto:office@seahawkadventures.com"
                                        className="font-medium"
                                    >
                                        office@seahawkadventures.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="sticky top-0 isolate z-40 hidden bg-[#0000] py-4 font-swim opacity-100 shadow-sm backdrop-blur-sm md:py-3 lg:block">
                <div className="mx-auto flex max-w-full items-center justify-between px-6 transition-all duration-700 ease-in md:max-w-[97%] lg:px-8">
                    <nav
                        className={`hidden rounded-3xl bg-[#ffffff3e] p-1.5 opacity-100 shadow-md backdrop-blur-sm lg:flex lg:gap-x-1`}
                    >
                        <Link
                            href="/"
                            className="flex items-center rounded-full px-6 text-base uppercase text-black hover:bg-[#f5f5f5]"
                        >
                            home
                        </Link>
                        {menu.map((item, i) => (
                            <div key={i} className="relative hidden lg:flex lg:gap-x-2">
                                <div className="my-auto h-[40%] border border-gray-300"></div>
                                <button
                                    onMouseEnter={() => toggleOpen(i)}
                                    onMouseLeave={() => toggleOpen(i)}
                                    className="inline-flex items-center justify-center gap-x-1 rounded-full px-4 py-2 leading-6 hover:bg-[#f5f5f5]"
                                >
                                    <span className="text-base uppercase text-black">
                                        {item.title}
                                    </span>
                                    <ChevronDown
                                        className={`h-4 w-4 text-black ${open === i ? "rotate-180 transition-all duration-300 ease-in" : ""}`}
                                        aria-hidden="true"
                                    />

                                    {open === i && (
                                        <div className="absolute -left-5 top-5 z-50 mt-3 flex w-screen max-w-max px-4 pt-6 ">
                                            <div
                                                className={`w-screen ${item.width} flex-auto overflow-hidden rounded-3xl bg-[#f5f5f5] bg-clip-padding text-[0.9005rem] leading-6 shadow-lg ring-1 ring-gray-900/5 backdrop-blur-md backdrop-filter`}
                                            >
                                                <div className="flex flex-row space-x-3 p-2.5">
                                                    {item.image && (
                                                        <Image
                                                            src={item.image}
                                                            alt="image"
                                                            loading="eager"
                                                            className="w-[15rem] rounded-2xl object-cover brightness-110"
                                                        />
                                                    )}

                                                    <div className="flex w-full flex-col justify-between p-2">
                                                        <div>
                                                            {item.sub.map((c, j) => (
                                                                <a
                                                                    href={c.href}
                                                                    key={j}
                                                                    className="flex rounded-lg px-4 py-0.5 hover:bg-blue-100"
                                                                >
                                                                    <div className="text-left">
                                                                        <h3 className="text-base text-black">
                                                                            {c.name}
                                                                        </h3>
                                                                        <p className="text-gray-500">
                                                                            {c.description}
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                        <a
                                                            href={item.href}
                                                            className="mt-2 flex gap-2 pl-4 text-left text-gray-900 hover:text-blue-600/90"
                                                        >
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

                        <div className="my-auto h-4 border border-gray-300"></div>

                        <Link
                            href="/gallery"
                            className="mx-1 flex items-center rounded-full px-4 text-base uppercase text-black hover:bg-[#f5f5f5]"
                        >
                            Gallery
                        </Link>
                        <div className="my-auto hidden h-4 border border-gray-300 xl:block"></div>

                        <Link
                            href="/about"
                            className="mx-1 hidden items-center rounded-full px-4 text-base uppercase text-black hover:bg-[#f5f5f5] xl:flex"
                        >
                            About us
                        </Link>
                        <div className="my-auto hidden h-4 border border-gray-300 xl:block"></div>

                        <Link
                            href="/contacts"
                            className="mx-1 hidden items-center rounded-full px-4 text-base uppercase text-black hover:bg-[#f5f5f5] xl:flex"
                        >
                            Contact us
                        </Link>
                    </nav>
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
                                className="-mr-3 ml-auto mt-2 h-6 w-6"
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
                                        <button
                                            key={i}
                                            onClick={() => toggleOpen(i)}
                                            href={link.href}
                                            className="-mx-3 block rounded-lg px-3 py-1 text-left text-base font-semibold leading-7 text-gray-900"
                                        >
                                            <span className="flex items-center gap-2">
                                                {link.title}
                                                <ChevronDown
                                                    className={`w-5 ${open === i ? " rotate-180" : ""} transition-all duration-500 ease-in-out`}
                                                />
                                            </span>

                                            {open === i && (
                                                <>
                                                    {link.sub.map((c, j) => (
                                                        <a
                                                            href={c.href}
                                                            key={j}
                                                            className="flex rounded-lg px-4 py-1.5"
                                                        >
                                                            <div className="text-left">
                                                                <h3 className="text-base text-gray-800">
                                                                    {c.name}
                                                                </h3>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </>
                                            )}
                                        </button>
                                    ))}
                                    <a
                                        href="/about"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        About Us
                                    </a>
                                    <a
                                        href="/contacts"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Contacts
                                    </a>
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
