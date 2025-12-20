"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UtensilsCrossed, ChefHat, Star } from "lucide-react";

export default function RestaurantSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#faf8f5] via-white to-[#f5f1e8] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#C9A962]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#358A99]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="w-12 h-12 bg-[#358A99]/10 rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-[#358A99]" />
                </div>
                <span className="inline-block px-4 py-1.5 bg-[#358A99]/10 border border-[#358A99]/20 rounded-full text-[#358A99] text-sm font-medium tracking-wider uppercase">
                  Culinary Excellence
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6">
                Experience Fine Dining at Our Restaurant
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-[#358A99] to-[#C9A962] rounded-full mb-8 mx-auto lg:mx-0"></div>

              <p className="text-lg text-[#6c757d] leading-relaxed mb-6">
                Indulge in a culinary journey like no other at Hillora Coastal
                Resort&apos;s exquisite restaurant. Our talented chefs craft
                each dish with passion, using the freshest local ingredients to
                create flavors that celebrate the rich culinary heritage of Goa.
              </p>

              <p className="text-lg text-[#6c757d] leading-relaxed mb-10">
                From traditional Goan delicacies to international favorites, our
                menu offers something for every palate. Enjoy your meal in our
                elegant dining space, where warm hospitality meets exceptional
                cuisine, creating unforgettable dining experiences.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                {["Fresh Ingredients", "Expert Chefs", "Elegant Ambiance"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-[#C9A962]/10 px-4 py-2 rounded-full"
                    >
                      <Star className="w-4 h-4 text-[#C9A962] fill-[#C9A962]" />
                      <span className="text-[#212529] font-medium text-sm">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 p-4 bg-[#358A99]/5 rounded-xl border border-[#358A99]/10">
                <UtensilsCrossed className="w-6 h-6 text-[#358A99]" />
                <span className="text-[#212529] font-semibold">
                  Open Daily | Breakfast, Lunch & Dinner
                </span>
              </div>
            </motion.div>

            {/* Restaurant Logo/Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-[#358A99]/20 group">
                <Image
                  src="/images/restaurant-logo.jpeg"
                  alt="Hillora Restaurant"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#358A99]/30 via-transparent to-transparent" />
              </div>

              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C9A962]/30 rounded-2xl -z-10"></div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C9A962]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#358A99]/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
