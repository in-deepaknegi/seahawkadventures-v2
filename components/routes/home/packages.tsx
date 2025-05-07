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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, MapPin, Waves } from "lucide-react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { RiArrowRightLine, RiWhatsappLine } from "@remixicon/react";
import {
    __R1__,
    __R2__,
    __R3__,
    __R4__,
    __K1__,
    __K2__,
    __E1__,
    __E2__,
    __C1__,
    __C2__,
    __gallery__,
    __faq__,
    __itinerary__,
    BASE_URL,
} from "@/config/package";

type Rapids =
    | {
          total?: string;
          grades?: string;
      }
    | Record<string, never>;

type Package = {
    title: string;
    description: string;
    image: { src: string };
    featured_image: { src: string; class: string };
    duration: string;
    difficulty: string;
    season: string;
    price: number;
    groupSize: string;
    link: string;
    startingPoint: string;
    endingPoint: string;
    rapids?: Rapids;
};

export default function Packages() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false }),
    );

    const packages: Record<string, Package[]> = {
        rafting: [__R1__.__p__, __R2__.__p__, __R3__.__p__, __R4__.__p__],
        kayaking: [__K1__.__p__, __K2__.__p__],
        expedition: [__E1__.__p__, __E2__.__p__],
        camping: [__C1__.__p__, __C2__.__p__],
    };

    return (
        <section id="packages" className="font-open-sans bg-white py-20">
            <div className="">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <h2 className="mb-5 text-3xl font-medium md:text-4xl xl:text-5xl">
                        Our Adventure Packages
                    </h2>

                    <p className="text-gray-600">
                        Choose from our range of exciting rafting, kayaking,
                        expedition or adventure packages
                    </p>
                </div>

                <Tabs
                    defaultValue="rafting"
                    className="mx-auto w-full max-w-7xl px-4 md:px-16 xl:px-10"
                >
                    <div className="mb-12 flex justify-center">
                        <TabsList className="h-auto rounded-full bg-gray-100 p-1">
                            <TabsTrigger
                                value="rafting"
                                className="cursor-pointer rounded-full px-2.5 py-2 font-normal tracking-wide data-[state=active]:bg-blue-700 data-[state=active]:text-white md:px-8"
                            >
                                Rafting
                            </TabsTrigger>
                            <TabsTrigger
                                value="kayaking"
                                className="cursor-pointer rounded-full px-2.5 py-2 font-normal tracking-wide data-[state=active]:bg-blue-700 data-[state=active]:text-white md:px-8"
                            >
                                Kayaking
                            </TabsTrigger>
                            <TabsTrigger
                                value="expedition"
                                className="cursor-pointer rounded-full px-2.5 py-2 font-normal tracking-wide data-[state=active]:bg-blue-700 data-[state=active]:text-white md:px-8"
                            >
                                Expedition
                            </TabsTrigger>
                            <TabsTrigger
                                value="camping"
                                className="cursor-pointer rounded-full px-2.5 py-2 font-normal tracking-wide data-[state=active]:bg-blue-700 data-[state=active]:text-white md:px-8"
                            >
                                Camping
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {Object.entries(packages).map(([category, items]) => (
                        <TabsContent
                            key={category}
                            value={category}
                            className="mt-0 mb-1"
                        >
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="-ml-4">
                                    {items.map((pkg, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="pl-4 md:basis-1/2 lg:basis-1/3"
                                        >
                                            <Card className="overflow-hidden shadow-none">
                                                <div className="relative h-60 overflow-hidden">
                                                    <CldImage
                                                        src={
                                                            pkg?.image.src ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={pkg.title}
                                                        width={1080}
                                                        height={680}
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <CardHeader className="bg-white text-black">
                                                    <CardTitle className="text-2xl font-medium">
                                                        {pkg.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-black">
                                                        {pkg.description}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent className="bg-white text-black">
                                                    <div className="flex flex-col gap-3">
                                                        <div className="flex items-center gap-2">
                                                            <Clock className="h-4 w-4 text-blue-600" />
                                                            <span>
                                                                {pkg.duration}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Users className="h-4 w-4 text-blue-600" />
                                                            <span>
                                                                {pkg.groupSize}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Award className="h-4 w-4 text-blue-600" />
                                                            <span>
                                                                Professional
                                                                guides
                                                            </span>
                                                        </div>
                                                        {pkg?.startingPoint && (
                                                            <div className="flex items-center gap-2">
                                                                <MapPin className="h-4 w-4 text-blue-600" />
                                                                <span>
                                                                    {
                                                                        pkg?.startingPoint
                                                                    }{" "}
                                                                    -{" "}
                                                                    {
                                                                        pkg?.endingPoint
                                                                    }
                                                                </span>
                                                            </div>
                                                        )}
                                                        {pkg?.rapids?.grades && (
                                                            <div className="flex items-center gap-2">
                                                                <Waves className="h-4 w-4 text-blue-600" />
                                                                <span>
                                                                    Total
                                                                    rapids:{" "}
                                                                    {
                                                                        pkg
                                                                            .rapids
                                                                            .total
                                                                    }{" "}
                                                                    -{" "}
                                                                    {
                                                                        pkg
                                                                            .rapids
                                                                            .grades
                                                                    }
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </CardContent>
                                                <CardFooter className="flex justify-between gap-4 bg-white p-6 text-black">
                                                    <div className="flex flex-col">
                                                        {pkg.price === 0 ? (
                                                            <>
                                                                <span className="text-sm text-gray-500">
                                                                    Price
                                                                    starting
                                                                    from
                                                                </span>
                                                                <div className="flex items-baseline gap-2">
                                                                    <span className="text-3xl font-medium">
                                                                        ₹12,000
                                                                    </span>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className="flex items-baseline gap-2">
                                                                    <span className="text-3xl font-medium">
                                                                        ₹
                                                                        {
                                                                            pkg.price
                                                                        }
                                                                    </span>
                                                                    <span className="text-sm text-gray-500 line-through">
                                                                        ₹
                                                                        {pkg.price +
                                                                            (pkg.price *
                                                                                15) /
                                                                                100}
                                                                    </span>
                                                                </div>
                                                                <span className="text-xs text-gray-500">
                                                                    per person
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                    {pkg.price === 0 ? (
                                                        <div className="flex flex-col gap-2">
                                                            <Button className="rounded-full bg-green-500/90 font-normal text-black hover:bg-green-500">
                                                                <Link
                                                                    href={`https://wa.me/919756620538/?text=Hi there. I'm interested in ${pkg.title} package, can you please share the details?`}
                                                                    target="_blank"
                                                                    className="flex w-full items-center justify-center gap-1"
                                                                >
                                                                    Enquire Now
                                                                </Link>
                                                            </Button>

                                                            <Link
                                                                href={pkg.link}
                                                                className="flex w-full items-center justify-center gap-1 text-sm hover:text-blue-600"
                                                            >
                                                                More details
                                                                <RiArrowRightLine className="size-4" />
                                                            </Link>
                                                        </div>
                                                    ) : (
                                                        <Button className="rounded-full bg-blue-700 font-medium hover:bg-blue-800">
                                                            <Link
                                                                href={pkg.link}
                                                                className="flex w-full items-center justify-center"
                                                            >
                                                                Book Now
                                                            </Link>
                                                        </Button>
                                                    )}
                                                </CardFooter>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <div className="flex items-end justify-end gap-2">
                                    <CarouselPrevious className="relative inset-0 mt-8 block size-9 bg-transparent bg-none shadow-none hover:bg-transparent md:hidden [&>svg]:size-7 [&>svg]:text-black" />
                                    <CarouselNext className="relative inset-0 mt-8 block size-9 bg-transparent bg-none shadow-none hover:bg-transparent md:hidden [&>svg]:size-7 [&>svg]:text-black" />
                                </div>

                                <CarouselPrevious className="absolute -left-10 z-50 hidden size-12 border-none bg-transparent bg-none shadow-none hover:bg-transparent md:block [&>svg]:size-8 [&>svg]:text-black" />
                                <CarouselNext className="absolute -right-13 z-50 hidden size-12 border-none bg-transparent bg-none shadow-none hover:bg-transparent md:block [&>svg]:size-8 [&>svg]:text-black" />
                            </Carousel>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
