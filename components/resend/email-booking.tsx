import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';

const MessageUsEmail = ({ bookingData }: any) => {
    const data = bookingData?.bookingData; 
    const formattedDate = new Date(data.date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });


    if (!data) {
        return (
            <Html>
                <Head />
                <Preview>No booking data available</Preview>
                <Tailwind>
                    <Body className='bg-white my-auto mx-auto font-sans'>
                        <Container className='my-[20px] mx-auto p-[20px] max-w-4xl'>
                            <Heading className='text-black text-[18px] font-normal text-left'>
                                No booking details available.
                            </Heading>
                        </Container>
                    </Body>
                </Tailwind>
            </Html>
        );
    }

    const previewText = `Welcome abroad ${data.users.map((user: any) => user.name).join(', ')}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">

                        <Heading className="text-black text-[18px] font-normal text-center p-0 my-[30px] mx-0">
                            Booking of <strong>{data.users.map((user: any) => user.name).join(', ')}</strong> on <strong>{formattedDate}</strong>
                        </Heading>

                        <Heading className="text-black text-[16px] font-normal text-left p-0 mt-[10px] mx-0">
                            <strong>Booking details</strong>
                        </Heading>
                        <ul className='list-disc ml-2 text-[16px]'>
                            <li>
                                <strong>Date</strong>: {formattedDate}
                            </li>
                            <li>
                                <strong>Route</strong>: {data.package?.route}
                            </li>
                            <li>
                                <strong>Distance</strong>: {data.package?.distance}
                            </li>
                            <li>
                                <strong>Duration</strong>: {data.package?.duration}
                            </li>
                            <li>
                                <strong>Number of Users</strong>: {data.numberOfUsers}
                            </li>
                            <li>
                                <strong>Total Amount Paid</strong>: {data.totalAmount}
                            </li>
                        </ul>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};


export default MessageUsEmail;