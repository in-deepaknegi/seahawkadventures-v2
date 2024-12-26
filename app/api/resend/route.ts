import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import MessageUsEmail from '@/components/resend/email-booking';

const resend: Resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(req: Request): Promise<Response> {
    const bookingData = await req.json();
    console.log("Received bookingData:", bookingData);
    
    try {
        const data: any = await resend.emails.send({
            from: 'booking@seahawkadventures.com',
            to: "seahawk.adventures05@gmail.com",
            subject: `Booking Confimation`,
            react: MessageUsEmail({ bookingData }),
        });

        return NextResponse.json(data);
    } catch (error: unknown) {
        return NextResponse.json({ error });
    }
}