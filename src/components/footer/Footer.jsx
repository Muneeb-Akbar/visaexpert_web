import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-theme py-10 mt- px-6 md:px-[6vw] mt-32">
      <div className="flex-col flex-wrap gap-10 md:flex-row container mx-auto px-4 flex justify-between items-start">
        {/* Logo and Description */}
        <div className="max-w-xs">
          <div className="flex items-center mb-4">
            {/* Replace this with your actual logo */}
         
            <h2 className="text-lg text-white font-bold ">Visa Expert</h2>
          </div>
          <p className="text-[#bbbbbb]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Company</h3>
          <ul className="text-[#bbbbbb]">
            <li>
              <a href="#" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Mobile
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Links */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Contact</h3>
          <ul className="text-[#bbbbbb]">
            <li>
              <a href="#" className="hover:text-black">
                Why Travlog?
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Partner with us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                FAQ’s
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Meet Us */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Meet Us</h3>
          <ul className="text-[#bbbbbb]">
            <li>+92 23111829388</li>
            <li>info@visaexpert.pk</li>
            <li>Administration : +1 184 016 482</li>
            <li>Technical Office: +1 963 935 836</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
