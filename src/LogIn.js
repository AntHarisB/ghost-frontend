import React, { useState } from "react";
import axios from "axios";
import bgImage from './image/background.png';
import logo from './image/antcolony-logo.png';


export default function Login(){

  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  const getMethod = () => {
    axios.post('http://127.0.0.1:8000/api/token/', {username: username, password: password})
      .then(res => {
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        axios.get('http://127.0.0.1:8000/user/', {
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
  

  return(
    <div className="flex min-h-screen">
    <div
      className="w-1/2 bg-cover bg-right flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex justify-center items-center h-screen ">
          <img src={logo} alt="Logo" className="w-auto sm:h-8" />
          </div>
    </div>
  
  
    <div className="w-1/2 flex flex-col items-center justify-center">
    <h2 className="text-3xl text-primary font-semibold  text-center  mb-6">Log in</h2>
<form className="flex justify-center  items-center bg-white px-8 pt-6 pb-8 mb-4" style={{ width: "450px"}} onChange={handleSubmit}>
  <div >
    <div className="mb-4">
      <label className="block text-primary text-16px font-medium mb-2" htmlFor="email">
        Username
      </label>
      <input
        className="appearance-none  border border-tertiary border-1 rounded border-opacity-100 py-2 px-3 text-secondary placeholder-secondary-500 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        style={{ width: "450px", height:"48" }}
        type=""
        placeholder="Enter your username"
        onChange={(e)=>setUsername(e.target.value)}
      />
    </div>
    <div className="mb-7">
      <label className="block text-primary  font-medium text-16px mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="appearance-none  border border-tertiary border-1 border-opacity-100 rounded py-2 px-3 text-secondary placeholder-secondary-500 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        style={{ width: "450px", height: "48" }}
        type="password"
        placeholder="Enter your password"
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>

    <button
      className="bg-customColor  text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      style={{ width: "450px", height: "48" }} onClick={getMethod}>
      Log in
    </button>

    <div className="flex justify-between w-full mt-3 ">
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" name="remember" />
          <span className="ml-2 mb-1 text-16px  font-medium text-primary">Remember password</span>
        </label>
      </div>
      <div >
        <a  href="#" className="text-customColor  text-16px underline font-medium">
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