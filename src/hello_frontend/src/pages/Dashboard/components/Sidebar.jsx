import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  FolderIcon,
  ImageIcon,
  FileIcon,
  DownloadIcon,
  StarIcon,
  PlusIcon,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  LinkIcon,
} from 'lucide-react';

// Komponen SidebarItem
const SidebarItem = ({
  icon: Icon,
  path,
  label,
  children,
  expandable = false,
  expanded = false,
  onToggle
}) => {
  const location = useLocation();
  const isActive = location.pathname === `/${path}`; // Cek apakah aktif

  // Jika expandable, gunakan button, bukan link
  const Wrapper = expandable ? 'button' : Link;
  const wrapperProps = expandable
    ? { onClick: onToggle }
    : { to: `/${path}` };

  return (
    <div className="mb-1">
      <Wrapper
        {...wrapperProps}
        className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-all 
          ${isActive ? 'bg-blue-500/20 text-blue-400 shadow-md shadow-blue-500/30'
            : 'hover:bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-400'}
        `}
      >
        <Icon className="h-5 w-5 mr-3 text-white" />
        <span className="flex-1 text-sm font-medium">{label}</span>
        {expandable && (expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
      </Wrapper>

      {expandable && expanded && children && (
        <div className="ml-8 mt-1">{children}</div>
      )}
    </div>
  );
};

// Komponen Sidebar
const Sidebar = () => {
  const [expanded, setExpanded] = useState({
    favorites: false,
    categories: true,
  });

  // Fungsi toggle expand
  const toggleExpand = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };


  return (
    <div className="w-64 h-screen bg-[#121212] shadow-lg shadow-blue-500/10 flex flex-col">
      {/* Logo */}
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2 text-white text-lg font-semibold mb-6">
          <ShieldCheck size={30} className="text-blue-500" />
          SecureVault
        </Link>

        {/* Upload Button */}
        <Link
          to="/file-upload"
          className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg mb-6 hover:opacity-90 transition-all shadow-md"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">New Upload</span>
        </Link>
      </div>

      {/* Sidebar Menu */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <SidebarItem
          icon={HomeIcon}
          label="Dashboard"
          path="dashboard"
        />

        <SidebarItem
          icon={LinkIcon}
          label="Manage Your Links"
          path="managed-links"
        />

        <SidebarItem
          icon={FolderIcon}
          label="My Files"
          path="my-files"
        />

        <SidebarItem
          icon={StarIcon}
          label="Favorites"
          expandable={true}
          expanded={expanded.favorites}
          onToggle={() => toggleExpand('favorites')} // Ini toggle hanya state
        >
          <SidebarItem
            icon={ImageIcon}
            label="Photos"
            path="photos"
          />
          <SidebarItem
            icon={FileIcon}
            label="Documents"
            path="documents"
          />
        </SidebarItem>

        <div className="mt-6 mb-2">
          <h3 className="text-xs uppercase text-gray-500 font-medium px-3 mb-2">Categories</h3>

          <SidebarItem
            icon={ImageIcon}
            label="Images"
            path="images"
          />

          <SidebarItem
            icon={FileIcon}
            label="Documents"
            path="documents"
          />

          <SidebarItem
            icon={DownloadIcon}
            label="Downloads"
            path="downloads"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
