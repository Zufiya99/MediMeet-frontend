import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctorsDetails } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-col items-center gap-4 my-6 text-gray-900 md:mx-10">
        <h1 className="text-3xl font-medium">Top Doctos</h1>
        <p className="sm:w-1/3 text-center text-sm">Lorem ipsum dolor sit.</p>
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {doctorsDetails.slice(0, 12).map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-[10px] transition-all duration-200"
              onClick={() => navigate(`/doctors/${item._id}`)}
            >
              <img className="bg-green-200" src={item.imageUrl} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            navigate("/doctors"), scrollTo(0, 0);
          }}
          className="bg-green-200 text-gray-600 px-12 py-3 rounded-full mt-10 border border-black"
        >
          More
        </button>
      </div>
    </>
  );
};

export default TopDoctors;
