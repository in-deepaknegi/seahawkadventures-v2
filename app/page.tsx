"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/routes/home/Hero';
import Rafting from '@/components/routes/home/Rafting';
import Kayak from '@/components/routes/home/Kayak';
import Gallery from '@/components/routes/home/Gallery';

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function Home() {

    useEffect(() => {
        AOS.init();
    })


    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Rafting />
                <Kayak />
                <Gallery />
            </main>
            <Footer />
        </>
    );
}
