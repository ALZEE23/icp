import {
    File,
    FileArchive,
    FileAudio,
    FileCode,
    FileImage,
    FileText,
    FileVideo,
    Folder,
} from "lucide-react";
import React from "react";

// Mapping ekstensi file ke icon (semua satu baris)
const iconTypes = {
    // Text & Dokumen
    txt: FileText,
    md: FileText,
    env: FileText,
    toml: FileText,
    csv: FileText,
    doc: FileText,
    docx: FileText,
    pdf: FileText,
    // Kode
    json: FileCode,
    js: FileCode,
    jsx: FileCode,
    ts: FileCode,
    tsx: FileCode,
    html: FileCode,
    css: FileCode,
    scss: FileCode,
    php: FileCode,
    py: FileCode,
    java: FileCode,
    c: FileCode,
    cpp: FileCode,
    rb: FileCode,
    go: FileCode,
    swift: FileCode,
    kt: FileCode,
    // Gambar
    png: FileImage,
    jpg: FileImage,
    jpeg: FileImage,
    gif: FileImage,
    bmp: FileImage,
    svg: FileImage,
    ico: FileImage,
    webp: FileImage,
    // Arsip
    zip: FileArchive,
    rar: FileArchive,
    tar: FileArchive,
    gz: FileArchive,
    "7z": FileArchive,
    // Video
    mp4: FileVideo,
    mkv: FileVideo,
    avi: FileVideo,
    mov: FileVideo,
    wmv: FileVideo,
    flv: FileVideo,
    webm: FileVideo,
    // Audio
    mp3: FileAudio,
    wav: FileAudio,
    ogg: FileAudio,
    flac: FileAudio,
    m4a: FileAudio,
    // Default
    default: Folder,
};

const FileIcon = ({ fileType }) => {
    const Icon = iconTypes[fileType.toLowerCase()] || iconTypes.default;
    return <Icon className="mr-3 h-6 w-6" />;
};

export default FileIcon;
