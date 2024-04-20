import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/routes/about/Hero'
import Timeline from '@/components/routes/about/Timeline'
import Team from '@/components/routes/about/Team'
import Newsletter from '@/components/Newsletter';
const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Timeline />
                <Team />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default page