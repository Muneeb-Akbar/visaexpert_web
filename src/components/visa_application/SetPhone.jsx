import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import user from "../../assets/images/icon.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UseApplicationContext } from "../../contexts/applicationContext";

function SetPhone() {
  const { phone_no, setPhoneNo } = UseApplicationContext();
  const [phone, setPhone] = useState(phone_no || "");

  const v = UseApplicationContext();
  console.log(v);
  // Update the Password in context when name changes and only if Password doesn't already exist
  useEffect(() => {
    if (phone_no !== phone) {
      setPhoneNo(phone);
    }
  }, [phone, phone_no, setPhoneNo]);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };


  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="shadow-2xl w-full max-w-md rounded-2xl h-auto py-8 px-6 bg-white">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img src={user} className="h-12 w-12 mr-3" alt="User Icon" />
              <div className="flex flex-col">
                <p className="text-sm">Visas on time</p>
                <p className="text-sm font-bold text-blue-theme">
                  And sign ips on no time.
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
            <Link to={"/application/password"}>
              <FaLongArrowAltLeft className="mt-4" />
            </Link>
            
            <div className="mt-6">
              <label className="block text-sm font-bold mb-1">Add your Phone</label>
              <p className="text-gray-500 text-sm mb-3">
                We need this to send your approved visa
              </p>
              <input
                type="phone"
                id="phone"
                value={phone} // Controlled input
                onChange={handlePhoneChange} // Update phone number
                placeholder="Enter your Phone"
                className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme text-sm"
              />
              <Link to={'/application/upload_photo'}>
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

export default SetPhone;
