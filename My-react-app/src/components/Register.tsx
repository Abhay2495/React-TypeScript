import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigation = useNavigate();

  const handleClick = (): void => {
    navigation("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register
        </h2>

        {/* Each label + input side by side */}
        <div className="flex items-center">
          <label className="w-1/3 text-gray-700 font-medium text-l">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-1/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="w-1/3 text-gray-700 font-medium">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-1/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="w-1/3 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-1/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="w-1/3 text-gray-700 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-1/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
        </div>

        <div className="flex items-center mb-6">
          <label className="w-1/3 text-gray-700 font-medium mb-4">Contact</label>
          <input
            type="number"
            placeholder="Enter Contact Number"
            className="w-1/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
        </div>

        {/* Button centered with margin top */}
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white py-2 px-10 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
