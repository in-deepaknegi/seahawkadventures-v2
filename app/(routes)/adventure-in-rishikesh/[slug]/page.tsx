import React from "react";
import Image from "next/image";
import Link from "next/link";

import allContents from "@/.content-collections/generated/allContents";

import { Call, Whatsapp } from "@/components/icons";
import { RaftingForm } from "@/components/rafting/rafting-form";
import { Bookmark, ChevronRight, Star } from "lucide-react";
import { Mdx } from "@/mdx-components";
import { Package, UserDetails } from "@/types/booking";

type Params = Promise<{ slug: string }>;

async function getContentFromParams({ id }: { id: { slug: string } }) {
    const doc = allContents.find((doc) => doc.slugAsParams === id.slug);

    if (!doc) {
        return null;
    }

    return doc;
}

export default async function MainPage({ params }: { params: Params }) {
    const id = await params;

    const doc = await getContentFromParams({ id });

    let content: Package[] = [];
    let content_1 = null;
    let content_2 = null;

    switch (doc?.slug) {
        case "river-rafting":
            content = packages;
            content_1 = [
                {
                    label: "Safety Instrument",
                    description:
                        "Paddles, safety aids, life jackets, helmets, throw bags, and dry bags",
                },
                {
                    label: "Transport",
                    description: "Transportation to and from Laxman Julla",
                },
                {
                    label: "Trained Guide",
                    description:
                        "Highly trained guide with over 10 years of experience",
                },
            ];
            content_2 = [
                {
                    label: "White Water Rafting",
                    description:
                        "Engage in enthralling white water rafting expedition on the mighty Ganges in Rishikesh. Navigate through the thrilling rapids amidst the mountains",
                    image: {
                        src: "/images/rafting/r05.jpg",
                        alt: "",
                    },
                },
                {
                    label: "Body Surfing",
                    description:
                        "Experience the body surfing and swimming in the holy river Ganga with Life Jacket",
                    image: {
                        src: "/images/rafting/r08.jpg",
                        alt: "",
                    },
                },
            ];
            break;
        case "ganga-expedition":
            content = p2;
            content_1;
            break;
        default:
            content = [];
            break;
    }

    return (
        <section className="relative isolate py-10 font-monr">
            <div className="mx-auto max-w-full px-5 md:max-w-[85%] md:px-0 xl:max-w-[78%]">
                <div>
                    <div className="flex items-center gap-1 text-sm">
                        <div>Rishikesh</div>
                        <ChevronRight className="size-4" />
                        <div>Experience</div>
                        <ChevronRight className="size-4" />
                        <div>{doc?.title}</div>
                    </div>

                    <div className="mt-10 flex flex-col gap-2.5">
                        <h1 className="text-4xl">{doc?.title}</h1>
                        <div className="flex flex-col gap-2 text-xs md:flex-row md:items-center md:text-sm">
                            <div className="flex items-center gap-2">
                                <Star className="size-4" />
                                4.9 (23K+ community reviews)
                            </div>
                            <span className="hidden md:block">.</span>
                            <div className="flex items-center gap-2">
                                <Bookmark className="size-4" />
                                8.5K+ booked
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-2 overflow-hidden rounded-xl">
                        <div>
                            <Image
                                src="/images/rafting/r05.jpg"
                                alt=""
                                width={1980}
                                height={1020}
                                className=" aspect-video h-[28rem] object-cover"
                            />
                        </div>
                        <div className="grid h-full grid-cols-2 gap-2">
                            <div>
                                <Image
                                    src="/images/rafting/r03.jpg"
                                    alt=""
                                    width={1980}
                                    height={1020}
                                    className=" aspect-video h-full object-cover"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/images/rafting/r08.jpg"
                                    alt=""
                                    width={1980}
                                    height={1020}
                                    className="aspect-video h-full object-cover"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/images/rafting/r12.jpg"
                                    alt=""
                                    width={1980}
                                    height={1020}
                                    className=" aspect-video h-full object-cover"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/images/rafting/r13.jpg"
                                    alt=""
                                    width={1980}
                                    height={1020}
                                    className="aspect-video h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 flex gap-10">
                        <article className="w-full space-y-10">
                            {doc?.description}

                            {content_1 != undefined && (
                                <div className="mt-10 grid gap-5 md:grid-cols-3">
                                    {content_1?.map((item, i) => (
                                        <div
                                            key={i}
                                            className="rounded-2xl border p-5"
                                        >
                                            <h3 className="font-monm text-lg">
                                                {item.label}
                                            </h3>
                                            <p className="mt-2 text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {doc?.body && <Mdx code={doc?.body.code} />}

                            <RaftingForm packages={content} />

                            {content_2 != undefined && (
                                <div>
                                    <h3 className="mb-8 text-3xl text-gray-900">
                                        What will you do
                                    </h3>
                                    <div className="flex gap-10">
                                        <div className="hidden h-full flex-col items-center justify-normal gap-1 md:flex">
                                            <div className="h-4 w-4 rounded-full bg-gray-400" />
                                            <div className="h-60 w-[1px] border" />
                                            <div className="h-4 w-4 rounded-full bg-gray-400" />
                                            <div className="h-40 w-[1px] border" />
                                        </div>
                                        <div className="grid grid-rows-2 gap-10">
                                            {content_2?.map((item, j) => (
                                                <div
                                                    key={j}
                                                    className="grid overflow-hidden rounded-2xl border md:grid-cols-2"
                                                >
                                                    <Image
                                                        src={item.image.src}
                                                        alt={item.image.alt}
                                                        width={1980}
                                                        height={1020}
                                                        className="aspect-video h-full w-full object-cover md:w-[18rem]"
                                                    />
                                                    <div className="py-10 pl-10 h-full pr-10 md:pl-0">
                                                        <h4 className="text-2xl">
                                                            {item.label}
                                                        </h4>
                                                        <p className="mt-5 text-sm">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div>
                                <h3 className=" mt-10 text-3xl text-gray-900">
                                    From Sea-Hawk Community
                                </h3>
                                <ul className="ml-5 mt-10 list-disc">
                                    <li>
                                        No swimming skills required; life
                                        jackets provided.
                                    </li>
                                    <li>
                                        Not suitable for certain medical
                                        conditions or pregnancy.
                                    </li>
                                    <li>
                                        Leave valuables behind; carry cash for
                                        maggie point snacks.
                                    </li>
                                    <li>
                                        Wear swim-friendly attire: tees with
                                        shorts or trousers.
                                    </li>
                                </ul>

                                <p className="ml-5 mt-10">
                                    Please Note: The total GoPro video price for
                                    one raft is ₹2000. This amount is equally
                                    divided among the members who want the
                                    video, so it will be approximately ₹300 per
                                    person.
                                </p>
                            </div>
                        </article>
                        <div className="sticky top-5 col-span-4 hidden h-fit w-full max-w-[22rem] rounded-xl border px-4 py-2 md:block">
                            <div className="flex w-full items-center justify-between gap-4">
                                <p className="text-3xl">
                                    {content[0]?.price
                                        ? `₹${content[0].price}`
                                        : "-"}
                                </p>
                                <Link
                                    href="#"
                                    className="ml-auto flex w-fit items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-white"
                                >
                                    Need help?
                                    <Whatsapp className="size-6" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-fit rounded-full bg-red-500 p-1.5 text-white"
                                >
                                    <Call className="size-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const packages: Package[] = [
    {
        id: 1,
        distance: "12 KM",
        route: "Club House to NIM Beach",
        grade: "I-II",
        duration: "1 - 2 Hours",
        price: 620,
    },
    {
        id: 2,
        distance: "16 KM",
        route: "Shivpuri to NIM Beach",
        grade: "II - III",
        duration: "2 - 3 Hours",
        price: 1020,
    },
    {
        id: 3,
        distance: "26 KM",
        route: "Marine Drive to NIM Beach",
        grade: "II - III",
        duration: "2 - 3 Hours",
        price: 1520,
    },
];

const p2: Package[] = [
    {
        id: 1,
        distance: "12 KM",
        route: "Club House to NIM Beach",
        grade: "I-II",
        duration: "1 - 2 Hours",
        price: 1,
    },
    {
        id: 2,
        distance: "16 KM",
        route: "Shivpuri to NIM Beach",
        grade: "II - III",
        duration: "2 - 3 Hours",
        price: 1,
    },
    {
        id: 3,
        distance: "26 KM",
        route: "Marine Drive to NIM Beach",
        grade: "II - III",
        duration: "2 - 3 Hours",
        price: 1,
    },
];
