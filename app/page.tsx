import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
    Check,
    MapPin,
    Mail,
    Phone,
    Clock,
    Star,
    ChevronRight,
} from "lucide-react";
import { Wave1, Wave2 } from "@/components/routes/shared/wave";
// import { ContactForm } from "@/components/contact-form";
// import { SiteHeader } from "@/components/site-header";
// import { SiteFooter } from "@/components/site-footer";
import Hero from "@/components/routes/home/hero";
import Packages from "@/components/routes/home/packages";
import AboutUs from "@/components/routes/home/about-us";

export default function Home() {
    return (
        <>
        <main className="flex-1 pt-20">
            <Hero />
            <Packages/>
            <AboutUs/>
        </main>
            <div className="flex min-h-screen flex-col">
                {/* <SiteHeader /> */}

                <main className="flex-1 pt-20">
                    {/* Hero Section */}

                    {/* Affiliations Section */}
                    <section className="border-b border-gray-100 py-8">
                        <div className="container">
                            <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between">
                                {[
                                    "Tourism Board",
                                    "Adventure Alliance",
                                    "ATOA",
                                    "Safety Council",
                                    "Booking.com",
                                ].map((name, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center"
                                    >
                                        <Image
                                            src={`/placeholder.svg?height=40&width=120&text=${name.replace(" ", "+")}`}
                                            alt={name}
                                            width={120}
                                            height={40}
                                            className="h-8 object-contain opacity-60 transition-opacity hover:opacity-100"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Packages Section */}
                    

                    {/* Why Choose Us Section */}
                    <section
                        id="about"
                        className="relative bg-gray-900 text-white"
                    >
                        <Wave2 />
                        <div className="container px-16 py-20">
                            <div className="grid gap-16 md:grid-cols-[1fr_400px]">
                                <div className="space-y-8">
                                    <div>
                                        <h5 className="text-primary mb-3 mix-blend-difference">
                                            OUR EXPERIENCE
                                        </h5>
                                        <h2 className="mb-5 text-3xl font-bold mix-blend-difference md:text-4xl">
                                            Why Sea Hawk Adventure?
                                        </h2>
                                        <p className="max-w-2xl text-base text-gray-300 mix-blend-difference">
                                            With 15 years of experience, we are
                                            ready to help you. Sea Hawk
                                            Adventure is tailor-made for
                                            adventure seekers looking for safe,
                                            exciting, and memorable experiences.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-8 py-8">
                                        <div>
                                            <p className="text-3xl font-bold">
                                                100+
                                            </p>
                                            <p className="text-gray-400">
                                                Rafting Trips
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold">
                                                43,000+
                                            </p>
                                            <p className="text-gray-400">
                                                Happy Adventurers
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold">
                                                30+
                                            </p>
                                            <p className="text-gray-400">
                                                Expert Guides
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex">
                                            <div className="bg-primary/20 mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                                                <Check className="text-primary h-6 w-6" />
                                            </div>
                                            <div>
                                                <h4 className="mb-2 text-lg font-medium">
                                                    Safety First
                                                </h4>
                                                <p className="text-gray-300">
                                                    We maintain the highest
                                                    safety standards with
                                                    regular equipment checks and
                                                    comprehensive training for
                                                    all guides.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className="bg-primary/20 mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                                                <Check className="text-primary h-6 w-6" />
                                            </div>
                                            <div>
                                                <h4 className="mb-2 text-lg font-medium">
                                                    Experienced Guides
                                                </h4>
                                                <p className="text-gray-300">
                                                    Our team consists of
                                                    certified professionals with
                                                    years of experience in
                                                    adventure sports and local
                                                    knowledge.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className="bg-primary/20 mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                                                <Check className="text-primary h-6 w-6" />
                                            </div>
                                            <div>
                                                <h4 className="mb-2 text-lg font-medium">
                                                    Quality Equipment
                                                </h4>
                                                <p className="text-gray-300">
                                                    We use only the best,
                                                    internationally certified
                                                    equipment that is regularly
                                                    maintained and updated.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-primary/10 flex flex-col items-center justify-center rounded-xl p-12 text-center">
                                    <div className="origin-center rotate-90 transform">
                                        <p className="text-primary mb-2 text-lg">
                                            With 15 Years of experience
                                        </p>
                                        <p className="text-2xl font-medium">
                                            we are ready to help you
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section id="gallery" className="py-20">
                        <div className="container">
                            <div className="mx-auto mb-14 max-w-3xl text-center">
                                <h5 className="text-primary mb-3">
                                    VISUAL JOURNEY
                                </h5>
                                <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                                    Adventure Gallery
                                </h2>
                                <p className="text-gray-600">
                                    Glimpses of the thrilling experiences that
                                    await you
                                </p>
                            </div>

                            <Tabs defaultValue="all" className="w-full">
                                <div className="mb-12 flex justify-center">
                                    <TabsList className="h-auto rounded-full bg-gray-100 p-1">
                                        <TabsTrigger
                                            value="all"
                                            className="rounded-full px-6 py-3 data-[state=active]:bg-black data-[state=active]:text-white"
                                        >
                                            All
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="rafting"
                                            className="rounded-full px-6 py-3 data-[state=active]:bg-black data-[state=active]:text-white"
                                        >
                                            Rafting
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="kayaking"
                                            className="rounded-full px-6 py-3 data-[state=active]:bg-black data-[state=active]:text-white"
                                        >
                                            Kayaking
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="expedition"
                                            className="rounded-full px-6 py-3 data-[state=active]:bg-black data-[state=active]:text-white"
                                        >
                                            Expedition
                                        </TabsTrigger>
                                    </TabsList>
                                </div>

                                <TabsContent value="all" className="mt-0">
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                        {Array.from({ length: 8 }).map(
                                            (_, index) => (
                                                <div
                                                    key={index}
                                                    className="aspect-square overflow-hidden rounded-xl"
                                                >
                                                    <Image
                                                        src={`/placeholder.svg?height=400&width=400&text=Adventure+${index + 1}`}
                                                        alt={`Adventure Gallery ${index + 1}`}
                                                        width={400}
                                                        height={400}
                                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                                    />
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </TabsContent>

                                <TabsContent value="rafting" className="mt-0">
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                        {Array.from({ length: 4 }).map(
                                            (_, index) => (
                                                <div
                                                    key={index}
                                                    className="aspect-square overflow-hidden rounded-xl"
                                                >
                                                    <Image
                                                        src={`/placeholder.svg?height=400&width=400&text=Rafting+${index + 1}`}
                                                        alt={`Rafting Gallery ${index + 1}`}
                                                        width={400}
                                                        height={400}
                                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                                    />
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </TabsContent>

                                <TabsContent value="kayaking" className="mt-0">
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                        {Array.from({ length: 4 }).map(
                                            (_, index) => (
                                                <div
                                                    key={index}
                                                    className="aspect-square overflow-hidden rounded-xl"
                                                >
                                                    <Image
                                                        src={`/placeholder.svg?height=400&width=400&text=Kayaking+${index + 1}`}
                                                        alt={`Kayaking Gallery ${index + 1}`}
                                                        width={400}
                                                        height={400}
                                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                                    />
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </TabsContent>

                                <TabsContent
                                    value="expedition"
                                    className="mt-0"
                                >
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                        {Array.from({ length: 4 }).map(
                                            (_, index) => (
                                                <div
                                                    key={index}
                                                    className="aspect-square overflow-hidden rounded-xl"
                                                >
                                                    <Image
                                                        src={`/placeholder.svg?height=400&width=400&text=Expedition+${index + 1}`}
                                                        alt={`Expedition Gallery ${index + 1}`}
                                                        width={400}
                                                        height={400}
                                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                                    />
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section
                        id="testimonials"
                        className="bg-gray-900 py-20 text-white"
                    >
                        <div className="container">
                            <div className="mx-auto mb-14 max-w-3xl text-center">
                                <h5 className="text-primary mb-3">
                                    TESTIMONIALS
                                </h5>
                                <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                                    What Our Adventurers Say
                                </h2>
                                <p className="text-gray-300">
                                    Hear from those who've experienced our
                                    adventures firsthand
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-3">
                                {[
                                    {
                                        name: "Vikram Sharma",
                                        location: "Delhi",
                                        rating: 5,
                                        comment:
                                            "Amazing experience with Sea Hawk! The guides were professional and the rafting was thrilling.",
                                        color: "bg-gray-800",
                                        icon: "V",
                                    },
                                    {
                                        name: "Samantha Jain",
                                        location: "Mumbai",
                                        rating: 5,
                                        comment:
                                            "Best adventure company in Rishikesh. The kayaking lessons were excellent and the instructors were patient.",
                                        color: "bg-gray-800",
                                        icon: "S",
                                    },
                                    {
                                        name: "Rahul Patel",
                                        location: "Ahmedabad",
                                        rating: 5,
                                        comment:
                                            "Had an incredible time with the 26km rafting package. Will definitely come back!",
                                        color: "bg-gray-800",
                                        icon: "R",
                                    },
                                ].map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl bg-gray-800 p-8"
                                    >
                                        <div className="mb-6 flex items-center">
                                            <div
                                                className={`bg-primary/20 text-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold`}
                                            >
                                                {testimonial.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-gray-400">
                                                    {testimonial.location}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex text-yellow-400">
                                            {Array.from({
                                                length: testimonial.rating,
                                            }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 fill-current"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-300">
                                            {testimonial.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 text-center">
                                <Link href="/feedback">
                                    <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 py-5">
                                        View All Testimonials
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Affiliations Section */}
                    <section className="py-16">
                        <div className="container">
                            <div className="mx-auto mb-10 max-w-3xl text-center">
                                <h5 className="text-primary mb-3">
                                    TRUSTED PARTNERS
                                </h5>
                                <h2 className="mb-5 text-3xl font-bold">
                                    Our Affiliations
                                </h2>
                                <p className="text-gray-600">
                                    We're proud to be associated with these
                                    prestigious organizations
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                                {[
                                    "Tourism Board",
                                    "Adventure Alliance",
                                    "ATOA",
                                    "Safety Council",
                                    "Booking.com",
                                ].map((name, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center"
                                    >
                                        <Image
                                            src={`/placeholder.svg?height=60&width=120&text=${name.replace(" ", "+")}`}
                                            alt={name}
                                            width={120}
                                            height={60}
                                            className="h-10 object-contain opacity-60 transition-opacity hover:opacity-100"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section
                        id="contact"
                        className="bg-gray-900 py-20 text-white"
                    >
                        <div className="container">
                            <div className="mx-auto mb-14 max-w-3xl text-center">
                                <h5 className="text-primary mb-3">
                                    GET IN TOUCH
                                </h5>
                                <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                                    Contact Us
                                </h2>
                                <p className="text-gray-300">
                                    Have questions or ready to book your
                                    adventure? Get in touch with our team!
                                </p>
                            </div>

                            <div className="grid gap-16 md:grid-cols-2">
                                <div className="rounded-xl bg-gray-800 p-8">
                                    {/* <ContactForm /> */}
                                </div>

                                <div className="space-y-8">
                                    <div className="rounded-xl bg-gray-800 p-8">
                                        <h3 className="mb-6 text-xl font-bold">
                                            Our Location
                                        </h3>
                                        <div className="mb-6 flex items-start">
                                            <MapPin className="text-primary mt-1 mr-4 h-5 w-5" />
                                            <p className="text-gray-300">
                                                123 Adventure Lane, Near Laxman
                                                Jhula,
                                                <br />
                                                Rishikesh, Uttarakhand, India -
                                                249201
                                            </p>
                                        </div>
                                        <div className="mb-6 flex items-center">
                                            <Phone className="text-primary mr-4 h-5 w-5" />
                                            <p className="text-gray-300">
                                                +91 98765 43210
                                            </p>
                                        </div>
                                        <div className="mb-6 flex items-center">
                                            <Mail className="text-primary mr-4 h-5 w-5" />
                                            <p className="text-gray-300">
                                                info@seahawkadventure.com
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="text-primary mr-4 h-5 w-5" />
                                            <p className="text-gray-300">
                                                Open Daily: 8:00 AM - 8:00 PM
                                            </p>
                                        </div>
                                    </div>

                                    <div className="h-64 overflow-hidden rounded-xl bg-gray-800">
                                        <Image
                                            src="/placeholder.svg?height=300&width=600&text=Google+Map"
                                            alt="Location Map"
                                            width={600}
                                            height={300}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* <SiteFooter /> */}
            </div>
        </>
    );
}

// import React from "react";
// import Navbar from "@/components/routes/shared/navbar";
// import Hero from "@/components/routes/home/hero";
// import Packages from "@/components/routes/home/packages";
// import Gallery from "@/components/routes/home/gallery";
// import Feedback from "@/components/routes/home/feedback";
// import Contact from "@/components/routes/home/contact";
// import Footer from "@/components/routes/shared/footer";
// import AboutUs from "@/components/routes/home/about-us";
// import Affiliations from "@/components/routes/home/affiliations";

// export default function Home() {
//     return (
//         <>
//             <Navbar />
//             <main>
//                 <Hero />
//                 <Packages />
//                 <AboutUs />
//                 <Gallery />
//                 <Feedback />
//                 <Affiliations />
//                 <Contact />
//             </main>
//             <Footer />
//         </>
//     );
// }
