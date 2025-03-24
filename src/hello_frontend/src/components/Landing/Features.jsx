import { motion } from "framer-motion";
import { Globe, Lock, Shield } from "lucide-react";

export const Features = () => {
    const features = [
        {
            icon: Shield,
            title: "Blockchain Security",
            description:
                "Your files are encrypted and secured using cutting-edge blockchain technology",
        },
        {
            icon: Globe,
            title: "Global Access",
            description: "Access your files from anywhere in the world, anytime you need them",
        },
        {
            icon: Lock,
            title: "Decentralized Storage",
            description: "No single point of failure. Your data is distributed across the network",
        },
    ];

    return (
        <section id="features" className="py-16 text-white">
            <div className="container mx-auto px-6">
                {/* Title */}
                <motion.h2
                    className="mb-12 text-center font-bold text-3xl text-blue-400 md:text-4xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Why Choose <span className="text-blue-500">Web3Vault?</span>
                </motion.h2>

                {/* Features Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="flex flex-col items-center rounded-lg border border-gray-700 bg-gray-800 p-6 text-center shadow-md transition-shadow hover:shadow-xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.4)",
                            }}
                        >
                            <feature.icon className="mb-4 h-12 w-12 text-blue-400" />
                            <h3 className="mb-2 font-semibold text-xl">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
