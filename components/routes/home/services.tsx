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
        <section className='relative h-full py-28 font-insr'>
            <div className='mx-auto max-w-full px-10'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h2 className='font-oggr text-5xl'>
                        {heading}
                    </h2>
                    <p className='text-xl text-gray-600 mt-5 max-w-2xl'>
                        If you have a vision, we will build it. <br />From modular to custom projects, all perfectly sustainable.
                    </p>
                </div>

                <div className='mt-10'>
                    <div className="flex space-x-4">
                        {services?.map((service, i) => (
                            <div
                                key={i}
                                className="group flex-1 hover:flex-[1.5] transition-all relative duration-700 bg-gray-200 overflow-hidden rounded-lg h-[22rem]">

                                <Image
                                    src={service.thumbnail.src}
                                    alt={service.thumbnail.alt}
                                    width={1080}
                                    height={680}
                                    className='absolute w-full h-full object-cover object-center'
                                />
                                <div className='absolute size-full bg-gradient-to-t from-black/30 to-black/30' />

                                <div className='p-6 relative flex flex-col justify-between text-white h-full'>
                                    <p className=' text-lg font-insr'>
                                        {service.description}
                                    </p>


                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-left font-oggr whitespace-nowrap text-4xl">
                                            {service.title}
                                        </h2>
                                       

                                        <Link href={"#"} className='bg-white group-hover:block hidden text-black w-fit ml-auto whitespace-nowrap px-4 py-1 rounded-full'>
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>


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
            title: "12 Km River Rafting",
            description: "Tailored houses to answer your architectural vision.",
            thumbnail: {
                src: "/images/h2.jpg",
                alt: "sdf"
            },
            link: "#"
        },
        {
            title: "12 Km River Rafting",
            description: "Tailored houses to answer your architectural vision.",
            thumbnail: {
                src: "/images/h3.jpg",
                alt: "sdf"
            },
            link: "#"
        }
    ]
};

