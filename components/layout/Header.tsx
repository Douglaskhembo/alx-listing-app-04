import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
          ALXListing
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-indigo-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Properties
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            About
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <input
            type="search"
            placeholder="Search properties"
            className="hidden md:block px-3 py-1 border rounded-md focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
          <button className="text-indigo-600 font-semibold hover:underline">
            Sign In
          </button>
          <button className="bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
