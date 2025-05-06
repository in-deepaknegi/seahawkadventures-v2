import * as React from "react";
import { Metadata } from "next";

import Footer from "@/components/routes/shared/footer";
import Navbar from "@/components/routes/shared/navbar";
import { BASE_URL } from "@/config/package";
import Camping from "@/components/routes/adventure/camping";

export default function RiverRafting() {
    return (
        <>
            <div className="min-h-screen bg-white font-sans">
                <Navbar />
                <Camping />
                <Footer />
            </div>
        </>
    );
}

export const metadata: Metadata = {
    title: "Camping Adventures in Rishikesh",
    description:
        "Experience unforgettable camping adventures in Rishikesh. Sleep under the stars, enjoy bonfires, and connect with nature in the lap of the Himalayas with our expert camping guides.",
    openGraph: {
        type: "website",
        title: "Camping Adventures in Rishikesh",
        description:
            "Experience unforgettable camping adventures in Rishikesh. Sleep under the stars, enjoy bonfires, and connect with nature in the lap of the Himalayas with our expert camping guides.",
        url: `${BASE_URL}/adventure-in-rishikesh/camping`,
        images: [
            {
                url: `https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1101.jpg`,
                width: 1200,
                height: 630,
                alt: "Camping Adventures in Rishikesh",
            },
        ],
        siteName: "Sea Hawk Adventure",
    },
    twitter: {
        card: "summary_large_image",
        title: "Camping Adventures in Rishikesh",
        description:
            "Experience unforgettable camping adventures in Rishikesh. Sleep under the stars, enjoy bonfires, and connect with nature in the lap of the Himalayas with our expert camping guides.",
        images: [
            `https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1101.jpg`,
        ],
        site: "@SeaHawkAdventure",
        creator: "@SeaHawkAdventure",
    },
};
