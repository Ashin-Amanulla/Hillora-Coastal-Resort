import { Phone, Mail, Clock } from "lucide-react";

export default function BookingCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F1E8] via-white to-[#f8f6f2] -mt-20 relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#358A99] rounded-2xl shadow-2xl shadow-[#358A99]/30 p-10 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            {/* Gold accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A962] to-transparent"></div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1.5 bg-[#C9A962]/20 border border-[#C9A962]/40 rounded-full text-[#C9A962] text-sm font-medium tracking-wider uppercase mb-4">
                  Reservations
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Book Your Stay at Hillora
                </h2>
                <p className="text-lg text-white/80">
                  Contact us directly for reservations and special offers
                </p>
              </div>

              {/* Check-in/Check-out Times */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10 pb-10 border-b border-white/10">
                <div className="flex items-center gap-3 text-white bg-white/10 px-6 py-3 rounded-lg">
                  <Clock className="w-5 h-5 text-[#C9A962]" />
                  <div>
                    <span className="text-sm text-white/70">Check-in:</span>
                    <span className="ml-2 font-semibold">12:00 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white bg-white/10 px-6 py-3 rounded-lg">
                  <Clock className="w-5 h-5 text-[#C9A962]" />
                  <div>
                    <span className="text-sm text-white/70">Check-out:</span>
                    <span className="ml-2 font-semibold">11:00 AM</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                <a
                  href="tel:7709965918"
                  className="bg-[#C9A962] text-[#1a1a1a] rounded-lg p-5 font-semibold text-base shadow-xl shadow-[#C9A962]/30 hover:bg-white hover:text-[#358A99] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 min-h-[64px]"
                >
                  <Phone className="w-5 h-5" />
                  Book Now: +91 7709965918
                </a>

                <a
                  href="mailto:Frontoffice@hilloraresort.com"
                  className="bg-white/10 text-white border-2 border-white/30 rounded-lg p-5 font-semibold text-base hover:bg-white hover:text-[#358A99] hover:border-white transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 min-h-[64px]"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
