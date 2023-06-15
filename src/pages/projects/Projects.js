import React ,{useState} from 'react';
import Sidebar from '../../components/Sidebar'
import image from '../../image/developersimage/People.png'
import image1 from '../../image/developersimage/People (1).png'
import image2 from '../../image/developersimage/People (2).png'
import image3 from '../../image/developersimage/People (3).png'
import image4 from '../../image/developersimage/People (4).png'
import image5 from '../../image/developersimage/People (5).png'
import image6 from '../../image/developersimage/People (6).png'
import image7 from '../../image/developersimage/People (7).png'
import image8 from '../../image/developersimage/People (8).png'
import image9 from '../../image/developersimage/People (9).png'
import image10 from '../../image/developersimage/People (10).png'
import image11 from '../../image/developersimage/People (11).png'
import image12 from '../../image/developersimage/People (12).png'
import image13 from '../../image/developersimage/People (13).png'
import image14 from '../../image/developersimage/People (14).png'
import image15 from '../../image/developersimage/People (15).png'
import image16 from '../../image/developersimage/People (16).png'
import image17 from '../../image/developersimage/People (17).png'
import image18 from '../../image/developersimage/People (18).png'
import image19 from '../../image/developersimage/People (19).png'
import image20 from '../../image/developersimage/People (20).png'
import image21 from '../../image/developersimage/People (21).png'
import image22 from '../../image/developersimage/People (22).png'
import image23 from '../../image/developersimage/People (23).png'
import image24 from '../../image/developersimage/People (24).png'
import image25 from '../../image/developersimage/People (25).png'
import image26 from '../../image/developersimage/People (26).png'
import image27 from '../../image/developersimage/People (27).png'
import image28 from '../../image/developersimage/People (28).png'
import image29 from '../../image/developersimage/People (29).png'



export default function Projects(){
   const [selected, setSelected] = useState(null);

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
  

   return(
   <div className='flex h-full'>
      <div className='basis-[12%]'>
        <Sidebar />
      </div>
  
      <div className='basis-[88%] flex flex-col space-y-5 md:space-y-5 pb-5 pt-14 px-3 lg:py-8 lg:space-y-5 lg:px-11 lg:overflow-x-hidden lg:overflow-y-hidden md:overflow-x-scroll '>
        <div className='flex mb-4 justify-between'>
         <h1 className='text-3xl text-color10 font-bold font-face-b'>Projects</h1> 
         <button className="bg-customColor hover:bg-gray-500 text-white h-10 w-44 text-base font-link font-semibold rounded-md">
            Create new project
         </button>
        </div>      
          <div className='block space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:justify-between lg:items-center'> 
            <div className='flex mb-3 '>
              <div className={`flex items-center justify-center text-center py-5 px-3 lg:py-0 lg:px-0 w-1/3 border border-color11 h-10 lg:w-109 rounded-l-md cursor-pointer ' ${
                selected === 1 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(1)}
                    >
                    <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                        selected === 1 ? 'color' : ''}`}
                          onClick={() => handleItemClick(1)}>All Projects
                    </span>
              </div>

              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0  w-1/3 border-y border-r h-10 lg:w-74 cursor-pointer ' ${
                selected === 2 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(2)}
                    >
                    <span className ={`text-sm font-normal text-center text-color12 font-link cursor-pointer ${
                        selected === 2 ? 'color' : ''}`}
                          onClick={() => handleItemClick(2)}>Active
                    </span>
              </div>

              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0  w-1/3 border-y h-10 lg:w-84 cursor-pointer ' ${
                selected === 3 ? 'bg-color14' : ''}`}
                  onClick={() => handleItemClick(3)}
                    >
                    <span className ={`text-sm font-normal text-center text-color12 font-link cursor-pointer ${
                        selected === 3 ? 'color' : ''}`}
                          onClick={() => handleItemClick(3)}>Inactive
                    </span>
              </div>

              <div className={`flex items-center justify-center border py-5 px-3 w-1/3 lg:px-0 lg:py-0 border-color11 h-10 lg:w-105 rounded-r-md cursor-pointer ' ${
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
           
          <div className='w-screen'>
               <div className='border w-1050  h-70  flex  items-center justify-between rounded-t-md'>
                 <div className='pl-4 flex h-30 w-48 justify-between'>
                  <span className='text-lg w-90 h-26 font-medium font-face-m'>All Projects</span>
                     <span className='text-sm py-1 font-medium w-70 bg-color14 text-center rounded-md font-face-m text-color13'>45 total</span>
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

                     <div className='flex flex-row h-60 border-x border-b items-center'>
                        <div className='w-157 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Virgin Pulse</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-2 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Inox industy and...</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5  '>
                          <span className='text-sm font-medium font-face-m text-color18'>Jan 2022 - Oct 2023</span>
                        </div>
                        <div className='w-101 h-10 items-center py-0.5'>
                           <div class="flex -space-x-4 overflow-hidden">
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image} alt="img"/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image1} alt=""/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image2} alt=""/> 
                              <a class="flex items-center justify-center mt-0.5 h-8 w-8 text-sm text-white font-semibold font-face-gsb bg-customColor rounded-full" href="#">4+</a>
                           </div>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-10 '>
                          <span className='text-sm font-medium font-face-m text-color18'>$45</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-8 '>
                          <span className='text-sm font-medium font-face-m text-color18'>145,900,000.00 KM</span>
                        </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span class="flex items-center text-sm font-medium font-face-m text-color18">
                            <span class="flex h-1.5 w-1.5 bg-color22 rounded-full mr-1.5 flex-shrink-0"></span>Active
                          </span>
                        </div>
                     </div>

                     <div className='flex flex-row h-60 border-x border-b items-center'>
                        <div className='w-157 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>AlphaBid</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-2 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Inox industy and...</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5  '>
                          <span className='text-sm font-medium font-face-m text-color18'>Jan 2022 - Oct 2023</span>
                        </div>
                        <div className='w-101 h-10 items-center py-0.5'>
                           <div class="flex -space-x-4 overflow-hidden">
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image3} alt="img"/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image4} alt=""/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image5} alt=""/>
                              <a class="flex items-center justify-center mt-0.5 h-8 w-8 text-sm text-white font-semibold font-face-gsb bg-customColor rounded-full" href="#">5+</a>
                           </div>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-10 '>
                          <span className='text-sm font-medium font-face-m text-color18'>$45</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-8 '>
                          <span className='text-sm font-medium font-face-m text-color18'>145,900,000.00 KM</span>
                        </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span class="flex items-center text-sm font-medium font-face-m text-color18">
                            <span class="flex h-1.5 w-1.5 bg-color22 rounded-full mr-1.5 flex-shrink-0"></span>Active
                          </span>
                        </div>
                     </div>

                     <div className='flex flex-row h-60 border-x border-b items-center'>
                        <div className='w-157 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Zapelin</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-2 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Inox industy and...</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5  '>
                          <span className='text-sm font-medium font-face-m text-color18'>Jan 2022 - Oct 2023</span>
                        </div>
                        <div className='w-101 h-10 items-center py-0.5'>
                           <div class="flex -space-x-4 overflow-hidden">
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image6} alt="img"/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image7} alt=""/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image8} alt=""/>
                              <a class="flex items-center justify-center mt-0.5 h-8 w-8 text-sm text-white font-semibold font-face-gsb bg-customColor rounded-full" href="#">1+</a>
                           </div>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-10 '>
                          <span className='text-sm font-medium font-face-m text-color18'>$45</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-8 '>
                          <span className='text-sm font-medium font-face-m text-color18'>145,900,000.00 KM</span>
                        </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span class="flex items-center text-sm font-medium font-face-m text-color18">
                            <span class="flex h-1.5 w-1.5 bg-color22 rounded-full mr-1.5 flex-shrink-0"></span>Active
                          </span>
                        </div>
                     </div>

                     <div className='flex flex-row h-60 border-x border-b items-center'>
                        <div className='w-157 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>HUB71</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-2 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Inox industy and...</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5  '>
                          <span className='text-sm font-medium font-face-m text-color18'>Jan 2022 - Oct 2023</span>
                        </div>
                        <div className='w-101 h-10 items-center py-0.5'>
                           <div class="flex -space-x-4 overflow-hidden">
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image9} alt="img"/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image10} alt=""/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image11} alt=""/>
                             
                           </div>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-10 '>
                          <span className='text-sm font-medium font-face-m text-color18'>$45</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-8 '>
                          <span className='text-sm font-medium font-face-m text-color18'>145,900,000.00 KM</span>
                        </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span class="flex items-center text-sm font-medium font-face-m text-color18">
                            <span class="flex h-1.5 w-1.5 bg-color22 rounded-full mr-1.5 flex-shrink-0"></span>Active
                          </span>
                        </div>
                     </div>

                     <div className='flex flex-row h-60 border-x border-b items-center'>
                        <div className='w-157 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Kutuby</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-2 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Inox industy and...</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5  '>
                          <span className='text-sm font-medium font-face-m text-color18'>Jan 2022 - Oct 2023</span>
                        </div>
                        <div className='w-101 h-10 items-center py-0.5'>
                           <div class="flex -space-x-4 overflow-hidden">
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image12} alt="img"/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image13} alt=""/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image14} alt=""/>
                              <a class="flex items-center justify-center mt-0.5 h-8 w-8 text-sm text-white font-semibold font-face-gsb bg-customColor rounded-full" href="#">1+</a>
                           </div>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-10 '>
                          <span className='text-sm font-medium font-face-m text-color18'>$45</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-8 '>
                          <span className='text-sm font-medium font-face-m text-color18'>145,900,000.00 KM</span>
                        </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span class="flex items-center text-sm font-medium font-face-m text-color18">
                            <span class="flex h-1.5 w-1.5 bg-color23 rounded-full mr-1.5 flex-shrink-0"></span>On hold
                          </span>
                        </div>
                     </div>

                     <div className='flex flex-row h-60 border-x border-b items-center'>
                        <div className='w-157 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>AudioWold</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-2 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Inox industy and...</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5  '>
                          <span className='text-sm font-medium font-face-m text-color18'>Jan 2022 - Oct 2023</span>
                        </div>
                        <div className='w-101 h-10 items-center py-0.5'>
                           <div class="flex -space-x-4 overflow-hidden">
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image15} alt="img"/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image16} alt=""/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image17} alt=""/>
                              <a class="flex items-center justify-center mt-0.5 h-8 w-8 text-sm text-white font-semibold font-face-gsb bg-customColor rounded-full" href="#">3+</a>
                           </div>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-10 '>
                          <span className='text-sm font-medium font-face-m text-color18'>$45</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-8 '>
                          <span className='text-sm font-medium font-face-m text-color18'>145,900,000.00 KM</span>
                        </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span class="flex items-center text-sm font-medium font-face-m text-color18">
                            <span class="flex h-1.5 w-1.5 bg-color23 rounded-full mr-1.5 flex-shrink-0"></span>On hold
                          </span>
                        </div>
                     </div>

                     <div className='flex flex-row h-60 border-x border-b items-center'>
                        <div className='w-157 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Roomrs</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-2 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Inox industy and...</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5  '>
                          <span className='text-sm font-medium font-face-m text-color18'>Jan 2022 - Oct 2023</span>
                        </div>
                        <div className='w-101 h-10 items-center py-0.5'>
                           <div class="flex -space-x-4 overflow-hidden">
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image18} alt="img"/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image19} alt=""/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image20} alt=""/>
                              
                           </div>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-10 '>
                          <span className='text-sm font-medium font-face-m text-color18'>$45</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-8 '>
                          <span className='text-sm font-medium font-face-m text-color18'>145,900,000.00 KM</span>
                        </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span class="flex items-center text-sm font-medium font-face-m text-color18">
                            <span class="flex h-1.5 w-1.5 bg-color23 rounded-full mr-1.5 flex-shrink-0"></span>On hold
                          </span>
                        </div>
                     </div>

                     <div className='flex flex-row h-60 border-x border-b items-center'>
                        <div className='w-157 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Travelpot</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-2 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Inox industy and...</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5  '>
                          <span className='text-sm font-medium font-face-m text-color18'>Jan 2022 - Oct 2023</span>
                        </div>
                        <div className='w-101 h-10 items-center py-0.5'>
                           <div class="flex -space-x-4 overflow-hidden">
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image21} alt="img"/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image22} alt=""/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image23} alt=""/>
                             
                           </div>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-10 '>
                          <span className='text-sm font-medium font-face-m text-color18'>$45</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-8 '>
                          <span className='text-sm font-medium font-face-m text-color18'>145,900,000.00 KM</span>
                        </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span class="flex items-center text-sm font-medium font-face-m text-color18">
                            <span class="flex h-1.5 w-1.5 bg-color24 rounded-full mr-1.5 flex-shrink-0"></span>Inactive
                          </span>
                        </div>
                     </div>

                     <div className='flex flex-row h-60 border-x border-b items-center'>
                        <div className='w-157 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>GIZ</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-2 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Inox industy and...</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5  '>
                          <span className='text-sm font-medium font-face-m text-color18'>Jan 2022 - Oct 2023</span>
                        </div>
                        <div className='w-101 h-10 items-center py-0.5'>
                           <div class="flex -space-x-4 overflow-hidden">
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image24} alt="img"/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image25} alt=""/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image26} alt=""/>
                              <a class="flex items-center justify-center mt-0.5 h-8 w-8 text-sm text-white font-semibold font-face-gsb bg-customColor rounded-full" href="#">2+</a>
                           </div>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-10 '>
                          <span className='text-sm font-medium font-face-m text-color18'>$45</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-8 '>
                          <span className='text-sm font-medium font-face-m text-color18'>145,900,000.00 KM</span>
                        </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span class="flex items-center text-sm font-medium font-face-m text-color18">
                            <span class="flex h-1.5 w-1.5 bg-color24 rounded-full mr-1.5 flex-shrink-0"></span>Inactive
                          </span>
                        </div>
                     </div>

                     <div className='flex flex-row h-60 border-x border-b items-center'>
                        <div className='w-157 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Bosch</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-2 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Inox industy and...</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5  '>
                          <span className='text-sm font-medium font-face-m text-color18'>Jan 2022 - Oct 2023</span>
                        </div>
                        <div className='w-101 h-10 items-center py-0.5'>
                           <div class="flex -space-x-4 overflow-hidden">
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image27} alt="img"/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image28} alt=""/>
                              <img class="inline-block h-35 w-35 rounded-full  ring-white" src={image29} alt=""/>
                            
                           </div>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-10 '>
                          <span className='text-sm font-medium font-face-m text-color18'>$45</span>
                        </div>
                        <div className='w-158.17 h-10 py-1.5 pl-8 '>
                          <span className='text-sm font-medium font-face-m text-color18'>145,900,000.00 KM</span>
                        </div>
                        <div className='w-158.17 h-10 items-center pl-10 flex'>
                          <span class="flex items-center text-sm font-medium font-face-m text-color18">
                            <span class="flex h-1.5 w-1.5 bg-color24 rounded-full mr-1.5 flex-shrink-0"></span>Inactive
                          </span>
                        </div>
                     </div>                    
               </div>
         </div>      

          <div className='h-47 flex justify-between items-center'>
            <div className='w-530 h-42  flex'>
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
                            onClick={() => handleYearChange(number)}
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
                  <span className='text-color21 text-sm font-link-os'>1 - 10 of 540 Projects</span>
                </div>
            </div>
            <div className='flex w-386 h-8 space-x-2'>
              <div className='flex w-272 h-full space-x-2'>
              <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">1
              </a>
              <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">2
              </a>
              <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">3
              </a>
              <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">4
              </a>
              <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">5
              </a>
              <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">6
              </a>
              <a href="#" class="inline-flex items-center justify-center w-8 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27  hover:border-color28">7
              </a>
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
