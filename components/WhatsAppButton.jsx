"use client";

export default function WhatsAppButton() {
  const phoneNumber = "7709965918";
  const whatsappUrl = `https://wa.me/91${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transform hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce-slow"
      aria-label="Contact us on WhatsApp"
    >
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="white">
        <path d="M24 0C10.745 0 0 10.745 0 24c0 4.243 1.102 8.227 3.029 11.686L.05 47.951l12.486-3.274A23.856 23.856 0 0024 48c13.255 0 24-10.745 24-24S37.255 0 24 0zm11.47 33.91c-.493 1.387-2.912 2.549-4.007 2.715-1.096.166-1.007.827-6.347-1.318-5.34-2.145-8.751-7.658-9.017-8.01-.267-.353-2.176-2.895-2.176-5.522s1.378-3.916 1.866-4.45c.488-.535 1.066-.668 1.422-.668.356 0 .712.006 1.023.018.329.013.77-.125 1.204.918.442 1.063 1.512 3.69 1.645 3.956.133.267.222.578.044.93-.177.353-.267.578-.533.89-.267.31-.561.693-.8.93-.267.267-.544.555-.234 1.09.31.533 1.378 2.272 2.956 3.68 2.03 1.81 3.742 2.371 4.273 2.638.533.267.844.222 1.155-.133.31-.356 1.332-1.555 1.688-2.09.356-.533.712-.444 1.2-.267.49.178 3.116 1.47 3.648 1.737.533.267.889.4 1.022.623.133.222.133 1.288-.36 2.676z" />
      </svg>
    </a>
  );
}
