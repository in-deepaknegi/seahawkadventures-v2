"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";

import R1 from "@/public/images/rafting/r02.jpg";
import R2 from "@/public/images/rafting/r12.jpg";
import R3 from "@/public/images/rafting/r15.jpg";
import R4 from "@/public/images/rafting/r05.jpg";
import R5 from "@/public/images/rafting/r07.jpg";
import R6 from "@/public/images/rafting/r03.jpg";
import R7 from "@/public/images/rafting/r04.jpg";
import R8 from "@/public/images/rafting/r08.jpg";
import R9 from "@/public/images/rafting/r05.jpg";
import R10 from "@/public/images/rafting/r10.jpg";

import Faq from "@/components/ui/faq";
import { Call, Facebook, Instagram, Whatsapp } from "@/components/icons";

const gallery = [
    {
        img: R1,
    },
    {
        img: R2,
    },
    {
        img: R3,
    },
    {
        img: R4,
    },
    {
        img: R5,
    },
    {
        img: R6,
    },
    {
        img: R7,
    },
    {
        img: R8,
    },
    {
        img: R9,
    },
    {
        img: R10,
    },
]

const misc = [
    " Any kind of alcohol, knife, mouthfresher, sharp object, cigarettes, or lighters are not allowed.",
    " Photography and videography from personal devices are not allowed; the guide will take your photos and videos, which are not included in the rafting package.",
    " Your mobile phones will be in a dry bag carried by the guide.",
    " Guests are requested to report at least half an hour before the time slot allotted to them.",
]

const Hero = ({ doc }: any) => {

    const g = [
        ...gallery,
        ...gallery,
        ...gallery,
        ...gallery,
        ...gallery,
    ];

    return (
        <section className="relative z-20 -mt-[6.5rem] bg-white py-24 font-insr sm:py-28">
            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
                <div className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-6">
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
                        Rafting
                    </div>
                    <p className="mt-2 text-5xl font-oggr text-black md:text-6xl">
                        {doc?.title}
                    </p>

                    <p className="mt-auto max-w-xl text-center  text-lg md:text-xl text-gray-600">
                        {doc?.description}
                    </p>
                </div>
            </div>

            <div className="mt-10 overflow-hidden">
                <div className="relative mx-auto ">
                    <div className="absolute left-0 top-0 z-10 h-full md:w-6 bg-white bg-gradient-to-r"></div>
                    <div className="absolute w-10 left-0 md:left-6 top-0 z-10 h-full md:w-36 bg-gradient-to-r from-white to-[#f4f1ec00] "></div>
                    <div className="absolute w-10 right-0 top-0 z-10 h-full md:w-40 bg-gradient-to-l from-white to-[#f4f1ec00] "></div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        freeMode={true}
                        loop={true}
                        autoplay={true}
                        breakpoints={{
                            // 640: {
                            //   slidesPerView: 2,
                            //   spaceBetween: 20,
                            // },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[FreeMode, Autoplay]}
                        className="mySwiper max-w-[75%] md:max-w-[60%] md:-translate-x-32"
                        style={{
                            overflow: "visible",
                        }}
                    >
                        <Button />

                        {g.map((post, i) => (
                            <SwiperSlide key={i}>
                                <article className="aspect-video pb-20">
                                    <Image
                                        src={post.img}
                                        alt=""
                                        className=" aspect-video rounded-3xl object-cover"
                                    />
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
                <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-between gap-10 md:px-6">
                    <p className="mt-4  text-5xl text-gray-900">
                        ₹{doc?.rate}
                        <span className="text-lg text-gray-500"> /person</span>
                    </p>

                    <div className="flex flex-col items-center justify-between w-full gap-8">
                        <p className="text-black">
                            Book your next adventure
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="tel:+91 97566 20538"
                                className="group px-6 rounded-full w-auto py-2 text-center bg-blue-500 hover:bg-blue-600/85 text-white flex items-center gap-3 justify-center overflow-hidden"
                            >
                                <Call className="size-4" />
                                Book on call
                            </Link>

                            <Link
                                href={`https://wa.me/919756620538/?text=Hello! I'm interested in your ${doc.title} and would love to learn more. Can you please provide details on the types of trips available and their durations? Thank you.`}
                                target="_blank"
                                className="w-fit rounded-full px-6 py-2 text-center bg-green-500/85 hover:bg-green-400/95 text-black flex items-center gap-2 justify-center"
                            >
                                <Whatsapp className="size-6" />
                                Chat with us
                            </Link>
                        </div>
                    </div>

                    <hr className="w-[40%] border-b border-gray-300/60" />

                    <ul className="grid w-full grid-cols-2 gap-3">
                        {doc?.features.map((item: any, i: number) => (
                            <li
                                key={i}
                                className="flex flex-col items-center gap-3 rounded-xl bg-white border px-6 py-5"
                            >
                                <Image
                                    src={item.thumbnail.src}
                                    alt={item.thumbnail.alt}
                                    width={1080}
                                    height={680}
                                    className="h-9 w-9" />

                                <p className=" text-center text-dawn-600">
                                    <span className=" text-black">{item.title}: </span>
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <h3 className=" flex items-center gap-2  text-2xl text-black">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-7"
                                xmlns="http://www.w3.org/2000/svg"
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
                                        d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    ></path>{" "}
                                </g>
                            </svg>
                            {doc?.title}
                        </h3>
                        <div className="mt-4 rounded-xl bg-white p-4">
                            {doc?.para}
                            <ul className="ml-8 mt-3 list-disc">
                                {doc?.rafts.map((item: any, j: number) => (
                                    <li key={j}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className=" flex items-center gap-2  text-2xl text-black">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7"
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
                                        d="M12 17V11"
                                        stroke="#000000"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>{" "}
                                    <circle
                                        cx="1"
                                        cy="1"
                                        r="1"
                                        transform="matrix(1 0 0 -1 11 9)"
                                        fill="#000000"
                                    ></circle>{" "}
                                    <path
                                        d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                                        stroke="#000000"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>{" "}
                                </g>
                            </svg>
                            Frequently asked questions
                        </h3>
                        <div className="mt-4 rounded-xl bg-white p-4">
                            <Faq data={doc?.data} />
                        </div>
                    </div>

                    <div>
                        <h3 className=" flex items-center gap-2  text-2xl text-black">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7"
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
                                        d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>{" "}
                                </g>
                            </svg>
                            Additional information
                        </h3>
                        <div className="mt-4 flex flex-col gap-4 rounded-xl bg-white p-4">
                            <div className=" w-fit rounded-3xl bg-[#f5f5f5] px-3 py-0.5 text-gray-600">
                                Things to remember
                            </div>
                            <ul className="ml-8 list-disc ">
                                {misc.map((item, k) => (
                                    <li key={k}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <hr className="" />

                            <div className=" w-fit rounded-3xl bg-[#f5f5f5] px-3 py-0.5 text-gray-600">
                                Booking
                            </div>
                            <p className="ml-4">
                                We offer standard and expedited booking options. Booking times
                                and costs vary by location and chosen method. Orders are
                                typically processed within 2 business days, and you&apos;ll
                                receive a tracking number for your order.
                            </p>

                            <hr className="" />

                            <div className=" w-fit rounded-3xl bg-[#f5f5f5] px-3 py-0.5 text-gray-600">
                                Cancellation policy
                            </div>
                            <p className="ml-4">
                                Eligible for cancel within 5 days of receiving your adventure date.
                                Contact us for cancel authorization. Refunds processed within 2
                                business days to the original payment method. No cancellation requeste will be taken 5 hours prior to the adventure time.
                            </p>
                        </div>

                        <p className="my-2 text-2xl font-oggm tracking-wide">Connect with us</p>
                        <div className="grid grid-cols-4 gap-4">
                           
                            <Link
                                href={`https://wa.me/919756620538/?text=Hi there!`}
                                target="_blank"
                                className="flex items-center justify-center bg-green-500 p-0.5"
                            >
                                <span className="sr-only">Whatsapp</span>
                                <Whatsapp className="size-9 text-white" />
                            </Link>
                            <Link
                                href="https://www.facebook.com/seahawkadventure/"
                                target="_blank"
                                className="flex items-center justify-center bg-[#1877f2]"
                            >
                                <span className="sr-only">Facebook</span>
                                <Facebook className="size-8 text-white" />
                            </Link>
                            <Link
                                href={`https://www.instagram.com/seahawkadventures/`}
                                target="_blank"
                                className="flex items-center justify-center bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] p-1"
                            >
                                <span className="sr-only">Instagram</span>
                                <Instagram />
                            </Link>
                            <Link
                                href={`tel:+91 97566 20538`}
                                target="_blank"
                                className="flex items-center justify-center bg-indigo-600 p-2"
                            >
                                <span className="sr-only">Call</span>
                                <Call className="size-6 text-white" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

const Button = () => {
    const swiper = useSwiper();

    return (
        <div className="absolute right-0 md:-right-20 bottom-0 z-50 flex flex-row items-start gap-4">
            <button
                onClick={() => swiper.slidePrev()}
                className=" rounded-full bg-primary p-1"
            >
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
                    className="md:h-9 md:w-9 text-white"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </button>

            <button
                onClick={() => swiper.slideNext()}
                className=" rounded-full bg-primary p-1"
            >
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
                    className="md:h-9 md:w-9 text-white"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
        </div>
    );
};
