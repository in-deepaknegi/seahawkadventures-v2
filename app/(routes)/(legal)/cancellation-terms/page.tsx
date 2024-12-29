import React from "react";
import { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/globals/navbar";
import Footer from "@/components/globals/footer";

const CancellationPage = () => {
    return (
        <>
            <Navbar />
            <main className="bg-white px-5 py-5 font-insr md:px-0 md:py-10">
                <article className="company mx-auto space-y-6 bg-gray-50 p-5 md:max-w-[50%] md:p-10">
                    <h1 className="text-center font-mono text-2xl">
                        Booking Policy & Cancellation Terms
                    </h1>
                    <p>
                        Before making the payment, you are agreeing to our{" "}
                        <Link href="/terms-and-conditions" target="_blank">
                            Regular Terms & Conditions
                        </Link>{" "}
                        ,{" "}
                        <Link href="/privacy-policy" target="_blank">
                            privacy policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/cancellation-terms">
                            Booking Cancellation Terms
                        </Link>
                        .
                    </p>
                    <ul className="">
                        <li>
                            Call us at{" "}
                            <Link href={`tel:+91 97566 20538`}>
                                +91 97566 20538{" "}
                            </Link>{" "}
                            and inquire about the availability of the camp
                            before transferring any advance amount.
                        </li>
                        <li>
                            To reserve the slots (Camp/Tent/Cottage/Tour) for
                            your travel dates, deposit a minimum of 30% of the
                            total package cost as an advance.
                        </li>
                        <li>
                            You can submit the advance amount through Paytm,
                            PhonePe, Google Pay, or by bank transfer.
                        </li>
                        <li>
                            Once the payment is done and the amount is reflected
                            in our account, a confirmation mail/WhatsApp message
                            will be sent to you with details such as the camp
                            address, camp manager&apos;s contact numbers,
                            payment status, check-in/check-out dates, etc.
                            Simultaneously, your booking details will be shared
                            with the camp manager of the booked camp.
                        </li>
                    </ul>

                    <p>
                        <strong>Child Policy:</strong>
                    </p>
                    <ul className="">
                        <li>
                            Children between 6 to 11 years are allowed to stay
                            with their parents at 50% of the applicable adult
                            charges.
                        </li>
                        <li>
                            Children below 5 years can stay with their parents
                            at no additional charge.
                        </li>
                    </ul>

                    <p>
                        <strong>Cancellation Terms:</strong>
                    </p>
                    <ul>
                        <li>
                            The cancellation policy will apply to your advance
                            booking amount.
                        </li>
                        <li>No refund in case of natural calamities.</li>
                        <li>
                            If cancellation is made more than 15 days prior to
                            the arrival date - A full refund (Rs 500/- will be
                            deducted as a cancellation charge).
                        </li>
                        <li>
                            If cancellation is made from 15 days to 0 days
                            before the arrival date - No refund.
                        </li>
                        <li>
                            The cancellation refund will be processed within 7
                            working days.
                        </li>
                    </ul>

                    <p>
                        <strong>
                            Few Important Points From Terms & Conditions:
                        </strong>
                    </p>
                    <ul>
                        <li>
                            No refund will be issued if visitors choose not to
                            stay in the camps for personal reasons. We provide
                            the same camp and package as mentioned on the
                            website. Please check all the details before
                            selecting your camp (e.g., facilities, distance from
                            parking, photographs, etc.).
                        </li>
                        <li>
                            There will be no discount for early check-in or late
                            check-out.
                        </li>
                        <li>
                            No refund will be processed if activities are
                            canceled due to an Act of God or bad weather
                            conditions.
                        </li>
                        <li>
                            The total package cost will not be affected if the
                            number of persons in the group decreases.
                        </li>
                        <li>
                            The advance payment is required to reserve the slots
                            (Camps/Tents/Cottages) for your travel date. Booking
                            is not confirmed until the camp receives the full
                            (100%) payment.
                        </li>
                        <li>
                            An advance payment is required to confirm the
                            booking.
                        </li>
                        <li>
                            The remaining balance should be paid during check-in
                            time (11:00 AM) in cash.
                        </li>
                        <li>
                            If the balance amount is not received by the camp
                            during the specified time (11:00 AM to 12:00 PM),
                            the booking will be canceled (from the guest&apos;s
                            end), and there will be no refund.
                        </li>
                        <li>
                            If the guest refuses to pay the complete balance
                            amount during check-in, the booking will be canceled
                            (from the guest&apos;s end), and no refund will be
                            provided.
                        </li>
                    </ul>

                    <p>
                        Team <strong>Sea Hawk Adventure</strong> requests you to
                        thoroughly check all the terms and conditions and
                        cancellation terms. There is plenty of information
                        associated with the Camping and Rafting packages, and it
                        is not possible to remember everything over the phone.
                        Please read the full details of the camp you are
                        selecting on our website. If you have any questions
                        regarding the package, feel free to inquire at{" "}
                        <Link href={`tel:+91 97566 20538`}>
                            +91 97566 20538{" "}
                        </Link>{" "}
                        for complete information.
                    </p>

                    <p>
                        If you have any queries regarding booking or package
                        inclusions, please do not hesitate to contact us by call
                        or email.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default CancellationPage;

const baseUrl = process.env.NEXT_PUBLIC_URL
    ? process.env.NEXT_PUBLIC_URL
    : "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),

    title: "Booking Policy & Cancellation Terms",
    description: "Booking Policy & Cancellation Terms",
    robots: "index, follow",
    alternates: {
        canonical: `${baseUrl}/cancellation-terms`,
        languages: {
            en: [
                {
                    url: `${baseUrl}/cancellation-terms`,
                },
            ],
        },
        types: {
            url: `${baseUrl}/cancellation-terms`,
        },
    },

    openGraph: {
        title: "Booking Policy & Cancellation Terms",
        description: "Booking Policy & Cancellation Terms",
        url: `${baseUrl}/cancellation-terms`,
        images: ["/images/meta/featured-img.png"],
        siteName: "Sea Hawk Adventuers",
    },

    twitter: {
        card: "summary_large_image",
        title: "Booking Policy & Cancellation Terms",
        description: "Booking Policy & Cancellation Terms",
        images: ["/images/meta/featured-img.png"],
    },
};
