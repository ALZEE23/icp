import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck, User } from "lucide-react";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    {name: "Lukman", path: "/about"}
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 z-40 w-full"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative flex h-16 items-center justify-between rounded-xl bg-white/10 shadow-lg shadow-black/20 backdrop-blur-lg px-6 mt-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-white text-lg font-semibold">
              <ShieldCheck size={30} className="text-blue-500" />
              SecureVault
            </Link>

            {/* Navigation (Desktop) */}
            <ul className="hidden md:flex items-center space-x-6 text-gray-300">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`hover:text-blue-400 transition text-sm  ${
                      location.pathname === link.path ? "text-blue-500 font-medium " : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Auth Buttons */}
           <div className="hidden md:flex gap-3">
      <Link
        to="/signin"
        className="group flex items-center px-4 py-2 border border-gray-400 rounded-lg text-sm hover:bg-gray-700 transition w-16"
      >
        <User size={18} className="mr-2 group-hover:hidden mx-auto" />
        <span className="hidden group-hover:inline-block mx-auto">Login</span>
      </Link>
    </div>

            {/* Burger Menu (Mobile) */}
            <button className="md:hidden p-2 rounded-lg bg-gray-800 text-white" onClick={() => setIsOpen(!isOpen)}>
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
              className="fixed top-0 right-0 w-3/4 h-full bg-gray-900 text-white shadow-lg p-6 md:hidden"
            >
              <button className="absolute top-5 right-5" onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>

              <ul className="mt-16 space-y-6 text-lg">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 px-4 rounded-lg text-gray-300 hover:bg-gray-800 ${
                        location.pathname === link.path ? "text-blue-400" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/signin" className="block py-2 px-4 bg-gray-800 rounded-lg text-center">
                    Login
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 pt-24 md:pt-28">{children}</main>
    </div>
  );
}

export default Layout;
