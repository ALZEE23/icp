import React, { useState } from 'react';
import { 
  UserRound, 
  Bell, 
  Settings,
  LogOut,
  ChevronDown
} from 'lucide-react';

const UserProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-700 transition-colors"
        aria-expanded={isDropdownOpen}
      >
        <div className="relative flex-shrink-0">
          <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center">
            <UserRound className="h-5 w-5 text-blue-600" />
          </div>
          <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white"></span>
        </div>
        
        <div className="flex flex-col items-start text-left hidden sm:block">
          <span className="text-sm font-medium">John Doe</span>
          <span className="text-xs text-gray-500">john@example.com</span>
        </div>
        
        <ChevronDown className="h-4 w-4 text-gray-500 hidden sm:block" />
      </button>
      
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#0d0d0d] rounded-lg shadow-lg py-2 z-10">
          <div className="px-4 py-2  sm:hidden">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
          
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <UserRound className="h-4 w-4 mr-3 text-gray-500" />
            Profile
          </a>
  
          
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Settings className="h-4 w-4 mr-3 text-gray-500" />
            Settings
          </a>
          
          <div className="border-t  border-gray-800 my-1"></div>
          
          <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
            <LogOut className="h-4 w-4 mr-3" />
            Sign out
          </a>
        </div>
      )}
    </div>
  );
};

export default UserProfile;