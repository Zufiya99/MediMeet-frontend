import React from "react";
import teamData from "../assets/teamData.json";

const About = () => {
  return (
    <>
      {/* Page Header */}
      <div className="text-center text-3xl font-bold pt-10">
        <p className="tracking-wide">
          ABOUT <span className="text-primary">US</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Your trusted platform for online medical appointments
        </p>
      </div>

      {/* About Us Section */}
      <div className="my-16 flex flex-col gap-8 md:flex-row md:items-center px-6 md:px-20">
        <img
          className="w-full md:max-w-[480px] lg:max-w-[520px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2023/04/pexels-rodnae-productions-6129507-scaled.jpg"
          alt="doctors"
        />
        <div className="flex flex-col justify-center gap-4 md:w-2/4 text-gray-700 text-lg">
          <p>
            At <b>MediMeet</b>, we aim to make healthcare simple and accessible.
            Our platform connects patients with top doctors, eliminating the
            need for long waits or travel.
          </p>
          <p>
            Our trusted network of professionals ensures personalized,
            high-quality care, no matter where you are. MediMeet is here to
            revolutionize healthcare by bringing efficiency and reliability.
          </p>
          <p>
            We are dedicated to delivering the best medical experience, putting
            your needs first every step of the way.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="text-center text-xl font-semibold mb-8">
          <p>
            WHY <span className="text-primary font-bold">MediMeet</span>?
          </p>
          <p className="text-sm text-gray-500">
            A few reasons why we stand out in healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
            <b>Efficiency</b>
            <p className="mt-3 text-gray-600 group-hover:text-white">
              Save time by booking appointments online and consulting doctors
              via video or phone. Skip the waiting room and get the care you
              need fast.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
            <b>Convenience</b>
            <p className="mt-3 text-gray-600 group-hover:text-white">
              Access top-quality healthcare from the comfort of your home. We
              bring the doctor to you, wherever you are.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
            <b>Personalization</b>
            <p className="mt-3 text-gray-600 group-hover:text-white">
              Get personalized recommendations based on your medical history and
              current symptoms. Our platform ensures you see the right doctor
              every time.
            </p>
          </div>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="my-20 px-6 md:px-20">
        <div className="text-center text-3xl font-bold mb-8">
          <p className="uppercase tracking-widest text-primary">Our Journey</p>
          <p className="text-base text-gray-500 mt-2">
            How we started and where we're headed
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-gray-700 text-lg flex flex-col justify-center gap-6">
            <div className="relative pb-6 border-l-2 border-primary pl-8">
              <span className="absolute -left-4 top-0 bg-primary text-white rounded-full p-2 text-sm">
                2015
              </span>
              <p className="leading-relaxed">
                <b>MediMeet was founded</b> with a vision to make healthcare
                more accessible to everyone. We started with a small network of
                doctors and a simple booking platform.
              </p>
            </div>

            <div className="relative pb-6 border-l-2 border-primary pl-8">
              <span className="absolute -left-4 top-0 bg-primary text-white rounded-full p-2 text-sm">
                2020
              </span>
              <p className="leading-relaxed">
                <b>Telemedicine became vital</b> during the global pandemic.
                MediMeet grew rapidly by expanding our doctor network and adding
                new features for better healthcare efficiency.
              </p>
            </div>

            <div className="relative border-l-2 border-primary pl-8">
              <span className="absolute -left-4 top-0 bg-primary text-white rounded-full p-2 text-sm">
                {new Date().getFullYear()}
              </span>
              <p className="leading-relaxed">
                <b>MediMeet is now</b> a trusted platform for thousands of
                patients worldwide. We continue to innovate and improve,
                ensuring our users receive the best possible care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-100">
        <div className="text-center text-2xl font-bold mb-10">
          <p>Meet Our Team</p>
          <p className="text-sm text-gray-500 mt-1">
            Dedicated professionals behind MediMeet
          </p>
        </div>

        <div className="overflow-x-auto px-6">
          <div className="flex flex-nowrap gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="bg-white p-8 rounded-lg shadow-lg text-center min-w-[250px] max-w-xs hover:scale-105 transition-transform duration-300"
              >
                <img
                  className="w-24 h-24 rounded-full mx-auto"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.position}</p>
                <p className="mt-3 text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
