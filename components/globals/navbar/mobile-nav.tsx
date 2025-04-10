"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";

// import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
// import { useMetaColor } from "@/hooks/use-meta-color";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { motions } from "@/config/links";

export function MobileNav() {
    const [open, setOpen] = React.useState(false);
    // const { setMetaColor, metaColor } = useMetaColor();

    const onOpenChange = React.useCallback((open: boolean) => {
        setOpen(open);
        // setMetaColor(open ? "#09090b" : metaColor);
    }, []);
    const pathname = usePathname();

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerTrigger asChild>
                <Button
                    variant="ghost"
                    className="h-8 w-fit gap-4 pr-0 pl-4 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="!size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80svh] p-0">
                <DrawerTitle className="sr-only">Mobile Navigation</DrawerTitle>
                <div className="overflow-auto p-6">
                    <ul
                        role="list"
                        className="h-full pb-9 [&>li:not(:first-child)>div]:pt-6"
                    >
                        {motions.map((nav, index) => {
                            return (
                                <li key={`${nav.name}-${index}`}>
                                    <div className="relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-medium text-zinc-950 dark:bg-zinc-950 dark:text-white">
                                        {nav.name}
                                    </div>
                                    <ul
                                        role="list"
                                        className="space-y-3.5 border-zinc-200 dark:border-zinc-800"
                                    >
                                        {nav.items.map((item, j) => {
                                            const isActive =
                                                pathname === item.href;

                                            return (
                                                <li key={`${item.name}-${j}`}>
                                                    <MobileLink
                                                        className={cn(
                                                            "relative inline-flex w-full items-center pl-1 text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
                                                            isActive &&
                                                                "w-full rounded-l-lg bg-gray-100 py-1.5 pl-3 text-zinc-950 dark:bg-neutral-900 dark:text-neutral-200",
                                                            item.href === "#" &&
                                                                "cursor-default text-gray-400 hover:text-gray-400",
                                                        )}
                                                        href={item.href}
                                                        onOpenChange={setOpen}
                                                    >
                                                        <span>{item.name}</span>
                                                    </MobileLink>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>

                    <hr />

                    <ul className="mt-5 space-y-2">
                        <li>
                            <MobileLink
                                href="/component/button"
                                onOpenChange={setOpen}
                                className="relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-medium text-zinc-950 dark:bg-zinc-950 dark:text-white"
                            >
                                Privacy Policy
                            </MobileLink>
                        </li>
                        <li>
                            <MobileLink
                                href="/motion/accordion"
                                onOpenChange={setOpen}
                                className="relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-medium text-zinc-950 dark:bg-zinc-950 dark:text-white"
                            >
                                Terms of Service
                            </MobileLink>
                        </li>
                        <li>
                            <MobileLink
                                href="/chart/line-chart"
                                onOpenChange={setOpen}
                                className="relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-medium text-zinc-950 dark:bg-zinc-950 dark:text-white"
                            >
                                Cookie Policy
                            </MobileLink>
                        </li>
                        <li>
                            <MobileLink
                                href="/docs"
                                onOpenChange={setOpen}
                                className="relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-medium text-zinc-950 dark:bg-zinc-950 dark:text-white"
                            >
                                Contact Us
                            </MobileLink>
                        </li>
                    </ul>

                    {/* <div className="flex flex-col space-y-3">
                        {docsConfig.mainNav?.map(
                            (item) =>
                                item.href && (
                                    <MobileLink
                                        key={item.href}
                                        href={item.href}
                                        onOpenChange={setOpen}
                                    >
                                        {item.title}
                                    </MobileLink>
                                ),
                        )}
                    </div> */}
                    {/* <div className="flex flex-col space-y-2">
                        {docsConfig.sidebarNav.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-4 pt-6"
                            >
                                <h4 className="text-xl font-medium">
                                    {item.title}
                                </h4>
                                {item?.items?.length &&
                                    item.items.map((item) => (
                                        <React.Fragment key={item.href}>
                                            {!item.disabled &&
                                                (item.href ? (
                                                    <MobileLink
                                                        href={item.href}
                                                        onOpenChange={setOpen}
                                                        className="opacity-80"
                                                    >
                                                        {item.title}
                                                        {item.label && (
                                                            <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                                                {item.label}
                                                            </span>
                                                        )}
                                                    </MobileLink>
                                                ) : (
                                                    item.title
                                                ))}
                                        </React.Fragment>
                                    ))}
                            </div>
                        ))}
                    </div> */}
                </div>
            </DrawerContent>
        </Drawer>
    );
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    const router = useRouter();
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn("text-[1.15rem]", className)}
            {...props}
        >
            {children}
        </Link>
    );
}
