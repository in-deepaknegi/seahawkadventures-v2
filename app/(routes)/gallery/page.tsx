import React from "react";
import { Metadata } from "next";
import GalleryPage from "@/components/routes/gallery/main";
import { BASE_URL } from "@/config/package";
import Footer from "@/components/routes/shared/footer";
import Navbar from "@/components/routes/shared/navbar";
export default function page() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <GalleryPage />
            <Footer />
        </div>
    )
}

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Browse our captivating photo gallery featuring stunning visuals and memorable moments. Discover breathtaking images that inspire. Explore now!",
    openGraph: {
        type: "website",
        title: "Gallery",
        description:
            "Browse our captivating photo gallery featuring stunning visuals and memorable moments. Discover breathtaking images that inspire. Explore now!",
        url: `${BASE_URL}/gallery`,
        images: [
            {
                url: `https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3101.jpg`,
                width: 1200,
                height: 630,
                alt: "Gallery",
            },
        ],
        siteName: "Sea Hawk Adventure",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gallery",
        description:
            "Browse our captivating photo gallery featuring stunning visuals and memorable moments. Discover breathtaking images that inspire. Explore now!",
        images: [
            `https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3101.jpg`,
        ],
        site: "@SeaHawkAdventure",
        creator: "@SeaHawkAdventure",
    },
};
