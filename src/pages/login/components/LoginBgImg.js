import React from 'react'
import bgImage from '../../../image/background.png';
import logo from '../../../image/antcolony-logo.png'

const LoginBgImg = () => {
  return (
    <div className="w-full lg:w-1/2 bg-cover bg-right flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="flex justify-center items-center h-screen ">
          <img src={logo} alt="Logo" className="w-auto sm:h-8" />
        </div>
    </div>
  )
}

export default LoginBgImg
