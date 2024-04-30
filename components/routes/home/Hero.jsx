import React from "react";
import Image from "next/image";

import Hero2 from "@/public/images/rafting/g00.webp";
import B1 from "@/public/b.png";

const Hero = () => {
    return (
        <section className="relative isolate z-20 -mt-[6.5rem] h-screen overflow-hidden bg-white font-swir md:h-[95vh]">
            <div className="relative h-full w-full max-w-full">
                <Image
                    src={Hero2}
                    alt="hero-img"
                    quality={100}
                    loading="eager"
                    fill={true}
                    sizes="100vw"
                    className="inset-0 z-[-10] h-full w-full object-cover object-center"
                />
                <Image
                    src={B1}
                    alt=""
                    className=" absolute bottom-0 h-20 w-full object-cover"
                />

                <div className="absolute z-[-9] h-full w-full overflow-hidden bg-gradient-to-tr from-black  via-black/10 to-black/20"></div>

                <div className="mx-auto flex h-full max-w-full items-center px-6 md:max-w-[85%] md:px-8">
                    <div className="my-auto w-full">
                        <div className="hidden sm:mb-8 sm:flex">
                            <div className="relative rounded-full bg-gray-500/50 px-3 py-1 text-base leading-6 text-white ring-1 ring-gray-100/10 hover:ring-gray-100">
                                The Best Place to Start Your Adventure
                            </div>
                        </div>
                        <h1 className="max-w-2xl text-center text-5xl font-semibold text-white md:text-left md:text-6xl">
                            Explore: <br />
                            <span className=" bg-gradient-to-r from-blue-600/90 to-sky-400 bg-clip-text text-transparent">
                                Seek Adventure
                            </span>{" "}
                            Everywhere!
                        </h1>
                        <p className="mt-12 max-w-3xl text-center text-xl text-gray-200 md:mt-6 md:text-left md:text-2xl">
                            Experience unforgettable hiking, rafting, and kayaking in
                            Uttarakhand&apos;s stunning landscapes.
                        </p>
                        <div className="mt-12 flex items-center justify-center font-swim md:ml-auto md:mt-6 md:justify-start">
                            <a
                                href="#"
                                className="-my-2.5 inline-flex justify-center rounded-3xl bg-white px-6 py-1.5 text-base text-black"
                            >
                                Learn more
                            </a>
                            <a
                                href="#"
                                className="-my-2.5 ml-4 inline-flex justify-center rounded-3xl bg-primary px-6 py-1.5 text-base text-white"
                            >
                                <span>
                                    Get treks <span aria-hidden="true">→</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;