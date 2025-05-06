import * as React from "react";
import { Metadata } from "next";

import Footer from "@/components/routes/shared/footer";
import Navbar from "@/components/routes/shared/navbar";
import { BASE_URL } from "@/config/package";
import Expedition from "@/components/routes/adventure/expedition";

export default function RiverRafting() {
    return (
        <>
            <div className="min-h-screen bg-white font-sans">
                <Navbar />
                <Expedition />
                <Footer />
            </div>
        </>
    );
}

export const metadata: Metadata = {
    title: "Expedition Adventures in Rishikesh",
    description:
        "Embark on thrilling expedition adventures in Rishikesh. From trekking to camping, experience the best of Himalayan adventures with our expert guides.",
    openGraph: {
        type: "website",
        title: "Expedition Adventures in Rishikesh",
        description:
            "Embark on thrilling expedition adventures in Rishikesh. From trekking to camping, experience the best of Himalayan adventures with our expert guides.",
        url: `${BASE_URL}/adventure-in-rishikesh/expedition-adventures`,
        images: [
            {
                url: `https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1101.jpg`,
                width: 1200,
                height: 630,
                alt: "Expedition Adventures in Rishikesh",
            },
        ],
        siteName: "Sea Hawk Adventure",
    },
    twitter: {
        card: "summary_large_image",
        title: "Expedition Adventures in Rishikesh",
        description:
            "Embark on thrilling expedition adventures in Rishikesh. From trekking to camping, experience the best of Himalayan adventures with our expert guides.",
        images: [
            `https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1101.jpg`,
        ],
        site: "@SeaHawkAdventure",
        creator: "@SeaHawkAdventure",
    },
};
