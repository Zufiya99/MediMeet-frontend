import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full py-10 px-5 md:px-2 lg:px-40">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <img
            src="/Images/MediMeet_logo.png"
            alt="MediMeet Logo"
            className="w-16 mb-4"
          />
          <p className="text-sm leading-relaxed max-w-xs">
            Your trusted partner for healthcare solutions. We connect you to the
            best services quickly and securely.
          </p>
        </div>

        {/* Center Section */}
        <div className="mb-8 md:mb-0">
          <p className="text-xl font-semibold mb-4">Services</p>
          <ul className="space-y-2">
            <li className="hover:text-gray-600 cursor-pointer transition duration-300">
              Book an Appointment
            </li>
            <li className="hover:text-gray-600 cursor-pointer transition duration-300">
              Find a Doctor
            </li>
            <li className="hover:text-gray-600 cursor-pointer transition duration-300">
              Telehealth Services
            </li>
            <li className="hover:text-gray-600 cursor-pointer transition duration-300">
              Health Resources
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="">
          <p className="text-xl font-semibold mb-4">Get in Touch</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" /> +91 1234567890
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" /> idrisizufiya@gmail.com
            </li>
          </ul>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/Zufiya99"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-500"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://portfolio-99z.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-500"
            >
              <FaGlobe size={24} />
            </a>
            <a
              href="https://x.com/Zufiya_Idrisi"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-500"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-500 pt-6 text-center text-sm">
        <p>
          &copy;{" "}
          <a
            className="hover:text-primary font-semibold"
            href="https://www.linkedin.com/in/zufiyaidrisi9797/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zufiya Idrisi
          </a>{" "}
          | MediMeet | All Rights Reserved | {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
