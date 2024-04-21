"use client";
import React from "react";
import Image from "next/image";

import Profile1 from "@/public/images/team/t00.jpg";
import Profile2 from "@/public/images/team/t01.jpg";
import Profile3 from "@/public/images/team/t02.jpg";

const teams = [
    {
        image: Profile1,
        author: "Rishi Rana (Founder)",
        description: "Professional Kayaker & Raft Guide",
        username: "@rishi_aquaholic",
        href: "https://www.instagram.com/rishi_aquaholic/",
    },
    {
        image: Profile2,
        author: "Rakesh Rana",
        description: "Professional Raft Guide",
        username: "@rakesh_rana",
    },
    {
        image: Profile3,
        author: "Nitesh Negi",
        description: "Professional Raft Guide",
        username: "@nitesh_negi",
    },

    // add more detail on hover like phone, email etc
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

            <div className="mx-auto mt-6 px-6 lg:px-8">
                <div className="relative mx-auto grid max-w-full md:max-w-[59%] md:grid-cols-3 gap-8 md:gap-16 md:px-6">
                    {teams.map((team, i) => (
                        <div
                            key={i}
                            className="group relative mt-8 flex cursor-pointer md:flex-col items-center gap-4 transition-all duration-300 ease-in hover:scale-[1.082]"
                        >
                            <div className="">
                                <Image
                                    src={team.image}
                                    alt="profile 1"
                                    className="aspect-[1/1] h-40 w-40 md:h-full md:w-full rounded-full object-cover"
                                />
                            </div>
                            <div className="my-auto font-swim text-center">
                                <h3 className="text-2xl">
                                    {team.author}
                                </h3>
                                <p className="text-base text-gray-500">
                                    {team.description}
                                </p>
                                <a href={team.href} target="_black" className="text-base tracking-wide text-primary">
                                    <span className=" absolute inset-0"></span>
                                    {team.username}
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
