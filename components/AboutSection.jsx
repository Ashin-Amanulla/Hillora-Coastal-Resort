"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function AboutSection() {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
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

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-[#f8f6f2] via-white to-[#f0f7f8] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#358A99]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C9A962]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-72 lg:h-96 rounded-xl overflow-hidden shadow-2xl shadow-black/10"
            >
              <Image
                src="/images/about-1.jpg"
                alt="Hillora Resort exterior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#358A99]/20 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-72 lg:h-96 rounded-xl overflow-hidden mt-8 shadow-2xl shadow-black/10"
            >
              <Image
                src="/images/about-2.jpg"
                alt="Hillora Resort facilities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#358A99]/20 to-transparent"></div>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-[#C9A962]/30 rounded-xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#358A99]/10 border border-[#358A99]/20 rounded-full text-[#358A99] text-sm font-medium tracking-wider uppercase mb-4">
                About Hillora Coastal Resort
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6 leading-tight">
                Experience Paradise in Arpora, Goa
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#358A99] to-[#C9A962] rounded-full mb-8"></div>
              <p className="text-lg text-[#6c757d] leading-relaxed mb-5">
                Nestled in the heart of Arpora, Goa, Hillora Coastal Resort
                offers an unparalleled blend of luxury, comfort, and coastal
                beauty. Our resort features world-class amenities including
                private pool villas, deluxe accommodations, fine dining, and
                exciting watersports activities.
              </p>
              <p className="text-lg text-[#6c757d] leading-relaxed mb-10">
                Whether you're seeking a romantic getaway, a family vacation, or
                a corporate retreat, Hillora provides the perfect setting with
                modern facilities, warm hospitality, and convenient access to
                Goa's best attractions.
              </p>
              <a
                href="tel:7709965918"
                className="inline-flex items-center gap-3 bg-[#C9A962] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold text-base shadow-xl shadow-[#C9A962]/30 hover:bg-[#358A99] hover:text-white hover:shadow-[#358A99]/40 transform hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Book Now: +91 7709965918
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
