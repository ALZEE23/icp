import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem("user"));

  // useEffect(() => {
  //   const userPrincipal = localStorage.getItem("user");
  //   if (userPrincipal) {
  //     setUser(userPrincipal);
  //   }
  // }, []);

  // console.log("AuthProvider user:", user);

  const login = () => {
    const userPrincipal = localStorage.getItem("user");
    if (userPrincipal) {
      setUser(userPrincipal);
    } else {
      console.error("No user found in local storage");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
