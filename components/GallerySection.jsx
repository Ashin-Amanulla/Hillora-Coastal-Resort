"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/images/insta-1.jpg", caption: "Resort View" },
  { src: "/images/insta-2.jpg", caption: "Accommodations" },
  { src: "/images/insta-3.jpg", caption: "Rooms" },
  { src: "/images/insta-4.jpg", caption: "Facilities" },
  { src: "/images/insta-5.jpg", caption: "Dining Area" },
  { src: "/images/insta-6.jpg", caption: "Resort Exterior" },
  { src: "/images/insta-7.jpg", caption: "Guest Areas" },
  { src: "/images/insta-8.jpg", caption: "Resort Amenities" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-[#F8F9FA] to-[#E9ECEF] pattern-grid relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#2D9B9E] uppercase tracking-wider block mb-3">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#212529] mb-6">
              Resort Photos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative h-64 sm:h-72 overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#FFA500] transition-colors"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <p className="text-white text-center mt-4 text-lg">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
