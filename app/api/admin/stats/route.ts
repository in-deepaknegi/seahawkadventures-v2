import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const [
            totalBookings,
            totalUsers,
            totalRevenue,
            recentBookings,
            recentPayments,
        ] = await Promise.all([
            prisma.booking.count(),
            prisma.user.count(),
            prisma.payment.aggregate({
                _sum: {
                    amount: true,
                },
                where: {
                    status: "SUCCESS",
                },
            }),
            prisma.booking.findMany({
                take: 5,
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    user: true,
                },
            }),
            prisma.payment.findMany({
                take: 5,
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    user: true,
                },
            }),
        ]);

        return NextResponse.json({
            totalBookings,
            totalUsers,
            totalRevenue: totalRevenue._sum.amount || 0,
            recentBookings,
            recentPayments,
        });
    } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        return NextResponse.json(
            { error: "Failed to fetch dashboard statistics" },
            { status: 500 }
        );
    }
} 