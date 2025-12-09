'use client';

import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navigationItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Industries', href: '/industries' },
  { name: 'The Vuyela Network', href: '/network' },
];

const servicesItems = [
  { name: 'Vuyela Bulk', href: '/services/bulk', description: 'Warehousing & Handling' },
  { name: 'Vuyela Logistics', href: '/services/logistics', description: 'Road Freight & Transport' },
  { name: 'Vuyela Freight', href: '/services/freight', description: 'Ocean Freight & Customs' },
  { name: 'Vuyela Refuel', href: '/services/refuel', description: 'Energy Solutions' },
];

export default function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a1a1a] border-b border-[#2a2a2a] shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 max-w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <span className="text-xl sm:text-2xl font-bold font-poppins text-white">
            Vuyela{' '}
            <span className="text-[#FFD700]">Group</span>
          </span>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white hover:text-[#FFD700] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="text-sm font-medium text-white hover:text-[#FFD700] transition-colors duration-200 flex items-center gap-1 py-2">
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {servicesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 z-50">
                <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg shadow-xl py-2">
                  {servicesItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 hover:bg-[#3a3a3a] transition-colors duration-200 group"
                    >
                      <div className="text-white font-medium text-sm group-hover:text-[#FFD700] transition-colors">
                        {service.name}
                      </div>
                      <div className="text-gray-400 text-xs mt-1">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-[#3a3a3a] mt-2 pt-2">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-[#FFD700] text-sm font-medium hover:bg-[#3a3a3a] transition-colors duration-200"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Side - Contact Button */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <Link
            href="/contact"
            className="bg-[#FFD700] text-[#1a1a1a] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1a1a1a] hover:text-[#FFD700] transition-all duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white hover:text-[#FFD700] transition-colors duration-200"
          onClick={handleToggle}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-16 z-50 bg-[#1a1a1a] border-b border-[#2a2a2a] shadow-lg md:hidden animate-in slide-in-from-top duration-300 max-w-full">
            <div className="container py-6 flex flex-col space-y-4 px-4 sm:px-6 max-w-full">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-[#FFD700] transition-colors duration-200"
                  onClick={handleToggle}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-2">
                <div className="text-sm font-medium text-white mb-2">Services</div>
                <div className="pl-4 space-y-2 border-l-2 border-[#2a2a2a]">
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
                className="bg-[#FFD700] text-[#1a1a1a] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1a1a1a] hover:text-[#FFD700] transition-all duration-200 text-center mt-4"
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
