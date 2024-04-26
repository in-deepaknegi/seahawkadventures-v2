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

export default page;


export async function generateMetadata({ params }: { params: { slug: string } }) {
    const id = params.slug

    const r = rafting.find((rafting: any) => rafting.slug === id)

    return {
        title: r?.title,
        description: r?.description,
        metadataBase: new URL('https://www.seahawkadventures.com/'),
        openGraph: {
            title: r?.title,
            description: r?.description,
            url: `/rafting/${r?.slug}`,
            images: [r?.imageUrl]
        },
        twitter: {
            card: "summary_large_image",
            title: r?.title,
            description: r?.description,
            images: [r?.imageUrl],
        },
    }
}