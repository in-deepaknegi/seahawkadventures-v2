"use client"
import React, { useState } from 'react'

const FAQ = ({ data }) => {
    const [active, setActive] = useState(null);

    const toggleActive = (index) => {
        setActive(active === index ? null : index)
    }

    return (
        <section className='relative isolate'>
            <div className='mx-auto max-w-full'>
                <ul className='space-y-4'>
                    {data.map((item, i) => (
                        <li key={i}>
                            <button
                                onClick={() => toggleActive(i)}
                                className='flex w-full justify-between text-left'>
                                <span className='text-base text-black font-swim'>
                                    {item.question}
                                </span>
                                <span>
                                    {active === i ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                    )}
                                </span>
                            </button>
                            {active === i && (
                                <dd className='mt-2 text-base text-gray-700'>
                                    {item.answer}
                                </dd>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FAQ