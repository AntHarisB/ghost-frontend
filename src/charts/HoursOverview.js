import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'



export default function HoursOverview({projectHours}) {	 
	const chartTextStyle = {
		fontFamily: 'GilroyM',
		fontSize: 12,
		fill: '#232F2D',
		fontWeight: 500,
		dy: 10,
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


  const [hoursOverview, setHoursOverview] = useState([]);
  const [highestHours, setHighestHours] = useState(0);

  useEffect(() => {
    setHoursOverview(
      projectHours.map((item) => ({
        name: `${item.month}:${item.date_start}`,
        Grand_Total_Hours_Billed: item.hours_billed,
        Grand_Total_Hours_Available: item.hours_available,
      }))
    );
  }, [projectHours]);

  useEffect(() => {
    setHighestHours(Math.max(...hoursOverview.map((obj) => obj.Grand_Total_Hours_Available)));
  }, [hoursOverview]);

	return (
      <div className='border w-1050  h-392 mt-10 flex justify-center rounded-md'>
      <div  className='flex-col space-y-7 '>	
        <div className=' w-1010 h-68  border-b flex items-center justify-between'>
		   <div>

          <span className='text-lg font-face-gsb font-semibold mr-4 text-color10'>Hours overview</span>

          <span className='text-base font-link font-medium underline text-color8 '>See details</span>
			 </div>
			 <div className='w-396  h-4 flex justify-between items-center'>
				<div className='flex'>
			 <div className='w-4 h-4 mr-2 rounded-full border border-color15 border-2'></div>
					<span className='text-sm font-face-m text-color10 font-medium'>Grand Total Hours Available</span>
					</div>
					<div className='flex'>
					<div className='w-4 h-4 mr-2 rounded-full border border-color8 border-2'></div>
					<span className='text-sm font-face-m font-medium text-color10'>Grand Total Hours Billed</span>
					</div>
				</div>
        </div>
          <div className='w-988  h-280 flex id="chart"'>
			 <ResponsiveContainer width='100%' height='100%'>
						<BarChart 
							width={500}
							height={250}
							data={hoursOverview}	
						>
							<CartesianGrid strokeDasharray='3 3 3 0' vertical={false} stroke={gridLineStyle.stroke}/>
							<XAxis dataKey='name' 
							   tick={chartTextStyle}
								tickLine={{ display: 'none' }}
							
								axisLine={axisLineStyle}/>
							<YAxis 
							   axisLine={false} 
								tickLine={{ display: 'none' }}
								dx={-8} 
								dy={-3}
							   ticks={[0, highestHours * 0.25, highestHours * 0.5, highestHours * 0.75, highestHours]} 
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