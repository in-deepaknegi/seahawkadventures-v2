"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Call, Whatsapp } from "@/components/icons";
import { RaftingForm } from "@/components/rafting/rafting-form";
import { Bookmark, ChevronRight, Star } from "lucide-react";

const RaftingPage = () => {
    return (
        <section className="relative isolate overflow-hidden py-10 font-monr">
            <div className="mx-auto max-w-full px-5 md:max-w-[85%] md:px-0 xl:max-w-[78%]">
                <div>
                    <div className="flex items-center gap-1 text-sm">
                        <div>Rishikesh</div>
                        <ChevronRight className="size-4" />
                        <div>Experience</div>
                        <ChevronRight className="size-4" />
                        <div>River Rafting</div>
                    </div>

                    <div className="mt-10 flex flex-col gap-2.5">
                        <h1 className="text-4xl">River Rafting</h1>
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

                    <article className="mt-10 grid grid-cols-1 justify-between gap-5 md:grid-cols-12">
                        <div className="col-span-8 w-full space-y-10">
                            <p>
                                Enjoy a thrilling river rafting experience in
                                Rishikesh, where the waters rage and hearts
                                pound
                            </p>
                            <div className="grid gap-5 md:grid-cols-3">
                                <div className="rounded-2xl border p-5">
                                    <h3 className="font-monm text-lg">
                                        Safety Instrument
                                    </h3>
                                    <p className="mt-2 text-sm">
                                        Paddles, safety aids, life jackets,
                                        helmets, throw bags, and dry bags
                                    </p>
                                </div>
                                <div className="rounded-2xl border p-5">
                                    <h3 className="font-monm text-lg">
                                        Transport
                                    </h3>
                                    <p className="mt-2 text-sm">
                                        Transportation to and from Laxman Julla
                                    </p>
                                </div>
                                <div className="rounded-2xl border p-5">
                                    <h3 className="font-monm text-lg">
                                        Trained Guide
                                    </h3>
                                    <p className="mt-2 text-sm">
                                        Highly trained guide with over 10 years
                                        of experience
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="space-y-5">
                                <h3 className="text-3xl">Things to Know</h3>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>
                                        <span className="font-monm">
                                            Our commitment
                                        </span>
                                        : Certified guides, clean changing
                                        rooms, no hidden fees.
                                    </li>
                                    <li>
                                        <span className="font-monm">
                                            Timings
                                        </span>
                                        : Hourly time slots from 7:00 AM to 4:00
                                        PM. 7 AM, 8AM, 9AM....4PM.
                                    </li>
                                    <li>
                                        <span className="font-monm">
                                            Location
                                        </span>
                                        : Pickup / drop from Tapovan (Laxman
                                        Jhulla). If outside, report to our
                                        Tapovan office.
                                    </li>
                                    <li>
                                        <span className="font-monm">
                                            Age / Weight
                                        </span>
                                        : 15-60 years, 35-110kg.
                                    </li>
                                    <li>
                                        <span className="font-monm">
                                            Photo / Video
                                        </span>
                                        : Additional charge (~₹300) paid
                                        directly to the guide.
                                    </li>
                                </ul>
                            </div>

                            <hr />

                            <div>
                                <h3 className="mb-8 text-3xl text-gray-900">
                                    Choose from available options
                                </h3>

                                <RaftingForm />
                            </div>

                            <div>
                                <h3 className="mb-8 text-3xl text-gray-900">
                                    What will you do
                                </h3>
                                <div className="flex gap-10">
                                    <div className="hidden flex-col items-center md:flex">
                                        <div className="h-4 w-4 rounded-full bg-blue-600" />
                                        <div className="h-full w-[1px] border" />
                                        <div className="h-4 w-4 rounded-full bg-blue-600" />
                                        <div className="h-full w-[1px] border" />
                                    </div>
                                    <div className="flex flex-col gap-10">
                                        <div className="grid overflow-hidden rounded-2xl border md:grid-cols-2">
                                            <Image
                                                src="/images/rafting/r05.jpg"
                                                alt=""
                                                width={1980}
                                                height={1020}
                                                className="aspect-video h-full w-full object-cover md:w-[18rem]"
                                            />
                                            <div className="py-10 pl-10 pr-10 md:pl-0">
                                                <h4 className="text-2xl">
                                                    White Water Rafting
                                                </h4>
                                                <p className="mt-5 text-sm">
                                                    Engage in enthralling white
                                                    water rafting expedition on
                                                    the mighty Ganges in
                                                    Rishikesh. Navigate through
                                                    the thrilling rapids amidst
                                                    the mountains
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid overflow-hidden rounded-2xl border md:grid-cols-2">
                                            <Image
                                                src="/images/rafting/r08.jpg"
                                                alt=""
                                                width={1980}
                                                height={1020}
                                                className="aspect-video h-full w-full object-cover md:w-[18rem]"
                                            />
                                            <div className="py-10 pl-10 pr-10 md:pl-0">
                                                <h4 className="text-2xl">
                                                    Body Surfing
                                                </h4>
                                                <p className="mt-5 text-sm">
                                                    Experience the body surfing
                                                    and swimming in the holy
                                                    river Ganga with Life Jacket
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div>
                                <h3 className="mb-8 text-3xl text-gray-900">
                                    From Sea-Hawk Community
                                </h3>
                                <ul className="list-disc ml-5">
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


                                <p className="mt-10 ml-5">
                                    Please Note: The total GoPro video price for one
                                    raft is ₹2000. This amount is equally divided
                                    among the members who want the video, so it will
                                    be approximately ₹300 per person.
                                </p>

                            </div>
                        </div>

                        <div className="sticky top-5 col-span-4 hidden h-fit rounded-xl border px-4 py-2 md:block">
                            <div className="flex items-center gap-4">
                                <p className="text-3xl">₹349</p>
                                <Link
                                    href="#"
                                    className="flex w-fit items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-white"
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
                    </article>
                </div>
            </div>
        </section>
    );
};

export default RaftingPage;
