import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BookingCTA from '@/components/BookingCTA';
import FacilitiesGrid from '@/components/FacilitiesGrid';
import AboutSection from '@/components/AboutSection';
import RoomsSection from '@/components/RoomsSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BookingCTA />
      <FacilitiesGrid />
      <AboutSection />
      <RoomsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
