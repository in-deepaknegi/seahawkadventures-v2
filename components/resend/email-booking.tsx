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
    const previewText = `Welcome abroad ${bookingData.users}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className='bg-white my-auto mx-auto font-sans'>
                    <Container className='my-[20px] mx-auto p-[20px] max-w-4xl'>
                        <Heading className='text-black text-[18px] font-normal text-left'>
                            Hello {bookingData.package.id} {bookingData.package.route}
                        </Heading>

                        <Hr className='my-[16px] mx-0 w-full' />
                        <Text className='text-[#000000] text-[16px]'>
                            A warm and heartfelt welcome to deepaknegi.in! We&apos;re thrilled to have you join our community, and we want to express our sincere gratitude for choosing to embark on this journey with us.
                        </Text>
                        <Text className='text-[#000000] text-[16px]'>
                            At deepaknegi.in, we are dedicated to providing a space where curiosity meets knowledge, and where your aspirations find the wings to soar. Our platform is more than just a website; it&apos;s a dynamic community fueled by a passion for learning, growth, and connection.
                        </Text>
                        <Text className='text-[#000000] text-[16px]'>
                            Thank you once again for joining us. Together, let&apos;s make this journey one of discovery, growth, and shared experiences.
                        </Text>
                        <Text className='text-[#000000] text-[16px]'>
                            Here&apos;s to your success and fulfillment!
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default MessageUsEmail;