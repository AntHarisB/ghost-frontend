import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
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

  const years = ['2019','2020','2021', '2022', '2023'];
  const [totalProjects, setTotalProjects] = useState(0);
  const [projectHours, setProjectHours]=useState([]);
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
    api.get(`http://127.0.0.1:8000/project-statistics/${selectedYear}/`, {
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`
      }
    })
      .then(response => setData(response.data))
      .catch(error => console.error(error));
    
    api.get(`http://127.0.0.1:8000/project-hours/${selectedYear}/`, {
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`
      }
    })
      .then(response => {
        setProjectHours([]);
        setProjectHours(response.data);
      })
      .catch(error => console.error(error));
  }, [selectedYear]);
  

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false); 
  };
  

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className='flex'>
      <div className='basis-[12%]'>
        <Sidebar user={user}/>
      </div>
      {console.log('home',user)}
      <div className='basis-[88%] pb-5 pt-14 px-3 lg:py-8 lg:px-11 lg:overflow-x-hidden md:overflow-x-scroll '>
        <h1 className='text-3xl mb-10 text-color10 font-bold font-face-b'>Home</h1>
          
          <div className='block space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:justify-between lg:items-center'>
            
            <div className='flex mb-3 '>
              <div className={`flex items-center justify-center text-center py-5 px-3 lg:py-0 lg:px-0 w-1/3 border border-color11 h-10 lg:w-40 rounded-l-md cursor-pointer ' ${
                selected === 1 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(1)}
                    >
                    <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                        selected === 1 ? 'color' : ''}`}
                          onClick={() => handleItemClick(1)}>2023 Performance
                    </span>
              </div>

              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0  w-1/3 border-y h-10 lg:w-236 cursor-pointer ' ${
                selected === 2 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(2)}
                    >
                    <span className ={`text-sm font-normal text-center text-color12 font-link cursor-pointer ${
                        selected === 2 ? 'color' : ''}`}
                          onClick={() => handleItemClick(2)}>Development Revenue & Costs
                    </span>
              </div>

              <div className={`flex items-center justify-center border py-5 px-3 w-1/3 lg:px-0 lg:py-0 border-color11 h-10 lg:w-99 rounded-r-md cursor-pointer ' ${
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
                <div className='flex  items-center justify-center '>
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

          <div className='block space-y-5 lg:space-y-0  mt-10 lg:mt-10 lg:h-170 lg:w-1050 lg:grid lg:gap-x-8 lg:gap-y-7 lg:grid-cols-4 lg:my-0 my-10 md:grid-cols-2'> 
              <div className='h-70 lg:w-60  justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-122 h-50 ml-4'>
                    <span className='text-sm font-face-r font-normal h-22 text-color9'>Number of projects</span>
                    <span className='text-lg font-face-b font-bold h-26 text-color10'>{data.total_projects}</span>                    
                  </div>
                   
                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 2.25V21.75H19.5V7.19971L19.2744 6.97559L14.7744 2.47559L14.5503 2.25H4.5ZM6 3.75H13.5V8.25H18V20.25H6V3.75ZM15 4.80029L16.9497 6.75H15V4.80029ZM7.5 9.75V11.25H16.5V9.75H7.5ZM7.5 13.5V15H12.75V13.5H7.5ZM14.25 13.5V15H16.5V13.5H14.25ZM7.5 16.5V18H12.75V16.5H7.5ZM14.25 16.5V18H16.5V16.5H14.25Z" fill="#1A3835"/>
                      </svg>
                    </div>
                  </div>           
              </div>

              <div className='h-70 lg:w-60  lg:w-auto justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-136 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Total project value</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{(((data.total_value.toFixed(2))*100)/100)} KM</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                      <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_171_382)">
                        <path d="M5 2.25V21.75H17V20.25H6.5V3.75H14V8.25H18.5V9.75H20V7.19971L19.7744 6.97559L15.2744 2.47559L15.0503 2.25H5ZM15.5 4.80029L17.4497 6.75H15.5V4.80029ZM8 9.75V11.25H17V9.75H8ZM20.75 11.25V12.75C19.475 12.975 18.5 14.025 18.5 15.375C18.5 16.875 19.625 18 21.125 18H21.875C22.475 18 23 18.525 23 19.125C23 19.725 22.475 20.25 21.875 20.25H19.25V21.75H20.75V23.25H22.25V21.75C23.525 21.525 24.5 20.475 24.5 19.125C24.5 17.625 23.375 16.5 21.875 16.5H21.125C20.525 16.5 20 15.975 20 15.375C20 14.775 20.525 14.25 21.125 14.25H23.75V12.75H22.25V11.25H20.75ZM8 13.5V15H13.25V13.5H8ZM14.75 13.5V15H17V13.5H14.75ZM8 16.5V18H13.25V16.5H8ZM14.75 16.5V18H17V16.5H14.75Z" fill="#1A3835"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_171_382">
                        <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </div>  
                  </div>                
              </div>

              <div className='h-70 lg:w-60   lg:w-auto justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-117 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Avg. project value</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{((data.avg_value.toFixed(2))*100)/100} KM</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                      <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 3.51178C14.4053 3.51178 13.1865 3.76373 12.2344 4.23834C11.2822 4.71295 10.5 5.48639 10.5 6.51178V9.51178C10.5 9.60846 10.5322 9.70221 10.5469 9.79303C9.84961 9.61139 9.07617 9.51178 8.25 9.51178C6.90527 9.51178 5.68652 9.76373 4.73438 10.2383C3.78223 10.713 3 11.4864 3 12.5118V18.5118C3 19.5372 3.78223 20.3106 4.73438 20.7852C5.68652 21.2598 6.90527 21.5118 8.25 21.5118C9.59473 21.5118 10.8135 21.2598 11.7656 20.7852C12.7178 20.3106 13.5 19.5372 13.5 18.5118V18.2071C14.1885 18.3887 14.9414 18.5118 15.75 18.5118C17.0947 18.5118 18.3135 18.2598 19.2656 17.7852C20.2178 17.3106 21 16.5372 21 15.5118V6.51178C21 5.48639 20.2178 4.71295 19.2656 4.23834C18.3135 3.76373 17.0947 3.51178 15.75 3.51178ZM15.75 5.01178C16.8926 5.01178 17.9092 5.25787 18.5859 5.59772C19.2627 5.93756 19.5 6.29498 19.5 6.51178C19.5 6.72858 19.2627 7.086 18.5859 7.42584C17.9092 7.76569 16.8926 8.01178 15.75 8.01178C14.6074 8.01178 13.5908 7.76569 12.9141 7.42584C12.2373 7.086 12 6.72858 12 6.51178C12 6.29498 12.2373 5.93756 12.9141 5.59772C13.5908 5.25787 14.6074 5.01178 15.75 5.01178ZM12 8.64459C12.0791 8.68854 12.1523 8.7442 12.2344 8.78522C13.1865 9.25983 14.4053 9.51178 15.75 9.51178C17.0947 9.51178 18.3135 9.25983 19.2656 8.78522C19.3477 8.7442 19.4209 8.68854 19.5 8.64459V9.51178C19.5 9.72858 19.2627 10.086 18.5859 10.4258C17.9092 10.7657 16.8926 11.0118 15.75 11.0118C14.6074 11.0118 13.5908 10.7657 12.9141 10.4258C12.2373 10.086 12 9.72858 12 9.51178V8.64459ZM8.25 11.0118C9.39258 11.0118 10.4092 11.2579 11.0859 11.5977C11.7627 11.9376 12 12.295 12 12.5118C12 12.7286 11.7627 13.086 11.0859 13.4258C10.4092 13.7657 9.39258 14.0118 8.25 14.0118C7.10742 14.0118 6.09082 13.7657 5.41406 13.4258C4.7373 13.086 4.5 12.7286 4.5 12.5118C4.5 12.295 4.7373 11.9376 5.41406 11.5977C6.09082 11.2579 7.10742 11.0118 8.25 11.0118ZM19.5 11.6446V12.5118C19.5 12.7286 19.2627 13.086 18.5859 13.4258C17.9092 13.7657 16.8926 14.0118 15.75 14.0118C14.8975 14.0118 14.127 13.8712 13.5 13.6602V12.5118C13.5 12.4151 13.4678 12.3214 13.4531 12.2305C14.1504 12.4122 14.9238 12.5118 15.75 12.5118C17.0947 12.5118 18.3135 12.2598 19.2656 11.7852C19.3477 11.7442 19.4209 11.6885 19.5 11.6446ZM4.5 14.6446C4.5791 14.6885 4.65234 14.7442 4.73438 14.7852C5.68652 15.2598 6.90527 15.5118 8.25 15.5118C9.59473 15.5118 10.8135 15.2598 11.7656 14.7852C11.8477 14.7442 11.9209 14.6885 12 14.6446V15.5118C12 15.7286 11.7627 16.086 11.0859 16.4258C10.4092 16.7657 9.39258 17.0118 8.25 17.0118C7.10742 17.0118 6.09082 16.7657 5.41406 16.4258C4.7373 16.086 4.5 15.7286 4.5 15.5118V14.6446ZM19.5 14.6446V15.5118C19.5 15.7286 19.2627 16.086 18.5859 16.4258C17.9092 16.7657 16.8926 17.0118 15.75 17.0118C14.8975 17.0118 14.127 16.8917 13.5 16.6837V15.2305C14.1885 15.4122 14.9385 15.5118 15.75 15.5118C17.0947 15.5118 18.3135 15.2598 19.2656 14.7852C19.3477 14.7442 19.4209 14.6885 19.5 14.6446ZM4.5 17.6446C4.5791 17.6885 4.65234 17.7442 4.73438 17.7852C5.68652 18.2598 6.90527 18.5118 8.25 18.5118C9.59473 18.5118 10.8135 18.2598 11.7656 17.7852C11.8477 17.7442 11.9209 17.6885 12 17.6446V18.5118C12 18.7286 11.7627 19.086 11.0859 19.4258C10.4092 19.7657 9.39258 20.0118 8.25 20.0118C7.10742 20.0118 6.09082 19.7657 5.41406 19.4258C4.7373 19.086 4.5 18.7286 4.5 18.5118V17.6446Z" fill="#1A3835"/>
                      </svg>
                    </div>  
                  </div>                      
              </div>

              <div className='h-70 lg:w-60   lg:w-auto justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-129 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Avg. lead closing (d)</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{(((data.avg_lead_closing.toFixed(2))*100)/100).toFixed(2)}</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1.5C6.1084 1.5 3.75 3.8584 3.75 6.75C3.75 8.55762 4.67285 10.1631 6.07031 11.1094C3.39551 12.2578 1.5 14.9121 1.5 18H3C3 14.6777 5.67773 12 9 12C10.0312 12 10.9922 12.2695 11.8359 12.7266C11.0039 13.7578 10.5 15.0762 10.5 16.5C10.5 19.8047 13.1953 22.5 16.5 22.5C19.8047 22.5 22.5 19.8047 22.5 16.5C22.5 13.1953 19.8047 10.5 16.5 10.5C15.1904 10.5 13.9717 10.9307 12.9844 11.6484C12.6533 11.4404 12.293 11.2646 11.9297 11.1094C13.3271 10.1631 14.25 8.55762 14.25 6.75C14.25 3.8584 11.8916 1.5 9 1.5ZM9 3C11.0801 3 12.75 4.66992 12.75 6.75C12.75 8.83008 11.0801 10.5 9 10.5C6.91992 10.5 5.25 8.83008 5.25 6.75C5.25 4.66992 6.91992 3 9 3ZM16.5 12C18.9932 12 21 14.0068 21 16.5C21 18.9932 18.9932 21 16.5 21C14.0068 21 12 18.9932 12 16.5C12 14.0068 14.0068 12 16.5 12ZM18.9609 14.4609L16.5 16.9219L14.7891 15.2109L13.7109 16.2891L15.9609 18.5391L16.5 19.0547L17.0391 18.5391L20.0391 15.5391L18.9609 14.4609Z" fill="#1A3835"/>
                      </svg>
                    </div> 
                  </div>                    
              </div>

              <div className='h-70 lg:w-60  lg:w-auto justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-92 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Avg. team size</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{(((data.avg_team_size.toFixed(2))*100)/100)}</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center ml-3 bg-color7'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.625 4.5C7.18359 4.5 6 5.68359 6 7.125C6 8.56641 7.18359 9.75 8.625 9.75C10.0664 9.75 11.25 8.56641 11.25 7.125C11.25 5.68359 10.0664 4.5 8.625 4.5ZM15.375 4.5C13.9336 4.5 12.75 5.68359 12.75 7.125C12.75 8.56641 13.9336 9.75 15.375 9.75C16.8164 9.75 18 8.56641 18 7.125C18 5.68359 16.8164 4.5 15.375 4.5ZM8.625 6C9.25488 6 9.75 6.49512 9.75 7.125C9.75 7.75488 9.25488 8.25 8.625 8.25C7.99512 8.25 7.5 7.75488 7.5 7.125C7.5 6.49512 7.99512 6 8.625 6ZM15.375 6C16.0049 6 16.5 6.49512 16.5 7.125C16.5 7.75488 16.0049 8.25 15.375 8.25C14.7451 8.25 14.25 7.75488 14.25 7.125C14.25 6.49512 14.7451 6 15.375 6ZM5.25 9C3.60059 9 2.25 10.3506 2.25 12C2.25 12.835 2.60742 13.5879 3.16406 14.1328C2.16504 14.8096 1.5 15.9609 1.5 17.25H3C3 15.999 3.99902 15 5.25 15C6.50098 15 7.5 15.999 7.5 17.25H9C9 15.9609 8.33496 14.8096 7.33594 14.1328C7.89258 13.5879 8.25 12.835 8.25 12C8.25 10.3506 6.89941 9 5.25 9ZM9 17.25C8.53125 17.877 8.25 18.665 8.25 19.5H9.75C9.75 18.249 10.749 17.25 12 17.25C13.251 17.25 14.25 18.249 14.25 19.5H15.75C15.75 18.665 15.4688 17.877 15 17.25C14.7451 16.9102 14.4375 16.6201 14.0859 16.3828C14.6426 15.8379 15 15.085 15 14.25C15 12.6006 13.6494 11.25 12 11.25C10.3506 11.25 9 12.6006 9 14.25C9 15.085 9.35742 15.8379 9.91406 16.3828C9.5625 16.6201 9.25488 16.9102 9 17.25ZM15 17.25H16.5C16.5 15.999 17.499 15 18.75 15C20.001 15 21 15.999 21 17.25H22.5C22.5 15.9609 21.835 14.8096 20.8359 14.1328C21.3926 13.5879 21.75 12.835 21.75 12C21.75 10.3506 20.3994 9 18.75 9C17.1006 9 15.75 10.3506 15.75 12C15.75 12.835 16.1074 13.5879 16.6641 14.1328C15.665 14.8096 15 15.9609 15 17.25ZM5.25 10.5C6.08789 10.5 6.75 11.1621 6.75 12C6.75 12.8379 6.08789 13.5 5.25 13.5C4.41211 13.5 3.75 12.8379 3.75 12C3.75 11.1621 4.41211 10.5 5.25 10.5ZM18.75 10.5C19.5879 10.5 20.25 11.1621 20.25 12C20.25 12.8379 19.5879 13.5 18.75 13.5C17.9121 13.5 17.25 12.8379 17.25 12C17.25 11.1621 17.9121 10.5 18.75 10.5ZM12 12.75C12.8379 12.75 13.5 13.4121 13.5 14.25C13.5 15.0879 12.8379 15.75 12 15.75C11.1621 15.75 10.5 15.0879 10.5 14.25C10.5 13.4121 11.1621 12.75 12 12.75Z" fill="#1A3835"/>
                      </svg>
                    </div> 
                  </div>                    
              </div>

              <div className='h-70 lg:w-60   lg:w-auto justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-81 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Avg.velocity</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{((data.avg_velocity.toFixed(2))*100)/100}</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7 '>
                      <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.25 3V21H22.25V3H16.25ZM17.75 4.5H20.75V19.5H17.75V4.5ZM2.75 7.5V21H8.75V7.5H2.75ZM4.25 9H7.25V19.5H4.25V9ZM9.5 12V21H15.5V12H9.5ZM11 13.5H14V19.5H11V13.5Z" fill="#1A3835"/>
                      </svg>
                    </div>  
                  </div>                
              </div>

              <div className='h-70 lg:w-60   lg:w-auto justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-134 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Weeks over deadline</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>{((data.weeks_over_ddl.toFixed(2))*100)/100}</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                      <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.25 3.75V3H8.75V3.75H16.25V3H17.75V3.75H20.75V11.9556C20.2895 11.6583 19.7856 11.4223 19.25 11.2592V8.25H5.75V18.75H11.7592C11.9223 19.2856 12.1583 19.7895 12.4556 20.25H4.25V3.75H7.25ZM11.6304 15.75C11.545 16.1532 11.5 16.5713 11.5 17C11.5 17.0837 11.5017 17.1671 11.5051 17.25H10.25V15.75H11.6304ZM13.2647 12.75C13.2598 12.7549 13.2549 12.7598 13.25 12.7647V12.75H13.2647ZM17.75 11.0051C17.6671 11.0017 17.5837 11 17.5 11C17.0713 11 16.6532 11.045 16.25 11.1304V9.75H17.75V11.0051ZM7.25 5.25H5.75V6.75H19.25V5.25H17.75V6H16.25V5.25H8.75V6H7.25V5.25ZM10.25 11.25V9.75H11.75V11.25H10.25ZM13.25 11.25V9.75H14.75V11.25H13.25ZM7.25 14.25V12.75H8.75V14.25H7.25ZM10.25 14.25V12.75H11.75V14.25H10.25ZM7.25 17.25V15.75H8.75V17.25H7.25Z" fill="#1A3835"/>
                        <path d="M17.5 12C14.7438 12 12.5 14.2438 12.5 17C12.5 19.7562 14.7438 22 17.5 22C20.2562 22 22.5 19.7562 22.5 17C22.5 14.2438 20.2562 12 17.5 12ZM17.5 13.25C19.575 13.25 21.25 14.925 21.25 17C21.25 19.075 19.575 20.75 17.5 20.75C15.425 20.75 13.75 19.075 13.75 17C13.75 14.925 15.425 13.25 17.5 13.25ZM16.875 13.875V17.625H20V16.375H18.125V13.875H16.875Z" fill="#1A3835"/>
                      </svg>
                    </div>   
                  </div>                   
              </div>

              <div className='h-70 lg:w-60  lg:w-auto justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-106 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Avg. hourly price</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>${((data.avg_hourly_price.toFixed(2))*100)/100}</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_171_422)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 7.03711 7.03711 3 12 3C16.6506 3 20.4882 6.54499 20.9528 11.0748H19.4439C18.9899 7.36223 15.838 4.5 12 4.5C7.84863 4.5 4.5 7.84863 4.5 12C4.5 16.1514 7.84863 19.5 12 19.5C12.7578 19.5 13.4889 19.3884 14.1777 19.1807V20.7337C13.4802 20.9076 12.7507 21 12 21C7.03711 21 3 16.9629 3 12ZM14.1777 11.25V12.75H11.25V6H12.75V11.25H14.1777Z" fill="#1A3835"/>
                        <path d="M17.5479 12V13.5C16.2729 13.725 15.2979 14.775 15.2979 16.125C15.2979 17.625 16.4229 18.75 17.9229 18.75H18.6729C19.2729 18.75 19.7979 19.275 19.7979 19.875C19.7979 20.475 19.2729 21 18.6729 21H16.0479V22.5H17.5479V24H19.0479V22.5C20.3229 22.275 21.2979 21.225 21.2979 19.875C21.2979 18.375 20.1729 17.25 18.6729 17.25H17.9229C17.3229 17.25 16.7979 16.725 16.7979 16.125C16.7979 15.525 17.3229 15 17.9229 15H20.5479V13.5H19.0479V12H17.5479Z" fill="#1A3835"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_171_422">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </div>           
                  </div>         
              </div>
          </div>

          <div className='flex-col'>
            <div className='lg:flex lg:space-x-8'> 
              <div className='w-screen overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden lg:w-auto'>
                <SalesChannel selectedYear={selectedYear}/>
              </div>
              <div className='w-screen overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden lg:w-auto'>
                <ProjectScope projectHours={projectHours}/>
              </div>
            </div>
              <div className='w-screen overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden lg:w-auto'>

                <HoursOverview projectHours={projectHours}/> 

              </div>
          </div>
      </div>
    </div>
  )
}



