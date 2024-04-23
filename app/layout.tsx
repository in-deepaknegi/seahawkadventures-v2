import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const { SITE_NAME } = process.env;

const baseUrl = process.env.NEXT_PUBLIC_URL
  ? `https://${process.env.NEXT_PUBLIC_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },


  openGraph: {
    title: "Sea Hawk Adventuers",
    description: "Experience the thrill of rafting, kayaking, expeditions, and camping with Sea Hawk Adventures. Our experienced team will guide you through stunning nature and breathtaking scenery, creating unforgettable outdoor excursions for all.",
    url: "https://www.seahawkadventures.com/",
    images: ["/images/meta/seahawkadventures.png"],
  },

  twitter: {
    card: 'summary_large_image',
    title: "SeaHawkAdventuers",
    description: "Experience the thrill of rafting, kayaking, expeditions, and camping with Sea Hawk Adventures. Our experienced team will guide you through stunning nature and breathtaking scenery, creating unforgettable outdoor excursions for all.",
    images: ["/images/meta/seahawkadventures.png"],
  },

  robots: {
    follow: true,
    index: true
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
