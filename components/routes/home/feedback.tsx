// "use client";

// import { useState, useMemo } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Wave3 } from "../shared/wave";
// import { feedback as data } from "@/config/feedback";

// export default function Feedback() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextTestimonial = () => {
//         setCurrentIndex((prev) =>
//             prev === data.length - 1 ? 0 : prev + 1,
//         );
//     };

//     const prevTestimonial = () => {
//         setCurrentIndex((prev) =>
//             prev === 0 ? data.length - 1 : prev - 1,
//         );
//     };

//     // Calculate visible testimonials using useMemo
//     const visibleTestimonials = useMemo(() => {
//         const visible = [];
//         for (let i = 0; i < data.length; i++) {
//             const index = (currentIndex + i) % data.length;
//             visible.push(data[index]);
//             if (visible.length === 3) break;
//         }
//         return visible;
//     }, [currentIndex]);

//     return (
//         <section id="testimonials" className="relative overflow-hidden">
//             <Wave3 />
//             <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-10">
//                 <div className="mb-12 text-center">
//                     <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
//                         What Our Adventurers Say
//                     </h2>
//                     <p className="mx-auto max-w-3xl text-lg">
//                         Hear from those who have experienced the thrill with Sea
//                         Hawk Adventure
//                     </p>
//                 </div>

//                 <div className="relative">
//                     {/* Desktop view - show 3 testimonials */}
//                     <div className="hidden gap-6 md:grid md:grid-cols-3">
//                         {visibleTestimonials.map((testimonial, index) => (
//                             <TestimonialCard
//                                 key={index}
//                                 testimonial={testimonial}
//                             />
//                         ))}
//                     </div>

//                     {/* Mobile view - show 1 testimonial */}
//                     <div className="md:hidden">
//                         <TestimonialCard
//                             testimonial={data[currentIndex]}
//                         />
//                     </div>

//                     {/* Navigation buttons */}
//                     <button
//                         onClick={prevTestimonial}
//                         className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg md:-left-6"
//                         aria-label="Previous testimonial"
//                     >
//                         <ChevronLeft className="h-6 w-6 text-blue-600" />
//                     </button>
//                     <button
//                         onClick={nextTestimonial}
//                         className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg md:-right-6"
//                         aria-label="Next testimonial"
//                     >
//                         <ChevronRight className="h-6 w-6 text-blue-600" />
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function TestimonialCard({
//     testimonial,
// }: {
//     testimonial: (typeof data)[0];
// }) {
//     return (
//         <Card className="h-full bg-white shadow-md">
//             <CardContent className="flex h-full flex-col p-6">
//                 <div className="mb-4 flex items-center gap-4">
//                     <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 bg-gradient-to-br from-blue-500 to-violet-600 text-2xl font-medium text-white">
//                         {testimonial.name.charAt(0)}
//                     </div>
//                     <div>
//                         <h4 className="font-semibold">{testimonial.name}</h4>
//                         <div className="mt-1 flex">
//                             {Array.from({ length: 5 }).map((_, i) => (
//                                 <Star
//                                     key={i}
//                                     className={`h-4 w-4 ${i < testimonial.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <p className="flex-grow leading-relaxed text-gray-700">
//                     {testimonial.comment}
//                 </p>
//             </CardContent>
//         </Card>
//     );
// }

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { feedback as data } from "@/config/feedback";
import { Star } from "lucide-react";
import { Wave3 } from "../shared/wave";
const reviews = [
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        avatar: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        avatar: "https://avatar.vercel.sh/jack",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        avatar: "https://avatar.vercel.sh/james",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        avatar: "https://avatar.vercel.sh/jane",
    },
    // Add more reviews as needed from the feedback data
];

const firstRow = data.slice(0, data.length / 2);
const secondRow = data.slice(data.length / 2);

const ReviewCard = ({
    name,
    username,
    comment,
    stars,
    index,
}: {
    name: string;
    username: string;
    comment: string;
    stars: number;
    index: number;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-[350px] cursor-pointer overflow-hidden rounded-xl border p-6",
                "border-gray-950/[.1] bg-white",
            )}
        >
            <div className="flex items-start gap-4">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <div
                            className={`flex size-10 items-center justify-center rounded-full bg-gradient-to-br text-2xl text-white ${index % 2 === 0 ? "from-blue-400 to-violet-600" : "from-green-500 to-yellow-400"}`}
                        >
                            {name.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                            <figcaption className="font-medium text-gray-900">
                                {name}
                            </figcaption>
                            <span className="text-sm text-gray-500">
                                {username}
                            </span>
                        </div>
                    </div>
                    {comment ? (
                        <>
                            <div className="mt-5 flex items-center gap-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-3 w-3 ${i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>
                            <p className="mt-2 line-clamp-3 text-sm text-gray-700">
                                {comment}
                            </p>
                        </>
                    ) : (
                        <div className="mt-5 flex items-center gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </figure>
    );
};

export default function Feedback() {
    return (
        <div className="relative overflow-hidden">
            <Wave3 />
            <div className="py-20 relative z-10">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                        What Our Adventurers Say
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
                        Hear from those who have experienced the thrill with Sea
                        Hawk Adventure
                    </p>
                </div>
                <Marquee pauseOnHover className="[--duration:120s]">
                    {firstRow.map((review, i) => (
                        <ReviewCard
                            key={`${review.username}-${i}`}
                            {...review}
                            index={i}
                        />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:120s]">
                    {secondRow.map((review, i) => (
                        <ReviewCard
                            key={`${review.username}-${i}`}
                            {...review}
                            index={i}
                        />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
            </div>
        </div>
    );
}
