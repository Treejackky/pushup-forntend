import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './view/landingpage/Home';
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF7FE]">
      <Navbar />
        <Outlet />
       
    </div>
  );
}

export default App;