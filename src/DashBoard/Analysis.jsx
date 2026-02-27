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
        <div>
            <BarChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={analyticsData}
    id="recharts-ranged-stacked-bar-chart"
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
        fill="#8884d8"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: '#5550bd' }}
      />
      <Bar
        dataKey="clicks"
        maxBarSize={50}
        fill="#8884d8"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: '#5550bd' }}
      />
      <Bar
        dataKey="conversions"
        maxBarSize={50}
        fill="#8884d8"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: '#5550bd' }}
      />
    </BarStack>
  </BarChart>
        </div>
    );
};

export default Analysis;