"use client";
import { useState } from "react";

import { Link, X } from "lucide-react";
import CldImageComponent from "@/components/cld-image";
import { Block, Grid } from "@/components/motion/grid";

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1101.jpg",
        alt: "Rafting through rapids",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1102.jpg",
        alt: "Kayaking in calm waters",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1103.jpg",
        alt: "Expedition team at campsite",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1104.jpg",
        alt: "Group rafting adventure",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1105.jpg",
        alt: "Kayaking instruction session",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1106.jpg",
        alt: "Trekking through mountain trails",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1107.jpg",
        alt: "White water rafting excitement",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1108.jpg",
        alt: "Kayaking through gentle rapids",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1109.jpg",
        alt: "Camping under the stars",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1110.jpg",
        alt: "River crossing adventure",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1111.jpg",
        alt: "Professional rafting team",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1112.jpg",
        alt: "Kayaking training session",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1113.jpg",
        alt: "Mountain view from campsite",
        category: "rafting",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1201.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1202.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1203.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1204.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1205.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1206.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1207.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1208.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1209.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1210.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1211.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1212.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1213.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1214.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1215.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1216.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1217.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1218.jpg",
        alt: "Rafting safety demonstration",
        category: "kayaking",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1401.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1402.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1403.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1404.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1405.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1406.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1407.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1408.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1409.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1410.jpg",
        alt: "Rafting safety demonstration",
        category: "camping",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1301.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1302.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1303.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1304.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1305.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1306.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1307.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1308.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1309.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1310.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1311.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1312.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1313.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1314.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1315.jpg",
        alt: "Rafting safety demonstration",
        category: "expedition",
    },
    {
        src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1316.jpg",
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
        <main className="-mt-5">
            {/* Hero Section */}

            <section className="relative flex h-[60vh] items-center">
                <CldImageComponent
                    src="https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1407.jpg"
                    alt="About Sea Hawk Adventure"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="relative z-10 mx-auto w-full max-w-full px-4 md:px-16 xl:px-10">
                    <div className="max-w-2xl">
                        <h5 className="mb-3 tracking-wide text-white/80">
                            VISUAL JOURNEY
                        </h5>
                        <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
                            Gallery
                        </h1>
                        <p className="mb-8 max-w-md text-lg text-white/90">
                            Explore our collection of thrilling adventures and
                            breathtaking moments
                        </p>
                    </div>
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
                        <div className="flex flex-wrap gap-2 rounded-full bg-gray-100 p-1 shadow-sm">
                            <button
                                onClick={() => setFilter(null)}
                                className={`cursor-pointer rounded-full px-4 py-2 transition ${
                                    filter === null
                                        ? "bg-blue-700 text-white"
                                        : ""
                                }`}
                            >
                                All Adventures
                            </button>
                            <button
                                onClick={() => setFilter("rafting")}
                                className={`cursor-pointer rounded-full px-4 py-2 transition ${
                                    filter === "rafting"
                                        ? "bg-blue-700 text-white"
                                        : ""
                                }`}
                            >
                                Rafting
                            </button>
                            <button
                                onClick={() => setFilter("kayaking")}
                                className={`cursor-pointer rounded-full px-4 py-2 transition ${
                                    filter === "kayaking"
                                        ? "bg-blue-700 text-white"
                                        : ""
                                }`}
                            >
                                Kayaking
                            </button>
                            <button
                                onClick={() => setFilter("camping")}
                                className={`cursor-pointer rounded-full px-4 py-2 transition ${
                                    filter === "camping"
                                        ? "bg-blue-700 text-white"
                                        : ""
                                }`}
                            >
                                Camping
                            </button>
                            <button
                                onClick={() => setFilter("expedition")}
                                className={`cursor-pointer rounded-full px-4 py-2 transition ${
                                    filter === "expedition"
                                        ? "bg-blue-700 text-white"
                                        : ""
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
                                {/* <div className="absolute top-2 right-2 z-50">
                                    <button
                                        className="cursor-pointer rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                image.src || "",
                                            );
                                        }}
                                    >
                                        <Link className="h-6 w-6" />
                                    </button>
                                </div> */}
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
                            {/* <div className="absolute top-4 right-4 flex gap-4">
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
                            </div> */}
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
            <section className="bg-gray-900 text-white py-16">
                <div className="mx-auto max-w-3xl text-center md:mb-6">
                    <h2 className="mb-5 text-3xl font-medium md:text-4xl xl:text-5xl">
                        Videos
                    </h2>

                    <p className="text-gray-200">
                        Glimpses of the thrilling experiences that await you
                    </p>
                </div>

                <Grid className="mx-auto max-w-7xl">
                    <Block className="col-span-4">
                        <video
                            width="1920"
                            height="1080"
                            autoPlay
                            loop
                            muted
                            controls
                            src="https://res.cloudinary.com/dr8gbqqid/video/upload/v1745082720/vid_1150.mp4"
                            className="h-full w-full"
                        />
                    </Block>
                    <Block className="col-span-4">
                        <video
                            width="1920"
                            height="1080"
                            autoPlay
                            loop
                            muted
                            controls
                            src="https://res.cloudinary.com/dr8gbqqid/video/upload/v1745082740/vid_1151.mp4"
                            className="h-full w-full"
                        />
                    </Block>
                    <Block className="col-span-4">
                        <video
                            width="1920"
                            height="1080"
                            autoPlay
                            loop
                            muted
                            controls
                            src="https://res.cloudinary.com/dr8gbqqid/video/upload/v1745259837/vid_1350.mp4"
                            className="h-full w-full"
                        />
                    </Block>
                </Grid>
             
            </section>
        </main>
    );
}
