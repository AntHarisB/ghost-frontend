import React, { useState } from "react";
import axios from "axios";


export default function Login(){

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  const getMethod=()=>{
    axios.get('http://127.0.0.1:8000/user/').then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
  

   return(
    <div className="flex justify-center items-center h-screen">
  <form className="bg-white px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit}>
    <h2 className="text-2xl font-bold text-center mb-6">Log in</h2>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm  mb-2" htmlFor="email">
        Email
      </label>
      <input
        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm  mb-2" htmlFor="password">
        Password
      </label>
      <input
        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
 
    <div className="flex items-center justify-center">
      <button className="bg-gray-800  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-96" type="button" onClick={getMethod}>
       Log in
      </button>
    </div>
    <div className="flex items-center justify-between mb-6 py-2">
      <label className="block text-gray-700 ">
        <input className="mr-2 leading-tight " type="checkbox" />
        <span className="text-sm text">Remember password</span>
      </label>
      <a className="inline-block align-baseline underline text-sm text-gray-700 " href="#">
        Forgot password?
      </a>
    </div>
  </form>
</div>
   )
}