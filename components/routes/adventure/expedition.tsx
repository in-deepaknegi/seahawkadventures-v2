"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { RiArrowRightLine } from "@remixicon/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { packages } from "@/config/adventure";

export default function Expedition() {
    const raftingPackages = packages.expedition;

    return (
        <main className="-mt-20 flex-1 pt-20">
            {/* Hero Section */}
            <section className="relative pt-40">
                <div className="relative z-10 mx-auto mt-auto flex w-full max-w-full flex-col items-center px-4 text-center md:px-16 xl:px-10">
                    <h5 className="mb-3 tracking-wide text-black">
                        ADVENTURE EXPEDITIONS
                    </h5>
                    <h1 className="mb-6 text-5xl font-medium text-black md:text-6xl">
                        Epic Adventure Expeditions
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg text-gray-600">
                        Embark on thrilling multi-day expeditions through the
                        Himalayas. From challenging treks to camping adventures,
                        experience the raw beauty of nature with our expert-led
                        expeditions.
                    </p>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-16 xl:px-10">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {raftingPackages.map((pkg, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden shadow-none"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <CldImage
                                        src={pkg.image || "/placeholder.svg"}
                                        alt={pkg.title}
                                        width={1080}
                                        height={680}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <CardHeader className="bg-white text-black">
                                    <CardTitle className="text-2xl font-medium">
                                        {pkg.title}
                                    </CardTitle>
                                    <CardDescription className="text-black">
                                        {pkg.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="bg-white text-black">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-blue-600" />
                                            <span>{pkg.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-blue-600" />
                                            <span>{pkg.groupSize}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Award className="h-4 w-4 text-blue-600" />
                                            <span>Professional guides</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between gap-4 bg-white p-6 text-black">
                                    <div className="flex flex-col">
                                        <div className="flex flex-col items-baseline gap-2">
                                            <span className="text-sm text-gray-500">
                                                Price starting from
                                            </span>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-3xl font-medium">
                                                    ₹12,000
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Button className="rounded-full bg-green-500/90 font-normal text-black hover:bg-green-500">
                                            <Link
                                                href={`https://wa.me/919756620538/?text=Hi there. I'm interested in ${pkg.title} package, can you please share the details?`}
                                                target="_blank"
                                                className="flex w-full items-center justify-center gap-1"
                                            >
                                                Enquire Now
                                            </Link>
                                        </Button>

                                        <Link
                                            href={pkg.link}
                                            className="flex w-full items-center justify-center gap-1 text-sm hover:text-blue-600"
                                        >
                                            More details
                                            <RiArrowRightLine className="size-4" />
                                        </Link>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
