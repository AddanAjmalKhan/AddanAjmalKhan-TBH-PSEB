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
    desc: "Daily handling of blood requests across Pakistan",
    img: emergency,
  },
  {
    title: "Blood Donation Camps",
    desc: "Organized regularly in universities, public spaces, and healthcare centres.",
    img: donation,
  },
  {
    title: "Awareness Campaigns",
    desc: "Ongoing seminars, digital media campaigns and college/university outreach.",
    img: awareness,
  },
  {
    title: "Thalassemia Awareness",
    desc: "Genetic testing awareness, counseling sessions & advocacy.",
    img: thalassemia,
  },
  {
    title: "Disaster Response",
    desc: "Blood relief drives during natural calamities & crises.",
    img: disaster,
  },
  {
    title: "Internship Offers",
    desc: "Internships for students of A-levels, BS & MS.",
    img: internship,
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="bg-[#8b0000] py-20 px-6">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        {/* Small white line */}
        <span className="inline-block w-12 h-1 bg-white rounded-full mb-4"></span>

        <h2 className="text-white text-4xl font-bold tracking-wide">
          WHAT WE DO
        </h2>

        {/* Subtle glow divider (optional but beautiful) */}
        <div className="mt-3 flex justify-center">
          <span className="w-24 h-px bg-white/40"></span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {activities.map((item, index) => (
          <div
            key={index}
            className="bg-[#a11212] rounded-2xl p-6 text-white
                       hover:-translate-y-2 hover:shadow-2xl
                       transition-all duration-300 ease-out"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-44 object-cover rounded-xl mb-5"
            />

            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed opacity-90">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
