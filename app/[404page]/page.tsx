import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <main className="relative h-screen ">
            <div className="absolute -z-20 h-full w-full bg-white"></div>

            <div className="mx-auto my-auto flex h-full w-full max-w-[80%] flex-col items-center gap-0 align-middle">
                <h1 className="mt-auto text-center font-oggm text-5xl text-blue-600 md:text-[7vw]">
                    Sea Hawk Adventures
                </h1>
                <div className="mb-auto mt-10 flex items-center gap-10 text-center md:mt-5">
                    <p className="text-black">
                        v3 coming soon. This page is under maintainance, it will
                        be updated soon😊 (go back to{" "}
                        <Link href="/" className=" text-blue-600">
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
