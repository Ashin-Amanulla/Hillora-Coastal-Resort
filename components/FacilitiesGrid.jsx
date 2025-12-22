"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wifi,
  Tv,
  Shield,
  Sparkles,
  Home,
  Clock,
  Droplets,
  Square,
  Shirt,
  Bed,
  Toilet,
  Bell,
  Radio,
  Refrigerator,
  UtensilsCrossed,
  Coffee,
  Wine,
  FileCheck,
  Flame,
  Zap,
  Wind,
} from "lucide-react";

const popularAmenities = [
  { icon: Wifi, name: "Free Wifi" },
  { icon: Tv, name: "LCD TV" },
  { icon: Shield, name: "24X7 Security" },
  { icon: Sparkles, name: "Free Toiletries" },
  { icon: Home, name: "Daily Housekeeping" },
  { icon: Clock, name: "24-Hour Front Desk" },
  { icon: Wind, name: "All AC Rooms" },
];

const otherAmenities = [
  { icon: Droplets, name: "Mineral Water Bottle" },
  { icon: Square, name: "Tile/Marble floor" },
  { icon: Shirt, name: "Wardrobe or Closet" },
  { icon: Sparkles, name: "Clean Towels" },
  { icon: Bed, name: "Clean Linen" },
  { icon: Toilet, name: "Toilet Paper" },
  { icon: Bell, name: "Wake-Up Service" },
  { icon: Radio, name: "DTH Channels" },
  { icon: Refrigerator, name: "Mini Fridge" },
  { icon: UtensilsCrossed, name: "Restaurant", hasLogo: true },
  { icon: Coffee, name: "Room Service" },
  { icon: Droplets, name: "RO Water" },
  { icon: Coffee, name: "Breakfast (Ala Carte)" },
  { icon: UtensilsCrossed, name: "In-House Kitchen" },
  { icon: Flame, name: "Fire Exit" },
  { icon: FileCheck, name: "FSSAI Licence" },
  { icon: Wine, name: "Bar" },
  { icon: Zap, name: "Electric Kettle" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function FacilitiesGrid() {
  return (
    <section
      id="facilities"
      className="py-24 bg-gradient-to-b from-white via-[#f8f9fa] to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#358A99]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#358A99]/10 border border-[#358A99]/20 rounded-full text-[#358A99] text-sm font-medium tracking-wider uppercase mb-4">
            Holiday in Goa with Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6">
            World-Class Facilities & Amenities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#358A99] to-[#C9A962] mx-auto rounded-full"></div>
        </div>

        {/* Popular Amenities Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#212529] mb-10 text-center">
            Popular Amenities
          </h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {popularAmenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#358A99] rounded-xl p-8 transform hover:-translate-y-2 shadow-xl shadow-[#358A99]/20 hover:shadow-2xl hover:shadow-[#358A99]/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-white/20 group-hover:bg-white/30 transition-colors">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-center text-white">
                    {amenity.name}
                  </h4>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Other Amenities Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#212529] mb-10 text-center">
            Other Amenities
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {otherAmenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#358A99]/30 hover:shadow-xl hover:shadow-[#358A99]/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center bg-[#358A99]/10 group-hover:bg-[#358A99]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#358A99]" />
                  </div>
                  <h4 className="text-sm font-medium text-center text-[#212529] leading-tight">
                    {amenity.name}
                  </h4>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Google Review QR Code Section */}
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          <p className="text-[#358A99] font-medium mb-4 text-center">
            Share Your Experience
          </p>
          <div className="relative w-72 h-72 bg-white p-4 rounded-xl shadow-lg">
            <Image
              src="/images/google-review.jpeg"
              alt="Google Review QR Code"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
