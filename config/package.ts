import {
    AtSignIcon,
    CommandIcon,
    EclipseIcon,
    Weight,
    Video,
} from "lucide-react";
import { features } from "process";

export const packagesConfig = [
    {
        title: "rafting",
        description: "",
        collection: [
            {
                title: "12 Km River Rafting",
                price: 600,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
                    alt: "",
                },
                description: `<p>
                River rafting from Marine Drive to Shivpuri is an excellent choice for those looking to experience their first rafting trip in a safe yet exciting manner. Rafting in Rishikesh is truly a thrilling adventure that offers a mix of fun and natural beauty. This rafting journey takes you from the Marine Drive Rafting Point to Shivpuri.
                </p>

                <p>
                Many experienced rafters prefer this route over the Barahmpuri rafting stretch, as it is generally considered more enjoyable. Although it is a shorter rafting trip, this lovely stretch allows adventurers to connect closely with nature. Overall, the Marine Drive to Shivpuri rafting experience provides both safety and enjoyment, making it ideal for beginners.
                </p>`,
                features: {
                    distance: "12km",
                    duration: "1.5-2 hours",
                    startingPoint: "Marine Drive",
                    endingPoint: "Shivpuri",
                    rapids: {
                        total: "4",
                        grades: "I, II and III",
                    },
                    difficulty: "Easy",
                },
                url: "/adventure-in-rishikesh/river-rafting",
            },
            {
                title: "16 Km River Rafting",
                description: `<p>
                    Rafting from Shivpuri to Rishikesh is an exciting adventure suitable for both beginners and those with previous experience. The journey begins at the Shivpuri River Rafting Starting Point and ends 16 kilometers later at Nim Beach in Rishikesh.
                    </p>
                    <p>
                    This river rafting trip lasts about two hours and can be quite challenging due to the strong currents of the Ganges River and some steep rapids along the way. This particular stretch of river is the most popular for rafting in Rishikesh, attracting many thrill-seekers looking for an unforgettable experience on the water.
                </p>`,
                price: 1000,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3103.jpg",
                    alt: "",
                },
                features: {
                    distance: "16km",
                    duration: "2-2.5 hours",
                    startingPoint: "Shivpuri",
                    endingPoint: "Nim Beach",
                    rapids: {
                        total: "8",
                        grades: "I, II, III & III+",
                    },
                    difficulty: "Moderate",
                },
                url: "/adventure-in-rishikesh/river-rafting",
            },
            {
                title: "26 Km River Rafting",
                description: `
                <p>The 21km rafting from Marine Drive to NIM Beach, while advertised as a 21km road distance from Rishikesh, covers approximately 17-18km by river, requiring 3 to 4 hours.</p> 
                
                <p>This seemingly tranquil journey belies the presence of roughly ten grade III and III+ rapids, each demanding skill and attention. Notable rapids include "Three Blind Mice," a deceptively calm sequence of three closely spaced rapids, and others such as "Huge and Kiss," "Cross Fire," "Return to Sender Roller Coaster," "Golf Course," and "Club House."</p>`,
                price: 1500,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3104.jpg",
                    alt: "",
                },
                features: {
                    distance: "26km",
                    duration: "4 hours",
                    startingPoint: "Marine Drive",
                    endingPoint: "Nim Beach",
                    rapids: {
                        total: "12",
                        grades: "I, II and III & III+",
                    },
                    difficulty: "Challenging",
                },
                url: "/adventure-in-rishikesh/river-rafting",
            },
        ],
    },
    {
        title: "kayaking",
        description: "",
        collection: [
            {
                title: "Beginner's Course",
                description:
                    "Perfect for beginners, experience Grade I and II rapids",
                price: 1999,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734968740/img-3505.jpg",
                    alt: "",
                },
                features: {
                    distance: "12km",
                    duration: "1.5 hours to 2 hours",
                    startingPoint: "Marine Drive",
                    endingPoint: "Shivpuri",
                    rapids: {
                        total: "4",
                        grades: "I, II and III",
                    },
                    difficulty: "Moderate",
                },
                url: "#",
            },
            {
                title: "Advanced Training",
                description: "Advanced course with Grade III and IV rapids",
                price: 1999,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734968742/img-3500.jpg",
                    alt: "",
                },
                features: {
                    distance: "12km",
                    duration: "1.5 hours to 2 hours",
                    startingPoint: "Marine Drive",
                    endingPoint: "Shivpuri",
                    rapids: {
                        total: "4",
                        grades: "I, II and III",
                    },
                    difficulty: "Challenging",
                },
                url: "#",
            },
        ],
    },
    {
        title: "expedition",
        description: "",
        collection: [
            {
                title: "Kayak Expedition",
                description: `<p>The Ganga Kayak Expedition offers a thrilling three-day, two-night journey down the Alaknanda and Ganga rivers, covering 70km.</p>
                
                <p>Suitable for individuals with kayaking experience ranging from beginner (I) to intermediate (IV), this October-March expedition begins with transport from Tapovan to Devprayag. Days are punctuated by exhilarating kayaking stretches (18km, 20-25km, and 30-35km respectively), interspersed with opportunities for exploration.</p>
                
                <p>Highlights include a visit to Gartang Gali and a waterfall, complemented by relaxing riverside campsites at Vyas Ghat and Kodiyala/Bhaysi, featuring bonfires and barbecues. Packed lunches are provided, with daily stops at scenic white sand beaches. The expedition culminates at Neem Beach, promising an unforgettable blend of adventure and natural beauty.</p>
                `,
                price: 1999,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3501.jpg",
                    alt: "",
                },
                features: {
                    distance: "70km",
                    duration: "2 nights 3 days",
                    startingPoint: "Devprayag",
                    endingPoint: "Neem Beach",
                    rapids: {
                        total: "4",
                        grades: "I-IV",
                    },
                    difficulty: "Moderate",
                },
                url: "/adventure-in-rishikesh/kayak-expedition",
            },
            {
                title: "Rafting Expedition",
                description: `<p>This four-day, three-night rafting expedition (October-March) covers 100km of exhilarating rapids, graded I-IV.</p>
                
                <p>Beginning in Tapovan (5:00 AM departure), Day 1 features a 30-35km raft to Vyas Ghat, concluding with a bonfire and barbecue. Day 2 continues with 25-30km of rafting, incorporating a hike to a waterfall and exploration of Gartang Gali near Kaudiyala, followed by another riverside campfire. Day 3 culminates in a 35-40km journey to Neem Beach, concluding at 5:00 PM.</p> 
                
                <p>Daily packed lunches and picturesque lunch stops on white sand beaches are included. Each night's camping offers a unique riverside or beach setting enhanced by bonfires and barbecues. The journey offers a blend of thrilling rapids and opportunities for scenic exploration.</p>`,
                price: 1999,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734968741/img-3503.jpg",
                    alt: "",
                },
                features: {
                    distance: "100Km",
                    duration: "3 nights 4 days",
                    startingPoint: "Bhagwan",
                    endingPoint: "Neem Beach",
                    rapids: {
                        total: "4",
                        grades: "I- IV",
                    },
                    difficulty: "Challenging",
                },
                url: "/adventure-in-rishikesh/rafting-expedition",
            },
        ],
    },
];

interface PackageConfig {
    package?: {
        id?: number;
        title?: string;
        price?: number;
        timing?: string;
        distance?: string;
        route?: string;
        grade?: string;
        duration?: string;
        description?: string;
        level?: string;
        link?: string;
    }[];
    gallery?: {
        src?: string;
        alt?: string;
    }[];
    features?: {
        label?: string;
        description?: string;
    }[];
    itinerary?: {
        label?: string;
        description?: string;
        image?: {
            src?: string;
            alt?: string;
        };
    }[];
}

export const raftingConfig = {
    package: [
        {
            id: 1,
            title: "12 KM River Rafting",
            price: 620,
            route: "Marine Drive - Shivpuri",
            grade: "I-II",
            duration: "1.5-2 hours",
            link: "#",
            description: `<p>
            River rafting from Marine Drive to Shivpuri is an excellent choice for those looking to experience their first rafting trip in a safe yet exciting manner. Rafting in Rishikesh is truly a thrilling adventure that offers a mix of fun and natural beauty. This rafting journey takes you from the Marine Drive Rafting Point to Shivpuri.
            </p>
            <br/>
            <p>
            Many experienced rafters prefer this route over the Barahmpuri rafting stretch, as it is generally considered more enjoyable. Although it is a shorter rafting trip, this lovely stretch allows adventurers to connect closely with nature. Overall, the Marine Drive to Shivpuri rafting experience provides both safety and enjoyment, making it ideal for beginners.
            </p>`,
        },
        {
            id: 2,
            title: "16 KM River Rafting",
            route: "Shivpuri - Nim Beach",
            grade: "II - III",
            duration: "2-2.5 hours",
            price: 1020,
            link: "#",
            description: `<p>
                    Rafting from Shivpuri to Rishikesh is an exciting adventure suitable for both beginners and those with previous experience. The journey begins at the Shivpuri River Rafting Starting Point and ends 16 kilometers later at Nim Beach in Rishikesh.
                    </p>
                    <br/>
                    <p>
                    This river rafting trip lasts about two hours and can be quite challenging due to the strong currents of the Ganges River and some steep rapids along the way. This particular stretch of river is the most popular for rafting in Rishikesh, attracting many thrill-seekers looking for an unforgettable experience on the water.
                </p>`,
        },
        {
            id: 3,
            title: "26 KM River Rafting",
            route: "Marine Drive - Nim Beach",
            grade: "II - III",
            duration: "3.5-4 hours",
            price: 1520,
            link: "#",
            description: `
            <p>The 21km rafting from Marine Drive to NIM Beach, while advertised as a 21km road distance from Rishikesh, covers approximately 17-18km by river, requiring 3 to 4 hours.</p> 
            <br/>
            <p>This seemingly tranquil journey belies the presence of roughly ten grade III and III+ rapids, each demanding skill and attention. Notable rapids include "Three Blind Mice," a deceptively calm sequence of three closely spaced rapids, and others such as "Huge and Kiss," "Cross Fire," "Return to Sender Roller Coaster," "Golf Course," and "Club House."</p>`,
        },
    ],
    pre_requisites: [
        "Basic swimming",
        "Good general health",
        "Previous kayak experience not mandatory",
    ],
    gallery: [
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3104.jpg",
            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3101.jpg",
            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3111.jpg",
            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3112.jpg",
            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3113.jpg",
            alt: "",
        },
    ],
    features: [
        {
            label: "Safety Instrument",
            icon: "https://res.cloudinary.com/dkuixrz40/image/upload/v1742567391/ilus03_ogxlcn.png",
            description:
                "Paddles, safety aids, life jackets, helmets, throw bags, and dry bags",
        },
        {
            label: "Transport",
            icon: "https://res.cloudinary.com/dkuixrz40/image/upload/v1742567391/ilus04_fppfsy.png",
            description: "Transportation to and from Laxman Julla",
        },
        {
            label: "Trained Guide",
            icon: "https://res.cloudinary.com/dkuixrz40/image/upload/v1742567391/ilus01_iwtptr.png",
            description:
                "Highly trained guide with over 10 years of experience",
        },
    ],
    faq: [
        {
            id: "1",
            title: "Is rafting safe?",
            icon: AtSignIcon,
            content:
                "Yes, rafting is safe. We have a team of trained guides who are experienced in rafting and have a good understanding of the river. We also have a team of trained first responders who are trained to handle any emergency situation.",
        },
        {
            id: "2",
            title: "Does rafting require any experience?",
            icon: CommandIcon,
            content:
                "No, rafting does not require any experience. We have a team of trained guides who will guide you through the rafting experience.",
        },
        {
            id: "3",
            icon: EclipseIcon,
            title: "Is rafting suitable for beginners?",
            content:
                "Yes, rafting is suitable for beginners. We have a team of trained guides who will guide you through the rafting experience.",
        },
        {
            id: "4",
            icon: EclipseIcon,
            title: "What is the minimum age for rafting?",
            content:
                "The minimum age for rafting is 12 years. However, children below 18 years must be accompanied by an adult.",
        },
    ],
    itinerary: [
        {
            label: "White Water Rafting",
            description:
                "Engage in enthralling white water rafting expedition on the mighty Ganges in Rishikesh. Navigate through the thrilling rapids amidst the mountains",
        },
        {
            label: "Body Surfing",
            description:
                "Experience the body surfing and swimming in the holy river Ganga with Life Jacket",
        },
    ],
    tnk: [
        {
            label: "Our commitment",
            description:
                "Certified guides, clean changing rooms, no hidden fees.",
        },
        {
            label: "Timings",
            description:
                "Hourly time slots from 7:00 AM to 4:00 PM. 7 AM, 8AM, 9AM....4PM.",
        },
        {
            label: "Location",
            description:
                "Pickup / drop from Tapovan (Laxman Jhulla). If outside, report to our Tapovan office.",
        },
        {
            label: "Age / Weight",
            description: "15-60 years, 35-110kg.",
        },
        {
            label: "Photo / Video",
            description: "Additional charge paid directly to the guide.",
        },
    ],
};

export const expeditionConfig: PackageConfig = {
    package: [
        {
            id: 1,
            title: "Rafting Expedition",
            timing: "Every Friday 3:00 PM",
            route: "",
            duration: "3 Days",
            price: 800,
            description:
                "Experience riverside camping with bonfire and adventure activities.",
            level: "Beginner",
            link: "#",
        },
        {
            id: 2,
            title: "Kayak Expedition",
            timing: "Every Friday 3:00 PM",
            route: "",
            duration: "4 Hours",
            price: 1500,
            description:
                "Perfect for beginners to learn basic kayaking skills in calm waters.",
            level: "Moderate",
            link: "#",
        },
    ],
    gallery: [
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3501.jpg",

            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3504.jpg",

            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3505.jpg",

            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3508.jpg",

            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3507.jpg",

            alt: "",
        },
    ],
};

export const kayakConfig = {
    package: [
        {
            id: 1,
            title: "Beginners",
            price: 1,
            route: "Brahmpuri",
            grade: "I-II",
            duration: "2 Hours",
            link: "#",
        },
        {
            id: 2,
            title: "Intermediate",
            price: 1,
            route: "Shivpuri",
            grade: "I-II",
            duration: "4 Hours",
            link: "#",
        },
    ],
    gallery: [
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3501.jpg",

            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3504.jpg",

            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3505.jpg",

            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3508.jpg",

            alt: "",
        },
        {
            src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3507.jpg",

            alt: "",
        },
    ],
    pre_requisites: [
        "Basic swimming",
        "Good general health",
        "Previous kayak experience not mandatory",
    ],
    features: [
        {
            label: "Safety Instrument",
            icon: "https://res.cloudinary.com/dkuixrz40/image/upload/v1742567391/ilus03_ogxlcn.png",
            description:
                "Paddles, safety aids, life jackets, helmets, throw bags, and dry bags",
        },
        {
            label: "Transport",
            icon: "https://res.cloudinary.com/dkuixrz40/image/upload/v1742567391/ilus04_fppfsy.png",
            description: "Transportation to and from Laxman Julla",
        },
    ],
    itinerary: [
        {
            label: "Day 1",
            description:
                "Meet your instructor and depart early morning from Rishikesh to Devprayag (2-3 hours). Begin your river expedition here. Beginners will receive an introduction to kayaking, learning paddling techniques, turns, stops, and basics of river hydrology. Kayak for 16 km downstream to Beas Ghat, a serene riverside beach. Set up camp, unwind with a bonfire, barbecue under the stars, and stay overnight.",
        },
        {
            label: "Day 2",
            description:
                "After breakfast, resume your kayaking journey. Beginners will continue refining their skills while navigating the river. Cover 22 km to reach Marine Drive. Check into a luxury riverside camp by the Ganga. Practice kayak rolls in the camp's swimming pool and enjoy a tranquil evening by the river with a bonfire and barbecue.",
        },
        {
            label: "Day 3",
            description:
                "Kayak the final stretch of 24 km towards Rishikesh, arriving by afternoon. After disembarking at Neem Beach, get transferred to your accommodation. Celebrate mastering a new skill and experiencing the Ganga's beauty from a unique perspective!",
        },
        {
            label: "KAYAK TIMING",
            description:
                "A typical day involves kayaking from 9:00 AM to 1:00 PM. After reaching the campsite, set up tents, relax, and soak in the peacefulness of the Ganga. Evenings include leisure time, bonfires, and riverside activities.",
        },
    ],
    faq: [
        {
            id: "1",
            title: "Is kayaking safe?",
            icon: AtSignIcon,
            content:
                "Yes, kayaking is safe. We have a team of trained guides who will guide you through the kayaking experience.",
        },
        {
            id: "2",
            title: "Does kayaking require previous experience?",
            icon: CommandIcon,
            content:
                "No, kayaking does not require previous experience. We have a team of trained guides who will guide you through the kayaking experience.",
        },
        {
            id: "3",
            title: "Will i be able to kayak alone?",
            icon: EclipseIcon,
            content:
                "You will be sitting alone in your kayak. But your instructor and other students will be around you at all times. Rescue kayaks will also accompany you when you go in the rapids.",
        },
        {
            id: "4",
            title: "What is teh closest airport to the starting point?",
            icon: EclipseIcon,
            content:
                "The closest airport to the starting point is Dehradun Airport (40 km away).",
        },
        {
            id: "5",
            title: "How fit do i need to be to go kayaking?",
            icon: EclipseIcon,
            content:
                "You should be able to swim 200 meters and be comfortable in the water. If you are not comfortable in the water, you can opt for a life jacket.",
        },
    ],
    tnk: [
        {
            label: "Price details",
            description:
                "Price mentioned is per person for a minimum of 2 people. If you are travelling solo, let us know and will customise the price.",
        },
        {
            label: "Accommodation",
            description:
                "Accommodation includes tent stay on day 1 & luxury camp stay on day 2, with all 3 meals (breakfast, lunch, dinner).",
        },
        {
            label: "Cancellation/ Rescheduling Policy",
            description:
                "We charge 10% of total price as a cancellation fee if cancelled 7 days before start date. And 20% of total price if cancelled within 7 days of start date.",
        },
        {
            label: "Disclaimer",
            list: [
                "It is mandatory for players to abide by sport safety regulations of the school and destination.",
                "The school reserves a right to charge for gear damage, if any.",
                "AdventurePlay is not liable for any injury or death caused.",
            ],
        },
    ],
};

export const reviewsConfig = [
    {
        id: 1,
        name: "Dhaval Shani",
        rating: 5,
        review: "The first trip was during summers in June 2024, where I went with 7 friends for a 75 km rafting expedition. Initially planned as a 3-day, 105 km journey, it was shortened to 2 days due to high water levels, but it was still thrilling. Our raft guide, Sandeep Rana and kayak guide, Nitesh Negi was not only incredibly skilled but also hilarious, keeping us entertained throughout the trip with his sense of humour. During this expedition, we had the unique experience of spending about 60% of the time floating in the river without raft, and we also jumped into many rapids, which was both thrilling and exhilarating!",
    },
    {
        id: 2,
        name: "Sanidhya Shani",
        rating: 5,
        review: "Seahawk Adventures delivered an absolutely thrilling and unforgettable whitewater rafting experience. From the moment we arrived, the team was incredibly professional, friendly, and safety-conscious. Our guides were experienced and enthusiastic, providing clear instructions and making sure everyone felt comfortable throughout the journey.   ",
    },
];
