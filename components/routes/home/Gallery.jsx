import React from "react";
import Image from "next/image";
import G1 from "@/public/images/rafting/m00.jpg";
import G2 from "@/public/images/rafting/r00.png";
import G3 from "@/public/images/rafting/r01.jpg";
import G4 from "@/public/images/rafting/r02.jpg";
import G5 from "@/public/images/rafting/r03.jpg";
import G6 from "@/public/images/rafting/r04.jpg";
import G7 from "@/public/images/rafting/r05.jpg";
import G8 from "@/public/images/rafting/r06.jpg";
import G9 from "@/public/images/rafting/r07.jpg";
import G10 from "@/public/images/rafting/r08.jpg";
import G11 from "@/public/images/rafting/r09.jpg";
import G12 from "@/public/images/rafting/r10.jpg";
import G13 from "@/public/images/rafting/r11.jpg";
import G14 from "@/public/images/rafting/r12.jpg";

const Gallery = () => {
    return (
        <section id="gallery" className="relative isolate py-8 lg:py-16">
            <div className="max-w-[85%] min-h-[50vh] mx-auto px-8">
                <div className="flex mb-10 flex-col justify-between gap-y-5 py-4 md:gap-x-10 lg:flex-row">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                        Image Gallery
                    </h2>
                    <p className="my-auto max-w-xl text-base leading-8 text-gray-900 md:text-lg">
                        Explore our beautiful collection of photos featuring rafting and
                        kayaking in Rishikesh.
                    </p>
                </div>

                {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    <div className="flex h-screen flex-col gap-y-4">
                        <Image
                            alt="Gallery Image"
                            className="h-[50%] object-cover object-center w-full rounded-xl"
                            src={Image1}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[25%] object-cover object-center w-full rounded-lg"
                            src={Image3}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[25%] object-cover object-center w-full rounded-lg"
                            src={Image4}
                            loading="eager"
                        />
                    </div>

                    <div className="hidden sm:flex h-screen flex-col gap-y-4">
                        <Image
                            alt="Gallery Image"
                            className="h-[60%] object-cover object-center w-full rounded-xl"
                            src={Image6}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[40%] object-cover object-center w-full rounded-lg"
                            src={Image7}
                            loading="eager"
                        />
                    </div>

                    <div className="flex h-screen flex-col gap-y-4 sm:mt-0 mt-8">
                        <Image
                            alt="Gallery Image"
                            className="h-[50%] object-cover object-center w-full rounded-xl"
                            src={Image8}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[25%] object-cover object-center w-full rounded-lg"
                            src={Image13}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[25%] object-cover object-center w-full rounded-lg"
                            src={Image11}
                            loading="eager"
                        />
                    </div>

                    <div className="hidden sm:flex h-screen flex-col gap-y-4">
                        <Image
                            alt="Gallery Image"
                            className="h-[40%] object-cover object-center w-full rounded-xl"
                            src={Image12}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[60%] object-cover object-center w-full rounded-lg"
                            src={Image10}
                            loading="eager"
                        />
                    </div>
                    <div className="flex h-screen flex-col gap-y-4">
                        <Image
                            alt="Gallery Image"
                            className="h-[50%] object-cover object-center w-full rounded-xl"
                            src={Image9}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[40%] object-cover object-center w-full rounded-lg"
                            src={Image14}
                            loading="eager"
                        />
                        <a href="/gallery" className="text-black hover:text-sky-700 font-semibold">
                            Show more ...
                        </a>
                    </div>
                </div> */}
                <div className="relative p-0 overflow-visible flex justify-start gap-4 flex-nowrap flex-1">
                    <div className="w-[40%] relative overflow-hidden flex-none rounded-3xl">
                        <div className=" absolute top-0 right-0 bottom-0 left-0">
                            <Image
                                src={G1}
                                alt="aa"
                                className=" block w-full h-full object-cover origin-center"
                            />
                        </div>
                    </div>
                    
                    <div className="w-full relative p-0 flex-col">
                        <div className="flex flex-row gap-4">
                            <div className="">
                                <Image
                                    src={G4}
                                    alt="aa"
                                    className=" rounded-2xl block w-full h-full object-cover origin-center"
                                />
                            </div>
                            <div className="">
                                <Image
                                    src={G3}
                                    alt="aa"
                                    className=" rounded-2xl block w-full h-full object-cover origin-center"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row gap-4">
                            <div className="">
                                <Image
                                    src={G6}
                                    alt="aa"
                                    className=" rounded-2xl block w-full h-full object-cover origin-center"
                                />
                            </div>
                            <div className="">
                                <Image
                                    src={G8}
                                    alt="aa"
                                    className=" rounded-2xl block w-full h-full object-cover origin-center"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-[15%] relative overflow-hidden flex-none">
                        <div className=" absolute top-0 right-0 bottom-0 left-0">
                            <Image
                                src={G14}
                                alt="aa"
                                className=" rounded-3xl block w-full h-[90%] object-cover origin-center"
                            />
                        </div>
                        <a href="/gallery" className=" left-10 w-full absolute bottom-0 text-base font-semibold">
                            Show more ...
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
