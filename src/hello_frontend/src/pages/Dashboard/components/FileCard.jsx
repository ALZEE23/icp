import React from "react";
import { 
  Image, Video, Music, FileText, 
  Package, Download, MoreVertical 
} from "lucide-react";

const FileCard = ({ type, title, used, files, size }) => {
  const getIcon = () => {
    switch (type) {
      case "image":
        return <Image className="h-6 w-6 text-white" />;
      case "videos":
        return <Video className="h-6 w-6 text-white" />;
      case "audios":
        return <Music className="h-6 w-6 text-white" />;
      case "documents":
        return <FileText className="h-6 w-6 text-white" />;
      case "apps":
        return <Package className="h-6 w-6 text-white" />;
      case "downloads":
        return <Download className="h-6 w-6 text-white" />;
      default:
        return <FileText className="h-6 w-6 text-white" />;
    }
  };

  const getColor = () => {
    switch (type) {
      case "image":
        return "bg-green-500";
      case "videos":
        return "bg-red-500";
      case "audios":
        return "bg-blue-500";
      case "documents":
        return "bg-orange-500";
      case "apps":
        return "bg-purple-500";
      case "downloads":
        return "bg-indigo-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="file-card animate-scale-in bg-[#0D0D0D] p-4 rounded-lg shadow-lg shadow-blue-500/30 border border-gray-800 transition hover:shadow-blue-400/50">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        {/* Icon with Background */}
        <div className={`p-3 rounded-lg ${getColor()} flex items-center justify-center`}>
          {getIcon()}
        </div>
        {/* More Options Button */}
        <button className="p-1 rounded-full hover:bg-gray-800 transition">
          <MoreVertical className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      {/* Title & Storage Info */}
      <div className="mt-3">
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-sm text-gray-400">{used} Used</p>
      </div>

      {/* Bottom Section */}
      <div className="mt-3 flex justify-between items-end">
        <span className="text-xs text-gray-500">{files} files</span>
        <span className="text-sm font-semibold text-blue-400">{size} GB</span>
      </div>
    </div>
  );
};

export default FileCard;
