import React from 'react'
import rafting from '@/data/rafting'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Main from '@/components/routes/slug/Rafting';


const page = async ({ params }: { params: { slug: string } }) => {

    const id = params.slug
    const r = rafting.find((rafting: any) => rafting.slug === id)

    return (
        <>
            <Navbar />
            <main>
                <Main rafting={r} />
            </main>
            <Footer />
        </>
    )
}

export default page