import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const items = [
    {
        image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3103.jpg",
        title: "Adventure Tour - Fixed Departures",
        tours: "27",
        price: "₹10,500",
        link: "#",
        isMain: true,
    },
    {
        image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3105.jpg",
        title: "River Rafting Expeditions",
        link: "#",
    },
    {
        image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3106.jpg",
        title: "Trekking the Himalayas",
        link: "#",
    },
    {
        image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3113.jpg",
        title: "Camping & River Rafting in Rishikesh",
        link: "#",
    },
    {
        image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3107.jpg",
        title: "Mountain Biking Tours",
        link: "#",
    },
];

const List = () => {
    return (
        <>
            <section className="mx-auto max-w-7xl bg-gray-50 px-4 py-16 md:max-w-[95%] md:py-20 xl:max-w-[90%]">
                <h2 className="mb-12 text-center text-4xl font-medium">
                    Our Routes Amidst Hills, Mountains, Jungles & Rivers
                </h2>

                <div className="grid gap-6">
                    {/* First Row */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="relative h-[300px] overflow-hidden md:col-span-2">
                            <Image
                                src={items[0].image}
                                alt={items[0].title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <div className="mb-4 space-y-1">
                                    <div className="text-sm tracking-wide uppercase opacity-90">
                                        TOURS
                                    </div>
                                    <div className="text-3xl font-bold">
                                        {items[0].tours}
                                    </div>
                                </div>
                                <div className="mb-4 space-y-1">
                                    <div className="text-sm tracking-wide uppercase opacity-90">
                                        STARTING FROM
                                    </div>
                                    <div className="text-3xl font-bold">
                                        {items[0].price}
                                    </div>
                                </div>
                                <h3 className="mb-4 text-2xl font-medium">
                                    {items[0].title}
                                </h3>
                                <Button
                                    variant="outline"
                                    className="border-white bg-transparent text-white hover:bg-white hover:text-black"
                                >
                                    VIEW TOURS
                                </Button>
                            </div>
                        </div>
                        <div className="group relative h-[300px] w-full overflow-hidden">
                            <Image
                                src={items[1].image}
                                alt={items[1].title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                            <div className="absolute -bottom-20 left-0 w-full p-6 text-white">
                                <div className="transform transition-all duration-500 group-hover:-translate-y-20">
                                    <h3 className="text-2xl font-medium">
                                        {items[1].title}
                                    </h3>
                                    <div className="mt-4 space-y-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                        <div className="space-y-1">
                                            <div className="text-sm tracking-wide uppercase opacity-90">
                                                TOURS
                                            </div>
                                            <div className="text-3xl font-bold">
                                                {items[1].tours}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-sm tracking-wide uppercase opacity-90">
                                                STARTING FROM
                                            </div>
                                            <div className="text-3xl font-bold">
                                                {items[1].price}
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="border-white bg-transparent text-white hover:bg-white hover:text-black"
                                        >
                                            VIEW TOURS
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {items.slice(2).map((item, index) => (
                            <div
                                key={index}
                                className="group relative h-[250px] overflow-hidden"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                                <div className="absolute -bottom-28 left-0 w-full p-6 text-white">
                                    <div className="transform transition-all duration-500 group-hover:-translate-y-24">
                                        <h3 className="text-xl font-medium">
                                            {item.title}
                                        </h3>
                                        <div className="mt-4 space-y-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                            <div className="space-y-1">
                                                <div className="text-sm tracking-wide uppercase opacity-90">
                                                    TOURS
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    {item.tours}
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-sm tracking-wide uppercase opacity-90">
                                                    STARTING FROM
                                                </div>
                                                <div className="text-3xl font-bold">
                                                    {item.price}
                                                </div>
                                            </div>
                                            <Button
                                                variant="outline"
                                                className="border-white bg-transparent text-white hover:bg-white hover:text-black"
                                            >
                                                VIEW TOURS
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-foreground mx-auto mt-12 max-w-3xl text-center">
                    <p>
                        Trekking in India may be a beautiful experience. Accept
                        the challenge to hike the Himalayas - explore stunning
                        paths - achieve amazing heights - romance with nature -
                        absorb in the solitude - feel utter ecstasy - and
                        appreciate your life with the proper company and expert
                        adventure tour guide. Start your journey trekking in
                        Uttarakhand.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl bg-gray-50 px-4 py-16 md:max-w-[95%] md:py-20 xl:max-w-[90%]">
                {/* <div className="absolute inset-0 -z-10 rounded-xl bg-sky-50"></div> */}
                <h2 className="mb-8 text-2xl font-medium md:text-center md:text-4xl">
                    Why Sea Hawk Adventure?
                </h2>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="text-foreground text-sm md:text-base">
                        <p className="mb-4">
                            Sea Hawk Adventure offers rafting in Rishikesh,
                            camping in Rishikesh, and other adventure activities
                            in Uttarakhand. Our team of experienced
                            professionals ensures your safety while you enjoy
                            the thrill of adventure. We have been serving
                            adventure enthusiasts for over 10 years and have a
                            proven track record of providing safe and enjoyable
                            experiences.
                        </p>
                        <p>
                            We believe in providing quality services at
                            affordable prices. Our packages are designed to
                            cater to all age groups and experience levels.
                            Whether you are a beginner or an experienced
                            adventurer, we have something for everyone. Our team
                            of experienced guides and instructors will ensure
                            that you have a safe and enjoyable experience.
                        </p>
                    </div>
                    <div className="text-foreground text-sm md:text-base">
                        <p className="mb-4">
                            We are certified by the Adventure Tour Operators
                            Association of India (ATOAI) and follow all safety
                            guidelines prescribed by them. Our equipment is
                            regularly checked and maintained to ensure your
                            safety. We also provide comprehensive insurance
                            coverage for all our adventure activities.
                        </p>
                        <p>
                            Our commitment to customer satisfaction has earned
                            us a 5-star rating on TripAdvisor and other travel
                            platforms. We take pride in our service and strive
                            to exceed your expectations. Join us for an
                            unforgettable adventure experience in the lap of
                            nature.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-white px-4 py-16 md:max-w-[95%] md:py-20 xl:max-w-[90%]">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                        <div className="mb-4 flex items-center gap-2">
                            <Link
                                href="https://www.tripadvisor.in/Attraction_Review-g580106-d21358541-Reviews-Sea_Hawk_Adventure-Rishikesh_Dehradun_District_Uttarakhand.html"
                                target="_blank"
                                className="flex items-center gap-2"
                            >
                                <Image
                                    src="/images/logos/i1.png"
                                    alt="TripAdvisor"
                                    width={100}
                                    height={40}
                                    className="object-contain"
                                />
                                <div>
                                    <h3 className="font-bold">
                                        Sea Hawk Adventures
                                    </h3>
                                    <div className="flex items-center gap-1 text-amber-500">
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                        <span className="text-muted-foreground ml-1 text-xs">
                                            (125 reviews)
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="space-y-4 text-sm">
                            <div className="border-b pb-2">
                                <p className="font-medium">
                                    Amazing experience!
                                </p>
                                <p className="text-muted-foreground">
                                    Had a great time rafting with Sea Hawk
                                    Adventures. The guides were very
                                    professional and ensured our safety
                                    throughout.
                                </p>
                                <p className="text-muted-foreground mt-1 text-xs">
                                    - John D.
                                </p>
                            </div>
                            <div className="border-b pb-2">
                                <p className="font-medium">
                                    Best adventure company in Rishikesh
                                </p>
                                <p className="text-muted-foreground">
                                    We did the 16km rafting and it was an
                                    amazing experience. The staff was very
                                    friendly and professional.
                                </p>
                                <p className="text-muted-foreground mt-1 text-xs">
                                    - Sarah M.
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">
                                    Highly recommended!
                                </p>
                                <p className="text-muted-foreground">
                                    The camping experience was fantastic. The
                                    location, food, and activities were all
                                    excellent.
                                </p>
                                <p className="text-muted-foreground mt-1 text-xs">
                                    - Robert K.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-4 text-center text-4xl font-normal">
                            Amazing Reviews From Our Guests
                        </h2>
                        <p className="text-muted-foreground mb-8 text-center text-sm">
                            Don&apos;t just take our word for it. See what our
                            customers have to say about their experiences with
                            Red Chilli Adventure.
                        </p>
                        <div>
                            <Link
                                href="https://www.tripadvisor.in/Attraction_Review-g580106-d21358541-Reviews-Sea_Hawk_Adventure-Rishikesh_Dehradun_District_Uttarakhand.html"
                                target="_blank"
                                className="flex justify-center"
                            >
                                <Image
                                    src="/images/logos/c1.png"
                                    alt="TripAdvisor Certificate of Excellence"
                                    width={200}
                                    height={200}
                                    className="absolute z-0 w-80 object-cover"
                                />
                                <div className="z-10 border bg-white">
                                    <Image
                                        src="/images/logos/inn1.png"
                                        alt="TripAdvisor Certificate of Excellence"
                                        width={200}
                                        height={200}
                                        className="object-cover"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default List;
