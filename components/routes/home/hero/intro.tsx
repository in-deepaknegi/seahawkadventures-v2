'use client';
import React, { useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]



const Intro: React.FC<IntroProps> = (props) => {
    const { } = {
        ...IntroDefaults,
        ...props
    };
    const background = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=400px",
            },
        })

        timeline
            .from(background.current, { clipPath: `inset(25%)` })
    }, [])

    return (
        <>
            <div className="relative w-full flex justify-center bg-black">
                <div ref={background}
                    className="w-full h-[150vh] absolute">
                    <Image
                        src={'/images/h3.jpg'}
                        fill={true}
                        alt="background image"
                        className='object-cover'
                        priority={true}
                    />
                    <div className='bg-gradient-to-t from-white to-white/10 h-40 bottom-0 absolute w-full' />
                </div>
                <div className="flex justify-center relative mt-[59vh]">
                    <h1
                        data-scroll
                        data-scroll-speed="0.7"
                        className='text-white text-[7.5vw] x-30 tracking-wide whitespace-nowrap text-center font-clar'
                    >
                        SEA HAWK ADVENTURES
                    </h1>
                </div>


            </div>

            <div className="relative text-black text-[3vw] uppercase mt-[30vw] ml-[10vw]" >
                {
                    phrases.map((phrase, index) => {
                        return <AnimatedText key={index}>{phrase}</AnimatedText>
                    })
                }
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

function AnimatedText({ children }: { children: any }) {
    const text = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])

    return <p className='relative' ref={text}>{children}</p>
}