"use client";

import Hero from "@/components/routes/home/hero";
import AdventuresSection from "@/components/routes/home/packages";
import Lenis from "lenis";
import { useEffect } from "react";

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
        <main className="mt-[10vh]">
            <Hero />
            <AdventuresSection />
        </main>
    );
}
