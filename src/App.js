import Login from './pages/login/Login';
import Home from './pages/home/Home';
import HomeDRC from './pages/home/HomeDRC'
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function App() {
const [user, setUser]=useState([]);


  return (
    <>
        {console.log(user)}
    <Routes>
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/home" element={<Home user={user}/>} />
        <Route path="/homedrc" element={<HomeDRC/>} />
        <Route path='/*' component={<h1>404</h1>}/>
    </Routes>
    </>
  );
}

