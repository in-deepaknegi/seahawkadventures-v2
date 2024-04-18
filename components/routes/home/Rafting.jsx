import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/rafting/r05.jpg";
import Hero2 from "@/public/images/rafting/r05.jpg";
import Hero3 from "@/public/images/rafting/r05.jpg";

const features = [
    {
        id: 1,
        title: "Push to deploy",
        image: Hero1,
        para: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
        href: "/products/simple-queues",
    },
    {
        id: 2,
        title: "SSL certificates",
        image: Hero2,
        para: "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
        href: "/products/simple-queues",
    },
    {
        id: 3,
        title: "Simple queues",
        image: Hero3,
        para: "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
        href: "/products/simple-queues",
    },
];

const Products = () => {
    return (
        <section className="relative z-20 bg-[#f5f5f5] py-24 font-swir sm:py-28">
            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
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
                            Categories
                        </div>
                        <p className="mt-2 text-3xl font-bold text-[#96d279] sm:text-5xl">
                            Beverage universe
                        </p>
                    </div>

                    <p className="mt-6 md:mt-auto max-w-xl md:text-right font-swim text-2xl leading-8 text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                        Suspendisse.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
                    <dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-2 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.id} className="flex flex-col md:p-3">
                                <dt className="flex flex-col gap-y-5 font-swim text-3xl leading-7 text-black/90">
                                    <a
                                        href={feature.href}
                                        className="relative overflow-hidden rounded-2xl"
                                    >
                                        <Image
                                            src={feature.image}
                                            alt="post-img"
                                            className="aspect-video w-full transform object-cover duration-300 ease-in-out hover:scale-110 sm:aspect-[2/1] lg:aspect-[3/1.65]"
                                        />
                                    </a>
                                    {feature.title}
                                </dt>
                                <dd className="mt-8 flex flex-auto flex-col text-base leading-7 text-gray-500">
                                    <p className="line-clamp-2 flex-auto text-lg">
                                        {feature.para}
                                    </p>
                                    <p className="mt-6">
                                        <a
                                            href={feature.href}
                                            className="-my-2.5 inline-flex justify-center rounded-3xl bg-blue-600/90 px-6 py-1.5 text-base text-white"
                                        >
                                            See details
                                        </a>
                                        <a
                                            href="#"
                                            className="-my-2.5 ml-4 inline-flex justify-center rounded-3xl bg-white px-6 py-1.5 text-base text-black"
                                        >
                                            Add to cart
                                        </a>
                                    </p>
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
