interface DocsConfig {}

export const packageConfig: DocsConfig = {};

export const raftingConfig = {
    package: [
        {
            id: 1,
            distance: "12 KM",
            route: "Club House to NIM Beach",
            grade: "I-II",
            duration: "1 - 2 Hours",
            price: 1,
        },
        {
            id: 2,
            distance: "16 KM",
            route: "Shivpuri to NIM Beach",
            grade: "II - III",
            duration: "2 - 3 Hours",
            price: 1020,
        },
        {
            id: 3,
            distance: "26 KM",
            route: "Marine Drive to NIM Beach",
            grade: "II - III",
            duration: "2 - 3 Hours",
            price: 1520,
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


export const expeditionConfig = {
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