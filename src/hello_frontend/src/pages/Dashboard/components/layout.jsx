import { ArrowRight, Plus, Search } from "lucide-react";
import React, { useState } from "react";
import { WavyBackground } from "../../../components/ui/wavy-background";
import FileCard from "./FileCard";
import FileManagerNav from "./FileManagerNav";
import FolderCard from "./FolderCard";
import Sidebar from "./Sidebar";
import StorageChart from "./StorageChart";

const Index = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <WavyBackground className="flex h-screen w-screen items-center justify-center ">
            {/* Floating Dashboard */}
            <div className="relative z-10 h-screen w-full max-w-9xl overflow-hidden bg-black/70 shadow-xl backdrop-blur-lg md:p-6 ">
                <div className="z-20 mx-auto flex h-full w-full rounded-lg border-blue-500 border-t-8 bg-black/10 backdrop-blur-xl md:overflow-hidden">
                    {/* Sidebar */}
                    <div
                        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} z-30 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
                    >
                        <Sidebar />
                    </div>

                    {/* Backdrop for mobile */}
                    {isSidebarOpen && (
                        <div
                            className="fixed inset-0 z-20 bg-black/20 backdrop-blur-sm lg:hidden"
                            onClick={toggleSidebar}
                        ></div>
                    )}

                    {/* Main Dashboard */}
                    <div className="z-10 flex min-w-0 flex-1 flex-col">
                        <FileManagerNav toggleSidebar={toggleSidebar} />

                        {children}
                    </div>
                </div>
            </div>
        </WavyBackground>
    );
};

export default Index;
