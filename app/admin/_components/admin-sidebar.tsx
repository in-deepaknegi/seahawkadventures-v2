"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Calendar,
    Users,
    CreditCard,
    Star,
    Package,
    Settings,
    BarChart3,
    LogOut,
    Menu,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AdminSidebar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => {
        return pathname === path;
    };

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Bookings", href: "/admin/bookings", icon: Calendar },
        { name: "Users", href: "/admin/users", icon: Users },
        { name: "Payments", href: "/admin/payments", icon: CreditCard },
        { name: "Reviews", href: "/admin/reviews", icon: Star },
        { name: "Packages", href: "/admin/packages", icon: Package },
        { name: "Reports", href: "/admin/reports", icon: BarChart3 },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <>
            {/* Mobile Menu Toggle */}
            <div className="fixed top-4 left-4 z-30 lg:hidden">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="bg-white"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </Button>
            </div>

            {/* Mobile Sidebar */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div
                        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex h-full flex-col">
                            <div className="border-b p-4">
                                <h2 className="text-xl font-bold text-blue-700">
                                    Sea Hawk Admin
                                </h2>
                            </div>
                            <div className="flex-1 overflow-auto py-2">
                                <nav className="grid gap-1 px-2">
                                    {navItems.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                                                    isActive(item.href)
                                                        ? "bg-blue-100 font-medium text-blue-700"
                                                        : "text-gray-700 hover:bg-gray-100"
                                                }`}
                                            >
                                                <Icon className="h-4 w-4" />
                                                {item.name}
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                            <div className="border-t p-4">
                                <Button
                                    variant="outline"
                                    className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
                                >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Log Out
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Sidebar */}
            <div className="sticky top-0 hidden h-screen w-64 border-r bg-white lg:block">
                <div className="flex h-full flex-col">
                    <div className="border-b p-6">
                        <h2 className="text-xl font-bold text-blue-700">
                            Sea Hawk Admin
                        </h2>
                    </div>
                    <div className="flex-1 overflow-auto py-4">
                        <nav className="grid gap-1 px-4">
                            {navItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                                            isActive(item.href)
                                                ? "bg-blue-100 font-medium text-blue-700"
                                                : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                    <div className="border-t p-4">
                        <Button
                            variant="outline"
                            className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Log Out
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
