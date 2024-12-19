import React from "react"
import Link from "next/link"
import Image, { ImageProps } from "next/image"

import { Instagram, Linkedin, Twitter } from "@/components/icons"

const Footer: React.FC<ComponentProps> = (props) => {
    const { site, socials, links, payment } = {
        ...FooterDefaults,
        ...props,
    }

    return (
        <footer className="relative bg-black py-10 text-white md:py-20">
            <div className="mx-auto max-w-full px-5 md:max-w-[85%] md:px-0 text-sm">
                <div className="grid grid-cols-4 gap-x-10 gap-y-10 md:grid-cols-[1fr_1fr,1fr,1fr,2fr]">
                    <div className="col-span-2 flex flex-col gap-5 md:col-span-1">
                        <h2 className="uppercase">
                            {links[0].label}
                        </h2>
                        <div className="flex flex-col gap-5 text-gray-400">
                            {links[0].sublinks.map((sublink, i) => (
                                <Link key={i} href={sublink.url} className="hover:text-white">
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

                            <div className="flex flex-col gap-5 text-gray-400">
                                {links[1].sublinks.map((sublink, i) => (
                                    <Link key={i} href={sublink.url} className="hover:text-white">
                                        {sublink.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="uppercase">
                                {links[2].label}
                            </h2>

                            <div className="flex flex-col gap-5 text-gray-400">
                                {links[2].sublinks.map((sublink, i) => (
                                    <Link key={i} href={sublink.url} className="hover:text-white">
                                        {sublink.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-12 md:col-span-1">
                        <div className="flex flex-col gap-5">
                            <h2 className="uppercase">
                                {links[3].label}
                            </h2>

                            <div className="flex flex-col gap-5 text-gray-400">
                                {links[3].sublinks.map((sublink, i) => (
                                    <Link key={i} href={sublink.url} className="hover:text-white">
                                        {sublink.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="uppercase">
                                {links[4].label}
                            </h2>

                            <div className="flex flex-col gap-5 text-gray-400">
                                {links[4].sublinks.map((sublink, i) => (
                                    <Link key={i} href={sublink.url} className="hover:text-white">
                                        {sublink.label}
                                    </Link>
                                ))}
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
                            <div className="flex mt-2 flex-wrap gap-4">
                                {socials.map((social, i) => (
                                    <Link
                                        key={i}
                                        href={social.url}
                                        className="rounded-full text-gray-400 hover:text-white transition-all duration-500 ease-in"
                                    >
                                        {social.thumbnail}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 md:col-span-1">
                        <div className="flex flex-col gap-5 rounded-xl bg-[#ffffff14] p-5">
                            <h2 className="text-base">
                                Get your 10% off today
                            </h2>
                            <p className="text-xs">
                                Minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint velit officia
                                consequat.
                            </p>
                            <form action="" className="text-white">
                                <div className="group relative w-full">
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="Enter Your Email*"
                                        className="w-full rounded-md bg-[#3d3d3da3] px-4 py-2 outline-none placeholder:text-xs placeholder:text-gray-400"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="sr-only"
                                    >
                                        Email Address
                                    </label>
                                </div>

                                <div className="">
                                    <button className="mt-2 h-full w-full rounded-md bg-[#3d3d3da3] px-3 py-2 text-white hover:bg-black">
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
                        className="flex w-fit items-center gap-2 bg-white    p-2 rounded-2xl"
                    >
                        <Image
                            src={site.image.src}
                            alt={site.image.alt}
                            width={3840}
                            height={2160}
                            className="w-[10rem]"
                        />
                    </Link>
                    <div className="flex mt-5 gap-5 text-gray-400">
                        <Link href="/" className="hover:text-white">
                            Privacy Policy
                        </Link>{" "}
                        <Link href="/" className="hover:text-white">
                            Terms of Service
                        </Link>
                    </div>
                    <div className="mt-3">
                        <p className="text-gray-400">
                            Copyright © 2025 {site.name}. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer

type FooterProps = {
    site: {
        name: string
        url: string
        image: ImageProps
        description: string
    }
    socials: {
        label: string
        thumbnail: React.ReactNode
        url: string
    }[]
    links: {
        label: string
        sublinks: {
            label: string
            url: string
            new?: boolean
        }[]
    }[]
    payment: {
        label: string
        image: ImageProps
    }[]
}

type ComponentProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<FooterProps>

const FooterDefaults: FooterProps = {
    site: {
        name: "Cnippet",
        url: "/",
        image: {
            src: "/images/og/logo-1.png",
            alt: "cnippet site logo",
        },
        description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia mi.",
    },
    socials: [
        {
            label: "Instagram",
            thumbnail: <Instagram />,
            url: "#",
        },
        {
            label: "Twitter",
            thumbnail: <Twitter />,
            url: "#",
        },
        {
            label: "Linkedin",
            thumbnail: <Linkedin />,
            url: "#",
        },
    ],

    links: [
        {
            label: "Menus",
            sublinks: [
                {
                    label: "Gift Cards",
                    url: "#",
                },
                {
                    label: "New in Products",
                    url: "#",
                },
                {
                    label: "Directory Products",
                    url: "#",
                },
                {
                    label: "Trending Products",
                    url: "#",
                },
                {
                    label: "Vouchers",
                    url: "#",
                },
                {
                    label: "Promotions",
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
                    label: "Careers",
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
            label: "Company",
            sublinks: [
                {
                    label: "Patner",
                    url: "#",
                },
                {
                    label: "Call: 12-3456-789",
                    url: "#",
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
                    label: "Order & Delivery",
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
                src: "/images/home/p1.png",
                alt: "",
            },
        },
        {
            label: "",
            image: {
                src: "/images/home/p2.png",
                alt: "",
            },
        },
        {
            label: "",
            image: {
                src: "/images/home/p3.png",
                alt: "",
            },
        },
        {
            label: "",
            image: {
                src: "/images/home/p4.png",
                alt: "",
            },
        },
    ],
}
