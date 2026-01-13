import React from "react";
import childImg from "../../assets/vision/vision-child.png";

const VisionMissionSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 items-center">

        <div>
          <img src={childImg} alt="Vision" className="rounded-xl w-full object-cover" />
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="bg-white shadow-md rounded-xl p-4 md:p-6 border-l-4 border-red-700">
            <h3 className="text-xl md:text-2xl font-bold mb-1">Our Vision</h3>
            <p className="text-gray-700 text-sm md:text-base">
              To ensure that blood flows through hospital corridors to save lives as seamlessly as it circulates in our own veins.
            </p>
          </div>

          <div className="bg-red-700 text-white shadow-md rounded-xl p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-1">Our Mission</h3>
            <p className="text-sm md:text-base">
              We are committed to achieving a thalassemia-free Pakistan through education, awareness, and preventive healthcare. By promoting premarital screening and genetic counseling, we aim to reduce the spread of this inherited disorder.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMissionSection;
