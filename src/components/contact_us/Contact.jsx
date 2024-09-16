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
      <div className="px-6 md:pl-[6vw] md:pr-0 flex flex-col justify-center  md:flex-row mt-12 md:mt-0">
        <div className="md:pt-24">
          <span className=" text-3xl text-blue-theme font-inter font-bold  md:font-semibold md:text-4xl ">
            <span className="text-3xl font-inter  md:font-semibold  md:text-4xl text-red-theme">
              CONTACT
            </span>{" "}
            US
          </span>
          <p className="text-gray-500 mb-6 mt-8 md:text-xl">
            Our team at Visa Expert is here to help! Whether you need advice on
            the right visa for your travel plans or support throughout the
            application process, we're just a message away. Contact us today,
            and let our experts guide you to a successful visa outcome.
          </p>
          <div class="border-t-8 rounded-full border-grey my-4 mt-20"></div>

          <p className="flex flex-col mt-6">
            <p className="flex flex-col md:flex-row gap-2 f">
              <span className=" text-3xl font-inter font-semibold md:text-4xl">
                Travel beyond your imagination, <br />
                with{" "}
                <span className="text-red-theme text-3xl font-inter font-semibold md:text-4xl">
                  Visa Expert
                </span>
              </span>
            </p>
          </p>
        </div>
        <div className="md:w-[127rem]">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="px-6 md:px-[6vw]  flex flex-col md:flex-row md:justify-between mt-10 flex-wrap gap-16">
        <div className="w-auto flex  items-center flex-col">
          <div className=" flex flex-col justify-center items-center">
            <div className="flex flex-col  items-center w-28 h-auto">
              <div className="w-24 h-28 flex justify-center items-center">
                <img src={location} alt="" />
              </div>
              <span className="text-xs">LOCATION</span>
            </div>
          </div>
          <p className="text-gray-600 text-center text-sm mt-2">
            1626 Michigan, <br /> Ave Miami Beach FL 33139, <br /> United States
          </p>
        </div>
        <div className="w-auto flex  items-center flex-col">
          <div className=" flex flex-col justify-center items-center">
            <div className="flex flex-col  items-center w-28 h-auto">
              <div className="w-24 h-28 flex justify-center items-center">
                <img src={mail} alt="" />
              </div>
              <span className="text-xs w-[9rem]">WRITE FOR ANYTHING</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2 w-[15rem] text-center">
            info@visaexpert.com <br />
            info@visaexpert.com <br />
            info@visaexpert.com <br />
          </p>
        </div>
        <div className="w-auto flex  items-center flex-col ">
          <div className=" flex flex-col justify-center items-center">
            <div className="flex flex-col  items-center w-28 h-auto">
              <div className="w-24 h-28 flex justify-center items-center">
                <img src={phone} alt="" />
              </div>
              <span className="text-xs">GIVE US CALL</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2 w-[20rem] text-center">
            Tour Consultant : +1 629 592 593 <br />
            Administration : +1 184 016 482 <br />
            Technical Office +1 963 935 836
          </p>
        </div>
      </div>
      <div className="relative px-6 h-auto mt-32 md:px-[6vw]  flex flex-col gap-12  lg:flex-row bg-white p-8 rounded-lg  md:h-[39rem] max-w-full mx-auto">
        {/* Left Section */}
        <div className="flex-1 flex flex-col  ">
          <div className="text-left">
            <h2 className="text-lg font-bold mt-2 mb-4">
              Explore the world with us, one adventure at a time.
            </h2>
            <p className="text-gray-500 mb-6 text-balance">
              We are a team of experienced travel experts who specialize in
              planning and organizing unforgettable travel experiences for our
              clients with a wide range of travel services, including flight
              bookings, hotel reservations and more.
            </p>
            <div class="border-t-8 rounded-full border-grey my-4 mt-20"></div>
            <p className="text-gray-500 mt-6 text-balance">
              Local travel guides
            </p>
            <button className="px-9 py-4 text-white mt-24  bg-button-color">
              MORE INFO
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex md:justify-center item relative mt-8 lg:mt-0 lg:ml-8">
          <img className="" src={img} alt="" />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
