import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
export interface Package {
    title: string;
    description: string;
    price: number;
    image: {
        src: string;
        alt: string;
    };
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
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
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
        if (layout === "list") {
            return (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex overflow-hidden rounded-xl bg-white shadow-lg"
                >
                    <div className="relative w-1/3">
                        <img
                            src={pkg.image.src}
                            alt={pkg.image.alt}
                            className="h-full w-full object-cover"
                        />
                        <button
                            onClick={() => openModal(pkg)}
                            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 opacity-0 transition-opacity group-hover:opacity-100"
                        >
                            <Plus className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex-1 p-6">
                        <h3 className="mb-2 text-xl font-semibold">{pkg.title}</h3>
                        <p className="mb-4 text-gray-600">{pkg.description}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-blue-600">
                                ₹{pkg.price}
                            </span>
                            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                                Book Now
                            </button>
                        </div>
                    </div>
                </motion.div>
            );
        }

        const cardClass = layout === "masonry" ? "mb-8 break-inside-avoid" : "";

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group overflow-hidden rounded-xl bg-white shadow-lg ${cardClass}`}
            >
                <div className="relative">
                    <img
                        src={pkg.image.src}
                        alt={pkg.image.alt}
                        className="h-48 w-full object-cover"
                    />
                    <button
                        onClick={() => openModal(pkg)}
                        className="absolute right-4 top-4 rounded-full bg-white/90 p-2 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                        <Plus className="h-5 w-5" />
                    </button>
                </div>
                <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">{pkg.title}</h3>
                    <p className="mb-4 text-gray-600">{pkg.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">
                            ₹{pkg.price}
                        </span>
                        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                            Book Now
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
                        <PackageCard key={pkg.title} pkg={pkg} index={index} />
                    ))}
                </div>
            </motion.div>
        </>
    );
}
