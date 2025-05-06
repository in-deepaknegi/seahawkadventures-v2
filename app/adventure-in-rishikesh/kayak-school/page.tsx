import * as React from "react";
import { Metadata } from "next";

import Footer from "@/components/routes/shared/footer";
import Navbar from "@/components/routes/shared/navbar";
import { BASE_URL } from "@/config/package";
import KayakSchool from "@/components/routes/adventure/kayak";

export default function RiverRafting() {
    return (
        <>
            <div className="min-h-screen bg-white font-sans">
                <Navbar />
                <KayakSchool />
                <Footer />
            </div>
        </>
    );
}

export const metadata: Metadata = {
    title: "Kayak School in Rishikesh",
    description:
        "Learn kayaking from expert instructors in Rishikesh. Our comprehensive kayak school offers courses for beginners to advanced paddlers on the Ganges.",
    openGraph: {
        type: "website",
        title: "Kayak School in Rishikesh",
        description:
            "Learn kayaking from expert instructors in Rishikesh. Our comprehensive kayak school offers courses for beginners to advanced paddlers on the Ganges.",
        url: `${BASE_URL}/adventure-in-rishikesh/kayak-school`,
        images: [
            {
                url: `https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1101.jpg`,
                width: 1200,
                height: 630,
                alt: "Kayak School in Rishikesh",
            },
        ],
        siteName: "Sea Hawk Adventure",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kayak School in Rishikesh",
        description:
            "Learn kayaking from expert instructors in Rishikesh. Our comprehensive kayak school offers courses for beginners to advanced paddlers on the Ganges.",
        images: [
            `https://res.cloudinary.com/dr8gbqqid/image/upload/v1745082693/img_1101.jpg`,
        ],
        site: "@SeaHawkAdventure",
        creator: "@SeaHawkAdventure",
    },
};
