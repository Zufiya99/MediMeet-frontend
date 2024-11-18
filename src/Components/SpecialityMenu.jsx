import React from "react";
import specialityData from "./specialityData.json";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <>
      <div
        id="speciality"
        className="flex flex-col items-center gap-4 py-16 text-gray-800"
      >
        <h1 className="text-3xl font-medium">Explore Our Specialties</h1>
        <p className="sm:w-1/3 text-center text-sm">
          Discover a wide range of medical specialties tailored to meet your
          health needs. Our trusted doctors are here to provide you with the
          best care.
        </p>
        <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
          {specialityData.map((speciality, index) => (
            <Link
              to={`/doctors/${speciality.name}`}
              key={index}
              className="flex flex-col items-center gap-2 text-xs cursor-pointer
              flex-shrink-0 hover:-translate-y-2 transition-all
              duration-500 "
            >
              <img
                src={speciality.imageUrl}
                alt={speciality.name}
                className="w-20 h-20 object-cover rounded-full border-2 border-primary p-2"
              />
              <p className="text-center">{speciality.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecialityMenu;
