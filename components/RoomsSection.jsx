"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Spacious and elegantly designed rooms with modern amenities",
    image: "/images/room-1.jpg",
    features: ["AC & WiFi", "Ocean View", "2 Guests"],
    imagePosition: "left",
  },
  {
    id: 2,
    name: "Superb Deluxe Room",
    description: "Premium accommodations with enhanced comfort and luxury",
    image: "/images/room-2.jpg",
    features: ["AC & WiFi", "Balcony View", "3 Guests"],
    imagePosition: "right",
  },
  {
    id: 3,
    name: "Villa with Private Pool",
    description:
      "Ultimate luxury with your own private pool and exclusive amenities for an unforgettable stay",
    image: "/images/room-3.jpg",
    features: ["Private Pool", "Full Kitchen", "4-6 Guests"],
    imagePosition: "left",
  },
];

export default function RoomsSection() {
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
      id="rooms"
      className="py-24 bg-gradient-to-b from-[#f8f9fa] to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-[#358A99]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#C9A962]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#358A99]/10 border border-[#358A99]/20 rounded-full text-[#358A99] text-sm font-medium tracking-wider uppercase mb-4">
            Hillora Accommodations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6">
            Luxurious Rooms & Villas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#358A99] to-[#C9A962] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                room.imagePosition === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } gap-0 bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#358A99]/10 transition-shadow duration-500`}
            >
              {/* Image */}
              <div className="relative w-full lg:w-1/2 h-80 lg:h-[450px] group">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Room number badge */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-[#C9A962] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex items-center p-8 lg:p-14">
                <div className="text-center lg:text-left w-full">
                  <h3 className="text-3xl font-bold text-[#212529] mb-4">
                    {room.name}
                  </h3>
                  <p className="text-base text-[#6c757d] leading-relaxed mb-8">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                    {room.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-[#358A99]/10 px-4 py-2 rounded-full"
                      >
                        <CheckCircle className="w-4 h-4 text-[#358A99]" />
                        <span className="text-sm font-medium text-[#358A99]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="tel:7709965918"
                    className="inline-flex items-center gap-3 bg-[#C9A962] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold text-sm shadow-xl shadow-[#C9A962]/30 hover:bg-[#358A99] hover:text-white hover:shadow-[#358A99]/40 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
