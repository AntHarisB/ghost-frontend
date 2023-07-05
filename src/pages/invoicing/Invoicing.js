import React ,{useState,useEffect, useRef} from 'react';
import Sidebar from '../../components/Sidebar'
import api from '../../Api';
import { getAccessToken } from '../../Api';
import 'react-datepicker/dist/react-datepicker.css';
import { all } from 'axios';



export default function Invoicing(){
   const [selected, setSelected] = useState(null);
   const [rows, setRows]=useState(10);
   const [pages, setPages]=useState(0);
   const [invoicing, setInvoicing]=useState([])
   const [emptySearch, setEmptySearch]=useState(false);
   const [allInvoicing, setAllInvoicing]=useState([])
   const [currentPage, setCurrentPage]=useState(1);
   const [currentInvoice, setCurrentInvoice]=useState();
   const [filteredProjects, setFilteredProjects] = useState([]);
   const handleItemClick = (item) => {
      if (selected === item) {
        setSelected(null);
      } else {
        setSelected(item); 
      }
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

    useEffect(()=>{
      let num=0;
      num=invoicing?.count/rows;
      if(num%2==0){
        setPages(Math.floor(num))
      }else{
        setPages(Math.floor(num)+1);
      }
    },[invoicing])

    const pdfInvoices = (id) => {
      api.get(`http://127.0.0.1:8000/api/invoices_pdf/${id}/`, { responseType: 'blob' })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'invoice.pdf');
          document.body.appendChild(link);
          link.click();
        })
        .catch(error => console.error(error));
    };
    

    const fetchInvoicing=()=>{
      api.get(`http://127.0.0.1:8000/api/invoicing/${rows}/?page=${currentPage}`)
      .then(response => {console.log(response.data); setInvoicing(response.data)})
      .catch(error => console.error(error));
    }

    const fetchAllInvoices=()=>{
      api.get(`http://127.0.0.1:8000/api/invoicing/`)
      .then(response => {console.log(response.data); setAllInvoicing(response.data)})
      .catch(error => console.error(error));
    }
  
    useEffect(()=>{
     fetchAllInvoices();
     fetchInvoicing();
},[rows, currentPage])

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    filterInvoices(e);
  }
};

const filterInvoices = (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filteredInvoices = allInvoicing.filter((item) =>
    item.client.toLowerCase().includes(searchValue)
  );
  setInvoicing({ results: filteredInvoices, count: filteredInvoices.length });
  if (!filteredInvoices) {
    setEmptySearch(true);
  }else{
    setEmptySearch(false);
  }
};

const deleteInvoice=(id)=>{
  console.log(id)
  api.delete(`http://127.0.0.1:8000/api/delete_invoicing/${id}/`)
.then(response => {console.log(response.data);fetchInvoicing()})
.catch(error => console.error(error));
}

const fetchPaid=()=>{
  api.get(`http://127.0.0.1:8000/api/paid_invoicing/${rows}/`, {
headers: {
  'Authorization': `Bearer ${getAccessToken()}`
}
})
.then(response => {setInvoicing(response.data); setAllInvoicing(response.data.results)})
.catch(error => console.error(error));
}

const fetchSent=()=>{
  api.get(`http://127.0.0.1:8000/api/sent_invoicing/${rows}/`, {
headers: {
  'Authorization': `Bearer ${getAccessToken()}`
}
})
.then(response => {setInvoicing(response.data); setAllInvoicing(response.data.results)})
.catch(error => console.error(error));
}
    
if (endPage - startPage + 1 < range) {
  startPage = Math.max(endPage - range + 1, 1);
}

const paidInvoice=(id)=>{
  api.put(`http://127.0.0.1:8000/api/invoice_status/${id}/`, {
    client: currentInvoice?.client,
    industry: currentInvoice?.industry,
    total_hours_billed: currentInvoice?.total_hours_billed,
    amount_billed: currentInvoice?.amount_billed,
    status: currentInvoice?.status,
    paid: "paid",
    sent: currentInvoice?.sent
  })
.then(response => {console.log(response.data);fetchInvoicing()})
.catch(error => console.error(error));
}

const sentInvoice=(id)=>{
  api.put(`http://127.0.0.1:8000/api/invoice_status/${id}/`, {
    client: currentInvoice?.client,
    industry: currentInvoice?.industry,
    total_hours_billed: currentInvoice?.total_hours_billed,
    amount_billed: currentInvoice?.amount_billed,
    status: currentInvoice?.status,
    paid: currentInvoice?.paid,
    sent: "sent"
  })
.then(response => {console.log(response.data);fetchInvoicing()})
.catch(error => console.error(error));
}

const getCurrentInvoice=(id)=>{
  const newInvoice=allInvoicing.find(invoice=>invoice.id===id);
  setCurrentInvoice(newInvoice);
}
  

   return(
   <div className='flex h-full'>
    {console.log(currentInvoice)}
      <div className='basis-[12% h-984'>
        <Sidebar />
      </div>
      <div className='basis-[88%] flex flex-col space-y-5 md:space-y-5 pb-5 pt-14 px-3 lg:py-8 lg:space-y-5 lg:px-11 lg:overflow-x-hidden md:overflow-x-hidden'>
        <div className='lg:flex md:flex lg:-mb-2 lg:justify-between md:justify-between'>
         <h1 className='text-3xl text-color10 font-bold mb-6 font-face-b'>Invoicing</h1> 
         <button className="bg-customColor hover:bg-gray-500 text-white h-10 w-44 -mt-2 lg:mt-0 md:mt-0 md:mr-0 mr-4 text-base font-link font-semibold rounded-md"  type="button">
            Create New Invoice
         </button>
        </div>                  
          <div className='block space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:justify-between lg:items-center'> 
            <div className='flex  mb-3 '>
              <div className={`flex items-center justify-center text-center py-5  lg:py-0 lg:px-0 w-full border-y border-l  border-color11 h-10 lg:w-110 rounded-l-md lg:rounded-l-md cursor-pointer ' ${
                selected === 1 ? 'bg-color14' : ''}`}
                  onClick={() => {handleItemClick(1); fetchInvoicing(); fetchAllInvoices()}}
                    >
                    <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                        selected === 1 ? 'color' : ''}`}
                          onClick={() => handleItemClick(1)}>All Invoices
                    </span>
              </div>
              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0 w-full border-t border-r border-b border-l  lg:rounded-none h-10 lg:w-63 cursor-pointer ' ${
                selected === 2 ? 'bg-color14' : ''}`}
                  onClick={() => {handleItemClick(2); fetchSent()}}
                    >
                    <span className ={`text-sm font-normal text-center text-color12 font-link cursor-pointer ${
                        selected === 2 ? 'color' : ''}`}
                          onClick={() => handleItemClick(2)}>Sent
                    </span>
              </div>

              <div className={`flex items-center justify-center border-color11 py-5 lg:py-0  w-full rounded-r-md lg:border-t border-y border-r  lg:rounded-r-md  h-10 lg:w-63 cursor-pointer' ${
                selected === 4 ? 'bg-color14' : ''}`}
                   onClick={() => {handleItemClick(4); fetchPaid()}}
                    >
                      <span className={`text-sm font-normal text-color12 font-link cursor-pointer ${
                          selected === 4 ? 'color' : ''}`}
                            onClick={() => handleItemClick(4)}>Paid
                      </span>
              </div>
            </div>
          </div>
           
          <div className='w-screen md:w-full overflow-x-auto overflow-y-hidden md:overflow-x-auto lg:overflow-x-hidden '>
               <div className='border w-1050  h-72  flex items-center justify-between rounded-t-md'>
                 <div className='ml-4 flex h-30 w-177 justify-between'>
                  <span className='text-lg w-91 h-26 font-medium font-face-m'>All Invoices</span>
                     <span className='text-sm py-1 font-medium w-70 bg-color14 text-center rounded-md font-face-m text-color13'>{allInvoicing.length} total </span>
                 </div>
                 <div className="pr-4 relative flex items-center">
                     <button className="absolute left-0 ml-2">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.25 2.25C10.1162 2.25 6.75 5.61621 6.75 9.75C6.75 11.5459 7.37988 13.1924 8.4375 14.4844L2.46094 20.4609L3.53906 21.5391L9.51562 15.5625C10.8076 16.6201 12.4541 17.25 14.25 17.25C18.3838 17.25 21.75 13.8838 21.75 9.75C21.75 5.61621 18.3838 2.25 14.25 2.25ZM14.25 3.75C17.5723 3.75 20.25 6.42773 20.25 9.75C20.25 13.0723 17.5723 15.75 14.25 15.75C10.9277 15.75 8.25 13.0723 8.25 9.75C8.25 6.42773 10.9277 3.75 14.25 3.75Z" fill="#242834"/>
                     </svg>

                     </button>
                     <input
                     onKeyDown={handleKeyPress}
                     type="text"
                     placeholder="Search"
                     className="w-64 pl-10 pr-4 py-2 border placeholder-color6 border-color17 text-color6 text-sm font-link font-normal rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                     />
                  </div>
               </div>  
               <div className='flex flex-col w-1050'>
                     <div className='flex flex-row h-10 border-x border-b  items-center'>
                        <div className='w-263 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Client</span>
                        </div>
                        <div className='w-180 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Industry</span>
                        </div>
                        <div className='w-142 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Total Hours Billed</span>
                        </div>
                        <div className='w-180 h-10 py-1.5 pl-6 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Amount Billed (BAM)</span>
                        </div>
                        <div className='w-101 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Status</span>
                        </div>
                        <div className='w-184 h-10 py-1.5 pl-4 '>
                          <span className='text-sm font-medium font-face-m text-color18'>Actions</span>
                        </div>
                     </div>
                     {/* Div s informacijama i popup-om */}
                    {invoicing.results?.map((invoic, index)=>(
                      <div className='flex flex-row h-60 border-x border-b items-center' onClick={()=>getCurrentInvoice(invoic.id)}>
                        <div className='w-263 h-10 py-1.5 pl-4' >
                          <span className='text-sm font-normal font-face-r text-color18'>{invoic?.client}</span>
                        </div>
                        <div className='w-180 h-10 py-1.5 pl-3'>
                          <span className='text-sm font-normal font-face-r text-color18'>{invoic?.industry}</span>
                        </div>
                        <div className='w-142 h-10 py-1.5 pl-4'>
                          <span className='text-sm font-normal font-face-r text-color18'>{invoic?.total_hours_billed}</span>
                        </div>   
                        <div className='w-180 h-10 py-1.5 pl-6'>
                          <span className='text-sm font-normal font-face-r text-color18'>{invoic?.amount_billed}</span>
                        </div>
                        <div className='w-101 h-10 py-1.5 pl-4'>
                        <span className="flex items-center block w-400 h-6 text-color18 font-face-r font-normal text-sm">
                        <span className={invoic?.status=="paid" ? "flex h-1.5 w-1.5 bg-color22 rounded-full mr-1.5 flex-shrink-0" : 
                            invoic?.status=="sent" ? "flex h-1.5 w-1.5 bg-color23 rounded-full mr-1.5 flex-shrink-0" : 
                            "flex h-1.5 w-1.5 bg-color24 rounded-full mr-1.5 flex-shrink-0" }>
                            </span>{invoic?.status}
                            </span>
                        </div>
                        <div className='w-184 h-10 py-1.5 pl-3 flex items-center'>
                          <div className='flex space-x-2'>
                          <button className='w-8 h-8 rounded border border-color17 items-center justify-center px-2' onClick={()=>pdfInvoices(invoic.id)}>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.375 11.5V13.25H2.625V11.5H1.75V13.25C1.75 13.4821 1.84219 13.7046 2.00628 13.8687C2.17038 14.0328 2.39294 14.125 2.625 14.125H11.375C11.6071 14.125 11.8296 14.0328 11.9937 13.8687C12.1578 13.7046 12.25 13.4821 12.25 13.25V11.5H11.375Z" fill="#6C6D75"/>
                                <path d="M11.375 7.125L10.7581 6.50813L7.4375 9.82438V1.875H6.5625V9.82438L3.24187 6.50813L2.625 7.125L7 11.5L11.375 7.125Z" fill="#6C6D75"/>
                              </svg>
                          </button>
                          <button className='w-8 h-8 rounded border border-color17 items-center justify-center px-2' onClick={()=>paidInvoice(invoic.id)} disabled={invoic.status=='paid'}>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.233 9.97536C10.233 7.95621 8.57925 7.72612 7.25052 7.54154C5.80239 7.3399 4.983 7.16529 4.983 5.91842C4.983 4.87148 6.07985 4.5 7.01903 4.5C7.48714 4.48486 7.95214 4.58121 8.37569 4.78111C8.79924 4.981 9.16921 5.27872 9.45508 5.64971L10.1359 5.10029C9.82976 4.70663 9.44882 4.37736 9.01499 4.13141C8.58116 3.88545 8.103 3.72765 7.608 3.66709V2.3125H6.733V3.63462C5.15135 3.73052 4.108 4.62337 4.108 5.91837C4.108 7.98775 5.78362 8.22081 7.13003 8.40775C8.553 8.60585 9.358 8.7763 9.358 9.97536C9.358 11.302 7.98748 11.5 7.1705 11.5C5.67013 11.5 5.03628 11.0783 4.44842 10.3503L3.76758 10.8997C4.11442 11.3567 4.56302 11.7267 5.07778 11.9801C5.59253 12.2335 6.15926 12.3634 6.733 12.3596V13.6875H7.608V12.3554C9.23795 12.2223 10.233 11.3372 10.233 9.97536Z" fill="#6C6D75"/>
                            </svg>
                          </button>
                          <button className='w-8 h-8 rounded border border-color17 items-center justify-center px-2' disabled={invoic.status=='sent' || invoic.status=='paid'} onClick={()=> sentInvoice(invoic.id)}> 
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.25 3.625H1.75C1.51794 3.625 1.29538 3.71719 1.13128 3.88128C0.967187 4.04538 0.875 4.26794 0.875 4.5V11.5C0.875 11.7321 0.967187 11.9546 1.13128 12.1187C1.29538 12.2828 1.51794 12.375 1.75 12.375H12.25C12.4821 12.375 12.7046 12.2828 12.8687 12.1187C13.0328 11.9546 13.125 11.7321 13.125 11.5V4.5C13.125 4.26794 13.0328 4.04538 12.8687 3.88128C12.7046 3.71719 12.4821 3.625 12.25 3.625ZM11.2875 4.5L7 7.46625L2.7125 4.5H11.2875ZM1.75 11.5V4.89812L6.75063 8.35875C6.82386 8.40956 6.91087 8.43678 7 8.43678C7.08913 8.43678 7.17614 8.40956 7.24937 8.35875L12.25 4.89812V11.5H1.75Z" fill="#6C6D75"/>
                            </svg>
                          </button>
                          <button className='w-8 h-8 rounded border border-color17 items-center justify-center px-2' onClick={()=>deleteInvoice(invoic.id)}>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.625 2.875H4.5C4.56875 2.875 4.625 2.81875 4.625 2.75V2.875H9.375V2.75C9.375 2.81875 9.43125 2.875 9.5 2.875H9.375V4H10.5V2.75C10.5 2.19844 10.0516 1.75 9.5 1.75H4.5C3.94844 1.75 3.5 2.19844 3.5 2.75V4H4.625V2.875ZM12.5 4H1.5C1.22344 4 1 4.22344 1 4.5V5C1 5.06875 1.05625 5.125 1.125 5.125H2.06875L2.45469 13.2969C2.47969 13.8297 2.92031 14.25 3.45313 14.25H10.5469C11.0813 14.25 11.5203 13.8313 11.5453 13.2969L11.9313 5.125H12.875C12.9438 5.125 13 5.06875 13 5V4.5C13 4.22344 12.7766 4 12.5 4ZM10.4266 13.125H3.57344L3.19531 5.125H10.8047L10.4266 13.125Z" fill="#6C6D75"/>
                            </svg>
                          </button> 
                          </div>
                          </div>
                          </div>)) }
                          </div>
                          </div>     

                        


          <div className='h-47 lg:flex mt-2 lg:justify-between md:flex md:justify-between items-center'>
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
                  <span className='text-color21 text-sm font-link-os'>{((currentPage-1)*rows)+1} - {rows*currentPage>invoicing.count ? invoicing.count : rows*currentPage} of {invoicing.count} Invoices</span>
                </div>
            </div>
            <div className='flex w-386 h-8 space-x-2'>
            <button
      disabled={invoicing.previous == null}
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
                disabled={invoicing.next == null}
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
      disabled={invoicing.next == null}
      onClick={() => setCurrentPage(currentPage + 1)}
      className="inline-flex items-center justify-center w-49 h-full text-sm font-link-os text-[rgba(0,0,0,0.45)] bg-white border border-color25 rounded hover:bg-color26 hover:text-color27 hover:border-color28">Next</button></>}
            </div>
          </div> 
      

      </div> 
      </div>  
  )
}
