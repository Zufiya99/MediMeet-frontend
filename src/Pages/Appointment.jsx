import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Appointment = () => {
  const { docId } = useParams();
  const { doctorsDetails } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctorsDetails.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctorsDetails, docId]);
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
            <p>
              {docInfo.name}{" "}
              <img
                className="w-7"
                src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png"
                alt="verified_icon"
              />
            </p>
            <div className="">
              <p>
                {docInfo.degree}-{docInfo.speciality}
              </p>
              <button>{docInfo.experience}</button>
            </div>
            <div className="">
              <p>
                About{" "}
                <img
                  className="w-5 bg-white"
                  src="https://p.kindpng.com/picc/s/463-4637116_request-information-green-info-icon-png-transparent-png.png"
                  alt="info_icon"
                />
              </p>
              <p>{docInfo.about}</p>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Appointment;
