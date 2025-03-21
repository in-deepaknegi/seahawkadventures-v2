"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "@/components/globals/navbar";
import Hero from "@/components/routes/home/hero";
import Footer from "@/components/globals/footer";
import CTASection from "@/components/globals/cta";
import BlogSection from "@/components/globals/blog";
import { ArrowUpFromDot, UserX } from "lucide-react";
import Package from "@/components/routes/home/package/packages";

export default function Home() {
    // useEffect(() => {
    //     const lenis = new Lenis();

    //     function raf(time: number) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }

    //     requestAnimationFrame(raf);
    // }, []);

    return (
        <>
            <Navbar />
            <main className="font-sans">
                <Hero />
                <Package/>
                <BlogSection />
                <CTASection />
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
