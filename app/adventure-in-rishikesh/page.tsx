import * as React from "react";
import Footer from "@/components/routes/shared/footer";
import AdventurePackages from "@/components/routes/adventure/main";
import Navbar from "@/components/routes/shared/navbar";
import { Metadata } from "next";
import { BASE_URL } from "@/config/package";

export default function Packages() {
    return (
        <>
            <div className="min-h-screen bg-white font-sans">
                <Navbar />
                <AdventurePackages />
                <Footer />
            </div>
        </>
    );
}

export const metadata: Metadata = {
    title: "Adventure in Rishikesh",
    description:
        "Explore the best adventure activities in Rishikesh, starting from rafting to trekking and camping we have it all.",
    openGraph: {
        type: "website",
        title: "Adventure in Rishikesh",
        description:
            "Explore the best adventure activities in Rishikesh, starting from rafting to trekking and camping we have it all.",
        url: `${BASE_URL}/adventure-in-rishikesh`,
        images: [
            {
                url: `https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1213.jpg`,
                width: 1200,
                height: 630,
                alt: "About Us",
            },
        ],
        siteName: "Sea Hawk Adventure",
    },
    twitter: {
        card: "summary_large_image",
        title: "Adventure in Rishikesh",
        description:
            "Explore the best adventure activities in Rishikesh, starting from rafting to trekking and camping we have it all.",
        images: [
            `https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1213.jpg`,
        ],
        site: "@SeaHawkAdventure",
        creator: "@SeaHawkAdventure",
    },
};
