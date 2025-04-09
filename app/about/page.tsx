"use client";

import React from "react";
import Navbar from "@/components/globals/navbar";
import Footer from "@/components/globals/footer";
import { ArrowUpFromDot } from "lucide-react";

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[60vh] w-full">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/about-hero.jpg')"
                        }}
                    />
                    <div className="relative z-20 h-full flex items-center justify-center text-white">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
                            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                                Your trusted partner in adventure and exploration
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-20 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-lg text-gray-700 mb-6">
                                    Founded in 2010, Seahawk Adventures has been at the forefront of adventure tourism,
                                    providing unforgettable experiences to thrill-seekers and nature enthusiasts alike.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Our journey began with a simple mission: to make adventure sports accessible to everyone
                                    while maintaining the highest standards of safety and environmental responsibility.
                                </p>
                            </div>
                            <div className="relative h-[400px] rounded-lg overflow-hidden">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: "url('/images/about-story.jpg')"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 md:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6">
                                <div className="text-4xl mb-4">🌿</div>
                                <h3 className="text-xl font-semibold mb-4">Environmental Stewardship</h3>
                                <p className="text-gray-700">
                                    We&apos;re committed to preserving the natural beauty of our destinations for future generations.
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="text-4xl mb-4">🛡️</div>
                                <h3 className="text-xl font-semibold mb-4">Safety First</h3>
                                <p className="text-gray-700">
                                    Your safety is our top priority, with certified guides and top-notch equipment.
                                </p>
                            </div>
                            <div className="text-center p-6">
                                <div className="text-4xl mb-4">🤝</div>
                                <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
                                <p className="text-gray-700">
                                    We support local communities and create sustainable tourism opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{
                                            backgroundImage: "url('/images/team-1.jpg')"
                                        }}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold">John Doe</h3>
                                <p className="text-gray-600">Founder & CEO</p>
                            </div>
                            <div className="text-center">
                                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{
                                            backgroundImage: "url('/images/team-2.jpg')"
                                        }}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold">Jane Smith</h3>
                                <p className="text-gray-600">Head of Operations</p>
                            </div>
                            <div className="text-center">
                                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{
                                            backgroundImage: "url('/images/team-3.jpg')"
                                        }}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold">Mike Johnson</h3>
                                <p className="text-gray-600">Safety Director</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <div className="fixed md:bottom-10 bottom-3 right-3 md:right-10 z-50">
                <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    <ArrowUpFromDot className="size-5"/>
                </button>
            </div>
        </>
    );
} 