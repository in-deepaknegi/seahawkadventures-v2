import React from "react";
import { ComponentProps } from "@/types/global";
import Link from "next/link";
import Image from "next/image";
import { Call, Mail } from "@/components/icons";

const Hero: React.FC<HeroProps> = (props) => {
    const {} = {
        ...HeroDefaults,
        ...props,
    };
    return (
        <section className="relative h-[95vh] p-2 overflow-hidden font-insr">
            <div className="absolute z-30 hidden size-full">
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
                        <p className="max-w-sm text-xs md:text-sm text-black">
                            Sea Hawk Adventures crafts unparalleled adventure
                            experiences for rafting, kayaking and camping.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative m-auto h-full max-w-full">
                <div className="md:px-0">
                    <div className="absolute bottom-10 z-30 w-full">
                        <h1 className="py-4 font-oggr text-6xl text-center w-full text-black md:text-[9.5vw] md:leading-[6rem] ">
                            Sea hawk
                            adventures
                        </h1>

                        <p className="mx-auto text-center w-full py-5 text-lg text-black md:text-xl">
                            Experience unforgettable hiking, rafting, and
                            kayaking in Rishikesh&apos;s stunning landscapes.
                        </p>

                        <div className="relative z-40 flex items-center flex-wrap justify-center gap-3 md:gap-10 font-mono text-base md:items-start">
                            <Link
                                className="mt-auto flex items-center gap-2 font-mono "
                                href="tel:+91 97566 20538"
                                target="_blank"
                            >
                                <Call className="size-5 text-gray-700" />
                                +91 97566 20538
                            </Link>

                            <Link
                                className="mt-auto flex items-center gap-2 font-mono"
                                href="mailto:office@seahawkadventures.com"
                                target="_blank"
                            >
                                <Mail className="size-5 text-gray-700" />
                                office@seahawkadventures.com
                            </Link>
                            <Link
                                className="mt-auto flex items-center gap-2 font-mono"
                                href={
                                    "https://maps.app.goo.gl/eodGFNzZWrLAusB77"
                                }
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

                    <div className="absolute bg-gradient-to-t rounded-b-3xl from-white/80 h-[25rem] w-full bottom-0 z-0"/>

                    <div className="absolute -z-10 h-full w-full">
                        <video
                            src="/videos/v1.mp4"
                            autoPlay={true}
                            loop={true}
                            muted
                            width={1980}
                            height={1020}
                            className="aspect-square rounded-3xl h-full w-full object-cover object-center"
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
