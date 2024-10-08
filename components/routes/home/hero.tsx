'use client';
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero: React.FC<HeroProps> = (props) => {
    const { } = {
        ...HeroDefaults,
        ...props
    };
    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "200px"}, 0)
    }, [])

    return (
        <div className="relative w-full flex justify-center">
            <div className="w-full h-[140vh] absolute brightness-[60%]" ref={background}>
                <Image 
                    src={'/images/rafting/r02.jpg'}
                    fill={true}
                    alt="background image"
                    className='object-cover'
                    priority={true}
                />
            </div>
            <div className="flex justify-center relative mt-40">
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className="w-80 h-80 absolute">
                        <Image
                            src={'/images/rafting/r06.jpg'}
                            alt="intro image"
                            fill={true} 
                            className='object-cover'
                            priority={true}
                        />
                    </div>
                    <h1 
                    className='text-white text-4xl z-3 text-center whitespace-nowrap'
                    data-scroll data-scroll-speed="0.7">
                        SEA HAWK ADVENTURES
                    </h1>
             </div>
        </div>
    );
};

export default Hero;

type Props = {
    // Add your props here
};

type HeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const HeroDefaults: Props = {
    // Default prop values
};

