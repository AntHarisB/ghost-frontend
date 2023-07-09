import Login from './pages/login/Login';
import Home from './pages/home/Home';
import HomeDRC from './pages/home/HomeDRC'
import HomePlan from './pages/home/HomePlan'
import Projects from './pages/projects/Projects'
import Employees from './pages/employees/Employees'
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react';



export default function App() {
const [user, setUser]=useState([]);


  return (
    <>
    <Routes>
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/home" element={<Home user={user}/>} />
        <Route path="/homedrc" element={<HomeDRC/>} />
        <Route path="/homeplan" element={<HomePlan/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/employees" element={<Employees/>} />
        <Route path='/*' component={<h1>404</h1>}/>
    </Routes>
    </>
  );
}



