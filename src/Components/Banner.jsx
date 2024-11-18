import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg p-6 sm:p-10 md:p-14 lg:p-0 my-20 md:mx-10 items-center justify-between">
      {/* ----- Left Section ----- */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-10 text-center md:text-left">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          <p>Book appointment</p>
          <p className="mt-4">with 100+ trusted doctors</p>
        </div>
        <button
          onClick={() => {
            navigate("/login"), scrollTo(0, 0);
          }}
          className="mt-8 px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 ease-in-out"
        >
          Create account
        </button>
      </div>

      {/* ----- Right Section ----- */}
      <div className="mt-10 md:mt-0 md:w-1/2 lg:w-[370px] relative">
        <img
          src="/Images/BannerPhoto.png"
          alt="banner girl image"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
