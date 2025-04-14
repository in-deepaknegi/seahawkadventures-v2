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
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "Intermediate Rafting Challenge",
            description:
                "Navigate through exciting Grade II-III rapids with increased difficulty",
            duration: "3 hours",
            groupSize: "6-8 people",
            price: "₹1,800",
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "Advanced Rafting Expedition",
            description:
                "Conquer Grade III-IV rapids for experienced rafters seeking an adrenaline rush",
            duration: "4 hours",
            groupSize: "6-8 people",
            price: "₹2,500",
            image: "/placeholder.svg?height=400&width=600",
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
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "River Kayaking Tour",
            description:
                "Explore the scenic beauty of Rishikesh rivers with a guided kayaking tour",
            duration: "3 hours",
            groupSize: "4-6 people",
            price: "₹2,200",
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "Advanced Kayaking",
            description:
                "Master advanced techniques and navigate challenging water conditions",
            duration: "4 hours",
            groupSize: "4-6 people",
            price: "₹3,000",
            image: "/placeholder.svg?height=400&width=600",
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
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "Overnight Camping Adventure",
            description:
                "Experience the wilderness with an overnight camping expedition",
            duration: "2 days",
            groupSize: "8-12 people",
            price: "₹4,500",
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "Multi-Day Himalayan Expedition",
            description:
                "Embark on a comprehensive journey through diverse Himalayan landscapes",
            duration: "5 days",
            groupSize: "8-12 people",
            price: "₹12,000",
            image: "/placeholder.svg?height=400&width=600",
        },
    ],
};

export default function Packages() {
    return (
        <section id="packages" className="bg-blue-50 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-blue-800">
                        Our Adventure Packages
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-blue-600">
                        Choose from our range of expertly crafted adventure
                        packages designed for all skill levels
                    </p>
                </div>

                <Tabs defaultValue="rafting" className="w-full">
                    <TabsList className="mb-8 grid w-full grid-cols-3">
                        <TabsTrigger value="rafting">Rafting</TabsTrigger>
                        <TabsTrigger value="kayaking">Kayaking</TabsTrigger>
                        <TabsTrigger value="expedition">Expedition</TabsTrigger>
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
                                        className="overflow-hidden"
                                    >
                                        <div className="relative h-48">
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
                                        <CardHeader>
                                            <CardTitle>{pkg.title}</CardTitle>
                                            <CardDescription>
                                                {pkg.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
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
                                        <CardFooter className="flex items-center justify-between">
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
        </section>
    );
}
