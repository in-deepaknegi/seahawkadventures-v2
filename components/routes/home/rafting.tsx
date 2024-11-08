import React, { useState } from "react";
import { ComponentProps } from '@/types/global';
import Image from "next/image";
import Link from "next/link";
import { Call, Hourglass, Whatsapp } from "@/components/icons";
const Rafting: React.FC<RaftingProps> = (props) => {
    const { heading, description, packages } = {
        ...RaftingDefaults,
        ...props
    };

    const [lines, setLines] = useState<boolean[]>(
        new Array(packages?.length).fill(false),
    );

    const toggleLine = (index: number) => {
        setLines((prevLines) => {
            // Collapse all descriptions first, then toggle the selected one
            const newLines = new Array(packages?.length).fill(false);
            newLines[index] = !prevLines[index]; // Toggle the clicked index's value
            return newLines;
        });
    };

    return (
        <section className="relative h-full bg-white font-insr text-black">
            <div className="relative mx-auto max-w-full px-6 py-12 md:max-w-[90%] md:px-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="font-oggr text-5xl md:text-6xl">{heading}</h2>
                    <p className="mt-5 max-w-2xl text-xl text-gray-600">
                        {description}
                    </p>
                </div>

                <div className="mt-12">
                    <div className="flex flex-col gap-12 md:flex-row">
                        {packages?.map((service, i) => (
                            <div
                                key={i}
                                className="group relative flex h-full w-full  flex-col overflow-hidden bg-white backdrop-blur-sm transition-all duration-700"
                            >
                                <div className=" rounded-2xl overflow-hidden">
                                    <Image
                                        src={service.thumbnail.src}
                                        alt={service.thumbnail.alt}
                                        width={1080}
                                        height={680}
                                        className="aspect-[16/9] object-cover object-center transition-all duration-200 ease-in group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex h-full mt-4 flex-col justify-between rounded-2xl border p-4 pt-5 text-black">
                                    <h2 className="whitespace-nowrap text-left text-3xl tracking-wide">
                                        {service.title}
                                    </h2>

                                    <div className="mt-5 flex flex-col gap-1 border rounded-xl p-2 text-[0.92rem] md:text-sm">
                                        <div className="flex items-center gap-4 text-black">
                                            <div>
                                                <Image
                                                    src={"/images/home/google-calendar.png"}
                                                    alt=""
                                                    width={1080}
                                                    height={680}
                                                    className="w-4"
                                                />
                                            </div>
                                            <div>Timing: Every day at 9:00 AM and 2:00 PM</div>
                                        </div>
                                        <div className="flex items-center gap-4 text-black">
                                            <div>
                                                <Image
                                                    src={"/images/home/google-maps.png"}
                                                    alt=""
                                                    width={1080}
                                                    height={680}
                                                    className="w-4"
                                                />
                                            </div>
                                            <div>Location: {service.location}</div>
                                        </div>
                                        <div className="flex items-center gap-4 text-black">
                                            <div>
                                                <Hourglass className="size-4" />
                                            </div>
                                            <div>Duration: {service.duration}</div>
                                        </div>
                                    </div>

                                    <p className="mt-5 text-3xl font-insm text-black">
                                        ₹ {service.rate}
                                        <span className="text-lg text-gray-500">/person</span>
                                    </p>

                                    <div className="mt-2">
                                        <p
                                            className={`mt-2 w-fit text-[0.95rem] ${lines[i] ? "" : "line-clamp-2"} text-dawn-800`}
                                        >
                                            {service.description}
                                        </p>
                                        <button
                                            onClick={() => toggleLine(i)}
                                            className="text-blue-700"
                                        >
                                            {lines[i] ? "read less..." : "read more..."}
                                        </button>
                                    </div>

                                    <Link
                                        href={"#"}
                                        className=" mx-auto mt-5 w-full md:max-w-[90%] whitespace-nowrap rounded-full bg-blue-500 hover:bg-blue-600 px-4 py-2 text-center text-white"
                                    >
                                        View Details
                                    </Link>
                                    <div className="mt-5 flex gap-3 mx-auto">
                                        <Link
                                            href="tel:+91 97566 20538"
                                            className="group px-3 rounded-full w-auto py-2 text-center bg-gray-300 hover:bg-gray-200 text-black flex items-center gap-3 justify-center overflow-hidden"
                                        >
                                            <Call className="size-4" />
                                            Book on call
                                        </Link>
                                        
                                        <Link
                                            href={`https://wa.me/919756620538/?text=Hello! I'm interested in your ${service.title} and would love to learn more. Can you please provide details on the types of trips available and their durations? Thank you.`}
                                            target="_blank"
                                            className="w-fit rounded-full px-4 py-2 text-center bg-green-500/85 hover:bg-green-400/95 text-black flex items-center gap-2 justify-center"
                                        >
                                            <Whatsapp className="size-6" />
                                            Chat with us
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rafting;

type RaftingProps = React.ComponentPropsWithoutRef<"section"> & Partial<ComponentProps>;

const RaftingDefaults: ComponentProps = {
    heading: "Popular Adventures in Rishikesh",
    description: "Experience the thrill of white-water rafting in Rishikesh. Choose from a range of exciting packages to suit your adventure level.",

    packages: [
        {
            title: "12 Km River Rafting",
            description:
                "Rafting from Marine drive to Shivpuri- Rishikesh is called 12km by every operator in Rishikesh but in actual it is not 12km. It is around 11-12km by River and takes around 1 and half to complete. It features roughly seven rapids, both minor and large. Roller Coaster (III+), Golf Course (III+), and Club House are some of the good rapids we run on this stretch (III). Although there are some large waves and hydraulics, these rapids are safe to...",
            rate: 620,
            location: "Marine Drive - Shivpuri",
            duration: "1.5 hours",
            thumbnail: {
                src: "/images/rafting/r02.jpg",
                alt: "sdf",
            },
            link: "#",
        },
        {
            title: "16 Km River Rafting",
            description:
                "Rafting from Shivpuri to NIM beach- Rishikesh is called 16km by every operator in Rishikesh but in actual it is not 16km. It is around 14-16km by River and takes around 1 and half to 2 hours to complete. It features roughly seven rapids, both minor and large. Roller Coaster (III+), Golf Course (III+), and Club House are some of the good rapids we run on this stretch (III). Although there are some large waves and hydraulics, these rapids are safe to...",
            rate: 1020,
            location: "Shivpuri to NIM Beach",
            duration: "2 hours",
            thumbnail: {
                src: "/images/rafting/r12.jpg",
                alt: "sdf",
            },
            link: "#",
        },
        {
            title: "21 Km River Rafting",
            description:
                "Rafting from Marine drive to NIM beach- Rishikesh is called 21km by every operator in Rishikesh but in actual it is not 21km. It is around 20-21km by River and takes around 2 and half to 3 hours to complete. It features roughly seven rapids, both minor and large. Roller Coaster (III+), Golf Course (III+), and Club House are some of the good rapids we run on this stretch (III). Although there are some large waves and hydraulics, these rapids are safe to...",
            rate: 1520,
            location: "Marine drive to NIM Beach",
            duration: "3 hours",
            thumbnail: {
                src: "/images/rafting/r06.jpg",
                alt: "sdf",
            },
            link: "#",
        },
    ],
};

