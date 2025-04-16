"use client";

import { useState } from "react";
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

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                {/* Sidebar */}
                <AdminSidebar />

                {/* Main Content */}
                <div className="flex-1">
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
                                                1,248
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
                                                ₹24,35,800
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
                                                3,642
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
                            className="space-y-4"
                            onValueChange={setActiveTab}
                        >
                            <div className="flex items-center justify-between">
                                <TabsList>
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
                                                {[
                                                    {
                                                        name: "Priya Sharma",
                                                        package:
                                                            "Beginner's Rafting",
                                                        date: "Today, 10:30 AM",
                                                        amount: "₹1,200",
                                                    },
                                                    {
                                                        name: "Rahul Verma",
                                                        package:
                                                            "Kayaking Basics",
                                                        date: "Today, 9:15 AM",
                                                        amount: "₹1,500",
                                                    },
                                                    {
                                                        name: "John Miller",
                                                        package:
                                                            "Intermediate Rafting",
                                                        date: "Yesterday",
                                                        amount: "₹1,800",
                                                    },
                                                    {
                                                        name: "Ananya Patel",
                                                        package:
                                                            "Overnight Camping",
                                                        date: "Yesterday",
                                                        amount: "₹4,500",
                                                    },
                                                    {
                                                        name: "Sarah Johnson",
                                                        package:
                                                            "Advanced Rafting",
                                                        date: "Apr 14, 2025",
                                                        amount: "₹2,500",
                                                    },
                                                ].map((booking, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-between"
                                                    >
                                                        <div>
                                                            <p className="font-medium">
                                                                {booking.name}
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                {
                                                                    booking.package
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="font-medium">
                                                                {booking.amount}
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                {booking.date}
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
                                                        {[
                                                            {
                                                                id: "B-1248",
                                                                name: "Priya Sharma",
                                                                package:
                                                                    "Beginner's Rafting",
                                                                date: "Apr 15, 2025",
                                                                amount: "₹1,200",
                                                                status: "Confirmed",
                                                            },
                                                            {
                                                                id: "B-1247",
                                                                name: "Rahul Verma",
                                                                package:
                                                                    "Kayaking Basics",
                                                                date: "Apr 15, 2025",
                                                                amount: "₹1,500",
                                                                status: "Confirmed",
                                                            },
                                                            {
                                                                id: "B-1246",
                                                                name: "John Miller",
                                                                package:
                                                                    "Intermediate Rafting",
                                                                date: "Apr 14, 2025",
                                                                amount: "₹1,800",
                                                                status: "Completed",
                                                            },
                                                            {
                                                                id: "B-1245",
                                                                name: "Ananya Patel",
                                                                package:
                                                                    "Overnight Camping",
                                                                date: "Apr 16, 2025",
                                                                amount: "₹4,500",
                                                                status: "Pending",
                                                            },
                                                            {
                                                                id: "B-1244",
                                                                name: "Sarah Johnson",
                                                                package:
                                                                    "Advanced Rafting",
                                                                date: "Apr 18, 2025",
                                                                amount: "₹2,500",
                                                                status: "Confirmed",
                                                            },
                                                            {
                                                                id: "B-1243",
                                                                name: "Vikram Mehta",
                                                                package:
                                                                    "Intermediate Rafting",
                                                                date: "Apr 13, 2025",
                                                                amount: "₹1,800",
                                                                status: "Completed",
                                                            },
                                                            {
                                                                id: "B-1242",
                                                                name: "Emma Wilson",
                                                                package:
                                                                    "Kayaking Basics",
                                                                date: "Apr 17, 2025",
                                                                amount: "₹1,500",
                                                                status: "Cancelled",
                                                            },
                                                            {
                                                                id: "B-1241",
                                                                name: "Raj Patel",
                                                                package:
                                                                    "Overnight Camping",
                                                                date: "Apr 20, 2025",
                                                                amount: "₹4,500",
                                                                status: "Pending",
                                                            },
                                                            {
                                                                id: "B-1240",
                                                                name: "Lisa Chen",
                                                                package:
                                                                    "Beginner's Rafting",
                                                                date: "Apr 12, 2025",
                                                                amount: "₹1,200",
                                                                status: "Completed",
                                                            },
                                                            {
                                                                id: "B-1239",
                                                                name: "Akshay Kumar",
                                                                package:
                                                                    "Advanced Rafting",
                                                                date: "Apr 19, 2025",
                                                                amount: "₹2,500",
                                                                status: "Confirmed",
                                                            },
                                                        ].map(
                                                            (
                                                                booking,
                                                                index,
                                                            ) => (
                                                                <tr
                                                                    key={index}
                                                                    className="border-b hover:bg-gray-50"
                                                                >
                                                                    <td className="p-4 align-middle">
                                                                        {
                                                                            booking.id
                                                                        }
                                                                    </td>
                                                                    <td className="p-4 align-middle">
                                                                        {
                                                                            booking.name
                                                                        }
                                                                    </td>
                                                                    <td className="p-4 align-middle">
                                                                        {
                                                                            booking.package
                                                                        }
                                                                    </td>
                                                                    <td className="p-4 align-middle">
                                                                        {
                                                                            booking.date
                                                                        }
                                                                    </td>
                                                                    <td className="p-4 align-middle">
                                                                        {
                                                                            booking.amount
                                                                        }
                                                                    </td>
                                                                    <td className="p-4 align-middle">
                                                                        <span
                                                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                                                booking.status ===
                                                                                "Confirmed"
                                                                                    ? "bg-blue-100 text-blue-800"
                                                                                    : booking.status ===
                                                                                        "Completed"
                                                                                      ? "bg-green-100 text-green-800"
                                                                                      : booking.status ===
                                                                                          "Pending"
                                                                                        ? "bg-yellow-100 text-yellow-800"
                                                                                        : "bg-red-100 text-red-800"
                                                                            }`}
                                                                        >
                                                                            {
                                                                                booking.status
                                                                            }
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
                                                            ),
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-sm text-gray-500">
                                                Showing 1-10 of 1,248 bookings
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
                                                        {[
                                                            {
                                                                id: "U-3642",
                                                                name: "Priya Sharma",
                                                                email: "priya@example.com",
                                                                phone: "+91 98765 43210",
                                                                bookings: 3,
                                                                joined: "Jan 15, 2025",
                                                            },
                                                            {
                                                                id: "U-3641",
                                                                name: "Rahul Verma",
                                                                email: "rahul@example.com",
                                                                phone: "+91 98765 43211",
                                                                bookings: 1,
                                                                joined: "Feb 20, 2025",
                                                            },
                                                            {
                                                                id: "U-3640",
                                                                name: "John Miller",
                                                                email: "john@example.com",
                                                                phone: "+44 7911 123456",
                                                                bookings: 2,
                                                                joined: "Dec 10, 2024",
                                                            },
                                                            {
                                                                id: "U-3639",
                                                                name: "Ananya Patel",
                                                                email: "ananya@example.com",
                                                                phone: "+91 98765 43212",
                                                                bookings: 5,
                                                                joined: "Nov 5, 2024",
                                                            },
                                                            {
                                                                id: "U-3638",
                                                                name: "Sarah Johnson",
                                                                email: "sarah@example.com",
                                                                phone: "+61 4123 123456",
                                                                bookings: 1,
                                                                joined: "Mar 22, 2025",
                                                            },
                                                            {
                                                                id: "U-3637",
                                                                name: "Vikram Mehta",
                                                                email: "vikram@example.com",
                                                                phone: "+91 98765 43213",
                                                                bookings: 2,
                                                                joined: "Jan 30, 2025",
                                                            },
                                                            {
                                                                id: "U-3636",
                                                                name: "Emma Wilson",
                                                                email: "emma@example.com",
                                                                phone: "+1 212 555 1234",
                                                                bookings: 1,
                                                                joined: "Feb 14, 2025",
                                                            },
                                                            {
                                                                id: "U-3635",
                                                                name: "Raj Patel",
                                                                email: "raj@example.com",
                                                                phone: "+91 98765 43214",
                                                                bookings: 3,
                                                                joined: "Dec 5, 2024",
                                                            },
                                                            {
                                                                id: "U-3634",
                                                                name: "Lisa Chen",
                                                                email: "lisa@example.com",
                                                                phone: "+65 9123 4567",
                                                                bookings: 1,
                                                                joined: "Mar 10, 2025",
                                                            },
                                                            {
                                                                id: "U-3633",
                                                                name: "Akshay Kumar",
                                                                email: "akshay@example.com",
                                                                phone: "+91 98765 43215",
                                                                bookings: 2,
                                                                joined: "Jan 5, 2025",
                                                            },
                                                        ].map((user, index) => (
                                                            <tr
                                                                key={index}
                                                                className="border-b hover:bg-gray-50"
                                                            >
                                                                <td className="p-4 align-middle">
                                                                    {user.id}
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
                                                                    {
                                                                        user.bookings
                                                                    }
                                                                </td>
                                                                <td className="p-4 align-middle">
                                                                    {
                                                                        user.joined
                                                                    }
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
                                                Showing 1-10 of 3,642 users
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
                                                                Booking ID
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
                                                                Method
                                                            </th>
                                                            <th className="h-12 px-4 text-left align-middle font-medium">
                                                                Status
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {[
                                                            {
                                                                txnId: "TXN-5678",
                                                                bookingId:
                                                                    "B-1248",
                                                                name: "Priya Sharma",
                                                                date: "Apr 15, 2025",
                                                                amount: "₹1,200",
                                                                method: "Credit Card",
                                                                status: "Completed",
                                                            },
                                                            {
                                                                txnId: "TXN-5677",
                                                                bookingId:
                                                                    "B-1247",
                                                                name: "Rahul Verma",
                                                                date: "Apr 15, 2025",
                                                                amount: "₹1,500",
                                                                method: "UPI",
                                                                status: "Completed",
                                                            },
                                                            {
                                                                txnId: "TXN-5676",
                                                                bookingId:
                                                                    "B-1246",
                                                                name: "John Miller",
                                                                date: "Apr 14, 2025",
                                                                amount: "₹1,800",
                                                                method: "PayPal",
                                                                status: "Completed",
                                                            },
                                                            {
                                                                txnId: "TXN-5675",
                                                                bookingId:
                                                                    "B-1245",
                                                                name: "Ananya Patel",
                                                                date: "Apr 14, 2025",
                                                                amount: "₹900",
                                                                method: "UPI",
                                                                status: "Completed",
                                                            },
                                                            {
                                                                txnId: "TXN-5674",
                                                                bookingId:
                                                                    "B-1245",
                                                                name: "Ananya Patel",
                                                                date: "Apr 14, 2025",
                                                                amount: "₹3,600",
                                                                method: "Credit Card",
                                                                status: "Pending",
                                                            },
                                                            {
                                                                txnId: "TXN-5673",
                                                                bookingId:
                                                                    "B-1244",
                                                                name: "Sarah Johnson",
                                                                date: "Apr 13, 2025",
                                                                amount: "₹2,500",
                                                                method: "Debit Card",
                                                                status: "Completed",
                                                            },
                                                            {
                                                                txnId: "TXN-5672",
                                                                bookingId:
                                                                    "B-1243",
                                                                name: "Vikram Mehta",
                                                                date: "Apr 12, 2025",
                                                                amount: "₹1,800",
                                                                method: "UPI",
                                                                status: "Completed",
                                                            },
                                                            {
                                                                txnId: "TXN-5671",
                                                                bookingId:
                                                                    "B-1242",
                                                                name: "Emma Wilson",
                                                                date: "Apr 12, 2025",
                                                                amount: "₹1,500",
                                                                method: "Credit Card",
                                                                status: "Refunded",
                                                            },
                                                            {
                                                                txnId: "TXN-5670",
                                                                bookingId:
                                                                    "B-1241",
                                                                name: "Raj Patel",
                                                                date: "Apr 11, 2025",
                                                                amount: "₹900",
                                                                method: "UPI",
                                                                status: "Completed",
                                                            },
                                                            {
                                                                txnId: "TXN-5669",
                                                                bookingId:
                                                                    "B-1240",
                                                                name: "Lisa Chen",
                                                                date: "Apr 10, 2025",
                                                                amount: "₹1,200",
                                                                method: "PayPal",
                                                                status: "Completed",
                                                            },
                                                        ].map(
                                                            (
                                                                payment,
                                                                index,
                                                            ) => (
                                                                <tr
                                                                    key={index}
                                                                    className="border-b hover:bg-gray-50"
                                                                >
                                                                    <td className="p-4 align-middle">
                                                                        {
                                                                            payment.txnId
                                                                        }
                                                                    </td>
                                                                    <td className="p-4 align-middle">
                                                                        {
                                                                            payment.bookingId
                                                                        }
                                                                    </td>
                                                                    <td className="p-4 align-middle">
                                                                        {
                                                                            payment.name
                                                                        }
                                                                    </td>
                                                                    <td className="p-4 align-middle">
                                                                        {
                                                                            payment.date
                                                                        }
                                                                    </td>
                                                                    <td className="p-4 align-middle">
                                                                        {
                                                                            payment.amount
                                                                        }
                                                                    </td>
                                                                    <td className="p-4 align-middle">
                                                                        {
                                                                            payment.method
                                                                        }
                                                                    </td>
                                                                    <td className="p-4 align-middle">
                                                                        <span
                                                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                                                payment.status ===
                                                                                "Completed"
                                                                                    ? "bg-green-100 text-green-800"
                                                                                    : payment.status ===
                                                                                        "Pending"
                                                                                      ? "bg-yellow-100 text-yellow-800"
                                                                                      : "bg-red-100 text-red-800"
                                                                            }`}
                                                                        >
                                                                            {
                                                                                payment.status
                                                                            }
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            ),
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-sm text-gray-500">
                                                Showing 1-10 of 5,678
                                                transactions
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
