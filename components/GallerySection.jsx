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
      <section className="py-24 bg-gradient-to-b from-white via-[#f8f9fa] to-[#f0f7f8] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#358A99]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#C9A962]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#358A99]/10 border border-[#358A99]/20 rounded-full text-[#358A99] text-sm font-medium tracking-wider uppercase mb-4">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6">
              Resort Photos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#358A99] to-[#C9A962] mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Carousel Navigation Buttons */}
            {galleryImages.length > IMAGES_PER_PAGE && (
              <>
                <button
                  onClick={goToPrevPage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-[#358A99] text-[#358A99] hover:text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center border border-gray-100"
                  aria-label="Previous images"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNextPage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-[#358A99] text-[#358A99] hover:text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center border border-gray-100"
                  aria-label="Next images"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {currentImages.map((item, index) => {
                const globalIndex = startIndex + index;
                return (
                  <motion.div
                    key={`${currentPage}-${globalIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative h-64 sm:h-72 overflow-hidden rounded-xl cursor-pointer group shadow-lg hover:shadow-2xl hover:shadow-[#358A99]/20 transition-all duration-500"
                    onClick={() => setSelectedImage(item)}
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#358A99]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      {item.caption}
                    </div>
                    {/* Hover indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination Dots */}
            {galleryImages.length > IMAGES_PER_PAGE && (
              <div className="flex justify-center items-center gap-3 mt-10">
                <button
                  onClick={goToPrevPage}
                  className="md:hidden bg-white hover:bg-[#358A99] text-[#358A99] hover:text-white p-2.5 rounded-full shadow-lg transition-all duration-300 border border-gray-100"
                  aria-label="Previous images"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToPage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentPage === index
                          ? "bg-[#C9A962] w-10"
                          : "bg-[#358A99]/30 hover:bg-[#358A99]/50 w-3"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNextPage}
                  className="md:hidden bg-white hover:bg-[#358A99] text-[#358A99] hover:text-white p-2.5 rounded-full shadow-lg transition-all duration-300 border border-gray-100"
                  aria-label="Next images"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Image Counter */}
            {galleryImages.length > IMAGES_PER_PAGE && (
              <p className="text-center text-[#358A99]/70 mt-6 text-sm font-medium">
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
