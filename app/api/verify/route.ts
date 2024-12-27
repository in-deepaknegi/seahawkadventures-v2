// import { NextRequest, NextResponse } from "next/server";
// import crypto from "crypto";

// const generatedSignature = (
//     razorpayOrderId: string,
//     razorpayPaymentId: string,
// ) => {
//     const keySecret = process.env.RAZORPAY_SECRET_ID as string;
//     if (!keySecret) {
//         throw new Error(
//             "Razorpay key secret is not defined in environment variables.",
//         );
//     }
//     const sig = crypto
//         .createHmac("sha256", keySecret)
//         .update(razorpayOrderId + "|" + razorpayPaymentId)
//         .digest("hex");
//     return sig;
// };

// export async function POST(request: NextRequest) {
//     const { orderCreationId, razorpayPaymentId, razorpaySignature, email } =
//         await request.json();

//     const signature = generatedSignature(orderCreationId, razorpayPaymentId);
//     console.log(signature);
//     console.log(razorpaySignature);

//     if (signature !== razorpaySignature) {
//         return NextResponse.json(
//             { message: "payment verification failed", isOk: false },
//             { status: 400 },
//         );
//     }

//     return NextResponse.json(
//         { message: "payment verified successfully", isOk: true },
//         { status: 200 },
//     );
// }

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const generatedSignature = (
    razorpayOrderId: string,
    razorpayPaymentId: string,
) => {
    const keySecret = process.env.RAZORPAY_SECRET_ID as string;

    const sig = crypto
        .createHmac("sha256", keySecret)
        .update(razorpayOrderId + "|" + razorpayPaymentId)
        .digest("hex");
    return sig;
};

export async function POST(request: NextRequest) {
    const { orderId, razorpayPaymentId, razorpaySignature } =
        await request.json();

    const signature = generatedSignature(orderId, razorpayPaymentId);

    console.log(signature);
    console.log(razorpaySignature);

    if (signature !== razorpaySignature) {
        return NextResponse.json(
            { message: "payment verification failed", isOk: false },
            { status: 400 },
        );
    }

    // Probably some database calls here to update order or add premium status to user
    return NextResponse.json(
        { message: "payment verified successfully", isOk: true },
        { status: 200 },
    );
}
