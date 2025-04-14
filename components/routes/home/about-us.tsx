import Image from "next/image";
import { Shield, Award, Users } from "lucide-react";

export default function AboutUs() {
    return (
        <section id="about" className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-10">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-medium md:text-6xl">
                        Why Sea Hawk Adventure?
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg">
                        Discover what makes us the premier adventure company in
                        Rishikesh
                    </p>
                </div>

                <div className="grid items-center gap-12 md:grid-cols-12">
                    <div className="relative col-span-5 h-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3105.jpg"
                            alt="Sea Hawk Adventure team"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="col-span-7 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-medium md:text-4xl">
                                Our Story
                            </h3>
                            <p className="leading-relaxed text-gray-700">
                                Founded by adventure enthusiasts with over 15
                                years of experience, Sea Hawk Adventure was born
                                from a passion for the rivers and mountains of
                                Rishikesh. What started as a small rafting
                                operation has grown into the region&apos;s most
                                trusted adventure company.
                            </p>
                            <p className="mt-4 leading-relaxed text-gray-700">
                                Our mission is to provide safe, thrilling, and
                                memorable adventure experiences while promoting
                                sustainable tourism and respect for nature. We
                                take pride in our commitment to environmental
                                conservation and supporting local communities.
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
                                        We maintain the highest safety standards
                                        with regular equipment checks and
                                        comprehensive training for all our
                                        guides.
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
                                        We tailor each adventure to match your
                                        skill level and preferences, ensuring a
                                        memorable experience for everyone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
