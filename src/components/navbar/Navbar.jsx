import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

import logo from "../../assets/home_page/visaExpertLogo.png";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
  const location = useLocation(); // Get the current path

  // Function to check if the link is active
  const isActive = (...paths) => paths.some(path => location.pathname === path);

  return (
    <>
      <div className="px-6 md:px-[6vw] flex justify-between items-center">
        {/* Logo and Title Section */}
        <Link to="/">
          <div className="flex items-center cursor-pointer">
            <img src={logo} className="h-20 w-20" alt="Logo" />
            <div className="flex flex-col ml-2">
              <span className="flex-none font-bold text-lg">Visa Expert</span>
              <div className="bg-red-400 h-[1px]"></div>
              <p className="text-[0.5rem]">Where the journey begins!</p>
            </div>
          </div>
        </Link>

        {/* Navigation Links for Medium and Larger Screens */}
        <div>
          <ul className="hidden md:flex md:w-auto gap-[2vw]">
            <li
              className={`cursor-pointer md:width-auto hover:font-semibold ${
                isActive("/") ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              <Link to="/">Home</Link>
            </li>

            {/* Dropdown for Services */}
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div
                className={`flex gap-1 justify-center items-center cursor-pointer hover:font-semibold ${
                  isActive("/service", "/service_list")
                    ? "font-bold text-black"
                    : "text-gray-500"
                }`}
              >
                <Link to="/service">Services</Link>
                <IoMdArrowDropdown />
              </div>
              {dropdownOpen && (
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg w-48 py-2 z-50 transition-all duration-300 ease-in-out">
                  <li
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 hover:font-semibold transition-all duration-200 ${
                      isActive("/service_list")
                        ? "font-bold text-black"
                        : "text-gray-500"
                    }`}
                  >
                    <Link to="/service_list">Services List</Link>
                  </li>
                  {/* Add more dropdown items if needed */}
                </ul>
              )}
            </li>

            <li
              className={`cursor-pointer md:width-auto hover:font-semibold ${
                isActive("/about") ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              <Link to="/about">About Us</Link>
            </li>
            <li
              className={`cursor-pointer md:width-auto hover:font-semibold ${
                isActive("/contact") ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              <Link to="/contact">Contact</Link>
            </li>
            <li
              className={`cursor-pointer md:width-auto hover:font-semibold ${
                isActive("/career") ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              Career
            </li>
          </ul>
        </div>

        {/* Log In and Sign Up Buttons for Medium and Larger Screens */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex-none rounded-full px-4 py-2 text-black shadow-sm text-sm hover:bg-gray-100 transition duration-200">
            <Link to="/login">Log In</Link>
          </button>
          <button className="flex-none bg-button-color rounded-full px-4 py-2 text-white text-sm hover:opacity-90 transition duration-200">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>

        {/* Mobile Menu Icon for Smaller Screens */}
        <div
          className="md:hidden text-4xl cursor-pointer"
          onClick={() => setClick(!click)}
        >
          {click ? <MdOutlineCancel /> : <IoMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {click && (
        <div className="md:hidden bg-white absolute w-full shadow-lg">
          <ul className="flex flex-col items-left px-8 p-4 gap-4 justify-center">
            <li
              className={`cursor-pointer hover:font-semibold ${
                isActive("/") ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              <Link to="/" onClick={() => setClick(false)}>
                Home
              </Link>
            </li>
            <li
              className={`cursor-pointer hover:font-semibold ${
                isActive("/service") ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              <div>
                <Link to="/service" onClick={() => setClick(false)}>
                  Services
                </Link>
              </div>
            </li>
            <li
              className={`cursor-pointer hover:font-semibold ${
                isActive("/about") ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              <Link to="/about" onClick={() => setClick(false)}>
                About Us
              </Link>
            </li>
            <li
              className={`cursor-pointer hover:font-semibold ${
                isActive("/contact") ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              <Link to="/contact" onClick={() => setClick(false)}>
                Contact
              </Link>
            </li>
            <li
              className={`cursor-pointer hover:font-semibold ${
                isActive("/career") ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              <Link to="/career" onClick={() => setClick(false)}>
                Career
              </Link>
            </li>
            <li
              className={`cursor-pointer hover:font-semibold ${
                isActive("/login") ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              <Link to="/login" onClick={() => setClick(false)}>
                Log In
              </Link>
            </li>
            <li
              className={`cursor-pointer hover:font-semibold ${
                isActive("/signup") ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              <Link to="/signup" onClick={() => setClick(false)}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
