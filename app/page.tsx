"use client"
import Navbar from '@/components/Navbar'
import Hero from '@/components/routes/home/Hero'
import Logo from '@/components/routes/home/Logo'
import Rafting from '@/components/global/Rafting'
import Kayak from '@/components/global/Kayak'
import Gallery from '@/components/routes/home/Gallery'
import Newsletter from '@/components/global/Newsletter'

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Footer from '@/components/Footer'


export default function Home() {

    useEffect(() => {
        AOS.init();
    })


    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Logo />
                <Rafting />
                <Kayak />
                <Gallery />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}
