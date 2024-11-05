"use client";
import { useEffect, useState } from "react";
import { animate, delay, motion } from "framer-motion";

const words = [
    "Hello",
    "Bonjour",
    "Ciao",
    "नमस्ते",
    "নমস্কার",
    "ಹಲೋ",
    "やあ",
    "Olà",
    "Ni Hao",
    "Kon'nichiwa",
    "Hallå",
    "Guten tag",
    "Merhaba",
];

export default function Index({ loading }: { loading: boolean }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === words.length - 1) return;
        setTimeout(
            () => {
                setIndex(index + 1);
            },
            index === 0 ? 1000 : 250,
        );
    }, [index]);

    // Animation variants for video box
    const videoAnimation = {
        initial: {
            top: "40%", // Start at the bottom of the screen
            left: "50%", // Center horizontally
            width: "400px", // Small initial width
            height: "100px", // Small initial height
            x: "-50%", // Adjust to truly center horizontally (because left is 50%)
        },
        animate: {
            top: "0", // Slide up to the center
            left: "50%", // Keep it centered horizontally
            width: "100vw", // Expand width to full screen
            height: "100vh", // Expand height to full screen
            x: "-50%", // Adjust to keep it centered horizontally
            transition: {
                duration: 2.5, // Duration of the animation
                delay: 1,
                ease: "easeOut", // Easing function for smoothness
            },
        },
    };

    const video = {
        initial: {
            borderRadius: "1rem"
        },
        animate: {
            borderRadius: "0rem",
            transition: {
                duration: 1,
                delay: 1,
                ease: "easeOut",
            },
        }
    }

    const slideUp = {
        initial: {
            opacity: 0, // Start with opacity 0 to avoid flicker
            y: "100vh", // Start just below the screen (off-screen)
        },
        animate: {
            opacity: 1, // Fade in
            y: "60%", // Slide up to the center vertically
            transition: {
                duration: 3, // Duration of the slide-up effect
                ease: "easeOut",
            },
        },
    };


    return (
        <>
            <motion.div className="bg-white relative h-screen w-full">
                <motion.div
                variants={slideUp}
                initial="initial"
                animate="animate"
                    className=""
                >

                    <motion.div
                        variants={videoAnimation}
                        initial="initial"
                        animate="animate"
                        className="flex items-center absolute top-1/2 rounded-2xl"
                    >
                        <motion.video
                            variants={video}
                            initial="initial"
                            animate="animate"
                            src="/videos/v1.mp4" autoPlay={true} loop={true} muted
                        />
                        {/* <video src="/videos/v1.mp4" autoPlay={true} loop={true} muted className="rounded-2xl" /> */}
                    </motion.div>

                </motion.div>
            </motion.div>
        </>
    );
}
