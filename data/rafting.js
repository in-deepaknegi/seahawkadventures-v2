import R1 from "@/public/images/rafting/r02.jpg";
import R2 from "@/public/images/rafting/r12.jpg";
import R3 from "@/public/images/rafting/r06.jpg";

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
        imageUrl: "/images/rafting/r02.jpg",
        image: R1,
        rate: 620,
        href: "/12-km-rafting",

        description: "Come along on a thrilling 12 km rafting adventure, guiding through rapids and taking in stunning scenery.",

        para: "12km of river rafting stretches from Marine Drive to Shivpuri residing Grade 3 rapids, which will give an amazing adrenaline rush. The rapids that you will experience are as follows: ",
        rafts: [
            "Good morning, rapid",
            "Black money",
            "Three blind mice",
            "Crossfire",
            "Butterfly",
            "Body surfing",
            "Welcome to Shivpuri Rapid.",
        ],
        misc: [
            " Any kind of alcohol, knife, mouthfresher, sharp object, cigarettes, or lighters are not allowed.",
            " Photography and videography from personal devices are not allowed; the guide will take your photos and videos, which are not included in the rafting package.",
            " Your mobile phones will be in a dry bag carried by the guide.",
            " Guests are requested to report at least half an hour before the time slot allotted to them.",
        ],

        features: [
            {
                svg: F1,
                title: "Location",
                description: "Marine Drive - Shivpuri",
            },
            {
                svg: F3,
                title: "Duration",
                description: "1.5 hours",
            },
            {
                svg: F2,
                title: "Timing",
                description: "8:00 a.m. to 3:00 p.m.",
            },
            {
                svg: F4,
                title: "Raft Capacity",
                description: "8 individuals",
            },
            {
                svg: F5,
                title: "Minimum age",
                description: "12 years old",
            },
            {
                svg: F6,
                title: "Inclusions",
                description: "Life jackets, guides, and transportation.",
            },
        ],
        data: [
            {
                question: "The best time to do river rafting",
                answer: "The best time to do river rafting would be from September to mid-June.",
            },
            {
                question: "Longest River Rafting in Rishikesh",
                answer: "36 km of river rafting, i.e., from Kaudiyala, is the longest river rafting in Rishikesh.",
            },
            {
                question: "Is there any kind of risk in river rafting?",
                answer: "Absoulutely No, there is no risk in river rafting. SeaHawk Adventures has the most trained guides, and adding to that, kayakers also follow the rafts.",
            },
            {
                question: "Is river rafting safe for children?",
                answer: "Yes, river rafting is safe for children over 12 years old.",
            },
            {
                question: "What should I wear during river rafting?",
                answer: "Sandles, T-shirts, and shorts are best during river rafting.",
            },
            {
                question: " Do we need to know swimming before going river rafting?",
                answer: "No, there is no need to swim for river rafting.",
            },
        ],
    },
    {
        slug: "16-km-rafting",
        title: "16 Km Rafting",
        imageUrl: "/images/rafting/r12.jpg",
        image: R2,
        rate: 1020,
        href: "/16-km-rafting",

        description: "Join us on a thrilling 16 km rafting adventure, guiding through rapids and taking in stunning scenery.",

        para: "",
        rafts: [],
        misc: [],
       
        features: [
            {
                svg: F1,
                title: "Location",
                description: "Shivpuri to NIM Beach",
            },
            {
                svg: F3,
                title: "Duration",
                description: "2 hours",
            },
        ],
        data: [],
    },
    {
        slug: "26-km-rafting",
        title: "26 Km Rafting",
        imageUrl: "/images/rafting/r15.jpg",
        image: R3,
        rate: 1520,
        href: "/26-km-rafting",

        description: "Join us on a thrilling 26 km rafting adventure, guiding through rapids and taking in stunning scenery.",

        para: "",
        rafts: [],
        misc: [],
        
        features: [
            {
                svg: F1,
                title: "Location",
                description: "Marine drive to NIM Beach",
            },
            {
                svg: F3,
                title: "Duration",
                description: "3 hours",
            },
        ],
        data: [],
    },
]

export default rafting;