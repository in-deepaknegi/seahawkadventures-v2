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
import Image from "next/image";
import { Clock, Users, Award } from "lucide-react";

const packages = {
    rafting: [
        {
            title: "Beginner's Rafting Adventure",
            description:
                "Perfect for first-timers, experience Grade I-II rapids with expert guides",
            duration: "2 hours",
            groupSize: "6-8 people",
            price: "₹1,200",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        },
        {
            title: "Intermediate Rafting Challenge",
            description:
                "Navigate through exciting Grade II-III rapids with increased difficulty",
            duration: "3 hours",
            groupSize: "6-8 people",
            price: "₹1,800",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        },
        {
            title: "Advanced Rafting Expedition",
            description:
                "Conquer Grade III-IV rapids for experienced rafters seeking an adrenaline rush",
            duration: "4 hours",
            groupSize: "6-8 people",
            price: "₹2,500",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        },
    ],
    kayaking: [
        {
            title: "Kayaking Basics",
            description:
                "Learn fundamental kayaking skills in calm waters with certified instructors",
            duration: "2 hours",
            groupSize: "4-6 people",
            price: "₹1,500",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        },
        {
            title: "River Kayaking Tour",
            description:
                "Explore the scenic beauty of Rishikesh rivers with a guided kayaking tour",
            duration: "3 hours",
            groupSize: "4-6 people",
            price: "₹2,200",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        },
        {
            title: "Advanced Kayaking",
            description:
                "Master advanced techniques and navigate challenging water conditions",
            duration: "4 hours",
            groupSize: "4-6 people",
            price: "₹3,000",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        },
    ],
    expedition: [
        {
            title: "Himalayan Day Trek",
            description:
                "Explore the foothills of the Himalayas with a guided day trek",
            duration: "8 hours",
            groupSize: "8-12 people",
            price: "₹2,000",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        },
        {
            title: "Overnight Camping Adventure",
            description:
                "Experience the wilderness with an overnight camping expedition",
            duration: "2 days",
            groupSize: "8-12 people",
            price: "₹4,500",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        },
        {
            title: "Multi-Day Himalayan Expedition",
            description:
                "Embark on a comprehensive journey through diverse Himalayan landscapes",
            duration: "5 days",
            groupSize: "8-12 people",
            price: "₹12,000",
            image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        },
    ],
};

export default function Packages() {
    return (
        <section id="packages" className="relative -mt-1 bg-blue-50 py-16">
            <div className="mx-auto max-w-7xl px-10">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-medium md:text-6xl">
                        Our Adventure Packages
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg">
                        Choose from our range of expertly crafted adventure
                        packages designed for all skill levels
                    </p>
                </div>

                <Tabs defaultValue="rafting" className="w-full relative z-20">
                    <TabsList className="mx-auto mb-8 grid h-full w-full max-w-3xl grid-cols-3 bg-blue-900 text-white">
                        <TabsTrigger value="rafting" className="text-lg">
                            Rafting
                        </TabsTrigger>
                        <TabsTrigger value="kayaking" className="text-lg">
                            Kayaking
                        </TabsTrigger>
                        <TabsTrigger value="expedition" className="text-lg">
                            Expedition
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
                                        <div className="relative h-60">
                                            <Image
                                                src={
                                                    pkg.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={pkg.title}
                                                fill
                                                className="object-cover"
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
                                                Book Now
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
            <div className="absolute right-0 bottom-0 z-0 w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 840 200"
                    className=""
                >
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,160L80,165.3C160,171,320,181,480,160C640,139,800,85,960,69.3C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
