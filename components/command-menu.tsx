"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Circle, Laptop, Moon, Sun } from "lucide-react";

import { searchDocs } from "@/config/links";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";

export function CommandMenu({ ...props }: DialogProps) {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
                if (
                    (e.target instanceof HTMLElement &&
                        e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement
                ) {
                    return;
                }

                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <Button
                variant="outline"
                className={cn(
                    "bg-muted text-muted-foreground relative ml-auto h-8 w-40 justify-start rounded-[0.5rem] text-sm font-normal shadow-none sm:pr-12 md:ml-0 md:w-40 lg:w-60",
                )}
                onClick={() => setOpen(true)}
                {...props}
            >
                <span className="hidden lg:inline-flex">
                    Search adventure...
                </span>
                <span className="inline-flex lg:hidden">
                    Search adventure...
                </span>
                <kbd className="bg-muted pointer-events-none absolute top-[0.3rem] right-[0.3rem] hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type to search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {searchDocs.map((group, i) => (
                        <CommandGroup
                            key={`${group.name}-${i}`}
                            heading={group.name}
                        >
                            {group.items.map((navItem) => (
                                <CommandItem
                                    key={`${navItem.href}-${navItem.name}`}
                                    value={navItem.name}
                                    onSelect={() => {
                                        runCommand(() =>
                                            router.push(navItem.href),
                                        );
                                    }}
                                >
                                    <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                        <Circle className="h-3 w-3" />
                                    </div>
                                    {navItem.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ))}
                    <CommandSeparator />
                </CommandList>
            </CommandDialog>
        </>
    );
}
