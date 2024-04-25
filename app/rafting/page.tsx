import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Rafting from '@/components/routes/home/Rafting'
import React from 'react'
import Image from "next/image";
import Hero2 from "@/public/images/rafting/r15.jpg";
import B1 from "@/public/b.png";
const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="relative isolate z-20 -mt-[6.5rem] overflow-hidden bg-white font-swir h-[65vh]">
                    <div className="relative h-full w-full max-w-full">
                        <Image
                            src={Hero2}
                            alt="hero-img"
                            quality={100}
                            loading="eager"
                            fill={true}
                            sizes="100vw"
                            className="inset-0 z-[-10] h-full w-full object-cover object-bottom"
                        />
                        <Image
                            src={B1}
                            alt=""
                            className=" absolute bottom-0 h-20 w-full object-cover"
                        />

                        <div className="absolute z-[-9] h-full w-full overflow-hidden bg-gradient-to-tr from-black  via-black/10 to-black/20"></div>

                        <div className="mx-auto flex h-full max-w-full items-center px-6 pt-28 md:max-w-[85%] md:px-8">
                            <div className="my-auto w-full">
                                <div className="hidden sm:mb-8 sm:flex">
                                    <div className="relative rounded-full bg-gray-500/50 px-3 py-1 text-base leading-6 text-white ring-1 ring-gray-100/10 hover:ring-gray-100">
                                        The Best Place to Start Your Adventure
                                    </div>
                                </div>
                                <h1 className="max-w-2xl text-center text-5xl font-semibold text-white md:text-left md:text-7xl">
                                    <span className=" bg-gradient-to-r from-blue-600/90 to-sky-400 bg-clip-text text-transparent">
                                        Rafting
                                    </span>{" "} in Rishikesh
                                </h1>
                                <p className="mt-12 max-w-3xl text-center text-xl text-gray-200 md:mt-6 md:text-left md:text-2xl">
                                    Experience unforgettable hiking, rafting, and kayaking in
                                    Uttarakhand&apos;s stunning landscapes.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>

                <Rafting color={"bg-[#f5f5f5]"} />


            </main>
            <Footer />
        </>
    )
}

export default page