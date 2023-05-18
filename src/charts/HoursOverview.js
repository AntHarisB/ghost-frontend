import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'January:1/1/2023',
		Grand_Total_Hours_Billed: 2900,
		Grand_Total_Hours_Available: 750,
		
	},
	{
		name: 'March:1/3/2023',
		Grand_Total_Hours_Billed: 5500,
		Grand_Total_Hours_Available: 2000,
		
	},
	{
		name: 'May:1/5/2023',
		Grand_Total_Hours_Billed: 1600,
		Grand_Total_Hours_Available: 2100,
		
	},
	{
		name: 'July:1/7/2023',
		Grand_Total_Hours_Billed: 500,
		Grand_Total_Hours_Available: 300,
		
	},
	{
		name: 'September:1/9/2023',
		Grand_Total_Hours_Billed: 3200,
		Grand_Total_Hours_Available: 4700,
		
	},
	{
		name: 'November:1/11/2023',
		Grand_Total_Hours_Billed: 3750,
		Grand_Total_Hours_Available: 5250,
	}
];

const ticks = [0, 1500, 3000, 4500, 6000];

const chartTextStyle = {
	fontFamily: 'GilroyM',
	fontSize: 12,
	fill: '#232F2D',
	fontWeight: 500,
 };

 const secchartTextStyle = {
	fontFamily: 'GilroyM',
	fontSize: 14, 
	fill: '#232F2D',
	fontWeight: 500, 
 };

 const axisLineStyle = {
	stroke: '#E5E5EF',
	strokeWidth: 2,
 };

 const gridLineStyle = {
	stroke: '#E5E5EF', 
	strokeDasharray: '3 3 3 0',
 };

 
export default function HoursOverview() {	 
	return (
		<div className='border w-1050 h-392 mt-10 flex justify-center rounded-md'>
			<div  className='flex-col space-y-7'>	
				<div className=' w-1010 h-68 border-b flex items-center justify-between'>
					<div>
						<span className='text-lg font-face-gsb font-semibold mr-4 text-color10'>Hours overview</span>
						<span className='text-base font-link font-medium underline text-color8 '>See details</span>
					</div>
					<div className='w-396 h-4 flex justify-between items-center'>
						<div className='flex'>
							<div className='w-4 h-4 mr-2 rounded-full border border-color15 border-2'>
							</div>
							<span className='text-sm font-face-m text-color10 font-medium'>Grand Total Hours Available</span>
						</div>
							<div className='flex'>
								<div className='w-4 h-4 mr-2 rounded-full border border-color8 border-2'>								
								</div>
								<span className='text-sm font-face-m font-medium text-color10'>Grand Total Hours Billed</span>
							</div>
					</div>
				</div>
				<div className='w-988 h-280 flex id="chart"'>
					<ResponsiveContainer width='100%' height='100%'>
						<BarChart 
								width={500}
								height={250}
								data={data}	
							>
								<CartesianGrid strokeDasharray='3 3 3 0' vertical={false} stroke={gridLineStyle.stroke}/>
								<XAxis dataKey='name' 
									tick={chartTextStyle}
									axisLine={axisLineStyle}/>
								<YAxis 
									axisLine={false} 
									tickLine={{ display: 'none' }}
									dx={-8} 
									dy={-3}
									ticks={ticks} 
									tick={secchartTextStyle} />
								<Tooltip />
								<Bar dataKey='Grand_Total_Hours_Available' fill='#FF9F5A' barSize={20} radius={[5, 5, 0, 0]}/>
								<Bar dataKey='Grand_Total_Hours_Billed' fill='#7BB99F' barSize={20} radius={[5, 5, 0, 0]}/>
						</BarChart>
					</ResponsiveContainer>
				</div>							
			</div>
		</div>    
	)
}