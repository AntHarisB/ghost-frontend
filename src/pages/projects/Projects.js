import React ,{useState,useEffect} from 'react';
import Sidebar from '../../components/Sidebar'
import api from '../../Api';
import { getAccessToken } from '../../Api';


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

   return(
   <div className='flex h-full'>
      <div className='basis-[12%]'>
        <Sidebar />
      </div>
      <div className='basis-[88%] flex flex-col space-y-5 md:space-y-5 pb-5 pt-14 px-3 lg:py-8 lg:space-y-5 lg:px-11 lg:overflow-x-hidden md:overflow-x-hidden'>
        <div className='lg:flex md:flex mb-4 lg:justify-between md:justify-between'>
         <h1 className='text-3xl text-color10 font-bold font-face-b'>Projects</h1> 
         <button className="bg-customColor hover:bg-gray-500 text-white h-10 w-44 mt-4 lg:mt-0 md:mt-0 md:mr-0 mr-4 text-base font-link font-semibold rounded-md">
            Create new project
         </button>
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
            <div className='flex lg:w-386 w-386 h-8 lg:mr-4 md:mr-0 space-x-2'>
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
