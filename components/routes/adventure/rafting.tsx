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

export default function Rafting() {
    const raftingPackages = packages.rafting;

    return (
        <main className="-mt-20 flex-1 pt-20">
            {/* Hero Section */}
            <section className="relative pt-40">
                <div className="relative z-10 mx-auto mt-auto flex w-full max-w-full items-center flex-col text-center px-4 md:px-16 xl:px-10">
                    <h5 className="mb-3 tracking-wide text-black">
                        WHITE WATER RAFTING
                    </h5>
                    <h1 className="mb-6 text-5xl font-medium text-black md:text-6xl">
                        River Rafting in Rishikesh
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg text-gray-600">
                        Experience the thrill of white water rafting on the
                        mighty Ganges. Choose from our range of rafting packages
                        designed for all experience levels.
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
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-medium">
                                                ₹{pkg.price}
                                            </span>
                                            <span className="text-sm text-gray-500 line-through">
                                                ₹
                                                {pkg.price +
                                                    (pkg.price * 15) / 100}
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-500">
                                            per person
                                        </span>
                                    </div>
                                    <Button className="rounded-full bg-blue-700 font-medium hover:bg-blue-800">
                                        <Link
                                            href={pkg.link}
                                            className="flex w-full items-center justify-center"
                                        >
                                            Book Now
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
