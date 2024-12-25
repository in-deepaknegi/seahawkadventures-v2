import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export interface Package {
    title: string;
    description: string;
    price: number;
    image: {
        src: string;
        alt: string;
    };
}

interface PackageModalProps {
    isOpen: boolean;
    onClose: () => void;
    package: Package | null;
}

export default function PackageModal({
    isOpen,
    onClose,
    package: pkg,
}: PackageModalProps) {
    if (!pkg) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/80"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-x-4 top-20 z-50 mx-auto overflow-hidden rounded-xl bg-white shadow-xl md:max-w-[60%]"
                    >
                        <div className="relative">
                            <img
                                src={pkg.image.src}
                                alt={pkg.title}
                                className="h-64 w-full object-cover"
                            />
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 rounded-full bg-white/90 p-2 transition-colors hover:bg-white"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="p-6">
                            <h3 className="mb-2 font-insm text-2xl">
                                {pkg.title}
                            </h3>
                            <div
                                className="mb-4 flex flex-col space-y-2 text-[0.935rem] text-gray-600"
                                dangerouslySetInnerHTML={{
                                    __html: pkg.description,
                                }}
                            />

                            <div className="flex gap-10 text-sm">
                                <div className="w-full rounded-lg bg-gray-50 p-4">
                                    <h4 className="mb-2 font-insm text-base">
                                        What's Included
                                    </h4>
                                    <ul className="list-inside list-disc space-y-1 text-gray-600">
                                        <li>Professional guide</li>
                                        <li>Safety equipment</li>
                                        <li>Transportation</li>
                                        <li>Refreshments</li>
                                    </ul>
                                </div>

                                <div className="w-full rounded-lg bg-gray-50 p-4">
                                    <h4 className="mb-2 font-insm text-base">
                                        Requirements
                                    </h4>
                                    <ul className="list-inside list-disc space-y-1 text-gray-600">
                                        <li>Minimum age: 12 years</li>
                                        <li>Basic swimming ability</li>
                                        <li>Good physical condition</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Starting from
                                    </p>
                                    <p className="text-3xl font-bold text-blue-600">
                                        ₹{pkg.price}
                                    </p>
                                </div>
                                <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
