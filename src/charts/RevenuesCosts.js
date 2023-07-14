import React, { useState,useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import api from '../Api';
import { getAccessToken } from '../Api';

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

export default function RevenuesCosts({selectedYear}) {
const [data, setData]=useState([]);
const [highestNumber,setHighestNumber]=useState(0);
let name='nesto';
let revenueGap=123344;
useEffect(() => {
  api.get(`/api/actual_planned_costs_revenue/${selectedYear}/`, {
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`
      }
    })
    .then(response => {
      const apiData = response.data;
      const chartData = apiData.map((project, index) => ({
        name: `${project.month_name}:${project.date_project}`,
        'Grand Total Planned Revenue': project.costs_actual,
        'Grand Total Actual Revenue': project.costs_planned,
        'Grand Total Total Expenses (Planned)': project.project_value,
        'Grand Total Total Expenses (Actual)': project.project_value_planned,
        revenueGap:project.revenue_gap
      }));
      setData(chartData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, [selectedYear]);

const getHighestNumber = (data) => {
  if (data?.length === 0) {
    return null;
  }

  const highestNumber = Math.max(
    ...data?.map(item => Math.max(
      ...Object.values(item).filter(val => typeof val === 'number')
    ))
  );

  setHighestNumber(highestNumber);
  return highestNumber;
};


useEffect(() => {
  getHighestNumber(data);
}, [data]);


  return (
    <div className='border w-1050 h-695 mt-10 flex justify-center rounded-md'>
      <div className='flex-col space-y-5'>
        <div className='w-1010 h-68 border-b flex items-center justify-between'>
          <div>
            <span className='text-lg font-face-gsb font-semibold mr-4 text-color10'>Revenues & costs (per project) - per month</span>
            <span className='text-base font-link font-medium underline text-color8 '>See details</span>
          </div>
        </div>
        <div className='flex justify-between'>
         <div className='flex-col w-320 h-444 justify-center items-center mt-2'>
          <div className='w-262 h-240 flex id="chart"'>
            <ResponsiveContainer width={320} height={240}>
              <BarChart 
                width={320}
                height={240}
                data={data.slice(0,1)}	
              >
                <CartesianGrid strokeDasharray='3 3 3 0' vertical={false} stroke={gridLineStyle.stroke}/>
                <XAxis dataKey='name' 
                  tick={chartTextStyle}
                  tickLine={{ display: 'none' }}
                  axisLine={axisLineStyle}
                  dy={16}
                  />
                <YAxis 
                  axisLine={false} 
                  tickLine={{ display: 'none' }}
                  dx={-5} 
                  dy={-3}
                  ticks={[0, highestNumber * 0.25, highestNumber * 0.5, highestNumber * 0.75, highestNumber]} 
                  tick={secchartTextStyle} />
                <Tooltip />
                  <Bar dataKey='Grand Total Planned Revenue' fill='#FF9F5A' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Actual Revenue' fill='#7BB99F' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Total Expenses (Planned)' fill='#4C84F2' barSize={20} radius={[5, 5, 0, 0]} />
                  <Bar dataKey='Grand Total Total Expenses (Actual)' fill='#FDCA48' barSize={20} radius={[5, 5, 0, 0]} />              
              </BarChart>
            </ResponsiveContainer> 
          </div>
            <div className='w-252 border-t mt-5 ml-16'></div>
              <div className='w-312 h-4 flex-col space-y-4 mt-10 ml-14'>
              <div className='flex h-4 w-214 items-center'>
                <div className='w-15 h-15 mr-2 rounded-full border border-color15 border-2'></div>
                  <span className='text-sm font-face-m text-color9 font-medium'>Grand Total Planned Revenue</span>
                  </div>
                  <div className='flex h-4 w-203 items-center'>
                  <div className='w-15 h-15  mr-2 rounded-full border border-color8 border-2'></div>
                  <span className='text-sm font-face-m font-medium text-color9'>Grand Total Actual Revenue</span>
                </div>
                <div className='flex h-4 w-262 items-center'>
                  <div className='w-15 h-15  mr-2 rounded-full border border-color8 border-2'></div>
                  <span className='text-sm font-face-m font-medium text-color9'>Grand Total Total Expenses (Planned)</span>
                </div>
                <div className='flex h-4 w-251 items-center'>
                  <div className='w-15 h-15  mr-2 rounded-full border border-color8 border-2'></div>
                  <span className='text-sm font-face-m font-medium text-color9'>Grand Total Total Expenses (Actual)</span>
                </div>
              </div>
              
          </div>

          <div className='flex-col h-444 w-262 mt-2'>
            <div className='w-262 h-240 flex  id="chart"'>
              <ResponsiveContainer width={262} height={240}>
                <BarChart 
                  width={262}
                  height={240}
                  data={data.slice(1,2)}	
                >
                  <CartesianGrid strokeDasharray='3 3 3 0' vertical={false} stroke={gridLineStyle.stroke}/>
                  <XAxis dataKey='name' 
                    tick={chartTextStyle}
                    tickLine={{ display: 'none' }}
                    axisLine={axisLineStyle}
                    dy={16}
                   />
                  <YAxis hide ticks={[0, highestNumber * 0.25, highestNumber * 0.5, highestNumber * 0.75, highestNumber]} />
                  <Tooltip />
                  <Bar dataKey='Grand Total Planned Revenue' fill='#FF9F5A' barSize={20} radius={[5, 5, 0, 0]} />
                    <Bar dataKey='Grand Total Actual Revenue' fill='#7BB99F' barSize={20} radius={[5, 5, 0, 0]} />
                    <Bar dataKey='Grand Total Total Expenses (Planned)' fill='#4C84F2' barSize={20} radius={[5, 5, 0, 0]} />
                    <Bar dataKey='Grand Total Total Expenses (Actual)' fill='#FDCA48' barSize={20} radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className='w-252 border-t ml-1 mt-5'></div>
              <div className='w-312 h-4 flex-col space-y-4 mt-10'>
                <div className='flex h-4 w-214 items-center'>
                  <div className='w-15 h-15 mr-2 rounded-full border border-color15 border-2'></div>
                    <span className='text-sm font-face-m text-color9 font-medium'>Grand Total Planned Revenue</span>
                    </div>
                    <div className='flex h-4 w-203 items-center'>
                    <div className='w-15 h-15  mr-2 rounded-full border border-color8 border-2'></div>
                    <span className='text-sm font-face-m font-medium text-color9'>Grand Total Actual Revenue</span>
                  </div>
                  <div className='flex h-4 w-262 items-center'>
                    <div className='w-15 h-15  mr-2 rounded-full border border-color8 border-2'></div>
                    <span className='text-sm font-face-m font-medium text-color9'>Grand Total Total Expenses (Planned)</span>
                  </div>
                  <div className='flex h-4 w-251 items-center'>
                    <div className='w-15 h-15  mr-2 rounded-full border border-color8 border-2'></div>
                    <span className='text-sm font-face-m font-medium text-color9'>Grand Total Total Expenses (Actual)</span>
                  </div>
                </div>            
              </div>
      

            <div className='flex-col h-444 w-262 mt-2'>
            <div className='w-262 h-240 flex  id="chart"'>
              <ResponsiveContainer width={262} height={240}>
                <BarChart 
                  width={262}
                  height={240}
                  data={data.slice(2,3)}	
                >
                  <CartesianGrid strokeDasharray='3 3 3 0' vertical={false} stroke={gridLineStyle.stroke}/>
                  <XAxis dataKey='name' 
                    tick={chartTextStyle}
                    tickLine={{ display: 'none' }}
                    axisLine={axisLineStyle}
                    dy={16}/>
                  <YAxis hide ticks={[0, highestNumber * 0.25, highestNumber * 0.5, highestNumber * 0.75, highestNumber]}/>
                  <Tooltip />
                  <Bar dataKey='Grand Total Planned Revenue' fill='#FF9F5A' barSize={20} radius={[5, 5, 0, 0]} />
                    <Bar dataKey='Grand Total Actual Revenue' fill='#7BB99F' barSize={20} radius={[5, 5, 0, 0]} />
                    <Bar dataKey='Grand Total Total Expenses (Planned)' fill='#4C84F2' barSize={20} radius={[5, 5, 0, 0]} />
                    <Bar dataKey='Grand Total Total Expenses (Actual)' fill='#FDCA48' barSize={20} radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className='w-252 border-t ml-1 mt-5'></div>
              <div className='w-312 h-4 flex-col space-y-4 mt-10'>
                <div className='flex h-4 w-214 items-center'>
                  <div className='w-15 h-15 mr-2 rounded-full border border-color15 border-2'></div>
                    <span className='text-sm font-face-m text-color9 font-medium'>Grand Total Planned Revenue</span>
                    </div>
                    <div className='flex h-4 w-203 items-center'>
                    <div className='w-15 h-15  mr-2 rounded-full border border-color8 border-2'></div>
                    <span className='text-sm font-face-m font-medium text-color9'>Grand Total Actual Revenue</span>
                  </div>
                  <div className='flex h-4 w-262 items-center'>
                    <div className='w-15 h-15  mr-2 rounded-full border border-color8 border-2'></div>
                    <span className='text-sm font-face-m font-medium text-color9'>Grand Total Total Expenses (Planned)</span>
                  </div>
                  <div className='flex h-4 w-251 items-center'>
                    <div className='w-15 h-15  mr-2 rounded-full border border-color8 border-2'></div>
                    <span className='text-sm font-face-m font-medium text-color9'>Grand Total Total Expenses (Actual)</span>
                  </div>
                </div>            
              </div>
        </div>
       <div className='flex justify-between ml-14'>
          <div className='h-100 w-262 row-span-2 justify-center bg-color7 flex items-center rounded-md'>
              <div className='flex flex-col w-28 h-60 justify-center items-center'>
                  <span className='text-sm font-face-m font-medium h-22 w-90 text-center text-color9'>Revenue gap</span>
                  <span className='text-2xl font-face-gsb font-semibold h-8 w-40 text-center text-color10'>{data[0]?.revenueGap || 0} KM</span>
              </div>                    
          </div>
          <div className='h-100 w-262 row-span-2 justify-center bg-color7 flex items-center rounded-md'>
              <div className='flex flex-col w-150 h-60 justify-center items-center'>
                  <span className='text-sm font-face-m font-medium h-22 w-86 text-center text-color9'>Revenue gap</span>
                  <span className='text-2xl font-face-gsb font-semibold h-8 w-150 text-center text-color10'>{data[1]?.revenueGap || 0} KM</span>
              </div>                    
              </div>
          <div className='h-100 w-262 row-span-2 justify-center bg-color7 flex items-center rounded-md'>
              <div className='flex flex-col w-40 h-60 justify-center items-center'>
                  <span className='text-sm font-face-m font-medium h-22 w-86 text-center text-color9'>Revenue gap</span>
                  <span className='text-2xl font-face-gsb font-semibold h-8 w-40 text-center text-color10'>{data[2]?.revenueGap || 0} KM</span>
              </div>                    
          </div>
        </div>
      </div>
    </div>
  );
}
