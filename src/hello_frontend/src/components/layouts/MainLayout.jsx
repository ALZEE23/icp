import { Facebook, Instagram, Menu, ShieldCheck, Twitter } from "lucide-react";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "~/contexts/AuthContext";
import { FOOTER_LINKS, NAV_LINKS } from "~/lib/constant";

const MainLayout = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        await login();
        navigate("/dashboard");
    };

    return (
        <div className="drawer drawer-end">
            <input type="checkbox" id="sidebar" className="drawer-toggle" />
            <div className="drawer-content relative flex min-h-svh flex-col bg-black">
                <header className="navbar -translate-x-1/2 fixed top-4 left-1/2 z-998 max-w-7xl rounded-xl bg-white/10 p-4 shadow-lg backdrop-blur-lg">
                    <Link
                        to="/"
                        className="navbar-start flex items-center gap-2 font-semibold text-lg"
                    >
                        <ShieldCheck className="size-8 text-blue-500" />
                        SecureVault
                    </Link>
                    <ul className="navbar-center hidden gap-4 lg:inline-flex">
                        {NAV_LINKS.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="text-sm transition-colors hover:text-blue-400"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar-end">
                        <button
                            onClick={handleLogin}
                            className="hidden rounded-full border border-white px-5 py-1.5 font-semibold text-sm transition-colors hover:bg-white/30 lg:block"
                        >
                            Login
                        </button>
                        <div className="flex-none lg:hidden">
                            <label
                                htmlFor="sidebar"
                                aria-label="open sidebar"
                                className="btn btn-square btn-ghost"
                            >
                                <Menu />
                            </label>
                        </div>
                    </div>
                </header>

                <main>
                    <Outlet />
                </main>

                <footer className="footer sm:footer-horizontal relative overflow-hidden p-10 pb-24">
                    <aside>
                        <Link to="" className="flex items-center gap-2">
                            <ShieldCheck className="size-8 text-blue-500" />
                            <span className="font-semibold text-sm md:text-lg">SecureVault</span>
                        </Link>
                        <span className="text-gray-600 text-sm">
                            &copy; SecureVault - All rights reserved.
                        </span>
                    </aside>
                    {FOOTER_LINKS.map((section) => (
                        <nav key={section.title}>
                            <h6 className="footer-title">{section.title}</h6>
                            {section.links.map((link) => (
                                <Link key={link} to="#" className="link link-hover">
                                    {link}
                                </Link>
                            ))}
                        </nav>
                    ))}
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <div className="grid grid-flow-col gap-4">
                            <SocialIcon link="https://facebook.com" icon={Facebook} />
                            <SocialIcon link="https://twitter.com" icon={Twitter} />
                            <SocialIcon link="https://instagram.com" icon={Instagram} />
                        </div>
                    </nav>
                    <div className="-translate-x-1/2 absolute bottom-0 left-1/2 size-56 translate-y-2/3 animate-pulse rounded-full border-[20px] border-blue-700 blur-[80px]" />
                </footer>
            </div>
            <div className="drawer-side z-999">
                <label htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay" />
                <ul className="menu min-h-svh w-80 bg-gray-900 p-4 shadow-lg backdrop-blur-lg">
                    {NAV_LINKS.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className="text-sm transition-colors hover:text-blue-400"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link to="/signin" className="btn btn-wide mt-4">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const SocialIcon = ({ link, icon: Icon }) => {
    return (
        <a
            href={link}
            className="p-2 text-gray-400 transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon className="size-6" />
        </a>
    );
};

export default MainLayout;
