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
          { name: "Total Users", value: totalUsers, fill: "#6366f1" },
          { name: "Active Users", value: activeUsers, fill: "#22c55e" },
        ]);
      })
  }, []);

  return (
    <div className=''>
      <PieChart width={210} height={120}>
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
        <Tooltip />
      </PieChart>
      <div className="flex gap-5">
        <p>Total Users</p>
        <p>Active Users</p>
      </div>
    </div>
  );
};

export default ProjectProcess;