import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WavyBackground } from "../components/ui/wavy-background";
import { AuthClient } from "@dfinity/auth-client";

function Login() {
  const [principal, setPrincipal] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const authClient = await AuthClient.create();
      if (await authClient.isAuthenticated()) {
        const identity = authClient.getIdentity();
        const userPrincipal = identity.getPrincipal().toText();
        setPrincipal(userPrincipal);
      }
    };
    checkAuth();
  }, []);

  const loginWithICP = async () => {
    try {
      let authClient = await AuthClient.create();
      await authClient.login({
        identityProvider: "https://identity.ic0.app/#authorize",
        onSuccess: async () => {
          let identity = authClient.getIdentity();
          let userPrincipal = identity.getPrincipal().toText();
          setPrincipal(userPrincipal);
          localStorage.setItem("user", userPrincipal);
          console.log("Login berhasil, Principal ID:", userPrincipal);
          navigate("/dashboard");
        },
        onError: (err) => {
          console.error("Login gagal:", err);
          setError("Login gagal, coba lagi.");
        },
      });
    } catch (error) {
      console.error("Kesalahan saat login:", error);
      setError("Terjadi kesalahan, coba lagi.");
    }
  };

  const logout = async () => {
    const authClient = await AuthClient.create();
    await authClient.logout();
    setPrincipal(null);
    localStorage.removeItem("principal");
    navigate("/");
  };

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

          {/* Error Message */}
          {error && <p className="text-red-400 text-center">{error}</p>}

          {/* Login & Logout Button */}
          {principal ? (
            <div className="text-center">
              <p className="text-green-400 font-bold">Logged in as:</p>
              <p className="text-white">{principal}</p>
              <button className="btn btn-outline mt-4" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <button
              className="btn btn-outline mb-4 gap-2"
              onClick={loginWithICP}
            >
              Sign in with ICP
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
