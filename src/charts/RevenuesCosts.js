import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

 const data1 = [
	{
	  name: 'January:1/1/2023',
	  'Grand Total Planned Revenue': 195300,
	  'Grand Total Actual Revenue': 195300,
	  'Grand Total Total Expenses (Planned)': 130200,
	  'Grand Total Total Expenses (Actual)': 260000,
	},
 ];
 
  const data2 = [
	{
	  name: 'February:1/2/2023',
    'Grand Total Planned Revenue': 195300,
	  'Grand Total Actual Revenue': 195300,
	  'Grand Total Total Expenses (Planned)': 130200,
	  'Grand Total Total Expenses (Actual)': 260000,
	},
 ];
 
  const data3 = [
	{
	  name: 'March:1/3/2023',
    'Grand Total Planned Revenue': 195300,
	  'Grand Total Actual Revenue': 195300,
	  'Grand Total Total Expenses (Planned)': 130200,
	  'Grand Total Total Expenses (Actual)': 260000,
	},
 ];

const ticks = [0, 65000, 130000, 195000, 260000];

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

export default function RevenuesCosts() {

  
  return (
    <div className='border w-1050 h-695 mt-10 flex justify-center rounded-md'>
      <div className='flex-col space-y-7'>
        <div className='w-1010 h-68 border-b flex items-center justify-between'>
          <div>
            <span className='text-lg font-face-gsb font-semibold mr-4 text-color10'>Revenues & costs (per project) - per month</span>
            <span className='text-base font-link font-medium underline text-color8 '>See details</span>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='w-312 h-444 flex  id="chart"'>
            <ResponsiveContainer width={312} height={240}>
              <BarChart 
                width={500}
                height={240}
                data={data1}	
              >
                <CartesianGrid strokeDasharray='3 3 3 0' vertical={false} stroke={gridLineStyle.stroke}/>
                <XAxis dataKey='name' 
                  tick={chartTextStyle}
                  tickLine={{ display: 'none' }}
                  axisLine={axisLineStyle}/>
                <YAxis 
                  axisLine={false} 
                  tickLine={{ display: 'none' }}
                  dx={-5} 
                  dy={-3}
                  ticks={ticks} 
                  tick={secchartTextStyle} />
                <Tooltip />
                  <Bar dataKey='Grand Total Planned Revenue' fill='#FF9F5A' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Actual Revenue' fill='#7BB99F' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Total Expenses (Planned)' fill='#4C84F2' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Total Expenses (Actual)' fill='#FDCA48' barSize={20} radius={[5, 5, 0, 0]} />              
              </BarChart>
            </ResponsiveContainer>     
          </div>

          <div className='w-262 h-444 flex  id="chart"'>
            <ResponsiveContainer width={262} height={240}>
              <BarChart 
                width={500}
                height={240}
                data={data2}	
              >
                <CartesianGrid strokeDasharray='3 3 3 0' vertical={false} stroke={gridLineStyle.stroke}/>
                <XAxis dataKey='name' 
                  tick={chartTextStyle}
                  tickLine={{ display: 'none' }}
                  axisLine={axisLineStyle}/>
                <YAxis hide />
                <Tooltip />
                <Bar dataKey='Grand Total Planned Revenue' fill='#FF9F5A' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Actual Revenue' fill='#7BB99F' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Total Expenses (Planned)' fill='#4C84F2' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Total Expenses (Actual)' fill='#FDCA48' barSize={20} radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
      
          <div className='w-262 h-444 flex  id="chart"'>
            <ResponsiveContainer width={262} height={240}>
              <BarChart 
                width={500}
                height={240}
                data={data3}	
              >
                <CartesianGrid strokeDasharray='3 3 3 0' vertical={false} stroke={gridLineStyle.stroke}/>
                <XAxis dataKey='name' 
                  tick={chartTextStyle}
                  tickLine={{ display: 'none' }}
                  axisLine={axisLineStyle}/>
                <YAxis hide />
                <Tooltip />
                <Bar dataKey='Grand Total Planned Revenue' fill='#FF9F5A' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Actual Revenue' fill='#7BB99F' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Total Expenses (Planned)' fill='#4C84F2' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Total Expenses (Actual)' fill='#FDCA48' barSize={20} radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

       <div className='flex justify-between ml-14'>
          <div className='h-100 lg:w-262 row-span-2 justify-center bg-color7 flex items-center rounded-md'>
              <div className='flex flex-col w-28 h-60 justify-center items-center'>
                  <span className='text-sm font-face-m font-medium h-22 w-86 text-center text-color9'>Revenue gap</span>
                  <span className='text-2xl font-face-gsb font-semibold h-8 w-28 text-center text-color10'>914.00 KM</span>
              </div>                    
          </div>
          <div className='h-100 lg:w-262 row-span-2 justify-center bg-color7 flex items-center rounded-md'>
              <div className='flex flex-col w-150 h-60 justify-center items-center'>
                  <span className='text-sm font-face-m font-medium h-22 w-86 text-center text-color9'>Revenue gap</span>
                  <span className='text-2xl font-face-gsb font-semibold h-8 w-150 text-center text-color10'>10,000.00 KM</span>
              </div>                    
              </div>
          <div className='h-100 lg:w-262 row-span-2 justify-center bg-color7 flex items-center rounded-md'>
              <div className='flex flex-col w-40 h-60 justify-center items-center'>
                  <span className='text-sm font-face-m font-medium h-22 w-86 text-center text-color9'>Revenue gap</span>
                  <span className='text-2xl font-face-gsb font-semibold h-8 w-40 text-center text-color10'>-15,000.00 KM</span>
              </div>                    
          </div>
        </div>
      </div>
    </div>
  );
}
