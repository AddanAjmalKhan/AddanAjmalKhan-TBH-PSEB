import { useState } from "react";
import { Image, Droplet, Phone, Menu, X, Home } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openBloodRequest = () => {
    window.dispatchEvent(new Event("open-blood-request"));
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -90; // sticky header height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <div>
            <h1 className="text-xs font-bold">THE BLOOD HEROES</h1>
            <p className="text-[10px] text-gray-500">Every Pint Matters</p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-2">
          {/* Home */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 px-3 py-1 rounded-full text-sm
                       text-gray-600 hover:bg-gray-100 transition"
          >
            <Home size={16} />
            Home
          </button>

          {/* Gallery (route stays same) */}
          <a
            href="/gallery"
            className="flex items-center gap-2 px-3 py-1 rounded-full text-sm
                       text-gray-600 hover:bg-gray-100 transition"
          >
            <Image size={16} />
            Gallery
          </a>

          {/* Request Blood */}
          <button
            onClick={openBloodRequest}
            className="flex items-center gap-2 px-3 py-1 rounded-full text-sm
                       text-gray-600 hover:bg-red-600 hover:text-white transition"
          >
            <Droplet size={16} />
            Request Blood
          </button>

          {/* Contact */}
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 px-3 py-1 rounded-full text-sm
                       text-gray-600 hover:bg-gray-100 transition"
          >
            <Phone size={16} />
            Contact us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="sm:hidden px-4 py-2 border-t flex flex-col gap-2">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Home size={16} />
            Home
          </button>

          <a
            href="/gallery"
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Image size={16} />
            Gallery
          </a>

          <button
            onClick={() => {
              openBloodRequest();
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-md
                       text-gray-600 hover:bg-red-600 hover:text-white"
          >
            <Droplet size={16} />
            Request Blood
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Phone size={16} />
            Contact us
          </button>
        </nav>
      )}
    </header>
  );
}
