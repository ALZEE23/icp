import { ArrowLeft, Search } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { WavyBackground } from "../components/ui/wavy-background";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <WavyBackground className="flex min-h-screen items-center justify-center ">
            <div className="max-w-md px-4 text-center">
                <div className="avatar placeholder mb-5">
                    <div className="h-24 w-24 rounded-full bg-primary text-neutral-content">
                        <Search size={40} className="mx-auto mt-7" />
                    </div>
                </div>

                <h1 className="mb-4 font-bold text-8xl text-primary">404</h1>
                <p className="mb-4 font-semibold text-3xl">Page Not Found</p>
                <p className="mb-6 text-base-content/70 text-xl">
                    We couldn't find the page you were looking for. The link might be incorrect or
                    the page may have been removed.
                </p>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Link to="/" className="btn btn-primary">
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </div>
            </div>
        </WavyBackground>
    );
};

export default NotFound;
