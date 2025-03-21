import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mdx } from "@/mdx-components";

import {
    Bookmark,
    Calendar,
    CheckCircle2,
    ChevronDown,
    ChevronRight,
    MapPin,
    Star,
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
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
    let content_3 = null;
    let content_4 = null;
    let content_5 = null;

    switch (doc?.slug) {
        case "river-rafting":
            content = raftingConfig.package;
            content_0 = raftingConfig.gallery;
            content_1 = raftingConfig.pre_requisites;
            content_2 = raftingConfig.features;
            content_3 = raftingConfig.itinerary;
            content_4 = raftingConfig.faq;
            content_5 = raftingConfig.tnk;
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
            <main className="font-sans">
                <section className="relative isolate py-10">
                    <div className="mx-auto max-w-full px-5 md:max-w-5xl md:px-10 xl:max-w-7xl">
                        <div>
                            <div className="flex flex-wrap items-center gap-1 text-base text-gray-700">
                                <div>Rishikesh</div>
                                <ChevronRight className="size-4" />
                                <div>Experience</div>
                                <ChevronRight className="size-4" />
                                <div className="text-black">{doc?.title}</div>
                            </div>

                            <div className="mt-10 flex flex-col gap-2.5">
                                <h1 className="text-5xl font-medium">
                                    {doc?.title}
                                </h1>
                                <div className="flex flex-col gap-8 text-xs md:flex-row md:items-center md:text-base">
                                    <div className="flex items-center gap-2">
                                        <Star className="size-4 fill-yellow-500 text-yellow-500" />
                                        5/5 (125 reviews)
                                    </div>
                                    <span className="hidden md:block">.</span>
                                    <div className="flex items-center gap-2">
                                        <Bookmark className="size-4 fill-rose-600 text-rose-600" />
                                        #3 of 200 Tours & Activities in
                                        Rishikesh
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

                            <div className="mx-auto py-8">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    {/* Left Column */}
                                    <div className="space-y-10 md:col-span-2">
                                        {/* Trip Details */}
                                        {/* <div className="overflow-hidden rounded-lg border bg-white">
                                            <div className="flex items-center gap-2 bg-blue-900 px-2 py-1 font-semibold text-white">
                                                <Calendar className="h-5 w-5" />
                                                3 Days | INR 19,500
                                            </div>
                                            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
                                                <div>
                                                    <ul className="space-y-1">
                                                        <li className="flex items-start gap-2">
                                                            <span className="mt-1 text-blue-500">
                                                                •
                                                            </span>
                                                            <span>
                                                                Expert guiding
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="mt-1 text-blue-500">
                                                                •
                                                            </span>
                                                            <span>
                                                                Everything you
                                                                need
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="mt-1 text-blue-500">
                                                                •
                                                            </span>
                                                            <span>
                                                                Best
                                                                accommodation
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <ul className="space-y-1">
                                                        <li className="flex items-start gap-2">
                                                            <span className="mt-1 text-blue-500">
                                                                •
                                                            </span>
                                                            <span>Meals</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="mt-1 text-blue-500">
                                                                •
                                                            </span>
                                                            <span>
                                                                Transfers from
                                                                Rishikesh
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* Pre-requisites */}
                                        {content_1 != undefined && (
                                            <div className="overflow-hidden rounded-lg border bg-white">
                                                <div className="flex items-center gap-2 bg-blue-600 px-4 py-2 font-medium text-white">
                                                    <CheckCircle2 className="h-5 w-5" />
                                                    Pre-requisites
                                                </div>
                                                <div className="p-4">
                                                    <ol className="list-decimal space-y-1 pl-5">
                                                        {content_1?.map(
                                                            (item) => (
                                                                <li key={item}>
                                                                    {item}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ol>
                                                </div>
                                            </div>
                                        )}

                                        {/* Features */}
                                        {content_2 != undefined && (
                                            <div className="mt-10 grid gap-5 md:grid-cols-3">
                                                {content_2?.map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="rounded-2xl border p-4"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <Image
                                                                src={item.icon}
                                                                alt={item.label}
                                                                width={100}
                                                                height={100}
                                                                className="size-9"
                                                            />
                                                            <h3 className="text-lg font-medium">
                                                                {item.label}
                                                            </h3>
                                                        </div>
                                                        <p className="mt-2 text-[15px]">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* packages */}
                                        <div className="overflow-hidden rounded-lg border bg-white">
                                            <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 font-medium text-white">
                                                <MapPin className="h-5 w-5" />
                                                Packages
                                            </div>
                                            <div className="p-4">
                                                <RaftingForm
                                                    packages={content}
                                                    price={content[0]?.price}
                                                />
                                            </div>
                                        </div>

                                        {/* Itinerary */}
                                        <div className="overflow-hidden rounded-lg border bg-white">
                                            <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 font-medium text-white">
                                                <MapPin className="h-5 w-5" />
                                                ITINERARY
                                            </div>

                                            <div className="space-y-4 p-4">
                                                {content_3?.map((item, i) => (
                                                    <div key={i}>
                                                        <h3 className="text-lg font-medium">
                                                            {item.label}
                                                        </h3>
                                                        <p className="text-base text-gray-600">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Gallery */}
                                        {/* <div className="grid grid-cols-4 gap-2">
                                            <div className="col-span-4">
                                                <Image
                                                    src="/placeholder.svg?height=300&width=800"
                                                    alt="Kayaking"
                                                    width={800}
                                                    height={300}
                                                    className="h-48 w-full rounded-lg object-cover"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/placeholder.svg?height=150&width=150"
                                                    alt="Kayaking"
                                                    width={150}
                                                    height={150}
                                                    className="h-24 w-full rounded-lg object-cover"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/placeholder.svg?height=150&width=150"
                                                    alt="Kayaking"
                                                    width={150}
                                                    height={150}
                                                    className="h-24 w-full rounded-lg object-cover"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/placeholder.svg?height=150&width=150"
                                                    alt="Kayaking"
                                                    width={150}
                                                    height={150}
                                                    className="h-24 w-full rounded-lg object-cover"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/placeholder.svg?height=150&width=150"
                                                    alt="Kayaking"
                                                    width={150}
                                                    height={150}
                                                    className="h-24 w-full rounded-lg object-cover"
                                                />
                                            </div>
                                        </div> */}

                                        {/* Weather & Terrain */}
                                        {/* <div className="overflow-hidden rounded-lg border bg-white">
                                            <div className="bg-blue-500 p-4 font-semibold text-white">
                                                Weather & terrain
                                            </div>
                                            <div className="p-4">
                                                <div className="overflow-x-auto">
                                                    <table className="min-w-full text-xs">
                                                        <thead>
                                                            <tr className="bg-gray-100">
                                                                <th className="border p-2">
                                                                    Temp (in °C)
                                                                </th>
                                                                <th className="border p-2">
                                                                    Oct
                                                                </th>
                                                                <th className="border p-2">
                                                                    Nov
                                                                </th>
                                                                <th className="border p-2">
                                                                    Dec
                                                                </th>
                                                                <th className="border p-2">
                                                                    Jan
                                                                </th>
                                                                <th className="border p-2">
                                                                    Feb
                                                                </th>
                                                                <th className="border p-2">
                                                                    Mar
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="border p-2">
                                                                    Max
                                                                </td>
                                                                <td className="border p-2">
                                                                    30
                                                                </td>
                                                                <td className="border p-2">
                                                                    27
                                                                </td>
                                                                <td className="border p-2">
                                                                    23
                                                                </td>
                                                                <td className="border p-2">
                                                                    20
                                                                </td>
                                                                <td className="border p-2">
                                                                    24
                                                                </td>
                                                                <td className="border p-2">
                                                                    29
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="border p-2">
                                                                    Min
                                                                </td>
                                                                <td className="border p-2">
                                                                    18
                                                                </td>
                                                                <td className="border p-2">
                                                                    12
                                                                </td>
                                                                <td className="border p-2">
                                                                    8
                                                                </td>
                                                                <td className="border p-2">
                                                                    6
                                                                </td>
                                                                <td className="border p-2">
                                                                    9
                                                                </td>
                                                                <td className="border p-2">
                                                                    13
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* FAQ */}
                                        <div className="overflow-hidden rounded-lg border bg-white">
                                            <div className="p-4 text-center font-semibold">
                                                Frequently asked questions
                                            </div>
                                            <Accordion
                                                iconVariant="plus-minus"
                                                className="mx-auto flex w-full max-w-full flex-col divide-y divide-zinc-200 p-10"
                                                transition={{
                                                    duration: 0.2,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                {content_4?.map((item, i) => (
                                                    <AccordionItem
                                                        key={i}
                                                        value={item.id}
                                                        className="py-2"
                                                    >
                                                        <AccordionTrigger className="w-full text-left text-zinc-950">
                                                            <div className="flex items-center justify-between gap-2">
                                                                <span>
                                                                    <item.icon className="size-4 text-neutral-400" />
                                                                </span>
                                                                <div>
                                                                    {item.title}
                                                                </div>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <p className="pl-5 text-zinc-700">
                                                                {item.content}
                                                            </p>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                ))}
                                            </Accordion>
                                        </div>

                                        {/* Things to Know */}
                                        <div className="overflow-hidden rounded-lg border bg-white">
                                            <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 font-medium text-white">
                                                <CheckCircle2 className="h-5 w-5" />
                                                THINGS TO KNOW
                                            </div>

                                            {content_5 != undefined && (
                                                <div className="space-y-2 p-4 text-base">
                                                    {content_5?.map(
                                                        (item, i) => (
                                                            <div key={i}>
                                                                <p className="font-medium text-lg">
                                                                    {item.label}
                                                                </p>
                                                                <p className="text-gray-700">
                                                                    {
                                                                        item.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-6">
                                        {/* Booking Info */}
                                        <div className="overflow-hidden rounded-lg border bg-white">
                                        <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 font-medium text-white">

                                                <Calendar className="h-5 w-5" />
                                                Upcoming Slots - 2024-25
                                            </div>
                                            <div className="space-y-3 p-4 text-sm">
                                                <p>
                                                    <span className="font-semibold">
                                                        Weekend: APR 27-29 &
                                                        30-MAY 2
                                                    </span>
                                                    <br />
                                                    <span className="text-gray-600">
                                                        Weekday: MAY 7-9 & 14-16
                                                        & 21-23
                                                    </span>
                                                </p>
                                                <p className="font-semibold">
                                                    Bookings closed for 2023-24
                                                </p>
                                                <button className="w-full rounded-md bg-blue-500 py-2 font-semibold text-white transition hover:bg-blue-600">
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Why Choose Section */}
                                {/* <div className="mt-12">
                                    <h2 className="mb-8 text-center text-xl font-bold">
                                        Why choose AdventurePlay?
                                    </h2>
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="mb-3 rounded-full bg-blue-100 p-4">
                                                <Image
                                                    src="/placeholder.svg?height=50&width=50"
                                                    alt="Verified"
                                                    width={50}
                                                    height={50}
                                                    className="h-10 w-10"
                                                />
                                            </div>
                                            <h3 className="mb-2 font-semibold">
                                                Verified & researched
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                We have spent years of
                                                experience researching the best
                                                adventure activities in India
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <div className="mb-3 rounded-full bg-blue-100 p-4">
                                                <Image
                                                    src="/placeholder.svg?height=50&width=50"
                                                    alt="Locations"
                                                    width={50}
                                                    height={50}
                                                    className="h-10 w-10"
                                                />
                                            </div>
                                            <h3 className="mb-2 font-semibold">
                                                Find locations
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Our adventures happen in
                                                locations that are carefully
                                                selected for maximum fun
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <div className="mb-3 rounded-full bg-blue-100 p-4">
                                                <Image
                                                    src="/placeholder.svg?height=50&width=50"
                                                    alt="Better prices"
                                                    width={50}
                                                    height={50}
                                                    className="h-10 w-10"
                                                />
                                            </div>
                                            <h3 className="mb-2 font-semibold">
                                                Better prices
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                We find you the best deals with
                                                our network of adventure
                                                providers
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <div className="mb-3 rounded-full bg-blue-100 p-4">
                                                <Image
                                                    src="/placeholder.svg?height=50&width=50"
                                                    alt="One-stop"
                                                    width={50}
                                                    height={50}
                                                    className="h-10 w-10"
                                                />
                                            </div>
                                            <h3 className="mb-2 font-semibold">
                                                One-stop
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                All your adventure needs in one
                                                place - from gear rental to
                                                guides
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            <div className="mt-20 flex gap-10">
                                <article className="w-full space-y-10">
                                    {/* {doc?.description} */}

                                    {/* {doc?.body && <Mdx code={doc?.body.code} />} */}

                                    {/* {content_2 != undefined && (
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
                                                                <div className="h-full py-5 pr-5 pl-5 md:py-10 md:pr-10 md:pl-0">
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
                                    )} */}

                                    {/* <div>
                                        <h3 className="mt-10 text-3xl text-gray-900">
                                            From Sea-Hawk Community
                                        </h3>
                                        <ul className="mt-10 ml-5 list-disc">
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
                                    </div> */}
                                </article>
                                {/* <div className="sticky top-5 col-span-4 hidden h-fit w-full max-w-[22rem] rounded-xl border px-4 py-2 md:block">
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
                                </div> */}
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
