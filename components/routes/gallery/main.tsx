"use client";
import { useState } from "react";

import { Link, X } from "lucide-react";
import CldImageComponent from "@/components/cld-image";

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1101.jpg",
        alt: "Rafting through rapids",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1102.jpg",
        alt: "Kayaking in calm waters",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1103.jpg",
        alt: "Expedition team at campsite",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1104.jpg",
        alt: "Group rafting adventure",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1105.jpg",
        alt: "Kayaking instruction session",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1106.jpg",
        alt: "Trekking through mountain trails",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1107.jpg",
        alt: "White water rafting excitement",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1108.jpg",
        alt: "Kayaking through gentle rapids",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1109.jpg",
        alt: "Camping under the stars",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1110.jpg",
        alt: "River crossing adventure",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1111.jpg",
        alt: "Professional rafting team",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1112.jpg",
        alt: "Kayaking training session",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1113.jpg",
        alt: "Mountain view from campsite",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1201.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1202.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1203.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1204.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1205.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1206.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1207.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1208.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1209.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1210.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1211.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1212.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1213.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1214.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1215.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1216.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1217.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1218.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1401.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1402.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1403.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1404.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1405.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1406.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1407.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1408.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1409.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1410.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1301.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1302.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1303.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1304.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1305.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1306.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1307.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1308.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1309.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1310.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1311.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1312.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1313.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1314.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1315.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1316.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [filter, setFilter] = useState<string | null>(null);

    const filteredImages = filter
        ? galleryImages.filter((img) => img.category === filter)
        : galleryImages;

    return (
        <main className="-mt-[5rem]">
            {/* Hero Section */}
            <section className="relative h-[400px] overflow-hidden">
                <CldImageComponent
                    src="https://res.cloudinary.com/dkuixrz40/image/upload/v1735479492/water-rafting-T0100.jpg"
                    alt="Adventure Gallery"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                    <h1 className="mb-4 text-4xl font-medium md:text-5xl">
                        Adventure Gallery
                    </h1>
                    <p className="max-w-3xl text-xl">
                        Glimpses of the thrilling experiences that await you
                    </p>
                </div>
            </section>

            {/* <div className="mx-auto max-w-7xl py-16">
                    <MasonryGrid>
                        {items.map((item) => (
                            <MasonryItem
                                key={item.id}
                                item={item}
                                index={item.id}
                                setSelected={setSelected}
                            />
                        ))}
                    </MasonryGrid>
                </div> */}

            {/* Gallery Section */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl">
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
                                All Adventures
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
                                onClick={() => setFilter("camping")}
                                className={`rounded-md px-4 py-2 transition ${
                                    filter === "camping"
                                        ? "bg-blue-600 text-white"
                                        : "hover:bg-blue-100"
                                }`}
                            >
                                Camping
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

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {filteredImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md transition hover:opacity-90"
                                // onClick={() => setSelectedImage(image.src)}
                            >
                                <div className="absolute top-2 right-2 z-50">
                                    <button
                                        className="rounded-full cursor-pointer bg-black/50 p-2 text-white hover:bg-black/70"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                image.src || "",
                                            );
                                        }}
                                    >
                                        <Link className="h-6 w-6" />
                                    </button>
                                </div>
                                <CldImageComponent
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Lightbox */}
                    {selectedImage && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                            <div className="absolute top-4 right-4 flex gap-4">
                                <button
                                    className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            selectedImage,
                                        );
                                    }}
                                >
                                    <Link className="h-6 w-6" />
                                </button>
                                <button
                                    className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="relative h-[80vh] w-full max-w-4xl">
                                <CldImageComponent
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
            {/* Video Gallery */}
            <section className="bg-blue-50 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-blue-800">
                            Adventure Videos
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-blue-600">
                            Watch our thrilling adventures in action
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-lg bg-white shadow-md"
                            >
                                <div className="relative aspect-video">
                                    <CldImageComponent
                                        src={`/placeholder.svg?height=400&width=600&text=Video ${index}`}
                                        alt={`Adventure Video ${index}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="white"
                                                    className="h-8 w-8"
                                                >
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{`Thrilling ${
                                        index === 1
                                            ? "Rafting"
                                            : index === 2
                                              ? "Kayaking"
                                              : "Expedition"
                                    } Adventure`}</h3>
                                    <p className="text-gray-700">
                                        Experience the excitement of our{" "}
                                        {index === 1
                                            ? "rafting"
                                            : index === 2
                                              ? "kayaking"
                                              : "expedition"}{" "}
                                        adventures through this action-packed
                                        video.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
