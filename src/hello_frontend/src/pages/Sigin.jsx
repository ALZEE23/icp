import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { WavyBackground } from "../components/ui/wavy-background";

function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4">
            {/* Futuristic grid background */}
            <WavyBackground
                waveWidth={20}
                className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
            />

            <div className="card z-10 w-full max-w-md border border-white/10 bg-base-100 bg-black/20 shadow-xl backdrop-blur-lg">
                <div className="card-body">
                    {/* Logo */}
                    <div className="mb-4 flex justify-center">
                        <ShieldCheck size={48} className="text-primary" />
                    </div>

                    {/* Title */}
                    <h2 className="text-center font-bold text-2xl text-white">
                        Sign in to SecureVault
                    </h2>
                    <p className="mb-6 text-center text-blue-100">
                        Secure your digital assets with us
                    </p>

                    {/* Sign in with Google Button */}
                    <button
                        className="btn btn-outline mb-4 gap-2"
                        onClick={() => alert("Sign in with Google clicked")}
                    >
                        Sign in with ICP
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
