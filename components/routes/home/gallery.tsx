"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Block, Grid } from "@/components/motion/grid";
import { Wave2 } from "../shared/wave";
import { CldImage } from "next-cloudinary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

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
        <>
            <section id="gallery" className="py-20">
                <div className="container">
                    <div className="mx-auto mb-14 max-w-3xl text-center">
                        <h5 className="text-primary mb-3">VISUAL JOURNEY</h5>
                        <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                            Adventure Gallery
                        </h2>
                        <p className="text-gray-600">
                            Glimpses of the thrilling experiences that await you
                        </p>
                    </div>

                    <Tabs defaultValue="all" className="w-full">
                        <div className="mb-12 flex justify-center">
                            <TabsList className="h-auto rounded-full bg-gray-100 p-1">
                                <TabsTrigger
                                    value="all"
                                    className="rounded-full px-6 py-3 data-[state=active]:bg-black data-[state=active]:text-white"
                                >
                                    All
                                </TabsTrigger>
                                <TabsTrigger
                                    value="rafting"
                                    className="rounded-full px-6 py-3 data-[state=active]:bg-black data-[state=active]:text-white"
                                >
                                    Rafting
                                </TabsTrigger>
                                <TabsTrigger
                                    value="kayaking"
                                    className="rounded-full px-6 py-3 data-[state=active]:bg-black data-[state=active]:text-white"
                                >
                                    Kayaking
                                </TabsTrigger>
                                <TabsTrigger
                                    value="expedition"
                                    className="rounded-full px-6 py-3 data-[state=active]:bg-black data-[state=active]:text-white"
                                >
                                    Expedition
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="all" className="mt-0">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square overflow-hidden rounded-xl"
                                    >
                                        <Image
                                            src={`/placeholder.svg?height=400&width=400&text=Adventure+${index + 1}`}
                                            alt={`Adventure Gallery ${index + 1}`}
                                            width={400}
                                            height={400}
                                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="rafting" className="mt-0">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square overflow-hidden rounded-xl"
                                    >
                                        <Image
                                            src={`/placeholder.svg?height=400&width=400&text=Rafting+${index + 1}`}
                                            alt={`Rafting Gallery ${index + 1}`}
                                            width={400}
                                            height={400}
                                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="kayaking" className="mt-0">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square overflow-hidden rounded-xl"
                                    >
                                        <Image
                                            src={`/placeholder.svg?height=400&width=400&text=Kayaking+${index + 1}`}
                                            alt={`Kayaking Gallery ${index + 1}`}
                                            width={400}
                                            height={400}
                                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="expedition" className="mt-0">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square overflow-hidden rounded-xl"
                                    >
                                        <Image
                                            src={`/placeholder.svg?height=400&width=400&text=Expedition+${index + 1}`}
                                            alt={`Expedition Gallery ${index + 1}`}
                                            width={400}
                                            height={400}
                                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

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
                                    <CldImage
                                        src={image.src || "/placeholder.svg"}
                                        alt={image.alt}
                                        width={1920}
                                        height={1080}
                                        className="aspect-video size-full object-cover"
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
                                <CldImage
                                    src={selectedImage || "/placeholder.svg"}
                                    alt="Gallery image"
                                    width={1920}
                                    height={1080}
                                    className="size-full object-contain"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
