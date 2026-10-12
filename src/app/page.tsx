import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Vuyela Group | Premier Logistics Solutions in South Africa',
  description:
    'Locally invested, globally connected. Vuyela Group delivers precision logistics, bulk handling, and energy solutions that keep South Africa moving 24/7, on time, every time.',
  keywords:
    'logistics, South Africa, warehousing, freight, bulk handling, transport, Elandsfontein, SOLAS certified, SARS bonded warehouse, mining logistics, agricultural logistics',
  authors: [{ name: 'Vuyela Group' }],
  creator: 'Vuyela Group',
  metadataBase: new URL('https://vuyela.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
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
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vuyela Group | Premier Logistics Solutions',
    description:
      'Locally invested, globally connected. Precision logistics solutions for South Africa.',
  },
};

export default function Home() {
  return <HomePageClient />;
}
