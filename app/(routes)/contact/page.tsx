import ContactPage from "@/components/routes/contact/main";
import Navbar from "@/components/routes/shared/navbar";
import Footer from "@/components/routes/shared/footer";
import { Metadata } from "next";
import { BASE_URL } from "@/config/package";

export default function page() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <ContactPage />
            <Footer />
        </div>
    );
}

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact us for more information",
    openGraph: {
        type: "website",
        title: "Contact Us",
        description: "Contact us for more information",
        url: `${BASE_URL}/contact`,
        images: [
            {
                url: `https://res.cloudinary.com/dw5tor8v7/image/upload/v1745082693/img_1213.jpg`,
                width: 1200,
                height: 630,
                alt: "Contact Us",
            },
        ],
        siteName: "Sea Hawk Adventure",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us",
        description: "Contact us for more information",
        images: [
            `https://res.cloudinary.com/dw5tor8v7/image/upload/v1745082693/img_1213.jpg`,
        ],
        site: "@SeaHawkAdventure",
        creator: "@SeaHawkAdventure",
    },
};
