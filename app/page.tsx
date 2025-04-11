"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowUpFromDot } from "lucide-react";


const Navbar = dynamic(() => import("@/components/globals/navbar"), {
    ssr: false,
});
const Hero = dynamic(() => import("@/components/routes/home/hero"), {
    ssr: false,
});
const Package = dynamic(
    () => import("@/components/routes/home/package/packages"),
    { ssr: false },
);
const List = dynamic(() => import("@/components/routes/home/feature"), {
    ssr: false,
});
const CTASection = dynamic(() => import("@/components/globals/cta"), {
    ssr: false,
});
const Footer = dynamic(() => import("@/components/globals/footer"), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Package />
                <List />
                <CTASection />
            </main>

            <Footer />

            <div className="fixed right-3 bottom-3 z-50 md:right-10 md:bottom-10">
                <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    <ArrowUpFromDot className="size-5" />
                </button>
            </div>
        </>
    );
}
