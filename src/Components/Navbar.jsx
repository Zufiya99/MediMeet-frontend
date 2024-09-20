import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <>
      <div className="flex items-center justify-between text-sm py-2 mb-5 border-b border-b-gray-400">
        <img
          className="w-10 cursor-pointer"
          src="./src/assets/MediMeet_logo.png"
          alt="MediMeet logo"
          onClick={() => navigate("/")}
        />
        <ul className="hidden md:flex items-start gap-5 font-medium">
          <NavLink to="/">
            <li className="py-1">Home</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-1">All doctors</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1">About</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1">Contact</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          {token ? (
            <div className="flex items-center gap-1 cursor-pointer group relative">
              <img
                className="w-10 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
                alt="profile_pic"
              />
              <img
                className="w-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfy9d4gjzYBIJOk80QGsV0DN04RY4PT3uYw&s"
                alt="dropdown_arrow"
              />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-400 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="hover:text-black cursor-pointer"
                  >
                    My appointments
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-primary text-white px-8 py-3 rounded-full font-bold hidden md:block"
            >
              Create account
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
