import heroImage from "../../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="text-white"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(0,0,0,0.6),
            rgba(0,0,0,0.1)
          ),
          url(${heroImage})
        `,
        backgroundSize: "100%",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 min-h-[520px] grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            THE <br /> BLOOD <br /> HEROES
          </h1>

          <p className="mt-6 text-white/90 max-w-md">
            Every Pint Matters. Join our mission to save lives through voluntary blood donation.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-100 transition">
              ❤️ Donate Now
            </button>

            <button className="bg-red-900 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-red-800 transition">
              🤍 Request Blood
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}
