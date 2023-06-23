import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import axios from 'axios'
import { getAccessToken,clearTokens } from '../Api';
import api from '../Api';


export default function SalesChannel(selectedYear){
  const [salesChannels, setSalesChannels]=useState({
    total_projects: 0,
    num_of_recommendation_projects: 0,
    num_of_partnership_projects: 0,
    num_of_sales_projects: 0
  });

  useEffect(()=>{
    const accessToken=getAccessToken();
    api.get(`http://127.0.0.1:8000/api/projectcreation-count/${selectedYear.selectedYear}/`, {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
  .then(response => {
    setSalesChannels(response.data);
  })
  .catch(error => {
    // Handle the error appropriately
    console.error(error);
    if (error.response && error.response.status === 401) {
      // Token has expired, clear tokens and handle the error
      clearTokens();
      console.log("Access token has expired. Tokens cleared.");
    }
  });

  },[selectedYear,getAccessToken])

  const data = [
    { name: 'Recommedation projects', value: salesChannels[0]?.num_of_recommendation_projects },
    { name: 'Patnership projects', value: salesChannels[0]?.num_of_partnership_projects },
    { name: 'Sales projects', value: salesChannels[0]?.num_of_sales_projects },
  ].filter(entry => entry.value > 0)
  
  
  const RADIAN = Math.PI / 180
  const COLORS = ['#3973F8', '#3491FA','#9D5FF3','#FF9F5A', '#7BB99F']
  
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + (radius + 10) * Math.cos(-midAngle * RADIAN);
    const y = cy + (radius + 10) * Math.sin(-midAngle * RADIAN);
    const textColor = index === 4 || index === 3? 'black' : 'white';
  
    return (
      <text x={x} y={y} fill={textColor} textAnchor="middle" dominantBaseline="middle" className="text-sm font-medium font-helvetica text-color16">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return(
    <ResponsiveContainer width="50%" height="50%">
      <div className='border w-510 h-342 mt-10 flex justify-center  rounded-md'>
        <div  className='flex-col space-y-7'>
          <div className=' w-470 h-68 border-b flex items-center'>
            <span className='text-lg font-face-gsb font-semibold text-color10'>
              Sales channels
            </span>
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
                  stroke="transparent"
                  >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart> 
              <div className="flex-1 ml-12 mt-4">
                {data.map((entry, index) => (
                  <div key={`legend-${index}`} className="flex items-center mb-4 font-semibold font-face-gsb text-base text-color10">
                    <div className="w-15 h-15 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}>
                    </div>
                    <div>{entry.name}
                    </div>
                  </div>
                ))}
              </div>            
          </div> 
        </div>
      </div>
    </ResponsiveContainer>
  )
}