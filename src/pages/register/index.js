import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-400 to-blue-500">
      <div className="text-white font-bold text-5xl mb-8">
        Create Account
      </div>
      <div className="bg-white rounded-lg shadow-xl p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Enter your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200">
          Register
        </button>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-sm text-blue-500 hover:underline">
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
