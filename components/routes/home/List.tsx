import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
        <section className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="mb-12 text-center text-4xl font-medium">
                Our Routes Amidst Hills, Mountains, Jungles & Rivers
            </h2>

            <div className="grid gap-6">
                {/* First Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="relative col-span-2 h-[300px] overflow-hidden">
                        <Image
                            src={items[0].image}
                            alt={items[0].title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                    <div className="group relative h-[300px] overflow-hidden">
                        <Image
                            src={items[1].image}
                            alt={items[1].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                        <div className="absolute -bottom-20 left-0 w-full p-6 text-white">
                            <div className="transform transition-all duration-500 group-hover:-translate-y-20">
                                <h3 className="text-2xl font-medium">
                                    {items[1].title}
                                </h3>
                                <div className="mt-4 space-y-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                    <div className="space-y-1">
                                        <div className="text-sm uppercase tracking-wide opacity-90">TOURS</div>
                                        <div className="text-3xl font-bold">{items[1].tours}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-sm uppercase tracking-wide opacity-90">STARTING FROM</div>
                                        <div className="text-3xl font-bold">{items[1].price}</div>
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
                        <div key={index} className="group relative h-[250px] overflow-hidden">
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
                                            <div className="text-sm uppercase tracking-wide opacity-90">TOURS</div>
                                            <div className="text-3xl font-bold">{item.tours}</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-sm uppercase tracking-wide opacity-90">STARTING FROM</div>
                                            <div className="text-3xl font-bold">{item.price}</div>
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

            <div className="text-muted-foreground mx-auto mt-12 max-w-3xl text-center">
                <p>
                    Trekking in India may be a beautiful experience. Accept the
                    challenge to hike the Himalayas - explore stunning paths -
                    achieve amazing heights - romance with nature - absorb in
                    the solitude - feel utter ecstasy - and appreciate your life
                    with the proper company and expert adventure tour guide.
                    Start your journey trekking in Uttarakhand.
                </p>
            </div>
        </section>
    );
};

export default List;
