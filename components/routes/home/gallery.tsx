import { Marquee } from "@/components/ui/marquee";
import { motion, useScroll, useTransform } from "motion/react";
import Image, { ImageProps } from "next/image";
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

    const i3 = [...i1, ...i1, ...i1, ...i1, ...i1, ...i1];
    const i4 = [...i2, ...i2, ...i2, ...i2, ...i2, ...i2];

    return (
        <section ref={container} className="relative w-full py-24 font-insr">
            <div>
                <h2 className="text-center font-satr text-3xl sm:text-4xl md:text-5xl md:leading-[5rem] lg:text-6xl">
                    Sturdily beautiful. <br />
                    Warm, bright. <br />
                    By the Ganges. <br />
                    Adventures transform lives. <br />
                </h2>
            </div>

            <div className="mt-16 overflow-hidden sm:mt-20 md:mt-28">
                <div className="overflow-x-auto">
                    <Marquee pauseOnHover={true}>
                        {i3?.map((item, i) => (
                            <div
                            key={i}
                                className={
                                    "mt-auto flex w-40 items-end justify-end py-1 md:w-64"
                                }
                            >
                                <Image
                                    src={item.src}
                                    alt=""
                                    width={1280}
                                    height={780}
                                    className={`object-cover object-center ${i % 2 == 0 ? "aspect-[16/11]" : "aspect-square"}`}
                                />
                            </div>
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover={true}>
                        {i4?.map((item, i) => (
                            <div
                            key={i}
                                className={
                                    "mb-auto flex w-40 items-end justify-end py-1 md:w-60"
                                }
                            >
                                <Image
                                    src={item.src}
                                    alt=""
                                    width={1280}
                                    height={780}
                                    className={`object-cover object-center ${i % 2 == 0 ? "aspect-[16/11]" : "aspect-square"}`}
                                />
                            </div>
                        ))}
                    </Marquee>
                    {/* <Slide
                        direction={"left"}
                        progress={scrollYProgress}
                        images={i1}
                    />
                    <Slide
                        direction={"right"}
                        progress={scrollYProgress}
                        images={i2}
                    /> */}
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
            style={{ x: translateX }}
            className={`relative mt-5 flex w-auto ${props.direction == "left" ? "items-end justify-end" : "translate-x-32 justify-start"} gap-5 whitespace-nowrap`}
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

// CSS for the marquee effect
const styles = `
   
`;
