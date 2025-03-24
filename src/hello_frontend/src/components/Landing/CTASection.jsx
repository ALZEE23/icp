import { ArrowRight, Lock } from "lucide-react";

export const CTASection = () => {
    return (
        <section className="relative overflow-hidden py-20 ">
            <div className="container relative z-10 flex justify-center">
                {/* Animated Border Wrapper */}
                <div className="relative animate-border rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-[2px]">
                    <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-gray-900 p-8 text-center shadow-lg backdrop-blur-xl sm:max-w-xl md:max-w-2xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-400">
                            <Lock className="h-4 w-4" /> End-to-End Encryption
                        </div>
                        <h2 className="mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text font-bold text-2xl text-transparent md:text-3xl">
                            Ready to Secure Your Files?
                        </h2>
                        <p className="mb-6 text-blue-100/80 text-lg md:text-xl">
                            Join thousands of users who trust Web3Vault with their data security.
                            Get started today with a free trial.
                        </p>
                        <a className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 font-semibold text-lg text-white transition-all hover:scale-105 hover:from-blue-500 hover:to-blue-300 hover:shadow-lg">
                            Sign Up Now
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Background Glow Effect */}
        </section>
    );
};
