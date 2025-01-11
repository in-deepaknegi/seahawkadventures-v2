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
            {/* <Navbar />
            <main>
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
            </div> */}
            <main className="relative h-screen font-insr">
                <div className="absolute -z-20 h-full w-full bg-white"></div>

                <div className="mx-auto my-auto flex h-full w-full max-w-[80%] flex-col items-center gap-0 align-middle">
                    <div className="mb-auto mt-10 flex flex-col items-center text-center md:mt-5">
                        <h1 className="text-3xl font-semibold flex items-center gap-2">
                           <UserX className="text-red-500 size-12"/> Hoisting Expired
                        </h1>
                        <p className="text-black mt-3">
                            This account has been expired.
                            Contact your hoisting provider for more information.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
