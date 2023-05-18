import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function HoursOverview({ projectHours, selectedYear }) {
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
    <div className='border w-1050 h-392 mt-10 flex justify-center rounded-md'>
      <div className='flex-col space-y-7'>
        <div className='w-1010 h-68 border-b flex items-center'>
          <span className='text-lg font-face-gsb font-semibold mr-4 text-color10'>Hours overview</span>
          <span className='text-base font-link font-medium underline text-color8'>See details</span>
        </div>
        {console.log("1", hoursOverview)}
        {console.log("2", projectHours)}
        {hoursOverview.length > 0 && (
          <div className='w-988 h-280 flex id="chart"'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                width={500}
                height={250}
                data={hoursOverview}
                margin={{
                  top: 20,
                  right: 10,
                  left: -10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray='3 3 3 0' vertical={false} />
                <XAxis dataKey='name' />
                <YAxis ticks={[0, highestHours * 0.25, highestHours * 0.5, highestHours * 0.75, highestHours]} />
                <Tooltip />
                <Legend />
                <Bar dataKey='Grand_Total_Hours_Available' fill='#FF9F5A' />
                <Bar dataKey='Grand_Total_Hours_Billed' fill='#7BB99F' />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
