import { Download, FileText, Image, MoreVertical, Music, Package, Video } from "lucide-react";
import React from "react";

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
        <div className="file-card animate-scale-in rounded-lg border border-gray-800 bg-[#0D0D0D] p-4 shadow-blue-500/30 shadow-lg transition hover:shadow-blue-400/50">
            {/* Top Section */}
            <div className="flex items-center justify-between">
                {/* Icon with Background */}
                <div className={`rounded-lg p-3 ${getColor()} flex items-center justify-center`}>
                    {getIcon()}
                </div>
                {/* More Options Button */}
                <button className="rounded-full p-1 transition hover:bg-gray-800">
                    <MoreVertical className="h-5 w-5 text-gray-400" />
                </button>
            </div>

            {/* Title & Storage Info */}
            <div className="mt-3">
                <h3 className="font-medium text-white">{title}</h3>
                <p className="text-gray-400 text-sm">{used} Used</p>
            </div>

            {/* Bottom Section */}
            <div className="mt-3 flex items-end justify-between">
                <span className="text-gray-500 text-xs">{files}</span>
                <span className="font-semibold text-blue-400 text-sm">{size}</span>
            </div>
        </div>
    );
};

export default FileCard;
