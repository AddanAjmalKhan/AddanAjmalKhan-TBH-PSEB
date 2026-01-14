import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-400 px-4 md:px-6 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 md:gap-3">
            <img src={logo} alt="The Blood Heroes Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <h3 className="text-white font-semibold text-sm md:text-lg">THE BLOOD HEROES</h3>
          </div>
          <p className="mt-3 text-xs md:text-sm leading-relaxed">
            Dedicated to saving lives through voluntary blood donation. Join our community of heroes and make a difference today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
          <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
            <li>Home</li>
            <li>Our Gallery</li>
            <li>Donate Blood</li>
            <li>Request Blood</li>
            <li>Admin Portal</li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Get Involved</h4>
          <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
            <li>Volunteer</li>
            <li>Organize a Drive</li>
            <li>Corporate Partners</li>
            <li>Success Stories</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact Us</h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>📍 Jail Road Mardan, near Mardan Central Jail, District Mardan Pakistan</li>
            <li>📞 +92 342 5335680</li>
            <li>✉️ thebloodheroescampaign@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
        <p>© 2025 The Blood Heroes. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Made with <span className="text-red-500">❤</span> for humanity</p>
      </div>
    </footer>
  );
};

export default Footer;
