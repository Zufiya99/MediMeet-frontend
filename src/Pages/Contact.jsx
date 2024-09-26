import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
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
        {/* Contact Form Section */}
        <div className="flex-1 max-w-md mx-auto bg-white p-6 rounded shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="flex-1 flex flex-col justify-center text-gray-700 text-lg md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Our Office
          </h3>
          <p className="mb-2">
            <strong>Address:</strong>
            <br />
            Gaala road, Suite 3543, Washington, USA
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
          <button
            className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition duration-300"
            onClick={() => navigate("/careers")}
          >
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
