"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Priya Sharma",
        location: "Delhi, India",
        rating: 5,
        comment:
            "The rafting experience with Sea Hawk Adventure was absolutely thrilling! The guides were professional and ensured our safety throughout. Will definitely come back for more adventures!",
        image: "/placeholder.svg?height=200&width=200",
    },
    {
        name: "John Miller",
        location: "London, UK",
        rating: 5,
        comment:
            "My family and I had an amazing time kayaking with Sea Hawk. The instructors were patient with beginners and the scenery was breathtaking. Highly recommended!",
        image: "/placeholder.svg?height=200&width=200",
    },
    {
        name: "Raj Patel",
        location: "Mumbai, India",
        rating: 4,
        comment:
            "The Himalayan expedition was well-organized and the guides were knowledgeable about the local flora and fauna. A truly memorable experience in the mountains.",
        image: "/placeholder.svg?height=200&width=200",
    },
    {
        name: "Sarah Johnson",
        location: "Sydney, Australia",
        rating: 5,
        comment:
            "As an experienced rafter, I was impressed by the professionalism of Sea Hawk Adventure. They took us through some challenging rapids while maintaining the highest safety standards.",
        image: "/placeholder.svg?height=200&width=200",
    },
    {
        name: "Akshay Kumar",
        location: "Bangalore, India",
        rating: 5,
        comment:
            "The overnight camping expedition was magical. Sleeping under the stars and waking up to the sound of the river - an experience I'll cherish forever!",
        image: "/placeholder.svg?height=200&width=200",
    },
];

export default function Feedback() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1,
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1,
        );
    };

    // Calculate visible testimonials (3 on desktop, 1 on mobile)
    const visibleTestimonials = [];
    for (let i = 0; i < testimonials.length; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visibleTestimonials.push(testimonials[index]);
        if (visibleTestimonials.length === 3) break;
    }

    return (
        <section id="testimonials" className="py-16 ">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-blue-800">
                        What Our Adventurers Say
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-blue-600">
                        Hear from those who have experienced the thrill with Sea
                        Hawk Adventure
                    </p>
                </div>

                <div className="relative">
                    {/* Desktop view - show 3 testimonials */}
                    <div className="hidden gap-6 md:grid md:grid-cols-3">
                        {visibleTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>

                    {/* Mobile view - show 1 testimonial */}
                    <div className="md:hidden">
                        <TestimonialCard
                            testimonial={testimonials[currentIndex]}
                        />
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg md:-left-6"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-6 w-6 text-blue-600" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg md:-right-6"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-6 w-6 text-blue-600" />
                    </button>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({
    testimonial,
}: {
    testimonial: (typeof testimonials)[0];
}) {
    return (
        <Card className="h-full shadow-md bg-white">
            <CardContent className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-blue-100">
                        <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                            {testimonial.location}
                        </p>
                        <div className="mt-1 flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <p className="flex-grow leading-relaxed text-gray-700">
                    {testimonial.comment}
                </p>
            </CardContent>
        </Card>
    );
}
