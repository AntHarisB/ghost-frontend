import React from 'react'
import Sidebar from './Sidebar'
import  { useState } from 'react';
import {  MdOutlineHome } from 'react-icons/md';
import SalesChannel from './charts/SalesChannels';
import ProjectScope from './charts/ProjectScope';
import HoursOverview from './charts/HoursOverview'
import axios from 'axios';
import { useEffect } from 'react';



export default function Home () {

  const [totalProjects, setTotalProjects] = useState(0);
  const [data, setData] = useState({
    "total_projects": 0,
    "total_value": 0,
    "avg_value": 0,
    "avg_lead_closing": 0,
    "avg_team_size": 0,
    "avg_velocity": 0,
    "weeks_over_ddl": 0,
    "avg_hourly_price": 0
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/project-statistics/2020/')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);




  const [selected, setSelected] = useState(null); // Hook za praćenje kliknutog elementa

  const handleItemClick = (item) => {
    if (selected === item) {
      // Ako je trenutno selektirana stavka ponovno kliknuta, vraćamo na pocetno
      setSelected(null);
    } else {
      setSelected(item); // Postavljamo novi selektirani item
    }
  };

  return (
    <div className='flex'>
      <div className='basis-[12%] h-full'>
        <Sidebar />
      </div>
      
      <div className='basis-[88%] py-8 px-12'>
        <h1 className='text-3xl mb-10 text-color10 font-bold font-face-b'>Home</h1>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex mb-3'>
              <div className={`flex items-center justify-center border border-color11 h-10 w-40 rounded-l-md cursor-pointer ' ${
                selected === 1 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(1)}
                    >
                    <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                        selected === 1 ? 'color' : ''}`}
                          onClick={() => handleItemClick(1)}>2023 Performance
                    </span>
              </div>

              <div className={`flex items-center justify-center border-color11 border-y h-10 w-236 cursor-pointer ' ${
                selected === 2 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(2)}
                    >
                    <span className ={`text-sm font-normal text-color12 font-link cursor-pointer ${
                        selected === 2 ? 'color' : ''}`}
                          onClick={() => handleItemClick(2)}>Development Revenue & Costs
                    </span>
              </div>

              <div className={`flex items-center justify-center border border-color11 h-10 w-99 rounded-r-md cursor-pointer ' ${
                selected === 3 ? 'bg-color14' : ''}`}
                   onClick={() => handleItemClick(3)}
                    >
                      <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                          selected === 3 ? 'color' : ''}`}
                            onClick={() => handleItemClick(3)}>2023 Plan
                      </span>
              </div>
            </div>

            <div className='flex'>
              <div className='flex items-center justify-center '>
                  <span className='text-[22px] font-bold font-face-b mr-2 text-color10'>Year:</span>
              </div>
                
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-22 font-face-b font-bold px-4 text-center text-color9 flex items-center border h-10 w-99 rounded-md" type="button"><ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2023</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2022</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2021</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2020</a>
      </li>
    </ul>
                <svg class="w-4 h-4 ml-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className='mt-10 h-170 w-1050 grid gap-x-8 gap-y-7 grid-cols-4'> 
              <div className='h-70 w-60 justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-122 h-50 ml-4'>
                    <span className='text-sm font-face-r font-normal h-22 text-color9'>Number of projects</span>
                    <span className='text-lg font-face-b font-bold h-26 text-color10'>{data.total_projects}</span>                    
                  </div>
                   
                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                      <MdOutlineHome className="h-6 w-6" />
                    </div>
                  </div>           
              </div>

              <div className='h-70 w-60 justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-136 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Total project value</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{data.total_value} KM</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                      <MdOutlineHome className="h-6 w-6" />
                    </div>  
                  </div>                
              </div>

              <div className='h-70 w-60 justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-117 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Avg. project value</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{data.avg_value}KM</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                       <MdOutlineHome className="h-6 w-6" />
                    </div>  
                  </div>                      
              </div>

            <div className='h-70 w-60 justify-between border flex items-center rounded-md'>
                    <div className='flex flex-col w-129 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Avg. lead closing (d)</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{data.avg_lead_closing.toFixed(2)}</span>
                    </div>

                    <div className='pr-4'>
                      <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                         <MdOutlineHome className="h-6 w-6" />
                      </div> 
                    </div>                    
            </div>

            <div className='h-70 w-60 justify-between border flex items-center rounded-md'>
                    <div className='flex flex-col w-92 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Avg. team size</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{data.avg_team_size}</span>
                    </div>

                    <div className='pr-4'>
                      <div className='rounded-full h-42 w-42 flex items-center justify-center ml-3 bg-color7'>
                         <MdOutlineHome className="h-6 w-6" />
                      </div> 
                    </div>                    
            </div>

            <div className='h-70 w-60 justify-between border flex items-center rounded-md'>
                    <div className='flex flex-col w-81 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Avg.velocity</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{data.avg_velocity}</span>
                    </div>

                    <div className='pr-4'>
                      <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7 '>
                         <MdOutlineHome className="h-6 w-6" />
                      </div>  
                    </div>                
            </div>

            <div className='h-70 w-60 justify-between border flex items-center rounded-md'>
                    <div className='flex flex-col w-134 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Weeks over deadline</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{data.weeks_over_ddl}</span>
                    </div>

                    <div className='pr-4'>
                      <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                         <MdOutlineHome className="h-6 w-6" />
                      </div>   
                    </div>                   
            </div>

            <div className='h-70 w-60 justify-between border flex items-center rounded-md'>
                    <div className='flex flex-col w-106 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Avg. hourly price</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>${data.avg_hourly_price}</span>
                    </div>

                    <div className='pr-4'>
                      <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                         <MdOutlineHome className="h-6 w-6" />
                      </div>           
                </div>         
          </div>
          </div>

            <div className='flex-col'>
              <div className='flex space-x-8'> 
                  <SalesChannel/>
                  <ProjectScope/>
              </div>
                  <HoursOverview/> 
            </div>
          </div>
    </div>
   
  )
}


