import React from 'react';
import { ComponentProps } from '@/types/global';
import Image from 'next/image';

const Feature: React.FC<FeatureProps> = (props) => {
    const { image } = {
        ...FeatureDefaults,
        ...props
    };
    return (
        <section className='relative o-layout overflow-hidden py-24 h-[200vh] isolate'>
           

            <div className='absolute top-0 h-full w-full bg-gradient-to-t from-white/90 -z-10 to-white/10' />


            <div className='mx-auto max-w-[90%] px-5 z-40 md:px-0 relative'>
                <h2 className='text-[4vw] leading-[8rem] flex flex-col text-black uppercase font-clarm'>
                    Our Experiences
                </h2>
            </div>
        </section>

    );
};

export default Feature;

type FeatureProps = React.ComponentPropsWithoutRef<"section"> & Partial<ComponentProps>;

const FeatureDefaults: ComponentProps = {
    heading: "Explore adventure with us",
    image: {
        src: "/images/home/fsdfdf.jpg",
        alt: "main hero image sea hawk adventures"
    },
};

