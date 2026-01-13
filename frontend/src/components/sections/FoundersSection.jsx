import React from "react";
import gulalai from "../../assets/founders/gulai.png";
import shakeel from "../../assets/founders/shakeel.png";
import sumayya from "../../assets/founders/sumayya.png";

export default function FoundersSection() {
  const founders = [
    { name: "Dr Gulalai Arshad", role: "Founder", img: gulalai },
    { name: "Dr Shakeel Badshah", role: "Co-Founder", img: shakeel },
    { name: "Dr Sumayyah Saqib", role: "Co-Founder", img: sumayya },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-16 lg:px-24 py-16 bg-white">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
        Founders
      </h2>

      {/* Founder cards */}
      <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-12">
        {founders.map((person, index) => (
          <div key={index} className="text-center">
            <img
              src={person.img}
              alt={person.name}
              className="w-full h-28 sm:h-40 md:h-64 object-contain rounded-md bg-white"
            />

            <p className="mt-2 font-semibold text-sm sm:text-base">{person.name}</p>
            <p className="text-xs sm:text-sm text-gray-700">{person.role}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mb-8" />

      {/* Background */}
      <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">BACKGROUND</h3>
      <p className="text-gray-800 leading-6 sm:leading-7 mb-4 text-sm sm:text-base">
        Founded in 2020 during the COVID-19 pandemic by a Khyber Medical College alumnus, The Blood Heroes is a student-run, non-profit welfare organization tackling blood availability challenges across Pakistan.
      </p>
      <p className="text-gray-800 leading-6 sm:leading-7 mb-4 text-sm sm:text-base">
        With a vast network of volunteers nationwide, we promote voluntary blood donation, support patients in urgent need—especially in hospitals and thalassemia centers—and organize donation camps, seminars, and webinars.
      </p>
      <p className="text-gray-800 leading-6 sm:leading-7 text-sm sm:text-base">
        Despite limited resources, our mission to break stigmas, raise awareness about genetic blood disorders, and save lives has grown into a nationwide movement.
      </p>
    </section>
  );
}
