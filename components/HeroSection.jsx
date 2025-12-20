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
      className="relative h-screen w-full overflow-hidden mt-[84px] lg:mt-[100px]"
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
            {/* Premium dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Gradient overlay with brand colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#358A99]/60 via-[#358A99]/30 to-transparent" />
            {/* Bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Slide Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl ml-auto relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 relative translate-y-0"
                    : "opacity-0 absolute inset-0 translate-y-4"
                }`}
              >
                <span className="inline-block px-4 py-1.5 bg-[#C9A962]/20 backdrop-blur-sm border border-[#C9A962]/40 rounded-full text-[#C9A962] text-sm font-medium tracking-wider uppercase mb-6">
                  {slide.title}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
                  {slide.subtitle}
                </h1>
                <a
                  href="#contact"
                  onClick={handleSmoothScroll}
                  className="inline-flex items-center gap-2 bg-[#C9A962] text-[#1a1a1a] px-10 py-4 rounded-sm font-semibold text-base shadow-2xl shadow-[#C9A962]/30 hover:bg-white hover:text-[#358A99] transform hover:-translate-y-1 transition-all duration-300"
                >
                  {slide.ctaText}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-10 bg-[#C9A962]"
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent mt-12"></div>
        </div>
      </div>
    </section>
  );
}
