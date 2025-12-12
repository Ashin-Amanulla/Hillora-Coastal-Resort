export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Resort',
    name: 'Hillora Coastal Resort',
    description:
      'Luxury coastal resort in Arpora, Goa offering deluxe rooms, private pool villas, restaurant, bar, and watersports activities.',
    url: 'https://www.hilloraresort.com',
    telephone: '+917875450365',
    email: 'frontoffice@hilloraresort.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Arpora',
      addressLocality: 'Arpora',
      addressRegion: 'Goa',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '15.5475',
      longitude: '73.7503',
    },
    priceRange: '$$',
    starRating: {
      '@type': 'Rating',
      ratingValue: '4.5',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Swimming Pool',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Restaurant',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Bar',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Conference Hall',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Watersports',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Private Pool Villa',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Airport Pickup',
      },
    ],
    image: [
      'https://www.hilloraresort.com/images/bg_1.jpg',
      'https://www.hilloraresort.com/images/bg_2.jpg',
      'https://www.hilloraresort.com/images/room-1.jpg',
      'https://www.hilloraresort.com/images/room-2.jpg',
      'https://www.hilloraresort.com/images/room-3.jpg',
    ],
    sameAs: [
      'https://www.facebook.com/hilloraresort',
      'https://www.instagram.com/hilloraresort',
      'https://www.twitter.com/hilloraresort',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}


