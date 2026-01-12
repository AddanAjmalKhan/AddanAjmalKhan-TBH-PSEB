import React from "react";
import childImg from "../../assets/vision/vision-child.png";


const VisionMissionSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div>
          <img
            src={childImg}
            alt="Vision"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-red-700">
            <h3 className="text-2xl font-bold mb-2">OUR VISION</h3>
            <p className="text-gray-700">
              To ensure that blood flows through hospital corridors to save
              lives as seamlessly as it circulates in our own veins.
            </p>
          </div>

          <div className="bg-red-700 text-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2">OUR MISSION</h3>
            <p>
              We are committed to achieving a thalassemia-free Pakistan through
              education, awareness, and preventive healthcare. By promoting
              premarital screening and genetic counseling, we aim to reduce the
              spread of this inherited disorder.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMissionSection;
