"use client";
import React from "react";

const fea = [
    "Premium Ingredients",
    "Dedication to Quality",
    "Competitive Pricing",
    "Transparency",
    "Variety and Innovation",
    "Customer Satisfaction",
];

const Hero = () => {
    return (
        <section className="relative isolate z-20 -mt-[6.5rem] bg-[#f5f5f5]  py-24 font-swir sm:py-28">
            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
                <div className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-6">

                    <p className="mt-2 text-3xl font-bold text-black sm:text-6xl">
                        About us
                    </p>

                    <p className="mt-auto max-w-xl text-center font-swim text-2xl leading-8 text-gray-600">
                        Uncover what sets us apart and makes us your ideal choice for
                        quality sports beverages
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-10 max-w-full px-6 md:max-w-[85%] lg:px-8">
                <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-between gap-10 md:px-6">
                    <ul className="grid w-full grid-cols-3 gap-3">
                        {fea.map((item, i) => (
                            <li
                                key={i}
                                className="flex flex-col items-center gap-3 rounded-xl bg-white px-6 py-5"
                            >
                                <svg
                                    fill="#000000"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
                                    </g>
                                </svg>
                                <span className=" font-swim text-gray-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;