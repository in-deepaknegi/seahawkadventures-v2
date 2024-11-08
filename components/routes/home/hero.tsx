import React from "react";
import { ComponentProps } from "@/types/global";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC<HeroProps> = (props) => {
    const { } = {
        ...HeroDefaults,
        ...props,
    };
    return (
        <section className="relative h-[110vh] font-insr">
            <div className="absolute size-full z-50">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="flex flex-col border p-4 text-center backdrop-blur-lg">
                        <video
                            src="/videos/v1.mp4"
                            autoPlay={true}
                            loop={true}
                            muted
                            className="aspect-square w-[25rem] object-cover"
                        />

                        <h2 className="mt-5 font-oggr  text-4xl text-white">
                            Sea hawk adventures
                        </h2>
                        <p className="max-w-sm text-sm text-white">
                            Kōzōwood engineered this ambitious project exclusively with mixed
                            mass timber construction techniques.
                        </p>
                    </div>
                </div>
            </div>
            <div className="m-auto h-full max-w-full">
                <div className="flex h-full flex-row">
                    <div className="relative pt-32 flex w-full flex-col mb-20 bg-[#0c0e17] text-white">
                        <h1 className="font-oggr text-8xl border-t border-b py-4 pl-10 border-gray-400/30">
                            Sea hawk <br />
                            adventures
                        </h1>

                        <p className="py-5 text-xl text-gray-600 pl-10 border-b border-gray-400/30">
                            Explore Rafting Experience in Rishikesh.
                        </p>

                        <Link
                            className="mb-[4%] mt-auto flex gap-2 items-center font-mono text-sm"
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
                    <div className="w-full">
                        <video
                            src="/videos/v1.mp4"
                            autoPlay={true}
                            loop={true}
                            muted
                            className=" h-full w-full object-cover object-center"
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
