import React from 'react'
import sidebar from '../image/sidebar.jpg';
import logo from '../image/antcolony-logo.png';
import image from '../image/image.jpg';
import {  MdOutlineHome } from 'react-icons/md';
import { useState } from 'react';

export default function Dashboard() {
  const [selected, setSelected] = useState(null); //praćenje kliknutog elementa
  const handleItemClick = (item) => {
    if (selected === item) {
      //Ako je trenutno selektirana stavka ponovno kliknuta, vraćamo na pocetno
      setSelected(null);
    } else {
      //Postavljamo novi selektirani item
      setSelected(item); 
    }
  };

  return (
   <div  className='w-284 h-1224 bg-sidebar-gradient'>
    <div className='flex flex-col items-center justify-center space-y-4 py-8'>
      <div> 
         <img src={logo} alt="Logo" className="w-40 h-18 mr-14 mb-6" />
      </div> 

      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" justify-between font-medium  text-sm px-4  text-center  flex flex-row border rounded-md w-64 h-74  items-center" type="button">
          <img src={image} alt="img" className="w-54 h-54" /> 
            <div>
              <div className='mr-5'>
                <h2 className='font-medium text-base text-color5 font-link'>Miron Lukač</h2>
              </div> 
            
              <div className='text-start '>
                <span className='font-normal text-sm text-color6 font-link'>Admin</span>
              </div>
            </div>
            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
      </button>
 

     <div className=' w-full h-349 ml-8 py-2'>
      <div className='flex flex-col space-y-1'>
          <div className={`flex items-center rounded-md w-64 h-12 duration-300 cursor-pointer ' ${
              selected === 1 ? 'bg-color7' : ''}`}
                onClick={() => handleItemClick(1)}
              >
              <div className='flex items-center ml-4'>
                <MdOutlineHome className="h-6 w-6 mr-2 " />
                  <h2 className={`text-sm font-face-b font-bold text-customColor cursor-pointer ${
                    selected === 1 ? ' selected' : ''}`}
                      onClick={() => handleItemClick(1)}>Home
                  </h2>
              </div>
          </div>

          <div className={`flex items-center rounded-md w-64 h-12 duration-300 cursor-pointer' ${
              selected === 2 ? 'bg-color7' : ''}`}
                onClick={() => handleItemClick(2)}
              >
              <div className='flex items-center ml-4'>
                <MdOutlineHome className="h-6 w-6 mr-2 " />
                  <h2 className={`text-sm font-face-m font-medium text-customColor cursor-pointer ${
                      selected === 2 ? ' selected' : ''}`}
                        onClick={() => handleItemClick(2)}>Projects
                  </h2>
              </div>
          </div>

          <div className={`flex items-center rounded-md w-64 h-12 duration-300 cursor-pointer' ${
              selected === 3 ? 'bg-color7' : ''}`}
                onClick={() => handleItemClick(3)}
              >
              <div className='flex items-center ml-4'>
                <MdOutlineHome className="h-6 w-6 mr-2 " />
                  <h2 className={`text-sm font-face-m font-medium text-customColor cursor-pointer ${
                      selected === 3 ? ' selected' : ''}`}
                        onClick={() => handleItemClick(3)}>Employees
                  </h2>
              </div>
          </div>

          <div className={`flex items-center rounded-md w-64 h-12 duration-300 cursor-pointer' ${
              selected === 4 ? 'bg-color7' : ''}`}
                onClick={() => handleItemClick(4)}
              >
              <div className='flex items-center ml-4'>
                <MdOutlineHome className="h-6 w-6 mr-2 " />
                  <h2 className={`text-sm font-face-m font-medium text-customColor cursor-pointer ${
                    selected === 4 ? ' selected' : ''}`}
                      onClick={() => handleItemClick(4)}>Financial Overview
                  </h2>
              </div>
          </div>

          <div className={`flex items-center rounded-md w-64 h-12 duration-300 cursor-pointer' ${
              selected === 5 ? 'bg-color7' : ''}`}
                onClick={() => handleItemClick(5)}
              >
              <div className='flex items-center ml-4'>
                <MdOutlineHome className="h-6 w-6 mr-2 " />
                  <h2 className={`text-sm font-face-m font-medium text-customColor cursor-pointer ${
                    selected === 5 ? ' selected' : ''}`}
                      onClick={() => handleItemClick(5)}>Project Reporting
                  </h2>
              </div>
          </div>

          <div className={`flex items-center rounded-md w-64 h-12 duration-300 cursor-pointer ' ${
              selected === 6 ? 'bg-color7 selected' : ''}`}
                onClick={() => handleItemClick(6)}
              >
              <div className='flex items-center ml-4'>
                <MdOutlineHome className="h-6 w-6 mr-2 " />
                  <h2 className={`text-sm font-face-m font-medium text-customColor cursor-pointer ${
                    selected === 6 ? ' selected' : ''}`}
                      onClick={() => handleItemClick(6)}>Invoicing
                  </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}