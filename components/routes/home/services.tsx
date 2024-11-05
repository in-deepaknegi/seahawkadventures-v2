import React from 'react';
import { ComponentProps } from '@/types/global';
import Image from 'next/image';
import Link from 'next/link';

const Services: React.FC<ServicesProps> = (props) => {
    const { heading, description, services } = {
        ...ServicesDefaults,
        ...props
    };
    return (
        <section className='relative h-full py-28 font-insr bg-white'>
            
            <div className='mx-auto max-w-full md:max-w-[90%] px-10'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h2 className='font-oggr text-5xl'>
                        {heading}
                    </h2>
                    <p className='text-xl text-gray-600 mt-5 max-w-2xl'>
                        If you have a vision, we will build it. <br />From modular to custom projects, all perfectly sustainable.
                    </p>
                </div>


                

                <div className='mt-20'>
                    <div className="flex space-x-10">
                        {services?.map((service, i) => (
                            <div
                                key={i}
                                className="group flex bg-dusk-100/50 backdrop-blur-sm  flex-col transition-all relative duration-700 overflow-hidden border p-4 h-full">

                                <Image
                                    src={service.thumbnail.src}
                                    alt={service.thumbnail.alt}
                                    width={1080}
                                    height={680}
                                    className='object-cover aspect-square brightness-[0.7] group-hover:brightness-100 transition-all duration-300 ease-in'
                                />

                                <div className=' pt-4 flex flex-col justify-between text-black h-full'>

                                    <h2 className="text-left font-oggr whitespace-nowrap text-4xl">
                                        {service.title}
                                    </h2>
                                    <p className='text-sm mt-2'>
                                        {service.description}
                                    </p>

                                    <Link href={"#"} className='bg-white text-lg mt-5 text-black w-fit whitespace-nowrap px-4 py-1'>
                                        Book Now
                                        <span className='absolute inset-0'></span>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section >


    );
};

export default Services;

type ServicesProps = React.ComponentPropsWithoutRef<"section"> & Partial<ComponentProps>;

const ServicesDefaults: ComponentProps = {
    heading: "River Rafting in Rishikesh",
    description: "If you have a vision, we will build it.From modular to custom projects, all perfectly sustainable.",

    services: [
        {
            title: "12 Km River Rafting",
            description: "Tailored houses to answer your architectural vision.",
            thumbnail: {
                src: "/images/h1.jpg",
                alt: "sdf"
            },
            link: "#"
        },
        {
            title: "16 Km River Rafting",
            description: "Tailored houses to answer your architectural vision.",
            thumbnail: {
                src: "/images/h2.jpg",
                alt: "sdf"
            },
            link: "#"
        },
        {
            title: "21 Km River Rafting",
            description: "Tailored houses to answer your architectural vision.",
            thumbnail: {
                src: "/images/h3.jpg",
                alt: "sdf"
            },
            link: "#"
        }
    ]
};

