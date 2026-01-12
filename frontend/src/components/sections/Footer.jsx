import logo from "../../assets/hero.png"; // replace with your actual logo if different

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-400 px-6 pt-20 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="The Blood Heroes" className="w-10 h-10" />
            <h3 className="text-white font-semibold text-lg">
              THE BLOOD HEROES
            </h3>
          </div>

          <p className="mt-4 text-sm leading-relaxed">
            Dedicated to saving lives through voluntary blood donation.
            Join our community of heroes and make a difference today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Our Gallery</li>
            <li>Donate Blood</li>
            <li>Request Blood</li>
            <li>Admin Portal</li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="text-white font-semibold mb-4">Get Involved</h4>
          <ul className="space-y-2 text-sm">
            <li>Volunteer</li>
            <li>Organize a Drive</li>
            <li>Corporate Partners</li>
            <li>Success Stories</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li>📍 Pakistan</li>
            <li>📞 +92 **********</li>
            <li>✉️ help@bloodheroes.org</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2025 The Blood Heroes. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Made with <span className="text-red-500">❤</span> for humanity
        </p>
      </div>
    </footer>
  );
};

export default Footer;
