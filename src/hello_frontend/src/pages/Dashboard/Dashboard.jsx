import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import FileCard from "~/components/composites/FileCard";
import StorageDistributionChart from "~/components/composites/StorageDistributionChart";
import { hello_backend } from "../../../../declarations/hello_backend";

const getFileType = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();

    const imageExtensions = ["png", "jpg", "jpeg", "gif", "bmp", "svg"];
    const videoExtensions = ["mp4", "mkv", "avi", "mov", "wmv"];
    const audioExtensions = ["mp3", "wav", "ogg", "flac"];
    const documentExtensions = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt"];
    const appExtensions = ["exe", "dmg", "apk", "app"];

    if (imageExtensions.includes(extension)) return "image";
    if (videoExtensions.includes(extension)) return "videos";
    if (audioExtensions.includes(extension)) return "audios";
    if (documentExtensions.includes(extension)) return "documents";
    if (appExtensions.includes(extension)) return "apps";

    return "downloads";
};

const fetchUserFiles = async () => {
    try {
        const files = await hello_backend.getFiles(); // Ambil file dari backend

        return files.map((file, index) => {
            const fileType = getFileType(file.name);
            return {
                id: file.id || index, // Pastikan ID unik, gunakan index sebagai fallback
                name: file.name,
                type: fileType,
                size: `${(Number(file.size) / 1024).toFixed(2)} KB`,
            };
        });
    } catch (error) {
        console.error("Error fetching files:", error);
        return [];
    }
};

const categorizeFiles = (files) => {
    const categorizedFiles = {};

    files.forEach((file) => {
        if (!categorizedFiles[file.type]) {
            categorizedFiles[file.type] = {
                files: [],
                count: 0,
                totalSize: 0,
            };
        }

        categorizedFiles[file.type].files.push(file);
        categorizedFiles[file.type].count += 1;
        categorizedFiles[file.type].totalSize += Number.parseFloat(file.size);
    });

    return categorizedFiles;
};

const Dashboard = () => {
    const storageData = [
        { name: "Downloads", value: 40, color: "#9B6DFF", freeSpace: 585 },
        { name: "Apps", value: 45, color: "#FF9500" },
        { name: "Documents", value: 25, color: "#FFCC00" },
        { name: "Media", value: 50, color: "#4CD964" },
    ];

    const [files, setFiles] = useState([]);
    const [categorizedFiles, setCategorizedFiles] = useState({});

    useEffect(() => {
        fetchUserFiles().then((fetchedFiles) => {
            setFiles(fetchedFiles);
            setCategorizedFiles(categorizeFiles(fetchedFiles));
        });
    }, []);

    return (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
                <div className="flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
                    <h2 className="font-semibold text-2xl">All Media</h2>

                    <button className="btn border-0 bg-blue-600 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]">
                        <Plus className="size-4" />
                        Upload File
                    </button>
                </div>

                {/* File Categories */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <FileCard
                        type="image"
                        title="Image"
                        files={`${categorizedFiles.image?.count || 0} files`}
                        size={`${(categorizedFiles.image?.totalSize || 0).toFixed(2)} KB`}
                    />
                    <FileCard
                        type="videos"
                        title="Videos"
                        files={`${categorizedFiles.videos?.count || 0} files`}
                        size={`${(categorizedFiles.videos?.totalSize || 0).toFixed(2)} KB`}
                    />
                    <FileCard
                        type="audios"
                        title="Audios"
                        files={`${categorizedFiles.audios?.count || 0} files`}
                        size={`${(categorizedFiles.audios?.totalSize || 0).toFixed(2)} KB`}
                    />
                    <FileCard
                        type="apps"
                        title="Apps"
                        files={`${categorizedFiles.apps?.count || 0} files`}
                        size={`${(categorizedFiles.apps?.totalSize || 0).toFixed(2)} KB`}
                    />
                    <FileCard
                        type="documents"
                        title="Documents"
                        files={`${categorizedFiles.documents?.count || 0} files`}
                        size={`${(categorizedFiles.documents?.totalSize || 0).toFixed(2)} KB`}
                    />
                    <FileCard
                        type="downloads"
                        title="Downloads"
                        files={`${categorizedFiles.downloads?.count || 0} files`}
                        size={`${(categorizedFiles.downloads?.totalSize || 0).toFixed(2)} KB`}
                    />
                </div>
            </div>

            <div className="lg:col-span-1">
                <StorageDistributionChart data={storageData} />
            </div>
        </div>
    );
};

export default Dashboard;
