import prisma from "@/lib/prisma";

let lastUserId = 4499; // Start from 3600

export async function generateBookingId(): Promise<string> {
    // Get the last user from the database
    const lastUser = await prisma.booking.findFirst({
        orderBy: {
            createdAt: "desc",
        },
    });

    if (lastUser && lastUser.bookingId) {
        const lastNumber = parseInt(lastUser.bookingId.split("-")[1]);
        lastUserId = lastNumber;
    }

    lastUserId++;
    return `B-${lastUserId}`;
}
