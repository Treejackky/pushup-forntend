import { Link, useParams } from "react-router-dom";

export default function Navbar() {
  const { lang } = useParams();
  const validLang = ["en", "th"].includes(lang) ? lang : "en";

  return (
    <div className="flex justify-between px-5 bg-white pb-4 border-b border-gray-300">
      <div className="mr-5 mt-6 text-2xl font-bold">PosePoint</div>
      <div className="flex flex-row gap-5 mt-6">
        <Link to={`/${validLang}/home`} className="hover:bg-gray-300 hover:rounded-full p-2 duration-200">Home</Link>
        <Link to={`/${validLang}/bmi`} className="hover:bg-gray-300 hover:rounded-full p-2 duration-200">BMI</Link>
        <Link to={`/${validLang}/monitor`} className="hover:bg-gray-300 hover:rounded-full p-2 duration-200">Workout Detection</Link>
        <Link to={`/${validLang}/stats`} className="hover:bg-gray-300 hover:rounded-full p-2 duration-200">Progress & Stats</Link>
        <Link to={`/${validLang}/calendar`} className="hover:bg-gray-300 hover:rounded-full p-2 duration-200">Workout Plans</Link>
        <Link to={`/${validLang}/board`} className="hover:bg-gray-300 hover:rounded-full p-2 duration-200">Leaderboard</Link>
        <Link to={`/${validLang}/login`} className="bg-gray-200 py-2 px-3 rounded-full hover:text-gray-400 border">Sign in</Link>
        <Link to={`/${validLang}/register`} className="bg-black py-2 px-3 rounded-full text-white hover:text-gray-300">Register</Link>
      </div>
    </div>
  );
}
