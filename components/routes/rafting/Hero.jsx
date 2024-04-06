import React from 'react'
import Image from "next/image";
import B1 from "@/public/b.png";

const Hero = () => {
    return (
        <section className="overflow-hidden">
            <div className="relative isolate"
                style={{
                    backgroundImage: "url('/images/rafting/r15.jpg')",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}>
                <Image src={B1} alt="bachground bottom" className="absolute bottom-0 h-16" />

                <div className="absolute w-full h-full z-[-9] bg-gradient-to-t from-black via-black/10 to-black/10"></div>

                <div className="mx-auto py-24 max-w-[90%]">
                    <h1 className="mt-5 text-5xl max-w-3xl text-center md:text-left font-semibold text-white md:mt-0 lg:text-6xl">
                        River Rafting
                    </h1>
                    <p className="mt-12 max-w-2xl text-left text-base text-gray-50 md:mt-6 md:font-light md:text-lg">
                        Embark on unforgettable hiking, rafting, and kayaking adventures in
                        the stunning landscapes of Uttarakhand, surrounded by the majestic
                        beauty of the Himalayas, and along the pristine Ganges River, where
                        every bend brings new thrills and breathtaking views.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero