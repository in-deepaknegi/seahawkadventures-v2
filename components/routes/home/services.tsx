import { ComponentProps } from '@/types/global';
import Image, { ImageProps } from 'next/image';
import React from 'react';

const Services: React.FC<ServicesProps> = (props) => {
    const { heading, image } = {
        ...ServicesDefaults,
        ...props
    };
    return (
        <section className='relative overflow-hidden h-screen isolate'>
            {image?.src && (
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={1280}
                    height={780}
                    className='absolute -z-10 top-0 w-full h-full object-cover'
                />
            )}

            <div className='absolute top-0 h-full w-full bg-gradient-to-t from-white/50 to-white/10' />


            <div className='mx-auto max-w-[90%] px-5 md:px-0 h-full relative'>
                <div className=''>
                    <h2>
                        {heading}
                    </h2>

                    <div>
                        <ul>
                            <li>
                                Rafting
                            </li>
                        </ul>
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
        src: "/images/home/fsdf.jpg",
        alt: "main hero image sea hawk adventures"
    },
    tabs: [
        {
            title: "Rafting",
            description: "Experience the thrill of the fast river with our expert guides, ensuring a safe and unforgettable adventure.",
            thumbnail: ""
        }
    ]
};

