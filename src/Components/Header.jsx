import React from "react";

const Header = () => {
  return (
    <div
      className="bg-primary text-white flex flex-col md:flex-row flex-wrap rounded-lg px-10 md:px-10 lg:px-20"
      style={{
        borderBottomLeftRadius: "50% 20%",
        borderBottomRightRadius: "50% 20%",
        borderTopRightRadius: "50px",
        borderTopLeftRadius: "50px",
      }}
    >
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-20px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          {" "}
          <b>Connect with </b> <br /> top-rated doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img
            src="https://tse3.mm.bing.net/th?id=OIG3.GLyxK2R10CGbdmcltKCH&w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
            alt="doc"
            className="w-12 rounded-full "
          />
          <p>
            Explore our comprehensive directory of certified specialists,{" "}
            <br className="hidden sm:block" /> and easily secure your
            consultation with a few clicks.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book appointment{" "}
          <img
            src="https://www.shareicon.net/data/512x512/2015/12/02/681008_arrows_512x512.png"
            alt="r-arrow"
            className="w-3"
          />
        </a>
      </div>
      {/* Right Side */}
      <div className="md:w-1/2 relative sm:mb-200 flex justify-center">
        <img
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain rounded-lg"
          src="/Images/Doc-group.png"
          alt="Group of Doctors"
          style={{
            position: "relative",
            bottom: "0",
            zIndex: "1",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
