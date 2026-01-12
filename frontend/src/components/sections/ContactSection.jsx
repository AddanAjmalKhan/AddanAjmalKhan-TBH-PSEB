import {
  Home,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT: FORM */}
          <div>
            <h2 className="text-gray-700 text-xl font-semibold uppercase">
              Say Hello To Us
            </h2>
            <div className="w-12 h-1 bg-primary mt-2 mb-8"></div>

            <form className="space-y-8">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-primary"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-primary"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-primary"
              />

              <textarea
                rows="4"
                placeholder="Your message here"
                className="w-full border-b border-gray-300 py-3 resize-none focus:outline-none focus:border-primary"
              ></textarea>

              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 hover:bg-darkRed transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: INFO */}
          <div>
            <h2 className="text-gray-700 text-xl font-semibold uppercase">
              Contact Us
            </h2>
            <div className="w-12 h-1 bg-primary mt-2 mb-8"></div>

            <div className="space-y-6">
              <InfoItem icon={<Home size={20} />} text="3100 C/A Mouchak, Sylhet, Bangladesh" />
              <InfoItem icon={<Phone size={20} />} text="+093-120-525-9162" />
              <InfoItem icon={<Mail size={20} />} text="query@yourdomain.com" />
              <InfoItem icon={<Globe size={20} />} text="www.yourdomain.com" />
            </div>

            {/* SOCIAL */}
            <h3 className="text-gray-700 text-xl font-semibold uppercase mt-12">
              We Are Social
            </h3>
            <div className="w-12 h-1 bg-primary mt-2 mb-6"></div>

            <div className="flex gap-4">
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<Linkedin />} />
              <SocialIcon icon={<Twitter />} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Helper components */
function InfoItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-primary text-white p-3">
        {icon}
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <div className="bg-primary text-white p-4 hover:bg-darkRed transition cursor-pointer">
      {icon}
    </div>
  );
}
