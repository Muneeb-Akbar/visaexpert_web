import React, { useState } from "react";
import img1 from "../../assets/login/Ellipse 2.png";
import img2 from "../../assets/login/Ellipse 3.png";
import { Link } from "react-router-dom";
import img3 from "../../assets/login/Polygon 1.png";
import logo from "../../assets/home_page/visaExpertLogo.png";

function SignUp() {
  // State to store form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can process the formData here, such as sending it to an API
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex md:w-[60%] bg-white rounded-3xl shadow-2xl h-[38rem] ">
        {/* Sign Up Section */}
        <div className="w-[60%] p-8">
          {/* Logo  */}
          <div>
            <Link to="/">
              <div className="flex items-center cursor-pointer">
                <img src={logo} className="h-20 w-20" alt="Logo" />
                <div className="flex flex-col ml-2">
                  <span className="flex-none font-bold text-lg ">
                    Visa Expert
                  </span>
                  <div className="bg-red-400 h-[1px]"></div>
                  <p className="text-[0.5rem]">Where the journey begins!</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="px-10">
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-3xl font-bold ">SIGN UP</h2>
              <p className="text-gray-500 mb-8">
                Sign Up using social networks
              </p>
            </div>
            <div className="flex justify-around ">
              {/* Social Icons */}
              <button className="text-3xl text-blue-500">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="text-3xl text-red-500">
                <i className="fab fa-google"></i>
              </button>
              <button className="text-3xl text-blue-700">
                <i className="fab fa-linkedin"></i>
              </button>
            </div>
            <div className="flex justify-center items-center ">
              <div className="bg-gray-300 h-[1px] w-full"></div>
              <p className="text-gray-300 text-xs mx-3 mb-4">OR</p>
              <div className="bg-gray-300 h-[1px] w-full"></div>
            </div>
            {/* Sign Up Form */}
            <form onSubmit={handleSubmit}>
              <div className="flex mb-4">
                <div className="flex gap-2">
                  <div className="flex flex-col relative">
                    <label
                      htmlFor="firstName"
                      className="top-[-10px] left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                    />
                  </div>

                  <div className="flex flex-col relative">
                    <label
                      htmlFor="lastName"
                      className="top-[-10px] left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col relative mb-4">
                <label
                  htmlFor="email"
                  className="top-[-10px] left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                />
              </div>

              <div className="flex gap-2">
                <div className="flex flex-col relative">
                  <label
                    htmlFor="password"
                    className="top-[-10px] left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                  />
                </div>

                <div className="flex flex-col relative">
                  <label
                    htmlFor="confirmPassword"
                    className="top-[-10px] left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                  />
                </div>
              </div>

              <div className="flex items-center mb-4 mt-6">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mr-2 rounded-full"
                />
                <span className="text-xs">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600">
                    Terms and Conditions
                  </a>
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-theme rounded-full text-white"
              >
                Register
              </button>
            </form>
          </div>
        </div>
        {/* SignUp Section */}
        <div className="relative w-[40%] bg-gradient-to-b rounded-r-3xl from-red-500 to-blue-theme p-8 text-white flex flex-col justify-center items-center">
          <img className="absolute h-40 w-auto top-5 left-3" src={img3} alt="" />
          <img className="absolute h-40 w-auto top-56 right-4" src={img2} alt="" />
          <img className="absolute h-40 w-auto top-96 left-64" src={img1} alt="" />

          <h2 className="text-3xl font-bold mb-4 z-[1]">LOGIN HERE</h2>
          <p className="mb-8 text-center">
            Login and discover a great amount of new opportunities
          </p>

          <Link
            to={"/login"}
            className="bg-button-color rounded-full px-6 w-[60%] text-center cursor-pointer py-3 text-white text-sm hover:font-semibold z-[1]"
          >
            <button className="">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
