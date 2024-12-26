import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";

import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Whatsapp,
} from "@/components/icons";

const Footer: React.FC<ComponentProps> = (props) => {
    const { site, socials, links, payment } = {
        ...FooterDefaults,
        ...props,
    };

    return (
        <div
            className="relative h-[1000px] bg-neutral-950 md:h-[800px]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="relative -top-[100vh] h-[calc(100vh+800px)]">
                <div className="sticky top-[calc(100vh-800px)] h-[800px]">
                    <footer className="relative pt-10 text-white md:pt-40">
                        <div className="mx-auto max-w-full px-5 text-sm md:max-w-[85%] md:px-0">
                            <div className="grid grid-cols-4 gap-x-1 gap-y-10 md:grid-cols-[1fr_1fr,1fr,1fr,2fr]">
                                <div className="col-span-2 flex flex-col gap-5 md:col-span-1">
                                    <h2 className="uppercase">
                                        {links[0].label}
                                    </h2>
                                    <div className="flex flex-col gap-5 text-neutral-400">
                                        {links[0].sublinks.map((sublink, i) => (
                                            <Link
                                                key={i}
                                                href={sublink.url}
                                                className="hover:text-white"
                                            >
                                                {sublink.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-span-2 flex flex-col gap-12 md:col-span-1">
                                    <div className="flex flex-col gap-5">
                                        <h2 className="uppercase">
                                            {links[1].label}
                                        </h2>

                                        <div className="flex flex-col gap-5 text-neutral-400">
                                            {links[1].sublinks.map(
                                                (sublink, i) => (
                                                    <Link
                                                        key={i}
                                                        href={sublink.url}
                                                        className="hover:text-white"
                                                    >
                                                        {sublink.label}
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h2 className="uppercase">
                                            {links[2].label}
                                        </h2>

                                        <div className="flex flex-col gap-5 text-neutral-400">
                                            {links[2].sublinks.map(
                                                (sublink, i) => (
                                                    <Link
                                                        key={i}
                                                        href={sublink.url}
                                                        className="hover:text-white"
                                                    >
                                                        {sublink.label}
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 flex flex-col gap-12 md:col-span-1">
                                    <div className="flex flex-col gap-5">
                                        <h2 className="uppercase">
                                            {links[3].label}
                                        </h2>

                                        <div className="flex flex-col gap-5 text-neutral-400">
                                            {links[3].sublinks.map(
                                                (sublink, i) => (
                                                    <Link
                                                        key={i}
                                                        href={sublink.url}
                                                        className="hover:text-white"
                                                    >
                                                        {sublink.label}
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h2 className="uppercase">
                                            {links[4].label}
                                        </h2>

                                        <div className="flex flex-col gap-5 text-neutral-400">
                                            {links[4].sublinks.map(
                                                (sublink, i) => (
                                                    <Link
                                                        key={i}
                                                        href={sublink.url}
                                                        className="hover:text-white "
                                                    >
                                                        {sublink.label}
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 flex flex-col gap-12 md:col-span-1">
                                    <div className="flex flex-col gap-2.5">
                                        <h2 className="uppercase">
                                            Payment Option
                                        </h2>
                                        <div className="mt-2.5 flex flex-wrap gap-4">
                                            {payment.map((item, i) => (
                                                <div key={i}>
                                                    <Image
                                                        src={item.image.src}
                                                        alt={item.image.alt}
                                                        width={1080}
                                                        height={680}
                                                        className="size-8 object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2.5">
                                        <p className="uppercase">
                                            Follow our socials
                                        </p>
                                        <div className="mt-2 flex flex-wrap items-center gap-4">
                                            {socials.map((social, i) => (
                                                <Link
                                                    key={i}
                                                    href={social.url}
                                                    target="_blank"
                                                    className="rounded-full text-neutral-400 transition-all duration-500 ease-in hover:text-white"
                                                >
                                                    {social.thumbnail}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-4 hidden md:col-span-1 md:block">
                                    <div className="flex flex-col gap-5 rounded-xl bg-neutral-900 p-5">
                                        <h2 className="text-base">
                                            Get your 10% off today
                                        </h2>
                                        <p className="text-xs">
                                            Minim mollit non deserunt ullamco
                                            est sit aliqua dolor do amet sint
                                            velit officia consequat.
                                        </p>
                                        <form action="" className="text-white">
                                            <div className="group relative w-full">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    placeholder="Enter Your Email*"
                                                    className="w-full rounded-md bg-neutral-700 px-4 py-2 outline-none placeholder:text-xs placeholder:text-neutral-400"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="sr-only"
                                                >
                                                    Email Address
                                                </label>
                                            </div>

                                            <div className="">
                                                <button className="mt-2 h-full w-full rounded-md bg-black px-3 py-2 text-white">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 md:mt-16">
                                <Link
                                    href={site.url}
                                    className="flex w-fit items-center gap-2 rounded-lg bg-white p-2"
                                >
                                    <Image
                                        src={site.image.src}
                                        alt={site.image.alt}
                                        width={3840}
                                        height={2160}
                                        className="w-[10rem]"
                                    />
                                </Link>
                                <div className="mt-5 flex gap-5 text-neutral-400">
                                    <Link
                                        href="/privacy-policy"
                                        className="hover:text-white"
                                    >
                                        Privacy Policy
                                    </Link>{" "}
                                    <Link
                                        href="/cancellation-terms"
                                        className="hover:text-white"
                                    >
                                        Cancellation
                                    </Link>
                                    <Link
                                        href="/terms-and-conditions"
                                        className="hover:text-white"
                                    >
                                        Terms of Service
                                    </Link>
                                </div>
                                <div className="mt-3">
                                    <p className="text-neutral-400">
                                        Copyright © 2025 {site.name}. All
                                        rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;

type FooterProps = {
    site: {
        name: string;
        url: string;
        image: ImageProps;
        description: string;
    };
    socials: {
        label: string;
        thumbnail: React.ReactNode;
        url: string;
    }[];
    links: {
        label: string;
        sublinks: {
            label: string;
            url: string;
            new?: boolean;
        }[];
    }[];
    payment: {
        label: string;
        image: ImageProps;
    }[];
};

type ComponentProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<FooterProps>;

const FooterDefaults: FooterProps = {
    site: {
        name: "Sea Hawk Adventures",
        url: "/",
        image: {
            src: "/images/logo.png",
            alt: "sea hawk adventures site logo",
        },
        description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia mi.",
    },
    socials: [
        {
            label: "Instagram",
            thumbnail: <Instagram className="size-5 hover:text-white" />,
            url: "https://www.instagram.com/seahawkadventures/",
        },
        {
            label: "Facebook",
            thumbnail: <Facebook className="w-6 hover:text-white" />,
            url: "https://www.facebook.com/seahawkadventure/",
        },
        {
            label: "Whatsapp",
            thumbnail: <Whatsapp className="w-7 hover:text-white" />,
            url: "https://wa.me/919756620538/?text=Hi there!",
        },
    ],

    links: [
        {
            label: "Adventures",
            sublinks: [
                {
                    label: "River Rafting",
                    url: "#",
                },
                {
                    label: "Kayaking",
                    url: "#",
                },
                {
                    label: "Expedition",
                    url: "#",
                },
                {
                    label: "Camping",
                    url: "#",
                },
                {
                    label: "Adventure Sports",
                    url: "#",
                },
                {
                    label: "Our Stores",
                    url: "#",
                },
            ],
        },
        {
            label: "Company",
            sublinks: [
                {
                    label: "About Us",
                    url: "#",
                },
                {
                    label: "Contact Us",
                    url: "#",
                },
                {
                    label: "Partner",
                    url: "#",
                },
                {
                    label: "Accessibility",
                    url: "#",
                },
            ],
        },
        {
            label: "Get in touch",
            sublinks: [
                {
                    label: "info@seahawkadventures.com",
                    url: "mailto:info@seahawkadventures.com",
                },
                {
                    label: "+91 97566 20538 ",
                    url: "tel:+91 97566 20538",
                },
            ],
        },
        {
            label: "Help",
            sublinks: [
                {
                    label: "FAQs",
                    url: "#",
                },
                {
                    label: "Online Booking",
                    url: "#",
                },
                {
                    label: "Returns & Refunds",
                    url: "#",
                },
                {
                    label: "Payment",
                    url: "#",
                },
            ],
        },
        {
            label: "Company",
            sublinks: [
                {
                    label: "Campaingns",
                    url: "#",
                },
                {
                    label: "#ON SHOP",
                    url: "#",
                },
            ],
        },
    ],

    payment: [
        {
            label: "",
            image: {
                src: "/images/payment/p1.png",
                alt: "",
            },
        },
        {
            label: "",
            image: {
                src: "/images/payment/p2.png",
                alt: "",
            },
        },
        {
            label: "",
            image: {
                src: "/images/payment/p3.png",
                alt: "",
            },
        },
        {
            label: "",
            image: {
                src: "/images/payment/p4.png",
                alt: "",
            },
        },
    ],
};
