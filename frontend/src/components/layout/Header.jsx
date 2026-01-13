import { useState } from "react";
import { Home, Image, Droplet, Phone, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: <Home size={16} />, active: true },
    { label: "Gallery", icon: <Image size={16} /> },
    { label: "Donate Blood", icon: <Droplet size={16} /> },
    { label: "Request Blood", icon: <Droplet size={16} /> },
    { label: "Contact us", icon: <Phone size={16} /> },
  ];

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="The Blood Heroes Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          <div className="flex flex-col">
            <h1 className="text-primary font-bold text-xs sm:text-sm">THE BLOOD HEROES</h1>
            <p className="text-gray-500 text-[10px] sm:text-xs">Every Pint Matters</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-2">
          {navItems.map((item, index) => (
            <NavItem key={index} icon={item.icon} label={item.label} active={item.active} />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 rounded-md text-gray-600 hover:text-white hover:bg-red-600 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="sm:hidden bg-white border-t border-gray-200 px-4 py-2 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavItem key={index} icon={item.icon} label={item.label} active={item.active} mobile />
          ))}
        </nav>
      )}
    </header>
  );
}

function NavItem({ icon, label, active, mobile }) {
  return (
    <button
      className={`flex items-center gap-2 px-3 py-1 rounded-full transition text-sm sm:text-sm
        ${active ? "bg-red-600 text-white" : "text-gray-600 hover:bg-gray-100"}
        ${mobile ? "justify-start w-full" : ""}`}
    >
      {icon}
      <span className="truncate">{label}</span>
    </button>
  );
}
