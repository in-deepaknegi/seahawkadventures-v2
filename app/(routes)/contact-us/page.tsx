import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/routes/contact/Hero'
import Form from '@/components/routes/contact/Form'
import Map from '@/components/routes/contact/Map'

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Form />
                <Map/>
            </main>
            <Footer />
        </>
    )
}

export default page