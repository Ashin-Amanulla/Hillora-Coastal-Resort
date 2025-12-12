import { Phone, Mail } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#F5F1E8] to-white -mt-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#2D9B9E] to-[#0D5E73] rounded-3xl shadow-2xl shadow-[#2D9B9E]/25 p-12 md:p-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Book Your Stay at Hillora
              </h2>
              <p className="text-lg text-white/95 opacity-95">
                Contact us directly for reservations and special offers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <a
                href="tel:7875450365"
                className="bg-[#FFA500] text-white rounded-xl p-5 font-semibold text-base shadow-lg shadow-[#FFA500]/40 hover:bg-white hover:text-[#2D9B9E] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 min-h-[60px]"
              >
                <Phone className="w-5 h-5" />
                Call: 7875450365
              </a>

              <a
                href="mailto:frontoffice@hilloraresort.com"
                className="bg-[#FFA500] text-white rounded-xl p-5 font-semibold text-base shadow-lg shadow-[#FFA500]/40 hover:bg-white hover:text-[#2D9B9E] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 min-h-[60px]"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


