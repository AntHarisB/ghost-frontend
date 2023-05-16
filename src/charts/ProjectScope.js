import React from 'react';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,} from 'recharts';

const data = [
  {
    Grand_Total_Hours_Billed: 5,
    Grand_Total_Hours_Available: 3.75,
  },
];


const ticks = [0, 1.25, 2.5, 3.75, 5];

export default function ProjectScope() {
  const labelStyle = {
    fontWeight: 600,
    fontSize: 14,
    fill:"#232F2D",
    fontFamily: 'GilroySB',
  };


  return (
    <div className='border w-510 h-342 mt-10 flex justify-center rounded-md'>
      <div className='flex-col space-y-7'>
        <div className='w-470 h-68 border-b flex items-center'>
          <span className='text-lg font-face-gsb font-semibold text-color10'>
            Project scope
          </span>
        </div>
        <div className='w-422 h-200 flex items-center justify-center ml-5'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart 
            layout='vertical' 
            data={data}  
            barGap={40}
            barCategoryGap={20} >
              <CartesianGrid
                strokeDasharray='3 3 3 0'
                horizontal={false}
                vertical={true}
              />
              <XAxis
                type='number'
                ticks={ticks}
                domain={[0, 5]}
                axisLine={false}
                tickLine={false} 
                tick={{
                  fontFamily: 'GilroyR',
                  fontSize: 14, 
                  fill: '#232F2D',
                  fontWeight: 400, 
                }}
                
              />
              <YAxis type='category' hide={true} />
              <Tooltip />
              <Bar
              dataKey='Grand_Total_Hours_Available'
              fill='#7BB99F'
              radius={[5, 5, 5, 5]}
              barSize={32}
              label={
                <text dy={-10} style={ labelStyle }>
                  Fixed
                </text>
              }
            />
            <Bar
              dataKey='Grand_Total_Hours_Billed'
              fill='#DFE3E1'
              radius={[5, 5, 5, 5]}
              barSize={32}
              label={
                <text dy={-10} style={labelStyle }>
                  On-going
                </text>
              }
            />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}



