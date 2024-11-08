import React from "react";
import { ComponentProps } from "@/types/global";
import Link from "next/link";
import Image from "next/image";
import { Call, Mail } from "@/components/icons";

const Hero: React.FC<HeroProps> = (props) => {
    const { } = {
        ...HeroDefaults,
        ...props,
    };
    return (
        <section className="relative h-[104vh] overflow-hidden -mt-[4.7rem] font-insr">
            <div className="absolute z-30 hidden size-full md:block">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="flex flex-col border p-4 text-center backdrop-blur-lg">
                        <video
                            src="/videos/v1.mp4"
                            autoPlay={true}
                            loop={true}
                            muted
                            className="aspect-square w-[25rem] object-cover"
                        />

                        <h2 className="mt-5 font-oggr  text-4xl text-black">
                            Sea hawk adventures
                        </h2>
                        <p className="max-w-sm text-sm text-black">
                        Sea Hawk Adventures crafts unparalleled adventure experiences for rafting, kayaking and camping. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="m-auto h-full max-w-full relative">
                <div className="flex h-full flex-col px-8 md:px-0 md:flex-row">
                    <div className="relative mb-20 flex w-full flex-col items-center pl-0 pt-44 text-center text-black md:items-start md:pl-10 md:text-left">
                        <h1 className="py-4 font-oggr text-6xl md:text-[6.5vw] md:leading-[6rem] ">
                            Sea hawk <br />
                            adventures
                        </h1>

                        <p className="mx-auto max-w-[90%] py-5 text-lg md:text-xl text-gray-600 md:mx-0 md:max-w-[60%]">
                            Experience unforgettable hiking, rafting, and kayaking in
                            Rishikesh&apos;s stunning landscapes.
                        </p>

                        <div className="flex relative z-40 flex-col gap-3 text-sm justify-center items-center md:items-start font-mono mt-10 md:mt-auto">
                            <Link
                                className="mt-auto flex items-center gap-2 font-mono text-sm"
                               href="tel:+91 97566 20538"
                                target="_blank"
                            >
                                <Call className="size-5 text-gray-700" />
                                +91 97566 20538
                            </Link>
                            
                            <Link
                                className="mt-auto flex items-center gap-2 font-mono text-sm"
                                href="mailto:office@seahawkadventures.com"
                                target="_blank"
                            >
                                <Mail className="size-5 text-gray-700" />
                                office@seahawkadventures.com
                            </Link>
                            <Link
                                className="mt-auto flex items-center gap-2 font-mono text-sm"
                                href={"https://maps.app.goo.gl/eodGFNzZWrLAusB77"}
                                target="_blank"
                            >
                                <Image
                                    src={"/images/home/google-maps.png"}
                                    alt=""
                                    width={1080}
                                    height={680}
                                    className="w-5"
                                />
                                30.137240, 78.388864
                            </Link>
                        </div>



                    </div>
                    <div className="w-full">
                        <video
                            src="/videos/v1.mp4"
                            autoPlay={true}
                            loop={true}
                            muted
                            className="aspect-video h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

type HeroProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<ComponentProps>;

const HeroDefaults: ComponentProps = {
    // Default prop values
};
