import React, { useEffect, useState } from 'react';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from 'recharts';



export default function ProjectScope({projectHours}) {
  const [totalHours,setTotalHours]=useState({
    hours_a:0,
    hours_b:0
  })

  const totalHoursSum = () => {
    let availableHoursSum = 0;
    let billedHoursSum = 0;
    projectHours.forEach(item => {
      availableHoursSum += item.hours_available;
      billedHoursSum += item.hours_billed;
    });
    setTotalHours(prev => ({
      hours_a: availableHoursSum,
      hours_b: billedHoursSum
    }));
  };
  useEffect(()=>{
    totalHoursSum()
  },[projectHours])
  
  
  const data = [
    {
      Grand_Total_Hours_Billed: totalHours.hours_b,
      Grand_Total_Hours_Available: totalHours.hours_a
    }
  ];
  
  const ticks = [0, 1.25, 2.5, 3.75, 5];
  
  const labelStyle = {
    fontWeight: 600,
    fontSize: 14,
    fill:"#232F2D",
    fontFamily: 'GilroySB',
  };
  
  const chartTextStyle = {
    fontFamily: 'GilroyR',
    fontSize: 14, 
    fill: '#232F2D',
    fontWeight: 400,
   };
  
   const gridLineStyle = {
    stroke: '#E5E5EF', 
    strokeDasharray: '3 3 3 0',
   };
  return (
    <div className='border w-510 h-342 mt-10 flex justify-center rounded-md'>
      <div className='flex-col space-y-7'>
        <div className='w-470 h-68 border-b flex items-center'>
          <span className='text-lg font-face-gsb font-semibold text-color10'>
            Project scope
          </span>
        </div>
        <div className='w-422 h-200 flex items-center justify-center ml-5'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart 
              layout='vertical' 
              data={data}  
              barGap={40}
              barCategoryGap={20} >
                <CartesianGrid
                  strokeDasharray='3 3 3 0'
                  horizontal={false}
                  vertical={true}
                  stroke={gridLineStyle.stroke}
                />
                <XAxis
                  type='number'
                  ticks={[0, (totalHours.hours_a*0.25), (totalHours.hours_a*0.50), (totalHours.hours_a*0.75), totalHours.hours_a]}
                  domain={[0, 5]}
                  axisLine={false}
                  tickLine={false} 
                  tick={chartTextStyle}      
                />
                <YAxis type='category' hide={true} />
                <Tooltip />
                <Bar
                dataKey='Grand_Total_Hours_Available'
                fill='#7BB99F'
                radius={[5, 5, 5, 5]}
                barSize={32}
                label={
                  <text dy={-10} style={ labelStyle }>
                    Fixed
                  </text>
                }
              />
              <Bar
                dataKey='Grand_Total_Hours_Billed'
                fill='#DFE3E1'
                radius={[5, 5, 5, 5]}
                barSize={32}
                label={
                  <text dy={-10} style={labelStyle }>
                    On-going
                  </text>
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}



