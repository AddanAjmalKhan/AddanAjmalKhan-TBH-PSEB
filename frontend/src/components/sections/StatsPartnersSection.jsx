import React, { useEffect, useState } from "react";
import partner1 from "../../assets/partners/partner1.png";
import partner2 from "../../assets/partners/partner2.png";
import partner3 from "../../assets/partners/partner3.png";
import partner4 from "../../assets/partners/partner4.png";
import partner5 from "../../assets/partners/partner5.png";
import partner6 from "../../assets/partners/partner6.png";
import partner7 from "../../assets/partners/partner7.png";
import partner8 from "../../assets/partners/partner8.png";

const stats = [
  { value: "39,000+", label: "Cases Closed" },
  { value: "250+", label: "Blood Camps" },
  { value: "950+", label: "Other Ground Events" },
  { value: "10,000+", label: "Volunteers" },
  { value: "30+", label: "District Teams" },
  { value: "50+", label: "Institute Teams" },
];

const liveStats = [
  { label: "Registered Donors", value: 10000 },
  { label: "Lives Saved", value: 42000 },
  { label: "Awareness Seminars", value: 1200 },
  { label: "Cities Covered", value: 85 },
  { label: "District Teams", value: 30 },
  { label: "Institute Teams", value: 50 },
];

const partners = [
  {
    logo: partner1,
    link: "https://www.facebook.com/Jsfrwp/",
  },
  {
    logo: partner2,
    link: "https://sundas.org/",
  },
  {
    logo: partner3,
    link: "https://indushospital.org.pk/",
  },
  {
    logo: partner4,
    link: "https://www.facebook.com/RBCJamshoroOfficial/",
  },
  {
    logo: partner5,
    link: "https://kpyouthaffairs.gov.pk/",
  },
  {
    logo: partner6,
    link: "https://awkum.edu.pk/",
  },
  {
    logo: partner7,
    link: "https://www.healthkp.gov.pk/news/view/447",
  },
  {
    logo: partner8,
    link: "https://greenmoveenergy.com/",
  },
];

const StatsPartnersSection = () => {
  const [counters, setCounters] = useState(liveStats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((count, i) =>
          count < liveStats[i].value
            ? Math.min(
                count + Math.ceil(liveStats[i].value / 70),
                liveStats[i].value
              )
            : count
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Static Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {stats.map((item, i) => (
            <div key={i} className="p-3 md:p-5 rounded-xl bg-white shadow">
              <h4 className="text-red-700 text-xl md:text-2xl font-bold">
                {item.value}
              </h4>
              <p className="text-gray-600 text-xs md:text-sm mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Live Stats */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Our Impact at a Glance
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {liveStats.map((item, i) => (
            <div
              key={i}
              className="bg-red-700 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all p-3 md:p-5 text-center"
            >
              <h3 className="text-lg md:text-xl font-bold text-white">
                {counters[i].toLocaleString()}+
              </h3>
              <p className="text-xs md:text-sm text-white/90 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Partnerships / Collaborations
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={partner.logo}
                alt={`Partner ${i + 1}`}
                className="max-h-12 md:max-h-16 mx-auto grayscale hover:grayscale-0 transition"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsPartnersSection;
