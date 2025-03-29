import { AuthClient } from "@dfinity/auth-client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authClient, setAuthClient] = useState();
    const [identity, setIdentity] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthReady, setIsAuthReady] = useState(false);

    // Initialize auth client
    useEffect(() => {
        AuthClient.create().then(async (client) => {
            setAuthClient(client);
            setIsAuthReady(true);

            if (await client.isAuthenticated()) {
                setIsAuthenticated(true);
                setIdentity(client.getIdentity());
            }
        });
    }, []);

    const login = async () => {
        if (!authClient) return;

        await new Promise((resolve, reject) => {
            authClient.login({
                identityProvider:
                    process.env.DFX_NETWORK === "ic"
                        ? "https://identity.ic0.app/#authorize"
                        : "https://identity.ic0.app/#authorize",
                // : `http://localhost:4943?canisterId=${process.env.CANISTER_ID_INTERNET_IDENTITY}`,
                onSuccess: () => {
                    setIsAuthenticated(true);
                    setIdentity(authClient.getIdentity());
                    resolve();
                },
                onError: reject,
            });
        });
    };

    const logout = async () => {
        if (!authClient) return;

        await authClient.logout();
        setIsAuthenticated(false);
        setIdentity(null);
    };

    return (
        <AuthContext.Provider
            value={{
                identity,
                isAuthenticated,
                isAuthReady,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
