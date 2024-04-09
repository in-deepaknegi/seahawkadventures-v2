"use client"
import React, { useState } from 'react'

const Faq = ({ faq }) => {
    const [active, setActive] = useState(null);

    const toggleActive = (index) => {
        setActive(active === index ? null : index)
    }

    return (
        <section className='relative isolate'>
            <div className='mx-auto '>
                <div className=''>
                    <div className='mt-8 lg:mt-0'>
                        <ul className='space-y-4'>
                            {faq.map((item, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => toggleActive(i)}
                                        className='flex w-full items-start justify-between text-left'>
                                        <span className='text-base font-semibold leading-7 text-black'>
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
                                        <dd className='mt-2 text-base leading-7 text-gray-800'>
                                            {item.answer}
                                        </dd>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;