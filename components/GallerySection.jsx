"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// All images from client-images folder
const galleryImages = [
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.24.46 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.24.47 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.24.48 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.24.50 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.24.51 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.24.52 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.24.54 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.24.55 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.24.56 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.24.58 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.24.59 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.25.03 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.25.06 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.25.07 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.26.28 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.26.32 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.26.35 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.26.37 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.26.39 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.26.42 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.26.46 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.26.50 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-17 at 9.26.53 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-19 at 8.09.09 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-19 at 8.09.10 AM (1).jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-19 at 8.09.10 AM (2).jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-19 at 8.09.10 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-19 at 8.09.11 AM (1).jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-19 at 8.09.11 AM (2).jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-19 at 8.09.11 AM (3).jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-19 at 8.09.11 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-19 at 8.10.16 AM.jpeg",
    caption: "Resort Gallery",
  },
  {
    src: "/images/client-images/WhatsApp Image 2025-12-19 at 8.10.17 AM.jpeg",
    caption: "Resort Gallery",
  },
];

const IMAGES_PER_PAGE = 8;

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const startIndex = currentPage * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const currentImages = galleryImages.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      const currentIndex = galleryImages.findIndex(
        (img) => img.src === selectedImage.src
      );

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        setSelectedImage(galleryImages[currentIndex - 1]);
      } else if (
        e.key === "ArrowRight" &&
        currentIndex < galleryImages.length - 1
      ) {
        setSelectedImage(galleryImages[currentIndex + 1]);
      } else if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

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

          <div className="relative">
            {/* Carousel Navigation Buttons */}
            {galleryImages.length > IMAGES_PER_PAGE && (
              <>
                <button
                  onClick={goToPrevPage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white text-[#2D9B9E] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
                  aria-label="Previous images"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNextPage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white text-[#2D9B9E] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
                  aria-label="Next images"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentImages.map((item, index) => {
                const globalIndex = startIndex + index;
                return (
                  <motion.div
                    key={`${currentPage}-${globalIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
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
                );
              })}
            </div>

            {/* Pagination Dots */}
            {galleryImages.length > IMAGES_PER_PAGE && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={goToPrevPage}
                  className="md:hidden bg-white/90 hover:bg-white text-[#2D9B9E] p-2 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Previous images"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToPage(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentPage === index
                          ? "bg-[#2D9B9E] w-8"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNextPage}
                  className="md:hidden bg-white/90 hover:bg-white text-[#2D9B9E] p-2 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Next images"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Image Counter */}
            {galleryImages.length > IMAGES_PER_PAGE && (
              <p className="text-center text-gray-600 mt-4 text-sm">
                Showing {startIndex + 1}-
                {Math.min(endIndex, galleryImages.length)} of{" "}
                {galleryImages.length} images
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage &&
          (() => {
            const currentIndex = galleryImages.findIndex(
              (img) => img.src === selectedImage.src
            );
            const hasPrev = currentIndex > 0;
            const hasNext = currentIndex < galleryImages.length - 1;

            const goToPrevImage = (e) => {
              e.stopPropagation();
              if (hasPrev) {
                setSelectedImage(galleryImages[currentIndex - 1]);
              }
            };

            const goToNextImage = (e) => {
              e.stopPropagation();
              if (hasNext) {
                setSelectedImage(galleryImages[currentIndex + 1]);
              }
            };

            return (
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
                    className="absolute -top-12 right-0 text-white hover:text-[#5EC4C7] transition-colors z-10"
                    aria-label="Close"
                  >
                    <X className="w-8 h-8" />
                  </button>

                  {/* Previous Button */}
                  {hasPrev && (
                    <button
                      onClick={goToPrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  )}

                  {/* Next Button */}
                  {hasNext && (
                    <button
                      onClick={goToNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}

                  <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.caption}
                      fill
                      className="object-contain"
                      sizes="90vw"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-white text-center text-lg flex-1">
                      {selectedImage.caption}
                    </p>
                    <p className="text-white/60 text-sm">
                      {currentIndex + 1} / {galleryImages.length}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
      </AnimatePresence>
    </>
  );
}
