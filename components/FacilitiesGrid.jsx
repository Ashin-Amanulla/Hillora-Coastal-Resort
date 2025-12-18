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
} from "lucide-react";

const popularAmenities = [
  { icon: Wifi, name: "Free Wifi" },
  { icon: Tv, name: "LCD TV" },
  { icon: Shield, name: "24X7 Security" },
  { icon: Sparkles, name: "Free Toiletries" },
  { icon: Home, name: "Daily Housekeeping" },
  { icon: Clock, name: "24-Hour Front Desk" },
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
    <section id="facilities" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#2D9B9E] uppercase tracking-wider block mb-3">
            Holiday in Goa with Us
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#212529] mb-6">
            World-Class Facilities & Amenities
          </h2>
        </div>

        {/* Popular Amenities Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#212529] mb-8 text-center">
            Popular Amenities
          </h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-7xl mx-auto"
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
                  className="bg-gradient-to-br from-[#2D9B9E] to-[#5EC4C7] rounded-2xl p-8 border-2 border-[#2D9B9E] transform hover:-translate-y-2 shadow-xl shadow-[#2D9B9E]/20 transition-all duration-400 cursor-pointer"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-white/25">
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
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#212529] mb-8 text-center">
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
                  className="bg-white rounded-xl p-6 border-2 border-[#F5F1E8] hover:border-[#2D9B9E] hover:shadow-lg hover:shadow-[#2D9B9E]/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center bg-[#F5F1E8]">
                    <Icon className="w-6 h-6 text-[#2D9B9E]" />
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-2xl mx-auto mb-4">
          <div className="relative w-80 h-80">
            <Image
              src="/images/google-review-qr.jpeg"
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
