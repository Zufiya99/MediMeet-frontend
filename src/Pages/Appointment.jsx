// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../Context/AppContext";

// const Appointment = () => {
//   const { docId } = useParams();
//   const { doctorsDetails, currencySymbol } = useContext(AppContext);
//   const daysOfWeeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const [docInfo, setDocInfo] = useState(null);
//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState("");

//   const fetchDocInfo = async () => {
//     const docInfo = doctorsDetails.find((doc) => doc._id === docId);
//     setDocInfo(docInfo);
//   };

//   const getAvailableSlots = () => {
//     setDocSlots([]);
//     let today = new Date();

//     for (let i = 0; i < 7; i++) {
//       let currentDate = new Date(today);
//       currentDate.setDate(today.getDate() + i);

//       let endTime = new Date();
//       endTime.setDate(today.getDate() + i);
//       endTime.setHours(21, 0, 0, 0);

//       if (today.getDate() === currentDate.getDate()) {
//         // If it's today, start from the next available time
//         let now = new Date();
//         currentDate.setHours(now.getHours());
//         currentDate.setMinutes(now.getMinutes() > 30 ? 0 : 30);
//         currentDate.setHours(
//           currentDate.getHours() + (now.getMinutes() > 30 ? 1 : 0)
//         );
//       } else {
//         currentDate.setHours(10);
//         currentDate.setMinutes(0);
//       }

//       let timeSlots = [];
//       while (currentDate < endTime) {
//         let formattedTime = currentDate.toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         });
//         timeSlots.push({
//           datetime: new Date(currentDate),
//           time: formattedTime,
//         });

//         currentDate.setMinutes(currentDate.getMinutes() + 30);
//       }

//       setDocSlots((prev) => [...prev, timeSlots]);
//     }
//   };

//   // Fetch doctor info when docId or doctorsDetails changes
//   useEffect(() => {
//     fetchDocInfo();
//   }, [doctorsDetails, docId]);

//   // Get available slots when docInfo is updated
//   useEffect(() => {
//     if (docInfo) {
//       getAvailableSlots();
//     }
//   }, [docInfo]);

//   useEffect(() => {
//     console.log(docSlots); // Logging available slots
//   }, [docSlots]);

//   return (
//     docInfo && (
//       <>
//         <div className="flex flex-col sm:flex-row gap-4">
//           <div className="">
//             <img
//               className="bg-primary w-full sm:max-w-72 rounded-lg"
//               src={docInfo.imageUrl}
//               alt=""
//             />
//           </div>
//           <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
//             <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
//               {docInfo.name}{" "}
//               <img
//                 className="w-7"
//                 src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png"
//                 alt="verified_icon"
//               />
//             </p>
//             <div className="">
//               <p className="flex items-center gap-2 text-sm mt-1 text-gray-600">
//                 {docInfo.degree} - {docInfo.speciality}
//                 <button className="py-0.5 px-2 border text-sm rounded-full mx-4">
//                   {docInfo.experience}
//                 </button>
//               </p>
//             </div>
//             <div className="">
//               <p className="flex items-center gap-2 text-sm mt-3 text-gray-900 font-medium">
//                 About{" "}
//                 <img
//                   className="w-5 bg-white"
//                   src="https://p.kindpng.com/picc/s/463-4637116_request-information-green-info-icon-png-transparent-png.png"
//                   alt="info_icon"
//                 />
//               </p>
//               <p className="text-sm text-gray-500 max-w-[700px] mt-1">
//                 {docInfo.about}
//               </p>
//             </div>
//             <p className="text-gray-500 font-medium mt-4">
//               Appointment fee :{" "}
//               <span className="text-gray-600">
//                 {currencySymbol}
//                 {docInfo.fees}
//               </span>
//             </p>
//           </div>
//         </div>
//         {/* Booking slots */}
//         <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
//           <p>Booking slots</p>
//           <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
//             {docSlots.length &&
//               docSlots.map((item, index) => (
//                 <div
//                   className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
//                     slotIndex === index
//                       ? "bg-primary text-white"
//                       : "border border-gray-200"
//                   }`}
//                   onClick={() => setSlotIndex(index)}
//                   key={index}
//                 >
//                   <p>{item[0] && daysOfWeeks[item[0].datetime.getDay()]}</p>
//                   <p>{item[0] && item[0].datetime.getDate()}</p>
//                 </div>
//               ))}
//           </div>
//           <div className={`flex items-center gap-3 overflow-x-scroll mt-4 `}>
//             {docSlots.length &&
//               docSlots[slotIndex].map((item, index) => (
//                 <p
//                   onClick={() => setSlotTime(item.time)}
//                   className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
//                     item.time === slotTime
//                       ? "bg-primary text-white"
//                       : "text-gray-400 border border-gray-300"
//                   }`}
//                   key={index}
//                 >
//                   {item.time.toLowerCase()}
//                 </p>
//               ))}
//           </div>
//           <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
//             book an appointment
//           </button>
//         </div>
//       </>
//     )
//   );
// };

// export default Appointment;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import RelatedDoctors from "../Components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctorsDetails, currencySymbol } = useContext(AppContext);
  const daysOfWeeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctorsDetails.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // Slots end at 9 PM

      if (i === 0) {
        // If it's today, start from the next available time
        let now = new Date();
        if (now.getHours() >= 21) {
          // If current time is past 9 PM, skip today
          continue;
        }
        currentDate.setHours(now.getHours());
        currentDate.setMinutes(now.getMinutes() > 30 ? 0 : 30);
        currentDate.setHours(
          currentDate.getHours() + (now.getMinutes() > 30 ? 1 : 0)
        );
      } else {
        // Start slots from 10 AM on future days
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      // Only add days with available slots
      if (timeSlots.length > 0) {
        setDocSlots((prev) => [...prev, timeSlots]);
      }
    }
  };

  // Fetch doctor info when docId or doctorsDetails changes
  useEffect(() => {
    fetchDocInfo();
  }, [doctorsDetails, docId]);

  // Get available slots when docInfo is updated
  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots); // Logging available slots
  }, [docSlots]);

  return (
    docInfo && (
      <>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.imageUrl}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img
                className="w-7"
                src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png"
                alt="verified_icon"
              />
            </p>
            <div className="">
              <p className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                {docInfo.degree} - {docInfo.speciality}
                <button className="py-0.5 px-2 border text-sm rounded-full mx-4">
                  {docInfo.experience}
                </button>
              </p>
            </div>
            <div className="">
              <p className="flex items-center gap-2 text-sm mt-3 text-gray-900 font-medium">
                About{" "}
                <img
                  className="w-5 bg-white"
                  src="https://p.kindpng.com/picc/s/463-4637116_request-information-green-info-icon-png-transparent-png.png"
                  alt="info_icon"
                />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee :{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/* Booking slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                  onClick={() => setSlotIndex(index)}
                  key={index}
                >
                  <p>{item.length && daysOfWeeks[item[0].datetime.getDay()]}</p>
                  <p>{item.length && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className={`flex items-center gap-3 overflow-x-scroll mt-4 `}>
            {docSlots.length > 0 &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
            book an appointment
          </button>
        </div>

        {/* Listing related doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </>
    )
  );
};

export default Appointment;
