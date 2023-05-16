import React from 'react'
import Sidebar from '../../components/Sidebar'
import {  MdOutlineHome } from 'react-icons/md';
import SalesChannel from '../../charts/SalesChannels';
import ProjectScope from '../../charts/ProjectScope';
import HoursOverview from '../../charts/HoursOverview'



export default function Home () {
  return (
    <div className='flex'>
      <div className='basis-[12%] h-full'>
      <Sidebar />
      </div>
      
      <div className='basis-[88%] py-8 px-12'>
          <h1 className='text-3xl mb-7'>Home</h1>
          <div className='flex flex-row justify-between'>
          <div className='flex'>
            <div className='flex items-center justify-center border h-10 w-40 rounded-l-md'>
              <span className='text-sm font-semibold'>2023 Performance</span>
            </div>

            <div className='flex items-center justify-center border h-10 w-236'>
              <span className='text-sm font-normal'>Development Revenue & Costs</span>
            </div>

            <div className='flex items-center justify-center border h-10 w-99 rounded-r-md'>
              <span className='text-sm font-normal'>2023 Plan</span>
            </div>
          </div>

       <div className='flex'>
          <div className='flex items-center justify-center '>
              <span className='text-base font-bold font-face-b mr-2'>Year:</span>
            </div>
          
          <div className='flex items-center border h-10 w-99 rounded-md'>
              <span className='text-22 font-face-b font-bold ml-2'>2023</span>
            </div>
            </div>
          </div>

          <div className='mt-10 h-170 w-1050 grid gap-x-8 gap-y-7 grid-cols-4'> 
            <div className='h-70 w-60 border flex rounded-md '>
                <div className='flex items-center ml-4' >
                    <div className='flex flex-col w-122 h-50'>
                      <span className='text-sm font-face-r font-normal'>Number of projects</span>
                      <span className='text-lg font-face-b font-bold'>9</span>                    
                    </div>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                    <MdOutlineHome className="h-6 w-6" />
                    </div>           
                </div>         
            </div>

            <div className='h-70 w-60 border flex rounded-md'>
                <div className='flex items-center ml-4' >
                    <div className='flex flex-col w-136 h-50  mr-7'>
                      <span className='text-sm font-face-r font-normal'>Total project value</span>
                      <span className='text-lg font-face-b font-bold'>1,605,003.00 KM</span>
                    </div>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7 ml-auto'>
                    <MdOutlineHome className="h-6 w-6" />
                    </div>           
                </div>         
            </div>

            <div className='h-70 w-60 border flex rounded-md'>
                <div className='flex items-center ml-4' >
                    <div className='flex flex-col w-117 h-50 mr-10'>
                      <span className='text-sm font-face-r font-normal'>Avg. project value</span>
                      <span className='text-lg font-face-b font-bold'>178,434,89 KM</span>
                    </div>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7 ml-auto'>
                    <MdOutlineHome className="h-6 w-6" />
                    </div>           
                </div>         
            </div>

            <div className='h-70 w-60 border flex rounded-md'>
                <div className='flex items-center ml-4' >
                    <div className='flex flex-col w-129 h-50 mr-10'>
                      <span className='text-sm font-face-r font-normal'>Avg. lead closing (d)</span>
                      <span className='text-lg font-face-b font-bold'>12</span>
                    </div>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7 ml-auto'>
                    <MdOutlineHome className="h-6 w-6" />
                    </div>           
                </div>         
            </div>

            <div className='h-70 w-60 border flex rounded-md'>
                <div className='flex items-center ml-4' >
                    <div className='flex flex-col w-92 h-50 mr-14'>
                      <span className='text-sm font-face-r font-normal'>Avg. team size</span>
                      <span className='text-lg font-face-b font-bold'>2.2</span>
                    </div>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center ml-3 bg-color7 ml-auto'>
                    <MdOutlineHome className="h-6 w-6" />
                    </div>           
                </div>         
            </div>

            <div className='h-70 w-60 border flex rounded-md'>
                <div className='flex items-center ml-4 justify-between' >
                    <div className='flex flex-col w-81 h-50 '>
                      <span className='text-sm font-face-r font-normal'>Avg.velocity</span>
                      <span className='text-lg font-face-b font-bold'>64</span>
                    </div>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7 '>
                    <MdOutlineHome className="h-6 w-6" />
                    </div>           
                </div>         
            </div>

            <div className='h-70 w-60 border flex rounded-md'>
                <div className='flex items-center ml-4' >
                    <div className='flex flex-col w-134 h-50 mr-10'>
                      <span className='text-sm font-face-r font-normal'>Weeks over deadline</span>
                      <span className='text-lg font-face-b font-bold'>7</span>
                    </div>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7 ml-auto'>
                    <MdOutlineHome className="h-6 w-6" />
                    </div>           
                </div>         
            </div>

            <div className='h-70 w-60 border flex rounded-md'>
                <div className='flex items-center ml-4' >
                    <div className='flex flex-col w-106 h-50 mr-10'>
                      <span className='text-sm font-face-r font-normal'>Avg. hourly price</span>
                      <span className='text-lg font-face-b font-bold'>$35</span>
                    </div>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7 ml-auto'>
                    <MdOutlineHome className="h-6 w-6" />
                    </div>           
                </div>         
            </div>
          </div>

<div className='flex-col'>
        <div className='flex justify-between'>
           <SalesChannel/>
           <ProjectScope/>
          </div>
            <HoursOverview/> 
            </div>
          </div>
      </div>
   
  )
}


