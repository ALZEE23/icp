import { Code, Globe, Database, Zap, RefreshCw, Lock } from "lucide-react";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  const features = [
    { icon: Code, title: "Instant Analytics", description: "Gain insights on user interactions with your website." },
    { icon: Database, title: "Metadata", description: "Store and manage website metadata efficiently." },
    { icon: Lock, title: "Custom Code", description: "Implement secure and flexible custom code." },
    { icon: RefreshCw, title: "Localization", description: "Adapt your content for global audiences." },
    { icon: Zap, title: "Canonical URL", description: "Manage duplicate content with proper URL structures." }
  ];

  return (
    <section id="how-it-works" className="py-20  text-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
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
              <div className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-blue-600/40 flex items-center justify-center">
                <div className="w-32 h-32 md:w-52 md:h-52 rounded-full bg-blue-600/60 animate-pulse"></div>
              </div>

              {/* Floating UI Elements */}
            <motion.div 
              className="absolute top-10 -left-20 bg-gray-800/80 backdrop-blur-md p-3 rounded-lg text-xs shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                <span>mark-s/website-tweaks</span>
              </div>
              <div className="text-gray-400 text-[10px]">Amsterdam, Netherlands</div>
            </motion.div>

            <motion.div 
              className="absolute bottom-10 -right-24 bg-gray-800/80 backdrop-blur-md p-3 rounded-lg text-xs shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                <span>eric-w/freeform-canvas</span>
              </div>
              <div className="text-gray-400 text-[10px]">London, UK</div>
            </motion.div>
          </motion.div>
        </div>

       
         {/* Features Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-900/60 border border-gray-700/60 rounded-2xl p-6 shadow-lg backdrop-blur-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.2)" }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-20"></div>
              
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 shadow-md">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm relative z-10">
                {feature.description}
              </p>

              {/* Floating Decoration */}
              <motion.div 
                className="absolute bottom-2 right-2 w-6 h-6 bg-cyan-500/40 blur-xl rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
