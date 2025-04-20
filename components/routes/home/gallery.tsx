"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Block, Grid } from "@/components/motion/grid";
import { Wave2 } from "../shared/wave";
import { CldImage } from "next-cloudinary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { __i__ } from "@/config/image";
import { MasonryGrid, MasonryItem, Item } from "@/components/motion/masonary";
import { RiMapPin2Fill } from "@remixicon/react";

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3100.jpg",
        alt: "Rafting through rapids",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3101.jpg",
        alt: "Kayaking in calm waters",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        alt: "Expedition team at campsite",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3103.jpg",
        alt: "Group rafting adventure",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3104.jpg",
        alt: "Kayaking instruction session",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3105.jpg",
        alt: "Trekking through mountain trails",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3106.jpg",
        alt: "White water rafting excitement",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3107.jpg",
        alt: "Kayaking through gentle rapids",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3108.jpg",
        alt: "Camping under the stars",
        category: "expedition",
    },
];

const images = [
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3100.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3100.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3100.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3100.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3100.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3100.jpg",
];

export default function Gallery() {
    return (
        <>
            <section id="gallery" className="py-16">
                <div className="mx-auto w-full max-w-7xl px-10 md:px-16 xl:px-10">
                    <div className="mx-auto mb-6 max-w-3xl text-center">
                        <h5 className="text-primary mb-3">VISUAL JOURNEY</h5>
                        <h2 className="mb-5 text-3xl font-medium md:text-4xl xl:text-5xl">
                            Adventure Gallery
                        </h2>

                        <p className="text-gray-600">
                            Glimpses of the thrilling experiences that await you
                        </p>
                    </div>

                    <Grid className="">
                        <Block className="col-span-12 row-span-2 md:col-span-6">
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1101.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                        </Block>
                        <Block className="col-span-6 row-span-2 grid grid-cols-2 gap-4 md:col-span-6">
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1113.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1409.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1211.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1406.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                        </Block>

                        <Block className="col-span-12 h-80 md:col-span-8">
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1213.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                        </Block>

                        <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-4">
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1102.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                        </Block>
                    </Grid>
                </div>
            </section>
        </>
    );
}
