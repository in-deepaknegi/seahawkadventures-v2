import React from "react";

const Form = () => {
    return (
        <section
            id="contact-form"
            className="relative isolate overflow-hidden font-swir"
        >
            <div className="mx-auto grid max-w-full grid-cols-1 pb-10 pt-24 md:max-w-[85%]  lg:grid-cols-2">
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="mx-auto flex flex-col justify-between gap-6">
                            <div className="flex w-fit gap-4 rounded-3xl bg-[#f0f4ed] px-4 py-2 text-base text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 9 5 12 1.8-5.2L21 14Z" />
                                    <path d="M7.2 2.2 8 5.1" />
                                    <path d="m5.1 8-2.9-.8" />
                                    <path d="M14 4.1 12 6" />
                                    <path d="m6 12-1.9 2" />
                                </svg>
                                Contact us
                            </div>
                            <p className="mt-2 text-3xl font-bold text-black sm:text-5xl">
                                Have questions? <br /> Get in touch!
                            </p>

                            <p className="mt-auto max-w-xl font-swim text-xl leading-8 text-gray-600">
                                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                                Suspendisse.
                            </p>
                        </div>
                    </div>
                </div>

                <form className="form mx-auto my-auto mt-8 max-w-xl space-y-8 px-6 lg:mt-0">
                    <div className="relative">
                        <svg
                            className="absolute bottom-2 h-7 w-7"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
                                    fill="#2e2d2d"
                                ></path>
                            </g>
                        </svg>
                        <input
                            type="name"
                            id="name"
                            placeholder="Name"
                            required
                            className="ml-10"
                        />
                    </div>
                    <div className="relative">
                        <svg
                            className="absolute bottom-2 h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
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
                                <g id="style=fill">
                                    {" "}
                                    <g id="email">
                                        {" "}
                                        <path
                                            id="Subtract"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z"
                                            fill="#272626"
                                        ></path>{" "}
                                    </g>{" "}
                                </g>{" "}
                            </g>
                        </svg>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            required
                            className="ml-10"
                        />
                    </div>

                    <div className="relative sm:col-span-2">
                        <svg
                            className="absolute top-2 h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
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
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.25 22C3.25 21.5858 3.58579 21.25 4 21.25H20C20.4142 21.25 20.75 21.5858 20.75 22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22Z"
                                    fill="#323334"
                                ></path>{" "}
                                <path
                                    d="M11.5201 14.929L11.5201 14.9289L17.4368 9.01225C16.6315 8.6771 15.6777 8.12656 14.7757 7.22455C13.8736 6.32238 13.323 5.36846 12.9879 4.56312L7.07106 10.4799L7.07101 10.48C6.60932 10.9417 6.37846 11.1725 6.17992 11.4271C5.94571 11.7273 5.74491 12.0522 5.58107 12.396C5.44219 12.6874 5.33894 12.9972 5.13245 13.6167L4.04356 16.8833C3.94194 17.1882 4.02128 17.5243 4.2485 17.7515C4.47573 17.9787 4.81182 18.0581 5.11667 17.9564L8.38334 16.8676C9.00281 16.6611 9.31256 16.5578 9.60398 16.4189C9.94775 16.2551 10.2727 16.0543 10.5729 15.8201C10.8275 15.6215 11.0584 15.3907 11.5201 14.929Z"
                                    fill="#323334"
                                ></path>{" "}
                                <path
                                    d="M19.0786 7.37044C20.3071 6.14188 20.3071 4.14999 19.0786 2.92142C17.85 1.69286 15.8581 1.69286 14.6296 2.92142L13.9199 3.63105C13.9296 3.6604 13.9397 3.69015 13.9502 3.72028C14.2103 4.47 14.701 5.45281 15.6243 6.37602C16.5475 7.29923 17.5303 7.78999 18.28 8.05009C18.31 8.0605 18.3396 8.07054 18.3688 8.08021L19.0786 7.37044Z"
                                    fill="#323334"
                                ></path>{" "}
                            </g>
                        </svg>
                        <textarea
                            id="message"
                            rows={3}
                            placeholder="How can we help you?"
                            className="ml-10"
                        ></textarea>
                    </div>

                    <p className="text-base text-gray-700">
                        By submitting this form you agree to our
                        <span className=" font-swim text-primary">
                            <a href="#"> terms and conditions </a>
                        </span>
                        and our
                        <span className=" font-swim text-primary">
                            <a href="#"> privacy policy</a>
                        </span>
                        .
                    </p>

                    <button
                        type="submit"
                        className="rounded-full bg-primary px-5 py-3 text-center text-base font-medium text-white sm:w-fit"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Form;
