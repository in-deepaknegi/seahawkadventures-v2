"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const images = [
    {
        title: "Kayaking Adventures",
        image: {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
            alt: "Kayaking Adventures",
        },
        stats: {
            tours: 8,
            startingPrice: "15,000",
        },
    },
    {
        title: "Rafting in Rishikesh",
        image: {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3103.jpg",
            alt: "Rafting in Rishikesh",
        },
        stats: {
            tours: 12,
            startingPrice: "18,000",
        },
    },
    {
        title: "Trekking Adventures",
        image: {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3104.jpg",
            alt: "Trekking Adventures",
        },
        stats: {
            tours: 9,
            startingPrice: "21,000",
        },
    },
];

export default function Hero() {
    const plugin = React.useRef(
        Autoplay({ delay: 6000, stopOnInteraction: true }),
    );

    return (
        <div className="relative h-screen w-full overflow-hidden px-16">
            <Carousel
                plugins={[plugin.current]}
                className="h-screen w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="-ml-0">
                    {images.map((item, index) => (
                        <CarouselItem key={index} className="pl-0">
                            <div className="relative h-[85vh] w-full">
                                <Image
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    fill
                                    priority={index === 0}
                                    className="object-cover"
                                    sizes="100vw"
                                    quality={100}
                                />
                                <div className="absolute bottom-0 h-72 w-full bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-10 flex w-full flex-col items-center justify-center px-4 text-center text-white">
                                    <h1 className="mb-6 text-5xl font-medium tracking-wide md:text-6xl">
                                        {item.title}
                                    </h1>
                                    <div className="mb-6 flex items-center justify-center gap-8 md:gap-16">
                                        <div>
                                            <div className="text-5xl font-medium md:text-5xl">
                                                {item.stats.tours}
                                            </div>
                                            <div className="mt-2 text-xl">
                                                TOURS
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-5xl font-medium md:text-5xl">
                                                ₹ {item.stats.startingPrice}
                                            </div>
                                            <div className="mt-2 text-xl">
                                                STARTING FROM
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="rounded-full bg-blue-600 px-4 py-2 text-base font-normal tracking-widest text-white transition-colors hover:bg-blue-700">
                                        CHOOSE YOUR TREK
                                    </Button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 z-50 size-12 border-none bg-transparent hover:bg-transparent [&>svg]:size-10" />
                <CarouselNext className="absolute right-4 z-50 size-12 border-none bg-transparent hover:bg-transparent [&>svg]:size-10" />
                <div className="absolute right-0 bottom-8 left-0 z-50 flex justify-center gap-2">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className="h-2 w-2 rounded-full bg-white"
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    );
}
