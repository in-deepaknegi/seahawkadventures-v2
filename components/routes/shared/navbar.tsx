"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const menuItems = [
    { label: "Home", href: "/" },
    {
        label: "Rafting",
        subItems: [
            {
                label: "12 KM RAFTING",
                href: "/packages/beginner-rafting-adventure",
            },
            {
                label: "16 KM RAFTING",
                href: "/packages/beginner-rafting-adventure",
            },
            {
                label: "26 KM RAFTING",
                href: "/packages/beginner-rafting-adventure",
            },
        ],
    },
    {
        label: "Kayaking",
        subItems: [
            { label: "BEGINNER COURSE", href: "#" },
            { label: "INTERMEDIATE COURSE", href: "#" },
            { label: "ADVANCED COURSE", href: "#" },
        ],
    },
    {
        label: "Expedition",
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
    { label: "Gallery", href: "/gallery" },
    {
        label: "More links",
        subItems: [
            { label: "About us", href: "/about-us" },
            { label: "Contact us", href: "/contact" },
            { label: "Feedback", href: "/feedback" },
            { label: "Terms & Conditions", href: "#" },
        ],
    },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const [scrollPosition, setScrollPosition] = useState(false);
    const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

    const handleOpenChange = (label: string, isOpen: boolean) => {
        setOpenStates((prev) => ({ ...prev, [label]: isOpen }));
    };
    const isActive = (path: string) => {
        return pathname === path;
    };

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
        <header
            className={`sticky top-0 z-50 w-full ${scrollPosition ? "bg-white text-black" : "bg-black/50 text-white"} transition-all duration-700 ease-in-out`}
        >
            <div className="mx-auto flex items-center justify-between px-10 py-1.5">
                <div className="flex items-center gap-2 bg-white rounded-xl p-2">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Seahawk Adventure"
                            width={160}
                            height={60}
                            className="object-contain"
                        />
                    </Link>
                </div>

                <div className="mx-auto hidden items-center space-x-6 md:flex">
                    {menuItems.map((item) => (
                        <div key={item.label}>
                            {item.subItems ? (
                                <DropdownMenu
                                    open={openStates[item.label]}
                                    onOpenChange={(isOpen) =>
                                        handleOpenChange(item.label, isOpen)
                                    }
                                >
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="w-full cursor-pointer border-none text-base font-normal shadow-none hover:bg-transparent hover:text-blue-500"
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
                                        className="w-48 bg-white backdrop-blur-sm"
                                        onMouseEnter={() =>
                                            handleOpenChange(item.label, true)
                                        }
                                        onMouseLeave={() =>
                                            handleOpenChange(item.label, false)
                                        }
                                    >
                                        {item.subItems.map((subItem) => (
                                            <DropdownMenuItem
                                                key={subItem.label}
                                                className="focus:bg-blue-100"
                                            >
                                                <Link
                                                    href={subItem.href}
                                                    className="w-full"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
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

                {/* <nav className="hidden gap-6 md:flex">
                    <Link
                        href="/"
                        className={`text-sm font-medium ${isActive("/") ? "text-blue-700" : "hover:text-blue-700"}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/packages/beginner-rafting-adventure"
                        className={`text-sm font-medium ${isActive("/packages/beginner-rafting-adventure") ? "text-blue-700" : "hover:text-blue-700"}`}
                    >
                        Packages
                    </Link>
                    <Link
                        href="/about-us"
                        className={`text-sm font-medium ${isActive("/about-us") ? "text-blue-700" : "hover:text-blue-700"}`}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/gallery"
                        className={`text-sm font-medium ${isActive("/gallery") ? "text-blue-700" : "hover:text-blue-700"}`}
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/feedback"
                        className={`text-sm font-medium ${isActive("/feedback") ? "text-blue-700" : "hover:text-blue-700"}`}
                    >
                        Feedback
                    </Link>
                    <Link
                        href="/contact"
                        className={`text-sm font-medium ${isActive("/contact") ? "text-blue-700" : "hover:text-blue-700"}`}
                    >
                        Contact
                    </Link>
                </nav> */}

                <div className="hidden md:block">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                        Book Now
                    </Button>
                </div>

                <button
                    className="block md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="border-t md:hidden">
                    <div className="container flex flex-col gap-4 py-4">
                        <Link
                            href="/"
                            className={`text-sm font-medium ${isActive("/") ? "text-blue-700" : "hover:text-blue-700"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/packages/beginner-rafting-adventure"
                            className={`text-sm font-medium ${isActive("/packages/beginner-rafting-adventure") ? "text-blue-700" : "hover:text-blue-700"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Packages
                        </Link>
                        <Link
                            href="/about-us"
                            className={`text-sm font-medium ${isActive("/about-us") ? "text-blue-700" : "hover:text-blue-700"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/gallery"
                            className={`text-sm font-medium ${isActive("/gallery") ? "text-blue-700" : "hover:text-blue-700"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/testimonials"
                            className={`text-sm font-medium ${isActive("/testimonials") ? "text-blue-700" : "hover:text-blue-700"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="/contact"
                            className={`text-sm font-medium ${isActive("/contact") ? "text-blue-700" : "hover:text-blue-700"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Book Now
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
