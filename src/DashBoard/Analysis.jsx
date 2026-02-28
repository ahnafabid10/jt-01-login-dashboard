import { BarChart, XAxis, YAxis, Tooltip, Bar, BarStack} from 'recharts';
import React, { useEffect, useState } from 'react';
import UseAxios from '../Hooks/UseAxios';

const Analysis = ({isAnimationActive = true,
  defaultIndex,}) => {
    const [analyticsData, setAnalyticsData] = useState([])
    const axiosSecure = UseAxios()
    useEffect(()=>{
        axiosSecure.get('api/analytics')
        .then(res=> {
            console.log(res.data)
            const chartData = res.data.map(a=>({
                date: a.date,
                views: a.views,
                clicks: a.clicks,
                conversions: a.conversions

            }))
            setAnalyticsData(chartData)
        })

       

    },[])

    return (
        <div className='bg-white p-5 max-w-full rounded-2xl'>
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Project Analytics</h2>
          </div>
    <BarChart
width={650} height={220}
  data={analyticsData}
  margin={{
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  }}
>
    <XAxis dataKey="date" />
    <YAxis width="auto" />
    <Tooltip defaultIndex={defaultIndex} />
    <BarStack radius={25}>
      <Bar
        dataKey="views"
        maxBarSize={50}
        fill="#14532d"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: '#14532d' }}
      />
      <Bar
        dataKey="clicks"
        maxBarSize={50}
        fill="#16a34a"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: '#16a34a' }}
      />
      <Bar
        dataKey="conversions"
        maxBarSize={50}
        fill="#22c55e"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: '#22c55e' }}
      />
    </BarStack>
  </BarChart>
        </div>
    );
};

export default Analysis;