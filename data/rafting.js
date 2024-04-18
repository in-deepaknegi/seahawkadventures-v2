import R1 from "@/public/images/rafting/r02.jpg";
import R2 from "@/public/images/rafting/r12.jpg";
import R3 from "@/public/images/rafting/r15.jpg";

import S1 from '@/public/images/svg/map.svg';
import S2 from '@/public/images/svg/stopwatch.svg';

const rafting = [
    {
        slug: "12-km-rafting",
        title: "12 Km Rafting",
        imageUrl: "url('/images/rafting/r02.jpg')",
        image: R1,
        rate: 620,
        href: "#",

        description: "Come along on a thrilling 12 km rafting adventure, guiding through rapids and taking in stunning scenery.",
        sub: [
            {
                name: "Marine Drive - Shivpuri",
                img: S1,
            },
            {
                name: "Duration: 1.5 hours",
                img: S2,
            },
        ]
    },
    {
        slug: "16-km-rafting",
        title: "16 Km Rafting",
        imageUrl: "url('/images/rafting/r12.jpg')",
        image: R2,
        rate: 1020,
        href: "#",

        description: "Join us on a thrilling 16 km rafting adventure, guiding through rapids and taking in stunning scenery.",
        sub: [
            {
                name: "Shivpuri to NIM Beach",
                img: S1,
            },
            {
                name: "Duration: 2 hours",
                img: S2,
            },
        ]
    },
    {
        slug: "26-km-rafting",
        title: "26 Km Rafting",
        imageUrl: "url('/images/rafting/r15.jpg')",
        image: R3,
        rate: 1520,
        href: "#",

        description: "Join us on a thrilling 16 km rafting adventure, guiding through rapids and taking in stunning scenery.",
        sub: [
            {
                name: "Marine drive to NIM Beach",
                img: S1,
            },
            {
                name: "Duration: 3 hours",
                img: S2,
            },
        ]
    },
]

export default rafting;