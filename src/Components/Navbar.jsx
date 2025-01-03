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
          src="/Images/MediMeet_logo.png"
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
                src="https://i.pravatar.cc/150?img=12"
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
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden"
            src="https://cdn-icons-png.freepik.com/512/5368/5368475.png"
            alt="menu icon"
          />
          {/* Mobile Menu */}
          <div
            className={`${
              showMenu
                ? "fixed top-0 right-0 w-full h-full bg-white z-20"
                : "hidden"
            } md:hidden`}
          >
            <div className="flex items-center justify-between px-5 py-6 border-b">
              <img
                className="w-10"
                src="./src/assets/MediMeet_logo.png"
                alt="Logo"
              />
              <img
                className="w-6 cursor-pointer"
                onClick={() => setShowMenu(false)}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lO7KevUIVjzeC-jq-DJGfKiv6eWDrG8a2g&s"
                alt="close icon"
              />
            </div>
            <ul className="flex flex-col items-center gap-5 font-medium mt-5">
              <NavLink onClick={() => setShowMenu(false)} to="/">
                <p className="px-4 py-2 rounded hover:bg-gray-200">Home</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                <p className="px-4 py-2 rounded hover:bg-gray-200">
                  All doctors
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/about">
                <p className="px-4 py-2 rounded hover:bg-gray-200">About</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/contact">
                <p className="px-4 py-2 rounded hover:bg-gray-200">Contact</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;