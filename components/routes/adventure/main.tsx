"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Filter, Clock, Users, Award } from "lucide-react";
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
import {
    __R1__,
    __R2__,
    __R3__,
    __R4__,
    __K1__,
    __K2__,
    __E1__,
    __E2__,
    __C1__,
    __C2__,
    __gallery__,
    __faq__,
    __itinerary__,
} from "@/config/package";
import { Package } from "@/types/package";



export default function AdventurePackages() {
    const [selectedCategory, setSelectedCategory] = React.useState("all");
    const [sortBy, setSortBy] = React.useState("popular");

    const packages: Record<string, Package[]> = {
        rafting: [__R1__.__p__, __R2__.__p__, __R3__.__p__, __R4__.__p__],
        kayaking: [__K1__.__p__, __K2__.__p__],
        expedition: [__E1__.__p__, __E2__.__p__],
        camping: [__C1__.__p__, __C2__.__p__],
    };

    const allPackages = React.useMemo(() => {
        let filteredPackages = Object.values(packages).flat();

        if (selectedCategory !== "all") {
            filteredPackages =
                packages[selectedCategory as keyof typeof packages] || [];
        }

        switch (sortBy) {
            case "price-low":
                return [...filteredPackages].sort((a, b) => a.price - b.price);
            case "price-high":
                return [...filteredPackages].sort((a, b) => b.price - a.price);
            case "duration":
                return [...filteredPackages].sort((a, b) => {
                    const durationA = parseInt(a.duration);
                    const durationB = parseInt(b.duration);
                    return durationA - durationB;
                });
            default:
                return filteredPackages;
        }
    }, [selectedCategory, sortBy]);

    return (
        <main className="-mt-20 flex-1 pt-20">
            {/* Hero Section */}
            <section className="relative flex h-[50vh] items-center md:h-[70vh]">
                <Image
                    src="https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1213.jpg"
                    alt="About Sea Hawk Adventure"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="relative z-10 mx-auto mt-auto flex w-full max-w-full items-end px-4 md:px-16 xl:px-10">
                    <div className="max-w-4xl">
                        <h5 className="mb-3 tracking-wide text-white/90">
                            EXPLORE OUR OFFERINGS
                        </h5>
                        <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
                            Adventure Packages
                        </h1>
                        <p className="mb-8 max-w-2xl text-lg text-white/90">
                            Choose from a variety of adventure packages designed
                            to suit different interests and experience levels.
                            We at Sea Hawk Adventure offer a range of packages
                            to cater to all your adventure needs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-16 xl:px-10">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="flex items-center gap-4">
                            <Filter className="h-5 w-5 text-gray-500" />
                            <h3 className="text-lg font-medium">
                                Filter Packages
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button
                                variant="outline"
                                className={`rounded-full ${
                                    selectedCategory === "all"
                                        ? "bg-primary border-primary hover:bg-primary/90 text-white hover:text-white"
                                        : ""
                                }`}
                                onClick={() => setSelectedCategory("all")}
                            >
                                All Packages
                            </Button>
                            <Button
                                variant="outline"
                                className={`rounded-full ${
                                    selectedCategory === "rafting"
                                        ? "bg-primary border-primary hover:bg-primary/90 text-white hover:text-white"
                                        : ""
                                }`}
                                onClick={() => setSelectedCategory("rafting")}
                            >
                                Rafting
                            </Button>
                            <Button
                                variant="outline"
                                className={`rounded-full ${
                                    selectedCategory === "kayaking"
                                        ? "bg-primary border-primary hover:bg-primary/90 text-white hover:text-white"
                                        : ""
                                }`}
                                onClick={() => setSelectedCategory("kayaking")}
                            >
                                Kayaking
                            </Button>
                            <Button
                                variant="outline"
                                className={`rounded-full ${
                                    selectedCategory === "expedition"
                                        ? "bg-primary border-primary hover:bg-primary/90 text-white hover:text-white"
                                        : ""
                                }`}
                                onClick={() =>
                                    setSelectedCategory("expedition")
                                }
                            >
                                Expedition
                            </Button>
                            <Button
                                variant="outline"
                                className={`rounded-full ${
                                    selectedCategory === "camping"
                                        ? "bg-primary border-primary hover:bg-primary/90 text-white hover:text-white"
                                        : ""
                                }`}
                                onClick={() => setSelectedCategory("camping")}
                            >
                                Camping
                            </Button>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-gray-700">Sort by:</span>
                            <select
                                className="focus:ring-primary/50 rounded-lg border border-gray-200 px-3 py-1 text-sm focus:ring-2 focus:outline-none"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="popular">Popular</option>
                                <option value="price-low">
                                    Price: Low to High
                                </option>
                                <option value="price-high">
                                    Price: High to Low
                                </option>
                                <option value="duration">Duration</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-16">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-16 xl:px-10">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {allPackages.map((pkg, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden shadow-none"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <CldImage
                                        src={
                                            pkg.image.src || "/placeholder.svg"
                                        }
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
                                        {pkg.price === 0 ? (
                                            <>
                                                <span className="text-sm text-gray-500">
                                                    Price starting from
                                                </span>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-3xl font-medium">
                                                        ₹12,000
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-3xl font-medium">
                                                        ₹{pkg.price}
                                                    </span>
                                                    <span className="text-sm text-gray-500 line-through">
                                                        ₹
                                                        {pkg.price +
                                                            (pkg.price * 15) /
                                                                100}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-gray-500">
                                                    per person
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    {pkg.price === 0 ? (
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
                                    ) : (
                                        <Button className="rounded-full bg-blue-700 font-medium hover:bg-blue-800">
                                            <Link
                                                href={pkg.link}
                                                className="flex w-full items-center justify-center"
                                            >
                                                Book Now
                                            </Link>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
