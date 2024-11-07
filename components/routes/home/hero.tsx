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
        <section className="relative h-screen font-insr">
            <div className="absolute size-full">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="flex flex-col border p-4 text-center backdrop-blur-lg">
                        <video
                            src="/videos/v1.mp4"
                            autoPlay={true}
                            loop={true}
                            muted
                            className="aspect-square w-[25rem] object-cover"
                        />

                        <h2 className="mt-5 font-oggr text-4xl text-black">
                            Sea hawk adventures
                        </h2>
                        <p className="max-w-sm text-sm text-black">
                            Kōzōwood engineered this ambitious project exclusively with mixed
                            mass timber construction techniques.
                        </p>
                    </div>
                </div>
            </div>
            <div className="m-auto h-full max-w-full">
                <div className="flex h-full flex-row">
                    <div className="relative mt-32 flex w-full flex-col pl-10">
                        <h1 className="font-oggr text-8xl">
                            Sea hawk <br />
                            adventures
                        </h1>

                        <p className="mt-5 text-xl text-gray-600">
                            Explore Rafting Experience in Rishikesh.
                        </p>

                        <Link
                            className="mb-[4%] mt-auto flex items-center font-mono text-sm"
                            href={"https://maps.app.goo.gl/eodGFNzZWrLAusB77"}
                            target="_blank"
                        >
                            <Image
                                src={"/images/svg/map.svg"}
                                alt=""
                                width={1080}
                                height={680}
                                className="w-8"
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
