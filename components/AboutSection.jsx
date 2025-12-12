'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function AboutSection() {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Images */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-80 rounded-lg overflow-hidden"
            >
              <Image
                src="/images/about-1.jpg"
                alt="Hillora Resort exterior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-80 rounded-lg overflow-hidden mt-8"
            >
              <Image
                src="/images/about-2.jpg"
                alt="Hillora Resort facilities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-[#2D9B9E] uppercase tracking-wider block mb-3">
                About Hillora Coastal Resort
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#212529] mb-6">
                Experience Paradise in Arpora, Goa
              </h2>
              <p className="text-lg text-[#6c757d] leading-relaxed mb-5">
                Nestled in the heart of Arpora, Goa, Hillora Coastal Resort offers
                an unparalleled blend of luxury, comfort, and coastal beauty. Our
                resort features world-class amenities including private pool
                villas, deluxe accommodations, fine dining, and exciting
                watersports activities.
              </p>
              <p className="text-lg text-[#6c757d] leading-relaxed mb-8">
                Whether you're seeking a romantic getaway, a family vacation, or a
                corporate retreat, Hillora provides the perfect setting with
                modern facilities, warm hospitality, and convenient access to
                Goa's best attractions.
              </p>
              <a
                href="tel:7875450365"
                onClick={handleSmoothScroll}
                className="inline-flex items-center gap-2 bg-[#FFA500] text-white px-9 py-4 rounded-full font-semibold text-base shadow-lg shadow-[#FFA500]/30 hover:bg-[#2D9B9E] hover:shadow-[#2D9B9E]/40 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call to Reserve: 7875450365
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


