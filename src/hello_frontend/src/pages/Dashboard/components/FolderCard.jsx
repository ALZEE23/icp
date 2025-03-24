import { Folder, MoreVertical } from "lucide-react";
import React from "react";

const FolderCard = ({ title, files, size }) => {
    return (
        <div className="folder-card flex animate-slide-up items-center justify-between rounded-lg border border-blue-500/50 bg-[#0d0d0d] p-5 shadow-blue-500/20 shadow-lg transition hover:shadow-blue-500/40">
            {/* Kiri: Icon + Info */}
            <div className="flex flex-1 items-center space-x-4">
                {/* Icon dengan efek gradient */}
                <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-3 shadow-md">
                    <Folder className="h-6 w-6 text-white" />
                </div>

                {/* Info */}
                <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="text-gray-400 text-sm">{files}</p>
                </div>
            </div>

            {/* Kanan: Size + More Options */}
            <div className="flex items-center">
                <span className="mr-4 font-medium text-gray-300 text-sm">{size} GB</span>
                <button className="rounded-full p-1 transition-colors hover:bg-gray-700">
                    <MoreVertical className="h-4 w-4 text-gray-400" />
                </button>
            </div>
        </div>
    );
};

export default FolderCard;
