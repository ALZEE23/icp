import { Shield, Globe, Lock } from "lucide-react";
import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Your files are encrypted and secured using cutting-edge blockchain technology",
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
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose <span className="text-blue-500">Web3Vault?</span>
        </motion.h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:shadow-xl transition-shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.4)" }}
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
