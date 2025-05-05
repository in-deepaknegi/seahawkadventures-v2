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
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const images = [
    {
        title: "Kayak School",
        image: {
            src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745051443/img_1218.jpg",
            alt: "Kayak School",
        },
        stats: {
            tours: 8,
            startingPrice: "3,999",
        },
    },
    {
        title: "Rafting in Rishikesh",
        image: {
            src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1101.jpg",
            alt: "Rafting in Rishikesh",
        },
        stats: {
            tours: 3,
            startingPrice: "599",
        },
    },
    {
        title: "Expedition Adventures",
        image: {
            src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081821/img_1313.jpg",
            alt: "Expedition Adventures",
        },
        stats: {
            tours: 9,
            startingPrice: "12,000",
        },
    },
    {
        title: "Camping in Rishikesh",
        image: {
            src: "https://res.cloudinary.com/dr8gbqqid/image/upload/v1745081448/img_1406.jpg",
            alt: "Camping in Rishikesh",
        },
        stats: {
            tours: 9,
            startingPrice: "1,500",
        },
    },
];

export default function Hero() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false }),
    );

    const items = [...images, ...images, ...images, ...images];

    return (
        <div className="relative mx-auto -mt-[3rem] w-full max-w-full overflow-hidden xl:-mt-[8rem]">
            <Carousel
                plugins={[plugin.current]}
                className="h-full w-full"
                // onMouseEnter={plugin.current.stop}
                // onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="-ml-0">
                    {items.map((item, index) => (
                        <CarouselItem key={index} className="pl-0">
                            <div className="relative h-[95vh] w-full md:h-[100vh]">
                                <CldImage
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    fill
                                    // width={1920}
                                    // height={1080}
                                    priority={index === 0}
                                    className="size-full object-cover object-center"
                                    // sizes="100vw"
                                    quality={100}
                                />
                                <div className="absolute bottom-0 hidden h-full w-1/3 bg-gradient-to-r from-black/55 to-transparent md:block" />
                                <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black/55 to-transparent" />

                                <div className="absolute bottom-5 container flex w-full flex-col items-start justify-start px-4 text-center text-white md:px-20 xl:bottom-40">
                                    <h5 className="mb-3 tracking-wide text-white/80">
                                        YOUR ADVENTURE AWAITS
                                    </h5>
                                    <h1 className="mb-6 text-4xl font-medium tracking-wide md:text-5xl xl:text-6xl">
                                        {item.title}
                                    </h1>
                                    <p className="mb-4 max-w-md text-left text-sm text-white/90 md:mb-8 md:text-base">
                                        Experience the rush of white water
                                        rafting and kayaking in the heart of
                                        Rishikesh
                                    </p>

                                    <div className="flex flex-col items-start gap-4 sm:flex-row">
                                        <Link href="/packages">
                                            <Button className="rounded-full px-8 py-5 text-sm font-normal md:text-base">
                                                Explore Packages
                                            </Button>
                                        </Link>
                                        <Link href="/packages">
                                            <Button className="flex items-center rounded-full bg-white/20 px-6 py-5 backdrop-blur-sm">
                                                {item.title}
                                                <ChevronRight className="h-5 w-5 text-white" />
                                            </Button>
                                        </Link>
                                    </div>

                                    <div className="mt-2 mb-6 flex flex-col items-start justify-start md:mt-5 md:gap-2">
                                        <div className="mt-2 text-sm md:text-xl">
                                            STARTING FROM
                                        </div>
                                        <div className="text-3xl font-medium md:text-5xl">
                                            ₹ {item.stats.startingPrice}
                                        </div>
                                    </div>
                                    {/* <Button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-normal tracking-widest text-white transition-colors hover:bg-blue-700 md:text-base">
                                        <Link href="/adventure-in-rishikesh/river-rafting">
                                            BOOK NOW
                                        </Link>
                                    </Button> */}
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 z-50 hidden size-12 border-none bg-transparent hover:bg-transparent md:block [&>svg]:size-10" />
                <CarouselNext className="absolute right-4 z-50 hidden size-12 border-none bg-transparent hover:bg-transparent md:block [&>svg]:size-10" />
                <div className="absolute right-0 bottom-2 left-0 z-50 flex justify-center gap-2">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className="h-2 w-2 rounded-full bg-white"
                        />
                    ))}
                </div>
            </Carousel>

            {/* <div className="absolute right-0 bottom-0 left-0 z-30">
                <Image
                    src="/images/b.png"
                    alt="Hero Image"
                    width={1000}
                    height={1000}
                    className="w-full object-cover"
                />
            </div> */}
        </div>
    );
}
