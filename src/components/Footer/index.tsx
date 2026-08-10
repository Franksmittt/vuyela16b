'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { MapPin, ArrowRight, Mail } from 'lucide-react';
import { getCurrentYear } from '@/lib/date';
import BrandMark from '@/components/BrandMark';

function CurrentYear() {
  const currentYear = getCurrentYear();
  return <>{currentYear}</>;
}

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#141414] border-t border-[#2e2e2e]">
      <div className="container px-4 md:px-6 py-12 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <BrandMark className="h-8 w-8" />
              <h3 className="text-xl font-bold text-white font-display tracking-wide uppercase">
                Vuyela <span className="text-[#FFD700]">Group</span>
              </h3>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Locally invested. Globally connected. Premier logistics solutions
              from the heart of Elandsfontein.
            </p>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin className="h-4 w-4 text-[#FFD700] flex-shrink-0 mt-1" />
              <span>Main Reef Road, Elandsfontein, Gauteng</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-display tracking-wide uppercase text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/facilities', label: 'Facilities' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/industries', label: 'Industries' },
                { href: '/network', label: 'The Vuyela Network' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/company-profile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Company Profile
                  <ArrowRight className="h-3 w-3 opacity-70" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-display tracking-wide uppercase text-sm">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/services/bulk', label: 'Vuyela Bulk' },
                { href: '/services/logistics', label: 'Vuyela Logistics' },
                { href: '/services/freight', label: 'Vuyela Freight' },
                { href: '/services/refuel', label: 'Vuyela Refuel' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-display tracking-wide uppercase text-sm">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#FFD700] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    83 Main Reef Road
                    <br />
                    Elandsfontein
                    <br />
                    Germiston
                    <br />
                    1601
                  </p>
                </div>
              </div>
              <a
                href="mailto:info@vuyelalogistics.co.za"
                className="flex items-center gap-2 text-gray-300 text-sm hover:text-[#FFD700] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                info@vuyelalogistics.co.za
              </a>
              <div className="pt-2">
                <p className="text-gray-400 text-xs mb-3">
                  By Appointment Only
                </p>
                <a
                  href="https://maps.app.goo.gl/pCWiKAZwaqEBiqhi9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#FFD700] text-sm font-medium hover:text-white transition-colors duration-200 group"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2e2e2e] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-400">
            ©{' '}
            <Suspense fallback="2024">
              <CurrentYear />
            </Suspense>{' '}
            Vuyela Group. All rights reserved.
          </span>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="text-xs tracking-wide uppercase">
              SOLAS Certified
            </span>
            <span className="text-xs tracking-wide uppercase">
              NOSA Safety Standards
            </span>
            <span className="text-xs tracking-wide uppercase">SARS Bonded</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
