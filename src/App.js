import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { Route, Routes, useNavigate } from "react-router-dom";


export default function App() {

  return (
    <>
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path='/*' component={<h1>404</h1>}/>
    </Routes>
    </>
  );
}

