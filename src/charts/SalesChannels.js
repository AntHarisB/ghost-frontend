import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import axios from 'axios'

export default function SalesChannel({selectedYear}){

  const [salesChannelData, setSalesChannelData]=useState([])

  const [salesChannels, setSalesChannels]=useState({
    total_projects: 0,
    num_of_recommendation_projects: 0,
    num_of_partnership_projects: 0,
    num_of_sales_projects: 0
  });
  
  const RADIAN = Math.PI / 180
  const COLORS = ['#3973F8', '#3491FA','#9D5FF3','#FF9F5A', '#7BB99F']
  
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/projectcreation-count/${selectedYear}/`)
    .then(response => setSalesChannels(response.data))
    .catch(error => console.error(error));
  },[selectedYear])

  const data = [
    { name: 'Recommedation projects', value: salesChannels[0]?.num_of_recommendation_projects },
    { name: 'Patnership projects', value: salesChannels[0]?.num_of_partnership_projects },
    { name: 'Sales projects', value: salesChannels[0]?.num_of_sales_projects },
  ].filter(entry => entry.value > 0)
  
   return(
    <ResponsiveContainer>
      <div className='border w-510 h-342 mt-10 flex justify-center  rounded-md'>
      <div  className='flex-col space-y-7'>
        <div className=' w-470 h-68 border-b flex items-center'>
          <span className='text-lg font-face-gsb font-semibold text-color10'>Sales channels</span>
        </div>
        <div className=' flex items-center '> 
       
            <PieChart width={210} height={210}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={105}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            
                <div className="flex-1 ml-12 mt-4">
                {data.map((entry, index) => (
                  <div key={`legend-${index}`} className="flex items-center mb-4 font-semibold font-face-gsb text-base text-color10">
                    <div className="w-15 h-15 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    <div>{entry.name}</div>
                  </div>
                ))}
              </div>
            
        </div> 
      </div>
    </div>
    </ResponsiveContainer>
   )
}