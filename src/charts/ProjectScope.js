import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


export default function HoursOverview({projectHours}) {
  
  const data = [
    {
      
      Grand_Total_Hours_Billed: projectHours[0]?.hours_billed,
      Grand_Total_Hours_Available: projectHours[0]?.hours_available
    }
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
    <div className='border w-510 h-342 mt-10 flex justify-center  rounded-md'>
    <div  className='flex-col space-y-7'>
      <div className=' w-470 h-68 border-b flex items-center'>
        <span className='text-lg font-face-gsb font-semibold text-color10'>Project scope</span>
      </div>
     <div className=' w-422 h-200 flex items-center '> 

     <BarChart
              layout='vertical'
              width={500}
              height={250}
              data={data}
              margin={{
                top: 20,
                right: 10,
                left: -10,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray='3 3 3 0' horizontal={false} />
              <XAxis type='number' ticks={[0, (projectHours[0]?.hours_available*0.25), (projectHours[0]?.hours_available*0.50), (projectHours[0]?.hours_available*0.75), projectHours[0]?.hours_available]}/>
              <YAxis  type='category'  />
              <Tooltip />
              
              <Bar dataKey='Grand_Total_Hours_Available' fill='#7BB99F' />
              <Bar dataKey='Grand_Total_Hours_Billed' fill='#DFE3E1' />
            </BarChart>
				
     </div> 
   </div>
 </div>
 </ResponsiveContainer>
  
  )
}