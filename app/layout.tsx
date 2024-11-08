import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialIcons from "@/components/globals/social";
const inter = Inter({ subsets: ["latin"] });
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const { SITE_NAME } = process.env;

const baseUrl = process.env.NEXT_PUBLIC_URL
    ? process.env.NEXT_PUBLIC_URL
    : 'http://localhost:3000';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),

    title: {
        default: SITE_NAME!,
        template: `%s | ${SITE_NAME}`
    },
    description: "Explore the exhilarating experience of river rafting in Rishikesh with Sea hawk Adventures. Compare rates, services, and inclusions to find the perfect deal for your adventure-filled getaway. Book your rafting trip now!",

    keywords: [
        "river rafting in Rishikesh",
        "white water rafting Rishikesh",
        "Ganges river rafting Rishikesh",
        "Rishikesh rafting packages",
        "camping and rafting in Rishikesh",
        "book rafting in Rishikesh",
        "rafting in Rishikesh booking",
        "Rishikesh river rapids",
        "Rishikesh travel guide",
        "Rafting camps Rishikesh",
    ],

    openGraph: {
        title: "Sea Hawk Adventuers",
        description: "Explore the exhilarating experience of river rafting in Rishikesh with Sea hawk Adventures. Compare rates, services, and inclusions to find the perfect deal for your adventure-filled getaway. Book your rafting trip now!",
        url: "https://www.seahawkadventures.com/",
        images: ["/images/og/featured-img.png"],
        siteName: "Sea Hawk Adventuers",
    },

    twitter: {
        card: 'summary_large_image',
        title: "SeaHawkAdventuers",
        description: "Explore the exhilarating experience of river rafting in Rishikesh with Sea hawk Adventures. Compare rates, services, and inclusions to find the perfect deal for your adventure-filled getaway. Book your rafting trip now!",
        images: ["/images/og/featured-img.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <GoogleTagManager gtmId="GTM-WWQ9J7ZF" />

            <body className={inter.className}>
                <SocialIcons />
                {children}
            </body>
            <GoogleAnalytics gaId="G-1ZYE4TYDD6" />

        </html>
    );
}
