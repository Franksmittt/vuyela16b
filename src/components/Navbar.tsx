'use client';

import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import BrandMark from '@/components/BrandMark';

const navigationItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Industries', href: '/industries' },
  { name: 'The Vuyela Network', href: '/network' },
  { name: 'Company Profile', href: '/company-profile/', external: true },
];

const servicesItems = [
  {
    name: 'Vuyela Bulk',
    href: '/services/bulk',
    description: 'Warehousing & Handling',
  },
  {
    name: 'Vuyela Logistics',
    href: '/services/logistics',
    description: 'Road Freight & Transport',
  },
  {
    name: 'Vuyela Freight',
    href: '/services/freight',
    description: 'Ocean Freight & Customs',
  },
  {
    name: 'Vuyela Refuel',
    href: '/services/refuel',
    description: 'Energy Solutions',
  },
];

export default function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#141414]/95 backdrop-blur-md border-b border-[#2e2e2e]">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 max-w-full">
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0 group"
        >
          <BrandMark className="h-8 w-8 transition-transform duration-300 group-hover:scale-105" />
          <span className="text-xl sm:text-2xl font-bold font-display tracking-wide text-white uppercase">
            Vuyela <span className="text-[#FFD700]">Group</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/90 hover:text-[#FFD700] transition-colors duration-200"
              {...(item.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {item.name}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="text-sm font-medium text-white/90 hover:text-[#FFD700] transition-colors duration-200 flex items-center gap-1 py-2">
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 z-50">
                <div className="bg-[#1a1a1a] border border-[#2e2e2e] shadow-xl py-2">
                  {servicesItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 hover:bg-[#222222] transition-colors duration-200 group"
                    >
                      <div className="text-white font-medium text-sm group-hover:text-[#FFD700] transition-colors">
                        {service.name}
                      </div>
                      <div className="text-gray-400 text-xs mt-1">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-[#2e2e2e] mt-2 pt-2">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-[#FFD700] text-sm font-medium hover:bg-[#222222] transition-colors duration-200"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center flex-shrink-0">
          <Link
            href="/contact"
            className="bg-[#FFD700] text-[#141414] px-5 py-2 text-sm font-semibold tracking-wide uppercase hover:bg-white transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-white hover:text-[#FFD700] transition-colors duration-200"
          onClick={handleToggle}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-16 z-50 bg-[#141414] border-b border-[#2e2e2e] shadow-lg lg:hidden max-w-full">
            <div className="container py-6 flex flex-col space-y-4 px-4 sm:px-6 max-w-full">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-[#FFD700] transition-colors duration-200"
                  onClick={handleToggle}
                  {...(item.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-2">
                <div className="text-sm font-medium text-white mb-2">
                  Services
                </div>
                <div className="pl-4 space-y-2 border-l-2 border-[#FFD700]/40">
                  {servicesItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                      onClick={handleToggle}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block text-sm text-[#FFD700] hover:text-white transition-colors duration-200 font-medium"
                    onClick={handleToggle}
                  >
                    View All →
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-[#FFD700] text-[#141414] px-6 py-2.5 text-sm font-semibold tracking-wide uppercase text-center mt-4"
                onClick={handleToggle}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
