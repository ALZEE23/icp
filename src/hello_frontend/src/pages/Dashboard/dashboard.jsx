import { ArrowRight, Plus, Search } from "lucide-react";
import React, { useState, useEffect } from "react";
import FileCard from "./components/FileCard";
import FolderCard from "./components/FolderCard";
import StorageChart from "./components/StorageChart";
import Layout from "./components/layout";
import { hello_backend } from "../../../../declarations/hello_backend";

const getFileType = (fileName) => {
  const extension = fileName.split(".").pop().toLowerCase();

  const imageExtensions = ["png", "jpg", "jpeg", "gif", "bmp", "svg"];
  const videoExtensions = ["mp4", "mkv", "avi", "mov", "wmv"];
  const audioExtensions = ["mp3", "wav", "ogg", "flac"];
  const documentExtensions = [
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "txt",
  ];
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
    categorizedFiles[file.type].totalSize += parseFloat(file.size);
  });

  return categorizedFiles;
};

function dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
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
    <Layout>
      <div className="container mx-auto w-full overflow-y-auto px-6 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Header */}
            <div className="flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
              <h2 className="font-semibold text-2xl text-white">All Media</h2>

              <div className="flex w-full space-x-3 sm:w-auto">
                {/* Search Input */}
                <div className="relative flex-1 sm:flex-initial">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-gray-900/40 py-2 pr-4 pl-10 text-white shadow-md backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Upload Button */}
                <button className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow-blue-500/20 shadow-md transition hover:bg-blue-700 hover:shadow-blue-500/50">
                  <Plus className="h-4 w-4" />
                  <span>Upload File</span>
                </button>
              </div>
            </div>

            {/* File Categories */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <FileCard
                type="image"
                title="Image"
                files={`${categorizedFiles.image?.count || 0} files`}
                size={`${(categorizedFiles.image?.totalSize || 0).toFixed(
                  2
                )} KB`}
              />
              <FileCard
                type="videos"
                title="Videos"
                files={`${categorizedFiles.videos?.count || 0} files`}
                size={`${(categorizedFiles.videos?.totalSize || 0).toFixed(
                  2
                )} KB`}
              />
              <FileCard
                type="audios"
                title="Audios"
                files={`${categorizedFiles.audios?.count || 0} files`}
                size={`${(categorizedFiles.audios?.totalSize || 0).toFixed(
                  2
                )} KB`}
              />
              <FileCard
                type="apps"
                title="Apps"
                files={`${categorizedFiles.apps?.count || 0} files`}
                size={`${(categorizedFiles.apps?.totalSize || 0).toFixed(
                  2
                )} KB`}
              />
              <FileCard
                type="documents"
                title="Documents"
                files={`${categorizedFiles.documents?.count || 0} files`}
                size={`${(categorizedFiles.documents?.totalSize || 0).toFixed(
                  2
                )} KB`}
              />
              <FileCard
                type="downloads"
                title="Downloads"
                files={`${categorizedFiles.downloads?.count || 0} files`}
                size={`${(categorizedFiles.downloads?.totalSize || 0).toFixed(
                  2
                )} KB`}
              />
            </div>

            {/* Folders */}
            {/* <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-2xl text-white">
                  All Folders
                </h2>
                <button className="flex items-center text-blue-500 transition hover:underline">
                  <span className="mr-1">View All</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FolderCard title="Images" files="345 Files" size="26.40 GB" />
                <FolderCard
                  title="Documents"
                  files="130 Files"
                  size="26.40 GB"
                />
                <FolderCard title="Apps" files="130 Files" size="26.40 GB" />
                <FolderCard
                  title="Downloads"
                  files="345 Files"
                  size="26.40 GB"
                />
              </div>
            </div> */}
          </div>

          {/* Storage Chart */}
          <div className="lg:col-span-1">
            <StorageChart data={storageData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default dashboard;
