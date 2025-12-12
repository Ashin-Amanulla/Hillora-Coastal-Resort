'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Spacious and elegantly designed rooms with modern amenities',
    image: '/images/room-1.jpg',
    features: ['AC & WiFi', 'Ocean View', '2 Guests'],
    imagePosition: 'left',
  },
  {
    id: 2,
    name: 'Superb Deluxe Room',
    description: 'Premium accommodations with enhanced comfort and luxury',
    image: '/images/room-2.jpg',
    features: ['AC & WiFi', 'Balcony View', '3 Guests'],
    imagePosition: 'right',
  },
  {
    id: 3,
    name: 'Villa with Private Pool',
    description:
      'Ultimate luxury with your own private pool and exclusive amenities for an unforgettable stay',
    image: '/images/room-3.jpg',
    features: ['Private Pool', 'Full Kitchen', '4-6 Guests'],
    imagePosition: 'left',
  },
];

export default function RoomsSection() {
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
    <section id="rooms" className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#2D9B9E] uppercase tracking-wider block mb-3">
            Hillora Accommodations
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#212529] mb-6">
            Luxurious Rooms & Villas
          </h2>
        </div>

        <div className="space-y-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                room.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-0 bg-white rounded-lg overflow-hidden shadow-lg`}
            >
              {/* Image */}
              <div className="relative w-full lg:w-1/2 h-80 lg:h-auto">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex items-center p-10 lg:p-14">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-semibold text-[#212529] mb-4">
                    {room.name}
                  </h3>
                  <p className="text-base text-[#6c757d] leading-relaxed mb-6">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#2D9B9E]" />
                        <span className="text-sm text-[#6c757d]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="tel:7875450365"
                    onClick={handleSmoothScroll}
                    className="inline-flex items-center gap-2 bg-[#FFA500] text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg shadow-[#FFA500]/30 hover:bg-[#2D9B9E] hover:shadow-[#2D9B9E]/40 transform hover:-translate-y-0.5 transition-all duration-300"
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


