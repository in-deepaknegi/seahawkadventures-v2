import React from "react";
import Image from "next/image";

import rafting from "@/data/rafting";
import Button from '@/components/ui/Watsapp';

const Products = () => {
    return (
        <section className="relative z-20 bg-[#f4f1ec] overflow-hidden py-24 font-swir sm:py-28">
            <div className="mx-auto max-w-full px-6 md:max-w-[90%] lg:px-8">
                <div className=" absolute left-0 top-20 z-0">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-[28rem] w-[28rem] text-yellow-500"
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
                                d="M6 3V14.8C6 15.9201 6 16.4802 6.21799 16.908C6.40973 17.2843 6.71569 17.5903 7.09202 17.782C7.51984 18 8.0799 18 9.2 18H15M21 18H18M18 21V9.2C18 8.0799 18 7.51984 17.782 7.09202C17.5903 6.71569 17.2843 6.40973 16.908 6.21799C16.4802 6 15.9201 6 14.8 6H9M3 6H6"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{" "}
                        </g>
                    </svg>
                </div>

                <div className="relative mx-auto flex flex-col md:flex-row max-w-6xl justify-between">
                    <div className="flex flex-col justify-between gap-8">
                        <div className="flex w-fit gap-4 rounded-3xl bg-white px-4 py-2 text-base text-gray-500">
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
                        <p className="mt-2 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600/90 to-purple-500 pb-2 sm:text-6xl">
                            Rafting universe
                        </p>
                    </div>

                    <p className="mt-6 md:mt-auto max-w-2xl md:text-right font-swim text-2xl leading-8 text-gray-600">
                        Explore the excitement of the rapid river alongside our skilled guides, guaranteeing a secure and memorable journey.
                    </p>
                </div>


                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
                    <dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {rafting.map((item, i) => (
                            <div key={i} className="flex flex-col">
                                <dt className="flex flex-col gap-y-5 ">
                                    <a
                                        href={item.href}
                                        className="relative overflow-hidden rounded-2xl"
                                    >
                                        <Image
                                            src={item.image}
                                            alt="post-img"
                                            className="aspect-video w-full transform object-cover duration-300 ease-in-out hover:scale-110 sm:aspect-[2/1] lg:aspect-[3/1.75]"
                                        />
                                    </a>
                                </dt>
                                <dd className="mt-2 bg-white p-5 rounded-3xl flex flex-auto flex-col text-base leading-7 text-gray-500">
                                    <h3 className="font-swim text-3xl leading-7 text-black/90">
                                        {item.title}
                                    </h3>

                                    <div className="mt-6 bg-[#f0f4ed] rounded-xl px-4 py-2">
                                        <ul className="space-y-2">
                                            {
                                                item.sub.map((item, j) => (
                                                    <li key={j} className="flex gap-4 text-black/80">
                                                        <Image
                                                            src={item.img}
                                                            alt=""
                                                            className="w-7 h-7"
                                                        />
                                                        {item.name}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <p className="text-3xl text-black mt-5 font-swim">
                                        ₹{" "}{item.rate}{" "}
                                        <span className="text-lg text-gray-500 font-swir">/person</span>
                                    </p>
                                    <p className="mt-3 line-clamp-2 flex-auto text-lg">
                                        {item.description}
                                    </p>
                                    <a href={item.href} className="mt-3 text-blue-600/90">
                                        Read more ...
                                    </a>
                                    <div className="mt-3 flex gap-4">
                                        <Button text={`${item.title} package`} />

                                        <a
                                            href={item.href}
                                            className=" inline-flex justify-center rounded-3xl bg-primary px-6 py-1.5 text-base text-white"
                                        >
                                            Book now
                                        </a>
                                    </div>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Products;
