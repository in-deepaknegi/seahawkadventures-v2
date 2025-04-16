import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <main className="relative h-screen">
            <div className="absolute -z-20 h-full w-full bg-white"></div>

            <div className="mx-auto my-auto flex h-full w-full max-w-[80%] flex-col items-center gap-0 align-middle">
                <h1 className="font-oggm mt-auto text-center text-5xl text-blue-600 md:text-[7vw]">
                    Sea Hawk Adventures
                </h1>
                <div className="mt-10 mb-auto flex items-center gap-10 text-center md:mt-5">
                    <p className="text-black">
                        The page you are looking for does not exist, it will be
                        updated soon😊 (go back to{" "}
                        <Link href="/" className="text-blue-600">
                            home
                        </Link>
                        )
                    </p>
                </div>
            </div>
        </main>
    );
};

export default page;
