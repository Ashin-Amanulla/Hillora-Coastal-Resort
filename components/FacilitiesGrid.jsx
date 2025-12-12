'use client';

import { motion } from 'framer-motion';
import {
  BedDouble,
  Home,
  Waves,
  UtensilsCrossed,
  Coffee,
  Wine,
  Building2,
  Car,
} from 'lucide-react';

const facilities = [
  { icon: BedDouble, name: 'Deluxe Rooms' },
  { icon: BedDouble, name: 'Superb Deluxe Rooms' },
  { icon: Home, name: 'Villa with Private Pool', featured: true },
  { icon: Waves, name: 'Swimming Pool' },
  { icon: UtensilsCrossed, name: 'Restaurant' },
  { icon: Coffee, name: 'Breakfast' },
  { icon: Wine, name: 'Bar' },
  { icon: Building2, name: 'Conference Hall' },
  { icon: Waves, name: 'Watersports' },
  { icon: Car, name: 'Airport & Railway Pickup' },
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white rounded-2xl p-12 border-2 transition-all duration-400 cursor-pointer ${
                  facility.featured
                    ? 'bg-gradient-to-br from-[#2D9B9E] to-[#5EC4C7] border-[#2D9B9E] transform -translate-y-2 shadow-xl shadow-[#2D9B9E]/20'
                    : 'border-[#F5F1E8] hover:border-[#2D9B9E] hover:shadow-xl hover:shadow-[#2D9B9E]/20 hover:-translate-y-2'
                }`}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-400 ${
                    facility.featured
                      ? 'bg-white/25'
                      : 'bg-[#F5F1E8] group-hover:bg-[#2D9B9E]'
                  }`}
                >
                  <Icon
                    className={`w-10 h-10 ${
                      facility.featured ? 'text-white' : 'text-[#2D9B9E]'
                    }`}
                  />
                </div>
                <h3
                  className={`text-lg font-semibold text-center ${
                    facility.featured ? 'text-white' : 'text-[#212529]'
                  }`}
                >
                  {facility.name}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


