import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { ContactForm } from './ContactForm';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Users,
  Globe,
  Building2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Vuyela Group',
  description:
    'Contact Vuyela Group for logistics solutions. Visit our HQ in Elandsfontein, call 24/7 support, or use our contact form. We serve South Africa and beyond.',
  keywords:
    'contact Vuyela Group, logistics contact, Elandsfontein, South Africa logistics, get quote, logistics inquiry',
  metadataBase: new URL('https://vuyela.com'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Contact Us | Vuyela Group',
    description: 'Reach out to discuss your logistics requirements with our expert team. 24/7 support available.',
    url: 'https://vuyela.com/contact',
    siteName: 'Vuyela Group',
    images: [
      {
        url: '/images/facility-trucks.png',
        width: 1200,
        height: 630,
        alt: 'Vuyela Group - Contact Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Vuyela Group',
    description: 'Contact Vuyela Group for logistics solutions. 24/7 support available.',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Us | Vuyela Group',
  description: 'Get in touch with Vuyela Group for your logistics needs.',
  url: 'https://vuyela.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'Vuyela Group',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'ZA',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300">
        
        {/* HERO SECTION - H1 IS HERE FOR THE SCANNER */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-xs font-bold uppercase tracking-wider">
            Get in Touch
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#B8860B]">Vuyela Group</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-[#FFD700]/30 pl-6">
            Ready to partner with us? Contact our team. We discuss your logistics needs. We provide solutions. We deliver excellence. Our team operates 24/7. We respond quickly. We solve problems.
          </p>
        </section>

        {/* CORE BENEFITS SECTION */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Why Contact Us</h2>
              <p className="text-gray-400 mt-4">We make logistics simple.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <ShieldCheck className="w-10 h-10 text-[#FFD700] mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Always Available</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Quick Response Times</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Emergency Support</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Direct Director Access</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Users className="w-10 h-10 text-[#FFD700] mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Logistics Specialists</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Custom Solutions</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Industry Experience</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Personal Service</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Globe className="w-10 h-10 text-[#FFD700] mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Nationwide Reach</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> South Africa Coverage</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> International Connections</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Port Access</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Cross-Border Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFORMATION & FORM */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  Reach out through any channel. Our team is available 24/7. We respond quickly. We solve problems.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-300 text-sm">83 Main Reef Road, Elandsfontein, Germiston, 1601</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Website</h3>
                    <p className="text-gray-300 text-sm">www.vuyelalogistics.co.za</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Operating Hours</h3>
                    <p className="text-gray-300 text-sm">24/7 Operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#141414] p-10 rounded-2xl border border-[#2a2a2a]">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below. We'll respond within 24 hours. For urgent matters, call us directly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION DETAILS */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Visit Our Headquarters</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our Elandsfontein facility is the heart of operations. We're located at 83 Main Reef Road. This location gives us easy access to major transport routes. We're close to the Port of Durban. We're near TFR terminals.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> Easy access from N3 and N12 highways</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> Close to OR Tambo International Airport</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> Strategic position for nationwide distribution</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> Secure facility with full CCTV coverage</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What You'll See</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                During your visit, you'll see our SOLAS certified weighbridges. You'll see our SARS Bonded Warehouse. You'll see container handling facilities. You'll see our operations center. Our team will walk you through everything.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> SOLAS certified weighbridge operations</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> SARS Bonded Warehouse facilities</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> Container handling and storage areas</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> 24/7 security and monitoring systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SUPPORT HOURS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Support Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a] text-center">
              <h3 className="text-xl font-bold text-white mb-3">Operations</h3>
              <p className="text-[#FFD700] text-3xl font-bold mb-2">24/7</p>
              <p className="text-gray-400 text-sm">Our facility operates around the clock. Cargo moves day and night. Weekends and holidays included.</p>
            </div>
            <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a] text-center">
              <h3 className="text-xl font-bold text-white mb-3">Customer Support</h3>
              <p className="text-[#FFD700] text-3xl font-bold mb-2">24/7</p>
              <p className="text-gray-400 text-sm">Our team is always available. Emergency? Urgent shipment? We answer calls and emails anytime.</p>
            </div>
            <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a] text-center">
              <h3 className="text-xl font-bold text-white mb-3">Office Visits</h3>
              <p className="text-[#FFD700] text-3xl font-bold mb-2">By Appointment</p>
              <p className="text-gray-400 text-sm">Schedule a visit to our facility. We'll give you a full tour. We'll discuss your logistics needs in person.</p>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the dedicated professionals who make Vuyela Group a trusted logistics partner. Our team is available 24/7 to serve your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Directors */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] text-center hover:border-[#FFD700]/30 transition-colors">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#FFD700]">
                <Image
                  src="/images/staff/Jaco.jpg"
                  alt="Jaco - Director"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Jaco</h3>
              <p className="text-[#FFD700] text-sm font-medium mb-3">Director</p>
              <div className="space-y-1 text-sm text-gray-400">
                <a href="mailto:jaco@vuyelalogistics.co.za" className="block hover:text-[#FFD700] transition-colors">
                  jaco@vuyelalogistics.co.za
                </a>
                <a href="tel:+27724059931" className="block hover:text-[#FFD700] transition-colors">
                  +27 72 405 9931
                </a>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] text-center hover:border-[#FFD700]/30 transition-colors">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#FFD700]">
                <Image
                  src="/images/staff/wayne.jpg"
                  alt="Wayne - Director"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Wayne</h3>
              <p className="text-[#FFD700] text-sm font-medium mb-3">Director</p>
              <div className="space-y-1 text-sm text-gray-400">
                <a href="mailto:wayne@vuyelalogistics.co.za" className="block hover:text-[#FFD700] transition-colors">
                  wayne@vuyelalogistics.co.za
                </a>
                <a href="tel:+27730309679" className="block hover:text-[#FFD700] transition-colors">
                  +27 73 030 9679
                </a>
              </div>
            </div>

            {/* Administration & Accounts */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] text-center hover:border-[#FFD700]/30 transition-colors">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-700">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400 text-2xl font-bold">
                  M
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Melissa</h3>
              <p className="text-[#FFD700] text-sm font-medium mb-3">Accounts</p>
              <div className="space-y-1 text-sm text-gray-400">
                <a href="mailto:accounts@vuyelalogistics.co.za" className="block hover:text-[#FFD700] transition-colors">
                  accounts@vuyelalogistics.co.za
                </a>
                <a href="tel:+27785924123" className="block hover:text-[#FFD700] transition-colors">
                  +27 78 592 4123
                </a>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] text-center hover:border-[#FFD700]/30 transition-colors">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-700">
                <Image
                  src="/images/staff/verushka.jpg"
                  alt="Verushka - Administration"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Verushka</h3>
              <p className="text-[#FFD700] text-sm font-medium mb-3">Administration</p>
              <div className="space-y-1 text-sm text-gray-400">
                <a href="mailto:admin@vuyelalogistics.co.za" className="block hover:text-[#FFD700] transition-colors">
                  admin@vuyelalogistics.co.za
                </a>
                <a href="tel:+27824578760" className="block hover:text-[#FFD700] transition-colors">
                  +27 82 457 8760
                </a>
              </div>
            </div>

            {/* Operations */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] text-center hover:border-[#FFD700]/30 transition-colors">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-700">
                <Image
                  src="/images/staff/mala.png"
                  alt="Mala - Operations"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Mala</h3>
              <p className="text-[#FFD700] text-sm font-medium mb-3">Operations</p>
              <div className="space-y-1 text-sm text-gray-400">
                <a href="mailto:mala@vuyelalogistics.co.za" className="block hover:text-[#FFD700] transition-colors">
                  mala@vuyelalogistics.co.za
                </a>
                <a href="tel:+27734900317" className="block hover:text-[#FFD700] transition-colors">
                  +27 73 490 0317
                </a>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] text-center hover:border-[#FFD700]/30 transition-colors">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-700">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400 text-2xl font-bold">
                  K
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Karina</h3>
              <p className="text-[#FFD700] text-sm font-medium mb-3">Operations</p>
              <div className="space-y-1 text-sm text-gray-400">
                <a href="mailto:karina.rossouw@vuyelalogistics.co.za" className="block hover:text-[#FFD700] transition-colors">
                  karina.rossouw@vuyelalogistics.co.za
                </a>
                <a href="tel:+27833495467" className="block hover:text-[#FFD700] transition-colors">
                  +27 83 349 5467
                </a>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] text-center hover:border-[#FFD700]/30 transition-colors">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-700">
                <Image
                  src="/images/staff/mike.png"
                  alt="Mike - Operations"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Mike</h3>
              <p className="text-[#FFD700] text-sm font-medium mb-3">Operations</p>
              <div className="space-y-1 text-sm text-gray-400">
                <a href="mailto:mike@vuyelalogistics.co.za" className="block hover:text-[#FFD700] transition-colors">
                  mike@vuyelalogistics.co.za
                </a>
                <a href="tel:+27628488623" className="block hover:text-[#FFD700] transition-colors">
                  +27 62 848 8623
                </a>
              </div>
            </div>

            {/* Vuyela Freight */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] text-center hover:border-[#FFD700]/30 transition-colors">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-700">
                <Image
                  src="/images/staff/Martin.jpg"
                  alt="Martin - Shipping Manager"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Martin</h3>
              <p className="text-[#FFD700] text-sm font-medium mb-3">Shipping Manager</p>
              <div className="space-y-1 text-sm text-gray-400">
                <a href="mailto:shipping@vuyelalogistics.co.za" className="block hover:text-[#FFD700] transition-colors">
                  shipping@vuyelalogistics.co.za
                </a>
                <a href="tel:+27678818419" className="block hover:text-[#FFD700] transition-colors">
                  +27 67 881 8419
                </a>
              </div>
            </div>

            {/* Vuyela Refuel */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] text-center hover:border-[#FFD700]/30 transition-colors">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-700">
                <Image
                  src="/images/staff/deon.jpg"
                  alt="Deon - Refuel Operations"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Deon</h3>
              <p className="text-[#FFD700] text-sm font-medium mb-3">Refuel Operations</p>
              <div className="space-y-1 text-sm text-gray-400">
                <a href="mailto:refuel@vuyelalogistics.co.za" className="block hover:text-[#FFD700] transition-colors">
                  refuel@vuyelalogistics.co.za
                </a>
                <a href="tel:+27672090841" className="block hover:text-[#FFD700] transition-colors">
                  +27 67 209 0841
                </a>
              </div>
            </div>

            {/* HR */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] text-center hover:border-[#FFD700]/30 transition-colors">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-700">
                <Image
                  src="/images/staff/Aneri.jpg"
                  alt="Aneri - HR Manager"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Aneri</h3>
              <p className="text-[#FFD700] text-sm font-medium mb-3">HR Manager</p>
              <div className="space-y-1 text-sm text-gray-400">
                <a href="mailto:aneri@vuyelalogistics.co.za" className="block hover:text-[#FFD700] transition-colors">
                  aneri@vuyelalogistics.co.za
                </a>
                <a href="tel:+27826709214" className="block hover:text-[#FFD700] transition-colors">
                  +27 82 670 9214
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL REACH */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Global Reach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">South Africa Coverage</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We operate nationwide. We cover all major cities and ports. From Durban to Cape Town. From Johannesburg to Bloemfontein. Our network covers every corner of South Africa.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Port of Durban operations</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> TFR terminal access nationwide</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Major city distribution</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Cross-border capabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">International Connections</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Through our freight division, we connect South Africa to the world. Strategic partnerships with major shipping lines give us access to global routes and ports.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Asia-Pacific shipping routes</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> European trade connections</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Americas import/export</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Global carrier network</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-6 max-w-4xl mx-auto border-t border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                How quickly do you respond to inquiries?
              </h3>
              <p className="text-sm text-gray-400">
                We respond to all inquiries within 24 hours during business days. For urgent matters, we respond immediately. Our directors are available for direct contact. Emergency situations get priority attention.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                Can I visit your facility?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. We welcome facility visits by appointment. Schedule a tour to see our operations. You'll see our weighbridges, warehouse, and security systems. Our team will answer all your questions.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                Do you handle international shipments?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. Our freight division handles international shipments. We manage ocean freight. We handle customs clearing. We work with major shipping lines. We connect South Africa to the world.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                What services can you provide?
              </h3>
              <p className="text-sm text-gray-400">
                We provide four main services. Vuyela Bulk handles warehousing. Vuyela Logistics handles transport. Vuyela Freight handles ocean shipping. Vuyela Refuel handles fuel supply. We can combine these services for complete solutions.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to work with us?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join leading companies that trust Vuyela Group. Let us handle your logistics. You focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" className="px-8 py-4 bg-[#FFD700] text-white rounded-lg font-bold hover:bg-[#FFD700] transition-colors flex items-center justify-center gap-2">
              Our Services <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/about" className="px-8 py-4 bg-[#1a1a1a] text-white border border-[#333] rounded-lg font-bold hover:bg-[#252525] transition-colors">
              About Us
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
