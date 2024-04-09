import React from 'react'
import Image from 'next/image';

import kayaks from '@/data/kayak';
import raftings from '@/data/rafting';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import B1 from '@/public/b.png'
import C1 from '@/public/svg/calender.svg'

const page = async ({ params }: { params: { slug: string } }) => {

    const id = params.slug
    const rafting = kayaks.find((rafting: any) => rafting.slug === id)

    const today = new Date(); // Get today's date
    const indianTimezoneOffset = 330; // Indian Standard Time (IST) offset in minutes (GMT +5:30)
    const nextThursday = new Date(today); // Create a new date object
    nextThursday.setDate(today.getDate() + (4 - today.getDay() + 7) % 7); // Find the next Thursday
    nextThursday.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
    nextThursday.setMinutes(nextThursday.getMinutes() + indianTimezoneOffset); // Adjust for Indian Standard Time

    // Generate an array to hold the dates of the upcoming Thursdays
    const upcomingThursdays = [];

    // Add the next 10 upcoming Thursdays to the array
    for (let i = 0; i < 3; i++) {
        upcomingThursdays.push(new Date(nextThursday.getTime() + i * 7 * 24 * 60 * 60 * 1000));
    }

    // Format the dates in the desired format (e.g., "YYYY-MM-DD")
    const formattedDates = upcomingThursdays.map(date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    });

    // Now you can use the 'formattedDates' array to display the list of upcoming Thursdays
    // console.log(formattedDates);

    const adventuers = kayaks.filter((rafting) => rafting.slug != id);

    if (!rafting) {
        return <div>component Not Found</div>
    }

    return (
        <>
            <Navbar />
            <main>
                <section className="overflow-hidden">
                    <div className="relative isolate"
                        style={{
                            backgroundImage: rafting.image,
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}>
                        <Image src={B1} alt="bachground bottom" className="absolute obc bottom-0 h-16" />

                        <div className="absolute w-full h-full z-[-9] bg-gradient-to-t from-black via-black/40 to-black/50"></div>

                        <div className="mx-auto py-24 max-w-[90%]">
                            <h1 className="mt-5 text-5xl max-w-3xl text-center md:text-left font-semibold text-white md:mt-0 lg:text-6xl">
                                {rafting.title}
                            </h1>
                            <p className="mt-12 max-w-2xl text-left text-base text-gray-50 md:mt-6 md:font-light md:text-lg">
                                {rafting.description}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="pb-16 pt-8 antialiased lg:pb-24 lg:pt-16">
                    <div className="mx-auto flex max-w-[90%] md:max-w-[80%] justify-between gap-6 px-4 lg:px-0">
                        {rafting.content}

                        <aside className="hidden lg:block lg:w-[22rem]">
                            <div className="sticky top-24">
                                <div className="mb-6 rounded-2xl border p-6 shadow-xl">
                                    <a href="#" className="mb-4 flex items-center gap-4">
                                        <Image
                                            src={C1}
                                            alt='calender'
                                            className='w-12'
                                        />

                                        <div className=" leading-6">
                                            <div className="text-lg font-semibold  text-slate-900">
                                                Upcoming Slots - 2024-25
                                            </div>
                                            <p className='text-sm'>Batches start every Thursday</p>
                                        </div>
                                    </a>
                                    <ul className='text-sm space-y-2 w-[90%] mx-auto'>
                                        {formattedDates.map((item, i) => (
                                            <li key={i} className='flex gap-4 items-center justify-between'>
                                                {item}
                                                <a href={`https://wa.me/919756620538/?text=Hello! I'm interested in kayaking in the (${item}) slot. Thank you `}
                                                    className='hover:bg-green-600 group hover:text-white px-2 py-1 rounded-lg flex justify-between items-center ring-1 ring-green-400'>
                                                    <svg
                                                        className="w-7 group-hover:text-white text-green-600"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            {" "}
                                                            <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z"></path>{" "}
                                                        </g>
                                                    </svg>
                                                    Book this slot
                                                </a>

                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-2xl border p-6 shadow-xl">
                                    <h3 className="mb-2 pb-2 border-b text-lg font-semibold">
                                        Explore more Adventures
                                    </h3>
                                    <ul className=' space-y-1'>
                                        {adventuers.map((item, i) => (
                                            <li key={i} className='hover:bg-gray-200/60 p-3 rounded-xl'>
                                                <a href={item.slug}>
                                                    <h3 className='text-base font-semibold'>
                                                        {item.title}
                                                    </h3>
                                                    <p className='text-sm line-clamp-2'>
                                                        {item.description}
                                                    </p>
                                                </a>
                                            </li>
                                        ))}
                                        {raftings.map((item, i) => (
                                            <li key={i} className='hover:bg-gray-200/60 p-3 rounded-xl'>
                                                <a href={item.slug}>
                                                    <h3 className='text-base font-semibold'>
                                                        {item.title}
                                                    </h3>
                                                    <p className='text-sm line-clamp-2'>
                                                        {item.description}
                                                    </p>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>


                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default page

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const id = params.slug

    const rafting = kayaks.find((rafting) => rafting.slug === id)

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