"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Block, Grid } from "@/components/motion/grid";
import { Wave2 } from "../shared/wave";

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

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [filter, setFilter] = useState<string | null>(null);

    const filteredImages = filter
        ? galleryImages.filter((img) => img.category === filter)
        : galleryImages;

    return (
        <section id="gallery" className="relative bg-blue-50">
            <Wave2 />
            <div className="relative z-10 mx-auto max-w-7xl pt-16">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-medium md:text-6xl">
                        Adventure Gallery
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg">
                        Glimpses of the thrilling experiences that await you
                    </p>
                </div>

                <div className="mb-8 flex justify-center">
                    <div className="flex flex-wrap gap-2 rounded-lg bg-white p-1 shadow-sm">
                        <button
                            onClick={() => setFilter(null)}
                            className={`rounded-md px-4 py-2 transition ${
                                filter === null
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-blue-100"
                            }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter("rafting")}
                            className={`rounded-md px-4 py-2 transition ${
                                filter === "rafting"
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-blue-100"
                            }`}
                        >
                            Rafting
                        </button>
                        <button
                            onClick={() => setFilter("kayaking")}
                            className={`rounded-md px-4 py-2 transition ${
                                filter === "kayaking"
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-blue-100"
                            }`}
                        >
                            Kayaking
                        </button>
                        <button
                            onClick={() => setFilter("expedition")}
                            className={`rounded-md px-4 py-2 transition ${
                                filter === "expedition"
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-blue-100"
                            }`}
                        >
                            Expedition
                        </button>
                    </div>
                </div>

                <Grid>
                    {filteredImages.map((image, index) => (
                        <Block
                            key={index}
                            className={`col-span-4 aspect-video md:col-span-3`}
                        >
                            <div
                                key={index}
                                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md transition hover:opacity-90"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <Image
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    fill
                                    className="aspect-video object-cover"
                                />
                            </div>
                        </Block>
                    ))}
                </Grid>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3"></div>

                {/* Lightbox */}
                {selectedImage && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4">
                        <button
                            className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <div className="relative h-[80vh] w-full max-w-4xl">
                            <Image
                                src={selectedImage || "/placeholder.svg"}
                                alt="Gallery image"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
