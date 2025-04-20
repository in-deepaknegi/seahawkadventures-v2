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
import Gallery from "@/components/routes/home/gallery";
import Feedback from "@/components/routes/home/feedback";
import Contact from "@/components/routes/home/contact";
import Affiliations from "@/components/routes/home/affiliations";

export default function Home() {
    return (
        <>
            <main className="flex-1 pt-20">
                <Hero />
                <Packages />
                <AboutUs />
                <Gallery />
                <Feedback />
                <Affiliations/>
                <Contact/>
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

                    {/* Gallery Section */}

                    {/* Testimonials Section */}

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
