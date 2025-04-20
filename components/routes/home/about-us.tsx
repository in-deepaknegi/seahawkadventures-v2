"use client";
import { Shield, Award, Users, Check } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { Wave2 } from "../shared/wave";

export default function AboutUs() {
    return (
        <>
            <section className="bg-gray-900 text-white  ">
                <div className="mx-auto grid w-full max-w-7xl gap-12 px-10 md:grid-cols-[1fr_300px] md:px-20 xl:px-10">
                    <div className="space-y-6 py-16 md:py-24">
                        <div className="text-sm">Experience</div>
                        <h2 className="mb-4 text-4xl font-normal md:text-6xl">
                            Why Sea Hawk Adventure?
                        </h2>
                        {/* <p className="max-w-xl text-gray-300">
                            With 15 years of experience we are ready to help
                            you. Sea Hawk Adventure is a pixel perfect theme,
                            that is tailor made for adventure companies and
                            businesses, build your website swiftly.
                        </p> */}
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
                                <p className="text-3xl font-medium">100+</p>
                                <p className="text-sm text-gray-400">
                                    Rafting Trips
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-medium">43,000+</p>
                                <p className="text-sm text-gray-400">
                                    Happy Adventurers
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-medium">30+</p>
                                <p className="text-sm text-gray-400">
                                    Expert Guides
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden h-full flex-col items-end justify-center bg-yellow-50 p-8 text-gray-800 md:flex">
                        <div className="origin-center rotate-90 space-y-2 text-right">
                            <p className="text-sm">
                                With 15 Years of experience
                            </p>
                            <p className="text-lg font-medium">
                                we are ready to help you
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-10">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-medium md:text-6xl">
                            Why Sea Hawk Adventure?
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg">
                            Discover what makes us the premier adventure company
                            in Rishikesh
                        </p>
                    </div>

                    <div className="grid items-center gap-12 md:grid-cols-12">
                        <div className="relative col-span-5 h-full overflow-hidden rounded-lg shadow-lg">
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3105.jpg"
                                alt="Sea Hawk Adventure team"
                                width={1920}
                                height={1080}
                                className="size-full object-cover"
                            />
                        </div>

                        <div className="col-span-7 space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-medium md:text-4xl">
                                    Our Story
                                </h3>
                                <p className="leading-relaxed text-gray-700">
                                    Founded by adventure enthusiasts with over
                                    15 years of experience, Sea Hawk Adventure
                                    was born from a passion for the rivers and
                                    mountains of Rishikesh. What started as a
                                    small rafting operation has grown into the
                                    region&apos;s most trusted adventure
                                    company.
                                </p>
                                <p className="mt-4 leading-relaxed text-gray-700">
                                    Our mission is to provide safe, thrilling,
                                    and memorable adventure experiences while
                                    promoting sustainable tourism and respect
                                    for nature. We take pride in our commitment
                                    to environmental conservation and supporting
                                    local communities.
                                </p>
                            </div>

                            <div className="grid gap-6 pt-4">
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                        <Shield className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-700">
                                            Safety First
                                        </h4>
                                        <p className="text-gray-600">
                                            We maintain the highest safety
                                            standards with regular equipment
                                            checks and comprehensive training
                                            for all our guides.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                        <Award className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-700">
                                            Certified Experts
                                        </h4>
                                        <p className="text-gray-600">
                                            Our team consists of internationally
                                            certified guides with extensive
                                            knowledge of local terrain and
                                            conditions.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                        <Users className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-700">
                                            Personalized Experience
                                        </h4>
                                        <p className="text-gray-600">
                                            We tailor each adventure to match
                                            your skill level and preferences,
                                            ensuring a memorable experience for
                                            everyone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="relative bg-gray-900 text-white">
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
                                    With 15 years of experience, we are ready to
                                    help you. Sea Hawk Adventure is tailor-made
                                    for adventure seekers looking for safe,
                                    exciting, and memorable experiences.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-8 py-8">
                                <div>
                                    <p className="text-3xl font-bold">100+</p>
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
                                    <p className="text-3xl font-bold">30+</p>
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
                                            We maintain the highest safety
                                            standards with regular equipment
                                            checks and comprehensive training
                                            for all guides.
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
                                            Our team consists of certified
                                            professionals with years of
                                            experience in adventure sports and
                                            local knowledge.
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
                                            internationally certified equipment
                                            that is regularly maintained and
                                            updated.
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
        </>
    );
}
