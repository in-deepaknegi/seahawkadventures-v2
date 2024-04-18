import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/kayak/k06.jpg";
import Hero2 from "@/public/images/kayak/k03.jpg";

// import S1 from "@/public/svg/star.svg";
// import S2 from "@/public/svg/bulb.svg";
// import S3 from "@/public/svg/puzzle.svg";

const features = [
    {
        id: 1,
        title: "Push to deploy",
        image: Hero1,
        para: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
        href: "#",
        // svg: S1,
        class: "bg-[#f4f1ec]",
    },
    {
        id: 2,
        title: "SSL certificates",
        image: Hero2,
        para: "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
        href: "#",
        // svg: S2,
        class: "bg-[#f0f4ed]",
    },
];

const Hiw = () => {
    return (
        <section className="relative z-20 bg-white py-24 font-swir sm:py-28">
            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
                <div className="mx-auto flex md:flex-row flex-col justify-between">
                    <div className=" flex flex-col gap-8">
                        <p className="mt-2 text-3xl font-bold text-black sm:text-5xl">
                            Elevate your athletic prowess
                        </p>
                        <a
                            href="#"
                            className="inline-flex w-fit justify-center rounded-3xl bg-[#96d279] px-6 py-2 text-base text-black"
                        >
                            Explore equipments
                        </a>
                    </div>

                    <p className="mt-10 md:mt-0 md:mb-auto md:text-right font-swim text-2xl leading-8 text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                        Suspendisse.
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
                    <dl className="mx-auto grid max-w-xl grid-rows-1 gap-y-28 md:gap-y-10 lg:max-w-none lg:grid-rows-3">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="sticky top-20 md:top-36 flex flex-col-reverse md:flex-row gap-x-3 md:p-3"
                            >
                                <dt
                                    className={`my-auto flex h-fit w-full flex-col justify-between gap-y-5 rounded-3xl p-8 md:p-16 text-3xl ${feature.class}`}
                                >
                                    {/* <Image
                                        src={feature.svg}
                                        alt=""
                                        className="h-16 w-16"
                                    /> */}

                                    <div className="flex flex-col gap-4">
                                        <h3 className=" font-swim">{feature.title}</h3>

                                        <p className=" text-lg text-gray-500">{feature.para}</p>
                                    </div>
                                </dt>
                                <dd className="w-full max-w-lg overflow-hidden rounded-3xl text-gray-500">
                                    <Image
                                        src={feature.image}
                                        alt="post-img"
                                        className="aspect-[2/2] md:aspect-video h-full w-full transform object-cover duration-300 ease-in-out hover:scale-110"
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

export default Hiw;
