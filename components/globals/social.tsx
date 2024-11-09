import React from "react";
import { ComponentProps } from "@/types/global";
import { Call, Facebook, Instagram, Whatsapp } from "../icons";
import Link from "next/link";

const SocialIcons: React.FC<SocialIconsProps> = (props) => {
    const { } = {
        ...SocialIconsDefaults,
        ...props,
    };
    return (
        <section className="fixed bottom-3 left-0 z-50 rounded-xl md:bottom-10 md:top-[60%]">
            <div className="grid grid-rows-4">
                <Link
                    href={`https://wa.me/919756620538/?text=Hi there!`}
                    target="_blank"
                    className="flex items-center justify-center bg-green-500 p-0.5"
                >
                    <span className="sr-only">Whatsapp</span>
                    <Whatsapp className="size-9 text-white" />
                </Link>
                <Link
                    href="https://www.facebook.com/seahawkadventure/"
                    target="_blank"
                    className="flex items-center justify-center bg-[#1877f2]"
                >
                    <span className="sr-only">Facebook</span>
                    <Facebook className="size-8 text-white" />
                </Link>
                <Link
                    href={`https://www.instagram.com/seahawkadventures/`}
                    target="_blank"
                    className="flex items-center justify-center bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] p-1"
                >
                    <span className="sr-only">Instagram</span>
                    <Instagram />
                </Link>
                <Link
                    href={`tel:+91 97566 20538`}
                    target="_blank"
                    className="flex items-center justify-center bg-indigo-600 p-2"
                >
                    <span className="sr-only">Call</span>
                    <Call className="size-6 text-white" />
                </Link>
            </div>
        </section>
    );
};

export default SocialIcons;

type SocialIconsProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<ComponentProps>;

const SocialIconsDefaults: ComponentProps = {
    // Default prop values
};
