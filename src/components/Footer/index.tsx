'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { getCurrentYear } from '@/lib/date';

function CurrentYear() {
  const currentYear = getCurrentYear();
  return <>{currentYear}</>;
}

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#1a1a1a] border-t border-[#2a2a2a]">
      <div className="container px-4 md:px-6 py-12 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-poppins">
              Vuyela <span className="text-[#FFD700]">Group</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Locally invested. Globally connected. Premier logistics solutions from the heart of Elandsfontein.
            </p>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin className="h-4 w-4 text-[#FFD700] flex-shrink-0 mt-1" />
              <span>Main Reef Road, Elandsfontein, Gauteng</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/network"
                  className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200"
                >
                  The Vuyela Network
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-poppins">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/bulk"
                  className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200"
                >
                  Vuyela Bulk
                </Link>
              </li>
              <li>
                <Link
                  href="/services/logistics"
                  className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200"
                >
                  Vuyela Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/freight"
                  className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200"
                >
                  Vuyela Freight
                </Link>
              </li>
              <li>
                <Link
                  href="/services/refuel"
                  className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors duration-200"
                >
                  Vuyela Refuel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-poppins">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#FFD700] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    83 Main Reef Road<br />
                    Elandsfontein<br />
                    Germiston<br />
                    1601
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-gray-400 text-xs mb-3">By Appointment Only</p>
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

        {/* Bottom Bar */}
        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              © <Suspense fallback="2024"><CurrentYear /></Suspense> Vuyela Group. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="text-xs">SOLAS Certified</span>
            <span className="text-xs">NOSA Safety Standards</span>
            <span className="text-xs">SARS Bonded</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
