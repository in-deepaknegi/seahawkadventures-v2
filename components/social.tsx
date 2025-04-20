import React from "react";
import Link from "next/link";
import {
    RiFacebookFill,
    RiFacebookLine,
    RiInstagramLine,
    RiPhoneFill,
    RiPhoneLine,
    RiWhatsappLine,
} from "@remixicon/react";
import Image from "next/image";

const SocialIcons = () => {
    return (
        <section className="fixed right-0 bottom-3 z-50 md:bottom-10">
            <div className="grid grid-rows-4">
                <Link
                    href={`https://wa.me/919756620538/?text=Hi there!`}
                    target="_blank"
                    className="flex items-center justify-center bg-green-500 p-0.5"
                >
                    <span className="sr-only">Whatsapp</span>
                    <RiWhatsappLine className="size-5 text-white xl:size-6" />
                </Link>
                <Link
                    href="https://www.facebook.com/seahawkadventure/"
                    target="_blank"
                    className="flex items-center justify-center bg-[#1877f2]"
                >
                    <span className="sr-only">Facebook</span>
                    <RiFacebookFill className="size-5 text-white xl:size-6" />
                </Link>
                <Link
                    href={`https://www.instagram.com/seahawkadventures/`}
                    target="_blank"
                    className="flex items-center justify-center bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] p-1"
                >
                    <span className="sr-only">Instagram</span>
                    <RiInstagramLine className="size-5 text-white xl:size-6" />
                </Link>
                <Link
                    href={`tel:+91 97566 20538`}
                    target="_blank"
                    className="flex items-center justify-center bg-blue-600 p-1.5"
                >
                    <span className="sr-only">Call</span>
                    <RiPhoneFill className="size-5 text-white xl:size-6" />
                </Link>
                <Link
                    href="https://www.tripadvisor.in/Attraction_Review-g580106-d21358541-Reviews-Sea_Hawk_Adventure-Rishikesh_Dehradun_District_Uttarakhand.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-1.5 text-white transition-colors hover:opacity-90"
                    style={{ backgroundColor: "#25D366" }}
                >
                    <Image
                        src="/images/logos/tripadvisor-icon.png"
                        alt="Whatsapp"
                        width={100}
                        height={100}
                        className="size-5 rounded-full"
                    />
                </Link>
            </div>
        </section>
    );
};

export default SocialIcons;
