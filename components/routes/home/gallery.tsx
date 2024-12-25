import { motion, useScroll, useTransform } from "framer-motion";
import Image, { ImageProps } from "next/image";

import Link from "next/link";
import React, { useRef } from "react";

const Gallery: React.FC<CtaProps> = (props) => {
    const { heading, description, images } = {
        ...CtaDefaults,
        ...props,
    };
    const container = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const i1 = images.slice(0, 5);
    const i2 = images.slice(6, 11);

    return (
        <section ref={container} className="relative w-full py-24 font-insr">
            <div>
                <h2 className="text-center font-oggr text-5xl md:text-6xl md:leading-[5rem]">
                    Sturdily beautiful. <br />
                    Warm, bright. <br />
                    By the Ganges. <br />
                    Adventures transform lives. <br />
                </h2>
            </div>

            <div className="mt-28 overflow-hidden">
                <div ref={container} className="">
                    <Slide
                        direction={"left"}
                        progress={scrollYProgress}
                        images={i1}
                    />
                    <Slide
                        direction={"right"}
                        progress={scrollYProgress}
                        images={i2}
                    />
                </div>
            </div>

            <div className="relative mx-auto mt-28 h-full px-8 text-black md:max-w-[80%] md:px-0">
                <div className="flex w-full flex-col gap-4 text-left">
                    <h2 className="mt-6 font-oggr text-5xl md:text-6xl">
                        Why Sea Hawk Adventures?
                    </h2>
                    <p className="mt-auto max-w-4xl text-lg text-gray-800">
                        Being the flag bearer of river rafting and kayaking in
                        the Indian adventure circuit is a source of pride and
                        excitement for us. Our rafting crew has completed IRF
                        and Rescue 3 training. Our hiking squad is made up of
                        graduates from India&apos;s most prestigious
                        mountaineering schools. As a responsible adventure trip
                        company, we are proud of our safety standards and our
                        desire to remain India&apos;s number one adventure tour
                        operator.
                    </p>
                    <Link
                        href={"#"}
                        className="flex w-fit items-center gap-1 rounded-full bg-blue-500 px-3 py-2 text-lg font-medium text-white hover:bg-blue-600"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

const Slide = (props: any) => {
    const direction = props.direction == "left" ? -1 : 1;
    const translateX = useTransform(
        props.progress,
        [0, 1],
        [250 * direction, -250 * direction],
    );

    const i = props.images;
    return (
        <motion.div
            style={{ x: translateX, left: props.left }}
            className={`relative mt-5 flex w-auto ${props.direction == "left" ? "items-end justify-end" : "justify-start translate-x-32"} gap-5 whitespace-nowrap`}
        >
            {i.map((index: any, j: number) => (
                <div key={j} className="">
                    <div
                        className={
                            "mt-auto flex w-40 items-end justify-end py-1 md:w-80"
                        }
                    >
                        <Image
                            src={index.src}
                            alt=""
                            width={1280}
                            height={780}
                            className={`object-cover object-center ${j % 2 == 0 ? "aspect-[16/11]" : "aspect-square"}`}
                        />
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

type Props = {
    heading: string;
    description: string;

    images: ImageProps[];
};

type CtaProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const CtaDefaults: Props = {
    heading: "Let's make your Website shine",
    description:
        "Premium web design, development, and SEO services to help your business stand out.",

    images: [
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3501.jpg",
            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3502.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3503.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3504.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3505.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3506.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3101.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3103.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3105.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3106.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3107.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3108.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3101.jpg",

            alt: "sdf",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3101.jpg",

            alt: "sdf",
        },
    ],
};
