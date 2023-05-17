import React from 'react'
import Sidebar from '../../components/Sidebar'
import {  MdOutlineHome } from 'react-icons/md';
import SalesChannel from '../../charts/SalesChannels';
import ProjectScope from '../../charts/ProjectScope';
import HoursOverview from '../../charts/HoursOverview'



export default function Home () {
  const [selected, setSelected] = useState(null);

  const handleItemClick = (item) => {
    if (selected === item) {
      setSelected(null);
    } else {
      setSelected(item); 
    }
  };

  const [selectedYear, setSelectedYear] = useState('2023');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const years = ['2021', '2022', '2023', '2024', '2025'];

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className='flex'>
      <div className='basis-[12%] h-full '>
        <Sidebar />
      </div>
      
      <div className='basis-[88%] pb-5 pt-16 px-3 lg:py-8 lg:px-12 '>
        <h1 className='text-3xl mb-10 text-color10 font-bold font-face-b'>Home</h1>
          <div className='block space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:justify-between lg:items-center'>
            <div className='flex mb-3 '>
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

          <div className='block mt-10 lg:mt-10 lg:h-170 lg:w-1050 lg:grid lg:gap-x-8 lg:gap-y-7 lg:grid-cols-4 lg:my-0 my-10'> 
              <div className='h-70 lg:w-60 w-full justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-122 h-50 ml-4'>
                    <span className='text-sm font-face-r font-normal h-22 text-color9'>Number of projects</span>
                    <span className='text-lg font-face-b font-bold h-26 text-color10'>9</span>                    
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>1,605,003.00 KM</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>178,434,89 KM</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>12</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>2.2</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>64</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>7</span>
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
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>$35</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                        <MdOutlineHome className="h-6 w-6" />
                    </div>           
                  </div>         
              </div>
          </div>

          <div className='flex-col'>
            <div className='flex space-x-7'> 
                <SalesChannel/>
                <ProjectScope/>
            </div>
                <HoursOverview/> 
            </div>
      </div>
    </div>
  )
}


