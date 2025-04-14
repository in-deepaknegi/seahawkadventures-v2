import Image from "next/image";
import Link from "next/link";
import {
    ChevronLeft,
    Clock,
    Users,
    ShieldCheck,
    CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/booking-form";
import Navbar from "@/components/routes/shared/navbar";
import Footer from "@/components/routes/shared/footer";
export default function BeginnerRaftingAdventure() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="-mt-[5rem]">
                {/* Hero Section */}
                <section className="relative h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/dkuixrz40/image/upload/v1744621270/water-rafting-T0101_wbaw4q.jpg"
                        alt="Beginner&apos;s Rafting Adventure"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                        <h1 className="mb-2 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
                            Beginner&apos;s Rafting Adventure
                        </h1>
                        <p className="max-w-3xl text-lg md:text-xl">
                            Perfect for first-timers, experience Grade I-II
                            rapids with expert guides
                        </p>
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
                                Beginner&apos;s Rafting Adventure
                            </span>
                        </div>
                    </div>
                </div>

                {/* Package Details */}
                <section className="py-8 md:py-12">
                    <div className="mx-auto max-w-7xl px-4 md:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                            {/* Main Content */}
                            <div className="space-y-6 md:space-y-8 md:col-span-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <Link
                                        href="/#packages"
                                        className="flex items-center text-blue-600 hover:text-blue-800"
                                    >
                                        <ChevronLeft className="mr-1 h-4 w-4" />
                                        Back to Packages
                                    </Link>
                                    <div className="text-xl md:text-2xl font-bold text-blue-700">
                                        ₹1,200{" "}
                                        <span className="text-sm font-normal text-gray-500">
                                            per person
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                                    <div className="rounded-lg bg-blue-50 p-4">
                                        <Clock className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                                        <h3 className="font-medium">
                                            Duration
                                        </h3>
                                        <p>2 Hours</p>
                                    </div>
                                    <div className="rounded-lg bg-blue-50 p-4">
                                        <Users className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                                        <h3 className="font-medium">
                                            Group Size
                                        </h3>
                                        <p>6-8 People</p>
                                    </div>
                                    <div className="rounded-lg bg-blue-50 p-4">
                                        <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                                        <h3 className="font-medium">
                                            Difficulty
                                        </h3>
                                        <p>Beginner</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="mb-4 text-2xl font-bold text-blue-800">
                                        Overview
                                    </h2>
                                    <p className="mb-4 text-gray-700">
                                        Our Beginner&apos;s Rafting Adventure is the
                                        perfect introduction to the exciting
                                        world of white water rafting. Designed
                                        specifically for first-timers and those
                                        with limited experience, this 2-hour
                                        journey takes you through gentle Grade
                                        I-II rapids on the sacred Ganges River
                                        in Rishikesh.
                                    </p>
                                    <p className="mb-4 text-gray-700">
                                        Under the guidance of our certified
                                        instructors, you&apos;ll learn the basics of
                                        paddling techniques, safety procedures,
                                        and river navigation. The adventure
                                        begins with a comprehensive safety
                                        briefing, followed by practice in calm
                                        waters before heading into the mild
                                        rapids.
                                    </p>
                                    <p className="text-gray-700">
                                        This adventure offers the perfect
                                        balance of excitement and safety, making
                                        it ideal for families, beginners, and
                                        those looking for a gentle introduction
                                        to rafting. You&apos;ll experience the thrill
                                        of navigating rapids while enjoying the
                                        stunning natural scenery of the
                                        Himalayan foothills.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="mb-4 text-2xl font-bold text-blue-800">
                                        Itinerary
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                <span className="font-bold text-blue-600">
                                                    1
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    Arrival & Registration
                                                </h3>
                                                <p className="text-gray-700">
                                                    Arrive at our base camp near
                                                    Laxman Jhula. Complete
                                                    registration and change into
                                                    appropriate gear.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                <span className="font-bold text-blue-600">
                                                    2
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    Safety Briefing
                                                </h3>
                                                <p className="text-gray-700">
                                                    Our expert guides will
                                                    provide a comprehensive
                                                    safety briefing and teach
                                                    basic paddling techniques.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                <span className="font-bold text-blue-600">
                                                    3
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    Practice Session
                                                </h3>
                                                <p className="text-gray-700">
                                                    Practice paddling and safety
                                                    maneuvers in calm water
                                                    before heading to the
                                                    rapids.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                <span className="font-bold text-blue-600">
                                                    4
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    Rafting Adventure
                                                </h3>
                                                <p className="text-gray-700">
                                                    Navigate through exciting
                                                    Grade I-II rapids with names
                                                    like &quot;Small Wave&quot; and
                                                    &quot;Gentle Drop.&quot;
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                <span className="font-bold text-blue-600">
                                                    5
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    Swimming Break
                                                </h3>
                                                <p className="text-gray-700">
                                                    Enjoy a refreshing swimming
                                                    break in a safe, calm
                                                    section of the river.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                <span className="font-bold text-blue-600">
                                                    6
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">
                                                    Return & Refreshments
                                                </h3>
                                                <p className="text-gray-700">
                                                    Return to base camp for
                                                    refreshments and a chance to
                                                    view and purchase photos
                                                    from your adventure.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
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
                                </div>

                                <div>
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
                                </div>

                                <div>
                                    <h2 className="mb-4 text-2xl font-bold text-blue-800">
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
                                </div>

                                <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                                    <div className="relative h-48 md:h-64 overflow-hidden rounded-lg">
                                        <Image
                                            src="https://res.cloudinary.com/dkuixrz40/image/upload/v1744621270/img-3111.jpg"
                                            alt="Rafting group photo"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative h-48 md:h-64 overflow-hidden rounded-lg">
                                        <Image
                                            src="https://res.cloudinary.com/dkuixrz40/image/upload/v1744621270/img-3112.jpg"
                                            alt="Rafting action shot"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6 md:col-span-4">
                                <div className="rounded-lg bg-blue-50 p-4 md:p-6 shadow-sm">
                                    <h2 className="mb-3 md:mb-4 text-lg md:text-xl font-bold text-blue-800">
                                        Book This Adventure
                                    </h2>
                                    <BookingForm
                                        packageName="Beginner&apos;s Rafting Adventure"
                                        packagePrice="₹1,200"
                                    />
                                </div>

                                <div className="rounded-lg border bg-white p-4 md:p-6 shadow-sm">
                                    <h3 className="mb-3 text-lg font-bold text-blue-800">
                                        Need Help?
                                    </h3>
                                    <p className="mb-4 text-sm md:text-base text-gray-700">
                                        Have questions about this package or
                                        need assistance with booking?
                                    </p>
                                    <div className="space-y-3">
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm md:text-base">
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

                                <div className="rounded-lg border bg-white p-4 md:p-6 shadow-sm">
                                    <h3 className="mb-3 text-lg font-bold text-blue-800">
                                        You May Also Like
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <div className="relative h-14 w-14 md:h-16 md:w-16 flex-shrink-0 overflow-hidden rounded">
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
                                            <div className="relative h-14 w-14 md:h-16 md:w-16 flex-shrink-0 overflow-hidden rounded">
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
                </section>
            </main>
            <Footer />
        </div>
    );
}
