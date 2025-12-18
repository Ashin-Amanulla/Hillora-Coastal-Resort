"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UtensilsCrossed, ChefHat, Star } from "lucide-react";

export default function RestaurantSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FFF8F0] to-[#F5F1E8] relative overflow-hidden">
      {/* Decorative food-themed elements */}
      <div className="decorative-shape w-56 h-56 bg-[#FFA500] top-10 left-10 animate-float" />
      <div className="decorative-shape w-44 h-44 bg-[#2D9B9E] bottom-20 right-20 animate-float-delayed" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <ChefHat className="w-8 h-8 text-[#2D9B9E]" />
                <span className="text-sm font-semibold text-[#2D9B9E] uppercase tracking-wider">
                  Culinary Excellence
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold text-[#212529] mb-6">
                Experience Fine Dining at Our Restaurant
              </h2>

              <p className="text-lg text-[#6c757d] leading-relaxed mb-6">
                Indulge in a culinary journey like no other at Hillora Coastal
                Resort&apos;s exquisite restaurant. Our talented chefs craft
                each dish with passion, using the freshest local ingredients to
                create flavors that celebrate the rich culinary heritage of Goa.
              </p>

              <p className="text-lg text-[#6c757d] leading-relaxed mb-8">
                From traditional Goan delicacies to international favorites, our
                menu offers something for every palate. Enjoy your meal in our
                elegant dining space, where warm hospitality meets exceptional
                cuisine, creating unforgettable dining experiences.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#FFA500] fill-[#FFA500]" />
                  <span className="text-[#212529] font-medium">
                    Fresh Ingredients
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#FFA500] fill-[#FFA500]" />
                  <span className="text-[#212529] font-medium">
                    Expert Chefs
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#FFA500] fill-[#FFA500]" />
                  <span className="text-[#212529] font-medium">
                    Elegant Ambiance
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <UtensilsCrossed className="w-6 h-6 text-[#2D9B9E]" />
                <span className="text-[#212529] font-semibold text-lg">
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
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-[#2D9B9E]/20">
                <Image
                  src="/images/restaurant-logo.jpeg"
                  alt="Hillora Restaurant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D9B9E]/20 via-transparent to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFA500]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2D9B9E]/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
