import React from 'react';
import { FileText, FileCode, FileImage, FileArchive, File } from 'lucide-react';

const FileIcon = ({ fileType }) => {
const getIcon = () => {
    switch (fileType) {
        case 'txt':
        case 'md':
        case 'env':
        case 'toml':
            return <FileText className="w-6 h-6 mr-3" />;
        case 'json':
        case 'js':
        case 'jsx':
        case 'ts':
        case 'tsx':
            return <FileCode className="w-6 h-6 mr-3" />;
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'gif':
            return <FileImage className="w-6 h-6 mr-3" />;
        case 'zip':
        case 'rar':
            return <FileArchive className="w-6 h-6 mr-3" />;
        default:
            return <File className="w-6 h-6 mr-3" />;
    }
};

  return (
    <div className="file-icon-container flex items-center justify-center">
      {getIcon()}
    </div>
  );
};

export default FileIcon;