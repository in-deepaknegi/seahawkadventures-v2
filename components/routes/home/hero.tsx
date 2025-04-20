// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const carouselImages = [
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
//         alt: "Thrilling white water rafting in Rishikesh",
//         title: "Experience the Thrill of Rafting",
//         description:
//             "Navigate through exciting rapids on the sacred Ganges River",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
//         alt: "Kayaking adventure in crystal clear waters",
//         title: "Kayaking Adventures",
//         description:
//             "Explore the serene waters with our expert-guided kayaking tours",
//     },
//     {
//         src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
//         alt: "Expedition through the Himalayan foothills",
//         title: "Himalayan Expeditions",
//         description:
//             "Embark on unforgettable journeys through the majestic Himalayan landscapes",
//     },
// ];

// export default function Hero() {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const nextSlide = () => {
//         setCurrentSlide((prev) =>
//             prev === carouselImages.length - 1 ? 0 : prev + 1,
//         );
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) =>
//             prev === 0 ? carouselImages.length - 1 : prev - 1,
//         );
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextSlide();
//         }, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="relative h-[600px] overflow-hidden md:h-[95vh] -mt-[5rem]">
//             {/* Carousel */}
//             <div className="relative h-full">
//                 {carouselImages.map((image, index) => (
//                     <div
//                         key={index}
//                         className={`absolute inset-0 transition-opacity duration-1000 ${
//                             index === currentSlide ? "opacity-100" : "opacity-0"
//                         }`}
//                     >
//                         <Image
//                             src={image.src || "/placeholder.svg"}
//                             alt={image.alt}
//                             fill
//                             priority={index === 0}
//                             className="object-cover"
//                         />
//                         <div className="absolute inset-0 bg-black/40" />
//                         <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
//                             <h1 className="mb-4 text-4xl font-medium md:text-6xl">
//                                 {image.title}
//                             </h1>
//                             <p className="mb-8 max-w-3xl text-xl md:text-2xl">
//                                 {image.description}
//                             </p>
//                             <Button
//                                 size="lg"
//                                 className="bg-blue-600 text-white hover:bg-blue-700"
//                             >
//                                 Explore Packages
//                             </Button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="absolute right-0 bottom-0 left-0 z-30">
//                 <Image
//                     src="/images/b.png"
//                     alt="Hero Image"
//                     width={1000}
//                     height={1000}
//                     className="w-full object-cover"
//                 />
//             </div>

//             {/* Navigation buttons */}
//             <button
//                 onClick={prevSlide}
//                 className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
//                 aria-label="Previous slide"
//             >
//                 <ChevronLeft className="h-6 w-6" />
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
//                 aria-label="Next slide"
//             >
//                 <ChevronRight className="h-6 w-6" />
//             </button>

//             {/* Indicators */}
//             <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
//                 {carouselImages.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentSlide(index)}
//                         className={`h-3 w-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }

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
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const images = [
    {
        title: "Kayak School",
        image: {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1218.jpg",
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
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1101.jpg",
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
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081821/img_1313.jpg",
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
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1406.jpg",
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
        <div className="relative mx-auto -mt-[8.5rem] w-full max-w-full overflow-hidden">
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
                                <div className="absolute bottom-0 h-full w-1/3 bg-gradient-to-r from-black/55 to-transparent" />
                                <div className="absolute bottom-5 container flex w-full flex-col items-start justify-start px-4 text-center text-white xl:bottom-40 md:px-20">
                                    <h5 className="mb-3 tracking-wide text-white/80">
                                        YOUR ADVENTURE AWAITS
                                    </h5>
                                    <h1 className="mb-6 text-3xl font-medium tracking-wide md:text-5xl xl:text-6xl">
                                        {item.title}
                                    </h1>
                                    <p className="mb-8 max-w-md text-left text-base text-white/90">
                                        Experience the rush of white water
                                        rafting and kayaking in the heart of
                                        Rishikesh
                                    </p>

                                    <div className="flex flex-col gap-4 sm:flex-row">
                                        <Link href="/packages">
                                            <Button className="rounded-full px-8 py-5 font-normal text-base">
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

                                    <div className="mt-5 mb-6 flex items-start justify-start flex-col gap-2">
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
