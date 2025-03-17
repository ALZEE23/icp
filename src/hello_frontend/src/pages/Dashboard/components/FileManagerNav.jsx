import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Menu } from 'lucide-react';
import UserProfile from './UserProfile';

const FileManagerNav = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between w-full py-3 px-6 
      bg-[#121212] 
      shadow-md shadow-blue-500/10 animate-fade-in">
      
      {/* Left: Menu & Title */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-blue-500/20 transition-all lg:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5 text-white" />
        </button>
        <h1 className="text-2xl font-semibold text-white">File Manager</h1>
      </div>
      
      {/* Right: Breadcrumb & Profile */}
      <div className="flex items-center space-x-3">
        <div className="hidden sm:flex items-center text-sm text-gray-400">
          <Link to="/" className="hover:text-blue-400 transition-all">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1 text-gray-500" />
          <span className="text-white">File Manager</span>
        </div>
        <UserProfile />
      </div>
    </div>
  );
};

export default FileManagerNav;
