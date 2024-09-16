import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import logo from "../../assets/contact_us/Mask group.png";
import location from "../../assets/contact_us/Group 9319.png";
import mail from "../../assets/contact_us/Group 9320.png";
import phone from "../../assets/contact_us/Group 9321.png";
import ContactForm from "../home_page/ContactForm";
import img from "../../assets/contact_us/Group 9318.png";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-[6vw] flex flex-col md:flex-row mt-12 md:mt-0 gap-8">
  <div className="md:pt-24 flex-1 md:w-1/2">
    <span className="text-3xl text-blue-theme font-inter font-bold md:font-semibold md:text-4xl">
      <span className="text-red-theme">CONTACT</span> US
    </span>
    <p className="text-gray-500 mb-6 mt-8 md:text-xl">
      Our team at Visa Expert is here to help! Whether you need advice on
      the right visa for your travel plans or support throughout the
      application process, we're just a message away. Contact us today,
      and let our experts guide you to a successful visa outcome.
    </p>
    <div className="border-t-8 rounded-full border-grey my-4 mt-20"></div>
    <p className="text-3xl font-inter font-semibold md:text-4xl">
      Travel beyond your imagination,
      <br />
      with{" "}
      <span className="text-red-theme font-inter font-semibold">
        Visa Expert
      </span>
    </p>
  </div>
  <div className="md:w-1/2 mt-8 md:mt-0">
    <img 
      src={logo} 
      alt="Logo" 
      className="w-full h-auto max-h-[400px] md:max-h-[700px] object-contain" 
    />
  </div>
</div>

<div className="px-6 md:px-[6vw] flex flex-col md:flex-row justify-between mt-10 flex-wrap gap-16">
  {/* Location Section */}
  <div className="w-auto flex items-center flex-col">
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-28 h-auto">
        {/* Round container for image */}
        <div className="w-24 h-24 rounded-full flex justify-center items-center overflow-hidden bg-gray-200">
          <img src={location} alt="Location Icon" className="w-full h-full object-cover" />
        </div>
        <span className="text-xs mt-2">LOCATION</span>
      </div>
    </div>
    <p className="text-gray-600 text-center text-sm mt-2">
      1626 Michigan Ave, <br />
      Miami Beach, FL 33139, <br />
      United States
    </p>
  </div>

  {/* Write for Anything Section */}
  <div className="w-auto flex items-center flex-col">
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-28 h-auto">
        {/* Round container for image */}
        <div className="w-24 h-24 rounded-full flex justify-center items-center overflow-hidden bg-gray-200">
          <img src={mail} alt="Mail Icon" className="w-full h-full object-cover" />
        </div>
        <span className="text-xs mt-2 text-center">
          WRITE FOR ANYTHING
        </span>
      </div>
    </div>
    <p className="text-gray-600 text-center text-sm mt-2">
      info@visaexpert.com <br />
      support@visaexpert.com
    </p>
  </div>

  {/* Phone Section */}
  <div className="w-auto flex items-center flex-col">
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-28 h-auto">
        {/* Round container for image */}
        <div className="w-24 h-24 rounded-full flex justify-center items-center overflow-hidden bg-gray-200">
          <img src={phone} alt="Phone Icon" className="w-full h-full object-cover" />
        </div>
        <span className="text-xs mt-2">GIVE US A CALL</span>
      </div>
    </div>
    <p className="text-gray-600 text-center text-sm mt-2">
      Tour Consultant: +1 629 592 593 <br />
      Administration: +1 184 016 482 <br />
      Technical Office: +1 963 935 836
    </p>
  </div>
</div>

      <div className="relative px-6 md:px-[6vw] flex flex-col gap-12 lg:flex-row bg-white p-8 rounded-lg mt-32 md:h-[39rem] max-w-full mx-auto">
        {/* Left Section */}
        <div className="flex-1 flex flex-col">
          <div className="text-left">
            <h2 className="text-lg font-bold mt-2 mb-4">
              Explore the world with us, one adventure at a time.
            </h2>
            <p className="text-gray-500 mb-6">
              We are a team of experienced travel experts who specialize in
              planning and organizing unforgettable travel experiences for our
              clients with a wide range of travel services, including flight
              bookings, hotel reservations, and more.
            </p>
            <div className="border-t-8 rounded-full border-grey my-4"></div>
            <p className="text-gray-500 mt-6">Local travel guides</p>
            <button className="px-9 py-4 text-white mt-24 bg-button-color">
              MORE INFO
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center relative mt-8 lg:mt-0">
          <img src={img} alt="Travel Image" className="md:w-[70%]" />
        </div>
      </div>

      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
