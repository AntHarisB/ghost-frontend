import LogIn from './LogIn';
import Home from './Home';
import { Route, Routes, useNavigate } from "react-router-dom";


export default function App() {

  return (
    <>
    <Routes>
        <Route path="/login" element={<LogIn/>} />
        <Route path="/home" element={<Home/>} />
        <Route path='/*' component={<h1>404</h1>}/>
    </Routes>
    </>
  );
}

