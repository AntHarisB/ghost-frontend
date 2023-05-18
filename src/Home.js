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

  const [selectedYear, setSelectedYear] = useState('2023');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const years = ['2019','2020','2021', '2022', '2023'];
  const [totalProjects, setTotalProjects] = useState(0);
  const [projectHours, setProjectHours]=useState([
  //   {
  //   date_start: "01-05-2020",
  //   month: "May",
  //   hours_available: 229,
  //   hours_billed: 58,
  //   project_name: "Projekat 9",
  //   type_of_project: "fixed",
  //   id: 1
  // },
  // {
  //   date_start: "01-09-2020",
  //   month: "May",
  //   hours_available: 146,
  //   hours_billed: 44,
  //   project_name: "Projekat 9",
  //   type_of_project: "fixed",
  //   id: 2
  // },
  // {
  //   date_start: "07-11-2020",
  //   month: "June",
  //   hours_available: 246,
  //   hours_billed: 64,
  //   project_name: "Projekat 9",
  //   type_of_project: "fixed",
  //   id: 3
  // },
  // {
  //   date_start: "12-12-2020",
  //   month: "December",
  //   hours_available: 176,
  //   hours_billed: 24,
  //   project_name: "Projekat 9",
  //   type_of_project: "fixed",
  //   id: 4
  // }
]);
  const [data, setData] = useState({
    total_projects: 0,
    total_value: 0,
    avg_value: 0,
    avg_lead_closing: 0,
    avg_team_size: 0,
    avg_velocity: 0,
    weeks_over_ddl: 0,
    avg_hourly_price: 0
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/project-statistics/${selectedYear}/`)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
    axios.get(`http://127.0.0.1:8000/project-hours/${selectedYear}/`)
      .then(response => {setProjectHours([]);setProjectHours(response.data)})
      .catch(error => console.error(error));
  }, [selectedYear]);


  const handleYearChange = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

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

                <div className='relative'>
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="text-22 font-face-b font-bold px-4 text-center text-color9 flex items-center border h-10 w-99 rounded-md"
                    type="button"
                    onClick={toggleDropdown} 
                  >
                    {selectedYear}
                    <svg
                      className="w-4 h-4 ml-4"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      {years.map((year) => (
                        <li
                          key={year}
                          className={`${
                            year === selectedYear ? 'bg-color7 text-customColor' : 'text-gray-900'
                          } cursor-pointer select-none relative py-2 pl-3 pr-9`}
                          onClick={() => handleYearChange(year)}
                        >
                          <span className="block truncate">{year}</span>
                          {year === selectedYear && (
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{(((data.total_value.toFixed(2))*100)/100)} KM</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{((data.avg_value.toFixed(2))*100)/100}KM</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{(((data.avg_lead_closing.toFixed(2))*100)/100).toFixed(2)}</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{(((data.avg_team_size.toFixed(2))*100)/100)}</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{((data.avg_velocity.toFixed(2))*100)/100}</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{((data.weeks_over_ddl.toFixed(2))*100)/100}</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>${((data.avg_hourly_price.toFixed(2))*100)/100}</span>
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
                  <SalesChannel selectedYear={selectedYear}/>
                  <ProjectScope projectHours={projectHours}/>
              </div>
                  <HoursOverview projectHours={projectHours} selectedYear={selectedYear}/> 
            </div>
          </div>
    </div>
   
  )
}


