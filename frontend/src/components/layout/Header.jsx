import { Home, Image, Droplet, Phone } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="The Blood Heroes Logo"
            className="w-10 h-10 object-contain"
          />

          <div>
            <h1 className="text-primary font-bold text-sm">
              THE BLOOD HEROES
            </h1>
            <p className="text-xs text-gray-500">
              Every Pint Matters
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2 text-sm">
          <NavItem icon={<Home size={14} />} label="Home" active />
          <NavItem icon={<Image size={14} />} label="Gallery" />
          <NavItem icon={<Droplet size={14} />} label="Donate Blood" />
          <NavItem icon={<Droplet size={14} />} label="Request Blood" />
          <NavItem icon={<Phone size={14} />} label="Contact us" />
        </nav>
      </div>
    </header>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition text-sm
        ${
          active
            ? "bg-primary text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
    >
      {icon}
      {label}
    </button>
  );
}
