import user1 from "../../assets/reviews/user-1.png";
import user2 from "../../assets/reviews/user-2.png";
import user3 from "../../assets/reviews/user-3.png";
import user4 from "../../assets/reviews/user-4.png";

const reviews = [
  {
    name: "SARAH",
    text: "Great initiative! The process was simple and the team was very responsive.",
    image: user1,
    dark: false,
  },
  {
    name: "SAAD",
    text: "I found a donor quickly through this website. Truly lifesaving work.",
    image: user2,
    dark: true,
  },
  {
    name: "ALI",
    text: "Amazing platform that connects donors and patients seamlessly.",
    image: user3,
    dark: false,
  },
  {
    name: "AYESHA",
    text: "The Blood Heroes made donating blood so easy and meaningful.",
    image: user4,
    dark: true,
  },
];

const ReviewsSection = () => {
  return (
    <section className="w-full bg-red-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Small white line */}
        <div className="w-16 h-1 bg-white mx-auto mb-4 rounded"></div>

        {/* Section Title */}
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center tracking-wider mb-12">
          REVIEWS
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 shadow-lg max-w-md transition-transform duration-300 hover:scale-105 ${
                review.dark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
              }`}
              style={{
                marginLeft:
                  review.dark ? "auto" : "0", // dark cards right
                marginRight:
                  review.dark ? "0" : "auto", // white cards left
                textAlign: review.dark ? "right" : "left",
              }}
            >
              <p className="text-sm leading-relaxed mb-3">{`“${review.text}”`}</p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <div className="text-yellow-400 text-xs">★★★★★</div>
                </div>

                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
