/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#292929',
        secondary:'#272934',
        customColor:'#1A3835',  
        tertiary:'#B1B5CA', 
        color5:'#242834',
        color6:'#57585F',
        color7:'#E9F3F2',
        color8:"#7BB99F",
        color9:"#232F2D",
        color10:"#0C221F",
        color11:"#B3DFC9",
        color12:"#788489",
        color13:"#43A57C",
        color14:"#F5FFFA",
      },
      width:{
        450:"450px",
        284:"284px",
        54:"54px",
        236:"236px",
        92:"92px",
        99:"99px",
        1050:"1050px",
        42:"42px",
        106:"106px",
        122:"122px",
        134:"134px",
        136:"136px",
        117:"117px",
        129:"129px",
        81:"81px",
        510:"510px",
        470:"470px", 
        200:"200px",
        110:"110px",
        15:"15px" , 
        1010:"1010px",
        988:"988.8px",
        422:"422.15px"
       
      
      },

      height:{
        74:"74px",
        54:"54px",
        18:"18px",
        349:"349px",
        170:"170px",
        70:"70px",
        42:"42px",
        50:"50px",
        342:"342px",
        68:"68px",
        200:"200px",
        1224:"1224px",  
        392:"392px" ,
        22:"22px", 
        15:"15px",
        280:"280.56px", 
        26:"26px",
      },
      backgroundImage: {
        'sidebar-gradient': 'linear-gradient(179.32deg, #FCFDFC 8.04%, #E6F2ED 99.41%)',
      }
    },
  },
  plugins: [],
}

