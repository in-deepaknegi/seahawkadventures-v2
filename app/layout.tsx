import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import SocialIcons from "@/components/globals/social";

const { SITE_NAME } = process.env;

const baseUrl = process.env.NEXT_PUBLIC_URL
    ? process.env.NEXT_PUBLIC_URL
    : "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),

    title: {
        default: SITE_NAME!,
        template: `%s - ${SITE_NAME}`,
    },
    description:
        "Experience the thrill of river rafting, kayaking and camping in Rishikesh with Sea Hawk Adventures. Discover the best rafting, kayaking and expedition packages, compare prices, and explore included services to find the ideal adventure for your getaway. Book your river rafting trip today. Rafting in Rishikesh. Kayaking.",

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
        title: SITE_NAME!,
        description:
            "Experience the thrill of river rafting, kayaking and camping in Rishikesh with Sea Hawk Adventures. Discover the best rafting, kayaking and expedition packages, compare prices, and explore included services to find the ideal adventure for your getaway. Book your river rafting trip today. Rafting in Rishikesh. Kayaking.",
        url: "https://www.seahawkadventures.com/",
        images: ["/images/meta/featured-img.png"],
        siteName: SITE_NAME!,
    },

    twitter: {
        card: "summary_large_image",
        title: SITE_NAME!,
        description:
            "Experience the thrill of river rafting, kayaking and camping in Rishikesh with Sea Hawk Adventures. Discover the best rafting, kayaking and expedition packages, compare prices, and explore included services to find the ideal adventure for your getaway. Book your river rafting trip today. Rafting in Rishikesh. Kayaking.",
        images: ["/images/meta/featured-img.png"],
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

            <body>
                <SocialIcons />
                {children}
                <SpeedInsights />
            </body>
            <GoogleAnalytics gaId="G-1ZYE4TYDD6" />
        </html>
    );
}
