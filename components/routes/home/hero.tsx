import React from 'react';
import { ComponentProps } from '@/types/global';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC<HeroProps> = (props) => {
    const { } = {
        ...HeroDefaults,
        ...props
    };
    return (
        <section className='relative h-screen font-insr'>

            <div className='absolute size-full'>
                <div className='flex w-full h-full items-center justify-center'>
                    <div className='border p-4 backdrop-blur-lg text-center flex flex-col'>
                        <video
                            src="/videos/v1.mp4"
                            autoPlay={true}
                            loop={true}
                            muted
                            className="w-[25rem] aspect-square object-cover"
                        />

                        <h2 className='text-4xl font-oggr text-black mt-5'>
                            Sea hawk adventures
                        </h2>
                        <p className='max-w-sm text-sm text-black'>
                            Kōzōwood engineered this ambitious project exclusively with mixed mass timber construction techniques.
                        </p>
                    </div>
                </div>
            </div>
            <div className='m-auto max-w-full h-full'>
                <div className='flex flex-row h-full'>
                    <div className='w-full flex flex-col mt-32 pl-10 relative'>
                        <h1 className='text-8xl font-oggr'>
                            Sea hawk <br />adventures
                        </h1>

                        <p className='mt-5 text-gray-600 text-xl'>
                            Explore Rafting Experience in Rishikesh.
                        </p>

                        <Link
                            className='flex items-center mt-auto mb-[4%] text-sm font-mono'
                            href={"https://maps.app.goo.gl/eodGFNzZWrLAusB77"}
                            target='_blank'>
                            <Image
                                src={"/images/svg/map.svg"}
                                alt=''
                                width={1080}
                                height={680}
                                className='w-8'
                            />
                            30.137240, 78.388864
                        </Link>

                    </div>
                    <div className='w-full'>
                        <video
                            src="/videos/v1.mp4"
                            autoPlay={true}
                            loop={true}
                            muted
                            className=" w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

type HeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<ComponentProps>;

const HeroDefaults: ComponentProps = {
    // Default prop values
};

