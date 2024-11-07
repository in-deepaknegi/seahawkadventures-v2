import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import Image, { ImageProps } from "next/image";

import Link from 'next/link';
import React, { useRef } from 'react';

const About: React.FC<CtaProps> = (props) => {
    const { heading, description, images } = {
        ...CtaDefaults,
        ...props
    };
    const container = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    return (
        <section ref={container} className="relative w-full py-24 font-insr">


            <div>
                <h2 className="text-6xl font-oggr leading-[5rem] text-center">
                    Sturdily beautiful. <br />
                    Warm, bright. <br />
                    Naturally comforting. <br />
                    Timelessly modern. <br />
                </h2>
            </div>

            <div className="overflow-hidden mt-28">
                <div ref={container} className="">
                    <Slide direction={'left'} progress={scrollYProgress} images={images} />
                    <Slide direction={'right'} progress={scrollYProgress} images={images} />

                </div>
            </div>

            <div className="relative z-50 h-full max-w-[80%] mx-auto text-black mt-28 ">
                <div className="flex w-full flex-col gap-4 text-left">

                    <h2 className="mt-6 font-oggr text-4xl md:text-6xl">
                        Effortlessly sustainable. <br />
                        The perfect living space.
                    </h2>
                    <p className="mt-auto max-w-md text-2xl">{description}</p>
                    <Link
                        href={"#"}
                        className="flex text-lg items-center gap-1 w-fit rounded-sm bg-blue-700 px-3 py-2 font-medium text-white"
                    >
                        Get in touch
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default About;

const Slide = (props: any) => {
    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [250 * direction, -250 * direction]);

    return (
        <motion.div style={{ x: translateX, left: props.left }}
            className={`relative flex mt-5  ${props.direction == 'left' ? 'justify-end items-end ' : ' justify-start'} gap-5 whitespace-nowrap`}>

            {props.images.map((index: any) => (
                <div key={index}>
                    <div className={'flex justify-end mt-auto items-end py-1'}>
                        <Image
                            src={index.src}
                            alt=""
                            width={1280}
                            height={780}
                            className="mt-auto object-cover"
                        />
                    </div>
                </div>
            ))}

        </motion.div>
    )
}



type Props = {
    heading: string;
    description: string;

    images: ImageProps[];
};

type CtaProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const CtaDefaults: Props = {
    heading: "Let's make your Website shine",
    description: "Premium web design, development, and SEO services to help your business stand out.",

    images: [
        {
            src: "/images/rafting/r02.jpg",
            alt: "sdf"
        },
        {
            src: "/images/rafting/r06.jpg",
            alt: "sdf"
        },
        {
            src: "/images/rafting/r12.jpg",
            alt: "sdf"
        },
        {
            src: "/images/rafting/r02.jpg",
            alt: "sdf"
        }
    ]
};



