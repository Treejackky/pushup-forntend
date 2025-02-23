import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-white font-bold text-5xl mb-8">
        Welcome Back
      </div>
      <div className="bg-white rounded-lg shadow-xl p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input 
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="text" 
            placeholder="Enter your email" 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input 
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="password" 
            placeholder="Enter your password" 
          />
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200">
          Sign In
        </button>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
