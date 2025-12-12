import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import WhatsAppButton from "@/components/WhatsAppButton";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://www.hilloraresort.com'),
  title: {
    default: "Hillora Coastal Resort - Luxury Resort in Arpora, Goa",
    template: "%s | Hillora Coastal Resort",
  },
  description: "Hillora Coastal Resort offers luxury accommodations in Arpora, Goa. Experience deluxe rooms, private pool villas, restaurant, bar, and watersports. Book your perfect coastal escape today.",
  keywords: [
    "Hillora Coastal Resort",
    "Goa resort",
    "Arpora resort",
    "luxury resort Goa",
    "private pool villa Goa",
    "beach resort Goa",
    "resort in Arpora",
    "Goa hotel",
    "coastal resort Goa",
    "watersports Goa",
    "conference hall Goa",
  ],
  authors: [{ name: "Hillora Coastal Resort" }],
  creator: "Hillora Coastal Resort",
  publisher: "Hillora Coastal Resort",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hillora Coastal Resort - Luxury Resort in Arpora, Goa",
    description: "Experience luxury and serenity at Hillora Coastal Resort in Arpora, Goa. Your perfect coastal escape awaits with world-class amenities and warm hospitality.",
    url: "https://www.hilloraresort.com",
    siteName: "Hillora Coastal Resort",
    images: [
      {
        url: "/images/bg_1.jpg",
        width: 1200,
        height: 630,
        alt: "Hillora Coastal Resort - Luxury Resort in Arpora, Goa",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hillora Coastal Resort - Luxury Resort in Arpora, Goa",
    description: "Experience luxury and serenity at Hillora Coastal Resort in Arpora, Goa.",
    images: ["/images/bg_1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.hilloraresort.com",
  },
  category: "Travel & Tourism",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} antialiased`}>
        <StructuredData />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
