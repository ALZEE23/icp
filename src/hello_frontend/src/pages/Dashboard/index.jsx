import React, { useState } from 'react';
import FileManagerNav from './components/FileManagerNav';
import FileCard from './components/FileCard';
import FolderCard from './components/FolderCard';
import StorageChart from './components/StorageChart';
import Sidebar from './components/Sidebar';
import { Search, Plus, ArrowRight } from 'lucide-react';
import { WavyBackground } from '../../components/ui/wavy-background';

const Index = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const storageData = [
        { name: 'Downloads', value: 40, color: '#9B6DFF', freeSpace: 585 },
        { name: 'Apps', value: 45, color: '#FF9500' },
        { name: 'Documents', value: 25, color: '#FFCC00' },
        { name: 'Media', value: 50, color: '#4CD964' },
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <WavyBackground className="w-screen h-screen flex items-center justify-center ">
            {/* Floating Dashboard */}
            <div className="relative w-full max-w-9xl h-screen bg-black/30 backdrop-blur-lg shadow-xl  md:p-6 z-10 overflow-hidden  ">
                <div className="bg-black/10 backdrop-blur-xl flex rounded-lg md:overflow-hidden mx-auto w-full h-full z-20 border-t-8 border-blue-500">
                    {/* Sidebar */}
                    <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-30`}>
                        <Sidebar />
                    </div>

                    {/* Backdrop for mobile */}
                    {isSidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-20"
                            onClick={toggleSidebar}
                        ></div>
                    )}

                    {/* Main Dashboard */}
                    <div className="flex-1 flex flex-col min-w-0 z-10">
                        <FileManagerNav toggleSidebar={toggleSidebar} />

                        <div className="container mx-auto px-6 py-8 w-full overflow-y-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                                {/* Main Content */}
                                <div className="lg:col-span-2 space-y-8">

                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                                        <h2 className="text-2xl font-semibold text-white">All Media</h2>

                                        <div className="flex w-full sm:w-auto space-x-3">

                                            {/* Search Input */}
                                            <div className="relative flex-1 sm:flex-initial">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Search className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="Search..."
                                                    className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg bg-gray-900/40 backdrop-blur-md text-white 
                                                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-md"
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                />
                                            </div>

                                            {/* Upload Button */}
                                            <button className="bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center space-x-2 
                                                 hover:bg-blue-700 transition shadow-md shadow-blue-500/20 hover:shadow-blue-500/50">
                                                <Plus className="h-4 w-4" />
                                                <span>Upload File</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* File Categories */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        <FileCard type="image" title="Image" used="17% Used" files="245 files" size="26.40" />
                                        <FileCard type="videos" title="Videos" used="22% Used" files="245 files" size="26.40" />
                                        <FileCard type="audios" title="Audios" used="23% Used" files="830 files" size="18.90" />
                                        <FileCard type="apps" title="Apps" used="65% Used" files="1200 files" size="85.30" />
                                        <FileCard type="documents" title="Documents" used="10% Used" files="78 files" size="5.40" />
                                        <FileCard type="downloads" title="Downloads" used="16% Used" files="245 files" size="26.40" />
                                    </div>

                                    {/* Folders */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-2xl font-semibold text-white">All Folders</h2>
                                            <button className="flex items-center text-blue-500 hover:underline transition">
                                                <span className="mr-1">View All</span>
                                                <ArrowRight className="h-4 w-4" />
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    </div>
                </div>


            </div>
        </WavyBackground>
    );
};

export default Index;
