import logo from '../image/antcolony-logo.png';
import image from '../image/image.jpg';
import {  MdOutlineHome } from 'react-icons/md';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selected, setSelected] = useState(null);
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const navigate=useNavigate();
  const handleItemClick = (item) => {
    if (selected === item) {
      setSelected(null);
    } else {    
      setSelected(item); 
    }
  };

  return (

    <div  className='w-284 md:w-auto lg:w-284 lg:h-full md:h-full z-50 lg:bg-sidebar-gradient  md:bg-sidebar-gradient absolute md:relative lg:relative'>
      <div className='sm:hidden px-2 py-2'>
        <button
          className="block px-3 py-2 text-sm font-medium text-center border rounded-md"
          onClick={() => setShowSidebar(!showSidebar)}>
            <svg
              className="w-6 h-6 inline-block "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>
      </div>
        
      <div
          className={`${
            showSidebar ? 'block bg-sidebar-gradient drop-shadow-lg' : 'hidden'
          } sm:block `}>

          <div className='flex flex-col md:justify-start md:items-start lg:items-center items-center lg:justify-center justify-center  space-y-4 py-8 '>
            <div className='md:hidden lg:block'> 
              <img src={logo} alt="Logo" className="w-40 h-18 mr-14 mb-6" />
          </div> 



          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="justify-between font-medium  text-sm px-4  text-center  flex flex-row border rounded-md w-64 h-74 lg:w-64 md:w-auto   items-center" type="button">
              <img src={image} alt="img" className="w-54 h-54" /> 
                <div className='md:hidden lg:block'>
                  <div className='mr-5'>
                    <h2 className='font-medium text-base text-color5 font-link'>{user.first_name} {user.last_name}</h2>
                  </div> 
                
                  <div className='text-start '>
                    <span className='font-normal text-sm text-color6 font-link'>Admin</span>
                  </div>
                </div>
                <svg className="w-4 h-4 ml-2 md:hidden lg:block" aria-hidden="true" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
          </button>
 

          <div className='w-full md:w-auto lg:w-full h-349 ml-8 md:mx-3 lg:ml-11 py-2 '>
            <div className='flex flex-col space-y-1'>
                <div className={`flex items-center rounded-md w-64 md:w-auto lg:w-64 h-12 duration-300 cursor-pointer' ${
                    selected === 1 ? 'bg-color7' : ''}`}
                      onClick={() =>{ handleItemClick(1);navigate('/home')}}
                    >
                    <div className='flex items-center md:mx-4 ml-4 lg:ml-4 space-x-3'>
                      <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.45709L11.4609 2.97272L1.71094 12.7227L2.78906 13.8008L3.75 12.8399V21.5118H10.5V14.0118H13.5V21.5118H20.25V12.8399L21.2109 13.8008L22.2891 12.7227L12.5391 2.97272L12 2.45709ZM12 4.5899L18.75 11.3399V20.0118H15V12.5118H9V20.0118H5.25V11.3399L12 4.5899Z" fill="#1A3835"/>
                      </svg>
                        <h2 className={`text-sm font-face-b md:hidden lg:block font-bold text-customColor cursor-pointer  ${
                          selected === 1 ? ' selected' : ''}`}
                            onClick={() => handleItemClick(1)}>Home
                        </h2>
                    </div>
                </div>

                <div className={`flex items-center rounded-md w-64 h-12 md:w-auto lg:w-64 duration-300 cursor-pointer' ${
                    selected === 2 ? 'bg-color7' : ''}`}
                      onClick={() => {handleItemClick(2); navigate('/projects')}}
                    >
                    <div className='flex items-center ml-4 space-x-3'>
                      <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.01178C11.055 2.01178 10.3876 2.67928 10.0576 3.51178H3.75V22.2618H20.25V3.51178H13.9424C13.6124 2.67928 12.945 2.01178 12 2.01178ZM12 3.51178C12.4125 3.51178 12.75 3.84928 12.75 4.26178V5.01178H15V6.51178H9V5.01178H11.25V4.26178C11.25 3.84928 11.5875 3.51178 12 3.51178ZM5.25 5.01178H7.5V8.01178H16.5V5.01178H18.75V20.7618H5.25V5.01178ZM6.75 10.2618V11.7618H8.25V10.2618H6.75ZM9.75 10.2618V11.7618H17.25V10.2618H9.75ZM6.75 13.2618V14.7618H8.25V13.2618H6.75ZM9.75 13.2618V14.7618H17.25V13.2618H9.75ZM6.75 16.2618V17.7618H8.25V16.2618H6.75ZM9.75 16.2618V17.7618H17.25V16.2618H9.75Z" fill="#1A3835"/>
                      </svg>
                        <h2 className={`text-sm font-face-m  md:hidden lg:block font-medium text-customColor cursor-pointer ${
                            selected === 2 ? ' selected' : ''}`}
                              onClick={() => handleItemClick(2)}>Projects
                        </h2>
                    </div>
                </div>

                <div className={`flex items-center rounded-md w-64 h-12 md:w-auto lg:w-64  duration-300 cursor-pointer ${
                    selected === 3 ? 'bg-color7' : ''}`}
                      onClick={() => handleItemClick(3)}
                    >
                    <div className='flex items-center ml-4 space-x-3'>
                      <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.625 5.01178C7.18359 5.01178 6 6.19537 6 7.63678C6 9.07819 7.18359 10.2618 8.625 10.2618C10.0664 10.2618 11.25 9.07819 11.25 7.63678C11.25 6.19537 10.0664 5.01178 8.625 5.01178ZM15.375 5.01178C13.9336 5.01178 12.75 6.19537 12.75 7.63678C12.75 9.07819 13.9336 10.2618 15.375 10.2618C16.8164 10.2618 18 9.07819 18 7.63678C18 6.19537 16.8164 5.01178 15.375 5.01178ZM8.625 6.51178C9.25488 6.51178 9.75 7.0069 9.75 7.63678C9.75 8.26666 9.25488 8.76178 8.625 8.76178C7.99512 8.76178 7.5 8.26666 7.5 7.63678C7.5 7.0069 7.99512 6.51178 8.625 6.51178ZM15.375 6.51178C16.0049 6.51178 16.5 7.0069 16.5 7.63678C16.5 8.26666 16.0049 8.76178 15.375 8.76178C14.7451 8.76178 14.25 8.26666 14.25 7.63678C14.25 7.0069 14.7451 6.51178 15.375 6.51178ZM5.25 9.51178C3.60059 9.51178 2.25 10.8624 2.25 12.5118C2.25 13.3467 2.60742 14.0997 3.16406 14.6446C2.16504 15.3214 1.5 16.4727 1.5 17.7618H3C3 16.5108 3.99902 15.5118 5.25 15.5118C6.50098 15.5118 7.5 16.5108 7.5 17.7618H9C9 16.4727 8.33496 15.3214 7.33594 14.6446C7.89258 14.0997 8.25 13.3467 8.25 12.5118C8.25 10.8624 6.89941 9.51178 5.25 9.51178ZM9 17.7618C8.53125 18.3887 8.25 19.1768 8.25 20.0118H9.75C9.75 18.7608 10.749 17.7618 12 17.7618C13.251 17.7618 14.25 18.7608 14.25 20.0118H15.75C15.75 19.1768 15.4688 18.3887 15 17.7618C14.7451 17.4219 14.4375 17.1319 14.0859 16.8946C14.6426 16.3497 15 15.5967 15 14.7618C15 13.1124 13.6494 11.7618 12 11.7618C10.3506 11.7618 9 13.1124 9 14.7618C9 15.5967 9.35742 16.3497 9.91406 16.8946C9.5625 17.1319 9.25488 17.4219 9 17.7618ZM15 17.7618H16.5C16.5 16.5108 17.499 15.5118 18.75 15.5118C20.001 15.5118 21 16.5108 21 17.7618H22.5C22.5 16.4727 21.835 15.3214 20.8359 14.6446C21.3926 14.0997 21.75 13.3467 21.75 12.5118C21.75 10.8624 20.3994 9.51178 18.75 9.51178C17.1006 9.51178 15.75 10.8624 15.75 12.5118C15.75 13.3467 16.1074 14.0997 16.6641 14.6446C15.665 15.3214 15 16.4727 15 17.7618ZM5.25 11.0118C6.08789 11.0118 6.75 11.6739 6.75 12.5118C6.75 13.3497 6.08789 14.0118 5.25 14.0118C4.41211 14.0118 3.75 13.3497 3.75 12.5118C3.75 11.6739 4.41211 11.0118 5.25 11.0118ZM18.75 11.0118C19.5879 11.0118 20.25 11.6739 20.25 12.5118C20.25 13.3497 19.5879 14.0118 18.75 14.0118C17.9121 14.0118 17.25 13.3497 17.25 12.5118C17.25 11.6739 17.9121 11.0118 18.75 11.0118ZM12 13.2618C12.8379 13.2618 13.5 13.9239 13.5 14.7618C13.5 15.5997 12.8379 16.2618 12 16.2618C11.1621 16.2618 10.5 15.5997 10.5 14.7618C10.5 13.9239 11.1621 13.2618 12 13.2618Z" fill="#1A3835"/>
                      </svg>
                        <h2 className={`text-sm font-face-m  md:hidden lg:block font-medium text-customColor cursor-pointer ${
                            selected === 3 ? ' selected' : ''}`}
                              onClick={() => handleItemClick(3)}>Employees
                        </h2>
                    </div>
                </div>

                <div className={`flex items-center rounded-md w-64 h-12 md:w-auto lg:w-64 duration-300 cursor-pointer' ${
                    selected === 4 ? 'bg-color7' : ''}`}
                      onClick={() => handleItemClick(4)}
                    >
                    <div className='flex items-center ml-4 space-x-3'>
                      <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 3.51178C14.4053 3.51178 13.1865 3.76373 12.2344 4.23834C11.2822 4.71295 10.5 5.48639 10.5 6.51178V9.51178C10.5 9.60846 10.5322 9.70221 10.5469 9.79303C9.84961 9.61139 9.07617 9.51178 8.25 9.51178C6.90527 9.51178 5.68652 9.76373 4.73438 10.2383C3.78223 10.713 3 11.4864 3 12.5118V18.5118C3 19.5372 3.78223 20.3106 4.73438 20.7852C5.68652 21.2598 6.90527 21.5118 8.25 21.5118C9.59473 21.5118 10.8135 21.2598 11.7656 20.7852C12.7178 20.3106 13.5 19.5372 13.5 18.5118V18.2071C14.1885 18.3887 14.9414 18.5118 15.75 18.5118C17.0947 18.5118 18.3135 18.2598 19.2656 17.7852C20.2178 17.3106 21 16.5372 21 15.5118V6.51178C21 5.48639 20.2178 4.71295 19.2656 4.23834C18.3135 3.76373 17.0947 3.51178 15.75 3.51178ZM15.75 5.01178C16.8926 5.01178 17.9092 5.25787 18.5859 5.59772C19.2627 5.93756 19.5 6.29498 19.5 6.51178C19.5 6.72858 19.2627 7.086 18.5859 7.42584C17.9092 7.76569 16.8926 8.01178 15.75 8.01178C14.6074 8.01178 13.5908 7.76569 12.9141 7.42584C12.2373 7.086 12 6.72858 12 6.51178C12 6.29498 12.2373 5.93756 12.9141 5.59772C13.5908 5.25787 14.6074 5.01178 15.75 5.01178ZM12 8.64459C12.0791 8.68854 12.1523 8.7442 12.2344 8.78522C13.1865 9.25983 14.4053 9.51178 15.75 9.51178C17.0947 9.51178 18.3135 9.25983 19.2656 8.78522C19.3477 8.7442 19.4209 8.68854 19.5 8.64459V9.51178C19.5 9.72858 19.2627 10.086 18.5859 10.4258C17.9092 10.7657 16.8926 11.0118 15.75 11.0118C14.6074 11.0118 13.5908 10.7657 12.9141 10.4258C12.2373 10.086 12 9.72858 12 9.51178V8.64459ZM8.25 11.0118C9.39258 11.0118 10.4092 11.2579 11.0859 11.5977C11.7627 11.9376 12 12.295 12 12.5118C12 12.7286 11.7627 13.086 11.0859 13.4258C10.4092 13.7657 9.39258 14.0118 8.25 14.0118C7.10742 14.0118 6.09082 13.7657 5.41406 13.4258C4.7373 13.086 4.5 12.7286 4.5 12.5118C4.5 12.295 4.7373 11.9376 5.41406 11.5977C6.09082 11.2579 7.10742 11.0118 8.25 11.0118ZM19.5 11.6446V12.5118C19.5 12.7286 19.2627 13.086 18.5859 13.4258C17.9092 13.7657 16.8926 14.0118 15.75 14.0118C14.8975 14.0118 14.127 13.8712 13.5 13.6602V12.5118C13.5 12.4151 13.4678 12.3214 13.4531 12.2305C14.1504 12.4122 14.9238 12.5118 15.75 12.5118C17.0947 12.5118 18.3135 12.2598 19.2656 11.7852C19.3477 11.7442 19.4209 11.6885 19.5 11.6446ZM4.5 14.6446C4.5791 14.6885 4.65234 14.7442 4.73438 14.7852C5.68652 15.2598 6.90527 15.5118 8.25 15.5118C9.59473 15.5118 10.8135 15.2598 11.7656 14.7852C11.8477 14.7442 11.9209 14.6885 12 14.6446V15.5118C12 15.7286 11.7627 16.086 11.0859 16.4258C10.4092 16.7657 9.39258 17.0118 8.25 17.0118C7.10742 17.0118 6.09082 16.7657 5.41406 16.4258C4.7373 16.086 4.5 15.7286 4.5 15.5118V14.6446ZM19.5 14.6446V15.5118C19.5 15.7286 19.2627 16.086 18.5859 16.4258C17.9092 16.7657 16.8926 17.0118 15.75 17.0118C14.8975 17.0118 14.127 16.8917 13.5 16.6837V15.2305C14.1885 15.4122 14.9385 15.5118 15.75 15.5118C17.0947 15.5118 18.3135 15.2598 19.2656 14.7852C19.3477 14.7442 19.4209 14.6885 19.5 14.6446ZM4.5 17.6446C4.5791 17.6885 4.65234 17.7442 4.73438 17.7852C5.68652 18.2598 6.90527 18.5118 8.25 18.5118C9.59473 18.5118 10.8135 18.2598 11.7656 17.7852C11.8477 17.7442 11.9209 17.6885 12 17.6446V18.5118C12 18.7286 11.7627 19.086 11.0859 19.4258C10.4092 19.7657 9.39258 20.0118 8.25 20.0118C7.10742 20.0118 6.09082 19.7657 5.41406 19.4258C4.7373 19.086 4.5 18.7286 4.5 18.5118V17.6446Z" fill="#1A3835"/>
                      </svg>
                        <h2 className={`text-sm font-face-m font-medium lg:block md:hidden text-customColor cursor-pointer ${
                          selected === 4 ? ' selected' : ''}`}
                            onClick={() => handleItemClick(4)}>Financial Overview
                        </h2>
                    </div>
                </div>

                <div className={`flex items-center rounded-md w-64 h-12 md:w-auto lg:w-64 duration-300 cursor-pointer ${
                    selected === 5 ? 'bg-color7' : ''}`}
                      onClick={() => handleItemClick(5)}
                    >
                    <div className='flex items-center ml-4 space-x-3'>
                      <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 2.76178V22.2618H19.5V7.70709L19.2891 7.47272L14.7891 2.97272L14.5547 2.76178H4.5ZM6 4.26178H13.5V8.76178H18V20.7618H6V4.26178ZM15 5.3399L16.9219 7.26178H15V5.3399ZM8.25 10.2618V11.7618H15.75V10.2618H8.25ZM8.25 13.2618V14.7618H15.75V13.2618H8.25ZM8.25 16.2618V17.7618H15.75V16.2618H8.25Z" fill="#1A3835"/>
                      </svg>
                        <h2 className={`text-sm font-face-m font-medium  md:hidden lg:block text-customColor cursor-pointer ${
                          selected === 5 ? ' selected' : ''}`}
                            onClick={() => handleItemClick(5)}>Project Reporting
                        </h2>
                    </div>
                </div>

                <div className={`flex items-center rounded-md w-64 h-12 md:w-auto lg:w-64 duration-300 cursor-pointer ${
                    selected === 6 ? 'bg-color7 selected' : ''}`}
                      onClick={() => handleItemClick(6)}
                    >
                  <div className='flex items-center ml-4 space-x-3'>
                    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.25 4.26178C10.4297 4.26178 9.75 4.94147 9.75 5.76178V6.51178H3V20.0118H21V6.51178H14.25V5.76178C14.25 4.94147 13.5703 4.26178 12.75 4.26178H11.25ZM11.25 5.76178H12.75V7.26178H11.25V5.76178ZM4.5 8.01178H9.75V8.76178H14.25V8.01178H19.5V18.5118H4.5V8.01178ZM12 9.51178C10.3506 9.51178 9 10.8624 9 12.5118C9 13.3497 9.35156 14.1085 9.91113 14.6534C8.90918 15.3301 8.25 16.4727 8.25 17.7618H9.75C9.75 16.5108 10.749 15.5118 12 15.5118C13.251 15.5118 14.25 16.5108 14.25 17.7618H15.75C15.75 16.4727 15.0908 15.3301 14.0889 14.6534C14.6484 14.1085 15 13.3497 15 12.5118C15 10.8624 13.6494 9.51178 12 9.51178ZM12 11.0118C12.8379 11.0118 13.5 11.6739 13.5 12.5118C13.5 13.3497 12.8379 14.0118 12 14.0118C11.1621 14.0118 10.5 13.3497 10.5 12.5118C10.5 11.6739 11.1621 11.0118 12 11.0118Z" fill="#1A3835"/>
                    </svg>
                      <h2 className={`text-sm font-face-m font-medium  md:hidden lg:block text-customColor cursor-pointer ${
                        selected === 6 ? ' selected' : ''}`}
                          onClick={() => handleItemClick(6)}>Invoicing
                      </h2>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}