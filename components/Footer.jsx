import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo-b.png";

const links = [
    {
        id: 1,
        title: "Rafting",
        sub: [
            {
                name: "12 Km Rafting",
                href: "/rafting/12-km-rafting",
            },
            {
                name: "16 Km Rafting",
                href: "/rafting/16-km-rafting",
            },
            {
                name: "26 Km Rafting",
                href: "/rafting/26-km-rafting",
            },
        ],
    },
    {
        id: 2,
        title: "Kayaking",
        sub: [
            {
                name: "Beginner",
                href: "/kayak/beginners-course",
            },
            {
                name: "Intermediate",
                href: "/kayak/intermediate-course",
            },
        ],
    },
    {
        id: 3,
        title: "Multi-day trip",
        sub: [
            {
                name: "Rafting Expedition",
                href: "#",
            },
            {
                name: "Kayak Expedition",
                href: "#",
            },
        ],
    },
    {
        id: 4,
        title: "Pages",
        sub: [
            {
                name: "About us",
                href: "/about",
            },
            {
                name: "Contact us",
                href: "/contacts",
            },
            {
                name: "Gallery",
                href: "/gallery",
            },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="relative pt-10 bg-black overflow-x-hidden rounded-t-3xl pb-4 border-t font-swim border-gray-200">
            <div className="mx-auto max-w-[90%] px-6">
                <div className="mb-6 flex flex-col lg:flex-row justify-between">
                    <div>
                        <a
                            href="/"
                            className="-m-1.5 p-1.5 flex md:flex-row flex-col gap-4 md:items-center"
                        >
                            {/* <Image
                                src={Logo}
                                priority="true"
                                alt="site-logo"
                                className="w-[8rem] md:w-[13rem]"
                            /> */}
                            <span className=" text-3xl md:text-4xl w-60 font-swir text-blue-500">
                                Sea Hawk Adventures
                            </span>
                            <span className=" font-paris text-white w-full mt-auto text-3xl md:text-4xl">
                                It&apos;s time to paddle
                            </span>
                        </a>
                        <div className="mt-10 text-base font-swir text-gray-400 space-y-2">
                            <div className="flex gap-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-gray-300 my-auto"
                                >
                                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                    <path d="M10 6h4"></path>
                                    <path d="M10 10h4"></path>
                                    <path d="M10 14h4"></path>
                                    <path d="M10 18h4"></path>
                                </svg>
                                <div>Badrinath Road, Rishikesh 249137, Uttarakhand, India</div>
                            </div>
                            <div className="flex gap-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-gray-300 my-auto"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <div className="flex gap-3">
                                    <a href="tel:+91 97566 20538">+91 97566 20538</a>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-gray-300 my-auto"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                                <div>
                                    <a href="mailto:office@seahawkadventures.com">
                                        office@seahawkadventures.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-10 md:gap-20 max-w-md mt-10 justify-between md:mt-5 md:max-w-none">
                        {links.map((link) => (
                            <div key={link.id}>
                                <h3 className="mb-3 text-lg text-gray-100">
                                    {link.title}
                                </h3>
                                <ul className="flex flex-col space-y-2 flex-wrap text-base font-medium text-gray-400">
                                    {link.sub.map((l, j) => (
                                        <li key={j}>
                                            <a href={l.href} className="hover:underline ">
                                                {l.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <h3 className="pt-6 text-6xl pb-4 md:text-[7rem] font-swir text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-rose-500 to-yellow-400 transition-all ease-in duration-300 cursor-pointer">
                Rafting since 2006
            </h3>

            <div className="max-w-full pt-8 border-t border-gray-400">
                <div className=" mx-auto max-w-[85%] flex space-y-4 flex-col justify-between md:flex-row md:space-y-0">
                    <div className="flex gap-x-4">
                        <span className="block text-xs text-gray-400 sm:text-left md:text-sm">
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>
                        </span>
                        <span className="block text-xs text-gray-400 sm:text-left md:text-sm">
                            <a href="#" className="underline">
                                Terms of Service
                            </a>
                        </span>
                        <span className="block text-xs text-gray-400 sm:text-left md:text-sm">
                            <a href="#" className="underline">
                                Cookies Policy
                            </a>
                        </span>
                        <span className="block text-xs text-gray-400 sm:text-left md:text-sm">
                            <a href="/sitemap" className="underline">
                                Sitemap
                            </a>
                        </span>
                    </div>

                    <div>
                        <span className="block text-sm text-gray-400 sm:text-right">
                            © 2024
                            <a href="/" className="hover:underline">
                                {" "}
                                Sea Hawk Adventures™
                            </a>
                            . All Rights Reserved.
                        </span>
                        <span className="mt-2 block text-xs text-gray-400 sm:text-right">
                            Designed by:
                            <a target="_blank" href="https://www.cnippet.com/">
                                Cnippet Inc
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
