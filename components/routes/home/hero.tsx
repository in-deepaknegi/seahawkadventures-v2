import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Logo from "@/components/logo";
import { ArrowRight } from "lucide-react";

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const scale4 = useTransform(scrollYProgress, [0, 0.8], [1, 3]);
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
            customClass:
                "-top-[29vh] hidden md:block left-20 w-[35vw] h-[27vh]",
        },
        {
            type: "image",
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3500.jpg",
            scale: scale6,
            customClass:
                "top-[-10vh] left-[-27.5vw] hidden md:block w-[20vw] h-[45vh]",
        },
        {
            type: "image",
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3503.jpg",
            scale: scale5,
            customClass: "left-[27.5vw] w-[25vw] h-[25vh] hidden md:block",
        },
        {
            type: "image",
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3502.jpg",
            scale: scale6,
            customClass:
                "top-[28vh] left-[-3vw] w-[20vw] h-[25vh] hidden md:block",
        },
        {
            type: "image",
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
            scale: scale8,
            customClass:
                "top-[28vh] left-[-30vw] w-[20vw] h-[25vh] hidden md:block",
        },
        {
            type: "image",
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3110.jpg",
            scale: scale9,
            customClass:
                "top-[28vh] left-[24vw] w-[20vw] h-[25vh] hidden md:block",
        },
    ];

    return (
        <>
            {/* <section className="relative">
                <div className="flex flex-col items-center justify-center gap-3 px-5 text-center md:gap-0 md:px-0">
                    <h1 className="font-oggr text-[4rem] leading-[4rem] md:leading-[5rem] md:text-[5rem]">
                        Sea Hawk Adventures
                    </h1>
                    <p className="max-w-xl font-insr text-base text-neutral-700 md:text-lg">
                        Sea Hawk Adventures crafts unparalleled adventure
                        experiences for rafting, kayaking and camping.
                    </p>
                </div>

                <div
                    ref={container}
                    className="relative hidden h-[300vh] md:block"
                >
                    <div className="sticky top-0 h-[100vh] overflow-hidden">
                        {pictures.map(
                            ({ type, src, scale, customClass }, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        style={{ scale }}
                                        className="absolute top-0 flex h-full w-full items-start justify-center md:items-center"
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
                                                    className="absolute -mt-0.5 h-full w-full rounded-2xl object-cover"
                                                >
                                                    <source
                                                        src={src}
                                                        type="video/mp4"
                                                    />
                                                    Your browser does not
                                                    support the video tag.
                                                </motion.video>
                                            ) : (
                                                <CldImage
                                                    width="1980"
                                                    height="1020"
                                                    src={src}
                                                    sizes="100vw"
                                                    alt="Description of my image"
                                                    className="absolute h-full w-full rounded-2xl object-cover"
                                                />
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            },
                        )}
                    </div>
                </div>

                <div className="mt-5 md:mt-0 md:hidden block px-5 md:px-0">
                    <motion.video
                        autoPlay
                        loop
                        muted
                        className="-mt-0.5 h-full w-full rounded-2xl object-cover"
                    >
                        <source src="/video/v1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </motion.video>
                </div>
            </section> */}
            <section className="relative font-insr">
                <div className="mx-auto max-w-[90%]">
                    <div className="relative h-[62vh] w-full">
                        <motion.video
                            autoPlay
                            loop
                            muted
                            className="h-full w-full object-cover"
                        >
                            <source
                                src="https://res.cloudinary.com/dkuixrz40/video/upload/v1735366866/16232801-uhd_3840_2160_30fps_u0e9ru.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </motion.video>

                        <div className="absolute bottom-10 left-0 px-10 z-30 w-full">
                            <div className="flex justify-between w-full items-center">
                                <motion.h1
                                    className="font-oggm text-5xl leading-tight text-white lg:text-7xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Experience the <br />
                                    <span className="text-[#2f47db]">
                                        {" "}
                                        Thrill{" "}
                                    </span>
                                    of Adventure
                                </motion.h1>

                                <motion.button
                                    className="flex items-center gap-2 mt-auto rounded-lg bg-[#2f47db] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-800"
                                    whileHover={{ scale: 1.025 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Book Adventure{" "}
                                    <ArrowRight className="h-5 w-5" />
                                </motion.button>
                            </div>
                        </div>
                        <div className="absolute bottom-0 h-[20vh] w-full bg-gradient-to-t from-black/90" />
                    </div>
                </div>
                <Logo />
            </section>
        </>
    );
}
