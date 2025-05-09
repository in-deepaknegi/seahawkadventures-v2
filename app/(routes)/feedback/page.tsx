import React from "react";
import { Metadata } from "next";

import Navbar from "@/components/routes/shared/navbar";
import Footer from "@/components/routes/shared/footer";
import { BASE_URL } from "@/config/package";
import TestimonialsPage from "@/components/routes/feedback/main";

export default function page() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <TestimonialsPage />
            <Footer />
        </div>
    );
}

export const metadata: Metadata = {
    title: "Customer Feedback",
    description:
        "Hear from those who have experienced the thrill with Sea Hawk Adventure",
    openGraph: {
        type: "website",
        title: "Customer Feedback",
        description:
            "Hear from those who have experienced the thrill with Sea Hawk Adventure",
        url: `${BASE_URL}/feedback`,
        images: [
            {
                url: `https://res.cloudinary.com/dw5tor8v7/image/upload/v1745082693/img_1213.jpg`,
                width: 1200,
                height: 630,
                alt: "Customer Feedback",
            },
        ],
        siteName: "Sea Hawk Adventure",
    },
    twitter: {
        card: "summary_large_image",
        title: "Customer Feedback",
        description:
            "Hear from those who have experienced the thrill with Sea Hawk Adventure",
        images: [
            `https://res.cloudinary.com/dw5tor8v7/image/upload/v1745082693/img_1213.jpg`,
        ],
        site: "@SeaHawkAdventure",
        creator: "@SeaHawkAdventure",
    },
};
