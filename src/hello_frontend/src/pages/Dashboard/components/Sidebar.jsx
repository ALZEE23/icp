import {
  ChevronDown,
  ChevronRight,
  DownloadIcon,
  FileIcon,
  FolderIcon,
  HomeIcon,
  ImageIcon,
  LinkIcon,
  PlusIcon,
  ShieldCheck,
  StarIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Komponen SidebarItem
const SidebarItem = ({
  icon: Icon,
  path,
  label,
  children,
  expandable = false,
  expanded = false,
  onToggle,
}) => {
  const location = useLocation();
  const isActive = location.pathname === `/${path}`; // Cek apakah aktif

  // Jika expandable, gunakan button, bukan link
  const Wrapper = expandable ? "button" : Link;
  const wrapperProps = expandable ? { onClick: onToggle } : { to: `/${path}` };

  return (
    <div className="mb-1">
      <Wrapper
        {...wrapperProps}
        className={`flex w-full items-center rounded-lg px-3 py-2 text-left transition-all ${
          isActive
            ? "bg-blue-500/20 text-blue-400 shadow-blue-500/30 shadow-md"
            : "from-blue-500/20 to-purple-500/20 text-gray-400 hover:bg-gradient-to-r"
        }
        `}
      >
        <Icon className="mr-3 h-5 w-5 text-white" />
        <span className="flex-1 font-medium text-sm">{label}</span>
        {expandable &&
          (expanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          ))}
      </Wrapper>

      {expandable && expanded && children && (
        <div className="mt-1 ml-8">{children}</div>
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
    <div className="flex h-screen w-64 flex-col bg-[#121212] shadow-blue-500/10 shadow-lg">
      {/* Logo */}
      <div className="p-4">
        <Link
          to="/"
          className="mb-6 flex items-center gap-2 font-semibold text-lg text-white"
        >
          <ShieldCheck size={30} className="text-blue-500" />
          SecureVault
        </Link>

        {/* Upload Button */}
        <Link
          to="/file-upload"
          className="mb-3 flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-white shadow-md transition-all hover:opacity-90"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          <span className="font-medium text-sm">New Upload</span>
        </Link>
      </div>

      {/* Sidebar Menu */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <SidebarItem icon={HomeIcon} label="Dashboard" path="dashboard" />

        <SidebarItem icon={FolderIcon} label="My Files" path="file-manager" />

        <SidebarItem
          icon={LinkIcon}
          label="Manage Your Links"
          path="managed-links"
        />

        {/* <SidebarItem
                    icon={StarIcon}
                    label="Favorites"
                    expandable={true}
                    expanded={expanded.favorites}
                    onToggle={() => toggleExpand("favorites")} // Ini toggle hanya state
                >
                    <SidebarItem icon={ImageIcon} label="Photos" path="photos" />
                    <SidebarItem icon={FileIcon} label="Documents" path="documents" />
                </SidebarItem>

                <div className="mt-6 mb-2">
                    <h3 className="mb-2 px-3 font-medium text-gray-500 text-xs uppercase">
                        Categories
                    </h3>

                    <SidebarItem icon={ImageIcon} label="Images" path="images" />

                    <SidebarItem icon={FileIcon} label="Documents" path="documents" />

                    <SidebarItem icon={DownloadIcon} label="Downloads" path="downloads" />
                </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
