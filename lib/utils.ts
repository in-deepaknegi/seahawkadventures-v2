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
