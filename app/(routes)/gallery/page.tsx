import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icons from '@/components/Icons';

const page = async () => {


    return (
        <>
            <Navbar />
            <main>
                <Icons />
            </main>
            <Footer />
        </>
    )
}

export default page;