"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import { NavbarProps } from '@/types/global';
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@/components/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC<NavProps> = (props) => {
    const { site, links, dropdown } = {
        ...NavbarDefaults,
        ...props
    };
    const pathname = usePathname();
    const [scroll, setScroll] = useState(true);
    const [openIndex, setOpenIndex] = useState<number | null>(null); 

    const profileVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 },
        },
        exit: { opacity: 0, y: -10 },
    };


    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const setScrollY = () => {
            if (scrollY > 1) {
                setScroll(false);
                setOpenIndex(null);
            } else {
                setScroll(true);
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpenIndex(null); // Close the dropdown if click is outside
            }
        };
        document.addEventListener("scroll", setScrollY);
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("scroll", setScrollY);
            document.removeEventListener("click", handleClickOutside);
        };
    });
    return (
        <>
            <nav className={`top-0 z-50 border-b font-insr backdrop-blur-sm font-swir sticky w-full ${scroll? 'bg-white/10':'bg-white/50'} transition-all ease-in duration-300`}>
                <div className=" mx-auto max-w-full py-1.5 md:max-w-[95%]">
                    <div className="mx-auto px-4 sm:px-6 lg:px-0">
                        <div className="my-auto mt-1 flex flex-row items-center justify-between gap-6 text-sm text-black">
                            <div className="flex lg:flex-none">
                                <a
                                    href="/"
                                    className="-m-1.5 flex flex-wrap items-center justify-center gap-4 p-1.5 text-2xl"
                                >
                                    <Image
                                        src={site.logo.src}
                                        alt="site-logo"
                                        width={1280}
                                        height={780}
                                        className="w-40 md:w-48"
                                    />
                                    <span className="mt-auto hidden font-paris text-lg md:block md:text-3xl">
                                        It&apos;s time to paddle
                                    </span>
                                </a>
                            </div>


                            <div
                                ref={menuRef}
                                className="hidden items-center gap-5 ml-auto text-base md:flex"
                            >

                                {dropdown.map((item, j) => (
                                    <button
                                        key={j}
                                        onClick={() => {
                                            setOpenIndex(openIndex === j ? null : j); // Toggle dropdown on click
                                        }}
                                        className="relative"
                                    >
                                        <span className="flex items-center gap-1">
                                            <span className="text-black uppercase font-insm text-sm">{item.title}</span>
                                            <ArrowDownIcon
                                                className={`size-4 text-black ${openIndex == j ? "rotate-180" : ""} transition-all duration-400 ease-in-out`}
                                            />
                                        </span>

                                        {openIndex === j && (
                                            <motion.div
                                                initial="hidden"
                                                animate={openIndex === j ? "visible" : "hidden"}
                                                exit="exit"
                                                variants={profileVariants}
                                                className="absolute z-50 w-[14.7rem]"
                                            >
                                                <div className="mt-8 flex flex-col w-auto justify-center items-center gap-1 rounded-lg bg-white border px-3 py-3 backdrop-blur-md">
                                                    {item.sub.map((sup, k) => (
                                                        <Link key={k} href={sup.url} className="text-black hover:bg-blue-100/70 rounded-lg p-1 flex items-center gap-3">
                                                            <Image
                                                                src={item.thumbnail.src}
                                                                alt=""
                                                                width={1080}
                                                            height={680}
                                                            className="w-5"
/>
                                                            {sup.title}
                                                        </Link>
                                                    ))}
                                                    
                                                    <Link href={item.url} className="text-[0.785rem] mt-2 text-center">
                                                    Explore more about {item.title}
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </button>
                                ))}

                                {links.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.url}
                                        className={`rounded-lg font-insm uppercase text-sm px-2 py-3.5 ${pathname === item.url ? "bg-white text-black" : "text-black"}`}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                            <div className="ml-auto flex md:hidden">
                                <button
                                    // onClick={toggleMobileMenu}
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
                            <div className="hidden flex-col gap-3 font-mono text-base text-black md:flex">

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;


type NavProps = React.ComponentPropsWithoutRef<"section"> & Partial<NavbarProps>;

const NavbarDefaults: NavbarProps = {
    site: {
        name: "Cnippet",
        logo: {
            src: "/images/og/logo-1.png",
            alt: "cnippet site logo",
        },
    },
    links: [
        {
            title: "Gallery",
            url: "#",
        },
        {
            title: "About Us",
            url: "#",
        },
    ],
    dropdown: [
        {
            title: "Rafting",
            url: "/rafting",
            thumbnail: {
                src: "/images/svg/compass.svg",
                alt: ""
            },
            sub: [
                {
                    title: "12 Km Rafting",
                    url: "#",
                },
                {
                    title: "12 Km Rafting",
                    url: "#",
                },
                {
                    title: "12 Km Rafting",
                    url: "#",
                },

            ],
        },
        {
            title: "Kayak School",
            url: "#",
            thumbnail: {
                src: "/images/svg/boat.svg",
                alt: ""
            },
            sub: [
                {
                    title: "Beginners Course",
                    url: "#",
                },
                {
                    title: "Intermediate Course",
                    url: "#",
                },
            ],
        },
        {
            title: "Multi-day Trip",
            url: "#",
            thumbnail: {
                src: "/images/svg/tent.svg",
                alt: ""
            },
            sub: [
                {
                    title: "Rafting Expedition",
                    url: "#",
                },
                {
                    title: "Kayak Expedition",
                    url: "#",
                },
            ],
        },
        {
            title: "Camping Package",
            url: "#",
            thumbnail: {
                src: "/images/svg/tent.svg",
                alt: ""
            },
            sub: [
                {
                    title: "Only Camping",
                    url: "#",
                },
                {
                    title: "Combo Package",
                    url: "#",
                },
            ],
        },
    ],
};

