import Image from "next/image";
import React from "react";

import L1 from "@/public/images/logos/trip.png";
import L2 from "@/public/images/logos/ut.png";
import L3 from "@/public/images/logos/atoai.jpeg";
import L4 from "@/public/images/logos/IAPRO.jpg";
import L5 from "@/public/images/logos/mot.png";

const logos = [
    {
        id: 1,
        image: L1,
        alt: "#",
        href: "https://www.tripadvisor.in/Attraction_Review-g580106-d21358541-Reviews-Sea_Hawk_Adventure-Rishikesh_Dehradun_District_Uttarakhand.html",
    },
    {
        id: 2,
        image: L2,
        alt: "#",
        href: "#",
    },
    {
        id: 3,
        image: L3,
        alt: "#",
        href: "#",
    },
    {
        id: 4,
        image: L4,
        alt: "#",
        href: "#",
    },
    {
        id: 5,
        image: L5,
        alt: "#",
        href: "#",
    },
];

const Logo = () => {
    return (
        <section className="bg-white py-8 sm:py-16">
            <div className="mx-auto max-w-full md:max-w-[75%] px-6 lg:px-8">
                {/* <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Trusted by the world’s most innovative teams
                </h2> */}
                
                <div className="grid grid-cols-3 md:grid-cols-5 gap-10">
                    {logos.map((logo) => (
                        <a href={logo.href} target="_blank" key={logo.id} className="w-full flex items-center justify-center">
                            <Image
                                src={logo.image}
                                alt={logo.alt}
                                className=""
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logo;
