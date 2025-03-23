import React, { useEffect, useRef } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const StorageChart = ({ data }) => {
    const chartRef = useRef(null);

    // Animation for chart segments
    useEffect(() => {
        if (chartRef.current) {
            const segments = chartRef.current.querySelectorAll(".recharts-pie-sector");
            segments.forEach((segment, index) => {
                setTimeout(() => {
                    segment.classList.add("storage-chart-segment");
                }, index * 100);
            });
        }
    }, []);

    // Calculate total storage size
    const totalGB = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="animate-fade-in rounded-xl border border-blue-500/30 bg-[#0d0d0d] p-6 shadow-blue-500/10 shadow-lg backdrop-blur-md">
            {/* Header */}
            <h2 className="mb-2 font-semibold text-white text-xl">Storage Details</h2>
            <p className="mb-6 text-gray-400">{data[0].freeSpace} GB Free space left</p>

            {/* Pie Chart */}
            <div className="h-52" ref={chartRef}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={4}
                            dataKey="value"
                            strokeWidth={0}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                    className="shadow-blue-500/20 shadow-lg transition-all duration-300 hover:opacity-90"
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Storage Info */}
            <div className="mt-4 flex flex-col space-y-3">
                <div className="mb-2 text-center">
                    <div className="font-semibold text-white text-xl">Total {totalGB} GB</div>
                    <div className="text-gray-400">{totalGB} GB</div>
                </div>

                {data.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <div
                            className="mr-2 h-3 w-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                        />
                        <span className="text-gray-300">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StorageChart;
