"use client";
import { Shield, Award, Users, Check } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { Wave2 } from "../shared/wave";
import { InfiniteSlider } from "@/components/motion/infinite-slider";
const images = [
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1101.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1102.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1201.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1213.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1205.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1210.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1401.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1402.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1403.jpg",
    "https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1404.jpg",
    
];

export default function AboutUs() {
    return (
        <>
            <section className="overflow-hidden bg-gray-900 text-white">
                <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-10 md:grid-cols-[1fr_300px] md:px-20 xl:px-10">
                    <div className="space-y-6 py-16 md:py-24">
                        <div className="text-sm uppercase">Experience</div>
                        <h2 className="mb-4 text-4xl font-normal md:text-4xl xl:text-5xl">
                            Why Sea Hawk Adventure?
                        </h2>
                        
                        <p className="max-w-xl text-gray-300">
                            Founded by adventure enthusiasts with over 15 years
                            of experience, Sea Hawk Adventure was born from a
                            passion for the rivers and mountains of Rishikesh.
                            What started as a small rafting operation has grown
                            into the region&apos;s most trusted adventure
                            company.
                        </p>
                        <p className="mt-4 max-w-xl text-gray-300">
                            Our mission is to provide safe, thrilling, and
                            memorable adventure experiences while promoting
                            sustainable tourism and respect for nature. We take
                            pride in our commitment to environmental
                            conservation and supporting local communities.
                        </p>
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div>
                                <p className="text-3xl font-medium md:text-4xl">
                                    100+
                                </p>
                                <p className="text-sm text-gray-400">
                                    Rafting Trips
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-medium md:text-4xl">
                                    4,000+
                                </p>
                                <p className="text-sm text-gray-400">
                                    Happy Adventurers
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-medium md:text-4xl">
                                    10+
                                </p>
                                <p className="text-sm text-gray-400">
                                    Expert Guides
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 w-96">
                        <div className="flex h-full w-full items-center justify-center gap-8 bg-yellow-50 px-6 text-center text-gray-800">
                            <InfiniteSlider direction="vertical" speed={50}>
                                {images.map((image, i) => (
                                    <CldImage
                                        key={i}
                                        src={image}
                                        alt="Apple Music logo"
                                        width={1920}
                                        height={1080}
                                        className="aspect-video w-96 overflow-hidden object-cover object-center"
                                    />
                                ))}
                            </InfiniteSlider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
