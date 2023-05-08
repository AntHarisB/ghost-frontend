import React from 'react'
import sidebar from './image/sidebar.jpg';
import logo from './image/antcolony-logo.png';
import image from './image/image.jpg';
import {  MdOutlineHome } from 'react-icons/md';

export default function Dashboard() {
  return (
   <div  className='w-284 h-1224'  style={{ backgroundImage: `url(${sidebar})` }}>
    <div className='flex flex-col items-center justify-center space-y-4 py-8'>
      <div> 
         <img src={logo} alt="Logo" className="w-40 h-18 mr-14 mb-6" />
      </div> 

      <div  className='flex flex-row border rounded-md w-64 h-74 space-y-3'> 
         <img src={image} alt="img" className="w-54 h-54 ml-4 mt-2" /> 
      <div>
      <div className='ml-4'>
        <h2 className='font-link font-medium text-base text-color5'>Miron Lukač</h2>

      </div> 
      
      <div className='ml-4'>
        <span className='font-link font-regular text-sm text-color6'>Admin</span>
        </div>
      </div>
      </div>
 

     <div className=' w-full h-349 ml-8'>
      <div className='flex flex-col space-y-1'>
          <div className=' flex items-center border rounded-md w-64 h-12'>
            <div className='flex items-center ml-4'>
            <MdOutlineHome className="h-6 w-6 mr-2 " />
            <h2 className="text-sm font-face-b font-bold">Home</h2>
            </div>
          </div>

          <div className=' flex items-center border rounded-md w-64 h-12'>
            <div className='flex items-center ml-4'>
            <MdOutlineHome className="h-6 w-6 mr-2 " />
            <h2 className="text-sm font-face-m font-medium">Projects</h2>
            </div>
          </div>

          <div className=' flex items-center border rounded-md w-64 h-12'>
            <div className='flex items-center ml-4'>
            <MdOutlineHome className="h-6 w-6 mr-2 " />
            <h2 className="text-sm font-face-m font-medium">Employees</h2>
            </div>
          </div>

          <div className=' flex items-center border rounded-md w-64 h-12'>
            <div className='flex items-center ml-4'>
            <MdOutlineHome className="h-6 w-6 mr-2 " />
            <h2 className="text-sm font-face-m font-medium">Financial Overview</h2>
            </div>
          </div>

          <div className=' flex items-center border rounded-md w-64 h-12'>
            <div className='flex items-center ml-4'>
            <MdOutlineHome className="h-6 w-6 mr-2 " />
            <h2 className="text-sm font-face-m font-medium">Project Reporting</h2>
            </div>
          </div>

          <div className=' flex items-center border rounded-md w-64 h-12'>
            <div className='flex items-center ml-4'>
            <MdOutlineHome className="h-6 w-6 mr-2 " />
            <h2 className="text-sm font-face-m font-medium">Invoicing</h2>
            </div>
          </div>
      </div>
      </div>
    </div>
    </div>
  )
}