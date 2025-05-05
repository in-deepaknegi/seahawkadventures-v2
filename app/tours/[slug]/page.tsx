import allContents from "@/.content-collections/generated/allContents";
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
    __gallery__,
    __faq__,
    __itinerary__,
    BASE_URL,
} from "@/config/package";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronLeft,
    Clock,
    Users,
    ShieldCheck,
    CalendarDays,
    Pin,
    LocateIcon,
    CheckCircleIcon,
    XCircleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/booking-form";
import Navbar from "@/components/routes/shared/navbar";
import Footer from "@/components/routes/shared/footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ImageGallery from "@/components/image-gallery";

type Params = Promise<{ slug: string }>;

async function getContentFromParams({ id }: { id: { slug: string } }) {
    const doc = allContents.find((doc) => doc.slugAsParams === id.slug);

    if (!doc) {
        return null;
    }

    return doc;
}

const page = async ({ params }: { params: Params }) => {
    const id = await params;

    const doc = await getContentFromParams({ id });

    let content_0 = null;
    let content_1 = null;
    let content_2 = null;
    let content_3 = null;
    let content_4 = null;
    let content_5 = null;
    let content_6 = null;

    switch (doc?.slug) {
        case "ganga-river-rafting-marine-drive-shivpuri":
            content_0 = __R1__.__p__;
            content_1 = __R1__.overview;
            content_2 = __R1__.__i__;
            content_3 = __gallery__.rafting;
            content_4 = __faq__.rafting;
            content_5 = __itinerary__.rafting;
            break;
        case "ganga-river-rafting-shivpuri-tapovan":
            content_0 = __R2__.__p__;
            content_1 = __R2__.overview;
            content_2 = __R2__.__i__;
            content_3 = __gallery__.rafting;
            content_4 = __faq__.rafting;
            content_5 = __itinerary__.rafting;
            break;
        case "ganga-river-rafting-marine-drive-tapovan":
            content_0 = __R3__.__p__;
            content_1 = __R3__.overview;
            content_2 = __R3__.__i__;
            content_3 = __gallery__.rafting;
            content_4 = __faq__.rafting;
            content_5 = __itinerary__.rafting;
            break;
        case "ganga-river-rafting-kaudiyala-tapovan":
            content_0 = __R4__.__p__;
            content_1 = __R4__.overview;
            content_2 = __R4__.__i__;
            content_3 = __gallery__.rafting;
            content_4 = __faq__.rafting;
            content_5 = __itinerary__.rafting;
            break;
        case "kayak-basic-lessons-in-rishikesh":
            content_0 = __K1__.__p__;
            content_1 = __K1__.overview;
            content_2 = __K1__.__i__;
            content_3 = __gallery__.kayaking;
            content_4 = __faq__.kayaking;
            content_5 = __itinerary__.kayaking_1;
            content_6 = __K1__.extras;
            break;
        case "kayak-complete-lessons-in-rishikesh":
            content_0 = __K2__.__p__;
            content_1 = __K2__.overview;
            content_2 = __K2__.__i__;
            content_3 = __gallery__.kayaking;
            content_4 = __faq__.kayaking;
            content_5 = __itinerary__.kayaking_2;
            content_6 = __K2__.extras;
            break;
        case "rafting-expedition-in-rishikesh":
            content_0 = __E1__.__p__;
            content_1 = __E1__.overview;
            content_2 = __E1__.__i__;
            content_3 = __gallery__.expedition;
            content_4 = __faq__.expedition;
            content_5 = __itinerary__.expedition_1;
            content_6 = __E1__.extras;
            break;
        case "kayak-expedition-in-rishikesh":
            content_0 = __E2__.__p__;
            content_1 = __E2__.overview;
            content_2 = __E2__.__i__;
            content_3 = __gallery__.expedition;
            content_4 = __faq__.expedition;
            content_5 = __itinerary__.expedition_2;
            content_6 = __E2__.extras;
            break;
        default:
            break;
    }
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="-mt-[5rem]">
                {/* Hero Section */}
                <section className="relative h-[70vh] overflow-hidden md:h-[400px] lg:h-[600px]">
                    <Image
                        src={content_0?.featured_image.src ?? ""}
                        alt="Beginner's Rafting Adventure"
                        fill
                        className={`object-cover ${content_0?.featured_image.class}`}
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex h-full flex-col md:items-center justify-end p-4 text-center text-white">
                        <h1 className="mb-2 text-2xl font-bold md:mb-4 md:text-4xl lg:text-5xl">
                            {doc?.title}
                        </h1>
                        <p className="max-w-3xl text-base md:text-xl">
                            {content_0?.description}
                        </p>

                        <div className="mt-5 md:mt-10 flex flex-col items-center justify-center md:flow-row gap-2 md:gap-4">
                            <div className="flex items-center gap-2">
                                <Clock />
                                <p>{content_0?.duration}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <LocateIcon />
                                <p>
                                    {content_0?.startingPoint} -{" "}
                                    {content_0?.endingPoint}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Breadcrumb */}
                <div className="bg-blue-50 py-2 md:py-3">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="flex flex-wrap items-center text-sm">
                            <Link
                                href="/"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Home
                            </Link>
                            <span className="mx-2">/</span>
                            <Link
                                href="/#packages"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Packages
                            </Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-600">
                                {doc?.title} ({doc?.slugAsParams})
                            </span>
                        </div>
                    </div>
                </div>

                {/* Package Details */}
                <section className="py-8 md:py-12">
                    <div className="mx-auto max-w-7xl px-4 md:px-10">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
                            {/* Main Content */}
                            <div className="space-y-6 md:col-span-8 md:space-y-8">
                                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                                    {/* <Link
                                        href="/#packages"
                                        className="flex items-center text-blue-600 hover:text-blue-800"
                                    >
                                        <ChevronLeft className="mr-1 h-4 w-4" />
                                        Back to Packages
                                    </Link> */}
                                    <div className="text-xl font-bold text-blue-700 md:text-2xl">
                                        ₹{content_0?.price}
                                        <span className="text-sm font-normal text-gray-500">
                                            per person
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div className="rounded-lg bg-blue-50 p-4">
                                        <Clock className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                                        <h3 className="font-medium">
                                            Duration
                                        </h3>
                                        <p>{content_0?.duration}</p>
                                    </div>
                                    <div className="rounded-lg bg-blue-50 p-4">
                                        <Users className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                                        <h3 className="font-medium">
                                            Group Size
                                        </h3>
                                        <p>{content_0?.groupSize} peoples</p>
                                    </div>
                                    <div className="rounded-lg bg-blue-50 p-4">
                                        <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                                        <h3 className="font-medium">
                                            Difficulty
                                        </h3>
                                        <p>{content_0?.difficulty}</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="mb-4 border-b py-2 text-2xl font-medium text-blue-700 md:text-3xl">
                                        Overview
                                    </h2>

                                    <div
                                        className="mb-6 font-normal text-neutral-800"
                                        dangerouslySetInnerHTML={{
                                            __html: content_1 || " ",
                                        }}
                                    />
                                </div>

                                <div>
                                    <h2 className="mb-4 border-b py-2 text-2xl font-medium text-blue-700 md:text-3xl">
                                        Inclusions/Exclusions
                                    </h2>
                                    <div
                                        className={`grid ${content_2?.notIncluded.length! > 0 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-4`}
                                    >
                                        <div>
                                            <h3 className="text-lg font-medium md:text-xl">
                                                What is included in the tour
                                            </h3>
                                            <ul className="mt-3 space-y-2 text-gray-700">
                                                {content_2?.included.map(
                                                    (item, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start gap-2 text-[15px] text-gray-700"
                                                        >
                                                            <span>
                                                                <CheckCircleIcon className="size-5 text-green-600" />
                                                            </span>
                                                            {item}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                        {content_2?.notIncluded.length! > 0 && (
                                            <>
                                                <div>
                                                    <h3 className="text-lg font-medium md:text-xl">
                                                        What is excluded in the
                                                        tour
                                                    </h3>
                                                    <ul className="mt-3 space-y-2 text-gray-700">
                                                        {content_2?.notIncluded.map(
                                                            (item, index) => (
                                                                <li
                                                                    key={index}
                                                                    className="flex items-start gap-2 text-[15px] text-gray-700"
                                                                >
                                                                    <span>
                                                                        <XCircleIcon className="size-5 text-red-600" />
                                                                    </span>
                                                                    {item}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Itinerary */}
                                <div>
                                    <h2 className="mb-4 border-b py-2 text-2xl font-medium text-blue-700 md:text-3xl">
                                        Itinerary
                                    </h2>
                                    <div className="mt-3 space-y-4">
                                        {content_5?.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex gap-4"
                                            >
                                                <div className="flex items-start gap-2">
                                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                        <span className="font-bold text-blue-600">
                                                            {index + 1}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold">
                                                            {item.label}
                                                        </h3>
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: item.description,
                                                            }}
                                                            className="content mt-2 text-gray-700"
                                                        />
                                                        {/* <p className="text-gray-700">
                                                            {item.description}
                                                        </p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Itinerary */}
                                {content_6 && (
                                    <div>
                                        <h2 className="mb-4 border-b py-2 text-2xl font-medium text-blue-700 md:text-3xl">
                                            Extras
                                        </h2>
                                        <div className="mt-3 space-y-4">
                                            {content_6?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex gap-4"
                                                >
                                                    <div className="flex items-start gap-2">
                                                        <div>
                                                            <h3 className="text-lg font-semibold">
                                                                {item.label}
                                                            </h3>
                                                            <p className="text-gray-700">
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <h2 className="mb-4 border-b py-2 text-2xl font-medium text-blue-700 md:text-3xl">
                                        Must Know Facts
                                    </h2>
                                    <h3 className="text-lg font-medium md:text-xl">
                                        Facts to know before you book your
                                        rafting trip:
                                    </h3>
                                    <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                                        <li>
                                            There is an age limit for rafting
                                            that is a minimum of 15 years and a
                                            maximum of 60 years.
                                        </li>
                                        <li>
                                            There is a weight limit of a minimum
                                            of 40kg and a maximum of 100kg.
                                            Weight needs to be in proportion
                                            with height. 6 feet tall 100kg is
                                            fine but 5 feet tall and 100km is
                                            not fine for rafting.
                                        </li>
                                        <li>
                                            People needs to be in good health
                                            with an active lifestyle. People
                                            with heart problems/ bypass surgery
                                            or epilepsy or with severe asthma
                                            are not allowed on a rafting trip as
                                            it can be risky for their life.
                                            People with normal asthma can carry
                                            their inhalers with them on a raft
                                            and just let your guide know about
                                            it.
                                        </li>
                                        <li>
                                            People need to wear appropriate
                                            clothing for rafting which is
                                            quick-drying clothes like shorts and
                                            T-shirt/ slacks pants or nylon
                                            tights. No sari or Skirts or burka
                                            please.
                                        </li>
                                        <li>
                                            There is a Traffic jam in Rishikesh
                                            on the weekends so in case you are
                                            coming from Delhi / Haridwar or
                                            Dehradun, you make sure to keep 2-3
                                            hours extra in hand to reach our
                                            office at Tapovan- Luxman Jhula in
                                            time.
                                        </li>
                                    </ul>

                                    <h3 className="mt-6 text-lg font-medium md:text-xl">
                                        Cancelation Policy for Day Rafting trips
                                    </h3>
                                    <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                                        <li>
                                            Cancelation before 48 Hours, 90%
                                            refundable of total amount..
                                        </li>
                                        <li>
                                            Cancelation before 24 Hours, 50%
                                            refundable of total amount.
                                        </li>
                                        <li>
                                            Cancelation before less than 24
                                            Hours or No Show Up, 100%
                                            chargeable. No refunds.
                                        </li>
                                    </ul>
                                </div>

                                <div className="overflow-hidden bg-white">
                                    <div className="mb-3 flex items-center gap-2 border-b border-neutral-200 px-4 py-2 text-2xl font-medium text-black">
                                        Frequently asked questions
                                    </div>
                                    <Accordion
                                        iconVariant="plus-minus"
                                        className="mx-auto flex w-full max-w-full flex-col divide-y divide-zinc-200"
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        {content_4?.map((item, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={item.id}
                                                className="py-2"
                                            >
                                                <AccordionTrigger className="w-full cursor-pointer text-left text-base text-zinc-950">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <span>
                                                            <item.icon className="size-4 text-neutral-400" />
                                                        </span>
                                                        <div>{item.title}</div>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="mt-3">
                                                    <p className="pl-5 text-sm text-zinc-700 md:text-base">
                                                        {item.content}
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>

                                <ImageGallery images={content_3} />

                                {/* <div>
                                    <h2 className="mb-4 text-2xl font-bold text-blue-800">
                                        What to Bring
                                    </h2>
                                    <ul className="list-disc space-y-2 pl-5 text-gray-700">
                                        <li>
                                            Comfortable swimwear to wear under
                                            the provided wetsuit
                                        </li>
                                        <li>
                                            Quick-dry clothes (t-shirt and
                                            shorts)
                                        </li>
                                        <li>
                                            Water shoes or sandals with straps
                                            (no flip-flops)
                                        </li>
                                        <li>Towel and change of clothes</li>
                                        <li>
                                            Sunscreen and sunglasses with strap
                                        </li>
                                        <li>Waterproof camera (optional)</li>
                                        <li>
                                            Personal medications if required
                                        </li>
                                    </ul>
                                </div> */}

                                {/* <div>
                                    <h2 className="mb-4 text-2xl font-bold text-blue-800">
                                        What&apos;s Included
                                    </h2>
                                    <ul className="grid gap-2 md:grid-cols-2">
                                        <li className="flex items-center">
                                            <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                            Professional rafting guides
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                            All rafting equipment
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                            Safety gear (helmet, life jacket)
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                            Wetsuit (during colder months)
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                            Basic training and safety briefing
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                            Light refreshments after rafting
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                            First aid kit and safety equipment
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                            Changing facilities
                                        </li>
                                    </ul>
                                </div> */}

                                {/* <div>
                                    <h2 className="mb-4 border-b py-2 text-2xl font-medium text-blue-700 md:text-3xl">
                                        Safety Information
                                    </h2>
                                    <p className="mb-4 text-gray-700">
                                        At Sea Hawk Adventure, safety is our top
                                        priority. Our beginner&apos;s rafting
                                        adventure is designed with safety in
                                        mind, and all our guides are certified
                                        in swift water rescue and first aid.
                                    </p>
                                    <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4">
                                        <h3 className="text-lg font-semibold text-blue-800">
                                            Important Safety Notes:
                                        </h3>
                                        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                                            <li>
                                                Participants must be at least 12
                                                years old and know how to swim
                                            </li>
                                            <li>
                                                Maximum weight limit: 120 kg
                                                (265 lbs)
                                            </li>
                                            <li>
                                                Not recommended for pregnant
                                                women or people with heart
                                                conditions
                                            </li>
                                            <li>
                                                Participants must follow all
                                                safety instructions given by
                                                guides
                                            </li>
                                            <li>
                                                Sea Hawk Adventure reserves the
                                                right to cancel or modify the
                                                trip due to weather or river
                                                conditions
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}

                                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                                    <div className="relative h-48 overflow-hidden rounded-lg md:h-64">
                                        <Image
                                            src={content_3?.[4].src ?? ""}
                                            alt="Rafting group photo"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative h-48 overflow-hidden rounded-lg md:h-64">
                                        <Image
                                            src={content_3?.[5].src ?? ""}
                                            alt="Rafting action shot"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6 md:col-span-4">
                                <div className="sticky top-24 space-y-10">
                                    <div className="rounded-lg bg-blue-50 p-4 shadow-sm md:p-6">
                                        <h2 className="mb-3 text-lg font-medium text-blue-800 md:mb-4 md:text-xl">
                                            Book This Adventure
                                        </h2>
                                        <BookingForm
                                            packageName={doc?.title}
                                            packagePrice={content_0?.price}
                                        />
                                    </div>

                                    <div className="rounded-lg border bg-white p-4 shadow-sm md:p-6">
                                        <h3 className="mb-3 text-lg font-bold text-blue-800">
                                            Need Help?
                                        </h3>
                                        <p className="mb-4 text-sm text-gray-700 md:text-base">
                                            Have questions about this package or
                                            need assistance with booking?
                                        </p>
                                        <div className="space-y-3">
                                            <Button className="w-full bg-blue-600 text-sm hover:bg-blue-700 md:text-base">
                                                Chat With Us
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="w-full text-sm md:text-base"
                                            >
                                                Call: +91 98765 43210
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border bg-white p-4 shadow-sm md:p-6">
                                        <h3 className="mb-3 text-lg font-bold text-blue-800">
                                            You May Also Like
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex gap-3">
                                                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded md:h-16 md:w-16">
                                                    <Image
                                                        src="/placeholder.svg?height=100&width=100"
                                                        alt="Intermediate Rafting"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">
                                                        Intermediate Rafting
                                                        Challenge
                                                    </h4>
                                                    <p className="text-sm text-gray-500">
                                                        3 hours | ₹1,800
                                                    </p>
                                                    <Link
                                                        href="#"
                                                        className="text-sm text-blue-600 hover:underline"
                                                    >
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded md:h-16 md:w-16">
                                                    <Image
                                                        src="/placeholder.svg?height=100&width=100"
                                                        alt="Kayaking Basics"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">
                                                        Kayaking Basics
                                                    </h4>
                                                    <p className="text-sm text-gray-500">
                                                        2 hours | ₹1,500
                                                    </p>
                                                    <Link
                                                        href="#"
                                                        className="text-sm text-blue-600 hover:underline"
                                                    >
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default page;

export async function generateMetadata({ params }: { params: Params }) {
    const id = await params;

    const doc = await getContentFromParams({ id });

    return {
        title: doc?.title,
        description: doc?.description,
        openGraph: {
            type: "website",
            title: doc?.title,
            description: doc?.description,
            url: `${BASE_URL}/tours/${doc?.slugAsParams}`,
            images: [
                {
                    url: `https://res.cloudinary.com/dr8gbqqid/image/upload/v1734974473/img-3101.jpg`,
                    width: 1200,
                    height: 630,
                    alt: doc?.title,
                },
            ],
            siteName: "Sea Hawk Adventure",
        },
        twitter: {
            card: "summary_large_image",
            title: doc?.title,
            description: doc?.description,
            images: [
                `https://res.cloudinary.com/dr8gbqqid/image/upload/v1734974473/img-3101.jpg`,
            ],
            site: "@SeaHawkAdventure",
            creator: "@SeaHawkAdventure",
        },
    };
}
