import Link from "next/link";
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    return (
        <footer className="bg-indigo-950 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 md:py-20 md:px-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">
                            Sea Hawk Adventure
                        </h3>
                        <p className="mb-4 text-blue-200">
                            Providing thrilling and safe adventure experiences
                            in Rishikesh since 2010.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-blue-200 hover:text-white"
                            >
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-blue-200 hover:text-white"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-blue-200 hover:text-white"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-blue-200 hover:text-white"
                            >
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#packages"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Packages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    className="text-blue-200 hover:text-white"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#gallery"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#testimonials"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-300" />
                                <span className="text-blue-200">
                                    Near Laxman Jhula, Rishikesh, Uttarakhand,
                                    India - 249302
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 flex-shrink-0 text-blue-300" />
                                <span className="text-blue-200">
                                    +91 98765 43210
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 flex-shrink-0 text-blue-300" />
                                <span className="text-blue-200">
                                    info@seahawkadventure.com
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">Newsletter</h3>
                        <p className="mb-4 text-blue-200">
                            Subscribe to our newsletter for the latest updates
                            and offers.
                        </p>
                        <form className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="border-indigo-700 bg-indigo-800 text-white placeholder:text-indigo-400"
                            />
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-blue-800 pt-6 text-center text-sm text-blue-300">
                    <p>
                        © {new Date().getFullYear()} Sea Hawk Adventure. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
