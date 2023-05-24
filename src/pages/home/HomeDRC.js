import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import HoursOverview from '../../charts/HoursOverview'
import RevenuesCosts from '../../charts/RevenuesCosts' 





export const homeDRCdata = [
	{
		name: 'AlphaBid',
		Grand_Total_Hours_Billed: 280000,
		Grand_Total_Hours_Available: 75000,
		
	},
	{
		name: 'Audiowolf',
		Grand_Total_Hours_Billed: 550000,
		Grand_Total_Hours_Available: 200000,
		
	},
	{
		name: 'GIZ',
		Grand_Total_Hours_Billed: 160000,
		Grand_Total_Hours_Available: 210000,
		
	},
	{
		name: 'HUB71',
		Grand_Total_Hours_Billed: 160000,
		Grand_Total_Hours_Available: 210000,
		
	},
	{
		name: 'Kutuby',
		Grand_Total_Hours_Billed: 50000,
		Grand_Total_Hours_Available: 30000,
		
	},
	{
		name: 'Travelspot',
		Grand_Total_Hours_Billed: 330000,
		Grand_Total_Hours_Available: 480000,
	},
   {
		name: 'Virgin Pulse',
		Grand_Total_Hours_Billed: 330000,
		Grand_Total_Hours_Available: 480000,
	},
	{
		name: 'Zeppelin(CAT)',
		Grand_Total_Hours_Billed: 375000,
		Grand_Total_Hours_Available: 525000,
	}
];

export const ticksh = [0, 150000, 300000, 450000, 600000];



export default function Home (name) {
  const [selected, setSelected] = useState(null);

  const handleItemClick = (item) => {
    if (selected === item) {
      setSelected(null);
    } else {
      setSelected(item); 
    }
  };


  return (
    <div className='flex h-1440'>
      <div className='basis-[12%] h-full '>
        <Sidebar />
      </div>
      
      <div className='basis-[88%] pb-5 pt-14 px-3 lg:py-8 lg:px-9 lg:overflow-x-hidden md:overflow-x-scroll '>
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
          </div>

          <div className='block space-y-5 lg:space-y-0  mt-10 lg:mt-10 lg:h-170 lg:w-1050 lg:grid lg:gap-x-8 lg:gap-y-7 lg:grid-cols-3 lg:my-0 my-10 md:grid-cols-2'> 
              <div className='h-70 lg:w-330  justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-127 h-50 ml-4'>
                    <span className='text-sm font-face-r font-normal h-22 text-color9'>Actual revenue</span>
                    <span className='text-lg font-face-b font-bold h-26 text-color10'>1,615,341.00 KM</span>                    
                  </div>
                   
                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                        <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M15.75 3.51178C14.4053 3.51178 13.1865 3.76373 12.2344 4.23834C11.2822 4.71295 10.5 5.48639 10.5 6.51178V9.51178C10.5 9.60846 10.5322 9.70221 10.5469 9.79303C9.84961 9.61139 9.07617 9.51178 8.25 9.51178C6.90527 9.51178 5.68652 9.76373 4.73438 10.2383C3.78223 10.713 3 11.4864 3 12.5118V18.5118C3 19.5372 3.78223 20.3106 4.73438 20.7852C5.68652 21.2598 6.90527 21.5118 8.25 21.5118C9.59473 21.5118 10.8135 21.2598 11.7656 20.7852C12.7178 20.3106 13.5 19.5372 13.5 18.5118V18.2071C14.1885 18.3887 14.9414 18.5118 15.75 18.5118C17.0947 18.5118 18.3135 18.2598 19.2656 17.7852C20.2178 17.3106 21 16.5372 21 15.5118V6.51178C21 5.48639 20.2178 4.71295 19.2656 4.23834C18.3135 3.76373 17.0947 3.51178 15.75 3.51178ZM15.75 5.01178C16.8926 5.01178 17.9092 5.25787 18.5859 5.59772C19.2627 5.93756 19.5 6.29498 19.5 6.51178C19.5 6.72858 19.2627 7.086 18.5859 7.42584C17.9092 7.76569 16.8926 8.01178 15.75 8.01178C14.6074 8.01178 13.5908 7.76569 12.9141 7.42584C12.2373 7.086 12 6.72858 12 6.51178C12 6.29498 12.2373 5.93756 12.9141 5.59772C13.5908 5.25787 14.6074 5.01178 15.75 5.01178ZM12 8.64459C12.0791 8.68854 12.1523 8.7442 12.2344 8.78522C13.1865 9.25983 14.4053 9.51178 15.75 9.51178C17.0947 9.51178 18.3135 9.25983 19.2656 8.78522C19.3477 8.7442 19.4209 8.68854 19.5 8.64459V9.51178C19.5 9.72858 19.2627 10.086 18.5859 10.4258C17.9092 10.7657 16.8926 11.0118 15.75 11.0118C14.6074 11.0118 13.5908 10.7657 12.9141 10.4258C12.2373 10.086 12 9.72858 12 9.51178V8.64459ZM8.25 11.0118C9.39258 11.0118 10.4092 11.2579 11.0859 11.5977C11.7627 11.9376 12 12.295 12 12.5118C12 12.7286 11.7627 13.086 11.0859 13.4258C10.4092 13.7657 9.39258 14.0118 8.25 14.0118C7.10742 14.0118 6.09082 13.7657 5.41406 13.4258C4.7373 13.086 4.5 12.7286 4.5 12.5118C4.5 12.295 4.7373 11.9376 5.41406 11.5977C6.09082 11.2579 7.10742 11.0118 8.25 11.0118ZM19.5 11.6446V12.5118C19.5 12.7286 19.2627 13.086 18.5859 13.4258C17.9092 13.7657 16.8926 14.0118 15.75 14.0118C14.8975 14.0118 14.127 13.8712 13.5 13.6602V12.5118C13.5 12.4151 13.4678 12.3214 13.4531 12.2305C14.1504 12.4122 14.9238 12.5118 15.75 12.5118C17.0947 12.5118 18.3135 12.2598 19.2656 11.7852C19.3477 11.7442 19.4209 11.6885 19.5 11.6446ZM4.5 14.6446C4.5791 14.6885 4.65234 14.7442 4.73438 14.7852C5.68652 15.2598 6.90527 15.5118 8.25 15.5118C9.59473 15.5118 10.8135 15.2598 11.7656 14.7852C11.8477 14.7442 11.9209 14.6885 12 14.6446V15.5118C12 15.7286 11.7627 16.086 11.0859 16.4258C10.4092 16.7657 9.39258 17.0118 8.25 17.0118C7.10742 17.0118 6.09082 16.7657 5.41406 16.4258C4.7373 16.086 4.5 15.7286 4.5 15.5118V14.6446ZM19.5 14.6446V15.5118C19.5 15.7286 19.2627 16.086 18.5859 16.4258C17.9092 16.7657 16.8926 17.0118 15.75 17.0118C14.8975 17.0118 14.127 16.8917 13.5 16.6837V15.2305C14.1885 15.4122 14.9385 15.5118 15.75 15.5118C17.0947 15.5118 18.3135 15.2598 19.2656 14.7852C19.3477 14.7442 19.4209 14.6885 19.5 14.6446ZM4.5 17.6446C4.5791 17.6885 4.65234 17.7442 4.73438 17.7852C5.68652 18.2598 6.90527 18.5118 8.25 18.5118C9.59473 18.5118 10.8135 18.2598 11.7656 17.7852C11.8477 17.7442 11.9209 17.6885 12 17.6446V18.5118C12 18.7286 11.7627 19.086 11.0859 19.4258C10.4092 19.7657 9.39258 20.0118 8.25 20.0118C7.10742 20.0118 6.09082 19.7657 5.41406 19.4258C4.7373 19.086 4.5 18.7286 4.5 18.5118V17.6446Z" fill="#1A3835"/>
                        </svg>
                    </div>
                  </div>           
              </div>

              <div className='h-70 lg:w-330   lg:w-auto justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-139 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Planned direct costs</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>1,890,000.00 KM</span>
                  </div>

                  <div className='pr-4'>
                     <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M5 20.25V2.25H18.8462V10.3248H17.4615V3.63462H6.38462V18.8654H13.9387V20.25H5ZM7.76923 9.17308V5.01923H16.0769V9.17308H7.76923ZM14.6923 6.40385H9.15385V7.78846H14.6923V6.40385ZM8.46154 11.9423V10.5577H9.84615V11.9423H8.46154ZM11.2308 11.9423V10.5577H12.6154V11.9423H11.2308ZM14 11.9423V10.5577H15.3846V11.9423H14ZM8.46154 14.7115V13.3269H9.84615V14.7115H8.46154ZM11.2308 14.7115V13.3269H12.6154V14.7115H11.2308ZM8.46154 17.4808V16.0962H9.84615V17.4808H8.46154ZM11.2308 17.4808V16.0962H12.6154V17.4808H11.2308Z" fill="#1A3835"/>
                           <path d="M17.4709 12V13.5C16.1959 13.725 15.2209 14.775 15.2209 16.125C15.2209 17.625 16.3459 18.75 17.8459 18.75H18.5959C19.1959 18.75 19.7209 19.275 19.7209 19.875C19.7209 20.475 19.1959 21 18.5959 21H15.9709V22.5H17.4709V24H18.9709V22.5C20.2459 22.275 21.2209 21.225 21.2209 19.875C21.2209 18.375 20.0959 17.25 18.5959 17.25H17.8459C17.2459 17.25 16.7209 16.725 16.7209 16.125C16.7209 15.525 17.2459 15 17.8459 15H20.4709V13.5H18.9709V12H17.4709Z" fill="#1A3835"/>
                        </svg>
                     </div>  
                  </div>                
              </div>

              <div className='h-170 lg:w-330 row-span-2 justify-center bg-color7 flex items-center rounded-md'>
                  <div className='flex flex-col w-212 h-76 justify-center items-center'>
                      <span className='text-lg font-face-m font-medium h-7 w-150 text-center text-color9'>Actual gross profit</span>
                      <span className='text-3xl font-face-gsb font-semibold h-10 w-212 text-center text-color10'>-284,086.00KM</span>
                  </div>                    
              </div>

              <div className='h-70 lg:w-330 justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-103 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Actual margin %</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>40%</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center ml-3 bg-color7'>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.125 4.5C5.68359 4.5 4.5 5.68359 4.5 7.125V9.375C4.5 10.8164 5.68359 12 7.125 12C8.56641 12 9.75 10.8164 9.75 9.375V7.125C9.75 5.68359 8.56641 4.5 7.125 4.5ZM15.5625 4.5L6.5625 19.5H8.4375L17.4375 4.5H15.5625ZM7.125 6C7.75488 6 8.25 6.49512 8.25 7.125V9.375C8.25 10.0049 7.75488 10.5 7.125 10.5C6.49512 10.5 6 10.0049 6 9.375V7.125C6 6.49512 6.49512 6 7.125 6ZM16.875 12C15.4336 12 14.25 13.1836 14.25 14.625V16.875C14.25 18.3164 15.4336 19.5 16.875 19.5C18.3164 19.5 19.5 18.3164 19.5 16.875V14.625C19.5 13.1836 18.3164 12 16.875 12ZM16.875 13.5C17.5049 13.5 18 13.9951 18 14.625V16.875C18 17.5049 17.5049 18 16.875 18C16.2451 18 15.75 17.5049 15.75 16.875V14.625C15.75 13.9951 16.2451 13.5 16.875 13.5Z" fill="#1A3835"/>
                     </svg>
                    </div> 
                  </div>                    
              </div>
            

              <div className='h-70 lg:w-330    lg:w-auto justify-between border flex items-center rounded-md'>
                  <div className='flex flex-col w-121 h-50 ml-4'>
                      <span className='text-sm font-face-r font-normal h-22 text-color9'>Actual avg. margin</span>
                      <span className='text-lg font-face-b font-bold h-26 text-color10'>102,382.00 KM</span>
                  </div>

                  <div className='pr-4'>
                    <div className='rounded-full h-42 w-42 flex items-center justify-center bg-color7 '>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M12 2.25C6.62402 2.25 2.25 6.62402 2.25 12C2.25 17.376 6.62402 21.75 12 21.75C17.376 21.75 21.75 17.376 21.75 12C21.75 6.62402 17.376 2.25 12 2.25ZM11.1562 3.79688C11.1885 3.79395 11.2178 3.7998 11.25 3.79688V12.3047L11.4609 12.5391L17.2969 18.3516C15.8672 19.5469 14.0156 20.25 12 20.25C7.43555 20.25 3.75 16.5645 3.75 12C3.75 7.71973 6.99023 4.21875 11.1562 3.79688ZM12.75 3.79688C16.7139 4.1543 19.8457 7.28613 20.2031 11.25H12.75V3.79688ZM13.8281 12.75H20.2031C20.0479 14.4697 19.3975 16.0459 18.3516 17.2969L13.8281 12.75Z" fill="#1A3835"/>
                        </svg>
                    </div>  
                  </div>                
              </div>
          </div>

          <div className='flex-col'>
              <div className='w-screen overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden lg:w-auto'>
                <HoursOverview /> 
              </div>             
              <div className='w-screen overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden lg:w-auto'>
                <RevenuesCosts/> 
              </div>
          </div>
      </div>
    </div>
  )
}



