import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/routes/home/hero"));
const Packages = dynamic(() => import("@/components/routes/home/packages"));
const AboutUs = dynamic(() => import("@/components/routes/home/about-us"));
const Gallery = dynamic(() => import("@/components/routes/home/gallery"));
const Feedback = dynamic(() => import("@/components/routes/home/feedback"));
const Contact = dynamic(() => import("@/components/routes/home/contact"));
const Affiliations = dynamic(
    () => import("@/components/routes/home/affiliations"),
);
const Footer = dynamic(() => import("@/components/routes/shared/footer"));
const Navbar = dynamic(() => import("@/components/routes/shared/navbar"));

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex-1 pt-20">
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

// import React from "react";
// import Navbar from "@/components/routes/shared/navbar";
// import Hero from "@/components/routes/home/hero";
// import Packages from "@/components/routes/home/packages";
// import Gallery from "@/components/routes/home/gallery";
// import Feedback from "@/components/routes/home/feedback";
// import Contact from "@/components/routes/home/contact";
// import Footer from "@/components/routes/shared/footer";
// import AboutUs from "@/components/routes/home/about-us";
// import Affiliations from "@/components/routes/home/affiliations";

// export default function Home() {
//     return (
//         <>
//             <Navbar />
//             <main>
//                 <Hero />
//                 <Packages />
//                 <AboutUs />
//                 <Gallery />
//                 <Feedback />
//                 <Affiliations />
//                 <Contact />
//             </main>
//             <Footer />
//         </>
//     );
// }
