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
      className="bg-[#2d7a85] text-white pt-20 pb-10 relative"
    >
      {/* Top decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A962] via-[#E8D5A3] to-[#C9A962]" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* About */}
          <div>
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="Hillora Coastal Resort"
                width={180}
                height={70}
                className="h-14 w-auto object-contain mb-6"
              />
            </div>
            <h2 className="text-2xl font-bold mb-3 tracking-wide">
              Hillora Coastal Resort
            </h2>
            <p className="text-[#C9A962] text-sm mb-6 italic font-medium">
              A Unit of Navodaya Hospitality Services
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              Experience luxury and serenity at Hillora Coastal Resort in
              Arpora, Goa. Your perfect coastal escape awaits with world-class
              amenities and warm hospitality.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61584864930812"
                  className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A962] hover:text-[#1a1a1a] transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/hilloracoastalresort/?igsh=MXE1b255dGZpbWRuMQ%3D%3D"
                  className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A962] hover:text-[#1a1a1a] transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/hilloracoastal"
                  className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A962] hover:text-[#1a1a1a] transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-8 tracking-wide relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#C9A962]"></span>
            </h2>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#facilities", label: "Facilities" },
                { href: "#rooms", label: "Rooms" },
                { href: "#about", label: "About Us" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) =>
                      handleSmoothScroll(e, link.href.substring(1))
                    }
                    className="text-white/70 hover:text-[#C9A962] transition-all duration-300 block py-2.5 pl-0 hover:pl-2 border-l-2 border-transparent hover:border-[#C9A962]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8 tracking-wide relative inline-block">
              Contact Information
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#C9A962]"></span>
            </h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A962]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C9A962]" />
                </div>
                <span className="text-white/80 pt-2">Arpora, Goa, India</span>
              </li>
              <li>
                <a
                  href="tel:9699214167"
                  className="flex items-start gap-4 text-white/80 hover:text-[#C9A962] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#C9A962]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A962]/30 transition-colors">
                    <Phone className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  <span className="pt-2">Reception: +91 9699214167</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:7709965918"
                  className="flex items-start gap-4 text-white/80 hover:text-[#C9A962] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#C9A962]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A962]/30 transition-colors">
                    <Phone className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  <span className="pt-2">Bookings: +91 7709965918</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Frontoffice@hilloraresort.com"
                  className="flex items-start gap-4 text-white/80 hover:text-[#C9A962] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#C9A962]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A962]/30 transition-colors">
                    <Mail className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  <span className="pt-2">frontoffice@hilloraresort.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.hilloraresort.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-white/80 hover:text-[#C9A962] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#C9A962]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A962]/30 transition-colors">
                    <Globe className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  <span className="pt-2">www.hilloraresort.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Hillora Coastal Resort. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-2">
            Crafted by{" "}
            <a
              href="https://xyvin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A962] hover:text-white transition-colors duration-300"
            >
              xyvin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
