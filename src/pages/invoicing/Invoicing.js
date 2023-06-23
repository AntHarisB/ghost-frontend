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
   const [projects, setProjects]=useState([])
   const [filteredProjects, setFilteredProjects] = useState([]);
   const handleItemClick = (item) => {
      if (selected === item) {
        setSelected(null);
      } else {
        setSelected(item); 
      }
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
  




  

   return(
   <div className='flex h-full'>
      <div className='basis-[12% h-984'>
        <Sidebar />
      </div>
      <div className='basis-[88%] flex flex-col space-y-5 md:space-y-5 pb-5 pt-14 px-3 lg:py-8 lg:space-y-5 lg:px-11 lg:overflow-x-hidden md:overflow-x-hidden'>
        <div className='lg:flex md:flex -mb-2 lg:justify-between md:justify-between'>
         <h1 className='text-3xl text-color10 font-bold mb-6 font-face-b'>Invoicing</h1> 
         <button className="bg-customColor hover:bg-gray-500 text-white h-10 w-44 mt-4 lg:mt-0 md:mt-0 md:mr-0 mr-4 text-base font-link font-semibold rounded-md"  type="button">
            Create New Invoice
         </button>
        </div>                  
          
          <div className='block space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:justify-between lg:items-center'> 
            <div className='flex  mb-3 '>
              <div className={`flex items-center justify-center text-center py-5  lg:py-0 lg:px-0 w-full border-y border-l  border-color11 h-10 lg:w-110 rounded-l-md lg:rounded-l-md cursor-pointer ' ${
                selected === 1 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(1)}
                    >
                    <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                        selected === 1 ? 'color' : ''}`}
                          onClick={() => handleItemClick(1)}>All Invoices
                    </span>
              </div>
                      {console.log(projects)}
              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0 w-full border-t border-r border-b border-l  lg:rounded-none h-10 lg:w-63 cursor-pointer ' ${
                selected === 2 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(2)}
                    >
                    <span className ={`text-sm font-normal text-center text-color12 font-link cursor-pointer ${
                        selected === 2 ? 'color' : ''}`}
                          onClick={() => handleItemClick(2)}>Sent
                    </span>
              </div>

              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0  w-full rounded-r-md lg:border-t border-y border-r  lg:rounded-r-md  h-10 lg:w-63 cursor-pointer' ${
                selected === 4 ? 'bg-color14' : ''}`}
                   onClick={() => handleItemClick(4)}
                    >
                      <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                          selected === 4 ? 'color' : ''}`}
                            onClick={() => handleItemClick(4)}>Paid
                      </span>
              </div>
            </div>
          </div>
           
          <div className='w-screen md:w-full overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden '>
               <div className='border w-1050  h-72  flex  items-center justify-between rounded-t-md'>
                 <div className='ml-4 flex h-30 w-199 justify-between'>
                  <span className='text-lg w-113 h-26 font-medium font-face-m'>All Invoices</span>
                     <span className='text-sm py-1 font-medium w-70 bg-color14 text-center rounded-md font-face-m text-color13'>45 total </span>
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
                    <div
                        className='flex flex-row h-60 border-x border-b items-center'
                       
                      >
                        <div className='w-174.4 l h-10 py-1.5 pl-4'>
                          <span className='text-sm font-normal font-face-r text-color18'>Zackary</span>
                        </div>
                        <div className='w-174.4 h-10 py-1.5 pl-4'>
                          <span className='text-sm font-normal font-face-r text-color18'>Satterfield</span>
                        </div>
                        <div className='w-174.4 h-10 py-1.5 pl-4'>
                          <span className='text-sm font-normal font-face-r text-color18'>Development</span>
                        </div>   
                        <div className='w-174.4 h-10 py-1.5 pl-6'>
                          <span className='text-sm font-normal font-face-r text-color18'>4310.00</span>
                        </div>
                        <div className='w-174.4 h-10 py-1.5 pl-5'>
                          <span className='text-sm font-normal font-face-r text-color18'>Full stack</span>
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
                  <span className='text-color21 text-sm font-link-os'>1 - {rows} of {projects[0]?.total_projects} Invoices</span>
                </div>
            </div>
            <div className='flex lg:w-332 w-full h-8  md:mr-0 md:justify-end space-x-2'>
              <div className='flex w-272 h-full space-x-2'> 
              <a href="#" class="inline-flex items-center justify-center w-75 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">Previous
              </a>  
                <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">1
                </a>
                <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">2
                </a>
                <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">3
                </a>
                <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm pb-2 font-link-os text-[rgba(0,0,0,0.45)] bg-white  hover:bg-color26 hover:text-color27  hover:border-color28">. . .
                </a>
                <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">45
                </a>
              </div>
              <a href="#" class="inline-flex items-center justify-center w-49 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">Next
              </a>
              
            </div>
          </div> 
      </div>

      </div> 
      </div>  
  )
}
