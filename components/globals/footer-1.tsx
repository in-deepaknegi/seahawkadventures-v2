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
    const { site, socials, links, legals } = {
        ...FooterDefaults,
        ...props,
    };

    return (
        <footer className="relative bg-gray-50 py-10">
            <div className="relative mx-auto max-w-[95%] overflow-hidden rounded-3xl bg-white md:max-w-[90%]">
                <div className="absolute h-full w-full bg-[url(/images/components/all-exps/bg-dots.webp)]" />

                <div className="relative flex flex-col gap-5 p-10 md:flex-row md:gap-0">
                    <div className="flex w-full flex-col gap-3">
                        <div className="flex flex-col items-center gap-5 md:flex-row">
                            <div className="sr-only">{site.name}</div>
                            <Link
                                href={site.url}
                                className="flex items-center gap-2"
                            >
                                <Image
                                    src={site.image.src}
                                    alt={site.image.alt}
                                    width={3840}
                                    height={2160}
                                    className="w-[10rem]"
                                />
                            </Link>
                        </div>
                        <div className="flex items-center justify-center md:justify-start">
                            {socials.map((icon, i) => (
                                <Link
                                    key={i}
                                    href={icon.url}
                                    target="_blank"
                                    className="rounded-full p-2 text-neutral-400 transition-all duration-500 ease-in hover:text-black"
                                >
                                    {icon.thumbnail}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex w-full flex-wrap items-center justify-center gap-3 text-sm md:flex-nowrap md:justify-end md:gap-5">
                        {links.map((link, i) => (
                            <div key={i} className="">
                                <Link
                                    href={link.url}
                                    className="rounded-md px-4 py-1.5 text-black"
                                >
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-[0.8px] w-full bg-neutral-200" />

                <div className="relative flex w-full flex-col items-center gap-5 p-10 text-xs text-neutral-800 md:flex-row md:justify-between md:gap-0">
                    <p>©2025 {site.name} All Rights Reserved.</p>

                    <div className="flex flex-wrap justify-start gap-3 md:gap-5">
                        {legals.map((legal, i) => (
                            <Link
                                key={i}
                                href={legal.url}
                                className="hover:underline"
                            >
                                {legal.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
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
        url: string;
    }[];
    legals: {
        label: string;
        url: string;
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
            thumbnail: <Instagram />,
            url: "https://www.instagram.com/seahawkadventures/",
        },
        {
            label: "Whatsapp",
            thumbnail: <Whatsapp className="size-6" />,
            url: "https://wa.me/919756620538/?text=Hi there!",
        },
        {
            label: "Facebook",
            thumbnail: <Facebook className="size-5" />,
            url: "https://www.facebook.com/seahawkadventure/",
        },
    ],
    links: [
        {
            label: "Home",
            url: "/",
        },
        {
            label: "About",
            url: "#",
        },
        {
            label: "Contact",
            url: "#",
        },
    ],
    legals: [
        {
            label: "Privacy Policy",
            url: "/privacy-policy",
        },
        {
            label: "Cancellation Policy",
            url: "/cancellation-terms",
        },
        {
            label: "Terms & Conditions",
            url: "/terms-and-conditions",
        },
    ],
};
