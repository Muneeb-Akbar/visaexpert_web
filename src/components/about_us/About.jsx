import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import company from "../../assets/about_us/company.png";
import layer from "../../assets/about_us/layer.png";
import group from "../../assets/about_us/Group 9291.png";
import user from "../../assets/about_us/15735339-removebg-preview 1.png";
import solution from "../../assets/about_us/8899643-removebg-preview 1.png";
import centric from "../../assets/about_us/images__7_-removebg-preview 1.png";

function About() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:pl-[6vw] md:pr-0 flex flex-col md:flex-row justify-between items-center mt-12 md:mt-0">
        <div className="flex-1">
          <div className="md:mt-20">
            <p className="flex flex-col md:flex-row gap-2">
              <span className="text-3xl md:text-4xl font-inter font-bold text-blue-theme md:font-semibold">
                <span className="text-red-theme">TRAVEL</span> WITH US
              </span>
            </p>
          </div>
          <p className="text-gray-500 mb-6 mt-8 md:text-xl md:w-[45rem]">
            Welcome to Visa Expert, your trusted partner in navigating the
            complexities of visa and travel consultancy. With extensive industry
            experience, we specialize in providing comprehensive visa solutions
            tailored to meet your individual travel needs. Whether you're
            planning a vacation, a business trip, or studying abroad, our
            dedicated team is here to simplify the visa application process for
            you.
          </p>
          <div className="border-t-8 rounded-full border-grey my-4"></div>
          <button className="px-9 py-4 text-white bg-button-color mt-4 md:mt-20">
            MORE INFO
          </button>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:relative flex justify-center items-center">
          <img
            src={company}
            className="w-full md:w-[26rem] object-cover"
            alt="Company"
          />
          <img
            src={layer}
            className="hidden md:block md:absolute md:top-[-4.6rem] md:left-0 md:w-[41rem] lg:w-[61rem] h-auto"
            alt="Layer"
          />
        </div>
      </div>

      <div className="px-6 md:px-[6vw] mt-20 md:mt-32 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-blue-theme">What We Offer</h1>
          <p className="text-gray-500 pt-3 text-center">
            Comprehensive visa services, travel bookings, and a B2B partner
            program
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={group} className="md:w-[85%]" alt="" />
        </div>
      </div>
      <div className="mt-32 px-6 md:px-[6vw]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-blue-theme">
            Why Choose Visa Expert?
          </h1>
          <div className="md:flex  gap-16 mt-16 ">
            <div className="w-[310px] h-[360px] shadow-lg hover:shadow-2xl rounded-3xl flex justify-evenly flex-col items-center px-6">
              <img src={user} className="max-w-28" alt="" />
              <div>
                <h3 className="font-semibold">Expert Guidance</h3>
                <p className="text-gray-500 pt-3 text-left">
                  Our team of visa specialists stays updated with the latest
                  regulations and requirements, ensuring you receive accurate
                  and reliable information.
                </p>
              </div>
            </div>
            <div className="w-[310px] h-[360px] shadow-lg hover:shadow-2xl rounded-3xl flex justify-evenly flex-col items-center px-6">
              <img src={solution} className="max-w-28" alt="" />
              <div>
                <h3 className="font-semibold">Comprehensive Solutions</h3>
                <p className="text-gray-500 pt-3 text-left">
                  From visa applications to hotel and flight booking, we provide
                  an all-in-one service that simplifies your travel planning.
                </p>
              </div>
            </div>
            <div className="w-[310px] h-[360px] shadow-lg hover:shadow-2xl rounded-3xl flex justify-evenly flex-col items-center px-6">
              <img src={centric} className="max-w-28" alt="" />
              <div>
                <h3 className="font-semibold">Customer-Centric Approach</h3>
                <p className="text-gray-500 pt-3 text-left">
                  Your satisfaction is our priority. We work closely with you to
                  understand your needs and provide personalized solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
