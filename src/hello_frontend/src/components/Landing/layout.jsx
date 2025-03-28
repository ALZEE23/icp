import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShieldCheck, User, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
// import { Button } from "react-native";

function Layout({ children }) {
  const { logout, login } = useAuth();

  const user = localStorage.getItem("user");

  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navbar */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 z-40 w-full"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative mt-4 flex h-16 items-center justify-between rounded-xl bg-white/10 px-6 shadow-black/20 shadow-lg backdrop-blur-lg">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold text-lg text-white"
            >
              <ShieldCheck size={30} className="text-blue-500" />
              SecureVault
            </Link>

            {/* Navigation (Desktop) */}
            <ul className="hidden items-center space-x-6 text-gray-300 md:flex">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm transition hover:text-blue-400 ${
                      location.pathname === link.path
                        ? "font-medium text-blue-500 "
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              {user ? (
                <div className="hidden gap-3 md:flex">
                  <Link
                    to="/dashboard"
                    className="group flex w-16 items-center rounded-lg border border-gray-400 px-4 py-2 text-sm transition hover:bg-gray-700"
                  >
                    <User
                      size={18}
                      className="mx-auto mr-2 group-hover:hidden"
                    />
                    <span className="mx-auto hidden group-hover:inline-block">
                      dashboard
                    </span>
                  </Link>
                </div>
              ) : (
                <div className="hidden gap-3 md:flex">
                  <Link
                    to="/signin"
                    className="group flex w-16 items-center rounded-lg border border-gray-400 px-4 py-2 text-sm transition hover:bg-gray-700"
                  >
                    <User
                      size={18}
                      className="mx-auto mr-2 group-hover:hidden"
                    />
                    <span className="mx-auto hidden group-hover:inline-block">
                      Login
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Auth Buttons */}

            {/* Burger Menu (Mobile) */}
            <button
              className="rounded-lg bg-gray-800 p-2 text-white md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-3/4 bg-gray-900 p-6 text-white shadow-lg md:hidden"
            >
              <button
                className="absolute top-5 right-5"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>

              <ul className="mt-16 space-y-6 text-lg">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-800 ${
                        location.pathname === link.path ? "text-blue-400" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/signin"
                    className="block rounded-lg bg-gray-800 px-4 py-2 text-center"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto flex-grow p-6 pt-24 md:pt-28">
        {children}
      </main>
    </div>
  );
}

export default Layout;
