"use client"
import React, { useState, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Services: React.FC<ServicesProps> = (props) => {
    const { services } = {
        ...ServicesDefaults,
        ...props
    };

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className="relative text-black mt-10 p-[10%]">
            <div className="flex h-[700px]">
                <div ref={imageContainer}
                    className="relative h-full w-[40%]">
                    <Image
                        src={`/images/${services[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        className='object-cover'
                        priority={true}
                    />
                </div>

            </div>

            <div className="flex flex-col relative -mt-10">
                {
                    services.map((project, index) => {
                        return (
                            <div key={index}
                                onMouseOver={() => { setSelectedProject(index) }}
                                className="w-full text-black uppercase text-[3vw] border-b flex justify-end">
                                <div className='flex flex-col justify-end items-end'>
                                    <h2
                                        className='m-0 mt-10 mb-5 cursor-pointer'>
                                        {project.title}
                                    </h2>
                                    <p className='text-base max-w-[50%]'>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Services;

type Props = {
    services: {
        title: string;
        src: string;
        description: string;
    }[];
};

type ServicesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const ServicesDefaults: Props = {
    services: [
        {
            title: "River Rafting",
            src: "h1.jpg",
            description: "Experience the thrill of the fast river with our expert guides, ensuring a safe and unforgettable adventure."
        },
        {
            title: "Kayaking",
            src: "h2.jpg",
            description: "Experience the thrill of the fast river with our expert guides, ensuring a safe and unforgettable adventure."
        },
        {
            title: "Camping",
            src: "h3.jpg",
            description: "Experience the thrill of the fast river with our expert guides, ensuring a safe and unforgettable adventure."
        },
    ]
};

