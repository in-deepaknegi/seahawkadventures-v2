"use client"
import Navbar from '@/components/Navbar'
import Icons from '@/components/Icons'
import Hero from '@/components/routes/home/Hero'
import Logo from '@/components/routes/home/Logo'
import Rafting from '@/components/routes/home/Rafting'
import Kayak from '@/components/routes/home/Kayak'
import Gallery from '@/components/routes/home/Gallery'
import Newsletter from '@/components/Newsletter'

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
                <Icons />
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
