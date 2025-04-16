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
            <main className="-mt-[5rem]">
                {/* Hero Section */}
                <section className="relative h-[400px] overflow-hidden">
                    {/* <CldImage
                        src="https://res.cloudinary.com/dkuixrz40/image/upload/v1744621270/water-rafting-T0101_wbaw4q.jpg"
                        alt="About Sea Hawk Adventure"
                        width={1920}
                        height={1080}
                        className="object-cover size-full"
                        priority
                    /> */}
                    <CldImageComponent
                        src="https://res.cloudinary.com/dkuixrz40/image/upload/v1744621270/water-rafting-T0101_wbaw4q.jpg"
                        alt="About Sea Hawk Adventure"
                        width={1920}
                        height={1080}
                        className="size-full object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                            About Us
                        </h1>
                        <p className="max-w-3xl text-xl">
                            Discover the story behind Sea Hawk Adventure and our
                            passion for adventure
                        </p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="mb-4 text-3xl font-medium md:text-4xl">
                                        Our Story
                                    </h2>
                                    <p className="mb-4 leading-relaxed text-gray-700">
                                        Founded in 2010 by a group of adventure
                                        enthusiasts with over 15 years of
                                        experience, Sea Hawk Adventure was born
                                        from a passion for the rivers and
                                        mountains of Rishikesh. What started as
                                        a small rafting operation with just two
                                        rafts and three guides has grown into
                                        the region&apos;s most trusted adventure
                                        company.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-gray-700">
                                        Our founders, Rajesh Sharma and Vikram
                                        Singh, both certified rafting
                                        instructors and Himalayan trekking
                                        experts, saw the potential to create
                                        safe, thrilling experiences that would
                                        connect people with the natural beauty
                                        of the region while supporting local
                                        communities.
                                    </p>
                                    <p className="leading-relaxed text-gray-700">
                                        Today, Sea Hawk Adventure employs over
                                        30 local guides and staff, all
                                        extensively trained in safety procedures
                                        and environmental conservation.
                                        We&apos;ve expanded our offerings to
                                        include a wide range of adventures while
                                        maintaining our commitment to
                                        responsible tourism and exceptional
                                        customer experiences.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
                                <CldImageComponent
                                    src="https://res.cloudinary.com/dkuixrz40/image/upload/v1744621270/img-3111.jpg"
                                    alt="Sea Hawk Adventure founders"
                                    width={1920}
                                    height={1080}
                                    className="size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="relative bg-blue-50">
                    <Wave2 />
                    <div className="relative z-10 mx-auto max-w-7xl py-16">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-medium md:text-4xl">
                                Our Mission & Values
                            </h2>
                            <p className="text-lg mx-auto max-w-3xl">
                                Guiding principles that drive everything we do
                                at Sea Hawk Adventure
                            </p>
                        </div>

                        <div className="mb-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                            <div className="rounded-lg bg-white p-8 shadow-sm">
                                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                    <Target className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-blue-700">
                                    Our Mission
                                </h3>
                                <p className="leading-relaxed text-gray-700">
                                    To provide safe, thrilling, and memorable
                                    adventure experiences that connect people
                                    with nature, while promoting sustainable
                                    tourism and supporting local communities in
                                    the Rishikesh region.
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-8 shadow-sm">
                                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                    <MapPin className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-blue-700">
                                    Our Vision
                                </h3>
                                <p className="leading-relaxed text-gray-700">
                                    To be the most trusted adventure company in
                                    India, known for our unwavering commitment
                                    to safety, exceptional customer experiences,
                                    and positive impact on the environment and
                                    local communities.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <div className="mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                    <Shield className="h-6 w-6 text-blue-600" />
                                </div>
                                <h4 className="mb-2 text-xl font-bold text-blue-700">
                                    Safety First
                                </h4>
                                <p className="text-gray-700">
                                    We never compromise on safety. All our
                                    equipment meets international standards, and
                                    our guides undergo rigorous training in
                                    first aid and rescue techniques.
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <div className="mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                    <Users className="h-6 w-6 text-blue-600" />
                                </div>
                                <h4 className="mb-2 text-xl font-bold text-blue-700">
                                    Customer Experience
                                </h4>
                                <p className="text-gray-700">
                                    We&apos;re dedicated to creating memorable
                                    experiences tailored to each guest&apos;s
                                    abilities and interests, with personalized
                                    attention and exceptional service.
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <div className="mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                    <Award className="h-6 w-6 text-blue-600" />
                                </div>
                                <h4 className="mb-2 text-xl font-bold text-blue-700">
                                    Environmental Stewardship
                                </h4>
                                <p className="text-gray-700">
                                    We&apos;re committed to minimizing our
                                    environmental impact through sustainable
                                    practices and educating our guests about the
                                    importance of conservation.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <Wave1 /> */}
                </section>

                {/* Our Team */}
                <section className="relative overflow-hidden bg-white">
                    <Wave3 />

                    <div className="relative z-10 py-24 sm:py-24">
                        <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
                            <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6">
                                <p className="text-3xl font-medium text-black sm:text-5xl">
                                    Meet the team
                                </p>

                                <p className="mt-auto max-w-xl text-center text-lg leading-8 text-gray-600">
                                    Our experienced guides and staff are the
                                    heart of Sea Hawk Adventure
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto mt-6 px-6 lg:px-8">
                            <div className="relative mx-auto grid max-w-full gap-8 md:max-w-5xl md:grid-cols-3 md:gap-16 md:px-6">
                                {teams.map((team, i) => (
                                    <div
                                        key={i}
                                        className="group relative mt-8 flex cursor-pointer items-center gap-4 transition-all duration-300 ease-in hover:scale-[1.082] md:flex-col"
                                    >
                                        <div className="">
                                            <Image
                                                src={team.image}
                                                alt="profile 1"
                                                className="aspect-[1/1] h-40 w-40 rounded-full object-cover md:h-full md:w-full"
                                            />
                                        </div>
                                        <div className="font-swim my-auto text-center">
                                            <h3 className="text-2xl font-medium">
                                                {team.author}
                                            </h3>
                                            <p className="text-base text-gray-500">
                                                {team.description}
                                            </p>
                                            <a
                                                href={team.href}
                                                target="_black"
                                                className="text-primary text-base tracking-wide"
                                            >
                                                <span className="absolute inset-0"></span>
                                                {team.username}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="relative bg-blue-50">
                    <Wave4 />
                    <div className="relative z-10 mx-auto max-w-7xl py-16">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-medium md:text-4xl">
                                Our Certifications
                            </h2>
                            <p className="mx-auto max-w-3xl text-lg text-gray-700">
                                We maintain the highest standards of safety and
                                professionalism
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                                <div className="relative mx-auto mb-4 h-24 w-24">
                                    <Image
                                        src="https://res.cloudinary.com/dkuixrz40/image/upload/v1744621270/img-3111.jpg"
                                        alt="International Rafting Federation"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="mb-2 text-lg font-bold">
                                    International Rafting Federation
                                </h3>
                                <p className="text-gray-700">
                                    Our guides are certified by the
                                    International Rafting Federation, ensuring
                                    they meet global standards for rafting
                                    instruction and safety.
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                                <div className="relative mx-auto mb-4 h-24 w-24">
                                    <Image
                                        src="https://res.cloudinary.com/dkuixrz40/image/upload/v1744621270/img-3111.jpg"
                                        alt="Wilderness First Responder"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="mb-2 text-lg font-bold">
                                    Wilderness First Responder
                                </h3>
                                <p className="text-gray-700">
                                    All our lead guides are certified Wilderness
                                    First Responders, trained to handle medical
                                    emergencies in remote locations.
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                                <div className="relative mx-auto mb-4 h-24 w-24">
                                    <Image
                                        src="https://res.cloudinary.com/dkuixrz40/image/upload/v1744621270/img-3111.jpg"
                                        alt="Adventure Tour Operators Association"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="mb-2 text-lg font-bold">
                                    Adventure Tour Operators Association
                                </h3>
                                <p className="text-gray-700">
                                    We&apos;re proud members of the Adventure
                                    Tour Operators Association of India,
                                    committed to maintaining high standards in
                                    adventure tourism.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Impact */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
                                <CldImageComponent
                                    src="https://res.cloudinary.com/dkuixrz40/image/upload/v1744621270/img-3101.jpg"
                                    alt="Community initiatives"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h2 className="mb-4 text-3xl font-medium md:text-4xl">
                                        Our Community Impact
                                    </h2>
                                    <p className="mb-4 leading-relaxed text-gray-700">
                                        At Sea Hawk Adventure, we believe in
                                        giving back to the communities that make
                                        our adventures possible. We&apos;re
                                        committed to sustainable tourism
                                        practices that benefit local residents
                                        and preserve the natural environment for
                                        future generations.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-gray-700">
                                        We prioritize hiring and training local
                                        staff, providing fair wages and
                                        opportunities for professional growth.
                                        Over 90% of our team members come from
                                        nearby villages, creating sustainable
                                        livelihoods that support families and
                                        strengthen the local economy.
                                    </p>
                                    <p className="leading-relaxed text-gray-700">
                                        Through our &quot;Clean Rivers
                                        Initiative,&quot; we organize regular
                                        river clean-up drives and educate
                                        visitors about responsible waste
                                        management. We also contribute a portion
                                        of our profits to local schools and
                                        environmental conservation projects in
                                        the Rishikesh region.
                                    </p>
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
