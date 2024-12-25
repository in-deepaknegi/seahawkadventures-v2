import { motion } from "framer-motion";
import { useState } from "react";
import TabContent from "./tab-content";
import TabList from "./tab-list";
import { packagesConfig } from "@/config/package";

export default function AdventuresSection() {
    const [activeTab, setActiveTab] = useState<string>("rafting");

    const activeTabData = packagesConfig.find(tab => tab.title === activeTab);

    return (
        <section className="bg-white px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-full md:max-w-[90%]"
            >
                <h2 className="mb-4 text-center text-4xl font-bold">
                    Our Adventures
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
                    Experience the thrill of adventure sports in Rishikesh with
                    our expert guides and world-class equipment
                </p>

                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Sidebar with Tabs */}
                    <div className="shrink-0 lg:w-64">
                        <TabList
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            orientation="vertical"
                            variant="cards"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {activeTabData && (
                            <TabContent
                                activeTab={activeTab}
                                data={activeTabData}
                                layout="grid"
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
