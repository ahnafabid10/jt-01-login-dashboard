import React, { useEffect, useState } from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import UseAxios from '../Hooks/UseAxios';

const ProjectProcess = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const axiosSecure = UseAxios();

  useEffect(() => {
    axiosSecure.get('api/overview')
      .then(res => {
        console.log(res.data);
        const { totalUsers, activeUsers} = res.data;
        setAnalyticsData([
          { name: "Total Users", value: totalUsers, fill: "#14532d" },
          { name: "Active Users", value: activeUsers, fill: "#22c55e" },
        ]);
      })
  }, []);

  return (
    <div className='bg-white p-6 rounded-2xl'>
      <h2 className="text-lg font-bold text-left text-black mb-10">Members</h2>
      <div className='  items-center flex flex-col gap-5'>
            <PieChart width={210} height={150}>
        <Pie
          stroke="none"
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={analyticsData}
          cx={100}
          cy={100}
          innerRadius={50}
          outerRadius={100}
        />
        <Tooltip/>
        {analyticsData.length > 0 && (
            <text
              x={105}
              y={100}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-2xl font-bold fill-[#22c55e]"
            >
              {(() => {
                const total = analyticsData.reduce((acc, item) => acc + item.value, 0);
                const active = analyticsData.find(item => item.name === 'Active Users')?.value || 0;
                const percent = ((active / total) * 100).toFixed(1);
                return `${percent}%`;
              })()}
              
            </text>
          )}
      </PieChart>
      <div className="flex gap-5">
        <p className='text-[#14532d] font-bold'>● Total Users</p>
        <p className='text-[#22c55e] font-bold'>● Active Users</p>
      </div>
      </div>

    </div>
  );
};

export default ProjectProcess;