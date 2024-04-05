import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import L1 from "@/public/images/logos/trip.png";
import L2 from "@/public/images/logos/ut.png";
import L3 from "@/public/images/logos/atoai.jpeg";
import L4 from "@/public/images/logos/IAPRO.jpg";
import L5 from "@/public/images/logos/mot.png";

const logos = [
    {
        image: L1,
        alt: "#",
        href: "https://www.tripadvisor.in/Attraction_Review-g580106-d21358541-Reviews-Sea_Hawk_Adventure-Rishikesh_Dehradun_District_Uttarakhand.html",
    },
    {
        image: L2,
        alt: "#",
        href: "#",
    },
    {
        image: L3,
        alt: "#",
        href: "#",
    },
    {
        image: L4,
        alt: "#",
        href: "#",
    },
    {
        image: L5,
        alt: "#",
        href: "#",
    },
];

const Logo = () => {
    return (
        <section className="bg-white py-0 sm:py-16 mt-[20rem]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {logos.map((logo, i) => (
                        <a key={i}
                            href={logo.href}
                            target="_blank"
                            className="my-auto"
                        >
                            <Image
                                src={logo.image}
                                alt={logo.alt}
                                className="h-full w-[80%] object-cover lg:col-span-1"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logo;
