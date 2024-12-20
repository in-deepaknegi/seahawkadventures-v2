import React, { useState } from "react";
import { Compass, Navigation, Tent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Timer } from "lucide-react";
type TabType = "rafting" | "kayaking" | "expedition";

interface Package {
    title: string;
    image: string;
    timing: string;
    location: string;
    duration: string;
    price: number;
    description: string;
}

const services = [
    {
        title: "Rafting",
        description:
            "Experience the thrill of the fast river with our expert guides, ensuring a safe and unforgettable adventure.",
        link: "/adventure-in-rishikesh/river-rafting",
        thumbnail: {
            src: "/images/svg/compass.svg",
            alt: "",
        },
    },
    {
        title: "Kayaking",
        description:
            "Join our experienced kayakers for an exciting trip down fast rivers, ensuring your safety and a great time.",
        link: "#",
        thumbnail: {
            src: "/images/svg/boat.svg",
            alt: "",
        },
    },
    {
        title: "Expedition",
        description:
            "Join our experienced adventurers on a fun camping trip. Explore the outdoors, stay safe, and have a great time with our team.",
        link: "/adventure-in-rishikesh/ganga-kayak-expedition",
        thumbnail: {
            src: "/images/svg/tent.svg",
            alt: "",
        },
    },
];

const packages: Record<TabType, Package[]> = {
    rafting: [
        {
            title: "12 Km River Rafting",
            image: "/images/rafting/r02.jpg",
            timing: "Every day at 9:00 AM and 2:00 PM",
            location: "Marine Drive - Shivpuri",
            duration: "1.5 hours",
            price: 620,
            description:
                "Rafting from Marine drive to Shivpuri- Rishikesh is called 12km by every operator in Rishikesh but in reality its around 9km.",
        },
        {
            title: "16 Km River Rafting",
            image: "/images/rafting/r12.jpg",
            timing: "Every day at 9:00 AM and 2:00 PM",
            location: "Shivpuri to NIM Beach",
            duration: "2 hours",
            price: 1020,
            description:
                "Rafting from Shivpuri to NIM beach- Rishikesh is called 16km by every operator in Rishikesh but in reality its around 13km.",
        },
        {
            title: "21 Km River Rafting",
            image: "/images/rafting/r05.jpg",
            timing: "Every day at 9:00 AM and 2:00 PM",
            location: "Marine drive to NIM Beach",
            duration: "3 hours",
            price: 1520,
            description:
                "Rafting from Marine drive to NIM beach- Rishikesh is called 21km by every operator in Rishikesh but in reality its around 18km.",
        },
    ],
    kayaking: [
        {
            title: "Beginner Kayaking Course",
            image: "/images/kayak/k01.jpg",
            timing: "Every day at 8:00 AM",
            location: "Brahmpuri",
            duration: "2 hours",
            price: 800,
            description:
                "Perfect for beginners to learn basic kayaking skills in calm waters.",
        },
        {
            title: "Advanced Kayaking",
            image: "/images/kayak/k08.jpg",
            timing: "Every day at 9:00 AM",
            location: "Shivpuri Rapids",
            duration: "4 hours",
            price: 1500,
            description:
                "Challenge yourself with advanced kayaking techniques in rapids.",
        },
    ],
    expedition: [
        {
            title: "Weekend Camping",
            image: "/images/expedition/m00.jpg",
            timing: "Every Friday 3:00 PM",
            location: "Beach Camps",
            duration: "2 Days",
            price: 2500,
            description:
                "Experience riverside camping with bonfire and adventure activities.",
        },
        {
            title: "Himalayan Trek",
            image: "/images/expedition/m01.jpg",
            timing: "Weekly departures",
            location: "Various routes",
            duration: "5 Days",
            price: 4500,
            description:
                "Trek through scenic Himalayan trails with experienced guides.",
        },
    ],
};

function Packages() {
    const [activeTab, setActiveTab] = useState<TabType>("rafting");

    return (
        <div className="relative min-h-screen overflow-hidden bg-white py-20 font-insr">
            <div className="mx-auto max-w-full px-6 md:max-w-[98%] xl:max-w-[90%] lg:px-10">
                <h2 className="mt-2 font-oggr text-5xl text-black sm:text-6xl">
                    Select your adventure
                </h2>
                <p className="mt-5 max-w-2xl text-xl text-gray-600">
                    Dive into the spirit of adventures: discover the blend of
                    fun and expertise in every expedition
                </p>

              
                <div className="mx-auto flex items-center justify-center pt-6 md:px-10 md:pt-10">
                    <div className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-200 p-1">
                        {services?.map((service, i) => (
                            <button
                                key={i}
                                onClick={() =>
                                    setActiveTab(
                                        service.title.toLowerCase() as TabType,
                                    )
                                }
                                className={`
                             flex items-center space-x-3 rounded-lg px-10 py-1.5 transition-all duration-200
                             ${
                                 activeTab === service.title.toLowerCase()
                                     ? "bg-white text-blue-700 shadow-sm"
                                     : "text-gray-700 hover:bg-white/95 hover:text-blue-600"
                             }
                           `}
                            >
                                <Image
                                    src={service?.thumbnail.src}
                                    alt=""
                                    width={1080}
                                    height={680}
                                    className="w-8"
                                />
                                <span className="text-2xl">
                                    {" "}
                                    {service.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mx-auto mt-10 grid md:max-w-[95%] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {packages[activeTab].map((pkg, i) => (
                        <div
                            key={i}
                            className="group relative transform overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative h-64">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    width={1920}
                                    height={1080}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-black/90 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 py-2 px-4">
                                    <h3 className="mb-1 font-insr text-2xl text-white">
                                        {pkg.title}
                                    </h3>
                                    <p className="font-insm text-3xl text-white">
                                        ₹{pkg.price}
                                        <span className="text-sm font-normal">
                                            /person
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-4 space-y-3">
                                    <div className="flex items-center text-gray-600">
                                        <Clock className="mr-2 h-5 w-5" />
                                        <span>{pkg.timing}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="mr-2 h-5 w-5" />
                                        <span>{pkg.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Timer className="mr-2 h-5 w-5" />
                                        <span>{pkg.duration}</span>
                                    </div>
                                </div>

                                <p className="mb-6 text-sm text-gray-600">
                                    {pkg.description}
                                </p>

                                <div className="flex space-x-3">
                                    <button className="flex-1 rounded-xl bg-blue-600 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                                        Book now
                                    </button>
                                    <button className="aspect-square rounded-xl bg-blue-50 px-4 text-blue-600 transition-colors hover:bg-blue-100">
                                        ⓘ
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Packages;
