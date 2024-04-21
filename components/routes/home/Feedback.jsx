"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import Profile1 from "@/public/profile3.jpg";
import Profile2 from "@/public/profile5.jpg";
import Profile3 from "@/public/profile6.jpg";

const feedbacks = [
    {
        text: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad.",
        image: Profile1,
        author: "Judith Black",
        username: "@judithblack",
    },
    {
        text: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat ea. Elit sunt proident ea nulla ad nulla dolore.",
        image: Profile2,
        author: "Judith Black",
        username: "@judithblack",
    },
    {
        text: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad.",
        image: Profile3,
        author: "Judith Black",
        username: "@judithblack",
    },
];

const Feedback = () => {
    return (
        <section className="relative isolate overflow-hidden bg-[#f4f1ec] font-swir">
            <div>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -left-20 h-[20rem] w-[20rem] md:left-8 md:top-36"
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
                            d="M2.5 5.5L3.11612 6.11612C3.68206 6.68206 4.44964 7 5.25 7C6.05036 7 6.81794 6.68206 7.38388 6.11612L7.61612 5.88388C8.18206 5.31794 8.94964 5 9.75 5C10.5504 5 11.3179 5.31794 11.8839 5.88388L12.1161 6.11612C12.6821 6.68206 13.4496 7 14.25 7C15.0504 7 15.8179 6.68206 16.3839 6.11612L16.6161 5.88388C17.1821 5.31794 17.9496 5 18.75 5C19.5504 5 20.3179 5.31794 20.8839 5.88388L21.5 6.5M2.5 11.5L3.11612 12.1161C3.68206 12.6821 4.44964 13 5.25 13C6.05036 13 6.81794 12.6821 7.38388 12.1161L7.61612 11.8839C8.18206 11.3179 8.94964 11 9.75 11C10.5504 11 11.3179 11.3179 11.8839 11.8839L12.1161 12.1161C12.6821 12.6821 13.4496 13 14.25 13C15.0504 13 15.8179 12.6821 16.3839 12.1161L16.6161 11.8839C17.1821 11.3179 17.9496 11 18.75 11C19.5504 11 20.3179 11.3179 20.8839 11.8839L21.5 12.5M2.5 17.5L3.11612 18.1161C3.68206 18.6821 4.44964 19 5.25 19C6.05036 19 6.81794 18.6821 7.38388 18.1161L7.61612 17.8839C8.18206 17.3179 8.94964 17 9.75 17C10.5504 17 11.3179 17.3179 11.8839 17.8839L12.1161 18.1161C12.6821 18.6821 13.4496 19 14.25 19C15.0504 19 15.8179 18.6821 16.3839 18.1161L16.6161 17.8839C17.1821 17.3179 17.9496 17 18.75 17C19.5504 17 20.3179 17.3179 20.8839 17.8839L21.5 18.5"
                            stroke="#fafafa"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>{" "}
                    </g>
                </svg>
            </div>
            <div className="relative mx-auto mt-24 flex max-w-full flex-col justify-between px-6 md:max-w-[85%] md:flex-row lg:px-8">
                <div className="flex flex-col justify-between gap-8">
                    <div className="flex w-fit gap-4 rounded-3xl bg-white px-4 py-2 text-base text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m9 9 5 12 1.8-5.2L21 14Z" />
                            <path d="M7.2 2.2 8 5.1" />
                            <path d="m5.1 8-2.9-.8" />
                            <path d="M14 4.1 12 6" />
                            <path d="m6 12-1.9 2" />
                        </svg>
                        Happy Customers
                    </div>
                    <p className="mt-2 text-3xl font-bold text-black sm:text-5xl">
                        See what all the talk is about.
                    </p>
                </div>

                <p className="mt-6 max-w-xl font-swim text-2xl leading-8 text-gray-600 md:mt-auto md:text-right">
                    Join the conversation and explore the positive experiences shared by
                    our satisfied customers
                </p>
            </div>

            <div className=" mx-auto py-10">
                <Swiper
                    spaceBetween={30}
                    effect={"slide"}
                    direction={"horizontal"}
                    loop={true}
                    centeredSlides={false}
                    speed={1500}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[EffectFade, Autoplay, Pagination, Navigation]}
                    className="h-full w-full"
                >
                    {feedbacks.map((feedback, i) => (
                        <SwiperSlide key={i}>
                            <section className="isolate overflow-hidden px-6 lg:px-8">
                                <div className="relative mx-auto max-w-2xl py-16 sm:py-16 lg:max-w-5xl">
                                    <figure className="grid items-center gap-2 lg:grid-cols-3">
                                        <div className="h- hidden lg:block">
                                            <Image
                                                src={feedback.image}
                                                alt="profile 1"
                                                className="aspect-[3/2.25] w-full rounded-3xl object-cover"
                                            />
                                        </div>

                                        <div className="h-full w-full rounded-3xl bg-white p-8 lg:col-span-2">
                                            <div className="relative">
                                                <blockquote className="text-xl text-gray-900 sm:text-2xl">
                                                    <p>{feedback.text}</p>
                                                </blockquote>
                                            </div>

                                            <figcaption className="mt-8 flex gap-4">
                                                <div className="block lg:hidden">
                                                    <Image
                                                        src={feedback.image}
                                                        alt="profile 1"
                                                        className="aspect-[1/1] h-12 w-12 rounded-full object-cover"
                                                    />
                                                </div>
                                                <div className="my-auto font-swim">
                                                    <div className="text-lg">Judith Black</div>
                                                    <a
                                                        href="#"
                                                        className="text-sm tracking-wide text-blue-600"
                                                    >
                                                        @judithblack
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </div>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Feedback;