"use client"
import { ComponentProps } from '@/types/global';
import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';

const Services: React.FC<ServicesProps> = (props) => {
    const { heading, image, services } = {
        ...ServicesDefaults,
        ...props
    };


    const [index, setIndex] = useState(0);

    const handleClick = (newIndex: number) => {
        setIndex(newIndex);
    };

    return (
        <section className='relative overflow-hidden py-24 h-screen isolate'>
            {image?.src && (
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={1280}
                    height={780}
                    className='absolute -z-10 top-0 w-full h-full object-cover'
                />
            )}

            <div className='absolute top-0 h-full w-full bg-gradient-to-t backdrop-blur-[0.75px] from-sky-100 to-sky-100/40' />

            {/* <div className='bg-[#50a1ff] w-40 top-16 rounded-md h-40 absolute rotate-45' /> */}

            <div className='mx-auto max-w-[90%] px-5 md:px-0 h-full relative'>
                <div className=''>
                    <h2 className='text-[4vw] flex flex-col text-black font-clam'>
                        {heading}
                    </h2>

                    <div className='mt-10 flex'>
                        <div className='flex flex-col w-full items-center gap-10 border-t border-gray-300'>
                            {services?.map((service, i) => (
                                <div
                                    key={i}
                                    className={`${i === index ? "border-t-[3px] text-[#50a1ff] border-[#50a1ff]" : "text-black"
                                        } font-clarm tracking-wider py-4 px-4`}
                                >
                                    <button
                                        onClick={() => {
                                            handleClick(i);
                                            setIndex(i);
                                        }}
                                        className={`text-4xl uppercase w-full flex transition-all `}
                                    >
                                        {service.title}

                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className=''>
                            <div className='flex gap-10'>
                                {services && (
                                    services[index].packages.map((pkg, i) => (
                                        <div key={i}>
                                            <div>
                                                {image?.src && (
                                                    <Image
                                                        src={pkg.image?.src}
                                                        alt={pkg.image?.alt}
                                                        width={1280}
                                                        height={780}
                                                        className=' aspect-video object-cover rounded-md'
                                                    />
                                                )}
                                            </div>
                                            <h3 className='text-4xl mt-5 font-clarm'>
                                                {pkg.title}
                                            </h3>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;


type ServicesProps = React.ComponentPropsWithoutRef<"section"> & Partial<ComponentProps>;

const ServicesDefaults: ComponentProps = {
    heading: "Explore adventure with us",
    image: {
        src: "/images/home/h1.jpg",
        alt: "main hero image sea hawk adventures"
    },
    services: [
        {
            title: "Rafting",
            description: "Experience the thrill of the fast river with our expert guides, ensuring a safe and unforgettable adventure.",
            thumbnail: "",
            packages: [
                {
                    title: "12 Km Rafting",
                    description: "Come along on a thrilling 12 km rafting adventure, guiding through rapids and taking in stunning scenery.",
                    image: {
                        src: "/images/h1.jpg",
                        alt: "ss"
                    },
                    price: 620,
                    link: "",
                },
                {
                    title: "16 Km Rafting",
                    description: "Come along on a thrilling 16 km rafting adventure, guiding through rapids and taking in stunning scenery.",
                    image: {
                        src: "/images/h2.jpg",
                        alt: "ss"
                    },
                    price: 620,
                    link: "",
                },
                {
                    title: "16 Km Rafting",
                    description: "Come along on a thrilling 16 km rafting adventure, guiding through rapids and taking in stunning scenery.",
                    image: {
                        src: "/images/h3.jpg",
                        alt: "ss"
                    },
                    price: 620,
                    link: "",
                }
            ]
        },
        {
            title: "Kayaking",
            description: "Experience the thrill of the fast river with our expert guides, ensuring a safe and unforgettable adventure.",
            thumbnail: "",
            packages: [
                {
                    title: "12 ",
                    description: "Come along on a thrilling 12 km rafting adventure, guiding through rapids and taking in stunning scenery.",
                    image: {
                        src: "/images/h1.jpg",
                        alt: "ss"
                    },
                    price: 620,
                    link: "",
                },
                {
                    title: "16 ",
                    description: "Come along on a thrilling 16 km rafting adventure, guiding through rapids and taking in stunning scenery.",
                    image: {
                        src: "/images/h1.jpg",
                        alt: "ss"
                    },
                    price: 620,
                    link: "",
                }
            ]
        },
    ]
};

