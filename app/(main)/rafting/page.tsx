import React from 'react'
import Navbar from '@/components/Navbar';
import Icons from '@/components/Icons';
import Hero from '@/components/routes/rafting/Hero';
import Package from '@/components/routes/home/Rafting';
import Logo from '@/components/routes/home/Logo'
import Footer from '@/components/Footer';

const page = async () => {


    return (
        <>
            <Navbar />
            <main>
                <Icons />
                <Hero />
                <Package />
                <Logo />
            </main>
            <Footer />
        </>
    )
}

export default page;