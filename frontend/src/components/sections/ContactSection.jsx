import React from "react";
import {
  Home,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div>
          <h2 className="text-gray-700 text-lg md:text-xl font-semibold uppercase">
            Say Hello To Us
          </h2>
          <div className="w-12 h-1 bg-primary mt-2 mb-6"></div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary text-sm"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary text-sm"
            />
            <textarea
              rows="3"
              placeholder="Your message here"
              className="w-full border-b border-gray-300 py-2 resize-none focus:outline-none focus:border-primary text-sm"
            ></textarea>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 text-sm md:text-base hover:bg-darkRed transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* INFO */}
        <div>
          <h2 className="text-gray-700 text-lg md:text-xl font-semibold uppercase">
            Contact Us
          </h2>
          <div className="w-12 h-1 bg-primary mt-2 mb-6"></div>

          <div className="space-y-4 md:space-y-6">
            <InfoItem
              icon={<Home size={18} />}
              text="Jail Road Mardan, near Mardan Central Jail, District Mardan"
            />
            <InfoItem
              icon={<Phone size={18} />}
              text="+92 342 5335680"
            />
            <InfoItem
              icon={<Mail size={18} />}
              text="thebloodheroescampaign@gmail.com"
            />
          </div>

          <h3 className="text-gray-700 text-lg md:text-xl font-semibold uppercase mt-10">
            We Are Social
          </h3>
          <div className="w-12 h-1 bg-primary mt-2 mb-4"></div>

          <div className="flex gap-3 md:gap-4">
            <SocialIcon
              icon={<Facebook />}
              link="https://www.facebook.com/share/1FWsfAkU4m/"
            />
            <SocialIcon
              icon={<Instagram />}
              link="https://www.instagram.com/thebloodheroes"
            />
            <SocialIcon
              icon={<Linkedin />}
              link="https://www.linkedin.com/company/the-blood-heroes-campaign/"
            />
            <SocialIcon
              icon={<Globe />}
              link="https://www.threads.com/@thebloodheroes"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function InfoItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 text-sm md:text-base">
      <div className="bg-primary text-white p-2 md:p-3 rounded">
        {icon}
      </div>
      <p>{text}</p>
    </div>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary text-white p-3 md:p-4 hover:bg-darkRed transition cursor-pointer rounded"
    >
      {icon}
    </a>
  );
}
