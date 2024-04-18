import React from "react";
import Image from "next/image";

import Hero2 from "@/public/images/rafting/g00.webp";
import B1 from '@/public/b.png';

const Hero = () => {
    return (
        <section className="relative isolate -mt-[6.5rem] overflow-hidden h-screen md:h-[95vh] bg-white font-swir">
            <div className="relative isolate h-full w-full max-w-full">
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
                    className=" absolute bottom-0 h-20"
                />

                <div className="absolute z-[-9] h-full w-full overflow-hidden bg-gradient-to-tr from-black  via-black/10 to-black/20"></div>

                <div className="mx-auto max-w-full px-6 md:max-w-[85%] md:px-8 h-full flex items-center pt-28">
                    <div className="my-auto w-full">
                        <div className="hidden sm:mb-8 sm:flex">
                            <div className="relative rounded-full bg-gray-500/50 px-3 py-1 text-base leading-6 text-white ring-1 ring-gray-100/10 hover:ring-gray-100">
                                The Best Place to Start Your Adventure
                            </div>
                        </div>
                        <h1 className="max-w-2xl text-center text-5xl font-semibold text-white md:text-left md:text-7xl">
                            Embark on{" "}
                            <span className=" bg-gradient-to-l from-[#96d279] to-emerald-400 bg-clip-text text-transparent">
                                journeys
                            </span>{" "}
                            not just{" "}
                            <span className=" bg-gradient-to-l from-[#96d279] to-emerald-400 bg-clip-text text-transparent">
                                destinations
                            </span>{" "}
                            with our trips.
                        </h1>
                        <p className="mt-12 md:mt-6 max-w-3xl text-center text-xl text-gray-300 md:text-left md:text-2xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                            fugiat aliqua.
                        </p>
                        <div className="ml-auto mt-12 md:mt-6 flex font-swim">
                            <a
                                href="#"
                                className="-my-2.5 inline-flex justify-center rounded-3xl bg-white px-6 py-1.5 text-base text-black"
                            >
                                Learn more
                            </a>
                            <a
                                href="#"
                                className="-my-2.5 ml-4 inline-flex justify-center rounded-3xl bg-blue-500/90 px-6 py-1.5 text-base text-black"
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