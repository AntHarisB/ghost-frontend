import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


export default function HoursOverview({projectHours}) {
	const data = [
		{
			name: `${projectHours[0]?.month}:${projectHours[0]?.date_start}`,
			Grand_Total_Hours_Billed: projectHours[0]?.hours_billed,
			Grand_Total_Hours_Available: projectHours[0]?.hours_available
		}]
	return (
      <div className='border w-1050 h-392 mt-10 flex justify-center rounded-md'>
      <div  className='flex-col space-y-7'>
        <div className=' w-1010 h-68 border-b flex items-center'>
          <span className='text-lg font-face-gsb font-semibold mr-4 text-color10'>Hours overview</span>
          <span className='text-base font-link font-medium underline text-color8 '>See details</span>
        </div>
          <div className='w-988 h-280 flex id="chart"'>
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
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
						<CartesianGrid strokeDasharray="3 3 3 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis ticks={[0, (projectHours[0]?.hours_available*0.25), (projectHours[0]?.hours_available*0.50), (projectHours[0]?.hours_available*0.75), projectHours[0]?.hours_available]}/>
						<Tooltip />
						<Legend />
						<Bar dataKey="Grand_Total_Hours_Available" fill="#FF9F5A" />
						<Bar dataKey="Grand_Total_Hours_Billed" fill="#7BB99F" />
					</BarChart>
				</ResponsiveContainer>
            </div>
         </div>
      </div>    
	)
}