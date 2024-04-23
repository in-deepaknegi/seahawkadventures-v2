import R1 from "@/public/images/rafting/r02.jpg";
import R2 from "@/public/images/rafting/r12.jpg";
import R3 from "@/public/images/rafting/r15.jpg";

import S1 from '@/public/images/svg/map.svg';
import S2 from '@/public/images/svg/stopwatch.svg';

import F1 from '@/public/images/svg/rafting/map.svg'
import F2 from '@/public/images/svg/rafting/clock.svg'
import F3 from '@/public/images/svg/rafting/hourglass.svg'
import F4 from '@/public/images/svg/rafting/raft.svg'
import F5 from '@/public/images/svg/rafting/users.svg'
import F6 from '@/public/images/svg/rafting/lifebelt.svg'

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
        ],
        gallery: [
            {
                img: R1,
            },
            {
                img: R2,
            },
            {
                img: R3,
            },
        ],
        features: [
            {   
                svg: F1,
                title: "Location",
                description: "Shivpuri, Seahawk Adventures office",
                class: "w-8"
            },
            {
                svg: F2,
                title: "Timing",
                description: "8:00 a.m. to 3:00 p.m.",
                class: "w-8"
            },
            {
                svg: F3,
                title: "Duration",
                description: "1.5 hours",
                class: "w-8"
            },
            {
                svg: F4,
                title: "Raft Capacity",
                description: "8 individuals",
                class: "w-9"
            },
            {
                svg: F5,
                title: "Minimum age",
                description: "12 years old",
                class: "w-8"
            },
            {
                svg: F6,
                title: "Inclusions",
                description: "Life jackets, guides, and transportation.",
                class: "w-8"
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
        ],
        gallery: [
            {
                img: R1,
            },
            {
                img: R2,
            },
            {
                img: R3,
            },
        ],
        features: [
            {   
                svg: S1,
                title: "Activity Location",
                description: "Shivpuri, Seahawk Adventures office",
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

        description: "Join us on a thrilling 26 km rafting adventure, guiding through rapids and taking in stunning scenery.",
        sub: [
            {
                name: "Marine drive to NIM Beach",
                img: S1,
            },
            {
                name: "Duration: 3 hours",
                img: S2,
            },
        ],
        gallery: [
            {
                img: R1,
            },
            {
                img: R2,
            },
            {
                img: R3,
            },
        ],
        features: [
            {   
                svg: S1,
                title: "Activity Location",
                description: "Shivpuri, Seahawk Adventures office",
            },
        ]
    },
]

export default rafting;