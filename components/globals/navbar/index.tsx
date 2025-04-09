"use client";
import React, { useState } from "react";
import { Clock, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems = [
    { label: "HOME", href: "/" },
    { 
        label: "RAFTING", 
        subItems: [
            { label: "12 KM RAFTING", href: "#" },
            { label: "16 KM RAFTING", href: "#" },
            { label: "26 KM RAFTING", href: "#" }
        ]
    },
    { 
        label: "TREKKING", 
        subItems: [
            { label: "TREK 1", href: "#" },
            { label: "TREK 2", href: "#" }
        ]
    },
    { label: "ACCOMMODATION", href: "/accommodation" },
    { label: "WILDLIFE", href: "/wildlife" },
    { 
        label: "More links", 
        subItems: [
            { label: "About us", href: "/about" },
            { label: "Contact us", href: "/contact" },
            { label: "Terms & Conditions", href: "/terms" }
        ]
    }
];

const Navbar = () => {
    const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

    const handleOpenChange = (label: string, isOpen: boolean) => {
        setOpenStates(prev => ({ ...prev, [label]: isOpen }));
    };

    return (
        <div className="absolute left-0 right-0 top-0 z-50 w-full">
            {/* Top Bar */}
            <div className="hidden bg-transparent px-4 py-2 text-white md:flex md:items-center md:justify-between md:px-10">
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00</span>
                    </div>
                    <Link
                        href="tel:+919756620538"
                        className="flex items-center space-x-2 transition-colors hover:text-blue-200"
                    >
                        <Phone className="h-4 w-4" />
                        <span>+91 97566 20538</span>
                    </Link>
                    <Link
                        href="https://maps.app.goo.gl/ga3Bg1z1zrMJoDen9"
                        target="_blank"
                        className="flex items-center space-x-2 transition-colors hover:text-blue-200"
                    >
                        <MapPin className="h-4 w-4" />
                        <span>Rishikesh, Uttarakhand, India</span>
                    </Link>
                </div>
                <select className="bg-transparent text-white outline-none">
                    <option value="INR">INR</option>
                </select>
            </div>

            {/* Navigation */}
            <div className="px-4 py-4 md:px-10">
                <div className="flex items-center justify-between">
                    <Link href="/" className="w-40">
                        <Image 
                            src="/logo.png"
                            alt="Seahawk Adventure"
                            width={160}
                            height={60}
                            className="object-contain"
                        />
                    </Link>
                    <div className="hidden items-center space-x-6 text-white md:flex">
                        {menuItems.map((item) => (
                            <div key={item.label}>
                                {item.subItems ? (
                                    <DropdownMenu
                                        open={openStates[item.label]}
                                        onOpenChange={(isOpen) => handleOpenChange(item.label, isOpen)}
                                    >
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="text-white hover:text-red-400"
                                                onMouseEnter={() => handleOpenChange(item.label, true)}
                                                onMouseLeave={() => handleOpenChange(item.label, false)}
                                            >
                                                {item.label}
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            className="w-48 bg-white/90 backdrop-blur-sm"
                                            onMouseEnter={() => handleOpenChange(item.label, true)}
                                            onMouseLeave={() => handleOpenChange(item.label, false)}
                                        >
                                            {item.subItems.map((subItem) => (
                                                <DropdownMenuItem
                                                    key={subItem.label}
                                                    className="focus:bg-red-50"
                                                >
                                                    <Link href={subItem.href} className="w-full">
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
                                            "text-white transition-colors hover:text-red-400",
                                            item.label === "HOME" && "text-red-500"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
