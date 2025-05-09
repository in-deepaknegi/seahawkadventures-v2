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
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white text-black">
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-10 md:py-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <Link
                            href="/"
                            className="mb-4 flex flex-col items-start"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Seahawk Adventure"
                                width={160}
                                height={60}
                                className="object-contain"
                            />
                        </Link>
                        <p className="mb-4 text-gray-700">
                            Providing thrilling and safe adventure experiences
                            in Rishikesh since 2010.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-xl font-medium">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#packages"
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    Packages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#gallery"
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#testimonials"
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-4 text-xl font-medium">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-700" />
                                <span className="text-gray-700">
                                    Badrinath Rd, near Shivpuri Police Station,
                                    Rishikesh, Uttarakhand, India
                                    <br />
                                    PIN CODE: 249192
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 flex-shrink-0 text-gray-700" />
                                <Link
                                    href="tel:+919756620538"
                                    className="text-gray-700"
                                >
                                    +91 97566 20538
                                </Link>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 flex-shrink-0 text-gray-700" />
                                <Link
                                    href="mailto:kayakinginrishikesh@gmail.com"
                                    className="text-gray-700"
                                >
                                    kayakinginrishikesh@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter and QR Code */}
                    <div>
                        {/* <h3 className="mb-4 text-xl font-medium">Newsletter</h3>
                        <p className="mb-4 text-blue-200">
                            Subscribe to our newsletter for the latest updates
                            and offers.
                        </p>
                        <form className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="text-white"
                            />
                            <Button className="w-full bg-blue-600">
                                Subscribe
                            </Button>
                        </form> */}

                        {/* QR Code Section */}
                        <div className="mt-0 flex flex-col items-start md:items-center md:justify-center">
                            <h3 className="text-xl font-medium md:mb-4">
                                Share your experience
                            </h3>
                            <div className="flex items-start justify-center md:items-center">
                                <Image
                                    src="/api/reviews"
                                    alt="QR Code"
                                    width={120}
                                    height={120}
                                    className="rounded-lg"
                                />
                            </div>
                            <p className="text-center text-sm text-gray-600 md:mt-2">
                                Scan to share your experience
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-300 pt-6 text-sm text-gray-500 md:text-center">
                    <p>© 2025 Sea Hawk Adventures. All rights reserved.</p>
                    <div className="text-sm">
                        Created and maintained by{" "}
                        <Link
                            href="https://ui.cnippet.site/"
                            target="_blank"
                            className="font-medium text-blue-500 hover:text-blue-600"
                        >
                            Cnippet, Inc.
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
