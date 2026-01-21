// app/layout.tsx
import { Inter, Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import MainFooter from '@/components/Footer';
import MainNavbar from '@/components/Navbar';
import JsonLd from '@/components/JsonLd';
import { QueryProvider } from '@/providers/query';
import { ThemeProvider } from '@/providers/theme';
import '@/styles/globals.css';
import type { ChildrenProps } from '@/types';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false,
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
  ],
};

export const metadata = {
  title: {
    template: '%s | Vuyela Group',
    default: 'Vuyela Group | Premier Logistics Solutions in South Africa',
  },
  description:
    'Locally invested, globally connected. Vuyela Group delivers precision logistics, bulk handling, and energy solutions that keep South Africa moving 24/7, on time, every time.',
  keywords:
    'logistics, South Africa, warehousing, freight, bulk handling, transport, Elandsfontein, SOLAS certified, SARS bonded warehouse, mining logistics, agricultural logistics, TFR logistics, port logistics, container transport',
  authors: [{ name: 'Vuyela Group' }],
  creator: 'Vuyela Group',
  publisher: 'Vuyela Group',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://vuyela.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'verification_token_here',
  },
  category: 'Logistics',
  classification: 'Business',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    alternateLocale: ['en_US'],
    url: 'https://vuyela.com',
    title: 'Vuyela Group | Premier Logistics Solutions',
    description:
      'Premier logistics solutions from the heart of Elandsfontein. We deliver precision logistics, bulk handling, and energy solutions that keep South Africa moving 24/7.',
    siteName: 'Vuyela Group',
    images: [
      {
        url: '/images/hero_1.jpg',
        width: 1200,
        height: 630,
        alt: 'Vuyela Group - Premier Logistics Solutions',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vuyela Group | Premier Logistics Solutions',
    description:
      'Locally invested, globally connected. Precision logistics solutions for South Africa.',
    images: ['/images/hero_1.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': 'https://vuyela.com/#organization',
  name: 'Vuyela Group',
  legalName: 'Vuyela Group',
  url: 'https://vuyela.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://vuyela.com/images/og.png',
    width: 1200,
    height: 630,
  },
  image: 'https://vuyela.com/images/hero_1.jpg',
  description: 'Premier logistics solutions provider in South Africa specializing in warehousing, freight, bulk handling, containerization, and energy solutions. SOLAS certified weighbridges and SARS bonded warehouse.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '83 Main Reef Road',
    addressLocality: 'Elandsfontein',
    addressRegion: 'Gauteng',
    postalCode: '1601',
    addressCountry: 'ZA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -26.2041,
    longitude: 28.0473,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'ZA',
      availableLanguage: ['English'],
      telephone: '+27-11-123-4567',
    },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
  },
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Logistics Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bulk Warehousing',
          description: 'SARS bonded warehouse with SOLAS certified weighbridges',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Freight Forwarding',
          description: 'Ocean freight and customs clearing services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Road Logistics',
          description: 'Containerized rail transport and road freight',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Energy Solutions',
          description: 'Premium diesel and lubricant supply',
        },
      },
    ],
  },
  foundingDate: '2019',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 60,
  },
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  slogan: 'Locally invested, globally connected',
};

function RootLayoutContent({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
        <JsonLd data={organizationSchema} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            <div className="flex min-h-screen bg-(--background) w-full overflow-x-hidden">
              <div className="flex-1 flex flex-col w-full">
                <MainNavbar />
                <main className="flex-1 w-full overflow-x-hidden">
                  {children}
                </main>
                <MainFooter />
              </div>
            </div>
            <Toaster
              position="bottom-right"
              toastOptions={{
                className: 'bg-(--card) text-(--foreground) border-(--border)',
                duration: 3000,
              }}
            />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
        <RootLayoutContent>{children}</RootLayoutContent>
      </body>
    </html>
  );
}
