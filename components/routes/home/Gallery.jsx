import React from "react";
import Image from "next/image";
import G1 from "@/public/images/rafting/r09.jpg";
import G2 from "@/public/images/rafting/r12.jpg";
import G3 from "@/public/images/rafting/r15.jpg";
import G4 from "@/public/images/rafting/r05.jpg";
import G5 from "@/public/images/rafting/r07.jpg";
import G6 from "@/public/images/rafting/r04.jpg";

const Gallery = () => {
    return (
        <section id="gallery" className="relative isolate py-8 font-swir lg:py-24">
            <div className="mx-auto max-w-full px-8 md:max-w-[85%]">
                <div className="relative flex flex-1 flex-col justify-start gap-2 overflow-visible p-0 md:flex-row">
                    <div className="flex flex-col justify-between">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M14.2639 15.9376L12.5958 14.2835C11.7909 13.4852 11.3884 13.0861 10.9266 12.9402C10.5204 12.8119 10.0838 12.8166 9.68048 12.9537C9.22188 13.1096 8.82814 13.5173 8.04068 14.3327L4.04409 18.2802M14.2639 15.9376L14.6053 15.5991C15.4112 14.7999 15.8141 14.4003 16.2765 14.2544C16.6831 14.1262 17.12 14.1312 17.5236 14.2688C17.9824 14.4252 18.3761 14.834 19.1634 15.6515L20 16.4936M14.2639 15.9376L18.275 19.9566M20.9992 6.00011H14.9992M11 3.99951L7.2 4.00011C6.07989 4.00011 5.51984 4.00011 5.09202 4.21809C4.71569 4.40984 4.40973 4.7158 4.21799 5.09213C4 5.51995 4 6.08 4 7.20011V16.8001C4 17.4576 4 17.9222 4.04409 18.2802M20 9.99951V16.4936M4.04409 18.2802C4.07512 18.5322 4.12796 18.7314 4.21799 18.9081C4.40973 19.2844 4.71569 19.5904 5.09202 19.7821C5.51984 20.0001 6.07989 20.0001 7.2 20.0001H16.8C17.9201 20.0001 18.4802 20.0001 18.908 19.7821C19.2843 19.5904 19.5903 19.2844 19.782 18.9081C20 18.4803 20 17.9202 20 16.8001V16.4936"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{" "}
                            </g>
                        </svg>
                        <h2 className="mt-6 flex-1 text-4xl font-bold tracking-tight text-black sm:text-5xl">
                            Image Gallery
                        </h2>
                        <p className="mt-6 text-lg text-gray-500 md:mt-0 md:w-[70%] md:text-2xl">
                            Journey through captivating visuals of our sports beverages and
                            enthusiastic athletes
                        </p>
                    </div>

                    <div className="flex max-w-4xl flex-col md:flex-row gap-4">
                        <div className="relative w-full overflow-hidden flex-none rounded-3xl md:w-[40%]">
                            <div className="bottom-0 left-0 right-0 top-0 md:absolute">
                                <Image
                                    src={G1}
                                    alt="aa"
                                    className="block h-full w-full origin-center object-cover transition-all duration-200 ease-in hover:scale-[1.04]"
                                />
                            </div>
                        </div>

                        <div className="relative w-full flex-col p-0">
                            <div className="flex flex-row gap-4">
                                <div className="overflow-hidden rounded-3xl">
                                    <Image
                                        src={G3}
                                        alt="aa"
                                        className="block h-44 w-full origin-center object-cover transition-all duration-200 ease-in hover:scale-[1.04]"
                                    />
                                </div>
                                <div className="hidden overflow-hidden rounded-3xl md:block">
                                    <Image
                                        src={G2}
                                        alt="aa"
                                        className="block h-44 w-full origin-center object-cover transition-all duration-200 ease-in hover:scale-[1.04]"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-row gap-4">
                                <div className="overflow-hidden rounded-3xl md:w-[40%]">
                                    <Image
                                        src={G5}
                                        alt="aa"
                                        className="block h-40 origin-center object-cover transition-all duration-200 ease-in hover:scale-[1.04]"
                                    />
                                </div>
                                <div className="hidden w-[60%] overflow-hidden rounded-3xl md:block ">
                                    <Image
                                        src={G4}
                                        alt="aa"
                                        className="block h-40 origin-center object-cover transition-all duration-200 ease-in hover:scale-[1.04]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full overflow-hidden rounded-3xl flex-none md:w-[20%]">
                            <div className="bottom-0 left-0 right-0 top-0 md:absolute">
                                <Image
                                    src={G6}
                                    alt="aa"
                                    className="block h-full w-full origin-center object-cover transition-all duration-200 ease-in hover:scale-[1.04]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pointer-events-none relative z-50 mt-5 flex justify-center">
                    <a
                        href="/gallery"
                        className="pointer-events-auto inline-flex justify-center rounded-lg px-4 py-3 text-sm font-semibold text-black "
                    >
                        <span>Show more...</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
