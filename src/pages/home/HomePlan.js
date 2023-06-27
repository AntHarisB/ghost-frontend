import React ,{useEffect, useState} from 'react';
import Sidebar from '../../components/Sidebar';
import api from '../../Api'
import { getAccessToken } from '../../Api'
import { useNavigate } from 'react-router-dom'


export default function HomePlan(){
   const [selected, setSelected] = useState(null);
   const navigate=useNavigate();
   const [planData, setPlanData]=useState({
      HRcost_total:0,
      design_total:0,
      dev_total:0,
      direct_total:0,
      expenses:0,
      indirect_total:0,
      marketing_total:0,
      neto:0,
      officeCost_total:0,
      otherCosts_total:0,
      other_total:0,
      salesCosts_total:0,
      total_rev_toal:0
  });

  useEffect(()=>{
     api.get(`/api/plan`, {
     headers: {
       'Authorization': `Bearer ${getAccessToken()}`
     }
     })
     .then(response => setPlanData(response.data))
     .catch(error => console.error(error));
}, []);


   const handleItemClick = (item) => {
      if (selected === item) {
        setSelected(null);
      } else {
        setSelected(item); 
      }
    };

   
  
   return(
   <div className='flex h-full'>
      <div className='basis-[12%]'>
        <Sidebar />
      </div>
      {console.log(planData[0]?.HRcost_total)}
      <div className='basis-[88%] space-y-5 md:space-y-5 pb-5 pt-14 px-3 lg:py-8 lg:space-y-5 lg:px-11 lg:overflow-x-hidden lg:overflow-y-hidden md:overflow-x-scroll '>
        <h1 className='text-3xl mb-10 text-color10 font-bold font-face-b'>Home</h1>       
          <div className='block space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:justify-between lg:items-center'> 
            <div className='flex mb-3 '>
              <div className={`flex items-center justify-center text-center py-5 px-3 lg:py-0 lg:px-0 w-1/3 border border-color11 h-10 lg:w-40 rounded-l-md cursor-pointer ' ${
                selected === 1 ? 'bg-color14' : ''}`}
                  onClick={() => {handleItemClick(1); navigate('/home')}}
                    >
                    <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                        selected === 1 ? 'color' : ''}`}
                          onClick={() => handleItemClick(1)}>2023 Performance
                    </span>
              </div>
               {console.log(planData.HRcost_total)}
              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0  w-1/3 border-y h-10 lg:w-236 cursor-pointer ' ${
                selected === 2 ? 'bg-color14' : ''}`}
                  onClick={() => {handleItemClick(2); navigate('/homedrc')}}
                    >
                    <span className ={`text-sm font-normal text-center text-color12 font-link cursor-pointer ${
                        selected === 2 ? 'color' : ''}`}
                          onClick={() => handleItemClick(2)}>Development Revenue & Costs
                    </span>
              </div>

              <div className={`flex items-center justify-center border py-5 px-3 w-1/3 lg:px-0 lg:py-0 border-color11 h-10 lg:w-99 rounded-r-md cursor-pointer ' ${
                selected === 3 ? 'bg-color14' : ''}`}
                   onClick={() => {handleItemClick(2); navigate('/homeplan')}}
                    >
                      <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                          selected === 3 ? 'color' : ''}`}
                            onClick={() => handleItemClick(3)}>2023 Plan
                      </span>
              </div>
            </div>
          </div>
           
          <div className='w-screen overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden '>
               <div className='border w-1050  h-309  flex-col justify-center rounded-md'>
                  <div  className='flex-col space-y-5 ml-5 justify-center'>	
                     <div className=' w-1010 h-68  border-b flex items-center '>
                        <div>
                           <span className='text-lg font-face-gsb font-semibold mr-4 text-color10'>Revenues & costs (per project) - per month</span>
                        </div>
                     </div>

                     <div className='space-y-0.5 '>
                        <div className='flex w-1009 h-10  justify-between items-center'>
                           <span className='text-xl font-face-r font-normal w-124 text-color10'>Development</span>
                           <span className='text-xl font-face-gsb font-semibold h-6 w-157 text-color10 text-end'>{planData[0]?.dev_total} KM</span>
                        </div>
                        <div className='flex w-1009 h-10  justify-between items-center'>
                           <span className='text-xl font-face-r font-normal  w-63 text-color10'>Design</span>
                           <span className='text-xl font-face-gsb font-semibold h-6 w-153 text-color10 text-end'>{planData[0]?.design_total} KM</span>
                        </div>
                        <div className='flex w-1009 h-10  justify-between items-center'>
                           <span className='text-xl font-face-r font-normal  w-53 text-color10'>Other</span>
                           <span className='text-xl font-face-gsb font-semibold h-6 w-167 text-color10 text-end'>{planData[0]?.other_total} KM</span>
                        </div>
                        <div className='flex w-1009 h-10 justify-between items-center'>
                           <span className='text-xl font-face-r font-normal  w-123 text-color10'>Total revenue</span>
                           <span className='text-xl font-face-gsb font-semibold h-6 w-157 text-color10 text-end'>{planData[0]?.total_rev_total} KM</span>
                        </div>  
                     </div>	
                  </div>
                  <div className='w-1049 mt-1 bg-color7'>
                     <div className='flex h-10  px-5 h-49 justify-between items-center'>
                        <span className='text-xl font-face-gsb font-semibold  w-155 text-customColor'>NET PROFIT 2023</span>
                        <span className='text-xl font-face-b font-bold h-6 w-167 text-customColor text-end'>{planData[0]?.neto} KM</span>
                     </div>
                  </div>
               </div>     
         </div>   

         <div className='w-screen overflow-x-auto lg:py-3 md:overflow-x-auto lg:overflow-x-hidden '>
            <div className='border w-1050  h-457  flex-col justify-center rounded-md'>
               <div  className='flex-col space-y-7 ml-5 justify-center'>	
                  <div className=' w-1010 h-68  border-b flex items-center '>
                     <div>
                        <span className='text-lg font-face-gsb font-semibold mr-4 text-color10'>Expenses</span>
                     </div>
                  </div>

                  <div className='space-y-0.5 '>
                     <div className='flex w-1009 h-10 justify-between items-center'>
                        <span className='text-xl font-face-r font-normal w-55 text-color10'>Direct</span>
                        <span className='text-xl font-face-gsb font-semibold h-6 w-158 text-color10 text-end'>{planData[0]?.direct_total} KM</span>
                     </div>
                     <div className='flex w-1009 h-10 justify-between items-center'>
                        <span className='text-xl font-face-r font-normal  w-69 text-color10'>Indirect</span>
                        <span className='text-xl font-face-gsb font-semibold h-6 w-154 text-color10 text-end'>{planData[0]?.indirect_total} KM</span>
                     </div>
                     <div className='flex w-1009 h-10 justify-between items-center'>
                        <span className='text-xl font-face-r font-normal  w-91 text-color10'>Marketing</span>
                        <span className='text-xl font-face-gsb font-semibold h-6 w-158 text-color10 text-end'>{planData[0]?.marketing_total} KM</span>
                     </div>
                     <div className='flex w-1009 h-10 justify-between items-center'>
                        <span className='text-xl font-face-r font-normal  w-79 text-color10'>HR costs</span>
                        <span className='text-xl font-face-gsb font-semibold h-6 w-141 text-color10 text-end'>{planData[0]?.HRcost_total} KM</span>
                     </div>
                     <div className='flex w-1009 h-10  justify-between items-center'>
                        <span className='text-xl font-face-r font-normal  w-99 text-color10'>Office cost</span>
                        <span className='text-xl font-face-gsb font-semibold h-6 w-137 text-color10 text-end'>{planData[0]?.officeCost_total} KM</span>
                     </div>
                     <div className='flex w-1009 h-10 justify-between items-center'>
                        <span className='text-xl font-face-r font-normal  w-102 text-color10'>Sales costs</span>
                        <span className='text-xl font-face-gsb font-semibold h-6 w-128 text-color10 text-end'>{planData[0]?.salesCosts_total} KM</span>
                     </div>
                     <div className='flex w-1009 h-10  justify-between items-center'>
                        <span className='text-xl font-face-r font-normal  w-106 text-color10'>Other costs</span>
                        <span className='text-xl font-face-gsb font-semibold h-6 w-99 text-color10 text-end'>{planData[0]?.otherCosts_total} KM</span>
                     </div>
                  </div>	    
               </div>
               <div className='w-1049 mt-5 bg-color7'>
                  <div className='flex h-10  px-5 h-49 justify-between items-center'>
                     <span className='text-xl font-face-gsb font-semibold  w-155 text-customColor'>TOTAL EXPENSES</span>
                     <span className='text-xl font-face-b font-bold h-6 w-167 text-customColor text-end'>{planData[0]?.expenses} KM</span>
                  </div>
               </div>
            </div>     
         </div>      
      </div>
   </div>
  )
}
