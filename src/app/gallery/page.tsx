import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery | Vuyela Group Operations',
  description:
    'See Vuyela Group in action — yard operations, bulk handling, container logistics, and fleet at our Elandsfontein facility.',
  keywords:
    'Vuyela gallery, logistics photos, Elandsfontein yard, container handling, bulk stockpiles, South Africa logistics',
  metadataBase: new URL('https://vuyela.com'),
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    title: 'Gallery | Vuyela Group Operations',
    description:
      'Real operations photography from the Vuyela Group yard — bulk handling, containers, and fleet.',
    url: 'https://vuyela.com/gallery',
    siteName: 'Vuyela Group',
    images: [
      {
        url: '/images/gallery/gallery-03.jpg',
        width: 1200,
        height: 800,
        alt: 'Vuyela Group facility aerial view',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Vuyela Group Operations',
    description:
      'Real operations photography from the Vuyela Group yard — bulk handling, containers, and fleet.',
  },
};

export default function GalleryPage() {
  return (
    <main className="bg-[#141414] min-h-screen text-gray-300">
      <section className="pt-28 sm:pt-32 pb-12 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
        <p className="inline-block mb-6 border-l-2 border-[#FFD700] pl-3 text-[#FFD700] text-xs font-bold uppercase tracking-[0.18em]">
          Vuyela Group
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-display uppercase">
          Operations <span className="text-[#FFD700]">Gallery</span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-[#FFD700]/30 pl-6">
          A look inside the yard — stockpiles, containers, heavy equipment, and
          the fleet that keeps cargo moving from Elandsfontein.
        </p>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <GalleryClient />
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display uppercase tracking-tight mb-4">
            See it in person
          </h2>
          <p className="text-gray-400 mb-8">
            Facility visits are welcome by appointment. Come walk the yard with
            our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center bg-[#FFD700] px-8 text-sm font-semibold tracking-wide uppercase text-[#141414] hover:bg-white transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/facilities"
              className="inline-flex h-12 items-center justify-center border border-white/30 px-8 text-sm font-semibold tracking-wide uppercase text-white hover:border-[#FFD700] hover:text-[#FFD700] transition-colors"
            >
              Our Facilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
