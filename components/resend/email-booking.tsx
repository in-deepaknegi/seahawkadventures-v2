import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = "https://www.seahawkadventures.com/";

const MessageUsEmail = ({ bookingData }: any) => {
    const data = bookingData;
    const formattedDate = new Date(data.date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    if (!data) {
        return (
            <Html>
                <Head />
                <Preview>No booking data available</Preview>
                <Tailwind>
                    <Body className="mx-auto my-auto bg-white font-sans">
                        <Container className="mx-auto my-[20px] max-w-4xl p-[20px]">
                            <Heading className="text-left text-[18px] font-normal text-black">
                                No booking details available.
                            </Heading>
                        </Container>
                    </Body>
                </Tailwind>
            </Html>
        );
    }

    // const previewText = `Welcome abroad ${data.users.map((user: any) => user.name).join(', ')}`;

    return (
        // <Html>
        //     <Head />
        //     <Preview>{previewText}</Preview>
        //     <Tailwind>
        //         <Body className="bg-white my-auto mx-auto font-sans px-2">
        //             <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">

        //                 <Heading className="text-black text-[18px] font-normal text-center p-0 my-[30px] mx-0">
        //                     Booking of <strong>{data.users.map((user: any) => user.name).join(', ')}</strong> on <strong>{formattedDate}</strong>
        //                 </Heading>

        //                 <Heading className="text-black text-[16px] font-normal text-left p-0 mt-[10px] mx-0">
        //                     <strong>Booking details</strong>
        //                 </Heading>
        //                 <ul className='list-disc ml-2 text-[16px]'>
        //                     <li>
        //                         <strong>Date</strong>: {formattedDate}
        //                     </li>
        //                     <li>
        //                         <strong>Route</strong>: {data.package?.route}
        //                     </li>
        //                     <li>
        //                         <strong>Distance</strong>: {data.package?.distance}
        //                     </li>
        //                     <li>
        //                         <strong>Duration</strong>: {data.package?.duration}
        //                     </li>
        //                     <li>
        //                         <strong>Number of Users</strong>: {data.numberOfUsers}
        //                     </li>
        //                     <li>
        //                         <strong>Total Amount Paid</strong>: {data.totalAmount}
        //                     </li>
        //                 </ul>

        //             </Container>
        //         </Body>
        //     </Tailwind>
        // </Html>
        <Html>
            <Head />
            <Tailwind>
                <Preview>
                    Thank you for booking with Sea Hawk Adventures
                </Preview>
                <Body className="font-['Google Sans',Roboto,Arial,sans-serif] mx-auto my-auto bg-[#f8f9fa] px-2 py-6">
                    <Container className="mx-auto w-[500px] max-w-full rounded-2xl bg-white p-6">
                        {/* Header Section */}
                        <Section className="mb-4 text-center">
                            <Img
                                src={`${baseUrl}/images/meta/logo.png`}
                                width="80"
                                height="auto"
                                alt="Cnippet Logo"
                                className="mx-auto rounded-full"
                            />
                        </Section>

                        {/* Main Content */}
                        <Section className="mx-auto mb-4">
                            <Row>
                                <Column>
                                    <Heading className="mb-4 text-center text-[24px] font-normal text-[#202124]">
                                        Thank You for Booking with Sea Hawk
                                        Adventures
                                    </Heading>

                                    <Text className="mb-4 text-center text-[14px] text-[#5f6368]">
                                        Dear {data.users[0].name},
                                    </Text>

                                    <Text className="mb-4 text-[14px] text-[#5f6368]">
                                        Your booking has been confirmed. If you
                                        have any questions, please contact us at
                                        +91 9826000000 or email us at
                                        info@seahawkadventures.com.
                                    </Text>

                                    <div className="rounded-lg bg-[#f8f9fa] p-6">
                                        <Text className="m-0 mb-2 text-[14px] font-medium text-[#202124]">
                                            Here&apos;s a copy of the booking
                                            details:
                                        </Text>
                                        <div className="mb-3 flex flex-col gap-2">
                                            <Text className="m-0 text-[14px] font-medium text-[#202124]">
                                                Name:
                                            </Text>
                                            <Text className="m-0 pl-2 text-[14px] text-[#5f6368]">
                                                {data.users[0].name}
                                            </Text>
                                        </div>

                                        <div className="mb-3 flex flex-col gap-2">
                                            <Text className="m-0 text-[14px] font-medium text-[#202124]">
                                                Email:
                                            </Text>
                                            <Text className="m-0 pl-2 text-[14px] leading-6 whitespace-pre-wrap text-[#5f6368]">
                                                {data.users[0].email}
                                            </Text>
                                        </div>

                                        <div className="mb-3 flex flex-col gap-2">
                                            <Text className="m-0 text-[14px] font-medium text-[#202124]">
                                                Phone:
                                            </Text>
                                            <Text className="m-0 pl-2 text-[14px] text-[#5f6368]">
                                                {data.users[0].mobile}
                                            </Text>
                                        </div>

                                        <div className="mb-3 flex flex-col gap-2">
                                            <Text className="m-0 text-[14px] font-medium text-[#202124]">
                                                Date:
                                            </Text>
                                            <Text className="m-0 pl-2 text-[14px] text-[#5f6368]">
                                                {formattedDate}
                                            </Text>
                                        </div>

                                        <div className="mb-3 flex flex-col gap-2">
                                            <Text className="m-0 text-[14px] font-medium text-[#202124]">
                                                Number of Users:
                                            </Text>
                                            <Text className="m-0 pl-2 text-[14px] text-[#5f6368]">
                                                {data.numberOfUsers}
                                            </Text>
                                        </div>

                                        <div className="mb-3 flex flex-col gap-2">
                                            <Text className="m-0 text-[14px] font-medium text-[#202124]">
                                                Total Amount Paid:
                                            </Text>
                                            <Text className="m-0 pl-2 text-[14px] text-[#5f6368]">
                                                {data.totalAmount}
                                            </Text>
                                        </div>
                                    </div>

                                    <Section className="mt-6 text-center">
                                        <Text className="mb-4 text-[14px] text-[#5f6368]">
                                            If you need to send us additional
                                            information, please reply to this
                                            email.
                                        </Text>
                                    </Section>
                                </Column>
                            </Row>
                        </Section>

                        <hr className="my-6 border-t border-[#e8eaed]" />
                        {/* Footer */}
                        <Section className="mt-2 text-center">
                            <Text className="my-1 text-[12px] text-[#5f6368]">
                                © {new Date().getFullYear()} Sea Hawk
                                Adventures · All rights reserved
                            </Text>
                            <Text className="my-1 text-[12px] text-[#5f6368]">
                                This is an automated confirmation of your
                                booking.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default MessageUsEmail;
