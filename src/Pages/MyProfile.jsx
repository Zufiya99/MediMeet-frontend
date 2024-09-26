import React, { useState } from "react";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Mr. Robot",
    image: "https://i.pravatar.cc/150?img=12",
    email: "pS5f0@example.com",
    phone: "1234567890",
    address: {
      line1: "123 Main Street",
      line2: "Apt. 4B",
    },
    gender: "Male",
    dob: "2000-01-01",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex justify-center py-10 bg-gray-100 min-h-screen">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 flex flex-col items-center gap-6">
        {/* Profile Photo */}
        <div className="relative">
          <img
            src={userData.image}
            className="w-36 h-36 object-cover rounded-full border-4 border-primary shadow-lg"
            alt="profile_pic"
          />
          {isEdit && (
            <button className="absolute right-0 bottom-0 bg-indigo-600 text-white p-1 rounded-full text-xs hover:bg-indigo-700">
              Change
            </button>
          )}
        </div>

        {/* User Name */}
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="text-center border-b-2 focus:outline-none text-lg font-medium p-1"
          />
        ) : (
          <h1 className="text-2xl font-semibold">{userData.name}</h1>
        )}

        <hr className="w-full border-gray-300" />

        {/* Contact Information */}
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Contact Information
          </h2>
          <div className="mb-4">
            <p className="font-semibold">Email:</p>
            <p className="text-gray-600">{userData.email}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full border-b-2 focus:outline-none p-1"
              />
            ) : (
              <p className="text-gray-600">{userData.phone}</p>
            )}
          </div>
          <div className="mb-4">
            <p className="font-semibold">Address:</p>
            {isEdit ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className="border-b-2 focus:outline-none p-1"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className="border-b-2 focus:outline-none p-1"
                />
              </div>
            ) : (
              <p className="text-gray-600">
                {userData.address.line1}, {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        {/* Basic Information */}
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Basic Information
          </h2>
          <div className="mb-4">
            <p className="font-semibold">Gender:</p>
            {isEdit ? (
              <select
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
                className="w-full border-b-2 focus:outline-none p-1"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-600">{userData.gender}</p>
            )}
          </div>
          <div className="mb-4">
            <p className="font-semibold">Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="w-full border-b-2 focus:outline-none p-1"
              />
            ) : (
              <p className="text-gray-600">{userData.dob}</p>
            )}
          </div>
        </div>

        {/* Edit/Save Button */}
        <div>
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
