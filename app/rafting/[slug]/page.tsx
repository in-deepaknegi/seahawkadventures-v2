import React from 'react'
import rafting from '@/content/rafting'
import Hero from '@/components/layouts/rafting/hero'
import Navbar from '@/components/globals/navbar'
import Footer from '@/components/globals/footer'

type Params = Promise<{ slug: string }>

async function getBlogFromParams({ id }: { id: { slug: string } }) {
    const doc = rafting.find((doc) => doc.slug === id.slug);

    if (!doc) {
        return null;
    }

    return doc;
}

const page = async ({ params }: { params: Params }) => {

    const id = await params;

    const doc = await getBlogFromParams({ id });

    return (
        <>
            <Navbar />
            <Hero doc={doc} />
            <Footer />
        </>
    )
}

export default page;


export async function generateMetadata({ params }: { params: Params }) {
    const id = await params;

    const r = await getBlogFromParams({ id });

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