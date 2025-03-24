import { motion } from "framer-motion";
import { Code, Database, Globe, Lock, RefreshCw, Zap } from "lucide-react";

export const HowItWorks = () => {
    const features = [
        {
            icon: Code,
            title: "Instant Analytics",
            description: "Gain insights on user interactions with your website.",
        },
        {
            icon: Database,
            title: "Metadata",
            description: "Store and manage website metadata efficiently.",
        },
        {
            icon: Lock,
            title: "Custom Code",
            description: "Implement secure and flexible custom code.",
        },
        {
            icon: RefreshCw,
            title: "Localization",
            description: "Adapt your content for global audiences.",
        },
        {
            icon: Zap,
            title: "Canonical URL",
            description: "Manage duplicate content with proper URL structures.",
        },
    ];

    return (
        <section id="how-it-works" className="py-20 text-white">
            <div className="container mx-auto px-6">
                {/* Title */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-bold text-3xl text-blue-400 md:text-4xl">
                        Simple helps your teams work <br /> more efficiently together
                    </h2>
                </motion.div>

                {/* /* Animated Floating UI */}
                <div className="relative mb-20 flex justify-center">
                    <motion.div
                        className="relative flex items-center justify-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <div className="flex h-48 w-48 items-center justify-center rounded-full bg-blue-600/40 md:h-72 md:w-72">
                            <div className="h-32 w-32 animate-pulse rounded-full bg-blue-600/60 md:h-52 md:w-52"></div>
                        </div>

                        {/* Floating UI Elements */}
                        <motion.div
                            className="-left-20 absolute top-10 rounded-lg bg-gray-800/80 p-3 text-xs shadow-lg backdrop-blur-md"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                        >
                            <div className="mb-1 flex items-center gap-2">
                                <div className="h-4 w-4 rounded-full bg-gray-400"></div>
                                <span>mark-s/website-tweaks</span>
                            </div>
                            <div className="text-[10px] text-gray-400">Amsterdam, Netherlands</div>
                        </motion.div>

                        <motion.div
                            className="-right-24 absolute bottom-10 rounded-lg bg-gray-800/80 p-3 text-xs shadow-lg backdrop-blur-md"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.8 }}
                        >
                            <div className="mb-1 flex items-center gap-2">
                                <div className="h-4 w-4 rounded-full bg-gray-400"></div>
                                <span>eric-w/freeform-canvas</span>
                            </div>
                            <div className="text-[10px] text-gray-400">London, UK</div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-2xl border border-gray-700/60 bg-gray-900/60 p-6 shadow-lg backdrop-blur-lg"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.2)",
                            }}
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-20"></div>

                            {/* Icon & Title */}
                            <div className="relative z-10 mb-3 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 shadow-md">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg text-white">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="relative z-10 text-gray-400 text-sm">
                                {feature.description}
                            </p>

                            {/* Floating Decoration */}
                            <motion.div
                                className="absolute right-2 bottom-2 h-6 w-6 rounded-full bg-cyan-500/40 blur-xl"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
