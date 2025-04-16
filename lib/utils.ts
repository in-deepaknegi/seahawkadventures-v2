import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

let lastBookingId = 1499; 
let lastPaymentId = 4499; 

export function generateBookingId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `B-${timestamp}-${random}`;
}

export function generatePaymentId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `TXN-${timestamp}-${random}`;
}

