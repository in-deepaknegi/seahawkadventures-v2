import React from 'react';
import { ComponentProps } from '@/types/global';
import { Facebook, Instagram, Whatsapp } from '../icons';

const SocialIcons: React.FC<SocialIconsProps> = (props) => {
    const { } = {
        ...SocialIconsDefaults,
        ...props
    };
    return (
        <section className='fixed rounded-xl bottom-3 md:bottom-10 left-0 top-[60%] z-50'>
            <div className='grid grid-rows-3'>
                <div className='bg-green-500 flex items-center justify-center p-0.5'>
                    <Whatsapp className='size-9 text-white' />
                </div>
                <div className='bg-[#1877f2] flex items-center justify-center'>
                    <Facebook className='size-8 text-white' />
                </div>
                <div className='bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] p-1 flex items-center justify-center'>
                    <Instagram />
                </div>
            </div>
        </section>
    );
};

export default SocialIcons;

type SocialIconsProps = React.ComponentPropsWithoutRef<"section"> & Partial<ComponentProps>;

const SocialIconsDefaults: ComponentProps = {
    // Default prop values
};

