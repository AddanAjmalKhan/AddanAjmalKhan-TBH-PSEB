import React from "react";

import emergency from "../../assets/what-we-do/emergency.png";
import donation from "../../assets/what-we-do/donation.png";
import awareness from "../../assets/what-we-do/awareness.png";
import thalassemia from "../../assets/what-we-do/thalassemia.png";
import disaster from "../../assets/what-we-do/disaster.png";
import internship from "../../assets/what-we-do/internship.png";

const activities = [
  {
    title: "Emergency Blood Provision",
    desc: "Handling urgent blood requests daily across Pakistan with speed and care.",
    img: emergency,
  },
  {
    title: "Blood Donation Camps",
    desc: "Regularly organized in universities, public spaces, and healthcare centres.",
    img: donation,
  },
  {
    title: "Awareness Campaigns",
    desc: "Educational seminars, digital outreach, and university awareness programs.",
    img: awareness,
  },
  {
    title: "Thalassemia Awareness",
    desc: "Genetic testing awareness, counseling sessions, and patient advocacy.",
    img: thalassemia,
  },
  {
    title: "Disaster Response",
    desc: "Rapid blood relief drives during natural disasters and emergencies.",
    img: disaster,
  },
  {
    title: "Internship Opportunities",
    desc: "Structured internships for A-Level, BS, and MS students.",
    img: internship,
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#8b0000] to-[#6f0000] py-14 px-6">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-block w-12 h-1 bg-white rounded-full mb-3"></span>

        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
          What We Do
        </h2>

        <p className="text-white/80 mt-3 max-w-2xl mx-auto text-sm">
          Dedicated initiatives focused on saving lives, spreading awareness, and
          building a healthier society.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {activities.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 text-gray-900
                       shadow-lg hover:shadow-2xl
                       hover:-translate-y-1
                       transition-all duration-300 ease-out"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-36 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="text-lg font-semibold mb-1 tracking-wide">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-700">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
