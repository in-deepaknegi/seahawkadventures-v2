import React from "react";

import { ComponentProps } from "@/types/global";
import Image from "next/image";

const Services: React.FC<ServicesProps> = (props) => {
    const { heading, description, services } = {
        ...ServicesDefaults,
        ...props,
    };

    return (
        <section className="relative isolate -mt-1 overflow-hidden bg-white py-10 font-insr sm:py-16">
            <div className="mx-auto max-w-full px-6 md:max-w-[90%] lg:px-10">
                <div className="mf:pb-16 relative mx-auto flex flex-col justify-between pb-6 text-center md:text-left">
                    <h2 className="mt-2 font-oggr text-5xl text-black sm:text-6xl">
                        {heading}
                    </h2>
                    <p className="mt-5 max-w-2xl text-xl text-gray-600">{description}</p>
                </div>

                <hr />

                <div className="mx-auto max-w-2xl pt-6 md:px-10 md:pt-16 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-10 md:gap-16 lg:max-w-none lg:grid-cols-3">
                        {services?.map((service, i) => (
                            <a
                                key={i}
                                href={service.link}
                                className="group relative flex h-full flex-col overflow-hidden"
                            >
                                <dt className="flex flex-row items-center gap-6 font-insm text-2xl text-black">
                                    <Image
                                        src={service?.thumbnail.src}
                                        alt=""
                                        width={1080}
                                        height={680}
                                        className="w-9 md:w-12"
                                    />
                                    {service.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-gray-600">
                                    <p className="flex-auto">{service.description}</p>
                                </dd>
                                <p className="mt-1 flex items-center gap-2 text-blue-500 md:mt-3">
                                    Read more
                                    <span className="-translate-x-32 opacity-0 transition-all duration-500 ease-in group-hover:translate-x-0 group-hover:opacity-100">
                                        →
                                    </span>
                                </p>
                            </a>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Services;

type ServicesProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<ComponentProps>;

const ServicesDefaults: ComponentProps = {
    heading: " Select your adventure",
    description:
        " Dive into the spirit of adventures: discover the blend of fun and expertise in every expedition",

    services: [
        {
            title: "Rafting",
            description:
                "Experience the thrill of the fast river with our expert guides, ensuring a safe and unforgettable adventure.",
            link: "/rafting",
            thumbnail: {
                src: "/images/svg/compass.svg",
                alt: "",
            },
        },
        {
            title: "Kayaking",
            description:
                "Join our experienced kayakers for an exciting trip down fast rivers, ensuring your safety and a great time.",
            link: "#",
            thumbnail: {
                src: "/images/svg/boat.svg",
                alt: "",
            },
        },
        {
            title: "Expedition",
            description:
                "Join our experienced adventurers on a fun camping trip. Explore the outdoors, stay safe, and have a great time with our team.",
            link: "#",
            thumbnail: {
                src: "/images/svg/tent.svg",
                alt: "",
            },
        },
    ],
};
