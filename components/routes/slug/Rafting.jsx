"use client";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper/modules";

import Faq from '@/components/Faq';
import R1 from "@/public/images/rafting/r02.jpg";
import R2 from "@/public/images/rafting/r12.jpg";
import R3 from "@/public/images/rafting/r15.jpg";

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
]

const Rafting = ({ rafting }) => {
    const g = [
        ...gallery,
        ...gallery,
        ...gallery,
        ...gallery,
    ];

    return (
        <section className="relative z-20 -mt-[6.5rem] bg-[#f4f1ec]  py-24 font-swir sm:py-28">
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
                    <p className="mt-2 text-3xl font-bold text-black sm:text-5xl">
                        {rafting?.title}
                    </p>

                    <p className="mt-auto max-w-xl text-center font-swim text-lg md:text-2xl text-gray-600">
                        {rafting?.description}
                    </p>
                </div>
            </div>

            <div className="mt-10 overflow-hidden">
                <div className="relative mx-auto ">
                    <div className="absolute left-0 top-0 z-10 h-full md:w-6 bg-[#f4f1ec] bg-gradient-to-r"></div>
                    <div className="absolute w-10 left-0 md:left-6 top-0 z-10 h-full md:w-36 bg-gradient-to-r from-[#f4f1ec] to-[#f4f1ec00] "></div>
                    <div className="absolute w-10 right-0 top-0 z-10 h-full md:w-40 bg-gradient-to-l from-[#f4f1ec] to-[#f4f1ec00] "></div>

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
                        className="mySwiper max-w-[80%] md:-translate-x-32"
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
                    <p className="mt-4 font-swim text-5xl text-gray-900">
                        ₹{rafting?.rate}
                        <span className="text-lg text-gray-500"> /person</span>
                    </p>
                    <a
                        href="#"
                        className="-my-2.5 inline-flex justify-center rounded-3xl bg-primary px-6 py-1.5 text-lg text-white"
                    >
                        Book your next adventure
                    </a>

                    <hr className="w-[30%] border-b border-gray-300/60" />

                    <ul className="grid w-full grid-cols-2 gap-3">
                        {rafting.features.map((item, i) => (
                            <li
                                key={i}
                                className="flex flex-col items-center gap-3 rounded-xl bg-white px-6 py-5 font-swim"
                            >
                                <Image src={item.svg} alt="" className="h-9 w-9" />

                                <p className=" text-center text-gray-500">
                                    <span className=" text-black">{item.title}: </span>
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <h3 className=" flex items-center gap-2 font-swim text-2xl text-black">
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
                            {rafting.title}
                        </h3>
                        <div className="mt-4 rounded-xl bg-white p-4">
                            {rafting.para}
                            <ul className="ml-8 mt-3 list-disc">
                                {rafting.rafts.map((item, j) => (
                                    <li key={j}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className=" flex items-center gap-2 font-swim text-2xl text-black">
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
                            <Faq data={rafting.data} />
                        </div>
                    </div>

                    <div>
                        <h3 className=" flex items-center gap-2 font-swim text-2xl text-black">
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
                                {rafting.misc.map((item, k) => (
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
                                We offer standard and expedited shipping options. Shipping times
                                and costs vary by location and chosen method. Orders are
                                typically processed within 2 business days, and you&apos;ll
                                receive a tracking number for your order.
                            </p>

                            <hr className="" />

                            <div className=" w-fit rounded-3xl bg-[#f5f5f5] px-3 py-0.5 text-gray-600">
                                Return policy
                            </div>
                            <p className="ml-4">
                                Eligible for returns within 15 days of receiving your order.
                                Contact us for return authorization. Customers cover return
                                shipping, except for product defects. Refunds processed within 2
                                business days to the original payment method. Exchanges
                                available for damaged or defective items. Order cancellations
                                accepted within 24 hours of placement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rafting;

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
