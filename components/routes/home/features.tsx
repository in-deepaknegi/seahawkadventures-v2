import React from 'react';
import { ComponentProps } from '@/types/global';

const Feature: React.FC<FeatureProps> = (props) => {
    const { } = {
        ...FeatureDefaults,
        ...props
    };
    return (
        <section className='relative o-layout overflow-hidden py-24 h-[200vh] isolate'>


            <div className='mx-auto max-w-[90%] px-5 md:px-0 relative'>
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
};

