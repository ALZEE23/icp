import { Menu, PlusIcon, ShieldCheck } from "lucide-react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { DASHBOARD_NAV_LINKS } from "~/lib/constant";
import { cn } from "~/lib/utils";
import ProfileDropdown from "../composites/ProfileDropdown";

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open bg-zinc-950">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />

            <main className="drawer-content">
                <header className="navbar sticky top-0 z-998 bg-zinc-900 px-8">
                    <div className="navbar-start">
                        <div className="mr-4 flex-none lg:hidden">
                            <label
                                htmlFor="dashboard-sidebar"
                                aria-label="open sidebar"
                                className="btn btn-square btn-ghost"
                            >
                                <Menu />
                            </label>
                        </div>
                        <h1 className="font-semibold text-2xl text-white">File Manager</h1>
                    </div>

                    <div className="navbar-end">
                        <ProfileDropdown />
                    </div>
                </header>

                <main className="p-6">
                    <Outlet />
                </main>
            </main>

            <aside className="drawer-side z-999">
                <label
                    htmlFor="dashboard-sidebar"
                    aria-label="close sidebar"
                    className="drawer-overlay backdrop-blur-md transition-[backdrop-filter]"
                />
                <ul className="menu min-h-full w-64 space-y-2 bg-zinc-900 p-6 text-base-content">
                    <li className="mb-8 space-y-6">
                        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
                            <ShieldCheck className="size-7.5 text-blue-500" />
                            SecureVault
                        </Link>

                        <Link
                            to="/file-upload"
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 shadow-md transition-opacity hover:opacity-90"
                        >
                            <PlusIcon className="size-4" />
                            <span className="font-medium text-sm">New Upload</span>
                        </Link>
                    </li>
                    {DASHBOARD_NAV_LINKS.map((item) => (
                        <li key={item.link}>
                            <NavLink
                                to={item.link}
                                className={({ isActive }) =>
                                    cn(
                                        "from-blue-500/20 to-purple-500/20 text-zinc-300 transition-colors hover:bg-gradient-to-r",
                                        isActive &&
                                            "bg-blue-500/20 text-blue-400 shadow-blue-500/30 shadow-md",
                                    )
                                }
                            >
                                <item.icon className="mr-3 size-5" />
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default DashboardLayout;
