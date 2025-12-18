"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/bg_1.jpg",
    title: "Welcome to Hillora",
    subtitle: "Your Perfect Coastal Escape in Arpora, Goa",
    ctaText: "Book Your Escape",
  },
  {
    id: 2,
    image: "/images/bg_2.jpg",
    title: "Hillora Coastal Resort",
    subtitle: "Experience Luxury & Serenity by the Coast",
    ctaText: "Explore Our Resort",
  },
  {
    id: 3,
    image: "/images/bg_3.jpg",
    title: "Luxury Awaits",
    subtitle: "Discover Unforgettable Moments at Hillora",
    ctaText: "Plan Your Stay",
  },
  {
    id: 4,
    image: "/images/bg_4.jpg",
    title: "Coastal Paradise",
    subtitle: "Where Comfort Meets Coastal Beauty",
    ctaText: "Reserve Now",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden mt-20"
    >
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D5E73]/50 via-[#2D9B9E]/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Slide Content */}
      <div className="absolute inset-0 flex items-center justify-end z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl ml-auto relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-opacity duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                <h2 className="text-2xl font-normal text-white mb-4 tracking-wider uppercase">
                  {slide.title}
                </h2>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                  {slide.subtitle}
                </h1>
                <a
                  href="#contact"
                  onClick={handleSmoothScroll}
                  className="inline-block bg-[#FFA500] text-white px-10 py-4 rounded-full font-semibold text-base shadow-lg shadow-[#FFA500]/40 hover:bg-[#2D9B9E] hover:shadow-[#2D9B9E]/50 transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  {slide.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#FFA500]"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
