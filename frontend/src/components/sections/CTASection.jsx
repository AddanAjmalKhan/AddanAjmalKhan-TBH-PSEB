import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0B1220] to-[#0E1627] py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to Save a Life?
        </h2>

        <p className="mt-4 text-gray-400 text-sm md:text-base">
          There is a constant need for regular blood supply because blood can be
          stored for only a limited time before use.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Register as Donor */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_iyAzbfibRQ40wpaRllLAOahTCtuT0NC2DeOEQoF3WXNNZw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2"
          >
            Register as Donor
            <span>→</span>
          </a>

          {/* View Our Work → Gallery */}
          <Link
            to="/gallery"
            className="border border-gray-400 hover:border-white transition text-white px-6 py-3 rounded-md font-medium flex items-center justify-center"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
