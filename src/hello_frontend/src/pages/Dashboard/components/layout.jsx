import React, { useState } from 'react';
import FileManagerNav from './FileManagerNav';
import FileCard from './FileCard';
import FolderCard from './FolderCard';
import StorageChart from './StorageChart';
import Sidebar from './Sidebar';
import { Search, Plus, ArrowRight } from 'lucide-react';
import { WavyBackground } from '../../../components/ui/wavy-background';

const Index = ({ children }) => {
   
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <WavyBackground className="w-screen h-screen flex items-center justify-center ">
            {/* Floating Dashboard */}
            <div className="relative w-full max-w-9xl h-screen bg-black/70 backdrop-blur-lg shadow-xl  md:p-6 z-10 overflow-hidden  ">
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

                        {children}

                    </div>
                </div>
            </div>
        </WavyBackground>
    );
};

export default Index;
