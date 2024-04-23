import React from "react";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/routes/about/Hero";
import Timeline from "@/components/routes/about/Timeline";
import Team from "@/components/routes/about/Team";
import Newsletter from "@/components/Newsletter";
import Patners from '@/components/Patners';

export const metadata: Metadata = {
    title: "About",
    description:
        "Experience the thrill of rafting, kayaking, expeditions, and camping with Sea Hawk Adventures. Our experienced team will guide you through stunning nature and breathtaking scenery, creating unforgettable outdoor excursions for all.",
    applicationName: "Sea Hawk Adventures",

    openGraph: {
        title: "About",
        description:
            "Experience the thrill of rafting, kayaking, expeditions, and camping with Sea Hawk Adventures. Our experienced team will guide you through stunning nature and breathtaking scenery, creating unforgettable outdoor excursions for all.",
        url: "https://www.seahawkadventures.com/about",
        images: ["/images/meta/seahawkadventures.png"],
    },

    twitter: {
        card: "summary_large_image",
        title: "About",
        description:
            "Experience the thrill of rafting, kayaking, expeditions, and camping with Sea Hawk Adventures. Our experienced team will guide you through stunning nature and breathtaking scenery, creating unforgettable outdoor excursions for all.",
        images: ["/images/meta/seahawkadventures.png"],
    },
};

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Timeline />
                <Team />
                <Patners />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
};

export default page;
