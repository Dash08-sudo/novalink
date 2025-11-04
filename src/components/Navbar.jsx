import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">NovaLink</h1>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
          <li><a href="#mentors" className="hover:text-indigo-600">Mentors</a></li>
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
          Join for Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
