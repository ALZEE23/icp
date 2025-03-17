import React from 'react';
import { Folder, MoreVertical } from 'lucide-react';

const FolderCard = ({ title, files, size }) => {
  return (
    <div className="folder-card animate-slide-up bg-[#1a1a2e] border border-blue-500/50 shadow-lg shadow-blue-500/20 rounded-lg p-5 flex justify-between items-center transition hover:shadow-blue-500/40">
      {/* Kiri: Icon + Info */}
      <div className="flex items-center flex-1 space-x-4">
        {/* Icon dengan efek gradient */}
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 shadow-md">
          <Folder className="h-6 w-6 text-white" />
        </div>

        {/* Info */}
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{files}</p>
        </div>
      </div>

      {/* Kanan: Size + More Options */}
      <div className="flex items-center">
        <span className="text-sm font-medium text-gray-300 mr-4">{size} GB</span>
        <button className="p-1 rounded-full hover:bg-gray-700 transition-colors">
          <MoreVertical className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default FolderCard;
