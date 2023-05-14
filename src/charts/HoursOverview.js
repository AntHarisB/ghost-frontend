import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'January:1/1/2023',
		Grand_Total_Hours_Billed: 2900,
		Grand_Total_Hours_Available: 750
	},
	{
		name: 'March:1/3/2023',
		Grand_Total_Hours_Billed: 3000,
		Grand_Total_Hours_Available: 1398
	},
	{
		name: 'May:1/5/2023',
		Grand_Total_Hours_Billed: 2000,
		Grand_Total_Hours_Available: 6000
	},
	{
		name: 'July:1/7/2023',
		Grand_Total_Hours_Billed: 2780,
		Grand_Total_Hours_Available: 3908
	},
	{
		name: 'September:1/9/2023',
		Grand_Total_Hours_Billed: 1890,
		Grand_Total_Hours_Available: 4800
	},
	{
		name: 'November:1/11/2023',
		Grand_Total_Hours_Billed: 2390,
		Grand_Total_Hours_Available: 3800
	}
]

export default function HoursOverview() {
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
						<YAxis ticks={[0, 1500, 3000, 4500, 6000]}/>
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