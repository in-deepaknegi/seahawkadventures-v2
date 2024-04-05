import React from 'react'
import raftings from '@/data/rafting';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icons from '@/components/Icons';

const page = async ({ params }: { params: { slug: string } }) => {
    const id = params.slug
    const rafting = raftings.find((rafting: any) => rafting.slug === id)

    if (!rafting) {
        return <div>component Not Found</div>
    }

    return (
        <>
            <Navbar />
            <main>
                <Icons />

                <section>
                    {rafting.title}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default page

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const id = params.slug

    const rafting = raftings.find((rafting) => rafting.slug === id)

    return {
        title: rafting?.title,
        description: rafting?.description,
        metadataBase: new URL('https://www.seahawkadventures.com/'),
        openGraph: {
            images: [
                {
                    url: rafting?.image
                }
            ]
        }
    }
}