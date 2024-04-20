"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Bg from "@/public/misc/bg.jpg";
import Logo from "@/public/images/logo-b.png";
import { ChevronDown, Search, PhoneOutgoing, Mail, MoveRight } from "lucide-react";

const links = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Contact",
        url: "/contacts",
    },
    // add more data here ...
];

const Navbar = () => {
    const [mobilemenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobilemenu);
    };

    return (
        <>
            <nav className=" bg-[#f5f5f5] relative isolate z-30 font-swir">
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

            <header className="sticky top-0 isolate z-40 overflow-hidden bg-[#0000] py-4 md:py-3 font-swim opacity-100 backdrop-blur-sm shadow-sm">
                <div className="mx-auto flex max-w-full items-center justify-between px-6 md:max-w-[85%] lg:px-8 transition-all duration-700 ease-in">
                    
                    <nav className={`hidden rounded-3xl bg-[#ffffff3e] p-1.5 opacity-100 shadow-md backdrop-blur-sm lg:flex lg:gap-x-1`}>
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.url}
                                className="rounded-3xl px-4 py-2 text-base font-medium leading-6 text-gray-900 hover:bg-white/90"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden lg:flex lg:items-center">
                        {/* <Link
                        href="#"
                        className="-my-2.5 inline-flex justify-center rounded-3xl bg-white px-6 py-1.5 text-base text-black"
                    >
                        Learn more
                    </Link> */}
                        <Link
                            href="#"
                            className="inline-flex justify-center rounded-3xl bg-primary px-6 py-1.5 text-base text-white"
                        >
                            <span>
                                Get treks <span aria-hidden="true">→</span>
                            </span>
                        </Link>
                    </div>
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
                                    {links.map((link) => (
                                        <a
                                            key={link.id}
                                            href={link.url}
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