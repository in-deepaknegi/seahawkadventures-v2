import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/lib/motion";

const blogPosts = [
    {
        image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974725/img-3102.jpg",
        date: { day: "04", month: "OCT" },
        category: "ACTIVITIES",
        comments: 0,
        title: "What to expect on your first rafting trip",
    },
    {
        image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974725/img-3104.jpg",
        date: { day: "04", month: "OCT" },
        category: "ACTIVITIES",
        comments: 0,
        title: "Top 10 best places for rafting destinations",
    },
    {
        image: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974725/img-3101.jpg",
        date: { day: "04", month: "OCT" },
        category: "ACTIVITIES",
        comments: 0,
        title: "The right equipment for different levels of rafting",
    },
];

export default function BlogSection() {
    return (
        <section className="bg-white py-40">
            <div className="mx-auto max-w-[90%] px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <motion.span
                        className="font-insm text-sm uppercase tracking-wider text-gray-600"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        FEATURED ARTICLES
                    </motion.span>
                    <motion.h2
                        className="mt-4 font-insr text-4xl text-gray-900 md:text-5xl"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        A blog for Rafting Enthusiasts
                    </motion.h2>
                    <motion.div
                        className="mt-4 flex justify-center"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <svg
                            className="h-6 w-6 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            className="group overflow-hidden bg-white shadow-lg"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={1080}
                                    height={680}
                                    className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="relative px-6 py-10">
                                <div className="mb-3 flex items-center space-x-4 text-sm text-gray-600">
                                    <span>{post.category}</span>
                                    <span>•</span>
                                    <span>{post.comments} Comments</span>
                                </div>
                                <h3 className="font-insr text-2xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                                    {post.title}
                                </h3>
                                <div className="absolute -top-8 right-4 z-40 bg-black/90 p-3 text-center text-white">
                                    <div className="text-3xl font-bold">
                                        {post.date.day}
                                    </div>
                                    <div className="text-sm uppercase">
                                        {post.date.month}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
