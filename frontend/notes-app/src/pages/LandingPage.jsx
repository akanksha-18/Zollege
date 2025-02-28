import React from "react";
import { Link } from "react-router-dom";
import notes from "../assets/notes.jpg"; // Ensure the image path is correct

const LandingPage = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${notes})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Notes App</h1>
        <p className="text-lg mb-6">Get started by logging in or signing up</p>

        <div className="flex items-center justify-center space-x-4">
          <Link to="/login">
            <button className="px-6 py-3 text-lg bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-3 text-lg bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
