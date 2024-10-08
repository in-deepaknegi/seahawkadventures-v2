import Navbar from "@/components/layouts/navbar";
import Hero from "@/components/routes/home/hero";
import Desciption from '@/components/routes/home/desc';
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
                <Desciption />
            </main>
        </>
    );
}
