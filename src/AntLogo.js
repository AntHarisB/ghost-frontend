import React from 'react';
import bgImage from './image/background.png';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import logo from './image/antcolony-logo.png';




export default function Antlogo(){
   return(
      <div className="h-screen bg-cover bg-no-repeat  " style={{ backgroundImage: `url(${bgImage})` }}>
         <div className="flex justify-center items-center h-screen ">
            <img src={logo} alt="Logo" className="h-18 w-1/2" />
            </div>
      </div>
   )
}
