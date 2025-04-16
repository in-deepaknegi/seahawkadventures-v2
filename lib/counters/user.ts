import prisma from "@/lib/prisma";

let lastUserId = 3599; // Start from 3600

export async function generateUserId(): Promise<string> {
    // Get the last user from the database
    const lastUser = await prisma.user.findFirst({
        orderBy: {
            createdAt: "desc",
        },
    });

    if (lastUser && lastUser.userId) {
        const lastNumber = parseInt(lastUser.userId.split("-")[1]);
        lastUserId = lastNumber;
    }

    lastUserId++;
    return `U-${lastUserId}`;
}
