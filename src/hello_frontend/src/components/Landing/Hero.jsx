import { ArrowRight, Shield } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative pt-24 pb-16 text-white">
            <div className="container relative z-10 px-6">
                <div className="mx-auto max-w-3xl text-center">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-400 text-sm sm:text-base">
                        <Shield className="h-4 w-4" /> Military-grade Security
                    </div>

                    {/* Heading */}
                    <h1 className="mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-500 bg-clip-text font-bold text-4xl text-transparent tracking-tight sm:text-5xl md:text-6xl">
                        Secure Cloud Storage Powered by{" "}
                        <span className="text-blue-400">Blockchain</span>
                    </h1>

                    {/* Description */}
                    <p className="mb-8 text-blue-100/80 text-lg sm:text-xl">
                        Store your files with unbreakable encryption technology. Decentralized,
                        private, and globally accessible.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <button className="btn group w-full gap-2 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 hover:from-blue-500 hover:to-blue-300 sm:w-auto">
                            Get Started
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="btn w-full bg-gray-800 hover:bg-gray-700 sm:w-auto">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2 h-[90%] w-[90%] rounded-full bg-blue-500/30 blur-[120px] md:h-[800px] md:w-[800px]" />
        </section>
    );
};
