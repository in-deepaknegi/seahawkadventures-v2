import React from "react";
import { ComponentProps } from "@/types/global";
import Link from "next/link";

const Footer: React.FC<FooterProps> = (props) => {
    const { heading } = {
        ...FooterDefaults,
        ...props,
    };
    return (
        <footer className="relative overflow-hidden border-t border-dawn-200 bg-white font-insr">

            <div className="relative mx-auto w-full max-w-[80%] py-10">
                <Link
                    href="/"
                    className="flex items-center justify-center font-oggr text-5xl text-black"
                >
                    {heading}
                </Link>

                <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-dawn-700">
                    <div className="">
                        © 2024{" "}
                        <Link href="/" className="hover:underline">
                            Sea Hawk Adventures™
                        </Link>
                        . All Rights Reserved.
                    </div>
                    <div className="">
                        Designed and Maintained by:{" "}
                        <Link target="_blank" href="https://www.cnippet.com/">
                            Cnippet & Co.
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

type FooterProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<ComponentProps>;

const FooterDefaults: ComponentProps = {
    heading: "Sea Hawk Adventures",
};
