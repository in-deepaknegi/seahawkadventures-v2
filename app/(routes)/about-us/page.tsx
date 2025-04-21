import Image from "next/image";
import { Shield, Award, Users, MapPin, Target } from "lucide-react";
import Navbar from "@/components/routes/shared/navbar";
import Footer from "@/components/routes/shared/footer";
import { Wave2, Wave3, Wave4 } from "@/components/routes/shared/wave";
import CldImageComponent from "@/components/cld-image";
import { Metadata } from "next";
import { BASE_URL } from "@/config/package";
import Profile1 from "@/public/images/team/t00.jpg";
import Profile2 from "@/public/images/team/t01.jpg";
import Profile3 from "@/public/images/team/t02.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const teams = [
    {
        image: Profile1,
        author: "Rishi Rana (Founder)",
        description: "Professional Kayaker & Raft Guide",
        username: "@rishi_aquaholic",
        href: "https://www.instagram.com/rishi_aquaholic/",
    },
    {
        image: Profile2,
        author: "Rakesh Rana",
        description: "Professional Raft Guide",
        username: "@rakesh_rana",
    },
    {
        image: Profile3,
        author: "Nitesh Negi",
        description: "Professional Raft Guide",
        username: "@nitesh_negi",
    },
];

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="-mt-20 flex-1 pt-20">
                {/* Hero Section */}
                <section className="relative flex h-[60vh] items-center">
                    <Image
                        src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1102.jpg"
                        alt="About Sea Hawk Adventure"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="relative z-10 mx-auto w-full max-w-full px-4 md:px-16 xl:px-10">
                        <div className="max-w-2xl">
                            <h5 className="mb-3 tracking-wide text-white/80">
                                OUR STORY
                            </h5>
                            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
                                About Us
                            </h1>
                            <p className="mb-8 max-w-md text-lg text-white/90">
                                Learn about our journey, our team, and our
                                commitment to providing safe and thrilling
                                adventures
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-24">
                    <div className="mx-auto w-full max-w-7xl px-4 md:px-16 xl:px-10">
                        <div className="grid items-center gap-16 md:grid-cols-2">
                            <div>
                                <h5 className="text-primary mb-3">
                                    OUR JOURNEY
                                </h5>
                                <h2 className="mb-6 text-4xl font-semibold md:text-5xl">
                                    The Sea Hawk Story
                                </h2>
                                <p className="mb-6 text-gray-600">
                                    Founded in 2008 by a group of passionate
                                    adventure enthusiasts, Sea Hawk Adventure
                                    began with a simple mission: to share the
                                    thrill and beauty of Rishikesh&apos;s rivers with
                                    the world while maintaining the highest
                                    standards of safety and environmental
                                    responsibility.
                                </p>
                                <p className="mb-8 text-gray-600">
                                    What started as a small operation with just
                                    two rafts and a handful of guides has grown
                                    into one of the most respected adventure
                                    companies in Rishikesh, serving thousands of
                                    adventure seekers from around the globe each
                                    year.
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/images/team/t00.jpg"
                                        alt="Founder"
                                        width={60}
                                        height={60}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold">Rishi Rana</p>
                                        <p className="text-sm text-gray-500">
                                            Founder & Chief Adventure Officer
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1101.jpg"
                                    alt="Our Story"
                                    width={600}
                                    height={600}
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Values Section */}
                <section className="bg-gray-900 py-20 text-white">
                    <div className="mx-auto w-full max-w-7xl px-4 md:px-16 xl:px-10">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <div className="text-sm uppercase">
                                OUR PRINCIPLES
                            </div>

                            <h2 className="mb-5 text-3xl font-medium md:text-4xl xl:text-5xl">
                                Mission & Values
                            </h2>

                            <p className="text-gray-200">
                                Our core principles guide everything we do, from
                                how we train our guides to how we interact with
                                the environment
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="rounded-xl bg-yellow-50 p-6 text-black">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
                                    <Shield className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold md:text-2xl">
                                    Safety First
                                </h3>
                                <p className="text-gray-700">
                                    We never compromise on safety. Our equipment
                                    is regularly inspected, our guides are
                                    extensively trained, and our protocols
                                    exceed industry standards to ensure every
                                    adventure is as safe as it is thrilling.
                                </p>
                            </div>

                            <div className="rounded-xl bg-yellow-50 p-6 text-black">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
                                    <Users className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="mb-4 text-xl font-semibold md:text-2xl">
                                    Customer Experience
                                </h3>
                                <p className="text-gray-700">
                                    We&apos;re dedicated to creating memorable
                                    experiences. From the moment you contact us
                                    to the end of your adventure, we strive to
                                    exceed expectations with personalized
                                    service and attention to detail.
                                </p>
                            </div>

                            <div className="rounded-xl bg-yellow-50 p-6 text-black">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
                                    <Award className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="mb-4 text-xl font-semibold md:text-2xl">
                                    Environmental Stewardship
                                </h3>
                                <p className="text-gray-700">
                                    We&apos;re committed to preserving the natural
                                    beauty of Rishikesh. We practice
                                    leave-no-trace principles, participate in
                                    river clean-ups, and educate our guests
                                    about the importance of environmental
                                    conservation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24">
                    <div className="mx-auto w-full max-w-7xl px-4 md:px-16 xl:px-10">
                        <div className="mx-auto mb-16 max-w-3xl text-center">
                            <h5 className="mb-1 text-base uppercase">
                                OUR EXPERTS
                            </h5>
                            <h2 className="mb-5 text-3xl font-medium md:text-4xl xl:text-5xl">
                                Meet Our Team
                            </h2>
                            <p className="text-lg text-gray-600">
                                Our experienced guides and staff are the heart
                                of Sea Hawk Adventure
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-4">
                            {[
                                {
                                    name: "Rishi Rana (Founder)",
                                    position:
                                        "Professional Kayaker & Raft Guide",
                                    experience: "12+ years",
                                    image: "/images/team/t00.jpg",
                                },
                                {
                                    name: "Rakesh Rana",
                                    position: "Professional Raft Guide",
                                    experience: "8+ years",
                                    image: "/images/team/t01.jpg",
                                },
                                {
                                    name: "Nitesh Negi",
                                    position: "Professional Kayak Guide",
                                    experience: "10+ years",
                                    image: "/images/team/t02.jpg",
                                },
                            ].map((member, index) => (
                                <div key={index} className="group">
                                    <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                                        <Image
                                            src={
                                                member.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={member.name}
                                            width={300}
                                            height={300}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-xl font-medium md:text-2xl">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        {member.position}
                                    </p>
                                    <p className="text-primary text-sm">
                                        {member.experience} experience
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="bg-white py-24">
                    <div className="mx-auto w-full max-w-7xl px-4 md:px-16 xl:px-10">
                        <div className="mx-auto mb-16 max-w-3xl text-center">
                            <h5 className="mb-1 text-base uppercase">
                                OUR CREDENTIALS
                            </h5>
                            <h2 className="mb-5 text-3xl font-medium md:text-4xl xl:text-5xl">
                                Certifications & Awards
                            </h2>
                            <p className="text-lg text-gray-600">
                                We&apos;re proud to be recognized for our commitment
                                to excellence and safety
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {[
                                {
                                    title: "Safety Excellence Award",
                                    organization:
                                        "Adventure Tourism Association",
                                    year: "2022",
                                    image: "/placeholder.svg?height=100&width=100&text=Award",
                                },
                                {
                                    title: "Environmental Conservation",
                                    organization: "Rishikesh Tourism Board",
                                    year: "2021",
                                    image: "/placeholder.svg?height=100&width=100&text=Award",
                                },
                                {
                                    title: "Best Adventure Company",
                                    organization: "Travel & Tourism Excellence",
                                    year: "2020",
                                    image: "/placeholder.svg?height=100&width=100&text=Award",
                                },
                            ].map((award, index) => (
                                <div
                                    key={index}
                                    className="flex items-start rounded-xl bg-white p-8 shadow-sm"
                                >
                                    <Image
                                        src={award.image || "/placeholder.svg"}
                                        alt={award.title}
                                        width={60}
                                        height={60}
                                        className="mr-4"
                                    />
                                    <div>
                                        <h3 className="mb-2 text-xl font-bold">
                                            {award.title}
                                        </h3>
                                        <p className="mb-1 text-gray-600">
                                            {award.organization}
                                        </p>
                                        <p className="text-primary">
                                            {award.year}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gray-900 py-20 text-white">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="mb-5 text-3xl font-medium md:text-4xl xl:text-5xl">
                                Ready for an Adventure?
                            </h2>
                            <p className="mb-8 text-gray-300">
                                Join us for an unforgettable experience on the
                                rivers of Rishikesh
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Link href="/packages">
                                    <Button className="cursor-pointer rounded-full bg-blue-700 px-8 py-5 text-base hover:bg-blue-600">
                                        Explore Packages
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button
                                        variant="outline"
                                        className="rounded-full border-white bg-transparent px-8 py-5 text-base text-white hover:bg-white hover:text-black cursor-pointer"
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Discover the story behind Sea Hawk Adventure and our passion for adventure",
    openGraph: {
        type: "website",
        title: "About Us",
        description:
            "Discover the story behind Sea Hawk Adventure and our passion for adventure",
        url: `${BASE_URL}/about-us`,
        images: [
            {
                url: `https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3101.jpg`,
                width: 1200,
                height: 630,
                alt: "About Us",
            },
        ],
        siteName: "Sea Hawk Adventure",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us",
        description:
            "Discover the story behind Sea Hawk Adventure and our passion for adventure",
        images: [
            `https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3101.jpg`,
        ],
        site: "@SeaHawkAdventure",
        creator: "@SeaHawkAdventure",
    },
};
