"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "@/components/globals/navbar";
import Hero from '@/components/routes/home/hero';
import Footer from "@/components/globals/footer";
import CTASection from "@/components/globals/cta";
export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Hero/>
            </main>
            <CTASection />
            <Footer/>
        </>
    );
}
