"use client"
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'


import Intro from '@/components/routes/home/hero/intro';
import Services from "@/components/routes/home/hero/services";

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



            <main>
                <Intro />
                <Services />
            </main>
        </>
    );
}
