import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Page Header */}
      <div className="text-center text-3xl font-bold pt-10">
        <p className="tracking-wide">
          CONTACT <span className="text-primary">US</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          We'd love to hear from you!
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="my-10 flex flex-col md:flex-row gap-10 mb-28 px-6 md:px-20">
        {/* Image Section */}
        <div className="flex justify-center md:w-1/2">
          <img
            className="w-full max-w-[360px] h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            src="https://www.call4health.com/wp-content/uploads/2023/05/Doctor-Call-Answering.jpeg"
            alt="Doctor Call Answering"
          />
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col justify-center text-gray-700 text-lg md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Our Office
          </h3>
          <p className="mb-2">
            <strong>Address:</strong>
            <br />
            abcd road, Suite 3543, Washington, USA
          </p>
          <p className="mb-2">
            <strong>Phone:</strong>
            <br />
            +91 1234567890
          </p>
          <p className="mb-4">
            <strong>Email:</strong>
            <br />
            <a
              href="mailto:idrisizufiya@gmail.com"
              className="text-primary hover:underline"
            >
              idrisizufiya@gmail.com
            </a>
          </p>

          <h4 className="text-xl font-semibold mb-2">Career at MediMeet</h4>
          <p className="mb-4">
            Join us in making healthcare accessible and efficient! We are
            looking for dedicated individuals to join our team.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
