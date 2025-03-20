import Image from "next/image";
import React from "react";

const logos = [
    {
        id: 1,
        image: {
            src: "/images/logos/i1.png",
            alt: "",
        },
        href: "https://www.tripadvisor.in/Attraction_Review-g580106-d21358541-Reviews-Sea_Hawk_Adventure-Rishikesh_Dehradun_District_Uttarakhand.html",
    },
    {
        id: 2,
        image: {
            src: "/images/logos/i2.png",
            alt: "",
        },
        href: "#",
    },
    {
        id: 3,
        image: {
            src: "/images/logos/i3.jpeg",
            alt: "",
        },
        href: "#",
    },
    {
        id: 4,
        image: {
            src: "/images/logos/i4.jpg",
            alt: "",
        },
        href: "#",
    },
    {
        id: 5,
        image: {
            src: "/images/logos/i5.jpg",
            alt: "",
        },
        href: "#",
    },
    {
        id: 6,
        image: {
            src: "/images/logos/i6.jpg",
            alt: "",
        },
        href: "#",
    },
];

const Logo = () => {
    return (
        <section className="bg-white py-8 relative overflow-hidden sm:py-3">
            <div className="mx-auto max-w-full px-6 md:max-w-[90%] lg:px-8">
                {/* <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Trusted by the world’s most innovative teams
                </h2> */}

                <div className="grid grid-cols-3 gap-5 md:gap-10 md:grid-cols-6">
                    {logos.map((logo) => (
                        <a
                            href={logo.href}
                            target="_blank"
                            key={logo.id}
                            className="flex w-full items-center justify-center"
                        >
                            <Image
                                src={logo.image.src}
                                alt={logo.image.alt}
                                width={1080}
                                height={680}
                                className="w-24 md:w-32"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logo;
