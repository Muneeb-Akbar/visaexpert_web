import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import userIcon from "../../assets/images/icon.png"; // Renamed to avoid conflicting with user context
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UseApplicationContext } from "../../contexts/applicationContext";

function ApplicationSignup() {
  const { username, setUsername } = UseApplicationContext();
  const [name, setName] = useState(username || ""); // Initialize with the existing username if available

  // Update the username in context when name changes and only if username doesn't already exist
  useEffect(() => {
    if (username !== name) {
      setUsername(name);
    }
  }, [name, username, setUsername]);

  // Function to handle changes in the input field
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="shadow-2xl w-full max-w-md rounded-2xl h-auto py-8 px-6 bg-white">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img src={userIcon} className="h-12 w-12 mr-3" alt="User Icon" />
              <div className="flex flex-col">
                <p className="text-sm">Visa Expert</p>
                <p className="text-sm font-bold text-blue-theme">
                  Where the journey begins! 
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-sm">
                Your Australia visa <br /> guaranteed on
              </p>
              <p className="text-sm text-blue-theme font-bold">
                19 September 2024 at 11:43pm
              </p>
            </div>
            <Link to={"/application"}>
              <FaLongArrowAltLeft className="mt-4 cursor-pointer" />
            </Link>
            <div className="mt-6">
              <label className="block text-sm font-bold mb-1">Username</label>
              <p className="text-gray-500 text-sm mb-3">
                Set up your account name to get started.
              </p>
              <input
                type="text"
                id="Username"
                placeholder="Enter your name"
                value={name} // bind input value to name state
                onChange={handleNameChange} // update name state on input change
                className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme text-sm"
              />
              <Link to={"/application/password"}>
                <button className="w-full bg-blue-theme p-3 text-white text-xs rounded-xl mt-4 hover:font-bold cursor-pointer">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ApplicationSignup;
