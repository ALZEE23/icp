import { Plus } from "lucide-react";

import FileCard from "~/components/composites/FileCard";
import StorageDistributionChart from "~/components/composites/StorageDistributionChart";

const Dashboard = () => {
    const storageData = [
        { name: "Downloads", value: 40, color: "#9B6DFF", freeSpace: 585 },
        { name: "Apps", value: 45, color: "#FF9500" },
        { name: "Documents", value: 25, color: "#FFCC00" },
        { name: "Media", value: 50, color: "#4CD964" },
    ];

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

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <FileCard type="image" title="Image" files="245" size="26.40" />
                    <FileCard type="videos" title="Videos" files="245" size="26.40" />
                    <FileCard type="audios" title="Audios" files="830" size="18.90" />
                    <FileCard type="apps" title="Apps" files="1200" size="85.30" />
                    <FileCard type="documents" title="Documents" files="78" size="5.40" />
                    <FileCard type="downloads" title="Downloads" files="245" size="26.40" />
                </div>
            </div>

            <div className="lg:col-span-1">
                <StorageDistributionChart data={storageData} />
            </div>
        </div>
    );
};

export default Dashboard;
