import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  {
    
    Grand_Total_Hours_Billed: 5,
    Grand_Total_Hours_Available: 3.75
  }
];

export default function HoursOverview() {
  return (
   <div className='border w-510 h-342 mt-10 flex justify-center  rounded-md'>
   <div  className='flex-col space-y-7'>
     <div className=' w-470 h-68 border-b flex items-center'>
       <span className='text-lg font-face-gsb font-semibold'>Project Scope</span>
     </div>
     <div className=' w-422 h-200 flex items-center '> 
     <ResponsiveContainer width="100%" height="100%">
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
              <XAxis type='number' ticks={[0, 1.25, 2.5, 3.75, 5]}/>
              <YAxis  type='category'  />
              <Tooltip />
              
              <Bar dataKey='Grand_Total_Hours_Available' fill='#7BB99F' />
              <Bar dataKey='Grand_Total_Hours_Billed' fill='#DFE3E1' />
            </BarChart>
				</ResponsiveContainer>
     </div> 
   </div>
 </div>

  
  )
}