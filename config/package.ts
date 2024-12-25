export const packagesConfig = [
    {
        title: "rafting",
        description: "",
        collection: [
            {
                title: "12 Km River Rafting",
                description: `<p>The 12 km rafting from  Rishikesh's Club House to Neem Beach, while advertised as a 12km rafting experience from, the actual river distance is approximately 7-8km, completing in 1.5-2 hours.</p>
                
                <p>The route encompasses roughly five rapids of varying intensity, including notable features like Golf Course (III+), Return to Sender, and Club House (III). While presenting larger waves and hydraulics, these rapids are considered safe under experienced guidance.</p>
                `,
                price: 620,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
                    alt: "",
                },
                timing: 'Every day at 9:00 AM and 2:00 PM',
                location: 'Marine Drive - Shivpuri',
                duration: '1.5 hours',
            },
            {
                title: "16 Km River Rafting",
                description: `<p>The 16km rafting from Shivpuri to Neem Beach, while advertised as a 16km road distance from Rishikesh, covers approximately 10-11km by river, requiring 2 to 2.5 hours.</p> 
                
                <p>This section features around nine rapids of varying intensity, including notable rapids such as Roller Coaster (III+), Golf Course (III+), Return to Sender, and Club House (III). Despite significant waves and hydraulics, the rapids are considered safe for rafting.</p>`,
                price: 1020,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3105.jpg",
                    alt: "",
                },
                timing: 'Every day at 9:00 AM and 2:00 PM',
                location: 'Shivpuri to NIM Beach',
                duration: '2 hours',
            },
            {
                title: "21 Km River Rafting",
                description: `
                <p>The 21km rafting from Marine Drive to NIM Beach, while advertised as a 21km road distance from Rishikesh, covers approximately 17-18km by river, requiring 3 to 4 hours.</p> 
                
                <p>This seemingly tranquil journey belies the presence of roughly ten grade III and III+ rapids, each demanding skill and attention. Notable rapids include "Three Blind Mice," a deceptively calm sequence of three closely spaced rapids, and others such as "Huge and Kiss," "Cross Fire," "Return to Sender Roller Coaster," "Golf Course," and "Club House."</p>`,
                price: 1520,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3101.jpg",
                    alt: "",
                },
                timing: 'Every day at 9:00 AM and 2:00 PM',
                location: 'Marine drive to NIM Beach',
                duration: '3 hours',
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
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
                    alt: "",
                },
                timing: 'Every day at 8:00 AM',
                location: 'Brahmpuri',
                duration: '2 hours',
            },
            {
                title: "Advanced Training",
                description: "Advanced course with Grade III and IV rapids",
                price: 1999,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3102.jpg",
                    alt: "",
                },
                timing: 'Every day at 9:00 AM',
                location: 'Shivpuri Rapids',
                duration: '4 hours',
            },
        ],
    },
    {
        title: "expedition",
        description: "",
        collection: [
            {
                title: "Weekend Warrior",
                description:
                    "Perfect for beginners, experience Grade I and II rapids",
                price: 1999,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3507.jpg",
                    alt: "",
                },
                timing: 'Every Friday 3:00 PM',
                location: 'Beach Camps',
                duration: '2 Days',
            },
            {
                title: "Himalayan Explorer",
                description: "Advanced course with Grade III and IV rapids",
                price: 1999,
                image: {
                    src: "https://res.cloudinary.com/dkuixrz40/image/upload/v1734974473/img-3508.jpg",
                    alt: "",
                },
                timing: 'Weekly departures',
                location: 'Various routes',
                duration: '5 Days',
            },
        ],
    },
]







interface PackageConfig {
    package?: {
        id?: number;
        title?: string;
        price?: number;
        timing?: string;
        route?: string;
        grade?: string;
        duration?: string;
        description?: string
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
            title: "12 KM",
            price: 1,
            route: "Club House to NIM Beach",
            grade: "I-II",
            duration: "1 - 2 Hours",
            description: "Experience riverside camping with bonfire and adventure activities.",
            level: "Beginner",

            link: "#"
        },
        {
            id: 2,
            title: "16 KM",
            route: "Shivpuri to NIM Beach",
            grade: "II - III",
            duration: "2 - 3 Hours",
            price: 1020,
            link: "#"
        },
        {
            id: 3,
            title: "26 KM",
            route: "Marine Drive to NIM Beach",
            grade: "II - III",
            duration: "2 - 3 Hours",
            price: 1520,
            link: "#"
        },
    ],
    gallery: [
        {
            src: "/images/rafting/r05.jpg",
            alt: "",
        },
        {
            src: "/images/rafting/r03.jpg",
            alt: "",
        },
        {
            src: "/images/rafting/r08.jpg",
            alt: "",
        },
        {
            src: "/images/rafting/r12.jpg",
            alt: "",
        },
        {
            src: "/images/rafting/r13.jpg",
            alt: "",
        },
    ],
    features: [
        {
            label: "Safety Instrument",
            description:
                "Paddles, safety aids, life jackets, helmets, throw bags, and dry bags",
        },
        {
            label: "Transport",
            description: "Transportation to and from Laxman Julla",
        },
        {
            label: "Trained Guide",
            description:
                "Highly trained guide with over 10 years of experience",
        },
    ],
    itinerary: [
        {
            label: "White Water Rafting",
            description:
                "Engage in enthralling white water rafting expedition on the mighty Ganges in Rishikesh. Navigate through the thrilling rapids amidst the mountains",
            image: {
                src: "/images/rafting/r05.jpg",
                alt: "",
            },
        },
        {
            label: "Body Surfing",
            description:
                "Experience the body surfing and swimming in the holy river Ganga with Life Jacket",
            image: {
                src: "/images/rafting/r08.jpg",
                alt: "",
            },
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
            description: "Experience riverside camping with bonfire and adventure activities.",
            level: "Beginner",
            link: "#"
        },
        {
            id: 2,
            title: "Kayak Expedition",
            timing: "Every Friday 3:00 PM",
            route: "",
            duration: "4 Hours",
            price: 1500,
            description: "Perfect for beginners to learn basic kayaking skills in calm waters.",
            level: "Moderate",
            link: "#"
        },
    ],
    gallery: [
        {
            src: "/images/expedition/m01.jpg",
            alt: "",
        },
        {
            src: "/images/expedition/m00.jpg",
            alt: "",
        },
        {
            src: "/images/expedition/m02.jpg",
            alt: "",
        },
        {
            src: "/images/kayak/k05.jpg",
            alt: "",
        },
        {
            src: "/images/kayak/k08.jpg",
            alt: "",
        },
    ],
}

export const kayakConfig = {
    package: [
        {
            id: 1,
            title: "Beginners",
            route: "Brahmpuri",
            duration: "2 Hours",
            price: 800,
            description: "Perfect for beginners to learn basic kayaking skills in calm waters.",
            link: "#"
        },
        {
            id: 2,
            title: "Advanced",
            route: "Shivpuri",
            duration: "4 Hours",
            price: 1500,
            description: "Perfect for beginners to learn basic kayaking skills in calm waters.",
            link: "#"
        },
    ],
}