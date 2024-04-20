"use client";
import React from "react";
import Image from "next/image";

import Profile1 from "@/public/profile3.jpg";
import Profile2 from "@/public/profile5.jpg";
import Profile3 from "@/public/profile6.jpg";

const teams = [
    {
        image: Profile1,
        author: "Judith Black",
        username: "@judithblack",
    },
    {
        image: Profile2,
        author: "Judith Black",
        username: "@judithblack",
    },
    {
        image: Profile3,
        author: "Judith Black",
        username: "@judithblack",
    },
];

const Team = () => {
    return (
        <section className="relative z-20 bg-[#f5f5f5] py-24 font-swir sm:py-24">
            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
                <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6">
                    <p className="text-3xl font-bold text-black sm:text-5xl">
                        Meet the team
                    </p>

                    <p className="mt-auto max-w-xl text-center font-swim text-2xl leading-8 text-gray-600">
                        Introduce yourself to the dedicated minds propelling us toward
                        greatness
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-6 max-w-full px-6 md:max-w-[60%] lg:px-8">
                <div className="relative mx-auto grid max-w-3xl grid-cols-3 gap-16 md:px-6">
                    {teams.map((feedback, i) => (
                        <div
                            key={i}
                            className="group relative mt-8 flex cursor-pointer flex-col items-center gap-4 transition-all duration-300 ease-in hover:scale-[1.165]"
                        >
                            <div className="">
                                <Image
                                    src={feedback.image}
                                    alt="profile 1"
                                    className="aspect-[1/1] rounded-full object-cover"
                                />
                            </div>
                            <div className="my-auto font-swim">
                                <div className="text-lg">Judith Black</div>
                                <a href="#" className="text-sm tracking-wide text-blue-600">
                                    <span className=" absolute inset-0"></span>
                                    @judithblack
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
