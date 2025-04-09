"use client";

import React from "react";
import dynamic from "next/dynamic";

// import Navbar from "@/components/globals/navbar";
// import Hero from "@/components/routes/home/hero";
// import Footer from "@/components/globals/footer";
// import CTASection from "@/components/globals/cta";
// import BlogSection from "@/components/globals/blog";
// import { ArrowUpFromDot, UserX } from "lucide-react";
// import Package from "@/components/routes/home/package/packages";
// import List from "@/components/routes/home/List";


const Navbar = dynamic(() => import("@/components/globals/navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/routes/home/hero"), { ssr: false });
const Package = dynamic(() => import("@/components/routes/home/package/packages"), { ssr: false });
const List = dynamic(() => import("@/components/routes/home/List"), { ssr: false });
const CTASection = dynamic(() => import("@/components/globals/cta"), { ssr: false });
const Footer = dynamic(() => import("@/components/globals/footer"), { ssr: false });

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Package/>
                <List/>
                {/* <BlogSection /> */}
                <CTASection />
            </main>

            <Footer />

            {/* <div className="fixed md:bottom-10 bottom-3 right-3 md:right-10 z-50">
                <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    <ArrowUpFromDot className="size-5"/>
                </button>
            </div> */}
        </>
    );
}
