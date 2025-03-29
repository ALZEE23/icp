import { ChevronRight, Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

const FileManagerNav = ({ toggleSidebar }) => {
    return (
        <div className="flex w-full animate-fade-in items-center justify-between bg-zinc-950 px-6 py-3 shadow-blue-500/10 shadow-md">
            {/* Left: Menu & Title */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={toggleSidebar}
                    className="rounded-lg p-2 transition-all hover:bg-blue-500/20 lg:hidden"
                    aria-label="Toggle sidebar"
                >
                    <Menu className="h-5 w-5 text-white" />
                </button>
                <h1 className="font-semibold text-2xl text-white">File Manager</h1>
            </div>

            {/* Right: Breadcrumb & Profile */}
            <div className="flex items-center space-x-3">
                <div className="hidden items-center text-sm text-zinc-400 sm:flex">
                    <Link to="/" className="transition-all hover:text-blue-400">
                        Home
                    </Link>
                    <ChevronRight className="mx-1 h-4 w-4 text-zinc-500" />
                    <span className="text-white">File Manager</span>
                </div>
                <UserProfile />
            </div>
        </div>
    );
};

export default FileManagerNav;
