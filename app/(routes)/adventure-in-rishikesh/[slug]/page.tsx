import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mdx } from "@/mdx-components";

import { Bookmark, ChevronRight, Star } from "lucide-react";

import allContents from "@/.content-collections/generated/allContents";
import { expeditionConfig, raftingConfig } from "@/config/package";
import { Package } from "@/types/booking";

import { Call, Whatsapp } from "@/components/icons";
import { RaftingForm } from "@/components/rafting/rafting-form";
import Footer from "@/components/globals/footer";
import { Metadata } from "next";
import Navbar from "@/components/globals/navbar";

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
    let content_0 = null;
    let content_1 = null;
    let content_2 = null;

    switch (doc?.slug) {
        case "river-rafting":
            content = raftingConfig.package;
            content_0 = raftingConfig.gallery;
            content_1 = raftingConfig.features;
            content_2 = raftingConfig.itinerary;
            break;
        case "kayak-expedition":
            content;
            content_0 = expeditionConfig.gallery;
            content_1;
            break;
        case "rafting-expedition":
            content;
            content_0 = expeditionConfig.gallery;
            content_1;
            break;
        default:
            content = [];
            break;
    }

    return (
        <>
            <Navbar />
            <main>
                <section className="relative isolate py-10 font-insr">
                    <div className="mx-auto max-w-full px-5 md:max-w-[87%] md:px-0 xl:max-w-6xl">
                        <div>
                            <div className="flex flex-wrap items-center gap-1 text-sm">
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
                            {content_0 != undefined && (
                                <div className="mt-10 grid grid-cols-2 gap-2 overflow-hidden rounded-xl">
                                    <div>
                                        <Image
                                            src={content_0[0]?.src!}
                                            alt={content_0[0]?.alt!}
                                            width={1980}
                                            height={1020}
                                            className="aspect-video h-[28rem] object-cover"
                                        />
                                    </div>
                                    <div className="grid h-full gap-2 md:grid-cols-2">
                                        <div className="hidden md:block">
                                            <Image
                                                src={content_0[1]?.src!}
                                                alt={content_0[1]?.alt!}
                                                width={1980}
                                                height={1020}
                                                className="aspect-video h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={content_0[2]?.src!}
                                                alt={content_0[3]?.alt!}
                                                width={1980}
                                                height={1020}
                                                className="aspect-video h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={content_0[3]?.src!}
                                                alt={content_0[3]?.alt!}
                                                width={1980}
                                                height={1020}
                                                className="aspect-video h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={content_0[4]?.src!}
                                                alt={content_0[4]?.alt!}
                                                width={1980}
                                                height={1020}
                                                className="aspect-video h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

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

                                    <RaftingForm
                                        packages={content}
                                        price={content[0]?.price}
                                    />

                                    {content_2 != undefined && (
                                        <div>
                                            <h3 className="mb-8 text-3xl text-gray-900">
                                                What will you do
                                            </h3>
                                            <div className="flex gap-10">
                                                <div className="hidden h-full flex-col items-center justify-normal gap-1 md:flex">
                                                    <div className="h-4 w-4 rounded-full bg-blue-500" />
                                                    <div className="h-60 w-[1px] border border-indigo-100" />
                                                    <div className="h-4 w-4 rounded-full bg-blue-500" />
                                                    <div className="h-40 w-[1px] border border-indigo-100" />
                                                </div>
                                                <div className="grid grid-rows-2 gap-10">
                                                    {content_2?.map(
                                                        (item, j) => (
                                                            <div
                                                                key={j}
                                                                className="grid overflow-hidden rounded-2xl border md:grid-cols-2"
                                                            >
                                                                <Image
                                                                    src={
                                                                        item
                                                                            .image
                                                                            .src
                                                                    }
                                                                    alt={
                                                                        item
                                                                            .image
                                                                            .alt
                                                                    }
                                                                    width={1980}
                                                                    height={
                                                                        1020
                                                                    }
                                                                    className="aspect-video h-full w-full object-cover md:w-[18rem]"
                                                                />
                                                                <div className="h-full py-5 pl-5 pr-5 md:py-10 md:pl-0 md:pr-10">
                                                                    <h4 className="text-2xl">
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </h4>
                                                                    <p className="mt-5 text-sm">
                                                                        {
                                                                            item.description
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <h3 className="mt-10 text-3xl text-gray-900">
                                            From Sea-Hawk Community
                                        </h3>
                                        <ul className="ml-5 mt-10 list-disc">
                                            <li>
                                                No swimming skills required;
                                                life jackets provided.
                                            </li>
                                            <li>
                                                Not suitable for certain medical
                                                conditions or pregnancy.
                                            </li>
                                            <li>
                                                Leave valuables behind; carry
                                                cash for maggie point snacks.
                                            </li>
                                            <li>
                                                Wear swim-friendly attire: tees
                                                with shorts or trousers.
                                            </li>
                                        </ul>

                                        <p className="mt-10">
                                            <strong>Please Note</strong>: The
                                            total GoPro video price for one raft
                                            is ₹2000. This amount is equally
                                            divided among the members who want
                                            the video, so it will be
                                            approximately ₹300 per person.
                                        </p>
                                    </div>
                                </article>
                                <div className="sticky top-5 col-span-4 hidden h-fit w-full max-w-[22rem] rounded-xl border px-4 py-2 md:block">
                                    <div className="flex w-full items-center justify-between gap-4">
                                        <p className="text-2xl">
                                            {content[0]?.price
                                                ? `₹${content[0].price}`
                                                : "N/A"}
                                        </p>
                                        <Link
                                            href={`https://wa.me/919756620538/?text=Hi there!`}
                                            className="ml-auto flex w-fit items-center gap-1 rounded-full bg-green-500/85 px-3 py-1 text-sm text-black hover:bg-green-500"
                                        >
                                            Need help?
                                            <Whatsapp className="size-6" />
                                        </Link>
                                        <Link
                                            href={`tel:+91 97566 20538`}
                                            className="w-fit rounded-full bg-blue-600 p-1.5 text-white hover:bg-blue-700"
                                        >
                                            <Call className="size-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

const baseUrl = process.env.NEXT_PUBLIC_URL
    ? process.env.NEXT_PUBLIC_URL
    : "http://localhost:3000";

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const id = await params;
    const doc = await getContentFromParams({ id });

    if (!doc) {
        return {
            title: "Document not found",
            description: "The requested document could not be found.",
        };
    }

    const name = doc?.title;

    return {
        metadataBase: new URL(baseUrl),

        title: name,
        description: doc?.description,
        applicationName: "Sea Hawk Adventures",

        robots: "index, follow",

        alternates: {
            canonical: `${baseUrl}/adventure-in-rishikesh/${doc.slugAsParams}`,
            languages: {
                en: [
                    {
                        url: `${baseUrl}/adventure-in-rishikesh/${doc.slugAsParams}`,
                    },
                ],
            },
            types: {
                url: `${baseUrl}/adventure-in-rishikesh/${doc.slugAsParams}`,
            },
        },

        openGraph: {
            title: name,
            description: doc?.description,
            url: `${baseUrl}/adventure-in-rishikesh/${doc.slugAsParams}`,
            images: [doc?.image],
            siteName: "Sea Hawk Adventures",
        },

        twitter: {
            card: "summary_large_image",
            title: name,
            description: doc?.description,
            images: [doc?.image],
        },
    };
}
