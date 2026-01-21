import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vuyela Group - Premier Logistics Solutions',
    short_name: 'Vuyela Group',
    description: 'Premier logistics solutions provider in South Africa specializing in warehousing, freight, bulk handling, and energy solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f0f',
    theme_color: '#FFD700',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-ZA',
    dir: 'ltr',
    categories: ['business', 'logistics', 'transport'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: '/images/hero_1.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
        form_factor: 'wide',
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
