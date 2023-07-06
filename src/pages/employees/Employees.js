import React ,{useState,useEffect, useRef} from 'react';
import Sidebar from '../../components/Sidebar'
import api from '../../Api';
import { getAccessToken } from '../../Api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Myimg from '../../image/Upload_picture.png';



export default function Employees(){
   const [selected, setSelected] = useState(null);
   const [rows, setRows]=useState(10);
   const [pages, setPages]=useState(0);
   const [employees, setEmployees]=useState([]);
   const [currentPage, setCurrentPage]=useState(1);
   const [emptySearch, setEmptySearch]=useState(false);
   const [currentEmployee, setCurrentEmployee]=useState()
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

    const range = 3; 
const halfRange = Math.floor(range / 2);

let startPage = Math.max(currentPage - halfRange, 1);
let endPage = Math.min(startPage + range - 1, pages);
  
  
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
  
    const fetchEmployees=()=>{
      api.get(`/api/employees/${rows}/?page=${currentPage}`, {
        headers: {
          'Authorization': `Bearer ${getAccessToken()}`
        }
      })
      .then(response => {console.log(response.data); setEmployees(response.data)})
      .catch(error => console.error(error));
    }
     useEffect(()=>{
      fetchEmployees();
 }, [rows,currentPage]);

 if (endPage - startPage + 1 < range) {
  startPage = Math.max(endPage - range + 1, 1);
}
    
      useEffect(()=>{
        let num=0;
        num=employees?.count/rows;
        if(num%2==0){
          setPages(Math.floor(num))
        }else{
          setPages(Math.floor(num)+1);
        }
      },[employees])

      const addCurrentEmployee=(id)=>{
        let temp=employees?.results.find((emp)=>emp.id===id);
        setCurrentEmployee(temp);
        console.log(temp)
      }

      const handleDeleteEmployee=()=>{
        api.delete(`/api/delete_employee/${currentEmployee.id}/`)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
      }


const [isOpen, setIsOpen] = useState(false);

const toggleModal = () => {
  setIsOpen(!isOpen);
};

const [isOpenEdit, setIsOpenEdit] = useState(false);

const toggleModalEdit = () => {
  setIsOpenEdit(!isOpenEdit);
};

const closetoggleModalEdit = () => {
  setIsOpenEdit(false);
};


//datapicker
const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);

//dropdown with checkboxbtn
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

document.addEventListener('click', function(event) {
  // Check if the clicked element is inside the dropdown
  if (!event.target.closest('#dropdownDefaultCheckbox')) {
    // Prevent the default behavior of closing the dropdown
    event.preventDefault();
  }
});

 //dropdown with radio btn
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


  //dropdown of valutes
  const [isDropdownOpenV, setIsDropdownOpenV] = useState(false); 
  const [selectedValute, setSelectedValute] = useState('BAM')
  const valutes = ['BAM','EUR','INR', 'ISK', 'AUD'];
  
  const handleValuteChange = (valute) => {
    setSelectedValute(valute);
    setIsDropdownOpenV(false); 
  };
  
  const toggleDropdownValute = () => {
    setIsDropdownOpenV((prevState) => !prevState);
  };
  

  //dropdown of part or full time
  const [isDropdownOpenT, setIsDropdownOpenT] = useState(false); 
  const [selectedTime, setSelectedTime] = useState('Part time')
  const times = ['Part time','Full time'];
  
  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setIsDropdownOpenT(false); 
  };
  
  const toggleDropdownTime = () => {
    setIsDropdownOpenT((prevState) => !prevState);
  };
  

  //delete btn
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
         <h1 className='text-3xl text-color10 font-bold font-face-b'>Employees</h1> 
         <button  onClick={toggleModal} data-modal-target="addnewproject-modal" data-modal-toggle="addnewproject-modal" className="bg-customColor hover:bg-gray-500 text-white h-10 w-44 mt-4 lg:mt-0 md:mt-0 md:mr-0 mr-4 text-base font-link font-semibold rounded-md"  type="button">
            Add new Employee
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
                        <h1 className='my-3 mx-6 text-[21px] font-face-b font-bold text-primary'>Add New Employee</h1>
                      </div>

                      <div className='bg-white h-815 lg:w-448 rounded-lg justify-center p-6 space-y-6'>
                      <div className="mb-4 w-400 h-66">
                          <label className="block text-primary font-face-m font-medium text-base  mb-2" >
                            First Name
                          </label>
                            <input
                              className="appearance-none font-face-r font-normal text-sm w-400 h-10 border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              name="username"
                              type=""
                              placeholder="First Name"
                            
                            />
                        </div>

                        <div className="mb-4 w-400 h-66">
                          <label className="block text-primary font-face-m font-medium text-base  mb-2">
                            Last Name
                          </label>
                            <input
                              className="appearance-none font-face-r font-normal text-sm w-400 h-10 border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              name="username"
                              type=""
                              placeholder="Last Name"
                            
                            />
                        </div>
                     
                      <div className="mb-4 w-400 h-130">
                        <label className="block text-primary font-face-m font-medium text-base w-400 h-22  mb-2">
                          Profile Image
                        </label>
                        <div className='w-104 h-104 bg-color36 border  border-color17 border-dotted rounded-md '>
                            <div className='flex flex-col items-center space-y-2 h-full justify-center'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.46838 1.37573H6.53088C6.44755 1.37573 6.40588 1.4174 6.40588 1.50073V6.40698H1.75C1.66667 6.40698 1.625 6.44865 1.625 6.53198V7.46948C1.625 7.55282 1.66667 7.59448 1.75 7.59448H6.40588V12.5007C6.40588 12.5841 6.44755 12.6257 6.53088 12.6257H7.46838C7.55172 12.6257 7.59338 12.5841 7.59338 12.5007V7.59448H12.25C12.3333 7.59448 12.375 7.55282 12.375 7.46948V6.53198C12.375 6.44865 12.3333 6.40698 12.25 6.40698H7.59338V1.50073C7.59338 1.4174 7.55172 1.37573 7.46838 1.37573Z" fill="#142E2B"/>
                            </svg>
                            <span>Upload</span>
                            </div>
                        </div>
                     </div>
                        
                        
    <div>
    <label className="block text-primary font-face-m font-medium text-base  mb-2">
                           Department
                          </label>
      {/* Dropdown button */}
      <button
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="appearance-none font-face-r font-normal text-sm border  border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline  pl-3 w-400 h-10   inline-flex items-center "
        type="button"
      >
        <div className='flex justify-between w-full items-center'>
                    <span className='font-face-r font-normal text-sm text-color18'>Select employee department</span>
       
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="#6C6D75"/>
        </svg>
        </div>
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdownDefaultCheckbox"
        className="z-10 w-400  h-32 bg-white divide-y divide-gray-100 border border-color20 border-1 rounded-md shadow dark:bg-gray-700 dark:divide-gray-600"
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
               Management
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
                Administration
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
                Design
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
                Development
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>


   
                      <div className='flex items-center'>
                        <div className="w-400 h-66">
                          <label className="block text-primary font-face-m font-medium text-base  mb-2" >
                            Monthly Salary
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
                    className="font-face-r font-normal text-sm px-3 mt-9 text-center text-color18 flex items-center justify-center border border-color20 h-10 w-84 rounded-md"
                    type="button"
                    onClick={toggleDropdownValute} 
                  >
                   <div className='ml-1 flex justify-between w-full items-center'>
                    <span className='font-face-r font-normal text-sm text-color18'>{selectedValute}</span>
                     
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="#6C6D75"/>
                    </svg>
                    </div>
                  </button>

                  {isDropdownOpenV && (
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

                       

                        
    <div>
    <label className="block text-primary font-face-m font-medium text-base  mb-2">
                           Tech Stack
                          </label>
      {/* Dropdown button */}
      <button
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="appearance-none font-face-r font-normal text-sm border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline  pl-3 w-400 h-10   inline-flex items-center "
        type="button"
      >
        <div className='flex justify-between w-full items-center'>
                    <span className='font-face-r font-normal text-sm text-color18'>Select stack</span>
        
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
               Full Stack
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
                Front End
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
                Back End
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
                N/A
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
                      </div>
                      </div> 
                      
                      <div className='w-496 h-88 bg-white items-center justify-end flex space-x-4 pr-6'>
                        
                      <button class="relative  items-center justify-center  w-85 h-10 border border-customColor overflow-hidden  rounded-md " onClick={closeModal}>
                      <span class="relative text-base font-link font-semibold  text-customColor  ">
                          Cancel
                      </span>
                    </button>
                    <button type="button" class=" bg-customColor text-base font-link font-semibold h-10 w-141 text-white  rounded-md text-base ">Add Employee</button>
                    </div>
                      </div>

                  </div>
              
              )}
            </div>
                  
          
          
          
          
          
          
          
          <div className='block space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:justify-between lg:items-center'> 
            <div className='flex  mb-3 '>
              <div className={`flex items-center justify-center text-center py-5  lg:py-0 lg:px-0 w-full border-y border-l  border-color11 h-10 lg:w-127 rounded-l-md lg:rounded-l-md cursor-pointer ' ${
                selected === 1 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(1)}
                    >
                    <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                        selected === 1 ? 'color' : ''}`}
                          onClick={() => handleItemClick(1)}>All Employees
                    </span>
              </div>

              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0 w-full border-t border-r border-b border-l  lg:rounded-none h-10 lg:w-82 cursor-pointer ' ${
                selected === 2 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(2)}
                    >
                    <span className ={`text-sm font-normal text-center text-color12 font-link cursor-pointer ${
                        selected === 2 ? 'color' : ''}`}
                          onClick={() => handleItemClick(2)}>Current
                    </span>
              </div>

              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0  w-full rounded-r-md lg:border-t border-y border-r  lg:rounded-r-md  h-10 lg:w-62 cursor-pointer' ${
                selected === 4 ? 'bg-color14' : ''}`}
                   onClick={() => handleItemClick(4)}
                    >
                      <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                          selected === 4 ? 'color' : ''}`}
                            onClick={() => handleItemClick(4)}>Past
                      </span>
              </div>
            </div>
          </div>
           
          <div className='w-screen md:w-full overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden '>
               <div className='border w-1050  h-72  flex  items-center justify-between rounded-t-md'>
                 <div className='ml-4 flex h-30 w-199 justify-between'>
                  <span className='text-lg w-113 h-26 font-medium font-face-m'>All Employees</span>
                     <span className='text-sm py-1 font-medium w-70 bg-color14 text-center rounded-md font-face-m text-color13'>{employees?.count} total </span>
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
                        <div className='w-174.8 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>First Name</span>
                        </div>
                        <div className='w-174.8 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Last Name</span>
                        </div>
                        <div className='w-174.8 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Department</span>
                        </div>
                        <div className='w-174.8 h-10 py-1.5 pl-6 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Monthly Salary (BAM)</span>
                        </div>
                        <div className='w-174.8 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Tech Stack</span>
                        </div>
                        <div className='w-176 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Actions</span>
                        </div>
                     </div>
                     {/* Div s informacijama i popup-om */}
                   {/*{employees.results?.map((employee,index)=>(
                   <div className='flex flex-row h-60 border-x border-b items-center' onClick={()=>{handleClick(); addCurrentEmployee(employee.id)}}>
                        <div className='w-174.4 l h-10 py-1.5 pl-4'>
                          <span className='text-sm font-normal font-face-r text-color18'>{employee?.first_name}</span>
                        </div>
                        <div className='w-174.4 h-10 py-1.5 pl-4'>
                          <span className='text-sm font-normal font-face-r text-color18'>{employee?.last_name}</span>
                        </div>
                        <div className='w-174.4 h-10 py-1.5 pl-4'>
                          <span className='text-sm font-normal font-face-r text-color18'>{employee?.department}</span>
                        </div>   
                        <div className='w-174.4 h-10 py-1.5 pl-6'>
                          <span className='text-sm font-normal font-face-r text-color18'>{employee?.monthly_salary}</span>
                        </div>
                        <div className='w-174.4 h-10 py-1.5 pl-5'>
                          <span className='text-sm font-normal font-face-r text-color18'>{employee?.tech_stack}</span>
                   </div>*/}

                    <div className='flex flex-row h-60 border-x border-b items-center' onClick={handleClick}>
                        <div className='w-174.4 l h-10 py-1.5 pl-4'>
                          <span className='text-sm font-normal font-face-r text-color18'>Cale</span>
                        </div>
                        <div className='w-174.4 h-10 py-1.5 pl-4'>
                          <span className='text-sm font-normal font-face-r text-color18'>Barton</span>
                        </div>
                        <div className='w-174.4 h-10 py-1.5 pl-4'>
                          <span className='text-sm font-normal font-face-r text-color18'>Management</span>
                        </div>   
                        <div className='w-174.4 h-10 py-1.5 pl-6'>
                          <span className='text-sm font-normal font-face-r text-color18'>9300.00</span>
                        </div>
                        <div className='w-174.4 h-10 py-1.5 pl-5'>
                          <span className='text-sm font-normal font-face-r text-color18'>N/A</span>
                   </div>


                        <div className='w-176 h-10 py-1.5 pl-5 flex items-center'>
                          <div className='flex w-63 h-22 items-center space-x-2 ml-1'>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_899_353)">
                              <path d="M3.02656 10.7486C3.05781 10.7486 3.08906 10.7454 3.12031 10.7408L5.74844 10.2798C5.77969 10.2736 5.80938 10.2595 5.83125 10.2361L12.4547 3.61263C12.4692 3.59817 12.4807 3.581 12.4885 3.5621C12.4963 3.5432 12.5004 3.52294 12.5004 3.50247C12.5004 3.48201 12.4963 3.46175 12.4885 3.44284C12.4807 3.42394 12.4692 3.40677 12.4547 3.39232L9.85781 0.793878C9.82813 0.764191 9.78906 0.748566 9.74688 0.748566C9.70469 0.748566 9.66563 0.764191 9.63594 0.793878L3.0125 7.41732C2.98906 7.44075 2.975 7.46888 2.96875 7.50013L2.50781 10.1283C2.49261 10.212 2.49804 10.2981 2.52364 10.3792C2.54923 10.4604 2.59421 10.534 2.65469 10.5939C2.75781 10.6939 2.8875 10.7486 3.02656 10.7486ZM4.07969 8.02357L9.74688 2.35794L10.8922 3.50325L5.225 9.16888L3.83594 9.41419L4.07969 8.02357ZM12.75 12.0611H1.25C0.973438 12.0611 0.75 12.2845 0.75 12.5611V13.1236C0.75 13.1923 0.80625 13.2486 0.875 13.2486H13.125C13.1938 13.2486 13.25 13.1923 13.25 13.1236V12.5611C13.25 12.2845 13.0266 12.0611 12.75 12.0611Z" fill="#6C6D75"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_899_353">
                              <rect width="14" height="14" fill="white"/>
                              </clipPath>
                              </defs>
                           </svg>
                           <span className='font-normal font-face-r text-sm text-color18'>Edit</span>
                           
                          </div>
                          <div className='h-3 w-0 border mr-1'></div>
                          <div className='flex ml-2 w-81 h-22 items-center space-x-2'>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.625 1.87357H4.5C4.56875 1.87357 4.625 1.81732 4.625 1.74857V1.87357H9.375V1.74857C9.375 1.81732 9.43125 1.87357 9.5 1.87357H9.375V2.99857H10.5V1.74857C10.5 1.197 10.0516 0.748566 9.5 0.748566H4.5C3.94844 0.748566 3.5 1.197 3.5 1.74857V2.99857H4.625V1.87357ZM12.5 2.99857H1.5C1.22344 2.99857 1 3.222 1 3.49857V3.99857C1 4.06732 1.05625 4.12357 1.125 4.12357H2.06875L2.45469 12.2954C2.47969 12.8283 2.92031 13.2486 3.45313 13.2486H10.5469C11.0813 13.2486 11.5203 12.8298 11.5453 12.2954L11.9313 4.12357H12.875C12.9438 4.12357 13 4.06732 13 3.99857V3.49857C13 3.222 12.7766 2.99857 12.5 2.99857ZM10.4266 12.1236H3.57344L3.19531 4.12357H10.8047L10.4266 12.1236Z" fill="#6C6D75"/>
                          </svg>
                           <span className='font-normal font-face-r text-sm text-color18'>Delete</span>                         
                          </div>
                        </div>

                        {showModal && (
                         
                              <div className="fixed top-0 left-0 right-0 z-50 flex items-center h-full max-h-1440  overflow-y-auto  justify-end bg-black bg-opacity-10"  onClick={() => setShowModal(false)}>
                  <div className="relative bg-color7 shadow-lg w-496 h-full overflow-y-auto overflow-x-hidden">
                     <div className='flex items-center mt-27 ml-29 mb-4'>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 8L10 3L10.7 3.7L6.4 8L10.7 12.3L10 13L5 8Z" fill="#142E2B"/>
                      </svg>
                      <span className='text-base font-semibold font-link text-color30'>Back</span>
                     </div>
                     <div className='flex flex-col space-y-4 px-6 mb-20 '>
                      <div className='bg-white h-14 w-448 h-32 rounded-lg items-center'> 
                        <div className="flex m-6 ">
                        <img src={Myimg} alt="My Image" className='h-20 w-20' />
                        <div className='m-4'>
                          <h1 className='font-face-b font-bold text-primary text-21'>{currentEmployee?.first_name} {currentEmployee?.last_name}</h1>
                          <span className='font-face-r font-normal text-base text-color18'>{currentEmployee?.department}</span>
                        </div>
                        </div>
                      </div>

                      <div className='bg-white h-177 w-448 rounded-lg justify-center p-6 grid grid-cols-1 divide-y'>
                      <div className="mb-1 w-400 h-12 mb-4">
                          <label className="block w-400 h-6 text-primary font-face-m font-medium text-base" >
                            Monthly Salary (BAM)
                          </label>
                            <span className='block w-400 h-6 text-color18 font-face-r font-normal text-base'>{currentEmployee?.monthly_salary}</span>
                        </div>

                        <div className="w-400 h-36  mb-4">
                          <label className="block w-400 h-6 mt-4 text-primary font-face-m font-medium text-base">
                            Tech Stack
                          </label>
                          <span className='block w-400 h-6 text-color18 font-face-r font-normal text-base'>{currentEmployee?.tech_stack}</span>
                        </div>
                        
                        
                        

                      </div>

                      <div className='bg-white h-52 w-448 rounded-lg justify-center  '>
                      <div className='m-6'>
                      <div className=" w-400 h-12">
                          <span className='block w-400 h-6 text-primary font-face-m font-medium text-base'>Assigned to projects</span>
                        </div>
                    
                        <div className='flex w-400 h-10 justify-between items-center -mt-5  border-b'>
                            <span className='text-sm font-normal text-color16 font-face-r'>Gutkowski LLC</span>
                             <div className='w-68 h-4 bg-color8 rounded-xl text-center font-face-r font-normal text-xs text-white'>
                              Full time
                             </div>
                        </div>


                        <div className='flex w-400 h-10  justify-between items-center border-b'>
                            <span className='text-sm font-normal text-color16 font-face-r'>Gutkowski LLC</span>
                             <div className='w-68 h-4 bg-color8 rounded-xl text-center font-face-r font-normal text-xs text-white'>
                              Full time
                             </div>
                        </div>

                        <div className='flex w-400 h-10  justify-between items-center -'>
                            <span className='text-sm font-normal text-color16 font-face-r'>Gutkowski LLC</span>
                             <div className='w-68 h-4 bg-color37 rounded-xl text-center font-face-r font-normal text-xs text-white'>
                              Part time
                             </div>
                        </div>
                        </div>
                         

                      </div>
                      </div> 
                      
                      <div className='w-496 h-88 bg-white md:mt-29 items-center justify-end flex space-x-4 pr-2'>
                        
                      <div>
      <button
        className="relative items-center justify-center w-159 h-10 border border-color34 overflow-hidden rounded-md"
        onClick={openModal}
      >
        <span className="relative text-base font-link font-semibold text-color34">
          Delete Employee
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative h-184 w-692 bg-white p-8 rounded-md">
            <div className='flex space-x-4 mb-4 -ml-2 h-72 w-336'>
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
              <h2 className="text-base font-bold font-face-b text-color35 w-336">Are you sure you want to delete Cale Barton?</h2>
            <p className="text-color35 font-face-r font-normal text-sm">This will permanently delete Cale Barton and all associated data. You cannot undo this action.</p>
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
                onClick={()=>{closeModal(); handleDeleteEmployee()}}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
                      <button onClick={toggleModalEdit}  type="button" class=" bg-customColor text-base font-link font-semibold h-10 w-139 text-white  rounded-md text-base ">
                        Edit Employee
                      </button>
 {/* Edit popup */}
                      <div>
              {isOpenEdit && (
                <div className="fixed top-0 left-0 right-0 z-50 flex items-center h-full max-h-1024  overflow-y-auto  justify-end ">
                  <div className="relative bg-color7 shadow-lg w-496 h-full overflow-y-auto overflow-x-hidden">
                     <div className='flex items-center mt-27 ml-29 mb-4'>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 8L10 3L10.7 3.7L6.4 8L10.7 12.3L10 13L5 8Z" fill="#142E2B"/>
                      </svg>
                      <span className='text-base font-semibold font-link text-color30'>Back</span>
                     </div>

                     <div className='flex flex-col space-y-4 px-6 mb-20'>
                      <div className='bg-white h-14 w-448 rounded-lg'> 
                        <h1 className='my-3 mx-6 text-[21px] font-face-b font-bold text-primary'>Edit Employee</h1>
                      </div>

                      <div className='bg-white h-815 lg:w-448 rounded-lg justify-center p-6 space-y-6'>
                      <div className="mb-4 w-400 h-66">
                          <label className="block text-primary font-face-m font-medium text-base  mb-2" >
                            First Name
                          </label>
                            <input
                              className="appearance-none font-face-r font-normal text-sm w-400 h-10 border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              name="username"
                              type=""
                              placeholder="Cale"
                            
                            />
                        </div>

                        <div className="mb-4 w-400 h-66">
                          <label className="block text-primary font-face-m font-medium text-base  mb-2">
                            Last Name
                          </label>
                            <input
                              className="appearance-none font-face-r font-normal text-sm w-400 h-10 border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              name="username"
                              type=""
                              placeholder="Barton"
                            
                            />
                        </div>
                     
                      <div className="mb-4 w-400 h-130">
                        <label className="block text-primary font-face-m font-medium text-base w-400 h-22  mb-2">
                          Profile Image
                        </label>
                        <div className='w-104 h-104 bg-color36 border  border-color17 border-dotted rounded-md '>
                            <div className='flex flex-col items-center space-y-2 h-full justify-center'>
                            <img src={Myimg} alt="My Image" className='w-104 h-104' />
                            </div>
                        </div>
                     </div>
                        
                        
    <div>
    <label className="block text-primary font-face-m font-medium text-base  mb-2">
                           Department
                          </label>
      {/* Dropdown button */}
      <button
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="appearance-none font-face-r font-normal text-sm border  border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline  pl-3 w-400 h-10   inline-flex items-center "
        type="button"
      >
         <div className='flex justify-between w-full items-center'>
        <span className='font-face-r font-normal text-sm text-color18'>Management</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="#6C6D75"/>
        </svg>
        </div>
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdownDefaultCheckbox"
        className="z-10 w-400 h-32 bg-white divide-y divide-gray-100 border border-color20 border-1 rounded-md shadow dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul className="p-3 space-y-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
          <li>
            <div className="flex items-center">
            <input
                checked
                id="checkbox-item-1"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor="checkbox-item-1" className="ml-2 text-sm font-normal text-color18 font-face-r">
               Management
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
                Administration
              </label>
            </div>
            
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-2"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor="checkbox-item-3" className="ml-2 text-sm font-normal text-color18 font-face-r">
                Design
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
              <label htmlFor="checkbox-item-2" className="ml-2 text-sm font-normal text-color18 font-face-r">
                Development
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>


   
                      <div className='flex items-center'>
                        <div className="w-400 h-66">
                          <label className="block text-primary font-face-m font-medium text-base  mb-2" >
                            Monthly Salary
                          </label>
                            <input
                              className="appearance-none font-face-r font-normal text-sm w-308 h-10 border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              name="username"
                              type=""
                              placeholder="9300.00"
                            />
                        </div>

                        <div className='relative'>
                          <button
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="dropdown"
                            className="font-face-r font-normal text-sm px-3 mt-9 text-center text-color18 flex items-center border border-color20 h-10 w-84 rounded-md"
                            type="button"
                            onClick={toggleDropdownValute} 
                          >
                            <div className='ml-1 flex justify-between w-full items-center'>
                              <span className='font-face-r font-normal text-sm text-color18'>{selectedValute}</span>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="#6C6D75"/>
                              </svg>
                            </div>
                          </button>

                          {isDropdownOpenV && (
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

                       

                        
    <div>
    <label className="block text-primary font-face-m font-medium text-base  mb-2">
                           Tech Stack
                          </label>
      {/* Dropdown button */}
      <button
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="appearance-none font-face-r font-normal text-sm border border-color20 border-1 rounded-md  py-2 px-3 text-secondary placeholder-color18 leading-tight focus:outline-none focus:shadow-outline  pl-3 w-400 h-10   inline-flex items-center "
        type="button"
      >
        <div className='flex justify-between w-full items-center'>
          <span className='font-face-r font-normal text-sm text-color18'>N/A</span>
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
               Full Stack
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
                Front End
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
                Back End
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
                N/A
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
                      </div>
                      </div> 
                      
                      <div className='w-496 h-88 bg-white items-center justify-end flex space-x-4 pr-6'>
                        
                      <button class="relative  items-center justify-center  w-85 h-10 border border-customColor overflow-hidden  rounded-md " onClick={closetoggleModalEdit}>
                      <span class="relative text-base font-link font-semibold  text-customColor  ">
                          Cancel
                      </span>
                    </button>
                    <button type="button" class=" bg-customColor text-base font-link font-semibold h-10 w-90 text-white  rounded-md text-base ">
                      Submit
                    </button>
                    </div>
                      </div>

                  </div>
              
              )}
            </div>
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
                  <span className='text-color21 text-sm font-link-os'>{((currentPage-1)*rows)+1} - {rows*currentPage>employees.count ? employees.count : rows*currentPage} of {employees.count} Employees</span>
                </div>
            </div>
            <div className='flex w-386 h-8 space-x-2'>
            <button
      disabled={employees.previous == null}
      onClick={() => setCurrentPage(currentPage - 1)}
      className="inline-flex items-center justify-center w-59 px-2 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27 hover:border-color28">Previous</button>
              {pages>3 ?
              <>
                  {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
              const pageNumber = startPage + index;
              return (
                <a
                  onClick={() => setCurrentPage(pageNumber)}
                  href="#"
                  className={`inline-flex items-center justify-center w-8 h-full text-sm font-link-os ${
                    pageNumber === currentPage
                      ? 'text-color27 bg-color26 border-color28 hover:text-color27 hover:bg-color26 hover:border-color28'
                      : 'text-[rgba(0,0,0,0.45)] bg-white border border-color25 hover:bg-color26 hover:text-color27 hover:border-color28'
                  }`}
                >
                  {pageNumber}
                </a>
              );
            })}
              {endPage < pages && ( 
                <>
                  <p>...</p>
                  <a
                    onClick={() => setCurrentPage(pages)}
                    href="#"
                    className={`inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28`}>
                    {pages}
                  </a>
                </>
              )}
              <button
                disabled={employees.next == null}
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`inline-flex items-center justify-center w-49 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28`}>Next</button>
              </>
              :
              <>
              <div className="flex w-272 h-full space-x-2">
              {pages <= 3 ? (
              <>
                {Array.from({ length: pages }, (_, index) => {
                  const pageNumber = index + 1;
                  return (
                  <a
                  onClick={() => setCurrentPage(pageNumber)}
                  href="#"
                  className={`inline-flex items-center justify-center w-8 h-full text-sm font-link-os ${
                    pageNumber === currentPage
                      ? 'text-color27 bg-color26 border-color28 hover:text-color27 hover:bg-color26 hover:border-color28'
                      : 'text-[rgba(0,0,0,0.45)] bg-white border border-color25 hover:bg-color26 hover:text-color27 hover:border-color28'
                  }`}>
                  {pageNumber}
                </a>
              );
            })}
          </>
  ) : (
    <>
      <a
        onClick={() => setCurrentPage(currentPage)}
        href="#"
        className="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27 hover:border-color28">{currentPage}</a>
      <a
        onClick={() => setCurrentPage(currentPage + 1)}
        href="#"
        className="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27 hover:border-color28">{currentPage + 1}</a>
      <a
        onClick={() => setCurrentPage(currentPage + 2)}
        href="#"
        className="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27 hover:border-color28">{currentPage + 2}</a>
        </>
      )}
      </div>
      <button
      disabled={employees.next == null}
      onClick={() => setCurrentPage(currentPage + 1)}
      className="inline-flex items-center justify-center w-49 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27 hover:border-color28">Next</button></>}
            </div>
          </div> 
       </div>
    </div>
  )
}
