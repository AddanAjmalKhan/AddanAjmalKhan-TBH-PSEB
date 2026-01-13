const reviews = [
  {
    name: "Muhammad Bilal Qayyum",
    text:
      "The best helping platform I have ever seen. May Allah bless everyone involved in this noble cause.",
  },
  {
    name: "Saba Writes",
    text:
      "I highly recommend The Blood Heroes for their incredible dedication and selfless service. They are true lifesavers who work tirelessly to help those in need. The team’s efforts truly deserve appreciation and support from everyone.",
  },
  {
    name: "Waisu Awan",
    text:
      "I highly recommend The Blood Heroes KPK. It is an amazing initiative that saves countless lives through selfless blood donation.",
  },
  {
    name: "Saifullah",
    text: "They are real national heroes.",
  },
  {
    name: "Furrat Waseem",
    text:
      "Together for a cause — supporting thalassemia and cancer patients with compassion and dedication.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="w-14 h-1 bg-red-700 mx-auto mb-4 rounded"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
            What People Say
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Genuine words from people who believe in The Blood Heroes mission
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl p-6
                border border-red-700/30
                hover:border-red-700
                shadow-md hover:shadow-xl
                transition-all duration-300
              "
            >
              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                “{review.text}”
              </p>

              {/* Name & Rating */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900 text-sm">
                  {review.name}
                </p>
                <div className="text-yellow-400 text-xs mt-1">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
