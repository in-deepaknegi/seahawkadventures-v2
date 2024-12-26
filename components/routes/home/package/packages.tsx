import { motion } from "framer-motion";
import { useState } from "react";
import TabContent from "./tab-content";
import TabList from "./tab-list";
import { packagesConfig } from "@/config/package";

export default function AdventuresSection() {
    const [activeTab, setActiveTab] = useState<string>("rafting");

    const activeTabData = packagesConfig.find((tab) => tab.title === activeTab);

    return (
        <section className="bg-white px-5 py-20 font-insr">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-full md:max-w-[93%]"
            >
                <div className="flex justify-between w-full flex-col md:flex-row">
                    <h2 className="mb-4 text-center font-satr text-4xl md:text-6xl">
                        Our Adventures
                    </h2>
                    <p className="ml-0 md:ml-auto mt-auto mb-12 max-w-md text-center md:text-right text-gray-700">
                        Experience the thrill of adventure sports in Rishikesh
                        with our expert guides and world-class equipment
                    </p>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row md:mt-10">
                    {/* Sidebar with Tabs */}
                    <div className="shrink-0 lg:w-60">
                        <TabList
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            orientation="vertical"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {activeTabData && (
                            <TabContent
                                activeTab={activeTab}
                                data={activeTabData}
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
