import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Clock, MapPin, Timer, ArrowRight } from "lucide-react";
import PackageModal from "./package-modal";
import Image from "next/image";
import Link from "next/link";

export interface Package {
    title: string;
    description: string;
    price: number;
    image: {
        src: string;
        alt: string;
    };
    features: {
        distance: string;
        duration: string;
        startingPoint: string;
        endingPoint: string;
        rapids: {
            total: string;
            grades: string;
        };
        difficulty: string;
    };
    url: string;
}

interface TabContentProps {
    activeTab: any;
    data: {
        description: string;
        collection: Package[];
    };
    layout?: "grid" | "list" | "masonry";
}

export default function TabContent({
    activeTab,
    data,
    layout = "grid",
}: TabContentProps) {
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(
        null,
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    const layouts = {
        grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        list: "space-y-6",
        masonry: "columns-1 md:columns-2 lg:columns-3 gap-8",
    };

    const openModal = (pkg: Package) => {
        setSelectedPackage(pkg);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedPackage(null), 200);
    };

    const PackageCard = ({ pkg, index }: { pkg: Package; index: number }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group overflow-hidden rounded-xl bg-white shadow-lg`}
            >
                <div className="relative">
                    <Image
                        src={pkg.image.src}
                        alt={pkg.image.alt}
                        width={1980}
                        height={1020}
                        className="h-60 w-full object-cover"
                    />
                    <button
                        onClick={() => openModal(pkg)}
                        className="absolute right-2 top-2 rounded-full bg-white p-2 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"
                    >
                        <span className="sr-only">{pkg.title}</span>
                        <Plus className="h-5 w-5" />
                    </button>
                </div>
                <div className="p-6">
                    <h3 className="mb-3 font-satm text-2xl">{pkg.title}</h3>
                    <div className="mb-6 space-y-2 text-[0.925rem]">
                        {[
                            { icon: Clock, text: pkg.features.duration, i: 1 },
                            {
                                icon: MapPin,
                                text: `${pkg.features.startingPoint} - ${pkg.features.endingPoint}`,
                                i: 2,
                            },
                            { icon: Timer, text: pkg.features.duration, i: 3 },
                        ].map(({ icon: Icon, text, i }) => (
                            <div
                                key={`${text}-${i}`}
                                className="flex items-center text-gray-600"
                            >
                                <Icon className="mr-3 h-4 w-4" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <div
                        className="line-clamp-3 text-[0.935rem] text-gray-700"
                        dangerouslySetInnerHTML={{ __html: pkg.description }}
                    />
                    <button
                        onClick={() => openModal(pkg)}
                        className="mb-4 text-sm text-blue-700"
                    >
                        read more...
                    </button>

                    {/* <p className="mb-4 text-gray-600 line-clamp-2 text-[0.935rem]">{pkg.description}</p> */}

                    <div className="flex items-center justify-between">
                        <div className="flex flex-col text-2xl text-blue-600">
                            <span className="text-xs text-gray-700">
                                Starting from
                            </span>
                            <span className="font-satm">
                                ₹ {pkg.price}
                                <span className="font-satr text-sm text-gray-400">
                                    /person
                                </span>
                            </span>
                        </div>

                        <button className="mt-auto rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                            <Link href={pkg?.url}>Book Now</Link>
                        </button>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <>
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-full"
            >
                <div className={layouts[layout]}>
                    {data.collection.map((pkg, index) => (
                        <PackageCard
                            key={`${pkg.title}+${index}`}
                            pkg={pkg}
                            index={index}
                        />
                    ))}
                </div>
            </motion.div>

            <PackageModal
                isOpen={isModalOpen}
                onClose={closeModal}
                package={selectedPackage}
            />
        </>
    );
}
