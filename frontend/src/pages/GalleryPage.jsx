import React from "react";

/* ================= Images ================= */
// 1st Annual Summit
import summit1 from "../assets/gallery/summit1.jpg";
import summit2 from "../assets/gallery/summit2.jpg";
import summit3 from "../assets/gallery/summit3.jpg";
import summit4 from "../assets/gallery/summit4.jpg";
import summit5 from "../assets/gallery/summit5.jpg";

// 2nd Annual Summit
import summit6 from "../assets/gallery/summit6.jpg";
import summit7 from "../assets/gallery/summit7.jpg";
import summit8 from "../assets/gallery/summit8.jpg";
import summit9 from "../assets/gallery/summit9.jpg";
import summit10 from "../assets/gallery/summit10.jpg";
import summit11 from "../assets/gallery/summit11.jpg";
import summit12 from "../assets/gallery/summit12.jpg";

export default function GalleryPage() {
  const summits = [
    {
      title: "1st Annual Summit",
      host: "Team KPK",
      date: "14–15 January 2023",
      venue: "Nishtar Hall, Peshawar",
      images: [summit1, summit2, summit3, summit4, summit5],
      sponsors: [
        "Jamila Sultana Foundation",
        "Alkhidmat Foundation",
        "Directorate of Youth Affairs",
        "A4U",
        "Habibi Production",
        "Paradise City Nowshera",
        "Gaznavi Towers",
        "Fatimid Foundation",
        "AH Group of Companies",
        "Culture & Tourism Authority KPK",
        "DC Peshawar Volunteer Task Force",
        "EVA / G Alliance",
        "Greenwend Energy",
        "Aurat Foundation",
        "HBK Hypermarket",
        "Frontier Foundation",
        "Alpha Evolution",
      ],
      speakers: [
        "Barrister Saif – Information Minister KPK",
        "Mr. Hamid Khan – Deputy Director Youth Affairs KPK",
        "Dr. Noor Saba – Director RBC Peshawar",
        "Mr. Badar Hussain – Administrator Fatimid Foundation",
        "Haji Aqa Khan – Social Leader, Waziristan",
        "Mr. Luqman Hakeem – Founder Blood Chain Pakistan",
        "Dr. Malik Tahir – Assistant Professor Pediatrics, LRH",
        "Dr. Khalid – HOD Hematology, HMC",
      ],
    },
    {
      title: "2nd Annual Summit",
      host: "Team Karachi",
      date: "27–29 January 2024",
      venue: "Arts Council of Pakistan, Karachi",
      images: [
        summit6,
        summit7,
        summit8,
        summit9,
        summit10,
        summit11,
        summit12,
      ],
      sponsors: [
        "Arts Council of Pakistan",
        "Squad International",
        "Alkhidmat",
        "Kashif Iqbal Thalassemia Care Center",
        "GreenMove Energy",
        "Sun Saviour",
        "Sundus Foundation",
        "Siachen",
        "J Alam Properties",
        "NODE",
        "Sindh Tourism Development Corporation",
        "Cultural Department",
        "Omeed Ki Kiran Foundation",
        "Lens Man",
        "Mustaqim",
        "Dr. Essa Laboratory",
      ],
      speakers: [
        "Mr. Waheed Ahmed Soomro – RBC Jamshoro",
        "Mr. Nabi Channa – Joint Secretary, Thalassemia Patients Welfare Society Nawabshah",
        "Mr. Muhammad Iqbal – Chairman Kashif Iqbal Thalassemia Center",
        "Dr. Saqib Hussain – Consultant & Transplant Physician",
      ],
    },
  ];

  const anniversaries = [
    {
      title: "3rd Anniversary",
      host: "Team Federal",
      date: "15 July 2023",
      venue: "COMSTECH, Red Zone Islamabad",
    },
    {
      title: "4th Anniversary",
      host: "Team KPK",
      date: "21 July 2024",
      venue: "Jalal Baba Auditorium, Abbottabad",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-7xl mx-auto">

        {/* ================= Page Header ================= */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-gradient-to-b from-red-50/70 to-transparent rounded-3xl" />

          <div className="relative text-center py-20 px-6">
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              OUR <span className="text-red-600">JOURNEY</span> IN PICTURES
            </h1>

            <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              A visual record of our events and impactful initiatives dedicated
              to saving lives across Pakistan.
            </p>

            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-6">
              Annual Summits <span className="text-red-600">&</span> Anniversaries
            </h2>

            <div className="mt-10 flex justify-center">
              <span className="h-px w-32 bg-gradient-to-r from-transparent via-red-200 to-transparent" />
            </div>
          </div>
        </div>

        {/* ================= Annual Summits ================= */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10 mt-20">
            <span className="w-1.5 h-10 bg-red-600 rounded-full" />
            <h2 className="text-3xl font-extrabold text-gray-900">
              Annual Summits
            </h2>
          </div>

          {summits.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-10 mb-16"
            >
              <h3 className="text-2xl font-extrabold text-gray-900">
                {event.title}
              </h3>

              <div className="flex flex-wrap gap-3 mt-4 text-sm mb-8">
                <span className="px-4 py-1 bg-red-50 text-red-700 rounded-full">
                  {event.host}
                </span>
                <span className="px-4 py-1 bg-gray-100 rounded-full">
                  {event.date}
                </span>
                <span className="px-4 py-1 bg-gray-100 rounded-full">
                  {event.venue}
                </span>
              </div>

              {/* Image Slider */}
              <div className="mb-12">
                <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                  {event.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${event.title} ${i + 1}`}
                      loading="lazy"
                      className="min-w-[280px] sm:min-w-[320px] h-56
                                 object-cover rounded-2xl shadow-sm
                                 snap-start"
                    />
                  ))}
                </div>

                <p className="text-xs text-gray-400 mt-2 text-center">
                  ← Scroll to view more →
                </p>
              </div>

              {/* Sponsors & Speakers */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold mb-4">Sponsors</h4>
                  <ul className="grid grid-cols-2 gap-y-2 text-sm">
                    {event.sponsors.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold mb-4">Speakers</h4>
                  <ul className="space-y-2 text-sm">
                    {event.speakers.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ================= Anniversaries ================= */}
        <section>
          <div className="flex items-center gap-4 mb-10 mt-20">
            <span className="w-1.5 h-10 bg-red-600 rounded-full" />
            <h2 className="text-3xl font-extrabold text-gray-900">
              Anniversaries
            </h2>
          </div>

          {anniversaries.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-10 mb-16"
            >
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                {event.title}
              </h3>

              <div className="flex flex-wrap gap-3 mb-8 text-sm">
                <span className="px-4 py-1 bg-red-50 text-red-700 rounded-full">
                  {event.host}
                </span>
                <span className="px-4 py-1 bg-gray-100 rounded-full">
                  {event.date}
                </span>
                <span className="px-4 py-1 bg-gray-100 rounded-full">
                  {event.venue}
                </span>
              </div>

              <div className="flex gap-5 overflow-x-auto pb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="min-w-[260px] sm:min-w-[300px] h-52
                               bg-gray-100 rounded-2xl
                               flex items-center justify-center
                               text-gray-400 text-sm shadow-sm"
                  >
                    Anniversary Image {i}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

      </div>
    </section>
  );
}
