import React from "react";
import Navbar from "@/components/routes/shared/navbar";
import Hero from "@/components/routes/home/hero";
import Packages from "@/components/routes/home/packages";
import Gallery from "@/components/routes/home/gallery";
import Feedback from "@/components/routes/home/feedback";
import Contact from "@/components/routes/home/contact";
import Footer from "@/components/routes/shared/footer";
import AboutUs from "@/components/routes/home/about-us";
import Affiliations from "@/components/routes/home/affiliations";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Packages />
                <AboutUs />
                <Gallery />
                <Feedback />
                <Affiliations />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
