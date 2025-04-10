import { motion } from "motion/react";
import { useRef, useState } from "react";
import { packagesConfig } from "@/config/package"; // Import packagesConfig

import { fadeUp } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Star, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function AdventuresSection() {
    const [activeTab, setActiveTab] = useState<string>("rafting"); // State to track active tab
    const ref = useRef(null);

    // Find the data for the active tab
    const activeTabData = packagesConfig.find((tab) => tab.title === activeTab);

    return (
        <>
            <motion.section className="mx-auto overflow-hidden bg-gray-50 py-8 md:max-w-[95%] md:py-20 xl:max-w-[90%]">
                <div className="mx-auto max-w-full px-4 sm:px-6 md:max-w-7xl lg:px-8">
                    <div className="text-center">
                        <motion.span
                            className="font-insm text-sm tracking-wider text-gray-700 uppercase"
                            // variants={fadeUp}
                            // initial="hidden"
                            // whileInView="visible"
                            // transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            What we offer
                        </motion.span>
                        <motion.h2
                            className="font-insr mt-4 text-4xl text-gray-900 md:text-5xl"
                            // initial={{ opacity: 0, y: 20 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            Popular Adventure Tours In Rishikesh
                        </motion.h2>

                        <div
                            className="mx-auto mt-8 grid grid-cols-3 bg-[url(https://res.cloudinary.com/dkuixrz40/image/upload/v1735489454/deco-water.jpg)] bg-cover p-1 md:w-fit"
                            style={{
                                objectFit: "cover",
                            }}
                        >
                            {/* Dynamic Tab Buttons */}
                            {packagesConfig.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(item.title)}
                                    className={`font-insr px-6 py-2 text-base md:text-xl ${
                                        activeTab === item.title
                                            ? "bg-white text-black"
                                            : "text-neutral-100"
                                    }`}
                                >
                                    {item.title.charAt(0).toUpperCase() +
                                        item.title.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Service Cards */}
                    {/* {activeTabData && (
                        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                            {activeTabData.collection.map((service, i) => (
                                <div
                                    key={i}
                                    className="group relative shadow-lg"
                                >
                                    <div
                                        className={`absolute -top-4 left-4 z-40 px-3 py-1 text-center text-white ${
                                            service.features.difficulty ===
                                            "Easy"
                                                ? "bg-emerald-500"
                                                : ""
                                        } ${
                                            service.features.difficulty ===
                                            "Moderate"
                                                ? "bg-amber-500"
                                                : ""
                                        } ${
                                            service.features.difficulty ===
                                            "Challenging"
                                                ? "bg-rose-500"
                                                : ""
                                        }`}
                                    >
                                        <div className="text-sm">
                                            {service.features.difficulty}
                                        </div>
                                    </div>
                                    <div className="relative h-[30rem] overflow-hidden">
                                        <CldImage
                                            src={service.image.src}
                                            alt={service.title}
                                            width={1080}
                                            height={680}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 z-20 h-60 w-full bg-gradient-to-t from-black/40 to-transparent md:from-black/80" />
                                    </div>
                                    <div className="absolute bottom-0 z-30 p-6 text-white">
                                        <h3 className="text-3xl font-medium">
                                            {service.title}
                                        </h3>
                                        <div
                                            className="mt-2 line-clamp-2 text-sm text-gray-300"
                                            dangerouslySetInnerHTML={{
                                                __html: service.description,
                                            }}
                                        />
                                        <Button className="mt-4 rounded-full bg-blue-600 px-4 py-2 text-base text-white transition-colors hover:bg-blue-700">
                                            <Link href={service.url}>
                                                View Details
                                            </Link>
                                        </Button>
                                    </div>
                                    <Link href={service.url}>
                                        <span className="sr-only">
                                            {service.title}
                                        </span>
                                        <span className="absolute inset-0"></span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )} */}

                    {activeTabData && (
                        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                            {activeTabData.collection.map((service, i) => (
                                <Card
                                    key={i}
                                    className="relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div
                                        className={`absolute -top-4 left-4 z-40 px-3 py-1 text-center text-white ${
                                            service.features.difficulty ===
                                            "Easy"
                                                ? "bg-emerald-500"
                                                : ""
                                        } ${
                                            service.features.difficulty ===
                                            "Moderate"
                                                ? "bg-amber-500"
                                                : ""
                                        } ${
                                            service.features.difficulty ===
                                            "Challenging"
                                                ? "bg-rose-500"
                                                : ""
                                        }`}
                                    >
                                        <div className="text-sm">
                                            {service.features.difficulty}
                                        </div>
                                    </div>
                                    <div className="relative h-72 overflow-hidden">
                                        <Image
                                            src={service.image.src}
                                            alt={service.title}
                                            width={1080}
                                            height={680}
                                            className="size-full rounded-lg object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 p-4 text-white">
                                            <h3 className="text-3xl font-medium">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <div className="absolute top-0 right-0 m-2 rounded-full bg-white px-3 text-base font-medium">
                                            ₹{service.price}
                                        </div>
                                    </div>
                                    <CardContent className="p-4">
                                        <div className="mb-2 flex items-center gap-1 text-amber-500">
                                            <Star className="h-4 w-4 fill-current" />
                                            <Star className="h-4 w-4 fill-current" />
                                            <Star className="h-4 w-4 fill-current" />
                                            <Star className="h-4 w-4 fill-current" />
                                            <Star className="h-4 w-4 fill-current" />
                                            <span className="text-muted-foreground ml-1 text-xs">
                                                (125 reviews)
                                            </span>
                                        </div>
                                        <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                <span>Duration: 3-4 hrs</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3" />
                                                <span>Rishikesh</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-3 w-3" />
                                                <span>Group size: 6-12</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                <span>Season: Sep-Jun</span>
                                            </div>
                                        </div>
                                        <div
                                            className="text-muted-foreground mb-4 line-clamp-3 text-sm"
                                            dangerouslySetInnerHTML={{
                                                __html: service.description,
                                            }}
                                        />
                                    </CardContent>
                                    <CardFooter className="p-4 pt-0">
                                        <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700">
                                            VIEW DETAILS
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
                <div className="text-muted-foreground mx-auto mt-8 max-w-4xl text-center text-base px-4 md:px-0">
                    <p>
                        Sea hawk Adventure is your one-stop destination for all
                        adventure activities in Rishikesh, Uttarakhand. We offer
                        white water rafting, camping, trekking, bungee jumping,
                        and many other adventure activities. Our team of
                        experienced professionals ensures your safety while you
                        enjoy the thrill of adventure. We have been serving
                        adventure enthusiasts for over 10 years and have a
                        proven track record of providing safe and enjoyable
                        experiences.
                    </p>
                </div>
            </motion.section>
        </>
    );
}
