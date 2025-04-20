import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
    Check,
    MapPin,
    Mail,
    Phone,
    Clock,
    Star,
    ChevronRight,
} from "lucide-react";
import { Wave1, Wave2 } from "@/components/routes/shared/wave";
// import { ContactForm } from "@/components/contact-form";
// import { SiteHeader } from "@/components/site-header";
// import { SiteFooter } from "@/components/site-footer";
import Hero from "@/components/routes/home/hero";
import Packages from "@/components/routes/home/packages";
import AboutUs from "@/components/routes/home/about-us";
import Gallery from "@/components/routes/home/gallery";
import Feedback from "@/components/routes/home/feedback";
import Contact from "@/components/routes/home/contact";
import Affiliations from "@/components/routes/home/affiliations";
import Footer from "@/components/routes/shared/footer";
import Navbar from "@/components/routes/shared/navbar";

export default function Home() {
    return (
        <>
        <Navbar/>
            <main className="flex-1 pt-20">
                <Hero />
                <Packages />
                <AboutUs />
                <Gallery />
                <Feedback />
                <Affiliations/>
                <Contact/>
            </main>
            <Footer/>

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
