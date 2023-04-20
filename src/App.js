import LogIn from './LogIn';
import AntLogo from './AntLogo';


export default function App() {
  return (
    <div className="flex">
    <div className="w-1/2 h-screen " >
      <AntLogo/>
    </div>
    <div className="w-1/2 h-screen">
     <LogIn/>
    </div>
  </div>
  );
}


