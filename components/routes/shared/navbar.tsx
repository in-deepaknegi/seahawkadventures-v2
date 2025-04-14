"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center">
                        <span className="text-xl font-bold text-blue-700">
                            Sea Hawk Adventure
                        </span>
                    </Link>
                </div>

                <nav className="hidden gap-6 md:flex">
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
                </nav>

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
