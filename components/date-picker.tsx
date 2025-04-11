"use client";

import { Calendar } from "@/components/ui/calendar";
import { DateInput } from "@/components/ui/datefield";
import { CalendarIcon } from "lucide-react";
import {
    Button,
    DatePicker,
    Group,
    Label,
    Popover,
} from "react-aria-components";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/modal";

export default function DatePickerC() {
    return (
        <DatePicker className="*:not-first:mt-2">
            <Label className="text-foreground text-sm font-medium">
                Date picker
            </Label>
            <div className="flex">
                <Group className="w-full">
                    <DateInput className="pe-9" />
                </Group>
                <Button className="data-focus-visible:border-ring data-focus-visible:ring-ring/50 text-muted-foreground/80 hover:text-foreground z-10 -ms-9 -me-px flex w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none data-focus-visible:ring-[3px]">
                    <CalendarIcon size={16} />
                </Button>
            </div>
            <Popover
                className="data-entering:animate-in data-exiting:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 bg-background text-popover-foreground z-50 rounded-lg border shadow-lg outline-hidden dark:border-neutral-800"
                offset={4}
            >
                <DialogContent className="max-h-[inherit] overflow-auto p-2 z-[100]">
                    <Calendar />
                </DialogContent>
            </Popover>
            <p
                className="text-muted-foreground mt-2 text-xs"
                role="region"
                aria-live="polite"
            >
                Built with{" "}
                <a
                    className="hover:text-foreground underline"
                    href="https://react-spectrum.adobe.com/react-aria/DatePicker.html"
                    target="_blank"
                    rel="noopener nofollow"
                >
                    React Aria
                </a>
            </p>
        </DatePicker>
    );
}
