import React from "react";
import { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/globals/navbar";
import Footer from "@/components/globals/footer";

const TermsPage = () => {
    return (
        <>
            <Navbar />
            <main className="bg-white px-5 py-5  md:px-0 md:py-10">
                <article className="company mx-auto space-y-6 bg-gray-50 p-5 md:max-w-[50%] md:p-10">
                    <h1 className="text-center font-mono text-2xl">
                        Terms and Conditions
                    </h1>
                    <p>
                        Team <strong>Sea Hawk Adventure</strong> requests that
                        you thoroughly review all the packages before booking.
                        We provide extensive details on our Adventure and
                        Camping packages, and due to the variety of options,
                        it&apos;s not possible to explain everything over the
                        phone. We recommend visiting our website and reading all
                        relevant information for the camp and activities you are
                        considering. If you have any questions, please feel free
                        to contact us at{" "}
                        <Link href={`tel:+91 97566 20538`}>
                            +91 97566 20538{" "}
                        </Link>{" "}
                        for detailed assistance.
                    </p>

                    <p>
                        By submitting the advance payment, you agree to our
                        Standard Terms & Conditions outlined below:
                    </p>

                    <ul>
                        <li>
                            <strong>Changes to Terms:</strong> Sea Hawk
                            Adventure reserves the right to modify, add, or
                            remove any terms and conditions without prior
                            notice.
                        </li>

                        <li>
                            <strong>Prohibited Items:</strong> The carrying of
                            firearms, weapons, or illegal substances is strictly
                            prohibited.
                        </li>

                        <li>
                            <strong>Rafting and Activity Booking:</strong>{" "}
                            Visitors interested in participating in activities
                            like rafting should inform the camp manager of their
                            headcount in advance, especially for the following
                            day’s activities. This ensures proper booking
                            arrangements. If you wish to participate on the
                            first day, please inform the camp as well.
                        </li>

                        <li>
                            <strong>
                                Health and Safety for Adventure Activities:
                            </strong>{" "}
                            If a visitor is found to be under the influence of
                            alcohol or drugs, or deemed physically or medically
                            unfit for rafting or any adventure activities
                            (including but not limited to heart conditions,
                            asthma, epilepsy, etc.), the activity will not
                            proceed. No refunds or discounts will be given in
                            such situations. The decision of the guide or
                            management is final in these matters.
                        </li>

                        <li>
                            <strong>
                                No Refund on Personal Cancellations:
                            </strong>{" "}
                            Sea Hawk Adventure will not issue a refund if you
                            choose not to stay at the camp for personal reasons.
                            Always ensure that you thoroughly review the camp
                            details, including facilities, distance, and
                            photographs before booking.
                        </li>

                        <li>
                            <strong>No In-Room Services:</strong> We do not
                            offer in-room services. The consumption of food,
                            beverages, or smoking inside cottages is prohibited.
                        </li>

                        <li>
                            <strong>Late Check-In or Early Check-Out:</strong>{" "}
                            There will be no refund or discount for early
                            check-out or late check-in.
                        </li>

                        <li>
                            <strong>Weather-Related Cancellations:</strong> No
                            refunds will be provided if activities are canceled
                            due to adverse weather conditions or any Act of God.
                        </li>

                        <li>
                            <strong>Reduction in Group Size:</strong> The cost
                            of the package will remain the same even if the
                            number of persons in the group is reduced.
                        </li>

                        <li>
                            <strong>Disclaimer & Liability Waiver:</strong>{" "}
                            Visitors are required to sign a disclaimer/liability
                            waiver form upon arrival. A valid proof of identity
                            must be carried at check-in.
                        </li>

                        <li>
                            <strong>Driver Accommodation:</strong> Drivers are
                            responsible for their own lodging and boarding
                            arrangements.
                        </li>

                        <li>
                            <strong>Force Majeure Events:</strong> Sea Hawk
                            Adventure is not responsible for any changes,
                            delays, or cancellations arising due to roadblocks,
                            natural disasters, or unforeseen events beyond our
                            control. We will not provide refunds for fares in
                            such cases.
                        </li>

                        <li>
                            <strong>Timely Readiness:</strong> The execution of
                            all activities within the 24-hour package is
                            dependent on the timely readiness of the visitor.
                        </li>

                        <li>
                            <strong>River Safety & Restrictions:</strong>{" "}
                            Visitors are not allowed near the river at night.
                            Swimming in the river is prohibited unless wearing a
                            life jacket.
                        </li>

                        <li>
                            <strong>Advance Payment:</strong> To confirm a
                            reservation, an advance of at least 30% of the total
                            package cost is required. The remaining balance must
                            be paid upon check-in, in cash.
                        </li>

                        <li>
                            <strong>Non-Refundable Deposits:</strong> If the
                            balance amount is not received by check-in time, the
                            booking will be considered canceled from the
                            guest&apos;s end.
                        </li>

                        <li>
                            <strong>Weather-Dependent Activities:</strong> All
                            activities are subject to weather conditions. We do
                            not guarantee specific experiences if weather
                            conditions are unfavorable.
                        </li>

                        <li>
                            <strong>Personal Belongings:</strong> Sea Hawk
                            Adventure and its partners are not responsible for
                            any lost, damaged, or stolen personal items such as
                            cameras, mobile phones, or watches.
                        </li>

                        <li>
                            <strong>Camp Facilities:</strong> The facilities are
                            exclusive to guests. Any damage to the
                            infrastructure, utilities, or materials must be paid
                            for by the responsible guest or group on the spot. A
                            minimum damage charge of INR 10,000 may apply.
                        </li>

                        <li>
                            <strong>Damage Settlement:</strong> Any damage
                            caused by guests must be paid for at check-out.
                            Damage charges are non-negotiable.
                        </li>

                        <li>
                            <strong>Booking & Reservation Rights:</strong> Sea
                            Hawk Adventure reserves the right to accept,
                            decline, or cancel any bookings or reservations and
                            may evict any guest causing trouble or exhibiting
                            disruptive behavior without any refund for lost
                            holiday days.
                        </li>

                        <li>
                            <strong>No Insurance Provided:</strong> We do not
                            offer insurance coverage for accidents, sickness,
                            theft, or other personal risks. It is advisable for
                            visitors to arrange their own insurance for such
                            coverage.
                        </li>

                        <li>
                            <strong>Trekking to Campsites:</strong> Depending on
                            the campsite, visitors may be required to trek from
                            50 meters to 500 meters from the road/parking area.
                            Please refer to the specific camp details on our
                            website to understand the terrain and requirements
                            before booking.
                        </li>

                        <li>
                            <strong>Behavior Guidelines:</strong> Any
                            unreasonable or threatening behavior will not be
                            tolerated. The camp manager reserves the right to
                            refuse entry to guests causing trouble to others. No
                            refund will be provided if this occurs.
                        </li>

                        <li>
                            <strong>Package Duration and Meals:</strong> For 1N
                            2D (23 hours), 3 meals (from Day 1 Lunch to Day 2
                            Breakfast) are provided. For 2N 3D (48 hours), 6
                            meals (from Day 1 Lunch to Day 3 Breakfast) are
                            provided.
                        </li>

                        <li>
                            <strong>Jurisdiction:</strong> Any disputes related
                            to this offer will be subject to the exclusive
                            jurisdiction of the courts in [477J+PFC, Bsnl
                            Colony, Rishikesh, Uttarakhand 249201].
                        </li>
                    </ul>

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

export default TermsPage;

const baseUrl = process.env.NEXT_PUBLIC_URL
    ? process.env.NEXT_PUBLIC_URL
    : "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),

    title: "Terms and Conditions",
    description: "Terms and Conditions",
    robots: "index, follow",
    alternates: {
        canonical: `${baseUrl}/terms-and-conditions`,
        languages: {
            en: [
                {
                    url: `${baseUrl}/terms-and-conditions`,
                },
            ],
        },
        types: {
            url: `${baseUrl}/terms-and-conditions`,
        },
    },

    openGraph: {
        title: "Terms and Conditions",
        description: "Terms and Conditions",
        url: `${baseUrl}/terms-and-conditions`,
        images: ["/images/meta/featured-img.png"],
        siteName: "Sea Hawk Adventuers",
    },

    twitter: {
        card: "summary_large_image",
        title: "Terms and Conditions",
        description: "Terms and Conditions",
        images: ["/images/meta/featured-img.png"],
    },
};
