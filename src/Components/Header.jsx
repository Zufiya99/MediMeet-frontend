import React from "react";

const Header = () => {
  return (
    <div
      className="bg-primary text-white flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20"
      style={{
        borderBottomLeftRadius: "50% 20%",
        borderBottomRightRadius: "50% 20%",
        borderTopRightRadius: "50px",
        borderTopLeftRadius: "50px",
        padding: "15px",
      }}
    >
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          {" "}
          <b>Book appointment</b> <br /> with trusted doctors
        </p>
        <div>
          <img
            src="https://tse3.mm.bing.net/th?id=OIG3.GLyxK2R10CGbdmcltKCH&w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
            alt="doc"
            className="w-10 rounded-full"
          />
          <p>
            Simply browse through our list of trusted doctors, <br /> schedule
            your appointment hassle-free
          </p>
        </div>
        <a href="">
          Book appointment{" "}
          <img
            src="https://www.shareicon.net/data/512x512/2015/12/02/681008_arrows_512x512.png"
            alt="r-arrow"
            className="w-3"
          />
        </a>
      </div>
      {/* Right Side */}
      <div className="">
        <img src="./src/assets/Doc-group.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
