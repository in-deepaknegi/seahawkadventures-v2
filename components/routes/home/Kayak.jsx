import React from "react";
import Image from "next/image"

import kayak from '@/data/kayak';
import Button from '@/components/ui/Watsapp'

const Main = () => {
    return (
        <section className="relative isolate z-20 bg-white py-24 font-swir sm:py-28">
            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
                <div className="mx-auto flex md:flex-row flex-col justify-between">
                    <div className=" flex flex-col gap-8">
                        <p className="mt-2 text-3xl font-bold text-black sm:text-5xl">
                            Elevate your kayaking skills
                        </p>
                        <a
                            href="#"
                            className="inline-flex w-fit justify-center rounded-3xl bg-primary px-6 py-2 text-base text-white"
                        >
                            Explore kayaking courses
                        </a>
                    </div>

                    <p className="mt-10 md:mt-0 md:mb-auto md:text-right font-swim text-2xl leading-8 text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                        Suspendisse.
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
                    <dl className="mx-auto grid max-w-xl grid-rows-1 gap-y-28 md:gap-y-10 lg:max-w-none lg:grid-rows-2">
                        {kayak.map((item, i) => (
                            <div
                                key={i}
                                className="md:sticky md:top-36 flex flex-col-reverse md:flex-row gap-x-3 md:p-3"
                            >
                                <dt
                                    className={` mt-2 md:mt-0 my-auto flex h-fit w-full flex-col justify-between gap-y-3 rounded-3xl px-5 md:px-8 py-5 text-3xl ${item.class}`}
                                >
                                    <Image
                                        src={item.svg}
                                        alt=""
                                        className="h-14 w-14"
                                    />

                                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:items-center justify-between">
                                        <h3 className=" font-swim">{item.title}</h3>

                                        <p className="text-3xl text-black font-swim">
                                            ₹{" "}{item.rate}{" "}
                                            <span className="text-lg text-gray-500 font-swir">/person</span>
                                        </p>
                                    </div>

                                    <div className="mt-3 flex flex-col">
                                        <div className="text-base leading-7 bg-white rounded-xl px-4 py-2">
                                            <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2">
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

                                        <p className="mt-3 text-lg text-gray-500 line-clamp-2">
                                            {item.description}
                                        </p>

                                        <div className="mt-3 flex gap-4">
                                            <Button text={`${item.title} package`} />

                                            <a
                                                href={item.href}
                                                className=" inline-flex justify-center rounded-3xl bg-primary px-6 py-1.5 text-base text-white"
                                            >
                                                Book now
                                            </a>
                                        </div>
                                    </div>
                                </dt>
                                <dd className="w-full max-w-lg overflow-hidden rounded-3xl text-gray-500">
                                    <Image
                                        src={item.image}
                                        alt="post-img"
                                        className="aspect-[2/1.25] md:aspect-video h-full w-full transform object-cover duration-300 ease-in-out hover:scale-110"
                                    />
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Main;