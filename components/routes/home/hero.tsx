import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { CldImage } from "next-cloudinary";

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const rounded = useTransform(scrollYProgress, [0, 1], ["1rem", "0rem"]);

    const pictures = [
        {
            type: "video",
            src: "/video/v1.mp4",
            scale: scale4,
        },
        {
            type: "image",
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3508.jpg",
            scale: scale5,
            customClass: "-top-[29vh] left-20 w-[35vw] h-[27vh]",
        },
        {
            type: "image",
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3500.jpg",
            scale: scale6,
            customClass: "top-[-10vh] left-[-27.5vw] w-[20vw] h-[45vh]",
        },
        {
            type: "image",
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3503.jpg",
            scale: scale5,
            customClass: "left-[27.5vw] w-[25vw] h-[25vh]",
        },
        {
            type: "image",
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3502.jpg",
            scale: scale6,
            customClass: "top-[28vh] left-[5vw] w-[20vw] h-[25vh]",
        },
        {
            type: "image",
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
            scale: scale8,
            customClass: "top-[28vh] left-[-22vw] w-[20vw] h-[25vh]",
        },
        {
            type: "image",
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3104.jpg",
            scale: scale9,
            customClass: "top-[28vh] left-[26vw] w-[13vw] h-[16vh]",
        },
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="font-oggr text-[5rem]">Sea Hawk Adventures</h1>
                <p className="text-neutral-700 font-insr text-lg max-w-xl">
                    Sea Hawk Adventures crafts unparalleled adventure
                    experiences for rafting, kayaking and camping.
                </p>
            </div>
            <div ref={container} className="relative h-[300vh]">
                <div className="sticky top-0 h-[100vh] overflow-hidden">
                    {pictures.map(
                        ({ type, src, scale, customClass }, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    style={{ scale }}
                                    className="absolute top-0 flex h-full w-full items-center justify-center"
                                >
                                    <div
                                        className={`relative h-[25vh] w-[25vw] ${customClass}`}
                                    >
                                        {type === "video" ? (
                                            <motion.video
                                                style={{
                                                    borderRadius: rounded,
                                                }}
                                                autoPlay
                                                loop
                                                muted
                                                className="absolute h-full w-full -mt-0.5 rounded-2xl object-cover"
                                            >
                                                <source
                                                    src={src}
                                                    type="video/mp4"
                                                />
                                                Your browser does not support
                                                the video tag.
                                            </motion.video>
                                        ) : (
                                            <CldImage
                                                width="1980"
                                                height="1020"
                                                src={src}
                                                sizes="100vw"
                                                alt="Description of my image"
                                                // className={customClass}
                                                className="absolute h-full w-full rounded-2xl object-cover"
                                            />
                                            // <Image
                                            //     src={src}
                                            //     fill
                                            //     alt="image"
                                            // />
                                        )}
                                    </div>
                                </motion.div>
                            );
                        },
                    )}
                </div>
            </div>
        </>
    );
}
