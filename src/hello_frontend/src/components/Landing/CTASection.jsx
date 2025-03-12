import { ArrowRight, Lock } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden ">
      <div className="container relative z-10 flex justify-center">
        {/* Animated Border Wrapper */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-border">
          <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl text-center p-8 rounded-2xl bg-gray-900 backdrop-blur-xl border border-white/10 shadow-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
              <Lock className="w-4 h-4" /> End-to-End Encryption
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">
              Ready to Secure Your Files?
            </h2>
            <p className="text-lg md:text-xl mb-6 text-blue-100/80">
              Join thousands of users who trust Web3Vault with their data security.
              Get started today with a free trial.
            </p>
            <a 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold text-white transition-all 
              bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 hover:shadow-lg hover:scale-105"
            >
              Sign Up Now 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
    
    </section>
  );
};
