"use client"

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import Hero from "@/components/routes/home/hero";
import Services from "@/components/routes/home/services";

import About from "@/components/routes/home/about";
import Rafting from "@/components/routes/home/rafting";
import Navbar from "@/components/globals/navbar";


export default function Home() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, []);

    return (
        <>
        <Navbar/>
            <main>
                <Hero />
                <Services />
                <Rafting />
                <About />
            </main>
        </>
    );
}
