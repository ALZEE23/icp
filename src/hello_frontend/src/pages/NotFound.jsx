
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { WavyBackground } from "../components/ui/wavy-background";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <WavyBackground className="min-h-screen flex items-center justify-center ">
      <div className="text-center max-w-md px-4">
        <div className="avatar placeholder mb-5">
          <div className="bg-primary text-neutral-content rounded-full w-24 h-24">
            <Search size={40} className="mx-auto mt-7"/>
          </div>
        </div>
        
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-3xl font-semibold mb-4">Page Not Found</p>
        <p className="text-xl text-base-content/70 mb-6">
          We couldn't find the page you were looking for. The link might be incorrect or the page may have been removed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
