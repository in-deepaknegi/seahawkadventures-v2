"use client";

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
import { Clock, Users, Award } from "lucide-react";
import Link from "next/link";
import { Wave1 } from "../shared/wave";
import { CldImage } from "next-cloudinary";

const packages = {
    rafting: [
        {
            title: "12 Km Rafting",
            description:
                "Perfect for first-timers, experience Grade I-II rapids with expert guides",
            duration: "2 hours",
            link: "/tours/ganga-river-rafting-marine-drive-shivpuri",
            groupSize: "6-8 people",
            price: "₹ 599",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        },
        {
            title: "16 Km Rafting",
            description:
                "Navigate through exciting Grade II-III rapids with increased difficulty",
            duration: "3 hours",
            link: "/tours/ganga-river-rafting-shivpuri-tapovan",
            groupSize: "6-8 people",
            price: "₹ 999",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3104.jpg",
        },
        {
            title: "26 Km Rafting",
            description:
                "Conquer Grade III-IV rapids for experienced rafters seeking an adrenaline rush",
            duration: "4 hours",
            link: "/tours/ganga-river-rafting-marine-drive-tapovan",
            groupSize: "6-8 people",
            price: "₹ 1499",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3105.jpg",
        },
        {
            title: "36 Km Rafting",
            description:
                "Conquer Grade III-IV rapids for experienced rafters seeking an adrenaline rush",
            duration: "4 hours",
            link: "/tours/ganga-river-rafting-marine-drive-tapovan",
            groupSize: "6-8 people",
            price: "₹ 2499",
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
            price: "₹ 3499",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1744875212/img-3202.jpg",
        },
        {
            title: "Complete Kayak Lessons (7 days)",
            description:
                "Learn fundamental kayaking skills in calm waters with certified instructors",
            duration: "2-3 hours per day",
            link: "/tours/kayak-complete-lessons-in-rishikesh",
            groupSize: "2-5 people",
            price: "₹ 2999",
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
            price: "₹2000",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3508.jpg",
        },
        {
            title: "Kayak Expedition",
            description:
                "Experience the wilderness with an overnight camping expedition",
            duration: "2 days",
            link: "#",
            groupSize: "8-12 people",
            price: "₹4500",
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
            price: "₹ 2200",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3508.jpg",
        },
        {
            title: "Camping without Rafting",
            description:
                "Experience the wilderness with an overnight camping expedition",
            duration: "1 day 1 night",
            link: "#",
            groupSize: "No limit",
            price: "₹1500",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3504.jpg",
        },
    ],
};

export default function Packages() {
    return (
        <section id="packages" className="relative -mt-1 bg-blue-50 py-16">
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

                <Tabs defaultValue="rafting" className="relative z-20 w-full">
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
                                                    <span>{pkg.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-blue-600" />
                                                    <span>{pkg.groupSize}</span>
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
        </section>
    );
}
