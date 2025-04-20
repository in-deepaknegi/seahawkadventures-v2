"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, Check } from "lucide-react";
import Link from "next/link";
import { Wave1 } from "../shared/wave";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

const packages = {
    rafting: [
        {
            title: "12 Km Rafting",
            description:
                "Perfect for first-timers, experience Grade I-II rapids with expert guides",
            duration: "2 hours",
            link: "/tours/ganga-river-rafting-marine-drive-shivpuri",
            groupSize: "6-8 people",
            price: 599,
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        },
        {
            title: "16 Km Rafting",
            description:
                "Navigate through exciting Grade II-III rapids with increased difficulty",
            duration: "3 hours",
            link: "/tours/ganga-river-rafting-shivpuri-tapovan",
            groupSize: "6-8 people",
            price: 999,
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3104.jpg",
        },
        {
            title: "26 Km Rafting",
            description:
                "Conquer Grade III-IV rapids for experienced rafters seeking an adrenaline rush",
            duration: "4 hours",
            link: "/tours/ganga-river-rafting-marine-drive-tapovan",
            groupSize: "6-8 people",
            price: 1499,
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3105.jpg",
        },
        {
            title: "36 Km Rafting",
            description:
                "Conquer Grade III-IV rapids for experienced rafters seeking an adrenaline rush",
            duration: "4 hours",
            link: "/tours/ganga-river-rafting-marine-drive-tapovan",
            groupSize: "6-8 people",
            price: 2499,
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3105.jpg",
        },
    ],
    kayaking: [
        {
            title: "Basics Kayak Lessons (4 days)",
            description:
                "Learn fundamental kayaking skills in calm waters with certified instructors",
            duration: "2-3 hours per day",
            link: "/tours/kayak-basic-lessons-in-rishikesh",
            groupSize: "2-5 people",
            price: 3499,
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1744875212/img-3202.jpg",
        },
        {
            title: "Complete Kayak Lessons (7 days)",
            description:
                "Learn fundamental kayaking skills in calm waters with certified instructors",
            duration: "2-3 hours per day",
            link: "/tours/kayak-complete-lessons-in-rishikesh",
            groupSize: "2-5 people",
            price: 2999,
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1744794356/img_3200.heic",
        },
    ],
    expedition: [
        {
            title: "Rafting Expedition",
            description:
                "Explore the foothills of the Himalayas with a guided day trek",
            duration: "8 hours",
            link: "#",
            groupSize: "8-12 people",
            price: 2000,
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3508.jpg",
        },
        {
            title: "Kayak Expedition",
            description:
                "Experience the wilderness with an overnight camping expedition",
            duration: "2 days",
            link: "#",
            groupSize: "8-12 people",
            price: 4500,
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3504.jpg",
        },
    ],
    camping: [
        {
            title: "Camping with Rafting (16 Km)",
            description:
                "Explore the foothills of the Himalayas with a guided day trek",
            duration: "1 day 1 night",
            link: "#",
            groupSize: "No limit",
            price: 2200,
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3508.jpg",
        },
        {
            title: "Camping without Rafting",
            description:
                "Experience the wilderness with an overnight camping expedition",
            duration: "1 day 1 night",
            link: "#",
            groupSize: "No limit",
            price: 1500,
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3504.jpg",
        },
    ],
};

export default function Packages() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false }),
    );

    return (
        <>
            {/* <section id="packages" className="relative -mt-1 bg-blue-50 py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-10">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-medium md:text-6xl">
                            Our Adventure Packages
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg">
                            Choose from our range of expertly crafted adventure
                            packages designed for all skill levels
                        </p>
                    </div>

                    <Tabs
                        defaultValue="rafting"
                        className="relative z-20 w-full"
                    >
                        <TabsList className="mx-auto mb-8 grid h-full w-full max-w-3xl grid-cols-4 bg-blue-900 text-white">
                            <TabsTrigger value="rafting" className="text-lg">
                                Rafting
                            </TabsTrigger>
                            <TabsTrigger value="kayaking" className="text-lg">
                                Kayaking
                            </TabsTrigger>
                            <TabsTrigger value="expedition" className="text-lg">
                                Expedition
                            </TabsTrigger>
                            <TabsTrigger value="camping" className="text-lg">
                                Camping
                            </TabsTrigger>
                        </TabsList>

                        {Object.entries(packages).map(([category, items]) => (
                            <TabsContent
                                key={category}
                                value={category}
                                className="mt-0"
                            >
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {items.map((pkg, index) => (
                                        <Card
                                            key={index}
                                            className="overflow-hidden shadow-none"
                                        >
                                            <div className="relative h-60 overflow-hidden">
                                                <CldImage
                                                    src={
                                                        pkg.image ||
                                                        "/placeholder.svg"
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
                                                        <span>
                                                            {pkg.duration}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Users className="h-4 w-4 text-blue-600" />
                                                        <span>
                                                            {pkg.groupSize}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Award className="h-4 w-4 text-blue-600" />
                                                        <span>
                                                            Professional guides
                                                        </span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <CardFooter className="flex items-center justify-between bg-white text-black">
                                                <div className="text-xl font-bold text-blue-700">
                                                    {pkg.price}
                                                </div>
                                                <Button className="bg-blue-600 hover:bg-blue-700">
                                                    <Link href={pkg.link}>
                                                        Book Now
                                                    </Link>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
                <Wave1 />
            </section> */}

            <section id="packages" className="font-open-sans py-20 bg-white">
                <div className="">
                    <div className="mx-auto mb-14 max-w-3xl text-center">
                        <h2 className="mb-5 text-3xl font-medium md:text-4xl xl:text-5xl">
                            Our Adventure Packages
                        </h2>

                        <p className="text-gray-600">
                            Choose from our range of exciting rafting, kayaking,
                            expedition or adventure packages
                        </p>
                    </div>

                    <Tabs
                        defaultValue="rafting"
                        className="mx-auto w-full max-w-7xl px-10 md:px-16 xl:px-10"
                    >
                        <div className="mb-12 flex justify-center">
                            <TabsList className="h-auto rounded-full bg-gray-100 p-1">
                                <TabsTrigger
                                    value="rafting"
                                    className="rounded-full px-8 py-2 font-normal tracking-wide data-[state=active]:bg-blue-700 data-[state=active]:text-white cursor-pointer"
                                >
                                    Rafting
                                </TabsTrigger>
                                <TabsTrigger
                                    value="kayaking"
                                    className="rounded-full px-8 py-2 font-normal tracking-wide data-[state=active]:bg-blue-700 data-[state=active]:text-white cursor-pointer"
                                >
                                    Kayaking
                                </TabsTrigger>
                                <TabsTrigger
                                    value="expedition"
                                    className="rounded-full px-8 py-2 font-normal tracking-wide data-[state=active]:bg-blue-700 data-[state=active]:text-white cursor-pointer"
                                >
                                    Expedition
                                </TabsTrigger>
                                <TabsTrigger
                                    value="camping"
                                    className="rounded-full px-8 py-2 font-normal tracking-wide data-[state=active]:bg-blue-700 data-[state=active]:text-white cursor-pointer"
                                >
                                    Camping
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        {Object.entries(packages).map(([category, items]) => (
                            <TabsContent
                                key={category}
                                value={category}
                                className="mt-0"
                            >
                                <Carousel
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                    className="w-full"
                                >
                                    <CarouselContent className="-ml-4">
                                        {items.map((pkg, index) => (
                                            <CarouselItem
                                                key={index}
                                                className="pl-4 md:basis-1/2 lg:basis-1/3"
                                            >
                                                <Card className="overflow-hidden shadow-none">
                                                    <div className="relative h-60 overflow-hidden">
                                                        <CldImage
                                                            src={
                                                                pkg.image ||
                                                                "/placeholder.svg"
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
                                                                <span>
                                                                    {
                                                                        pkg.duration
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Users className="h-4 w-4 text-blue-600" />
                                                                <span>
                                                                    {
                                                                        pkg.groupSize
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Award className="h-4 w-4 text-blue-600" />
                                                                <span>
                                                                    Professional
                                                                    guides
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                    <CardFooter className="flex gap-4 justify-between bg-white p-6 text-black">
                                                        <div className="flex flex-col">
                                                            <div className="flex items-baseline gap-2">
                                                                <span className="text-3xl font-medium">₹{pkg.price}</span>
                                                                <span className="text-sm text-gray-500 line-through">₹{pkg.price + pkg.price * 15 / 100}</span>
                                                            </div>
                                                            <span className="text-xs text-gray-500">per person</span>
                                                        </div>
                                                        <Button className="rounded-full bg-blue-700 font-medium hover:bg-blue-800">
                                                            <Link href={pkg.link} className="flex w-full items-center justify-center">
                                                                Book Now
                                                            </Link>
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="absolute -left-10 z-50 hidden size-12 border-none bg-transparent bg-none shadow-none hover:bg-transparent md:block [&>svg]:size-8 [&>svg]:text-black" />
                                    <CarouselNext className="absolute -right-13 z-50 hidden size-12 border-none bg-transparent bg-none shadow-none hover:bg-transparent md:block [&>svg]:size-8 [&>svg]:text-black" />
                                </Carousel>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>
        </>
    );
}
