import React, { useState } from "react";
import '../../App.css';
import LoginBgImg from "./components/LoginBgImg";
import AxiosInstance from '../../AxiosInstance.js';
import AxiosApiInstance from '../../AxiosApiInstance.js';



export default function Login(){
  const [userLoginData, setUserLoginData]=useState({
    username:'',
    password:''
  });

  const handleSubmit=async(e)=>{
    e.preventDefault();
    AxiosInstance.post('/api/token/', {username: userLoginData.username, password: userLoginData.password})
        .then(res => {
          localStorage.setItem('access_token', res.data.access);
          localStorage.setItem('refresh_token', res.data.refresh);
          AxiosInstance.get('/user/', {
            headers: {
              'Authorization': `Bearer ${res.data.access}`
            }
          })
            .then(res => {
              window.location.href = 'http://localhost:3000/home';
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    }

    const changeUserLoginData=(e)=>{
      setUserLoginData({...userLoginData, [e.target.name]:e.target.value})
    }

  

  return(
 <div className="flex flex-col lg:flex-row min-h-screen ">

  <LoginBgImg/>
  
  <div className="w-full lg:w-1/2 py-20 flex flex-col items-center justify-center">
    <h2 className="text-32 font-face-gsb font-semibold text-primary  text-center  mb-6">Log in</h2>
    <form className="flex justify-center items-center bg-white px-8 pt-6 pb-8 mb-4 w-full"  onSubmit={handleSubmit}>
      <div >
        <div className="mb-4">
            <label className="block text-primary font-face-m font-medium text-base  mb-2" htmlFor="username">
              Username
            </label>
              <input
                className="appearance-none sm:w-450  font-face-r font-normal text-base w-full h-12 border border-tertiary border-1 rounded border-opacity-100 py-2 px-3 text-secondary placeholder-secondary-500 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type=""
                placeholder="Enter your username"
                onChange={changeUserLoginData}
              />
        </div>

        <div className="mb-7">
            <label className="block text-primary font-face-m font-medium text-base mb-2" htmlFor="password">
              Password
            </label>
              <input
                className="appearance-none sm:w-450 font-face-r w-full h-12 font-normal border border-tertiary text-base border-1 border-opacity-100 rounded py-2 px-3 text-secondary placeholder-secondary-500 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={changeUserLoginData}
              />
        </div>

        <button
          className="bg-customColor sm:w-450 font-face-gsb w-full h-12 font-semibold text-white text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Log in
        </button>

        <div className="flex space-x-5 justify-between w-full mt-3 ">
          <div >
            <label className="inline-flex items-center ">
              <input type="checkbox" className="form-checkbox bg-customColor h-4 w-4 mb-1" name="remember" />
              <span className="ml-2 mb-1 text-base font-face-m font-medium text-primary">Remember password</span>
            </label>
          </div>

              <div className="text-right" >
                <a  href="#" className="text-customColor text-right font-face-m font-medium text-base underline ">
                  Forgot password?
                </a>
              </div>
        </div>
      </div>
    </form>
  </div>
</div>
  
);
}