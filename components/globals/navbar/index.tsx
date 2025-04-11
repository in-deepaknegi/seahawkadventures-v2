"use client";
import React, { useEffect, useState } from "react";
import { Clock, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "motion/react";
import { MobileNav } from "./mobile-nav";
import { CommandMenu } from "@/components/command-menu";

const menuItems = [
    { label: "HOME", href: "/" },
    {
        label: "RAFTING",
        subItems: [
            {
                label: "12 KM RAFTING",
                href: "/adventure-in-rishikesh/river-rafting",
            },
            {
                label: "16 KM RAFTING",
                href: "/adventure-in-rishikesh/river-rafting",
            },
            {
                label: "26 KM RAFTING",
                href: "/adventure-in-rishikesh/river-rafting",
            },
        ],
    },
    {
        label: "KAYAKING",
        subItems: [
            { label: "BEGINNER COURSE", href: "#" },
            { label: "INTERMEDIATE COURSE", href: "#" },
            { label: "ADVANCED COURSE", href: "#" },
        ],
    },
    {
        label: "EXPEDITION",
        subItems: [
            {
                label: "RAFTING EXPEDITION",
                href: "/adventure-in-rishikesh/rafting-expedition",
            },
            {
                label: "KAYAKING EXPEDITION",
                href: "/adventure-in-rishikesh/kayaking-expedition",
            },
        ],
    },
    // { label: "WILDLIFE", href: "/wildlife" },
    {
        label: "More links",
        subItems: [
            { label: "About us", href: "/about" },
            { label: "Contact us", href: "/contact" },
            { label: "Terms & Conditions", href: "/terms" },
        ],
    },
];

const Navbar = () => {
    const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

    const handleOpenChange = (label: string, isOpen: boolean) => {
        setOpenStates((prev) => ({ ...prev, [label]: isOpen }));
    };

    const [scrollPosition, setScrollPosition] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrollPosition(true);
            } else {
                setScrollPosition(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div
                className={`relative z-50 hidden bg-black/80 px-4 py-2 text-white backdrop-blur-[2px] md:flex md:items-center md:justify-between`}
            >
                <div className="mx-auto flex w-full max-w-[90%] flex-row justify-between text-sm">
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>
                                Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00
                            </span>
                        </div>
                        <Link
                            href={`tel:+919756620538`}
                            target="_blank"
                            className="flex items-center space-x-2"
                        >
                            <Phone className="h-4 w-4" />
                            <span> +91 97566 20538</span>
                        </Link>
                        <Link
                            href="https://maps.app.goo.gl/ga3Bg1z1zrMJoDen9"
                            target="_blank"
                            className="flex items-center space-x-2"
                        >
                            <MapPin className="h-4 w-4" />
                            <span>Rishikesh, Uttarakhand, India</span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="https://www.facebook.com/seahawkadventure/"
                            target="_blank"
                            className="transition-colors hover:text-blue-600"
                        >
                            <motion.span whileHover={{ scale: 1.1 }}>
                                Facebook
                            </motion.span>
                        </Link>
                        <Link
                            href="#"
                            className="transition-colors hover:text-blue-600"
                        >
                            <motion.span whileHover={{ scale: 1.1 }}>
                                Twitter
                            </motion.span>
                        </Link>
                        <Link
                            href="https://www.instagram.com/seahawkadventures/"
                            target="_blank"
                            className="transition-colors hover:text-blue-600"
                        >
                            <motion.span whileHover={{ scale: 1.1 }}>
                                Instagram
                            </motion.span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="sticky top-0 z-50">
                {/* Top Bar */}

                {/* Navigation */}
                <div
                    className={`relative px-4 py-2 backdrop-blur-[2px] transition-all duration-300 ease-in md:px-12 md:py-4 ${scrollPosition ? "bg-black/60 text-white" : "bg-white/20 text-black"}`}
                >
                    <div className="">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                className="absolute top-4 left-12 hidden w-20 bg-white/90 p-2 backdrop-blur-xs md:block md:w-40 md:p-4"
                            >
                                <Image
                                    src="/images/logo.png"
                                    alt="Seahawk Adventure"
                                    width={160}
                                    height={60}
                                    className="object-contain"
                                />
                            </Link>
                            <div className="ml-auto hidden items-center space-x-6 md:flex">
                                {menuItems.map((item) => (
                                    <div key={item.label}>
                                        {item.subItems ? (
                                            <DropdownMenu
                                                open={openStates[item.label]}
                                                onOpenChange={(isOpen) =>
                                                    handleOpenChange(
                                                        item.label,
                                                        isOpen,
                                                    )
                                                }
                                            >
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        className="hover:text-blue-500"
                                                        onMouseEnter={() =>
                                                            handleOpenChange(
                                                                item.label,
                                                                true,
                                                            )
                                                        }
                                                        onMouseLeave={() =>
                                                            handleOpenChange(
                                                                item.label,
                                                                false,
                                                            )
                                                        }
                                                    >
                                                        {item.label}
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent
                                                    className="w-48 bg-white/90 backdrop-blur-sm"
                                                    onMouseEnter={() =>
                                                        handleOpenChange(
                                                            item.label,
                                                            true,
                                                        )
                                                    }
                                                    onMouseLeave={() =>
                                                        handleOpenChange(
                                                            item.label,
                                                            false,
                                                        )
                                                    }
                                                >
                                                    {item.subItems.map(
                                                        (subItem) => (
                                                            <DropdownMenuItem
                                                                key={
                                                                    subItem.label
                                                                }
                                                                className="focus:bg-blue-50"
                                                            >
                                                                <Link
                                                                    href={
                                                                        subItem.href
                                                                    }
                                                                    className="w-full"
                                                                >
                                                                    {
                                                                        subItem.label
                                                                    }
                                                                </Link>
                                                            </DropdownMenuItem>
                                                        ),
                                                    )}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "transition-colors hover:text-blue-500",
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {/* <div className="md:hidden">
                                <MobileMenu />
                            </div> */}

                            <Link href="/" className="block md:hidden">
                                <Image
                                    src="/images/meta/logo.png"
                                    alt="Seahawk Adventure"
                                    width={160}
                                    height={60}
                                    className="w-10 object-contain"
                                />
                            </Link>
                            <CommandMenu />
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
