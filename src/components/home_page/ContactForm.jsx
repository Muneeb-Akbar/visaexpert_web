import React from 'react';

function ContactForm() {
  return (
    <div className="bg-white py-12 flex justify-center items-center flex-col mt-32 ">
      {/* Newsletter Section */}


      {/* Contact Form Section */}
      <section className="container mx-auto px-6 flex justify-center ">
        <div className="bg-white shadow-lg rounded-lg p-2 md:p-8 py-10 flex justify-center flex-col items-center md:w-[45%] w-auto">
          <h3 className="text-center text-red-500 uppercase mb-2">Place Your Next Trip</h3>
          <h2 className="text-center text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-8">
            Write to us for personalized travel advice or for information on group travel and last-minute travel. All travel is insured and safe.
          </p>
          <form className="space-y-4 flex flex-col w-[90%]">
            <input 
              type="text" 
              placeholder="Type Your Name" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              placeholder="Insert Your Email" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              placeholder="Your Message" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            ></textarea>
            <button className="w-full bg-button-color text-white py-3 rounded hover:bg-indigo-800">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
