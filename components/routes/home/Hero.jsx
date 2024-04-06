"use client";
import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/rafting/r05.jpg";
import Hero2 from "@/public/images/kayak/k00.jpg";
import Hero3 from "@/public/images/expedition/m03.jpg";
import B1 from "@/public/b.png";

const features = [
    {
        title: "Rafting",
        image: Hero1,
        para: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam .",
        href: "/rafting",
        delay: "300",
    },
    {
        title: "Kayaking",
        image: Hero2,
        para: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam .",
        href: "/kayak",
        delay: "500",
    },
    {
        title: "Expedition",
        image: Hero3,
        para: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam .",
        href: "#",
        delay: "700",
    },
];

const Hero = () => {
    return (
        <section className=" overflow-hidden">
            <div className="relative isolate mb-[20rem]"
                style={{
                    backgroundImage: "url('/images/rafting/g00.webp')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}>
                <Image src={B1} alt="bachground bottom" className="absolute bottom-0 h-16" />

                <div className="absolute w-full h-full z-[-9] bg-gradient-to-t from-black via-black/10 to-black/10"></div>

                <div className="mx-auto pt-60 pb-48 max-w-[90%]">
                    <h1 className="mt-5 text-5xl max-w-3xl text-center md:text-left font-semibold text-white md:mt-0 lg:text-6xl">
                        Dream, Explore: Adventure Awaits!
                    </h1>
                    <p className="mt-12 max-w-2xl text-left text-base text-gray-50 md:mt-6 md:font-light md:text-lg">
                        Embark on unforgettable hiking, rafting, and kayaking adventures in
                        the stunning landscapes of Uttarakhand, surrounded by the majestic
                        beauty of the Himalayas, and along the pristine Ganges River, where
                        every bend brings new thrills and breathtaking views.
                    </p>
                </div>
            </div>

            <div className="lg:absolute lg:bottom-[-20rem] mt-16 sm:mt-20 lg:mt-20">
                <div className="max-w-[80%] mx-auto">
                    <dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="flex flex-col overflow-hidden rounded-xl shadow-2xl shadow-gray-500 justify-between"
                                style={{
                                    backgroundImage: "url('/misc/bg.jpg')",
                                    backgroundPosition: "center",
                                    backgroundSize: "fill",
                                }}
                                data-aos="fade-left"
                                data-aos-duration="700"
                                data-aos-offset="250"
                                data-aos-easing="ease"
                                data-aos-delay={feature.delay}
                            >
                                <dd className='py-10 flex gap-y-5 px-6 text-center rounded-t-xl overflow-hidden flex-auto flex-col text-base leading-7 text-white group before:content-[""] before:absolute before:block before:left-0 before:right-0 before:top-[100%] before:z-[-10] before:bottom-0 before:bg-teal-500 hover:before:top-0 before:transition-all before:duration-700'>
                                    <h3 className=" text-4xl font-medium leading-7 text-teal-500 font-mono group-hover:text-black">
                                        {feature.title}
                                    </h3>
                                    <p className="flex-auto text-gray-400 group-hover:text-black">
                                        {feature.para}
                                    </p>
                                    <a
                                        href={feature.href}
                                        className="text-sm font-semibold leading-6 hover:text-black"
                                    >
                                        Learn more
                                        <span className="absolute inset-0"></span>
                                        <span> →</span>
                                    </a>
                                </dd>

                                <dt className="flex flex-col gap-y-5">
                                    <a href={feature.href} className="relative overflow-hidden">
                                        <Image
                                            src={feature.image}
                                            alt="post-img"
                                            className="aspect-video z-40 w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2.05] hover:scale-[1.07] transform ease-in-out duration-300"
                                        />
                                    </a>
                                </dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Hero;