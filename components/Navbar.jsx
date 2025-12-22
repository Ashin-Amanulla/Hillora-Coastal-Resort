"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#facilities", label: "Facilities" },
    { href: "#rooms", label: "Rooms" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top accent bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gradient-to-r from-[#C9A962] via-[#E8D5A3] to-[#C9A962]"></div>

      <nav className="fixed top-1 left-0 right-0 z-50 bg-[#358A99]">
        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        <div className="container mx-auto px-4 lg:px-8">
          {/* Main navbar content */}
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Desktop Navigation - Left Side */}
            <div className="hidden lg:flex items-center space-x-1 flex-1">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                  className="group relative px-5 py-2.5 text-white/90 font-medium text-[13px] uppercase tracking-[0.15em] hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C9A962] group-hover:w-3/4 transition-all duration-300 ease-out"></span>
                </a>
              ))}
            </div>

            {/* Centered Logo with decorative elements */}
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="flex items-center justify-center h-full group"
            >
              <div className="relative px-6 lg:px-10">
                {/* Left decorative line */}
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C9A962]/60"></div>

                {/* Logo glow effect */}
                <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <Image
                  src="/images/logo.png"
                  alt="Hillora Coastal Resort"
                  width={200}
                  height={60}
                  className="h-12 md:h-14 lg:h-16 w-auto object-contain relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                  priority
                />

                {/* Right decorative line */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C9A962]/60"></div>
              </div>
            </a>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden lg:flex items-center space-x-1 flex-1 justify-end">
              {navLinks.slice(2).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                  className="group relative px-5 py-2.5 text-white/90 font-medium text-[13px] uppercase tracking-[0.15em] hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C9A962] group-hover:w-3/4 transition-all duration-300 ease-out"></span>
                </a>
              ))}

              {/* Premium CTA Button */}
              <a
                href="tel:+917709965918"
                className="ml-4 flex items-center gap-2 px-5 py-2.5 bg-[#C9A962] text-[#1a1a1a] font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#E8D5A3] transition-all duration-300 shadow-lg shadow-[#C9A962]/20"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-white/90 hover:text-[#C9A962] transition-colors duration-300 rounded-md hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-2 border-t border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                  className="block px-4 py-3.5 text-white/90 font-medium text-sm uppercase tracking-wider hover:text-[#C9A962] hover:bg-white/5 rounded-md transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="tel:+917709965918"
                className="flex items-center justify-center gap-2 mx-4 mt-4 px-5 py-3 bg-[#C9A962] text-[#1a1a1a] font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-[#E8D5A3] transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
