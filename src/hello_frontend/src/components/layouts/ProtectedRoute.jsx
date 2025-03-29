import { Navigate, Outlet } from "react-router";
import { useAuth } from "~/contexts/AuthContext";

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
