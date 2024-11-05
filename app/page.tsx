"use client"
import { AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis'
import Hero from "@/components/routes/home/hero";
import Services from "@/components/routes/home/services";
import Features from "@/components/routes/home/features";

import Preloader from '@/components/globals/preloader'

const { SITE_NAME } = process.env;

export default function Home() {
    const siteJsonLd = {
        "@context": "https://schema.org",
        "@type": "Website",
        name: SITE_NAME,
        url: "https://www.seahawkadventures.com/",
    };

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, []);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (
            async () => {
                setTimeout(() => {
                    setLoading(false);
                    document.body.style.cursor = 'default'
                    window.scrollTo(0, 0);
                }, 3900)
            }
        )()
    }, [])

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(siteJsonLd),
                }}
            />

            <div itemScope itemType="https://schema.org/WebSite">
                <meta itemProp="url" content="https://www.seahawkadventures.com/" />
                <meta itemProp="name" content={SITE_NAME} />
            </div>

            {/* <AnimatePresence>
                <Preloader loading={loading} />
            </AnimatePresence> */}

            <main>
                <Hero />
                <Services />
                <Features />
            </main>
        </>
    );
}
