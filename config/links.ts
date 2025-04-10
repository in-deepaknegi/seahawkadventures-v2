export const BASE_URL = process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000";

export const motions = [
    {
        name: "Main Links",
        items: [
            // {
            //     name: "Introduction",
            //     href: "#",
            // },
            {
                name: "Rafting",
                href: "/rafting",
            },
            {
                name: "Kayaking",
                href: "/kayaking",
            },
            {
                name: "Expedition",
                href: "/expedition",
            },
            {
                name: "About",
                href: "/about",
            },
            {
                name: "Contact",
                href: "/contact",
            },
        ],
    },
    {
        name: "Rafting Packages",
        items: [
            {
                name: "12 km Rafting",
                href: "/rafting/12-km-rafting",
            },
            {
                name: "16 km Rafting",
                href: "/rafting/16-km-rafting",
            },
            {
                name: "26 km Rafting",
                href: "/rafting/26-km-rafting",
            },
        ],
    },
    {
        name: "Kayaking Packages",
        items: [
            {
                name: "Beginner Course",
                href: "/kayaking/beginner-course",
            },
            {
                name: "Intermediate Course",
                href: "/kayaking/intermediate-course",
            },
            {
                name: "Advanced Course",
                href: "/kayaking/advanced-course",
            },
        ],
    },
    {
        name: "Expedition",
        items: [
            {
                name: "Rafting Expedition",
                href: "/motion/dialog",
            },
            {
                name: "Kayaking Expedition",
                href: "/expedition/kayaking-expedition",
            },
        ],
    },
];

export const searchDocs = [
    {
        name: "Rafting",
        href: "/rafting",
        items: [
            {
                name: "12 km Rafting",
                href: "/rafting/12-km-rafting",
            },
            {
                name: "16 km Rafting",
                href: "/rafting/16-km-rafting",
            },
            {
                name: "26 km Rafting",
                href: "/rafting/26-km-rafting",
            },
        ],
    },
    {
        name: "Kayaking",
        href: "/kayaking",
        items: [
            {
                name: "Beginner Course",
                href: "/kayaking/beginner-course",
            },
            {
                name: "Intermediate Course",
                href: "/kayaking/intermediate-course",
            },
            {
                name: "Advanced Course",
                href: "/kayaking/advanced-course",
            },
        ],
    },
    {
        name: "Expedition",
        href: "/expedition",
        items: [
            {
                name: "Rafting Expedition",
                href: "/expedition/rafting-expedition",
            },
            {
                name: "Kayaking Expedition",
                href: "/expedition/kayaking-expedition",
            },
        ],
    },
];
