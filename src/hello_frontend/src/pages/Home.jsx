import { ArrowRight, Lock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

import { WavyBackground } from "~/components/ui/wavy-background";
import { APP_FEATURES, HOW_IT_WORKS } from "~/lib/constant.js";

const Index = () => {
    return (
        <>
            <WavyBackground speed="slow" className="relative max-w-3xl space-y-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-400 text-sm sm:text-base">
                    <Shield className="size-4" /> Military-grade Security
                </div>
                <h1 className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl">
                    Secure Cloud Storage Powered by{" "}
                    <span className="text-blue-400">Blockchain</span>
                </h1>
                <p className="text-blue-100/80 text-lg">
                    Store your files with unbreakable encryption technology. Decentralized, private,
                    and globally accessible.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <button className="group btn border-0 bg-blue-600 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]">
                        Get Started
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <Link to="#features" className="btn">
                        Learn More
                    </Link>
                </div>

                <div className="-translate-x-1/2 -z-1 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2 h-[90%] w-[90%] rounded-full bg-blue-500/30 blur-[120px] md:h-[800px] md:w-[800px]" />
            </WavyBackground>

            <section id="features" className="px-24 py-16">
                <h2 className="text-center font-bold text-3xl text-blue-400 md:text-4xl">
                    Why Choose <span className="text-blue-500">SecureVault?</span>
                </h2>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {APP_FEATURES.map((feature) => (
                        <div
                            key={feature.title}
                            className="grid place-items-center rounded-lg border border-zinc-700 bg-zinc-800 p-6 text-center shadow-md"
                        >
                            <feature.icon className="mb-4 size-12 text-blue-400" />
                            <h3 className="mb-2 font-semibold text-xl">{feature.title}</h3>
                            <p className="text-zinc-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="how-it-works" className="px-24 py-16">
                <h2 className="text-center font-bold text-4xl text-blue-400 md:text-4xl">
                    Simple helps your teams work <br /> more efficiently together
                </h2>

                <div className="relative my-20 flex justify-center">
                    <div className="relative size-72 md:size-82">
                        <div className="absolute top-0 left-0 z-0 size-72 animate-ping rounded-full bg-blue-600/40 md:size-82" />
                        <div className="-translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 z-1 size-48 rounded-full bg-blue-600/40 md:size-72" />
                        <div className="-translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 z-1 size-32 rounded-full bg-blue-600/60 md:size-52" />
                    </div>

                    <div className="absolute top-10 left-1/3 z-2 rounded-lg bg-zinc-800/80 p-3 text-xs shadow-lg backdrop-blur-md">
                        <div className="mb-1 flex items-center gap-2">
                            <div className="size-4 rounded-full bg-zinc-400" />
                            <span>mark-s/website-tweaks</span>
                        </div>
                        <div className="text-[10px] text-zinc-400">Amsterdam, Netherlands</div>
                    </div>

                    <div className="absolute right-1/3 bottom-10 z-2 rounded-lg bg-zinc-800/80 p-3 text-xs shadow-lg backdrop-blur-md">
                        <div className="mb-1 flex items-center gap-2">
                            <div className="size-4 rounded-full bg-zinc-400" />
                            <span>eric-w/freeform-canvas</span>
                        </div>
                        <div className="text-[10px] text-zinc-400">London, UK</div>
                    </div>
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {HOW_IT_WORKS.map((feature) => (
                        <div
                            key={feature.title}
                            className="relative overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-950/60 p-6"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-20" />
                            <div className="relative z-10 mb-3 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 shadow-md">
                                    <feature.icon className="size-6" />
                                </div>
                                <h3 className="font-semibold text-lg text-white">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="relative z-10 text-sm text-zinc-400">
                                {feature.description}
                            </p>
                            <div className="absolute right-2 bottom-2 size-6 rounded-full bg-cyan-500/40 blur-xl" />
                        </div>
                    ))}
                </div>
            </section>

            <section id="cta" className="flex justify-center px-24 py-16">
                <div className="animate-border rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-[2px]">
                    <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-950 p-8 text-center shadow-lg backdrop-blur-xl sm:max-w-xl md:max-w-2xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-400">
                            <Lock className="size-4" /> End-to-End Encryption
                        </div>
                        <h2 className="mb-4 font-bold text-2xl md:text-3xl">
                            Ready to Secure Your Files?
                        </h2>
                        <p className="mb-6 text-blue-100/80">
                            Join thousands of users who trust Web3Vault with their data security.
                            Get started today with a free trial.
                        </p>
                        <Link
                            to="/signin"
                            className="group btn border-0 bg-blue-600 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]"
                        >
                            Sign Up Now
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
