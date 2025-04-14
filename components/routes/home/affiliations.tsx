import Image from "next/image";

const affiliations = [
    {
        name: "Indian Rafting Association",
        logo: "/images/logos/i1.png",
        alt: "Indian Rafting Association logo",
    },
    {
        name: "Adventure Tour Operators Association",
        logo: "/images/logos/i2.png",
        alt: "Adventure Tour Operators Association logo",
    },
    {
        name: "International Rafting Federation",
        logo: "/images/logos/i3.jpeg",
        alt: "International Rafting Federation logo",
    },
    {
        name: "Uttarakhand Tourism Board",
        logo: "/images/logos/i4.jpg",
        alt: "Uttarakhand Tourism Board logo",
    },
    {
        name: "Himalayan Mountaineering Institute",
        logo: "/images/logos/i5.png",
        alt: "Himalayan Mountaineering Institute logo",
    },
];

export default function Affiliations() {
    return (
        <section className="bg-white py-16">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-blue-800">
                        Our Affiliations
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-blue-600">
                        We're proud to be associated with these prestigious
                        organizations
                    </p>
                </div>

                <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-5">
                    {affiliations.map((affiliation, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative mb-3 h-24 w-40">
                                <Image
                                    src={affiliation.logo || "/placeholder.svg"}
                                    alt={affiliation.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-center text-sm font-medium text-gray-700">
                                {affiliation.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
