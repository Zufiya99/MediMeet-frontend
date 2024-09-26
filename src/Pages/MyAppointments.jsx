import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MyAppointments = () => {
  const { doctorsDetails } = useContext(AppContext);

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        My Appointments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {doctorsDetails.slice(0, 4).map((item, index) => (
          <div
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out p-6"
            key={index}
          >
            <div className="flex items-center mb-6">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-full border-2 border-blue-500 mr-5"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-md text-gray-600">{item.speciality}</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-lg">
                <span className="font-semibold">Date and Time:</span> 1 October
                2024 at 3 PM
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <button className="bg-blue-600 text-white rounded-lg px-5 py-2 transition duration-200 hover:bg-blue-700 shadow hover:shadow-lg">
                Pay Online
              </button>
              <button className="bg-red-600 text-white rounded-lg px-5 py-2 transition duration-200 hover:bg-red-700 shadow hover:shadow-lg">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyAppointments;
