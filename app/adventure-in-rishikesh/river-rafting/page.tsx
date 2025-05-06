import * as React from "react";
import { Metadata } from "next";

import Footer from "@/components/routes/shared/footer";
import Navbar from "@/components/routes/shared/navbar";
import Rafting from "@/components/routes/adventure/rafting";
import { BASE_URL } from "@/config/package";

export default function RiverRafting() {
    return (
        <>
            <div className="min-h-screen bg-white font-sans">
                <Navbar />
                <Rafting />
                <Footer />
            </div>
        </>
    );
}

export const metadata: Metadata = {
    title: "River Rafting in Rishikesh",
    description:
        "Experience the thrill of white water rafting on the mighty Ganges. Choose from our range of rafting packages designed for all experience levels.",
    openGraph: {
        type: "website",
        title: "River Rafting in Rishikesh",
        description:
            "Experience the thrill of white water rafting on the mighty Ganges. Choose from our range of rafting packages designed for all experience levels.",
        url: `${BASE_URL}/adventure-in-rishikesh/river-rafting`,
        images: [
            {
                url: `https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1101.jpg`,
                width: 1200,
                height: 630,
                alt: "River Rafting in Rishikesh",
            },
        ],
        siteName: "Sea Hawk Adventure",
    },
    twitter: {
        card: "summary_large_image",
        title: "River Rafting in Rishikesh",
        description:
            "Experience the thrill of white water rafting on the mighty Ganges. Choose from our range of rafting packages designed for all experience levels.",
        images: [
            `https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1101.jpg`,
        ],
        site: "@SeaHawkAdventure",
        creator: "@SeaHawkAdventure",
    },
};
