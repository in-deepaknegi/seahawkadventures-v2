import React from "react";
import { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/routes/gallery/Hero";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Contact Sea Hawk Adventures today to start planning your next trip! If you have questions about our trips, need help with booking, or just want to share your excitement, we're here to help. Get in touch and let's turn your adventure dreams into reality!",
    applicationName: "Sea Hawk Adventures",

    openGraph: {
        title: "Gallery",
        description:
            "Contact Sea Hawk Adventures today to start planning your next trip! If you have questions about our trips, need help with booking, or just want to share your excitement, we're here to help. Get in touch and let's turn your adventure dreams into reality!",
        url: "https://www.seahawkadventures.com/gallery",
        images: ["/images/meta/seahawkadventures.png"],
    },

    twitter: {
        card: "summary_large_image",
        title: "Gallery",
        description:
            "Contact Sea Hawk Adventures today to start planning your next trip! If you have questions about our trips, need help with booking, or just want to share your excitement, we're here to help. Get in touch and let's turn your adventure dreams into reality!",
        images: ["/images/meta/seahawkadventures.png"],
    },
};

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                
            </main>
            <Footer />
        </>
    );
};

export default page;
