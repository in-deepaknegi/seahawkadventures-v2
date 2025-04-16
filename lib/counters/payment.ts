import prisma from "@/lib/prisma";

let lastUserId = 1499; // Start from 3600

export async function generatePaymentId(): Promise<string> {
    // Get the last user from the database
    const lastUser = await prisma.payment.findFirst({
        orderBy: {
            createdAt: "desc",
        },
    });

    if (lastUser && lastUser.paymentId) {
        const lastNumber = parseInt(lastUser.paymentId.split("-")[1]);
        lastUserId = lastNumber;
    }

    lastUserId++;
    return `TXN-${lastUserId}`;
}
