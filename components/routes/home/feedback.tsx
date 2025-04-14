"use client";

import { useState, useMemo } from "react";
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

const data = [
    {
        name: "Ashwini Pal",
        comment:
            "Great experience with sea hawk adventure One of the best river team",
    },
    { name: "BAD BOYS GAMING", comment: "Bast river rafting in rishikesh" },
    { name: "Sakshi Dumka", comment: "Best and enjoy the experience 😍" },
    {
        name: "Taniya Itani",
        comment: "Fabulous and fantastic ride. Wonderful experience ✨",
    },
    {
        name: "Aman Negi",
        comment:
            "Very helpful river guides & also very good behavior to all. Nitesh is one who was our River guide, such a good personality and also he helped me a lot to learn kayaking",
    },
    {
        name: "MASTIRAM JAT",
        comment: "Best rafting team in rishikesh highly recommend",
    },
    {
        name: "Rana Tree Removal LLC",
        comment:
            "Sea Hawk provides exceptional rafting and kayaking services in Rishikesh, boasting a highly professional and respectful...",
    },
    {
        name: "Shaik Mohammed Adnan",
        comment: "Had a great experience , We got a experienced guide Manish .",
    },
    {
        name: "ABRAR AHAMMAD",
        comment:
            "It was a great experience and every one was very professional . And guide manish gave us a wonderful experience",
    },
    {
        name: "Dhaval Shani",
        comment:
            "I had two amazing river rafting experiences with Sea Hawk Adventures in Rishikesh....",
    },
    {
        name: "Sanidhya Shani",
        comment: "Title: Unforgettable Whitewater Adventure!...",
    },
    {
        name: "Md Tauqueer",
        comment:
            "We had the pleasure of embarking on a river rafting adventure with Sea Hawk Adventures, and it was truly a remarkable...",
    },
    {
        name: "Akshay Tripathi",
        comment:
            "Awesome experience 😃 , had great fun one of the best rafting experience I had.",
    },
    { name: "Monark Mehta", comment: "Great experience" },
    { name: "Ravi Kumar", comment: "Exella raft guide Manish Bhandara" },
    {
        name: "Manish Bhandari",
        comment:
            "🙏good fun/totallyprofessional/safe and secure/awesome thanks !!",
    },
    {
        name: "Trilok Rawat",
        comment:
            "good experience best Adventure company in Rishikesh Professional Guide Professional Kayaker Good service.....",
    },
    {
        name: "Nitin Dahiya",
        comment: "Best rafting in rishikesh with sea hawk Great river team",
    },
    {
        name: "Arun kumar Kumar",
        comment:
            "This is my first time for river rafting in rishikesh with friends and enjoy a lot....",
    },
    {
        name: "Mahaveer Pundir",
        comment:
            "Best company in rishikesh we had a lot of fun with the team Sea Hawk adventures.",
    },
    {
        name: "jeyashree kothai",
        comment:
            "Excellent experience..must try… our guide Manish was fantastic",
    },
    { name: "Nishan Patel", comment: "Posted on 5th November 2024...." },
    { name: "mohan bhadauria", comment: "Best rafting in rishikesh" },
    {
        name: "Kushagra Gupta",
        comment:
            "we had a good fun and enjoyed a lot thanks to sea hawk team specialy thanks to mr Rishi sir",
    },
    {
        name: "Sagar Agrawal",
        comment:
            "Rafting experience was really great, they helped us in each and every point. This was my first time and i enjoy very much",
    },
    {
        name: "Arjun Kaley",
        comment:
            "10/10 Kayak School. I learnt Kayaking from Nitesh, one of the instructors. The instruction was precise, to the point and...",
    },
    {
        name: "Iti Tyagi",
        comment:
            "I recently went for a rafting expedition with the sea hawk adventures' team. They are very professional and expert in...",
    },
    {
        name: "Shivam Tyagi",
        comment:
            "I recently went to a Rafting expedition of 100 Km from Upper Bhagirathi to Rishikesh(3N/4D)....",
    },
    {
        name: "Mr Prashant sharma",
        comment:
            "Sea Hawk Adventures team is very professional it was great fun .",
    },
    {
        name: "Skritant Gaur",
        comment:
            "It was great experience with Sea hawk adventure Very professional team they have we had...",
    },
    {
        name: "Rajeev gurjar",
        comment:
            "It was really best rafting in rishikesh we are 6 people and had a good experience with Sea Hawk Adventures",
    },
    { name: "Barquat Ali", comment: "Best rafting in Rishikesh" },
    { name: "AVINASH PANDAGALE", comment: "Best rafting in Rishikesh👌✌️" },
    { name: "Anchal shukla", comment: "The experience was great." },
    {
        name: "Aditya Parihar",
        comment: "One of the best in adventure activities 🔥",
    },
    {
        name: "yuvraj sankhla",
        comment: "It was really fantastic rafting experience",
    },
    { name: "Swapnil Tadas", comment: "Ultimate experience with Nitesh" },
    {
        name: "Sagar Tomar",
        comment:
            "It was great experience with sea hawk Guide very friendly nitesh bhai",
    },
    {
        name: "Suraj Kumar",
        comment:
            "It was great experience with sea hawk adventures gret team work ! Thanks sea hawk team we are planning for next trip",
    },
    {
        name: "Beard Boy Ankur",
        comment:
            "Amazong trip….Super se b upar wala Mza AAA gya thx for this amazing trip Sea Hawk Adventure ✌️",
    },
    {
        name: "Gabriele Businaro",
        comment:
            "I had a very good time, both for the kayaking and for the rafting",
    },
    {
        name: "Deepak Dhankhar",
        comment:
            "Excellent staff, highly professional instructors - very helpful & accomodating.",
    },
    {
        name: "Mamta Pundir",
        comment:
            "Sea hawk adventure is very good you should go there I think you should go there once because it is very good 👍😊",
    },
    {
        name: "Devansh Bawari",
        comment:
            "I recently had an amazing experience at Sea Hawk Camp in Rishikesh. The rafting adventure was not only thrilling but...",
    },
    {
        name: "karan sharma",
        comment: "Best experience very safe and trustful friendly behaviour",
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

    // Calculate visible testimonials using useMemo
    const visibleTestimonials = useMemo(() => {
        const visible = [];
        for (let i = 0; i < testimonials.length; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
            if (visible.length === 3) break;
        }
        return visible;
    }, [currentIndex]);

    return (
        <section id="testimonials" className="relative overflow-hidden">
            <div className="absolute z-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#eff6ff"
                        fillOpacity="1"
                        d="M0,32L40,32C80,32,160,32,240,37.3C320,43,400,53,480,85.3C560,117,640,171,720,186.7C800,203,880,181,960,165.3C1040,149,1120,139,1200,154.7C1280,171,1360,213,1400,234.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                    ></path>
                </svg>
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10 py-16">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                        What Our Adventurers Say
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg">
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
        <Card className="h-full bg-white shadow-md">
            <CardContent className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-center gap-4">
                    <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 bg-gradient-to-br from-blue-500 to-violet-600 text-2xl font-medium text-white">
                        {testimonial.name.charAt(0)}
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
