import React, { useState, useEffect } from "react";
import { feedbackData } from "@/config/feedback";

export const Feedback = () => {
    // State to hold the number of columns
    const [columns, setColumns] = useState(2);

    // Define how many rows you want to display per column, adjust this as per your design
    const rows = 2;

    // Array of background colors for testimonials
    const colors = [
        "bg-red-500",
        "bg-orange-500",
        "bg-amber-500",
        "bg-lime-800",
        "bg-green-800",
        "bg-emerald-800",
        "bg-teal-800",
        "bg-cyan-800",
        "bg-blue-500",
        "bg-indigo-800",
        "bg-violet-800",
        "bg-purple-800",
        "bg-pink-800",
        "bg-rose-800",
    ];

    // Split the feedbackData into chunks (columns) and calculate rows
    const columnsData = Array.from({ length: columns }, (_, colIndex) => {
        const startIndex = colIndex * rows;
        const endIndex = startIndex + rows;
        return feedbackData.slice(startIndex, endIndex);
    });

    // Function to update the number of columns based on screen width
    const updateColumns = () => {
        if (window.innerWidth >= 1024) {
            setColumns(4); // 4 columns on laptop and larger screens
        } else {
            setColumns(2); // 2 columns on mobile and smaller screens
        }
    };

    // Hook to listen for window resize events and update columns
    useEffect(() => {
        updateColumns(); // Set initial columns value based on window size
        window.addEventListener("resize", updateColumns); // Add event listener for resize

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", updateColumns);
        };
    }, []);

    return (
        <section className="relative overflow-hidden py-16 md:py-28">
            <div className="mx-auto max-w-full px-5 md:max-w-[90%] md:px-0">
                <div className="max-w-full md:max-w-[80%] mx-auto">
                    <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-blue-600" />
                        <p className="text-sm  text-neutral-700">Feedbacks</p>
                        <div className="h-[0.5px] w-full bg-neutral-400" />
                    </div>
                    <h2 className="text-5xl mt-5 ">Hear directly from our adventurers</h2>
                </div>
                <div className="overflow-x-auto mt-16">
                    <div
                        className={`grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-10`}
                    >
                        {columnsData.map((column, colIndex) => (
                            <div
                                key={colIndex}
                                className="flex flex-col gap-5 py-10 md:gap-8"
                            >
                                {column.map((testimonial, i) => {
                                    const randomColor =
                                        colors[
                                            Math.floor(
                                                Math.random() * colors.length,
                                            )
                                        ];

                                    return (
                                        <div
                                            key={i}
                                            className="h-fit rounded-xl border border-neutral-100 bg-gradient-to-br from-neutral-50 to-white p-4 shadow-lg md:p-6"
                                        >
                                            <div className="mb-4 flex flex-col items-start gap-4">
                                                <div className="flex w-full flex-col justify-between gap-5 md:flex-row md:items-center md:gap-0">
                                                    <div
                                                        suppressHydrationWarning
                                                        className={`flex size-10 items-center justify-center rounded-full font-mono text-2xl text-white ${randomColor}`}
                                                    >
                                                        {testimonial.name.charAt(
                                                            0,
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h3 className=" text-lg text-gray-900">
                                                            {testimonial.name}
                                                        </h3>
                                                        <p className="text-xs text-neutral-600 md:text-right">
                                                            {
                                                                testimonial.review_date
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p
                                                        className="mb-4 text-sm text-gray-600"
                                                        dangerouslySetInnerHTML={{
                                                            __html: testimonial.review,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
