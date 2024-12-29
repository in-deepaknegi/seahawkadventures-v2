import React from "react";
import { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/globals/navbar";
import Footer from "@/components/globals/footer";

const PrivacyPage = () => {
    return (
        <>
            <Navbar />
            <main className="bg-white px-5 py-5 font-insr md:px-0 md:py-10">
                <article className="company mx-auto space-y-6 bg-gray-50 p-5 md:max-w-[50%] md:p-10">
                    <h1 className="text-center font-mono text-2xl">
                        Privay Policy
                    </h1>
                    <p>
                        <strong>Privacy Policy for Sea Hawk Adventures</strong>
                    </p>

                    <p>
                        At <strong>Sea Hawk Adventures</strong>, we are
                        committed to protecting your privacy and ensuring a
                        secure online experience. This Privacy Policy outlines
                        the types of personal information we collect, how we use
                        it, and the steps we take to safeguard it.
                    </p>

                    <p>
                        <strong>1. Information We Collect</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Personal Information:</strong> When you book
                            a package or make an inquiry, we may collect
                            personal details such as your name, email address,
                            phone number, and payment information.
                        </li>
                        <li>
                            <strong>Non-Personal Information:</strong> We may
                            collect information such as browser type, IP
                            address, and website usage data for improving our
                            website and services.
                        </li>
                        <li>
                            <strong>Cookies:</strong> Our website uses cookies
                            to enhance user experience and track visitors&apos;
                            preferences. You can modify your browser settings to
                            disable cookies, but this may affect your experience
                            on the site.
                        </li>
                    </ul>

                    <p>
                        <strong>2. How We Use Your Information</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Booking and Service Delivery:</strong> We
                            use your personal information to process bookings,
                            confirm reservations, and provide information
                            related to your trip or inquiry.
                        </li>
                        <li>
                            <strong>Communication:</strong> We may use your
                            contact details to send updates, promotional offers,
                            and other relevant communications. You can opt-out
                            of marketing emails at any time.
                        </li>
                        <li>
                            <strong>Improvement of Services:</strong>{" "}
                            Non-personal data helps us enhance our website,
                            improve services, and provide a better user
                            experience.
                        </li>
                    </ul>

                    <p>
                        <strong>3. Data Security</strong>
                    </p>
                    <p>
                        We take reasonable measures to protect your personal
                        data from unauthorized access, alteration, or
                        disclosure. We use secure payment gateways for
                        processing payments and encrypt sensitive information.
                    </p>

                    <p>
                        <strong>4. Sharing of Information</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Third Parties:</strong> We do not sell,
                            rent, or trade your personal information to third
                            parties. However, we may share your information with
                            trusted partners and service providers who help in
                            delivering our services (e.g., payment processors,
                            camp coordinators).
                        </li>
                        <li>
                            <strong>Legal Compliance:</strong> We may disclose
                            your personal information if required by law or to
                            protect our rights, comply with legal processes, or
                            respond to governmental requests.
                        </li>
                    </ul>

                    <p>
                        <strong>5. Your Rights</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Access and Correction:</strong> You have the
                            right to access, update, or correct your personal
                            information. Please contact us if you wish to make
                            any changes.
                        </li>
                        <li>
                            <strong>Opt-out:</strong> You can opt-out of
                            receiving promotional emails or notifications by
                            using the unsubscribe link provided in the emails or
                            by contacting us directly.
                        </li>
                        <li>
                            <strong>Data Retention:</strong> We retain your
                            information only for as long as necessary to fulfill
                            the purposes outlined in this Privacy Policy unless
                            a longer retention period is required by law.
                        </li>
                    </ul>

                    <p>
                        <strong>6. Third-Party Websites</strong>
                    </p>
                    <p>
                        Our website may contain links to third-party sites. We
                        are not responsible for the privacy practices or content
                        of these external websites. Please review their privacy
                        policies before providing any personal information.
                    </p>

                    <p>
                        <strong>7. Children&apos;s Privacy</strong>
                    </p>
                    <p>
                        Our services are not intended for children under 18
                        years of age. We do not knowingly collect personal
                        information from children. If we become aware that a
                        child has provided us with personal data, we will take
                        steps to remove such information from our records.
                    </p>

                    <p>
                        <strong>8. Changes to This Privacy Policy</strong>
                    </p>
                    <p>
                        <strong>Sea Hawk Adventures</strong> reserves the right
                        to update or modify this Privacy Policy at any time. Any
                        changes will be posted on this page with the updated
                        date. We encourage you to review this policy
                        periodically for any updates.
                    </p>

                    <p>
                        <strong>9. Contact Us</strong>
                    </p>
                    <p>
                        If you have any questions or concerns about this Privacy
                        Policy or the way your information is handled, please
                        feel free to contact us at:
                    </p>
                    <ul>
                        <li>
                            Email:{" "}
                            <Link href="mailto:info@seahawkadventures.com">
                                info@seahawkadventures.com
                            </Link>
                        </li>
                        <li>
                            Phone:{" "}
                            <Link href={`tel:+91 97566 20538`}>
                                +91 97566 20538{" "}
                            </Link>{" "}
                        </li>
                        <li>
                            Address:{" "}
                            <span className="font-mono text-sm">
                                Badrinath Rd, near Shivpuri Police Station,
                                Parking Area, Shivpuri, Rishikesh, Uttarakhand
                                249192
                            </span>
                        </li>
                    </ul>

                    <p>
                        By using our website or booking a service with Sea Hawk
                        Adventures, you agree to the terms outlined in this
                        Privacy Policy.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default PrivacyPage;

const baseUrl = process.env.NEXT_PUBLIC_URL
    ? process.env.NEXT_PUBLIC_URL
    : "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),

    title: "Privacy Policy",
    description: "Privacy Policy",
    robots: "index, follow",
    alternates: {
        canonical: `${baseUrl}/privacy-policy`,
        languages: {
            en: [
                {
                    url: `${baseUrl}/privacy-policy`,
                },
            ],
        },
        types: {
            url: `${baseUrl}/privacy-policy`,
        },
    },

    openGraph: {
        title: "Privacy Policy",
        description: "Privacy Policy",
        url: `${baseUrl}/privacy-policy`,
        images: ["/images/meta/featured-img.png"],
        siteName: "Sea Hawk Adventuers",
    },

    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy",
        description: "Privacy Policy",
        images: ["/images/meta/featured-img.png"],
    },
};
