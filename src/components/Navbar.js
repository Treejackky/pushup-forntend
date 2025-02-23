import { createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div className="flex justify-between px-5 bg-[#FFFFFF] pb-10 border-b border-gray-500 ">
            <div className="mr-5 mt-6 text-2xl font-bold" >PosePoint</div>
            <div className="flex flex-row gap-5 mt-6 Hover:">
            <Link to="/home" className="hover:bg-gray-300 hover:rounded-full p-2  duration-200">Home</Link>
            <Link to="/BMI"  className="hover:bg-gray-300 hover:rounded-full p-2  duration-200">BMI</Link>
             <Link to="/WorkoutDetection"  className="hover:bg-gray-300 hover:rounded-full p-2  duration-200">Workout Detection</Link>
             <Link to="/ProgressStats"  className="hover:bg-gray-300 hover:rounded-full p-2  duration-200">Progress & Stats</Link>
             <Link to="/WorkoutPlans"  className="hover:bg-gray-300 hover:rounded-full p-2  duration-200">WorkoutPlans</Link>
             <Link to="/Leaderboard"  className="hover:bg-gray-300 hover:rounded-full p-2  duration-200">Leaderboard</Link>
             <Link to="/login"  className="bg-[#E3E3E3] py-2 px-3 rounded-full  hover:text-gray-400 border" >Sign in</Link>
             <Link to="/Register"className="bg-[#2C2C2C] py-2 px-3 rounded-full text-white hover:text-gray-300" >Register</Link> 
            </div>
            
        </div>
    )

} 
