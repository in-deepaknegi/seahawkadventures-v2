"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader, Loader2 } from "lucide-react";
const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_MAIL;
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASS;

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        setIsLoading(true);
        e.preventDefault();

        // Hardcoded credentials

        console.log(ADMIN_EMAIL, ADMIN_PASSWORD);

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            // Store authentication status in localStorage
            localStorage.setItem("adminAuthenticated", "true");
            router.push("/admin");
        } else {
            setError("Invalid credentials");
        }
        setIsLoading(false);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">
                        Admin Login
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && (
                            <p className="text-center text-sm text-red-500">
                                {error}
                            </p>
                        )}
                        <Button type="submit" className="w-full">
                            {isLoading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin duration-[1000ms]" />
                            )}
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
