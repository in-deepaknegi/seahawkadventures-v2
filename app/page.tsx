"use client"
import Navbar from '@/components/Navbar'
import Hero from '@/components/routes/home/Hero'
import Logo from '@/components/routes/home/Logo'
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
                <Logo />
            </main>
        </>
    );
}
