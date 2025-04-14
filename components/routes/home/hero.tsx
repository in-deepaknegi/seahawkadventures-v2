"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselImages = [
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        alt: "Thrilling white water rafting in Rishikesh",
        title: "Experience the Thrill of Rafting",
        description:
            "Navigate through exciting rapids on the sacred Ganges River",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        alt: "Kayaking adventure in crystal clear waters",
        title: "Kayaking Adventures",
        description:
            "Explore the serene waters with our expert-guided kayaking tours",
    },
    {
        src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
        alt: "Expedition through the Himalayan foothills",
        title: "Himalayan Expeditions",
        description:
            "Embark on unforgettable journeys through the majestic Himalayan landscapes",
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === carouselImages.length - 1 ? 0 : prev + 1,
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? carouselImages.length - 1 : prev - 1,
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[600px] overflow-hidden md:h-[90vh] -mt-[5rem]">
            {/* Carousel */}
            <div className="relative h-full">
                {carouselImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            priority={index === 0}
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                                {image.title}
                            </h1>
                            <p className="mb-8 max-w-3xl text-xl md:text-2xl">
                                {image.description}
                            </p>
                            <Button
                                size="lg"
                                className="bg-blue-600 text-white hover:bg-blue-700"
                            >
                                Explore Packages
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute right-0 bottom-0 left-0 z-30">
                <Image
                    src="/images/b.png"
                    alt="Hero Image"
                    width={1000}
                    height={1000}
                    className="w-full object-cover"
                />
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 w-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
