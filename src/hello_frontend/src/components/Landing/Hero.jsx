import { ArrowRight, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 text-white">
      <div className="container relative z-10 px-6">
        <div className="mx-auto text-center max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 text-sm sm:text-base">
            <Shield className="w-4 h-4" /> Military-grade Security
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-500 mb-6">
            Secure Cloud Storage Powered by{" "}
            <span className="text-blue-400">Blockchain</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-blue-100/80 mb-8">
            Store your files with unbreakable encryption technology.
            Decentralized, private, and globally accessible.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 gap-2 group transition-all duration-300">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn w-full sm:w-auto bg-gray-800 hover:bg-gray-700">Learn More</button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[800px] h-[90%] md:h-[800px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
