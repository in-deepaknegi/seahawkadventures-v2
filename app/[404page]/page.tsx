import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <main className="relative h-screen font-insr">
        <div className="bg-white -z-20 absolute w-full h-full"></div>

        <div className="w-full max-w-[80%] mx-auto flex items-center align-middle flex-col gap-0 h-full my-auto">
            <h1 className="text-5xl text-center md:text-[7vw] text-blue-600 font-oggm mt-auto">
                Sea Hawk Adventures
            </h1>
            <div className="mb-auto mt-10 md:mt-5 flex items-center text-center gap-10">
                <p className=" text-black">
                    v3 coming soon. This page is under maintainance, it will be updated soon😊 (go back to <Link href="/" className='text-blue-600 font-insm'>home</Link>)
                </p>
            </div>
        </div>
    </main>
    )
}

export default page