import { ComponentProps } from '@/types/global';
import Image, { ImageProps } from 'next/image';
import React from 'react';

const Hero: React.FC<HeroProps> = (props) => {
    const { heading, sub_heading, image } = {
        ...HeroDefaults,
        ...props
    };
    return (
        <section className='relative overflow-hidden h-[83vh] z-40'>
           {image?.src && (
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={1280}
                    height={780}
                    className='absolute -z-10 top-0 w-full h-full object-cover'
                />
            )}
            <div className='absolute top-0 bg-gradient-to-t from-black/50 z-0 to-black/10 w-full h-full' />
            <div className='mx-auto max-w-[90%] px-5 md:px-0 h-full relative'>
                <div className='flex items-end pb-36 align-middle h-full justify-center'>
                    <h1 className='text-[6vw] leading-[5rem] flex flex-col text-white font-clam'>
                        {heading}
                        <span className='flex items-center gap-5'>
                            <span>
                                change
                            </span>
                            <div className='h-[2px] w-40 bg-white' />
                            <span className='text-[#50a1ff]'>through rafting</span>
                        </span>
                    </h1>
                    <p className='text-[6vw] right-10 stroke-p absolute bottom-5 text-white font-clam uppercase'>
                        {sub_heading}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

type HeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<ComponentProps>;

const HeroDefaults: ComponentProps = {
    heading: "Driving Community",
    sub_heading: "Since 2006",
    image: {
        src: "/images/h1.jpg",
        alt: "main hero image sea hawk adventures"
    }
};

