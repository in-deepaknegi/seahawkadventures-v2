import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/routes/home/Hero";
import Rafting from "@/components/routes/home/Rafting";
import Kayak from "@/components/routes/home/Kayak";
import Gallery from "@/components/routes/home/Gallery";
import Feature from "@/components/routes/home/Feature";
import Feedback from "@/components/routes/home/Feedback";
import Patners from '@/components/Patners';

const { SITE_NAME } = process.env;

export default function Home() {
    const siteJsonLd = {
        "@context": "https://schema.org",
        "@type": "Website",
        name: SITE_NAME,
        url: "https://www.seahawkadventures.com/",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(siteJsonLd),
                }}
            />

            <div itemScope itemType="https://schema.org/WebSite">
                <meta itemProp="url" content="https://www.seahawkadventures.com/" />
                <meta itemProp="name" content={SITE_NAME} />
            </div>

            <Navbar />
            <main>
                <Hero />
                <Feature />
                <Rafting color={"bg-[#f4f1ec]"} />
                <Kayak />
                <Feedback />
                <Gallery />
                <Patners />
            </main>
            <Footer />
        </>
    );
}
