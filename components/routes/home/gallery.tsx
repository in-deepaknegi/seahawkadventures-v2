"use client";

import { Block, Grid } from "@/components/motion/grid";
import { CldImage, CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Gallery() {
    return (
        <>
            <section id="gallery" className="py-16">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-16 xl:px-10">
                    <div className="mx-auto max-w-3xl text-center md:mb-6">
                        <h5 className="text-primary mb-3">VISUAL JOURNEY</h5>
                        <h2 className="mb-5 text-3xl font-medium md:text-4xl xl:text-5xl">
                            Adventure Gallery
                        </h2>

                        <p className="text-gray-600">
                            Glimpses of the thrilling experiences that await you
                        </p>
                    </div>

                    <Grid className="">
                        <Block className="col-span-12 row-span-2 md:col-span-6">
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1101.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                        </Block>
                        <Block className="col-span-12 row-span-2 grid grid-cols-2 gap-2 md:col-span-6 md:gap-4">
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1113.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1409.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1211.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745081448/img_1406.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                        </Block>

                        <Block className="col-span-12 h-80 md:col-span-8">
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745051443/img_1213.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                        </Block>

                        <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-4">
                            <CldImage
                                src="https://res.cloudinary.com/dkuixrz40/image/upload/v1745082693/img_1102.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                className="aspect-video size-full rounded-lg object-cover"
                            />
                        </Block>
                    </Grid>

                    <div className="mx-auto max-w-3xl text-center md:mb-6">
                        <h2 className="mb-5 text-3xl font-medium md:text-4xl xl:text-5xl">
                            Videos
                        </h2>

                        <p className="text-gray-600">
                            Glimpses of the thrilling experiences that await you
                        </p>
                    </div>

                    <Grid>
                        <Block className="col-span-4">
                            <video
                                width="1920"
                                height="1080"
                                autoPlay
                                loop
                                muted
                                controls
                                src="https://res.cloudinary.com/dkuixrz40/video/upload/v1745082720/vid_1150.mp4"
                                className="h-full w-full"
                            />
                        </Block>
                        <Block className="col-span-4">
                            <video
                                width="1920"
                                height="1080"
                                autoPlay
                                loop
                                muted
                                controls
                                src="https://res.cloudinary.com/dkuixrz40/video/upload/v1745082740/vid_1151.mp4"
                                className="h-full w-full"
                            />
                        </Block>
                        <Block className="col-span-4">
                            <video
                                width="1920"
                                height="1080"
                                autoPlay
                                loop
                                muted
                                controls
                                src="https://res.cloudinary.com/dkuixrz40/video/upload/v1745259837/vid_1350.mp4"
                                className="h-full w-full"
                            />
                        </Block>
                    </Grid>
                </div>
            </section>
        </>
    );
}
