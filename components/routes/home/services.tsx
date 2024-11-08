import React, { useState } from 'react';
import { ComponentProps } from '@/types/global';
import Image from 'next/image';
import Link from 'next/link';
import { Hourglass } from '@/components/icons';

const Services: React.FC<ServicesProps> = (props) => {
    const { heading, description, services } = {
        ...ServicesDefaults,
        ...props
    };

    // Initialize state to track which service's description is expanded (default all are collapsed)
    const [lines, setLines] = useState<boolean[]>(new Array(services?.length).fill(false));

    const toggleLine = (index: number) => {
        setLines((prevLines) => {
            // Collapse all descriptions first, then toggle the selected one
            const newLines = new Array(services?.length).fill(false);
            newLines[index] = !prevLines[index];  // Toggle the clicked index's value
            return newLines;
        });
    };


    return (
        <>

            <div className='h-[30vh]'>
                00
            </div>

            <section className='relative h-full font-insr bg-[#0c0e17] text-white'>

                <div className='absolute size-full flex justify-center z-0'>
                    <div className='flex max-w-[90%] px-10 items-center justify-between size-full'>
                        <div className='bg-gray-400/30 w-[1px] h-full' />
                        <div className='bg-gray-400/30 w-[0.5px] h-full' />
                        <div className='bg-gray-400/30 w-[0.5px] h-full' />
                        <div className='bg-gray-400/30 w-[0.5px] h-full' />
                        <div className='bg-gray-400/30 w-[0.5px] h-full' />
                        <div className='bg-gray-400/30 w-[1px] h-full' />
                    </div>

                </div>

                <div className='mx-auto max-w-full relative md:max-w-[90%] px-10 py-28 '>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h2 className='font-oggr text-6xl'>
                            {heading}
                        </h2>
                        <p className='text-xl text-gray-300 mt-5 max-w-2xl'>
                            If you have a vision, we will build it. <br />From modular to custom projects, all perfectly sustainable.
                        </p>
                    </div>

                    <div className='mt-12'>
                        <div className="flex gap-8">
                            {services?.map((service, i) => (
                                <div
                                    key={i}
                                    className="group flex w-full bg-white backdrop-blur-sm  flex-col transition-all relative duration-700 overflow-hidden border border-dawn-600 p-4 h-full">

                                    <div className=' overflow-hidden'>
                                        <Image
                                            src={service.thumbnail.src}
                                            alt={service.thumbnail.alt}
                                            width={1080}
                                            height={680}
                                            className='object-cover aspect-[16/12] group-hover:scale-105 transition-all duration-300 ease-in'
                                        />
                                    </div>

                                    <div className='pt-5 flex flex-col justify-between text-black h-full'>

                                        <h2 className="text-left font-oggr tracking-wide whitespace-nowrap text-3xl">
                                            {service.title}
                                        </h2>

                                        <div className='flex flex-col gap-1 text-sm mt-5 border border-dawn-600 p-2'>
                                            <div className='flex items-center gap-4 text-black'>
                                                <div>
                                                    <Image
                                                        src={"/images/home/google-calendar.png"}
                                                        alt=''
                                                        width={1080}
                                                        height={680}
                                                        className='w-4'
                                                    />
                                                </div>
                                                <div>
                                                    Timing: Every Day at 9:00 AM and 2:00 PM
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-4 text-black'>
                                                <div>
                                                    <Image
                                                        src={"/images/home/google-maps.png"}
                                                        alt=''
                                                        width={1080}
                                                        height={680}
                                                        className='w-4'
                                                    />
                                                </div>
                                                <div>
                                                    Location: Marine Drive - Shivpuri
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-4 text-black'>
                                                <div>
                                                    <Hourglass className='size-4' />
                                                </div>
                                                <div>
                                                    Duration: 1.5 hours
                                                </div>
                                            </div>


                                        </div>

                                        <p className="mt-5 text-3xl text-black">₹ 620
                                            <span className="text-lg text-gray-500">/person</span>
                                        </p>

                                        <div className='mt-2'>
                                            <p className={`text-[0.95rem] mt-2 w-fit ${lines[i] ? '' : 'line-clamp-2'} text-dawn-800`}>
                                                {service.description}
                                            </p>
                                            <button
                                                onClick={() => toggleLine(i)}
                                                className='text-blue-700'
                                            >
                                                {lines[i] ? "read less..." : "read more..."}

                                            </button>
                                        </div>


                                        <div>

                                        </div>

                                        <Link href={"#"} className=' max-w-[90%] mx-auto mt-5 bg-[#0c0e17] text-center w-full text-white whitespace-nowrap px-4 py-2'>
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section >

        </>

    );
};

export default Services;

type ServicesProps = React.ComponentPropsWithoutRef<"section"> & Partial<ComponentProps>;

const ServicesDefaults: ComponentProps = {
    heading: "Popular Adventure in Rishikesh",
    description: "If you have a vision, we will build it.From modular to custom projects, all perfectly sustainable.",

    services: [
        {
            title: "12 Km River Rafting",
            description: "Rafting from Shivpuri to NIM beach- Rishikesh is called 16km by every operator in Rishikesh but in actual it is not 16km. It is around 11-12km by River and takes around 1 and half to 2 hours to complete. It features roughly seven rapids, both minor and large. Roller Coaster (III+), Golf Course (III+), and Club House are some of the good rapids we run on this stretch (III). Although there are some large waves and hydraulics, these rapids are safe to...",
            thumbnail: {
                src: "/images/rafting/r02.jpg",
                alt: "sdf"
            },
            link: "#"
        },
        {
            title: "16 Km River Rafting",
            description: "Rafting from Shivpuri to NIM beach- Rishikesh is called 16km by every operator in Rishikesh but in actual it is not 16km. It is around 11-12km by River and takes around 1 and half to 2 hours to complete. It features roughly seven rapids, both minor and large. Roller Coaster (III+), Golf Course (III+), and Club House are some of the good rapids we run on this stretch (III). Although there are some large waves and hydraulics, these rapids are safe to...",
            thumbnail: {
                src: "/images/rafting/r12.jpg",
                alt: "sdf"
            },
            link: "#"
        },
        {
            title: "21 Km River Rafting",
            description: "Rafting from Shivpuri to NIM beach- Rishikesh is called 16km by every operator in Rishikesh but in actual it is not 16km. It is around 11-12km by River and takes around 1 and half to 2 hours to complete. It features roughly seven rapids, both minor and large. Roller Coaster (III+), Golf Course (III+), and Club House are some of the good rapids we run on this stretch (III). Although there are some large waves and hydraulics, these rapids are safe to...",
            thumbnail: {
                src: "/images/rafting/r06.jpg",
                alt: "sdf"
            },
            link: "#"
        }
    ]
};

