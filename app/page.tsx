"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "@/components/globals/navbar";
import Hero from "@/components/routes/home/hero";
import Footer from "@/components/globals/footer";
import CTASection from "@/components/globals/cta";
import BlogSection from "@/components/globals/blog";
import { ArrowUpFromDot } from "lucide-react";
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
            <main>
                <Hero />

                <Package/>
            </main>
            <BlogSection />
            <CTASection />
            <Footer />

            <div className=" fixed bottom-10 right-10 z-50">
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
