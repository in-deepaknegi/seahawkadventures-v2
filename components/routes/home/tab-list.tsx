import { motion } from "framer-motion";
import { Ship, Navigation, Map } from "lucide-react";
import { packagesConfig } from "@/config/package"; // Import packagesConfig

interface TabListProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    orientation?: "horizontal" | "vertical";
}

export default function TabList({
    activeTab,
    setActiveTab,
    orientation = "horizontal",
}: TabListProps) {
    const isVertical = orientation === "vertical";

    return (
        <div
            className={`flex ${isVertical ? "flex-col" : "justify-center flex-row"} sticky top-4 gap-2`}
        >
            {packagesConfig.map((tab) => {
                const Icon = tab.title === "rafting" ? Ship : tab.title === "kayaking" ? Navigation : Map;
                const isActive = activeTab === tab.title;
                return (
                    <button
                        key={tab.title}
                        onClick={() => setActiveTab(tab.title)}
                        className={`relative flex w-full items-center gap-3 rounded-xl px-6 py-3 transition-all duration-200 ${
                            isActive
                                ? "bg-blue-50 text-blue-600 font-insm"
                                : "text-neutral-700 hover:text-gray-900"
                        } `}
                    >
                        <Icon className="h-5 w-5" />
                        <span className="text-base capitalize">{tab.title}</span>
                        {isActive && (
                            <motion.div
                                layoutId="active-tab-indicator"
                                className="absolute left-0 h-9 w-1 -translate-y-1/2 rounded-r-full bg-blue-600"
                                transition={{ type: "spring", duration: 0.6 }}
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
}
