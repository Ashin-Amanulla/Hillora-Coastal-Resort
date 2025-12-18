"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#1A7577] text-white pt-16 pb-8 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D9B9E] to-[#5EC4C7]" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo.jpeg"
                alt="Hillora Coastal Resort"
                width={150}
                height={60}
                className="h-12 w-auto object-contain mb-4"
              />
            </div>
            <h2 className="text-2xl font-bold mb-6">Hillora Coastal Resort</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Experience luxury and serenity at Hillora Coastal Resort in
              Arpora, Goa. Your perfect coastal escape awaits with world-class
              amenities and warm hospitality.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2D9B9E] transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2D9B9E] transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2D9B9E] transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, "home")}
                  className="text-white/70 hover:text-[#5EC4C7] transition-colors duration-300 block py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  onClick={(e) => handleSmoothScroll(e, "facilities")}
                  className="text-white/70 hover:text-[#5EC4C7] transition-colors duration-300 block py-2"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#rooms"
                  onClick={(e) => handleSmoothScroll(e, "rooms")}
                  className="text-white/70 hover:text-[#5EC4C7] transition-colors duration-300 block py-2"
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, "about")}
                  className="text-white/70 hover:text-[#5EC4C7] transition-colors duration-300 block py-2"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                  className="text-white/70 hover:text-[#5EC4C7] transition-colors duration-300 block py-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#5EC4C7] mt-1 flex-shrink-0" />
                <span className="text-white/80">Arpora, Goa, India</span>
              </li>
              <li>
                <a
                  href="tel:9699214167"
                  className="flex items-start gap-3 text-white/80 hover:text-[#5EC4C7] transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-[#5EC4C7] mt-1 flex-shrink-0" />
                  <span>Reception: +91 9699214167</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:7709965918"
                  className="flex items-start gap-3 text-white/80 hover:text-[#5EC4C7] transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-[#5EC4C7] mt-1 flex-shrink-0" />
                  <span>Bookings: +91 7709965918</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Frontoffice@hilloraresort.com"
                  className="flex items-start gap-3 text-white/80 hover:text-[#5EC4C7] transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-[#5EC4C7] mt-1 flex-shrink-0" />
                  <span>frontoffice@hilloraresort.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.hilloraresort.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 hover:text-[#5EC4C7] transition-colors duration-300"
                >
                  <Globe className="w-5 h-5 text-[#5EC4C7] mt-1 flex-shrink-0" />
                  <span>www.hilloraresort.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Hillora Coastal Resort. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Crafted by{" "}
            <a
              href="https://xyvin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5EC4C7] hover:text-[#2D9B9E] transition-colors duration-300"
            >
              xyvin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
