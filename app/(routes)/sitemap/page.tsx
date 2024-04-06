import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const links = [
    {
        title: "Home page",
        href: "/",
    },
    {
        title: "About Us",
        href: "/about-us",
    },
    {
        title: "Contact Us",
        href: "/contact-us",
    },
    {
        title: "Gallery",
        href: "/gallery",
    },
    {
        title: "Rafting",
        href: "/rafting",
        sub: [
            {
                title: "12 km rafting",
                href: "/rafting/12-km-rafting",
            },
            {
                title: "16 km rafting",
                href: "/rafting/16-km-rafting",
            },
            {
                title: "12 km rafting",
                href: "/rafting/26-km-rafting",
            },
        ]
    },
    {
        title: "kayaking",
        href: "/kayak",
        sub: [
            {
                title: "Beginner",
                href: "/kayak/beginners-course",
            },
            {
                title: "Intermediate",
                href: "/kayak/intermediate-course",
            },
        ]
    },
]

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="bg-whitepy-16 py-8 lg:py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="text-base font-semibold leading-7 text-blue-700">
                                Get the help you need
                            </p>
                            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
                                Support center
                            </h2>
                            <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                                fugiat aliqua.
                            </p>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-2'>
                                {links.map((item, i) => (
                                    <li key={i}>
                                        <a href={item.href}>
                                            {item.title}
                                        </a>
                                        {item.sub && (
                                            <ul className='ml-4 flex flex-col gap-1'>
                                                {item.sub?.map((sub, j) => (
                                                    <li key={j}>
                                                        <a href={sub.href}>
                                                            {sub.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default page