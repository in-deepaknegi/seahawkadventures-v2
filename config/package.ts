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