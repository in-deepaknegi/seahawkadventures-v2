"use client";

import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CldImage } from "next-cloudinary";

const ImageGallery = ({ images }: { images: any }) => {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false }),
    );

    return (
        <section className="relative w-full">
            <Carousel
                plugins={[plugin.current]}
                className="aspect-video w-full"
                // onMouseEnter={plugin.current.stop}
                // onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="-ml-0">
                    {images.map((item: any, index: any) => (
                        <CarouselItem key={index} className="pl-0">
                            <div className="relative w-full">
                                <CldImage
                                    src={item.src}
                                    alt={item.alt}
                                    // fill
                                    width={1920}
                                    height={1080}
                                    priority={index === 0}
                                    className="aspect-video object-cover"
                                    // sizes="100vw"
                                    quality={100}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 z-50 hidden size-12 border-none bg-transparent hover:bg-transparent md:block [&>svg]:size-10" />
                <CarouselNext className="absolute right-4 z-50 hidden size-12 border-none bg-transparent hover:bg-transparent md:block [&>svg]:size-10" />
            </Carousel>
        </section>
    );
};

export default ImageGallery;
