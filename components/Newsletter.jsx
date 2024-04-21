import React from "react";

const Newsletter = () => {
    return (
        <section className="relative bg-black/95 py-20 font-swim lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative isolate overflow-hidden">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mt-6 text-4xl tracking-tight text-primary sm:text-5xl">
                            Join with us.
                        </h2>
                        <h2 className="mt-6 text-4xl tracking-tight text-white sm:text-6xl">
                            Subscirbe to our newsletter.
                        </h2>
                        <p className="mt-6 font-swim text-2xl leading-8 text-gray-300">
                            Elevate your athletic journey - experience unparalleled
                            performance and taste excellence!
                        </p>
                    </div>

                    <form
                        action=""
                        className="news col-span-5 mt-6 max-w-md md:mx-auto lg:py-2"
                    >
                        <div className="flex gap-x-3">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-full bg-white px-3.5 py-2 text-black outline-none sm:text-base sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="mx-auto max-w-md rounded-full bg-primary px-3.5 py-2.5 text-base tracking-wide text-white"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
