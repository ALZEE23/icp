import { Bell, ChevronDown, LogOut, Settings, UserRound } from "lucide-react";
import React, { useState } from "react";
import { useAuth } from "~/contexts/AuthContext";

const UserProfile = () => {
    const { user } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 rounded-full p-2 transition-colors hover:bg-gray-700"
                aria-expanded={isDropdownOpen}
            >
                <div className="relative flex-shrink-0">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                        <UserRound className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="absolute right-0 bottom-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white"></span>
                </div>

                <div className="flex hidden flex-col items-start text-left sm:block">
                    <span className="font-medium text-sm">John Doe</span>
                    <span className="text-gray-500 text-xs">john@example.com</span>
                </div>

                <ChevronDown className="hidden h-4 w-4 text-gray-500 sm:block" />
            </button>

            {isDropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 rounded-lg bg-[#0d0d0d] py-2 shadow-lg">
                    <div className="px-4 py-2 sm:hidden">
                        <p className="font-medium text-sm">John Doe</p>
                        <p className="text-gray-500 text-xs">john@example.com</p>
                    </div>

                    <a
                        href="#"
                        className="flex items-center px-4 py-2 text-gray-700 text-sm hover:bg-gray-100"
                    >
                        <UserRound className="mr-3 h-4 w-4 text-gray-500" />
                        Profile
                    </a>

                    <a
                        href="#"
                        className="flex items-center px-4 py-2 text-gray-700 text-sm hover:bg-gray-100"
                    >
                        <Settings className="mr-3 h-4 w-4 text-gray-500" />
                        Settings
                    </a>

                    <div className="my-1 border-gray-800 border-t"></div>

                    <a
                        href="/signin"
                        className="flex items-center px-4 py-2 text-red-600 text-sm hover:bg-gray-100"
                    >
                        <LogOut className="mr-3 h-4 w-4" />
                        Sign out
                    </a>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
