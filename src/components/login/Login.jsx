import React, { useState } from "react";
import img1 from "../../assets/login/Ellipse 2.png";
import img2 from "../../assets/login/Ellipse 3.png";
import { Link } from "react-router-dom";
import img3 from "../../assets/login/Polygon 1.png";
import logo from "../../assets/home_page/visaExpertLogo.png";

function Login() {
  // State to store input data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // You can process the data here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex md:w-[60%] bg-white rounded-3xl shadow-2xl h-[38rem]">
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
              <h2 className="text-3xl font-bold w-[24rem] mt-4">LOGIN TO YOUR ACCOUNT</h2>
              <p className="text-gray-500 mb-8">Login using social networks</p>
            </div>
            <div className="flex justify-around">
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
            <div className="flex justify-center items-center">
              <div className="bg-gray-300 h-[1px] w-full"></div>
              <p className="text-gray-300 text-xs mx-3 mb-4">OR</p>
              <div className="bg-gray-300 h-[1px] w-full"></div>
            </div>
            {/* Sign Up Form */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col relative mb-4 mt-4">
                <label
                  htmlFor="email"
                  className="top-[-10px] left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                />
              </div>
              <div className="flex flex-col relative mb-4">
                <label
                  htmlFor="password"
                  className="top-[-10px] left-2 px-2 text-xs font-medium text-gray-700 absolute z-[1] bg-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-theme"
                />
              </div>
              <div className="flex items-center mb-4 mt-6">
                <input type="checkbox" className="mr-2 rounded-full" />
                <span className="text-xs">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600">
                    Terms and Conditions
                  </a>
                </span>
              </div>
              <button className="w-full py-2 bg-blue-theme rounded-full text-white">
                Login
              </button>
            </form>
          </div>
        </div>
        {/* Login Section */}
        <div className="relative w-[40%] bg-gradient-to-b rounded-r-3xl from-red-500 to-blue-theme p-8 text-white flex flex-col justify-center items-center">
          <img className="absolute h-40 w-auto top-5 left-3" src={img3} alt="" />
          <img className="absolute h-40 w-auto top-56 right-4" src={img2} alt="" />
          <img className="absolute h-40 w-auto top-96 left-64" src={img1} alt="" />
          <h2 className="text-3xl font-bold mb-4 z-[1]">NEW HERE ?</h2>
          <p className="mb-8 text-center">
            Sign up and discover a great amount of new opportunities
          </p>
          <Link
            to={"/signup"}
            className="bg-button-color rounded-full px-6 w-[60%] text-center cursor-pointer py-3 text-white text-sm hover:font-semibold z-[1]"
          >
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
