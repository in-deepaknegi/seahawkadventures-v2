import React from "react";
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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, MapPin, Clock1, Waves } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import CldImageComponent from "@/components/cld-image";
import Navbar from "@/components/routes/shared/navbar";
import Footer from "@/components/routes/shared/footer";
import { RiArrowRightLine } from "@remixicon/react";

type Params = Promise<{ slug: string }>;

type Rapids =
    | {
          total?: string;
          grades?: string;
      }
    | Record<string, never>;

type Package = {
    title: string;
    description: string;
    featured_image: {
        src: string;
        class?: string;
    };
    duration: string;
    groupSize: string;
    price: number;
    link: string;
    startingPoint?: string;
    endingPoint?: string;
    rapids?: Rapids;
};

const _p_ = {
    riverRafting: {
        sub: " WHITE WATER RAFTING",
        title: "River Rafting in Rishikesh",
        description:
            "Experience the thrill of white water rafting on the mighty Ganges. Choose from our range of rafting packages designed for all experience levels.",
    },
    kayakSchool: {
        sub: "KAYAK SCHOOL",
        title: "Learn Kayaking in Rishikesh",
        description:
            "Master the art of kayaking with our expert instructors. Choose from our range of kayaking courses designed for beginners to advanced paddlers.",
    },
    expeditionAdventures: {
        sub: "ADVENTURE EXPEDITIONS",
        title: "Adventure Expeditions",
        description:
            "Embark on thrilling multi-day expeditions through the Himalayas. From challenging treks to camping adventures, experience the raw beauty of nature with our expert-led expeditions.",
    },
    camping: {
        sub: "CAMPING ADVENTURES",
        title: "Camping in Rishikesh",
        description:
            "Experience the magic of camping under the stars along the Ganges. Choose from our range of camping packages that combine adventure, comfort, and unforgettable memories in nature's lap.",
    },
};

const page = async ({ params }: { params: Params }) => {
    const id = await params;
    const doc = id.slug;

    let content_0: Package[] | null = null;
    let content_1 = null;

    switch (doc) {
        case "river-rafting":
            content_0 = [
                __R1__.__p__,
                __R2__.__p__,
                __R3__.__p__,
                __R4__.__p__,
            ];
            content_1 = _p_.riverRafting;
            break;
        case "kayak-school":
            content_0 = [__K1__.__p__, __K2__.__p__];
            content_1 = _p_.kayakSchool;
            break;
        case "expedition-adventures":
            content_0 = [__E1__.__p__, __E2__.__p__];
            content_1 = _p_.expeditionAdventures;
            break;
        case "camping":
            content_0 = [__C1__.__p__, __C2__.__p__];
            content_1 = _p_.camping;
            break;
        default:
            break;
    }
    return (
        <>
            <Navbar />
            <main className="-mt-20 flex-1 pt-20 font-sans">
                {/* Hero Section */}
                <section className="relative pt-40">
                    <div className="relative z-10 mx-auto mt-auto flex w-full max-w-full flex-col items-center px-4 text-center md:px-16 xl:px-10">
                        <h5 className="mb-3 tracking-wide text-black">
                            {content_1?.sub}
                        </h5>
                        <h1 className="mb-6 text-5xl font-medium text-black md:text-6xl">
                            {content_1?.title}
                        </h1>
                        <p className="mb-8 max-w-2xl text-lg text-gray-600">
                            {content_1?.description}
                        </p>
                    </div>
                </section>

                {/* Packages Grid */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 md:px-16 xl:px-10">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {content_0?.map((pkg, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden shadow-none"
                                >
                                    <div className="relative h-60 overflow-hidden">
                                        <CldImageComponent
                                            src={
                                                pkg.featured_image.src ||
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
                                        <CardDescription className="text-[15px] text-gray-800">
                                            {pkg.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="bg-white text-black">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-blue-600" />
                                                <span>{pkg.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-blue-600" />
                                                <span>{pkg.groupSize}</span>
                                            </div>
                                            {/* <div className="flex items-center gap-2">
                                                <Award className="h-4 w-4 text-blue-600" />
                                                <span>Professional guides</span>
                                            </div> */}
                                            <div className="flex items-center gap-2">
                                                <Clock1 className="h-4 w-4 text-blue-600" />
                                                <span>{pkg.duration}</span>
                                            </div>
                                            {pkg?.startingPoint && (
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4 text-blue-600" />
                                                    <span>
                                                        {pkg?.startingPoint} -{" "}
                                                        {pkg?.endingPoint}
                                                    </span>
                                                </div>
                                            )}
                                            {pkg?.rapids?.total && (
                                                <div className="flex items-center gap-2">
                                                    <Waves className="h-4 w-4 text-blue-600" />
                                                    <span>
                                                        Total rapids:{" "}
                                                        {pkg.rapids?.total} -{" "}
                                                        {pkg.rapids?.grades}
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
                                                        Price starting from
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
                                                            ₹{pkg.price}
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
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default page;

export async function generateMetadata({ params }: { params: Params }) {
    const id = await params;
    const doc = id.slug;

    let content_0: Package[] | null = null;
    let content_1 = null;

    switch (doc) {
        case "river-rafting":
            content_0 = [
                __R1__.__p__,
                __R2__.__p__,
                __R3__.__p__,
                __R4__.__p__,
            ];
            content_1 = _p_.riverRafting;
            break;
        case "kayak-school":
            content_0 = [__K1__.__p__, __K2__.__p__];
            content_1 = _p_.kayakSchool;
            break;
        case "expedition-adventures":
            content_0 = [__E1__.__p__, __E2__.__p__];
            content_1 = _p_.expeditionAdventures;
            break;
        case "camping":
            content_0 = [__C1__.__p__, __C2__.__p__];
            content_1 = _p_.camping;
            break;
        default:
            break;
    }

    return {
        title: content_1?.title,
        description: content_1?.description,
        openGraph: {
            type: "website",
            title: content_1?.title,
            description: content_1?.description,
            url: `${BASE_URL}/adventure-in-rishikes/${doc}`,
            images: [
                {
                    url: `https://res.cloudinary.com/dw5tor8v7/image/upload/v1745082693/img_1213.jpg`,
                    width: 1200,
                    height: 630,
                    alt: content_1?.title,
                },
            ],
            siteName: "Sea Hawk Adventure",
        },
        twitter: {
            card: "summary_large_image",
            title: content_1?.title,
            description: content_1?.description,
            openGraph: {
                images: [
                    `https://res.cloudinary.com/dw5tor8v7/image/upload/v1745082693/img_1213.jpg`,
                ],
                site: "@SeaHawkAdventure",
                creator: "@SeaHawkAdventure",
            },
        },
    };
}
