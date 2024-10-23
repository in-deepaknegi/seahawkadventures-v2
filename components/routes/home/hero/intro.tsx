'use client';
import React, { useRef } from 'react'
import Image from 'next/image';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';




const Intro: React.FC<IntroProps> = (props) => {
    const { } = {
        ...IntroDefaults,
        ...props
    };

    const ref = React.useRef(null);
    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.4, 0.7], [-100, 0, 400]),
        springConfig
    );

    const width = useTransform(
        scrollYProgress,
        [0, 0.2],
        ["40%", "100%"]
    );
    const height = useTransform(
        scrollYProgress,
        [0, 0.2],
        ["40%", "80%"]
    );
    const fontSize = useTransform(
        scrollYProgress,
        [0, 1],
        ["5vw", "7vw"]
    );

    return (
        <>
            <div ref={ref} className="relative w-full flex justify-center h-[150vh]">
                <motion.div
                    style={{
                        width,
                        height
                    }}
                    className="w-full h-[50vh] absolute top-40">
                    <Image
                        src={'/images/g00.webp'}
                        fill={true}
                        alt="background image"
                        className='object-cover rounded-md'
                        priority={true}
                    />
                    <div className='bg-gradient-to-t from-white to-white/10 h-40 bottom-0 absolute w-full' />
                </motion.div>

                <motion.div
                    style={{
                        translateY
                    }}
                    className="flex flex-col justify-center relative mt-[59vh]">
                    <motion.h1
                        style={{
                            fontSize
                        }}
                        className='text-[7.5vw] x-30 tracking-wide whitespace-nowrap text-center font-clar'
                    >
                        SEA HAWK ADVENTURES
                    </motion.h1>
                    <p className='text-black text-center text-xl max-w-lg mx-auto'>
                        Experience unforgettable hiking, rafting, and kayaking in Uttarakhand&apos;s stunning landscapes.
                    </p>
                </motion.div>


            </div>

        </>
    )
};

export default Intro;

type Props = {
    // Add your props here
};

type IntroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const IntroDefaults: Props = {
    // Default prop values
};
