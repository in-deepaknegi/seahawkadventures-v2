"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Users,
    Calendar,
    CreditCard,
    Star,
    Bell,
    Search,
    ArrowUpRight,
    ArrowDownRight,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminSidebar from "@/app/admin/_components/admin-sidebar";
import AdminHeader from "@/app/admin/_components/admin-header";

interface DashboardStats {
    totalBookings: number;
    totalUsers: number;
    totalRevenue: number;
    recentBookings: any[];
    recentPayments: any[];
}

interface Booking {
    id: string;
    bookingId: string;
    customer: string;
    package: string;
    amount: number;
    date: Date;
    status: string;
    user: {
        name: string;
        email: string;
    };
}

interface User {
    id: string;
    userId: string;
    name: string;
    email: string;
    phone: string;
    bookings: Booking[];
    joinedAt: Date;
}

interface Payment {
    id: string;
    paymentId: string;
    amount: number;
    status: string;
    currency: string;
    createdAt: Date;
    user: {
        name: string;
        email: string;
    };
}

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [payments, setPayments] = useState<Payment[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check authentication
        const isAuthenticated = localStorage.getItem("adminAuthenticated");
        if (!isAuthenticated) {
            router.push("/admin/login");
            return;
        }

        const fetchData = async () => {
            try {
                const [statsRes, bookingsRes, usersRes, paymentsRes] = await Promise.all([
                    fetch("/api/admin/stats"),
                    fetch("/api/admin/bookings"),
                    fetch("/api/admin/users"),
                    fetch("/api/admin/payments"),
                ]);

                const [statsData, bookingsData, usersData, paymentsData] = await Promise.all([
                    statsRes.json(),
                    bookingsRes.json(),
                    usersRes.json(),
                    paymentsRes.json(),
                ]);

                setStats(statsData);
                setBookings(bookingsData);
                setUsers(usersData);
                setPayments(paymentsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="flex">
                {/* Sidebar */}
                {/* <AdminSidebar /> */}

                {/* Main Content */}
                <div className="flex-1 mx-auto max-w-7xl">
                    <AdminHeader title="Dashboard" />

                    <main className="p-6">
                        {/* Overview Stats */}
                        <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">
                                                Total Bookings
                                            </p>
                                            <h3 className="mt-1 text-2xl font-bold">
                                                {stats?.totalBookings || 0}
                                            </h3>
                                            <p className="mt-1 flex items-center text-xs text-green-600">
                                                <ArrowUpRight className="mr-1 h-3 w-3" />
                                                <span>12% from last month</span>
                                            </p>
                                        </div>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                            <Calendar className="h-6 w-6 text-blue-600" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">
                                                Total Revenue
                                            </p>
                                            <h3 className="mt-1 text-2xl font-bold">
                                                ₹{stats?.totalRevenue.toLocaleString() || 0}
                                            </h3>
                                            <p className="mt-1 flex items-center text-xs text-green-600">
                                                <ArrowUpRight className="mr-1 h-3 w-3" />
                                                <span>8% from last month</span>
                                            </p>
                                        </div>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                            <CreditCard className="h-6 w-6 text-green-600" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">
                                                Total Users
                                            </p>
                                            <h3 className="mt-1 text-2xl font-bold">
                                                {stats?.totalUsers || 0}
                                            </h3>
                                            <p className="mt-1 flex items-center text-xs text-green-600">
                                                <ArrowUpRight className="mr-1 h-3 w-3" />
                                                <span>5% from last month</span>
                                            </p>
                                        </div>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                                            <Users className="h-6 w-6 text-purple-600" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">
                                                Avg. Rating
                                            </p>
                                            <h3 className="mt-1 text-2xl font-bold">
                                                4.8/5
                                            </h3>
                                            <p className="mt-1 flex items-center text-xs text-red-600">
                                                <ArrowDownRight className="mr-1 h-3 w-3" />
                                                <span>0.2 from last month</span>
                                            </p>
                                        </div>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                                            <Star className="h-6 w-6 text-yellow-600" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Main Content Tabs */}
                        <Tabs
                            defaultValue="overview"
                            className="space-y-4 mt-10"
                            onValueChange={setActiveTab}
                        >
                            <div className="flex items-center justify-between">
                                <TabsList className="bg-black text-gray-300">
                                    <TabsTrigger value="overview">
                                        Overview
                                    </TabsTrigger>
                                    <TabsTrigger value="bookings">
                                        Bookings
                                    </TabsTrigger>
                                    <TabsTrigger value="users">
                                        Users
                                    </TabsTrigger>
                                    <TabsTrigger value="payments">
                                        Payments
                                    </TabsTrigger>
                                    <TabsTrigger value="reviews">
                                        Reviews
                                    </TabsTrigger>
                                </TabsList>
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" size="sm">
                                        <Bell className="mr-2 h-4 w-4" />
                                        Notifications
                                    </Button>
                                    <Button size="sm">Export Data</Button>
                                </div>
                            </div>

                            {/* Overview Tab */}
                            <TabsContent value="overview" className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    <Card className="col-span-2">
                                        <CardHeader>
                                            <CardTitle>
                                                Booking Analytics
                                            </CardTitle>
                                            <CardDescription>
                                                Booking trends over the last 30
                                                days
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="pl-2">
                                            <div className="flex h-[300px] items-center justify-center rounded-md bg-gray-50">
                                                <p className="text-gray-500">
                                                    Chart Placeholder
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Popular Packages
                                            </CardTitle>
                                            <CardDescription>
                                                Most booked adventures
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {[
                                                    {
                                                        name: "Beginner's Rafting",
                                                        count: 248,
                                                        percentage: 35,
                                                    },
                                                    {
                                                        name: "Intermediate Rafting",
                                                        count: 187,
                                                        percentage: 26,
                                                    },
                                                    {
                                                        name: "Kayaking Basics",
                                                        count: 124,
                                                        percentage: 18,
                                                    },
                                                    {
                                                        name: "Overnight Camping",
                                                        count: 98,
                                                        percentage: 14,
                                                    },
                                                    {
                                                        name: "Advanced Rafting",
                                                        count: 52,
                                                        percentage: 7,
                                                    },
                                                ].map((item, index) => (
                                                    <div key={index}>
                                                        <div className="mb-1 flex items-center justify-between">
                                                            <span className="text-sm font-medium">
                                                                {item.name}
                                                            </span>
                                                            <span className="text-sm text-gray-500">
                                                                {item.count}{" "}
                                                                bookings
                                                            </span>
                                                        </div>
                                                        <div className="h-2 w-full rounded-full bg-gray-200">
                                                            <div
                                                                className="h-2 rounded-full bg-blue-600"
                                                                style={{
                                                                    width: `${item.percentage}%`,
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Recent Bookings
                                            </CardTitle>
                                            <CardDescription>
                                                Latest 5 bookings
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {stats?.recentBookings.map((booking, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-between"
                                                    >
                                                        <div>
                                                            <p className="font-medium">
                                                                {booking.user.name}
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                {booking.package}
                                                            </p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="font-medium">
                                                                ₹{booking.amount}
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                {new Date(booking.date).toLocaleDateString()}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <Button
                                                variant="ghost"
                                                className="mt-4 w-full"
                                            >
                                                View All Bookings
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Recent Reviews
                                            </CardTitle>
                                            <CardDescription>
                                                Latest 5 customer reviews
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {[
                                                    {
                                                        name: "Vikram Mehta",
                                                        rating: 5,
                                                        comment:
                                                            "Amazing experience! The guides were very professional.",
                                                        date: "Today",
                                                    },
                                                    {
                                                        name: "Emma Wilson",
                                                        rating: 4,
                                                        comment:
                                                            "Great adventure, would recommend to friends.",
                                                        date: "Yesterday",
                                                    },
                                                    {
                                                        name: "Raj Patel",
                                                        rating: 5,
                                                        comment:
                                                            "Best rafting experience in Rishikesh!",
                                                        date: "Apr 14, 2025",
                                                    },
                                                    {
                                                        name: "Lisa Chen",
                                                        rating: 4,
                                                        comment:
                                                            "Very well organized trip. Enjoyed a lot.",
                                                        date: "Apr 13, 2025",
                                                    },
                                                    {
                                                        name: "Akshay Kumar",
                                                        rating: 5,
                                                        comment:
                                                            "The overnight camping was magical!",
                                                        date: "Apr 12, 2025",
                                                    },
                                                ].map((review, index) => (
                                                    <div key={index}>
                                                        <div className="flex items-center justify-between">
                                                            <p className="font-medium">
                                                                {review.name}
                                                            </p>
                                                            <div className="flex items-center">
                                                                {Array.from({
                                                                    length: 5,
                                                                }).map(
                                                                    (_, i) => (
                                                                        <Star
                                                                            key={
                                                                                i
                                                                            }
                                                                            className={`h-4 w-4 ${
                                                                                i <
                                                                                review.rating
                                                                                    ? "fill-yellow-400 text-yellow-400"
                                                                                    : "text-gray-300"
                                                                            }`}
                                                                        />
                                                                    ),
                                                                )}
                                                            </div>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-600">
                                                            {review.comment}
                                                        </p>
                                                        <p className="mt-1 text-xs text-gray-500">
                                                            {review.date}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <Button
                                                variant="ghost"
                                                className="mt-4 w-full"
                                            >
                                                View All Reviews
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            {/* Bookings Tab */}
                            <TabsContent value="bookings">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <div>
                                            <CardTitle>All Bookings</CardTitle>
                                            <CardDescription>
                                                Manage all adventure bookings
                                            </CardDescription>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="relative">
                                                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
                                                <Input
                                                    type="search"
                                                    placeholder="Search bookings..."
                                                    className="w-[250px] pl-8"
                                                />
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Filter
                                            </Button>
                                            <Button size="sm">
                                                Add Booking
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="rounded-md border">
                                            <div className="relative w-full overflow-auto">
                                                <table className="w-full caption-bottom text-sm">
                                                    <thead>
                                                        <tr className="border-b bg-gray-100">
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                ID
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Customer
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Package
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Date
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Amount
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Status
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Actions
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {bookings.map((booking) => (
                                                            <tr
                                                                key={booking.id}
                                                                className="border-b hover:bg-gray-50"
                                                            >
                                                                <td className="p-4 align-middle">
                                                                    {booking.bookingId}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {booking.user.name}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {booking.package}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {new Date(booking.date).toLocaleDateString()}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    ₹{booking.amount}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    <span
                                                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                                            booking.status ===
                                                                            "SUCCESS"
                                                                                ? "bg-green-100 text-green-800"
                                                                                : booking.status ===
                                                                                    "PENDING"
                                                                                  ? "bg-yellow-100 text-yellow-800"
                                                                                  : "bg-red-100 text-red-800"
                                                                        }`}
                                                                    >
                                                                        {booking.status}
                                                                    </span>
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    <div className="flex items-center gap-2">
                                                                        <Button
                                                                            variant="ghost"
                                                                            size="sm"
                                                                        >
                                                                            View
                                                                        </Button>
                                                                        <Button
                                                                            variant="ghost"
                                                                            size="sm"
                                                                        >
                                                                            Edit
                                                                        </Button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-sm text-gray-500">
                                                Showing 1-{bookings.length} of {bookings.length} bookings
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    disabled
                                                >
                                                    Previous
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Next
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Users Tab */}
                            <TabsContent value="users">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <div>
                                            <CardTitle>All Users</CardTitle>
                                            <CardDescription>
                                                Manage registered users
                                            </CardDescription>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="relative">
                                                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
                                                <Input
                                                    type="search"
                                                    placeholder="Search users..."
                                                    className="w-[250px] pl-8"
                                                />
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Filter
                                            </Button>
                                            <Button size="sm">Add User</Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="rounded-md border">
                                            <div className="relative w-full overflow-auto">
                                                <table className="w-full caption-bottom text-sm">
                                                    <thead>
                                                        <tr className="border-b bg-gray-100">
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                ID
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Name
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Email
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Phone
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Bookings
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Joined
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Actions
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {users.map((user) => (
                                                            <tr
                                                                key={user.id}
                                                                className="border-b hover:bg-gray-50"
                                                            >
                                                                <td className="p-4 align-middle">
                                                                    {user.userId}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {user.name}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {user.email}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {user.phone}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {user.bookings.length}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {new Date(user.joinedAt).toLocaleDateString()}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    <div className="flex items-center gap-2">
                                                                        <Button
                                                                            variant="ghost"
                                                                            size="sm"
                                                                        >
                                                                            View
                                                                        </Button>
                                                                        <Button
                                                                            variant="ghost"
                                                                            size="sm"
                                                                        >
                                                                            Edit
                                                                        </Button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-sm text-gray-500">
                                                Showing 1-{users.length} of {users.length} users
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    disabled
                                                >
                                                    Previous
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Next
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Payments Tab */}
                            <TabsContent value="payments">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <div>
                                            <CardTitle>
                                                Payment History
                                            </CardTitle>
                                            <CardDescription>
                                                Track all payment transactions
                                            </CardDescription>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="relative">
                                                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
                                                <Input
                                                    type="search"
                                                    placeholder="Search payments..."
                                                    className="w-[250px] pl-8"
                                                />
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Filter
                                            </Button>
                                            <Button size="sm">Export</Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="rounded-md border">
                                            <div className="relative w-full overflow-auto">
                                                <table className="w-full caption-bottom text-sm">
                                                    <thead>
                                                        <tr className="border-b bg-gray-100">
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Transaction ID
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Customer
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Date
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Amount
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Status
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {payments.map((payment) => (
                                                            <tr
                                                                key={payment.id}
                                                                className="border-b hover:bg-gray-50"
                                                            >
                                                                <td className="p-4 align-middle">
                                                                    {payment.paymentId}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {payment.user.name}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {new Date(payment.createdAt).toLocaleDateString()}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {payment.currency} {payment.amount}
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    <span
                                                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                                            payment.status ===
                                                                            "SUCCESS"
                                                                                ? "bg-green-100 text-green-800"
                                                                                : payment.status ===
                                                                                    "PENDING"
                                                                                  ? "bg-yellow-100 text-yellow-800"
                                                                                  : "bg-red-100 text-red-800"
                                                                        }`}
                                                                    >
                                                                        {payment.status}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-sm text-gray-500">
                                                Showing 1-{payments.length} of {payments.length} transactions
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    disabled
                                                >
                                                    Previous
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Next
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Reviews Tab */}
                            <TabsContent value="reviews">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <div>
                                            <CardTitle>
                                                Customer Reviews
                                            </CardTitle>
                                            <CardDescription>
                                                Manage testimonials and ratings
                                            </CardDescription>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="relative">
                                                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
                                                <Input
                                                    type="search"
                                                    placeholder="Search reviews..."
                                                    className="w-[250px] pl-8"
                                                />
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Filter
                                            </Button>
                                            <Button size="sm">Export</Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    name: "Vikram Mehta",
                                                    rating: 5,
                                                    date: "Apr 15, 2025",
                                                    package:
                                                        "Intermediate Rafting Challenge",
                                                    comment:
                                                        "Amazing experience! The guides were very professional and ensured our safety throughout the trip. The rapids were exciting and the scenery was breathtaking. Would definitely recommend to anyone looking for an adventure in Rishikesh.",
                                                    status: "Published",
                                                },
                                                {
                                                    name: "Emma Wilson",
                                                    rating: 4,
                                                    date: "Apr 14, 2025",
                                                    package: "Kayaking Basics",
                                                    comment:
                                                        "Great adventure, would recommend to friends. The instructors were patient and helpful. The only reason I'm giving 4 stars instead of 5 is because the equipment seemed a bit worn out.",
                                                    status: "Published",
                                                },
                                                {
                                                    name: "Raj Patel",
                                                    rating: 5,
                                                    date: "Apr 13, 2025",
                                                    package:
                                                        "Overnight Camping Adventure",
                                                    comment:
                                                        "Best rafting experience in Rishikesh! The overnight camping was magical. Sleeping under the stars and waking up to the sound of the river was an unforgettable experience.",
                                                    status: "Published",
                                                },
                                                {
                                                    name: "Lisa Chen",
                                                    rating: 4,
                                                    date: "Apr 12, 2025",
                                                    package:
                                                        "Himalayan Day Trek",
                                                    comment:
                                                        "Very well organized trip. Enjoyed a lot. The guide was knowledgeable about the local flora and fauna. Would have liked a bit more time at the viewpoints.",
                                                    status: "Published",
                                                },
                                                {
                                                    name: "Akshay Kumar",
                                                    rating: 5,
                                                    date: "Apr 11, 2025",
                                                    package:
                                                        "Multi-Day Himalayan Expedition",
                                                    comment:
                                                        "The multi-day expedition was everything I hoped for and more. The team at Sea Hawk Adventure took care of all the details, allowing us to fully immerse ourselves in the experience.",
                                                    status: "Published",
                                                },
                                                {
                                                    name: "Sarah Johnson",
                                                    rating: 2,
                                                    date: "Apr 10, 2025",
                                                    package:
                                                        "Advanced Rafting Expedition",
                                                    comment:
                                                        "Disappointing experience. The description said 'advanced' but the rapids were quite tame. Not worth the premium price.",
                                                    status: "Under Review",
                                                },
                                                {
                                                    name: "John Miller",
                                                    rating: 5,
                                                    date: "Apr 9, 2025",
                                                    package:
                                                        "Beginner's Rafting Adventure",
                                                    comment:
                                                        "Perfect for first-timers! My family had a blast and felt safe the entire time. The guides were friendly and professional.",
                                                    status: "Published",
                                                },
                                            ].map((review, index) => (
                                                <div
                                                    key={index}
                                                    className="rounded-lg border p-4"
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <h3 className="font-medium">
                                                                    {
                                                                        review.name
                                                                    }
                                                                </h3>
                                                                <div className="flex">
                                                                    {Array.from(
                                                                        {
                                                                            length: 5,
                                                                        },
                                                                    ).map(
                                                                        (
                                                                            _,
                                                                            i,
                                                                        ) => (
                                                                            <Star
                                                                                key={
                                                                                    i
                                                                                }
                                                                                className={`h-4 w-4 ${
                                                                                    i <
                                                                                    review.rating
                                                                                        ? "fill-yellow-400 text-yellow-400"
                                                                                        : "text-gray-300"
                                                                                }`}
                                                                            />
                                                                        ),
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-gray-500">
                                                                {review.date} •{" "}
                                                                {review.package}
                                                            </p>
                                                        </div>
                                                        <span
                                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                                review.status ===
                                                                "Published"
                                                                    ? "bg-green-100 text-green-800"
                                                                    : "bg-yellow-100 text-yellow-800"
                                                            }`}
                                                        >
                                                            {review.status}
                                                        </span>
                                                    </div>
                                                    <p className="mt-2 text-gray-700">
                                                        {review.comment}
                                                    </p>
                                                    <div className="mt-3 flex items-center gap-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                        >
                                                            Reply
                                                        </Button>
                                                        {review.status ===
                                                        "Under Review" ? (
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="border-green-600 text-green-600 hover:bg-green-50"
                                                            >
                                                                Approve
                                                            </Button>
                                                        ) : null}
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="text-red-600 hover:bg-red-50"
                                                        >
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-sm text-gray-500">
                                                Showing 1-7 of 248 reviews
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    disabled
                                                >
                                                    Previous
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Next
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </main>
                </div>
            </div>
        </div>
    );
}
