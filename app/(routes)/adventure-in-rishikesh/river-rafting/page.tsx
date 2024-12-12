"use client"
import { DateSelector } from "@/components/date-selector";
import { Call, Whatsapp } from "@/components/icons";
import { RaftingForm } from "@/components/rafting/rafting-form";
import { Bookmark, ChevronRight, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RaftingPage = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <section className="font-monr relative isolate py-10">
            <div className="mx-auto max-w-full px-0 md:max-w-[80%]">
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
                        <div className="flex items-center  gap-2 text-sm">
                            <div className="flex items-center gap-2">
                                <Star className="size-4" />
                                4.9 (23K+ community reviews)
                            </div>
                            <span>.</span>
                            <div className="flex items-center gap-2">
                                <Bookmark className="size-4" />
                                4.9 (23K+ community reviews)
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

                    <article className="mt-10 flex justify-between">
                        <div className="w-full basis-[50%] space-y-10">
                            <p>
                                Enjoy a thrilling river rafting experience in Rishikesh, where
                                the waters rage and hearts pound
                            </p>
                            <div className="grid grid-cols-3 gap-5">
                                <div className="rounded-2xl border p-5">
                                    <h3 className="font-monm text-lg">Safety Instrument</h3>
                                    <p className="mt-2 text-sm">
                                        Paddles, safety aids, life jackets, helmets, throw bags, and
                                        dry bags
                                    </p>
                                </div>
                                <div className="rounded-2xl border p-5">
                                    <h3 className="font-monm text-lg">Transport</h3>
                                    <p className="mt-2 text-sm">
                                        Transportation to and from Laxman Julla
                                    </p>
                                </div>
                                <div className="rounded-2xl border p-5">
                                    <h3 className="font-monm text-lg">Trained Guide</h3>
                                    <p className="mt-2 text-sm">
                                        Highly trained guide with over 10 years of experience
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="space-y-5">
                                <h3 className="text-3xl">Things to Know</h3>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>
                                        <span className="font-monm">Our commitment</span>: Certified
                                        guides, clean changing rooms, no hidden fees.
                                    </li>
                                    <li>
                                        <span className="font-monm">Timings</span>: Hourly time slots from 7:00 AM to 4:00 PM. 7 AM, 8AM,
                                        9AM....4PM.
                                    </li>
                                    <li>
                                        <span className="font-monm">Location</span>: Pickup / drop from Tapovan (Laxman Jhulla). If outside, report to our Tapovan office.
                                    </li>
                                    <li>
                                        <span className="font-monm">Age / Weight</span>: 15-60 years, 35-110kg.
                                    </li>
                                    <li>
                                        <span className="font-monm">Photo / Video</span>: Additional charge (~₹300) paid directly to the guide.
                                    </li>
                                </ul>
                            </div>

                            <hr />

                            <div>
                                <h1 className="text-3xl text-gray-900 mb-8">
                                    Choose from available options
                                </h1>

                                <RaftingForm />



                            </div>





                        </div>

                        <div className="h-fit sticky top-5 basis-[32%] rounded-xl border px-4 py-2">
                            <div className="flex items-center gap-4">
                                <p className="pr-16 text-3xl">₹349</p>
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
