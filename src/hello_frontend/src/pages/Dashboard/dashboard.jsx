import { ArrowRight, Plus, Search } from "lucide-react";
import React, { useState } from "react";
import FileCard from "./components/FileCard";
import FolderCard from "./components/FolderCard";
import StorageChart from "./components/StorageChart";
import Layout from "./components/layout";


function dashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    const storageData = [
        { name: "Downloads", value: 40, color: "#9B6DFF", freeSpace: 585 },
        { name: "Apps", value: 45, color: "#FF9500" },
        { name: "Documents", value: 25, color: "#FFCC00" },
        { name: "Media", value: 50, color: "#4CD964" },
    ];
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
                                used="17% Used"
                                files="245 files"
                                size="26.40"
                            />
                            <FileCard
                                type="videos"
                                title="Videos"
                                used="22% Used"
                                files="245 files"
                                size="26.40"
                            />
                            <FileCard
                                type="audios"
                                title="Audios"
                                used="23% Used"
                                files="830 files"
                                size="18.90"
                            />
                            <FileCard
                                type="apps"
                                title="Apps"
                                used="65% Used"
                                files="1200 files"
                                size="85.30"
                            />
                            <FileCard
                                type="documents"
                                title="Documents"
                                used="10% Used"
                                files="78 files"
                                size="5.40"
                            />
                            <FileCard
                                type="downloads"
                                title="Downloads"
                                used="16% Used"
                                files="245 files"
                                size="26.40"
                            />
                        </div>

                        {/* Folders */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold text-2xl text-white">All Folders</h2>
                                <button className="flex items-center text-blue-500 transition hover:underline">
                                    <span className="mr-1">View All</span>
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <FolderCard title="Images" files="345 Files" size="26.40 GB" />
                                <FolderCard title="Documents" files="130 Files" size="26.40 GB" />
                                <FolderCard title="Apps" files="130 Files" size="26.40 GB" />
                                <FolderCard title="Downloads" files="345 Files" size="26.40 GB" />
                            </div>
                        </div>
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
