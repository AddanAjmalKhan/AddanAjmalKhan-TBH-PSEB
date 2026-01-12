import React from "react";
import gulalai from "../../assets/founders/gulai.png";
import shakeel from "../../assets/founders/shakeel.png";
import sumayya from "../../assets/founders/sumayya.png";

export default function FoundersSection() {
  const founders = [
    {
      name: "Dr Gulalai Arshad",
      role: "Founder",
      img: gulalai,
    },
    {
      name: "Dr Shakeel Badshah",
      role: "Co-Founder",
      img: shakeel,
    },
    {
      name: "Dr Sumayyah Saqib",
      role: "Co-Founder",
      img: sumayya,
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-16 bg-white">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-8">Founders</h2>

      {/* Founder cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {founders.map((person, index) => (
          <div key={index} className="text-center">
            <img
  src={person.img}
  alt={person.name}
  className="w-full h-64 object-contain rounded-md bg-white"
/>


            <p className="mt-3 font-semibold">{person.name}</p>
            <p className="text-sm text-gray-700">{person.role}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mb-10" />

      {/* Background Title */}
      <h3 className="text-2xl font-bold text-red-700 mb-4">BACKGROUND</h3>

      {/* Background description */}
      <p className="text-gray-800 leading-7 mb-4">
        Founded in 2020 during the COVID-19 pandemic by a Khyber Medical
        College alumnus, The Blood Heroes is a student-run, non-profit welfare
        organization tackling blood availability challenges across Pakistan.
      </p>

      <p className="text-gray-800 leading-7 mb-4">
        With a vast network of volunteers nationwide, we promote voluntary
        blood donation, support patients in urgent need—especially in hospitals
        and thalassemia centers—and organize donation camps, seminars, and
        webinars.
      </p>

      <p className="text-gray-800 leading-7">
        Despite limited resources, our mission to break stigmas, raise
        awareness about genetic blood disorders, and save lives has grown into
        a nationwide movement.
      </p>
    </section>
  );
}
