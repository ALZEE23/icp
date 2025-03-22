import React, { useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const StorageChart = ({ data }) => {
  const chartRef = useRef(null);
  
  // Animation for chart segments
  useEffect(() => {
    if (chartRef.current) {
      const segments = chartRef.current.querySelectorAll('.recharts-pie-sector');
      segments.forEach((segment, index) => {
        setTimeout(() => {
          segment.classList.add('storage-chart-segment');
        }, index * 100);
      });
    }
  }, []);

  // Calculate total storage size
  const totalGB = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="bg-[#0d0d0d] backdrop-blur-md rounded-xl p-6 
      border border-blue-500/30 shadow-lg shadow-blue-500/10 animate-fade-in">
      
      {/* Header */}
      <h2 className="text-xl font-semibold text-white mb-2">Storage Details</h2>
      <p className="text-gray-400 mb-6">{data[0].freeSpace} GB Free space left</p>
      
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
                  className="transition-all duration-300 hover:opacity-90 shadow-lg shadow-blue-500/20"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Storage Info */}
      <div className="flex flex-col space-y-3 mt-4">
        <div className="text-center mb-2">
          <div className="text-xl font-semibold text-white">Total {totalGB} GB</div>
          <div className="text-gray-400">{totalGB} GB</div>
        </div>
        
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-full mr-2" 
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
