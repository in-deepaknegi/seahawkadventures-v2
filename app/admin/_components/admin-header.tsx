"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AdminHeaderProps {
    title: string;
}

export default function AdminHeader({ title }: AdminHeaderProps) {
    const router = useRouter();
    const [notifications] = useState([
        {
            id: 1,
            message: "New booking: Beginner's Rafting Adventure",
            time: "5 minutes ago",
        },
        {
            id: 2,
            message: "New review from Priya Sharma",
            time: "10 minutes ago",
        },
        {
            id: 3,
            message: "Payment received for booking #B-1248",
            time: "30 minutes ago",
        },
        {
            id: 4,
            message: "Booking #B-1242 has been cancelled",
            time: "1 hour ago",
        },
    ]);

    return (
        <header className="sticky top-0 z-10 border-b bg-white">
            <div className="flex h-16 items-center justify-between px-6">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex items-center gap-4">
                    <div className="relative hidden md:block">
                        <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-[250px] pl-8"
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="relative"
                            >
                                <Bell className="h-5 w-5" />
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                                    {notifications.length}
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80">
                            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {notifications.map((notification) => (
                                <DropdownMenuItem
                                    key={notification.id}
                                    className="cursor-pointer py-3"
                                >
                                    <div>
                                        <p className="font-medium">
                                            {notification.message}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {notification.time}
                                        </p>
                                    </div>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer text-center text-blue-600">
                                View all notifications
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <User className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Admin User</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                                className="text-red-600"
                                onClick={() => {
                                    localStorage.removeItem("adminAuthenticated");
                                    router.push("/admin/login");
                                }}
                            >
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
