"use client";

import Gallery from "@/components/routes/home/gallery";
import Hero from "@/components/routes/home/hero";
import AdventuresSection from "@/components/routes/home/packages";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            lerp: 0.01,
            duration: 2.2,
            infinite: false,
        });

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);


    return (
        <main className="mt-[10vh]">
            <Hero />
            <AdventuresSection />
            <Gallery/>
        </main>
    );
}
