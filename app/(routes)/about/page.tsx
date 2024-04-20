import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/routes/about/Hero'
import Timeline from '@/components/routes/about/Timeline'
import Team from '@/components/routes/about/Team'

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Timeline />
                <Team />
            </main>
            <Footer />
        </>
    )
}

export default page