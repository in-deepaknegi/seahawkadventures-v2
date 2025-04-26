"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
} from "lucide-react";
import {
    RiFacebookFill,
    RiInstagramLine,
    RiWhatsappLine,
} from "@remixicon/react";

type NavItem = {
    title: string;
    href: string;
    children?: {
        title: string;
        href: string;
    }[];
};

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
        null,
    );
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const isActive = (path: string) => {
        return pathname === path;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setOpenMobileDropdown(null);
    };

    const handleDropdownToggle = (title: string) => {
        setOpenDropdown(title);
    };

    const handleDropdownClose = () => {
        setOpenDropdown(null);
    };

    const handleMobileDropdownToggle = (title: string) => {
        setOpenMobileDropdown(openMobileDropdown === title ? null : title);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navItems: NavItem[] = [
        { title: "Home", href: "/" },
        {
            title: "Rafting",
            href: "#",
            children: [
                {
                    title: "12 Km Rafting",
                    href: "/tours/ganga-river-rafting-marine-drive-shivpuri",
                },
                {
                    title: "16 Km Rafting",
                    href: "/tours/ganga-river-rafting-shivpuri-tapovan",
                },
                {
                    title: "26 Km Rafting",
                    href: "/tours/ganga-river-rafting-marine-drive-tapovan",
                },
                {
                    title: "36 Km Rafting",
                    href: "/tours/ganga-river-rafting-kaudiyala-tapovan",
                },
            ],
        },
        {
            title: "Kayaking",
            href: "#",
            children: [
                {
                    title: "Basics Kayak Lessons",
                    href: "/tours/kayak-basic-lessons-in-rishikesh",
                },
                {
                    title: "Complete Kayak Lessons",
                    href: "/tours/kayak-complete-lessons-in-rishikesh",
                },
            ],
        },
        {
            title: "Expedition",
            href: "#",
            children: [
                {
                    title: "Rafting Expedition",
                    href: "/tours/rafting-expedition-in-rishikesh",
                },
                {
                    title: "Kayak Expedition",
                    href: "/tours/kayak-expedition-in-rishikesh",
                },
            ],
        },
        {
            title: "Camping",
            href: "#",
            children: [
                {
                    title: "Camping with Rafting",
                    href: "#",
                },
                {
                    title: "Camping without Rafting",
                    href: "#",
                },
            ],
        },
        {
            title: "More links",
            href: "#",
            children: [
                {
                    title: "About Us",
                    href: "/about-us",
                },
                {
                    title: "Contact Us",
                    href: "/contact",
                },
                {
                    title: "Gallery",
                    href: "/gallery",
                },
                {
                    title: "Feedback",
                    href: "/feedback",
                },
            ],
        },
    ];

    return (
        <header className="fixed top-0 z-[9999] w-full bg-white shadow-sm backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-full items-center justify-between px-4 py-0 md:px-10">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Seahawk Adventure"
                        width={1000}
                        height={1000}
                        className="aspect-video h-full w-28 object-contain md:w-32"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav
                    className="font-open-sans hidden items-center space-x-8 md:flex"
                    ref={dropdownRef}
                >
                    {navItems.map((item, index) => (
                        <div
                            key={`${item.title}-${index}`}
                            className="group relative"
                        >
                            {item.children ? (
                                <div
                                    onMouseEnter={() =>
                                        handleDropdownToggle(item.title)
                                    }
                                    onMouseLeave={handleDropdownClose}
                                >
                                    <button
                                        className={`flex cursor-pointer items-center text-[15px] font-normal transition-colors duration-200 ${
                                            isActive(item.href)
                                                ? "text-primary"
                                                : "hover:text-primary text-black"
                                        }`}
                                    >
                                        {item.title}
                                        <ChevronDown
                                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                                openDropdown === item.title
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>
                                    {openDropdown === item.title && (
                                        <div
                                            className="absolute top-full left-0 z-50 mt-0 w-56 origin-top pt-2.5 transition-all duration-200 ease-in-out"
                                            // onMouseEnter={() => handleDropdownToggle(item.title)}
                                            // onMouseLeave={handleDropdownClose}
                                        >
                                            <div className="rounded-md border bg-white/95 py-1 backdrop-blur-sm">
                                                {item.children.map(
                                                    (child, index) => (
                                                        <Link
                                                            key={`${child.href}-${index}`}
                                                            href={child.href}
                                                            className="hover:text-primary block px-4 py-1.5 text-sm font-normal text-black uppercase transition-colors duration-200 hover:bg-gray-100"
                                                            onClick={() =>
                                                                setOpenDropdown(
                                                                    null,
                                                                )
                                                            }
                                                        >
                                                            {child.title}
                                                        </Link>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors duration-200 ${
                                        isActive(item.href)
                                            ? "text-primary"
                                            : "hover:text-primary text-gray-700"
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="hidden items-center space-x-2 md:flex">
                    <Link
                        href="https://www.facebook.com/seahawkadventure/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-1 text-white transition-colors hover:opacity-90"
                        style={{ backgroundColor: "#1877F2" }}
                    >
                        <RiFacebookFill className="h-5 w-5" />
                    </Link>
                    <Link
                        href={`https://www.instagram.com/seahawkadventures/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-1 text-white transition-colors hover:opacity-90"
                        style={{
                            background:
                                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                        }}
                    >
                        <RiInstagramLine className="h-5 w-5" />
                    </Link>
                    <Link
                        href={`https://wa.me/919756620538/?text=Hi there!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-1 text-white transition-colors hover:opacity-90"
                        style={{ backgroundColor: "#25D366" }}
                    >
                        <RiWhatsappLine className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://www.tripadvisor.in/Attraction_Review-g580106-d21358541-Reviews-Sea_Hawk_Adventure-Rishikesh_Dehradun_District_Uttarakhand.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-1 text-white transition-colors hover:opacity-90"
                        style={{ backgroundColor: "#25D366" }}
                    >
                        <Image
                            src="/images/logos/tripadvisor-icon.png"
                            alt="Whatsapp"
                            width={100}
                            height={100}
                            className="size-5 rounded-full"
                        />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="p-2 md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="border-t bg-white md:hidden">
                    <div className="container space-y-1 px-2 py-4">
                        {navItems.map((item) => (
                            <div
                                key={item.title}
                                className="border-b border-gray-100 last:border-b-0"
                            >
                                {item.children ? (
                                    <div>
                                        <button
                                            onClick={() =>
                                                handleMobileDropdownToggle(
                                                    item.title,
                                                )
                                            }
                                            className={`flex w-full items-center justify-between py-3 text-[15px] font-medium ${
                                                isActive(item.href)
                                                    ? "text-primary"
                                                    : ""
                                            }`}
                                        >
                                            {item.title}
                                            <ChevronRight
                                                className={`h-5 w-5 transition-transform ${
                                                    openMobileDropdown ===
                                                    item.title
                                                        ? "rotate-90"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                        {openMobileDropdown === item.title && (
                                            <div className="space-y-1 pb-2 pl-4">
                                                {item.children.map(
                                                    (child, index) => (
                                                        <Link
                                                            key={`${child.href}-${index}`}
                                                            href={child.href}
                                                            className={`block py-2 text-[15px] ${
                                                                isActive(
                                                                    child.href,
                                                                )
                                                                    ? "text-primary font-medium"
                                                                    : "text-gray-600"
                                                            }`}
                                                            onClick={() =>
                                                                setIsMenuOpen(
                                                                    false,
                                                                )
                                                            }
                                                        >
                                                            {child.title}
                                                        </Link>
                                                    ),
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block py-3 text-[15px] font-medium ${isActive(item.href) ? "text-primary" : ""}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-2">
                            <div className="flex items-center justify-center space-x-4">
                                <Link
                                    href="https://www.facebook.com/seahawkadventure/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-1 text-white transition-colors hover:opacity-90"
                                    style={{ backgroundColor: "#1877F2" }}
                                >
                                    <RiFacebookFill className="h-5 w-5" />
                                </Link>
                                <Link
                                    href={`https://www.instagram.com/seahawkadventures/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-1 text-white transition-colors hover:opacity-90"
                                    style={{
                                        background:
                                            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                                    }}
                                >
                                    <RiInstagramLine className="h-5 w-5" />
                                </Link>
                                <Link
                                    href={`https://wa.me/919756620538/?text=Hi there!`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-1 text-white transition-colors hover:opacity-90"
                                    style={{ backgroundColor: "#25D366" }}
                                >
                                    <RiWhatsappLine className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="https://www.tripadvisor.in/Attraction_Review-g580106-d21358541-Reviews-Sea_Hawk_Adventure-Rishikesh_Dehradun_District_Uttarakhand.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-1 text-white transition-colors hover:opacity-90"
                                    style={{ backgroundColor: "#25D366" }}
                                >
                                    <Image
                                        src="/images/logos/tripadvisor-icon.png"
                                        alt="Whatsapp"
                                        width={100}
                                        height={100}
                                        className="size-5 rounded-full"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
