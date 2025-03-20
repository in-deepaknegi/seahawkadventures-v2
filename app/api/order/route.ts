// import Razorpay from "razorpay";
// import { NextRequest, NextResponse } from "next/server";

// const razorpay = new Razorpay({
//     key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
//     key_secret: process.env.RAZORPAY_SECRET_ID,
// });

// export async function POST(request: NextRequest) {
//     const { amount, currency } = (await request.json()) as {
//         amount: string;
//         currency: string;
//     };

//     var options = {
//         amount: amount,
//         currency: currency,
//         receipt: "rcp1",
//     };
//     const order = await razorpay.orders.create(options);
//     console.log(order);
//     return NextResponse.json({ orderId: order.id }, { status: 200 });
// }

import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
    key_secret: process.env.RAZORPAY_SECRET_ID,
});

export async function POST(req: Request) {
    try {
        const { amount } = await req.json();
        
        // Create Razorpay order
        const order = await razorpay.orders.create({
            amount,
            currency: "INR",
        });

        // Save payment data to database
        const payment = await prisma.payment.create({
            data: {
                razorpayOrderId: order.id,
                amount: parseFloat(amount) / 100, // Convert from paise to rupees
                currency: "INR",
                status: "pending"
            }
        });

        return NextResponse.json({ 
            orderId: order.id,
            paymentId: payment.id 
        });
    } catch (error) {
        console.error("Error creating order:", error);
        return NextResponse.json(
            { error: "Failed to create order" },
            { status: 500 }
        );
    }
}
