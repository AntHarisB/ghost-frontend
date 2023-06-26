import React ,{useState,useEffect, useRef} from 'react';
import Sidebar from '../../components/Sidebar'
import api from '../../Api';
import { getAccessToken } from '../../Api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function Projects(){
   const [selected, setSelected] = useState(null);
   const [rows, setRows]=useState(10);
   const [pages, setPages]=useState(0);
   const [projects, setProjects]=useState([])
   const [filteredProjects, setFilteredProjects] = useState([]);
   const handleItemClick = (item) => {
      if (selected === item) {
        setSelected(null);
      } else {
        setSelected(item); 
      }
    };

    const [selectedNumber, setSelectedNumber] = useState('');

    const handleChange = (e) => {
      setSelectedNumber(e.target.value);
      console.log('Odabran broj:', e.target.value);
    };
  
  
    const [selectedValueNum, setSelectedValueNum] = useState('10');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  
    const numbers = ['1','2','3', '4', '5','6','7','8','9','10'];
  
    const handleYearChange = (number) => {
      setSelectedValueNum(number);
      setIsDropdownOpen(false); 
    };
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState);
    };
  
     useEffect(()=>{
      api.get(`http://127.0.0.1:8000/api/projects/`, {
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`
      }
      })
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
 }, []);
    
      useEffect(()=>{
        let num=0;
        num=projects[0]?.total_projects/rows;
        if(num%2==0){
          setPages(Math.floor(num))
        }else{
          setPages(Math.floor(num)+1);
        }
      },[projects])


const [isOpen, setIsOpen] = useState(false);

const toggleModal = () => {
  setIsOpen(!isOpen);
};

const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);
useEffect(() => {
  const dropdownToggleButton = document.getElementById('dropdownCheckboxButton');
  const dropdownMenu = document.getElementById('dropdownDefaultCheckbox');

  if (dropdownToggleButton && dropdownMenu) {
    const handleClickOutside = (event) => {
      if (!dropdownMenu.contains(event.target) && !dropdownToggleButton.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
      }
    };

    const handleToggleDropdown = () => {
      dropdownMenu.classList.toggle('hidden');
    };

    dropdownToggleButton.addEventListener('click', handleToggleDropdown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      dropdownToggleButton.removeEventListener('click', handleToggleDropdown);
      document.removeEventListener('click', handleClickOutside);
    };
  }
}, []);


const [selectedOption, setSelectedOption] = useState('');

useEffect(() => {
  const dropdownToggleButton = document.getElementById('dropdownRadioButtonButton');
  const dropdownMenu = document.getElementById('dropdownDefaultRadioButton');

  if (dropdownToggleButton && dropdownMenu) {
    const handleClickOutside = (event) => {
      if (!dropdownMenu.contains(event.target) && !dropdownToggleButton.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
      }
    };

    const handleToggleDropdown = () => {
      dropdownMenu.classList.toggle('hidden');
    };

    dropdownToggleButton.addEventListener('click', handleToggleDropdown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      dropdownToggleButton.removeEventListener('click', handleToggleDropdown);
      document.removeEventListener('click', handleClickOutside);
    };
  }
}, []);

const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};

  const [selectedValute, setSelectedValute] = useState('USD')
  const valutes = ['BAM','EUR','INR', 'ISK', 'AUD'];
  
  const handleValuteChange = (valute) => {
    setSelectedValute(valute);
    setIsDropdownOpen(false); 
  };
  
  const toggleDropdownValute = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  
  const [selectedTime, setSelectedTime] = useState('Part time')
  const times = ['Part time','Full time'];
  
  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setIsDropdownOpen(false); 
  };
  
  const toggleDropdownTime = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDeleteProject = () => {
    console.log('Brisanje projekta');
    closeModal();
  };

   return(
   <div className='flex h-full'>
      <div className='basis-[12% h-984'>
        <Sidebar />
      </div>
      <div className='basis-[88%] flex flex-col space-y-5 md:space-y-5 pb-5 pt-14 px-3 lg:py-8 lg:space-y-5 lg:px-11 lg:overflow-x-hidden md:overflow-x-hidden'>
        <div className='lg:flex md:flex -mb-2 lg:justify-between md:justify-between'>
         <h1 className='text-3xl text-color10 font-bold font-face-b'>Projects</h1> 
         <button  onClick={toggleModal} data-modal-target="addnewproject-modal" data-modal-toggle="addnewproject-modal" className="bg-customColor hover:bg-gray-500 text-white h-10 w-44 mt-4 lg:mt-0 md:mt-0 md:mr-0 mr-4 text-base font-link font-semibold rounded-md"  type="button">
            Create new project
         </button>
        </div>      
                  
        <div>
          {isOpen && (
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center h-full max-h-1024  overflow-y-auto  justify-end bg-black bg-opacity-50">
              <div className="relative bg-color7 shadow-lg w-496 h-full overflow-y-auto overflow-x-hidden">
                <div className='flex items-center mt-27 ml-29 mb-4'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 8L10 3L10.7 3.7L6.4 8L10.7 12.3L10 13L5 8Z" fill="#142E2B"/>
                  </svg>
                  <span className='text-base font-semibold font-link text-color30'>Back</span>
                </div>

                <div className='flex flex-col space-y-4 px-6 mb-20'>
                  <div className='bg-white h-14 w-448 rounded-lg'> 
                      <h1 className='my-3 mx-6 text-[21px] font-face-b font-bold text-primary'>Add New Project</h1>
                  </div>

                  <div className='bg-white h-815 lg:w-448 rounded-lg justify-center p-6 space-y-5'>
                    <div className="mb-4 w-400 h-66">
                       <label className="block text-primary font-face-m font-medium text-base  mb-2" >
                          Name
                       </label>
                       <input
                          className="appearance-none font-face-r font-normal text-sm w-400 h-10 border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          name="username"
                          type=""
                          placeholder="Project name"
                          />
                    </div>

                    <div className="mb-4 w-400 h-66">
                      <label className="block text-primary font-face-m font-medium text-base  mb-2">
                          Description
                      </label>
                      <input
                          className="appearance-none font-face-r font-normal text-sm w-400 h-10 border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          name="username"
                          type=""
                          placeholder="Project description"
                          />
                    </div>
                        <div>
                          <label className="block text-primary font-face-m font-medium text-base  mb-2" >
                              Duration
                          </label>
                          <div date-rangepicker className="flex items-center">
                            <div className="relative">
                              <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                name="start"
                                className="bg-white border border-color20 border-1 px-3 text-color18 font-normal font-face-r text-sm rounded-lg focus:ring-blue-500  block w-179 h-38 "
                                placeholderText="Start date"
                              />
                              <div className="absolute inset-y-0 ml-36 flex items-center  pointer-events-none">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13 2H11V1H10V2H6V1H5V2H3C2.45 2 2 2.45 2 3V13C2 13.55 2.45 14 3 14H13C13.55 14 14 13.55 14 13V3C14 2.45 13.55 2 13 2ZM13 13H3V6H13V13ZM13 5H3V3H5V4H6V3H10V4H11V3H13V5Z" fill="#6C6D75" />
                                </svg>
                              </div>
                            </div>
                            <span className="mx-4 text-black font-normal font-face-r text-lg">to</span>
                            <div className="relative">
                               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                  </div>
                                    <DatePicker
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    name="end"
                                    className="bg-white border border-color20 border-1 px-3 text-color18 font-normal font-face-r text-sm rounded-lg focus:ring-blue-500  block w-179 h-38"
                                    placeholderText="End date"
                                    />
                                  <div className="absolute inset-y-0 ml-36 flex items-center  pointer-events-none">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13 2H11V1H10V2H6V1H5V2H3C2.45 2 2 2.45 2 3V13C2 13.55 2.45 14 3 14H13C13.55 14 14 13.55 14 13V3C14 2.45 13.55 2 13 2ZM13 13H3V6H13V13ZM13 5H3V3H5V4H6V3H10V4H11V3H13V5Z" fill="#6C6D75" />
                                    </svg>
                                  </div>
                            </div>
                          </div>
                        </div>
                        
                        
                        <div>
                          <label className="block text-primary font-face-m font-medium text-base  mb-2">
                            Assign developers
                          </label>
                          {/* Dropdown button */}
                          <button
                            id="dropdownCheckboxButton"
                            data-dropdown-toggle="dropdownDefaultCheckbox"
                            className="appearance-none font-face-r font-normal text-sm w-400 h-10 border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline  pl-3 w-400 h-10  inline-flex items-center "
                            type="button"
                          >
                            Select team members working on this projest
                          <div className='ml-16'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="#6C6D75"/>
                            </svg>
                          </div>
                          </button>

                          {/* Dropdown menu */}
                          <div
                            id="dropdownDefaultCheckbox"
                            className="z-10 hidden w-400  h-32 bg-white divide-y divide-gray-100 border border-color20 border-1 rounded-md shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                            <ul className="p-3 space-y-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                              <li>
                                <div className="flex items-center">
                                  <input
                                    id="checkbox-item-1"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                  />
                                  <label htmlFor="checkbox-item-1" className="ml-2 text-sm font-normal text-color18 font-face-r">
                                    Kristhoper Skiles
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="flex items-center">
                                  <input
                                    checked
                                    id="checkbox-item-2"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                  />
                                  <label htmlFor="checkbox-item-2" className="ml-2 text-sm font-normal text-color18 font-face-r">
                                    Joanne Wunsch
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="flex items-center">
                                  <input
                                    id="checkbox-item-3"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                  />
                                  <label htmlFor="checkbox-item-3" className="ml-2 text-sm font-normal text-color18 font-face-r">
                                    Dawn Parker
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="flex items-center">
                                  <input
                                    id="checkbox-item-3"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                  />
                                  <label htmlFor="checkbox-item-3" className="ml-2 text-sm font-normal text-color18 font-face-r">
                                    Mabel Lueilwitz
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>


                        <div class=" w-400 h-154 grid  grid-cols-1 divide-y">
                          <div className='flex -mt-4 justify-between '>
                            <span className='p-4 text-sm font-normal text-color16 font-face-r'>Gustavo Hayes</span>
                              <div className='flex items-center pr-2 space-x-2'>
                                <div className='relative'>
                                  <button
                                      id="dropdownDefaultButton"
                                      data-dropdown-toggle="dropdown"
                                      className="text-xs px-2 font-normal text-color30 font-face-r   text-center  flex items-center border h-6 w-90 rounded-md"
                                      type="button"
                                      onClick={toggleDropdownTime} 
                                    >
                                    {selectedTime}
                                      <div className='ml-1'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="#6C6D75"/>
                                        </svg>
                                      </div>
                                  </button>

                                  {isDropdownOpen && (
                                    <ul className="absolute left-0  w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                      {times.map((time) => (
                                        <li
                                          key={time}
                                          className={`${
                                          time === selectedTime ? 'bg-color7 font-face-r font-normal text-xs text-color30' : 'text-color30 font-face-r font-normal text-xs border-b border-color17'
                                          } cursor-pointer select-none relative py-2 pl-3 pr-9`}
                                          onClick={() => handleTimeChange(time)}
                                        >
                                        <span className="block truncate">{time}</span>
                                          {time === selectedTime && (
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
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.8095 6.99927L11.9111 2.11021C11.9798 2.02896 11.922 1.90552 11.8158 1.90552H10.5689C10.4954 1.90552 10.4251 1.93833 10.3767 1.99458L6.99388 6.02739L3.61106 1.99458C3.56419 1.93833 3.49388 1.90552 3.41888 1.90552H2.172C2.06575 1.90552 2.00794 2.02896 2.07669 2.11021L6.17825 6.99927L2.07669 11.8883C2.06129 11.9064 2.05141 11.9286 2.04822 11.9521C2.04503 11.9757 2.04867 11.9997 2.05871 12.0212C2.06874 12.0428 2.08475 12.061 2.10483 12.0737C2.12492 12.0865 2.14823 12.0931 2.172 12.093H3.41888C3.49231 12.093 3.56263 12.0602 3.61106 12.004L6.99388 7.97114L10.3767 12.004C10.4236 12.0602 10.4939 12.093 10.5689 12.093H11.8158C11.922 12.093 11.9798 11.9696 11.9111 11.8883L7.8095 6.99927Z" fill="#A30000"/>
                                </svg>
                              </div>
                          </div>
                          
                          <div className='flex justify-between '>
                            <span className='my-4 pl-4  text-sm font-normal text-color16 font-face-r'>Greg Jerde</span>
                              <div className='flex items-center pr-2 space-x-2'>
                                    <div className='relative'>
                                      <button
                                        id="dropdownDefaultButton"
                                        data-dropdown-toggle="dropdown"
                                        className="text-xs px-2 font-normal text-color30 font-face-r   text-center  flex items-center border h-6 w-90 rounded-md"
                                        type="button"
                                        onClick={toggleDropdownTime} 
                                      >
                                        {selectedTime}
                                        <div className='ml-1'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="#6C6D75"/>
                                        </svg>
                                        </div>
                                      </button>

                                      {isDropdownOpen && (
                                        <ul className="absolute left-0  w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                          {times.map((time) => (
                                            <li
                                              key={time}
                                              className={`${
                                              time === selectedTime ? 'bg-color7 font-face-r font-normal text-xs text-color30' : 'text-color30 font-face-r font-normal text-xs border-b border-color17'
                                              } cursor-pointer select-none relative py-2 pl-3 pr-9`}
                                              onClick={() => handleTimeChange(time)}
                                            >
                                              <span className="block truncate">{time}</span>
                                                {time === selectedTime && (
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
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M7.8095 6.99927L11.9111 2.11021C11.9798 2.02896 11.922 1.90552 11.8158 1.90552H10.5689C10.4954 1.90552 10.4251 1.93833 10.3767 1.99458L6.99388 6.02739L3.61106 1.99458C3.56419 1.93833 3.49388 1.90552 3.41888 1.90552H2.172C2.06575 1.90552 2.00794 2.02896 2.07669 2.11021L6.17825 6.99927L2.07669 11.8883C2.06129 11.9064 2.05141 11.9286 2.04822 11.9521C2.04503 11.9757 2.04867 11.9997 2.05871 12.0212C2.06874 12.0428 2.08475 12.061 2.10483 12.0737C2.12492 12.0865 2.14823 12.0931 2.172 12.093H3.41888C3.49231 12.093 3.56263 12.0602 3.61106 12.004L6.99388 7.97114L10.3767 12.004C10.4236 12.0602 10.4939 12.093 10.5689 12.093H11.8158C11.922 12.093 11.9798 11.9696 11.9111 11.8883L7.8095 6.99927Z" fill="#A30000"/>
                                    </svg>
                              </div>
                          </div>

                          <div className='flex justify-between '>
                            <span className='py-4 pl-4 text-sm font-normal text-color16 font-face-r'>Norman Kirlin</span>
                              <div className='flex items-center pr-2 space-x-2'>
                                    <div className='relative'>
                                      <button
                                        id="dropdownDefaultButton"
                                        data-dropdown-toggle="dropdown"
                                        className="text-xs px-2 font-normal text-color30 font-face-r   text-center  flex items-center border h-6 w-90 rounded-md"
                                        type="button"
                                        onClick={toggleDropdownTime} 
                                      >
                                        {selectedTime}
                                        <div className='ml-1'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="#6C6D75"/>
                                        </svg>
                                        </div>
                                      </button>

                                      {isDropdownOpen && (
                                        <ul className="absolute left-0 w-90 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                          {times.map((time) => (
                                            <li
                                              key={time}
                                              className={`${
                                              time === selectedTime ? 'bg-color7 font-face-r font-normal text-xs text-color30' : 'text-color30 font-face-r font-normal text-xs border-b border-color17'
                                              } cursor-pointer select-none relative py-2 pl-3 pr-9`}
                                              onClick={() => handleTimeChange(time)}
                                            >
                                              <span className="block truncate">{time}</span>
                                                {time === selectedTime && (
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
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M7.8095 6.99927L11.9111 2.11021C11.9798 2.02896 11.922 1.90552 11.8158 1.90552H10.5689C10.4954 1.90552 10.4251 1.93833 10.3767 1.99458L6.99388 6.02739L3.61106 1.99458C3.56419 1.93833 3.49388 1.90552 3.41888 1.90552H2.172C2.06575 1.90552 2.00794 2.02896 2.07669 2.11021L6.17825 6.99927L2.07669 11.8883C2.06129 11.9064 2.05141 11.9286 2.04822 11.9521C2.04503 11.9757 2.04867 11.9997 2.05871 12.0212C2.06874 12.0428 2.08475 12.061 2.10483 12.0737C2.12492 12.0865 2.14823 12.0931 2.172 12.093H3.41888C3.49231 12.093 3.56263 12.0602 3.61106 12.004L6.99388 7.97114L10.3767 12.004C10.4236 12.0602 10.4939 12.093 10.5689 12.093H11.8158C11.922 12.093 11.9798 11.9696 11.9111 11.8883L7.8095 6.99927Z" fill="#A30000"/>
                                    </svg>
                              </div>
                          </div> 
                        </div>
                      
                      <div className='flex items-center'>
                        <div className="w-400 h-66">
                          <label className="block text-primary font-face-m font-medium text-base  mb-2" >
                            Hourly Rate
                          </label>
                            <input
                              className="appearance-none font-face-r font-normal text-sm w-308 h-10 border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              name="username"
                              type=""
                              placeholder="Enter the amount"
                            />
                        </div>

                        <div className='relative'>
                          <button
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="dropdown"
                            className="font-face-r font-normal text-sm px-4 mt-9 text-center text-color18 flex items-center border border-color20 h-10 w-84 rounded-md"
                            type="button"
                            onClick={toggleDropdownValute} 
                          >
                            {selectedValute}
                            <div className='ml-2'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="#6C6D75"/>
                            </svg>
                            </div>
                          </button>

                          {isDropdownOpen && (
                            <ul className="absolute left-0  w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                              {valutes.map((valute) => (
                                <li
                                  key={valute}
                                  className={`${
                                  valute === selectedValute ? 'bg-color7 font-face-r font-normal text-sm text-color9' : 'text-color9 font-face-r font-normal text-sm border-b border-color17'
                                  } cursor-pointer select-none relative py-2 pl-3 pr-9`}
                                  onClick={() => handleValuteChange(valute)}
                                >
                                  <span className="block truncate">{valute}</span>
                                    {valute === selectedValute && (
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

                      <div className="mb-4 w-400 h-66">
                        <label className="block text-primary font-face-m font-medium text-base  mb-2" >
                          Project Value (BAM) 
                        </label>
                          <input
                              className="appearance-none font-face-r font-normal text-sm w-400 h-10 border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              name="username"
                              type=""
                              placeholder="Enter the amount in BAM"
                          />
                      </div>
                       

                        
                      <div>
                        <label className="block text-primary font-face-m font-medium text-base  mb-2" >
                            Status
                        </label>
                        {/* Dropdown button */}
                          <button
                              id="dropdownRadioButtonButton"
                              data-dropdown-toggle="dropdownDefaultRadioButton"
                              className="appearance-none font-face-r font-normal text-sm w-400 h-10 border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline  pl-3  w-400 h-10  inline-flex items-center "
                              type="button"
                          >
                            Select project status
                            <div className='ml-56'>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="#6C6D75"/>
                              </svg>
                            </div>
                          </button>

                      {/* Dropdown menu */}
                        <div
                          id="dropdownDefaultRadioButton"
                          className="z-10 hidden w-400 h-32 bg-white divide-y divide-gray-100 border border-color20 border-1 border-t-0 rounded-md shadow dark:bg-gray-700 dark:divide-gray-600"
                        >
                          <ul className="p-3 space-y-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButtonButton">
                            <li>
                              <div className="flex items-center">
                                <input
                                  id="radio-item-1"
                                  type="radio"
                                  name="radioGroup"
                                  value="option1"
                                  checked={selectedOption === 'option1'}
                                  onChange={handleOptionChange}
                                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"
                                />
                                <label htmlFor="radio-item-1" className=" font-face-r font-normal text-sm ml-2 text-color18">
                                  Active
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center">
                                <input
                                  id="radio-item-2"
                                  type="radio"
                                  name="radioGroup"
                                  value="option2"
                                  checked={selectedOption === 'option2'}
                                  onChange={handleOptionChange}
                                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"
                                />
                                <label htmlFor="radio-item-2" className="font-face-r font-normal text-sm ml-2 text-color18">
                                  On hold
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center">
                                <input
                                  id="radio-item-3"
                                  type="radio"
                                  name="radioGroup"
                                  value="option3"
                                  checked={selectedOption === 'option3'}
                                  onChange={handleOptionChange}
                                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"
                                />
                                <label htmlFor="radio-item-3" className="font-face-r font-normal text-sm ml-2 text-color18">
                                  Inactive
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center">
                                <input
                                  id="radio-item-3"
                                  type="radio"
                                  name="radioGroup"
                                  value="option3"
                                  checked={selectedOption === 'option3'}
                                  onChange={handleOptionChange}
                                  className="w-4 h-4 text-blue-600 border-color32 rounded focus:ring-color32 dark:focus:ring-color32 dark:ring-offset-color32 dark:focus:ring-offset-color32 focus:ring-2"
                                />
                                <label htmlFor="radio-item-3" className="font-face-r font-normal text-sm ml-2 text-color18">
                                  Completed
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>


                    </div>
                </div> 
                      
                <div className='w-496 h-88 bg-white items-center justify-end flex space-x-4 pr-6'> 
                  <button class="relative  items-center justify-center  w-85 h-10 border border-customColor overflow-hidden  rounded-md ">
                    <span class="relative text-base font-link font-semibold  text-customColor  ">
                      Cancel
                    </span>
                  </button>
                  <button type="button" class=" bg-customColor text-base font-link font-semibold h-10 w-121 text-white  rounded-md text-base ">Add project</button>
                </div>
              </div>
            </div>
          )}
        </div>
                  

        <div className='block space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:justify-between lg:items-center'> 
          <div className='lg:flex lg:flex-row mb-3 grid grid-cols-2'>
            <div className={`flex items-center justify-center text-center py-5  lg:py-0 lg:px-0 w-full border-y border-l  border-color11 h-10 lg:w-109 rounded-tl-md lg:rounded-l-md cursor-pointer ' ${
              selected === 1 ? 'bg-color14' : ''}`}
                onClick={() => handleItemClick(1)}
              >
                <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                  selected === 1 ? 'color' : ''}`}
                    onClick={() => handleItemClick(1)}>All Projects
                </span>
            </div>
              {console.log(projects)}
              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0  border-t border-r border-b border-l rounded-tr-md lg:rounded-none h-10 lg:w-74 cursor-pointer ' ${
                selected === 2 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(2)}
                    >
                    <span className ={`text-sm font-normal text-center text-color12 font-link cursor-pointer ${
                      selected === 2 ? 'color' : ''}`}
                        onClick={() => handleItemClick(2)}>Active
                    </span>
              </div>

              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0  w-full rounded-bl-lg border-l lg:border-l-0 border-b lg:border-y lg:rounded-none h-10 lg:w-84 cursor-pointer ' ${
                selected === 3 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(3)}
                    >
                    <span className ={`text-sm font-normal text-center text-color12 font-link cursor-pointer ${
                        selected === 3 ? 'color' : ''}`}
                          onClick={() => handleItemClick(3)}>Inactive
                    </span>
              </div>

              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0  w-full rounded-br-md border-l border-r lg:border-t border-b  lg:rounded-r-md  h-10 lg:w-105 cursor-pointer' ${
                selected === 4 ? 'bg-color14' : ''}`}
                   onClick={() => handleItemClick(4)}
                    >
                      <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                          selected === 4 ? 'color' : ''}`}
                            onClick={() => handleItemClick(4)}>Completed
                      </span>
              </div>
          </div>
        </div>
           
        <div className='w-screen md:w-full overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden '>
          <div className='border w-1050  h-70  flex  items-center justify-between rounded-t-md'>
            <div className='pl-4 flex h-30 w-48 justify-between'>
              <span className='text-lg w-90 h-26 font-medium font-face-m'>All Projects</span>
                <span className='text-sm py-1 font-medium w-70 bg-color14 text-center rounded-md font-face-m text-color13'>{projects[0]?.total_projects} total </span>
            </div>
            <div className="pr-4 relative flex items-center">
              <button className="absolute left-0 ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.25 2.25C10.1162 2.25 6.75 5.61621 6.75 9.75C6.75 11.5459 7.37988 13.1924 8.4375 14.4844L2.46094 20.4609L3.53906 21.5391L9.51562 15.5625C10.8076 16.6201 12.4541 17.25 14.25 17.25C18.3838 17.25 21.75 13.8838 21.75 9.75C21.75 5.61621 18.3838 2.25 14.25 2.25ZM14.25 3.75C17.5723 3.75 20.25 6.42773 20.25 9.75C20.25 13.0723 17.5723 15.75 14.25 15.75C10.9277 15.75 8.25 13.0723 8.25 9.75C8.25 6.42773 10.9277 3.75 14.25 3.75Z" fill="#242834"/>
                </svg>

                </button>
                  <input
                     type="text"
                     placeholder="Search"
                     className="w-64 pl-10 pr-4 py-2 border placeholder-color6 border-color17 text-color6 text-sm font-link font-normal rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                     />
            </div>
          </div>  
          <div className='flex flex-col w-1050'>
              <div className='flex flex-row h-10 border-x border-b items-center'>
                <div className='w-150 h-10 py-1.5 pl-4 '>
                    <span className='text-sm font-medium font-face-m text-color18'>Name</span>
                </div>
                <div className='w-150 h-10 py-1.5 pl-4 '>
                    <span className='text-sm font-medium font-face-m text-color18'>Description</span>
                </div>
                <div className='w-150 h-10 py-1.5 pl-4 '>
                    <span className='text-sm font-medium font-face-m text-color18'>Duration (from-to)</span>
                </div>
                <div className='w-150 h-10 py-1.5 pl-6 '>
                    <span className='text-sm font-medium font-face-m text-color18'>Developers</span>
                </div>
                <div className='w-150 h-10 py-1.5 pl-4 '>
                    <span className='text-sm font-medium font-face-m text-color18'>Hourly rate</span>
                </div>
                <div className='w-150 h-10 py-1.5 pl-4 '>
                    <span className='text-sm font-medium font-face-m text-color18'>Project value in BAM</span>
                </div>
                <div className='w-150 h-10 py-1.5 pl-8 '>
                    <span className='text-sm font-medium font-face-m text-color18'>Status</span>
                </div>
              </div>
                {projects.map((project,index)=>(
                  <div key={index} className='flex flex-row h-60 border-x border-b items-center'>
                      <div className='w-157 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>{project.project_name}</span>
                      </div>
                      <div className='w-158.17 h-10 py-1.5 pl-2 '>
                          <span className='text-sm font-medium font-face-m text-color18'>{project.description}</span>
                      </div>
                      <div className='w-158.17 h-10 py-1.5  '>
                          <span className='text-sm font-medium font-face-m text-color18'>{`${project.start}-${project.end}`}</span>
                      </div>
                      <div className='w-101 h-10 items-center py-0.5'>
                        <div class="flex -space-x-4 overflow-hidden">
                           {project.users.slice(0, 3).map((item,index) => (<img key={index} className="inline-block h-35 w-35 rounded-full ring-white" src={item.profile_photo} alt={`${item.first_name} ${item.last_name}`}/>))}
                              {project.users.length>3 ? <a class="flex items-center justify-center mt-0.5 h-8 w-8 text-sm text-white font-semibold font-face-gsb bg-customColor rounded-full" href="#">{project.users.length-3}+</a> : null}
                        </div>
                      </div>
                      <div className='w-158.17 h-10 py-1.5 pl-10 '>
                        <span className='text-sm font-medium font-face-m text-color18'>${project.hourly_price}</span>
                      </div>
                      <div className='w-158.17 h-10 py-1.5 pl-8 '>
                        <span className='text-sm font-medium font-face-m text-color18'>{project.project_value} KM</span>
                      </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span className="flex items-center text-sm font-medium font-face-m text-color18">
                            <span className={project.status=="Active" ? "flex h-1.5 w-1.5 bg-color22 rounded-full mr-1.5 flex-shrink-0" : 
                              project.status=="On hold" ? "flex h-1.5 w-1.5 bg-color23 rounded-full mr-1.5 flex-shrink-0" : 
                              "flex h-1.5 w-1.5 bg-color24 rounded-full mr-1.5 flex-shrink-0" }>
                            </span>{project.status}
                          </span>
                        </div>
                  </div>
                ))}
                    

                {/* Div s informacijama i popup-om */}
                  <div
                      className='flex flex-row h-60 border-x border-b items-center'
                      onClick={handleClick}
                    >
                        <div className='w-157 l h-10 py-1.5 pl-4'>
                          <span className='text-sm font-medium font-face-m text-color18'>HUB</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-2'>
                          <span className='text-sm font-medium font-face-m text-color18'>hgfgdjsfjdjf</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5'>
                          <span className='text-sm font-medium font-face-m text-color18'>456</span>
                        </div>
                        <div className='w-101 h-10 items-center py-0.5'>
                          <div className="flex -space-x-4 overflow-hidden">
                            <a className="flex items-center justify-center mt-0.5 h-8 w-8 text-sm text-white font-semibold font-face-gsb bg-customColor rounded-full" href="#">3+</a>
                          </div>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-10'>
                          <span className='text-sm font-medium font-face-m text-color18'>655</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-8'>
                          <span className='text-sm font-medium font-face-m text-color18'>554324432 KM</span>
                        </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span className="flex items-center text-sm font-medium font-face-m text-color18">
                            <span className="flex h-1.5 w-1.5 bg-color22 rounded-full mr-1.5 flex-shrink-0"></span>
                              Active
                          </span>
                        </div>

                        {showModal && (
                          <div className="fixed top-0 left-0 right-0 z-50 flex items-center h-full max-h-1024  overflow-y-auto  justify-end bg-black bg-opacity-50"  onClick={() => setShowModal(false)}>
                            <div className="relative bg-color7 shadow-lg w-496 h-full overflow-y-auto overflow-x-hidden">
                              <div className='flex items-center mt-27 ml-29 mb-4'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 8L10 3L10.7 3.7L6.4 8L10.7 12.3L10 13L5 8Z" fill="#142E2B"/>
                                </svg>
                                <span className='text-base font-semibold font-link text-color30'>Back</span>
                              </div>

                              <div className='flex flex-col space-y-4 px-6 mb-20 '>
                                <div className='bg-white h-14 w-448 rounded-lg'> 
                                  <h1 className='my-3 mx-6 text-[21px] font-face-b font-bold text-primary'>HUB71</h1>
                                </div>
                                <div className='bg-white h-678 w-448 rounded-lg justify-center p-6 grid grid-cols-1 divide-y'>
                                  <div className="mb-1 w-400 h-12">
                                    <label className="block w-400 h-6 text-primary font-face-m font-medium text-base" >
                                      Name
                                    </label>
                                    <span className='block w-400 h-6 text-color18 font-face-r font-normal text-base'>HUB71</span>
                                  </div>
                                  <div className="w-400 h-36  mb-4">
                                    <label className="block w-400 h-6 mt-4 text-primary font-face-m font-medium text-base">
                                      Description
                                    </label>
                                    <span className='block w-400 h-120 text-color18 font-face-r font-normal text-base'>Rerum amet maxime. Soluta molestiae ipsum quibusdam. In dolor sapiente ratione quidem vel nostrum perferendis repellendus. Sint eaque architecto ut ullam eius totam nihil vel aut. Quo nam possimus quibusdam corporis.</span>
                                  </div>
                                  <div className=" w-400 h-12  mb-4">
                                    <label className="block w-400 h-6 mt-4 text-primary font-face-m font-medium text-base" >
                                      Duration
                                    </label>
                                    <span className='block w-400 h-6 text-color18 font-face-r font-normal text-base'>January 2023 - December 2023</span>
                                  </div>  
                                  <div className=" w-400 h-12 mb-4">
                                    <label className="block w-400 h-6 mt-4 text-primary font-face-m font-medium text-base">
                                      Team members
                                    </label>
                                    <span className='block w-400 h-6 text-color18 font-face-r font-normal text-base'>Gustavo Hayes, Greg Jerde</span>
                                  </div>
                                  <div className="w-400 h-12 mb-4">
                                    <label className="block w-400 h-6 mt-4 text-primary font-face-m font-medium text-base" >
                                      Hourly Rate (USD)
                                    </label>
                                    <span className='block w-400 h-6 text-color18 font-face-r font-normal text-base'>234</span>
                                  </div>
                                  <div className="mb-4 w-400 h-12">
                                    <label className="block w-400 h-6 mt-4 text-primary font-face-m font-medium text-base" >
                                      Project Value (BAM) 
                                    </label>
                                    <span className='block w-400 h-6 text-color18 font-face-r font-normal text-base'>145,900,000.00 KM</span>
                                  </div>                       
                                  <div className="mb-4 w-400 h-12">
                                    <label className="block w-400 h-6 mt-4 text-primary font-face-m font-medium text-base" >
                                      Status
                                    </label>
                                    <span className="flex items-center block w-400 h-6 text-color18 font-face-r font-normal text-base">
                                      <span className="flex h-1.5 w-1.5 bg-color22 rounded-full mr-1.5 flex-shrink-0"></span>
                                        Active
                                    </span>
                                  </div>
                                </div>
                              </div> 
                      
                                <div className='w-496 h-88 bg-white md:mt-29 items-center justify-end flex space-x-4 pr-6'>
                                <div>
                                  <button
                                    className="relative items-center justify-center w-139 h-10 border border-color34 overflow-hidden rounded-md"
                                    onClick={openModal}
                                  >
                                    <span className="relative text-base font-link font-semibold text-color34">
                                      Delete Project
                                    </span>
                                  </button>

                                  {isOpen && (
                                    <div className="fixed inset-0 flex items-center justify-center z-50">
                                      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                                      <div className="relative h-184 w-96 bg-white p-8 rounded-md">
                                        <div className='flex space-x-4 mb-6 -ml-2 h-72 w-336'>
                                          <div className='h-6 w-6'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <g clip-path="url(#clip0_816_5998)">
                                              <path d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM12 21.9643C6.49821 21.9643 2.03571 17.5018 2.03571 12C2.03571 6.49821 6.49821 2.03571 12 2.03571C17.5018 2.03571 21.9643 6.49821 21.9643 12C21.9643 17.5018 17.5018 21.9643 12 21.9643Z" fill="#F1A864"/>
                                              <path d="M10.7139 16.7143C10.7139 17.0553 10.8493 17.3823 11.0904 17.6234C11.3316 17.8645 11.6586 18 11.9996 18C12.3406 18 12.6676 17.8645 12.9087 17.6234C13.1498 17.3823 13.2853 17.0553 13.2853 16.7143C13.2853 16.3733 13.1498 16.0463 12.9087 15.8051C12.6676 15.564 12.3406 15.4286 11.9996 15.4286C11.6586 15.4286 11.3316 15.564 11.0904 15.8051C10.8493 16.0463 10.7139 16.3733 10.7139 16.7143ZM11.3567 13.7143H12.6424C12.7603 13.7143 12.8567 13.6179 12.8567 13.5V6.21429C12.8567 6.09643 12.7603 6 12.6424 6H11.3567C11.2389 6 11.1424 6.09643 11.1424 6.21429V13.5C11.1424 13.6179 11.2389 13.7143 11.3567 13.7143Z" fill="#F1A864"/>
                                              </g>
                                              <defs>
                                              <clipPath id="clip0_816_5998">
                                              <rect width="24" height="24" fill="white"/>
                                              </clipPath>
                                              </defs>
                                            </svg>
                                          </div>

                                          <div className='space-y-1 '>
                                            <h2 className="text-base font-bold font-face-b text-color35">Are you sure you want to delete HUB71?</h2>
                                            <p className="text-color35 font-face-r font-normal text-sm">This will permanently delete HUB71 and all associated data. You cannot undo this action.</p>
                                          </div>
                                        </div>
                      
                                        <div className="flex justify-end">
                                          <button
                                            className="mr-2 h-10 w-125 border border-customColor text-customColor font-link font-semibold text-base rounded-md"
                                            onClick={handleDeleteProject}
                                          >
                                            Don't Delete
                                          </button>
                                          <button
                                            className="w-28 h-10 bg-color34 text-white rounded-md font-link font-semibold text-base"
                                            onClick={closeModal}
                                          >
                                            Delete
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <button type="button" class=" bg-customColor text-base font-link font-semibold h-10 w-119 text-white  rounded-md text-base ">Add project</button>
                              </div>
                            </div>
                          </div>
                        )}
                  </div> 
          </div>
        </div>      


        <div className='h-47 lg:flex lg:justify-between md:flex md:justify-between items-center'>
          <div className='lg:w-530  h-42 flex'>
            <span className='text-sm text-color19 py-2 font-link-os'>Rows per page: </span>
              <div className='px-3 py-1'>
                <div className='relative'>
                  <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="text-sm font-link-os pl-2.5 text-center text-color29 flex items-center border border-color20 h-8 w-54 rounded-md"
                      type="button"
                      onClick={toggleDropdown} 
                    >
                      {selectedValueNum}
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_476_614)">
                        <path d="M8.33203 10.8334L12.4987 15L16.6654 10.8334H8.33203Z" fill="#404B57"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_476_614">
                        <rect width="25" height="25" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                  </button>

                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-[-2.5rem] w-54 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform -translate-y-full">
                      {numbers.map((number) => (
                        <li
                          key={number}
                          className={`${
                          number === selectedValueNum ? 'bg-color7 text-customColor text-sm font-link-os' : 'text-sm   text-gray-500'
                          } cursor-pointer select-none relative py-1 pl-3`}
                          onClick={() => [handleYearChange(number), setRows(number)]}
                          >
                            <span className="block truncate">{number}</span>
                            {number === selectedValueNum && (
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
              <div className='py-1.5 px-4'>
                <span className='text-color21 text-sm font-link-os'>1 - {rows} of {projects[0]?.total_projects} Projects</span>
              </div>
          </div>
          <div className='flex lg:w-386 w-386 h-8 md:mr-0 space-x-2'>
              <div className='flex w-272 h-full space-x-2'>
              {Array.from({ length: pages }, (_, index) => (
                <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">{index+1}
                </a>
              ))}
              </div>
              <a href="#" class="inline-flex items-center justify-center w-49 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">Next
              </a>
              <a href="#" class="inline-flex items-center justify-center w-49 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">Last
              </a>
            </div>
          </div> 
      </div>
   </div>
  )
}
