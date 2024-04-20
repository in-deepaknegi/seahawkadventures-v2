import React from "react";

const timelines = [
    {
        step: "12 Jan 2024",
        title: "Provident quia",
        para: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    },
    {
        step: "07 Apr 2024",
        title: "Voluptate repudiandae",
        para: "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
    },
    {
        step: "29 Aug 2024",
        title: "Provident quia",
        para: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    },
    // add more data here
];

const Timeline = () => {
    return (
        <section className="bg-white py-24 font-swir lg:py-32">
            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
                <div className="max-w-2xl text-left">
                    <div className="flex w-fit gap-4 rounded-3xl bg-[#f4f1ec] px-4 py-2 text-base text-gray-600">
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
                        Get familiar
                    </div>
                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Know our story
                    </h2>
                    <p className="mt-6 font-swim text-2xl leading-8 text-gray-600">
                        Unraveling the multitude of ways we enhance your experience and
                        deliver unmatched value
                    </p>
                </div>

                <div className="relative mx-auto mt-8 grid grid-cols-1 gap-8 lg:mx-0 lg:grid-cols-3">
                    {timelines.map((item, i) => (
                        <div key={i} className="flex flex-col h-full">
                            <span className="w-16 text-sm text-gray-500 lg:w-auto">
                                {item.step}
                            </span>
                            <time
                                dateTime="2021-08"
                                className="mt-3 flex items-center text-sm font-bold leading-7"
                            >
                                <svg
                                    viewBox="0 0 4 4"
                                    className="mr-4 h-3 w-3 flex-none text-[#96d279]"
                                    aria-hidden="true"
                                >
                                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                </svg>
                                <div className="static h-[1.5px] w-full bg-[#96d279] lg:w-auto lg:flex-auto "></div>
                            </time>
                            <div className="mt-6 flex flex-col h-full rounded-2xl bg-[#f0f4ed] p-6">
                                <p className="font-swim text-2xl text-gray-800">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-lg leading-6 text-gray-600">
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
