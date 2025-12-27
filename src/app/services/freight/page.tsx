import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { 
  ArrowRight, 
  Ship, 
  CheckCircle2,
  Globe,
  ShieldCheck,
  FileText,
  HelpCircle,
  Truck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vuyela Freight - Ocean Freight & Customs | Vuyela Group',
  description:
    'Complete freight forwarding and customs clearing. Strategic partnerships with major shipping lines for global trade facilitation.',
  alternates: {
    canonical: '/services/freight',
  },
  openGraph: {
    title: 'Vuyela Freight - Ocean Freight & Customs',
    description: 'Professional ocean freight forwarding and customs clearing services.',
    url: 'https://vuyela.com/services/freight',
  },
};

const freightServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vuyela Freight - Ocean Freight & Customs',
  description: 'Complete freight forwarding and customs clearing. Strategic partnerships with major shipping lines for global trade facilitation.',
  url: 'https://vuyela.com/services/freight',
  provider: {
    '@type': 'Organization',
    name: 'Vuyela Group',
  },
  serviceType: 'Ocean Freight & Customs Clearing',
  areaServed: {
    '@type': 'Place',
    name: 'Global',
  },
};

export default function FreightServicePage() {
  const features = [
    {
      icon: Ship,
      title: 'Partnerships That Open Doors',
      description: 'Our relationships with major shipping lines aren\'t just business connections, they\'re partnerships built on trust and performance. When you need space on a vessel, we don\'t just make phone calls; we leverage relationships that we\'ve cultivated over years. This means better rates, priority booking, and access to routes that others can\'t guarantee.',
    },
    {
      icon: Globe,
      title: 'From Asia to Everywhere',
      description: 'While Asia remains a primary trade corridor for South African exports, our capabilities extend far beyond. We\'ve facilitated shipments to Europe, the Americas, the Middle East, and beyond. The question isn\'t "Can we ship there?", it\'s "When do you need it there?" Our network of shipping partners ensures that no destination is out of reach.',
    },
    {
      icon: ShieldCheck,
      title: 'Customs Made Simple',
      description: 'Border clearance isn\'t just paperwork, it\'s navigating complex regulations, understanding tariff codes, and knowing which procedures apply when. Our customs expertise comes from years of handling everything from straightforward exports to complex imports with special requirements. We don\'t just file documentation; we understand the system, anticipate challenges, and solve problems before they become delays.',
    },
    {
      icon: FileText,
      title: 'Documentation That Works',
      description: 'Shipping documentation can make or break an export. Get it wrong, and your cargo sits at port while you fix errors. Get it right, and everything flows smoothly. We handle all documentation, from bills of lading to certificates of origin, from customs declarations to export permits. Our team understands that documentation isn\'t just paperwork; it\'s the foundation of successful international trade.',
    },
    {
      icon: Ship,
      title: 'Flexibility That Fits',
      description: 'Not every shipment is a full container, and not every route is standard. We understand that your cargo volumes, timelines, and destinations vary. That\'s why we offer flexible shipping solutions, whether you need one container or one hundred, standard routes or specialized handling. Competitive rates don\'t mean one-size-fits-all; they mean solutions that fit your specific needs and budget.',
    },
    {
      icon: ShieldCheck,
      title: 'Experience You Can Trust',
      description: 'Decades of combined experience means we\'ve seen it all, from standard container shipments to oversized cargo, from perishable goods to hazardous materials. Our network of carriers isn\'t just a list; it\'s a curated selection of partners we trust with our clients\' cargo. This experience becomes your advantage: we know what works, what doesn\'t, and how to handle challenges before they become problems.',
    },
  ];

  const services = [
    'Ocean Freight Management',
    'Import Container Management',
    'Export Container Management',
    'Customs Clearing & Forwarding',
    'Border Clearance Services',
    'Documentation & Acquittals',
    'Freight Booking Services',
  ];

  const benefits = [
    'Competitive Pricing',
    'Flexible Shipping Routes',
    'Personalized Solutions',
    'Senior Management Involvement',
    'Prompt Service',
    'Multi-Modal Transportation',
    'Global Network Access',
  ];

  return (
    <>
      <JsonLd data={freightServiceSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300">
        
        {/* HERO SECTION - H1 IS HERE FOR THE SCANNER */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Vuyela Freight
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Freight <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Solutions</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-orange-500/30 pl-6">
            Ocean freight needs expertise. We understand routes, rates, and regulations. We built partnerships with major shipping lines. Years of reliable service created these relationships. Export chrome to Asia. Import machinery from Europe. Move commodities anywhere. We have the coverage and expertise.
          </p>
        </section>

        {/* HERO IMAGE */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our freight services cover the full journey. We manage containers from port to delivery. Customs clearing happens smoothly. Documentation stays accurate. Delays get avoided. We work with shipping agents. Best rates and routes get secured. Border clearance works efficiently. Every step gets managed carefully.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                The Problem: International shipping is complex. Routes change constantly. Rates vary widely. Customs rules confuse many. Documentation errors cause delays. Many companies struggle with these challenges.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-8 text-sm font-semibold text-white hover:bg-orange-500 transition-all duration-300 group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 text-sm font-semibold text-white hover:bg-white/10 hover:border-orange-500 transition-all duration-300"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/freight-port-durban.png"
                alt="Aerial view of Vuyela truck at Port of Durban with Maersk container ship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* CORE BENEFITS SECTION */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Why Choose Vuyela Freight</h2>
              <p className="text-gray-400 mt-4">We make international shipping simple.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Globe className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Major Shipping Lines</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Worldwide Coverage</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Best Rates</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Priority Booking</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Customs Expertise</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Fast Clearance</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Correct Documentation</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Border Relationships</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Reduced Delays</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <FileText className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Complete Documentation</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Bills of Lading</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Customs Forms</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Certificates</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Export Permits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Vuyela Freight</h2>
          
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a] mb-12">
            <Image
              src="/images/freight-container-loading.png"
              alt="Reach stacker loading container onto Vuyela truck at port"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a] mt-12">
            <Image
              src="/images/freight-shipping-yard.png"
              alt="Reach stacker precision-loading container in shipping yard"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </section>

        {/* SERVICES & BENEFITS */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#0f0f0f] rounded-lg p-6 sm:p-8 border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Services <span className="text-orange-500">Offered</span>
              </h3>
              <ul className="space-y-3 mb-6">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="relative w-full h-56 rounded-lg overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/weighbridge-checkpoint.png"
                  alt="Vuyela truck on weighbridge with security checkpoint"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="bg-[#0f0f0f] rounded-lg p-6 sm:p-8 border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Customer <span className="text-orange-500">Benefits</span>
              </h3>
              <ul className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="relative w-full h-56 rounded-lg overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/freight-container-terminal.png"
                  alt="Volvo truck with refrigerated trailer at container terminal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Vuyela Freight</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We work with major shipping lines worldwide. Asia, Europe, Americas - we have routes to every major port. Our partnerships mean better rates and faster transit times for you.
              </p>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Customs Expertise</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Customs delays cost money. Our team handles all documentation correctly the first time. We know what forms you need, when to file them, and how to avoid common mistakes.
              </p>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Personal Service</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                You talk to real people, not automated systems. Our directors are involved in every major shipment. When problems arise, we solve them fast.
              </p>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Years of consistent performance built our reputation. Shipping lines trust us. Customs officials know us. That trust makes your shipments move smoother.
              </p>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Process</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3">Step 1: Booking & Planning</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We discuss your cargo, destination, and timeline. Our team finds the best shipping route and rate. We book space on the vessel and confirm all details with you.
              </p>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3">Step 2: Documentation</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We prepare all required documents. Bills of lading, customs forms, certificates - we handle it all. Our experience means no missing paperwork or delays.
              </p>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3">Step 3: Customs Clearing</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                When your cargo arrives, we clear customs fast. Our relationships and expertise mean fewer inspections and quicker releases. You get your cargo when you need it.
              </p>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3">Step 4: Delivery</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We coordinate final delivery to your location. Our logistics team ensures smooth handoff. You receive your cargo on time, in perfect condition.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-3">Container Types</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> 20ft Standard Containers</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> 40ft Standard Containers</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> 40ft High Cube Containers</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Refrigerated Containers</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Open Top Containers</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Flat Rack Containers</li>
              </ul>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-3">Port Coverage</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Port of Durban (Primary)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Port of Cape Town</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Port of Ngqura</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> All Major Global Ports</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Inland Container Depots</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> TFR Terminal Access</li>
              </ul>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-3">Service Features</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> 24/7 Operations</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Real-time Tracking</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Customs Bond Facilities</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Insurance Options</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Multi-modal Transport</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Documentation Management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FLEET SPECIFICATIONS */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Fleet Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">Interlink Trucks</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Interlink trucks move containers. They connect to shipping ports. TFR terminal access works smoothly. Container handling stays efficient. Heavy loads move safely.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Container transport</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Port connections</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> TFR terminal access</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Heavy load capacity</li>
              </ul>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">Flatbed Trucks</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Flatbeds carry oversized cargo. Coils fit perfectly. Machinery moves easily. Loading stays simple. Secure strapping protects cargo.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Oversized cargo</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Coil transport</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Machinery handling</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Secure strapping</li>
              </ul>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">Tipper Trucks</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Tippers handle bulk materials. Quick unloading saves time. Construction sites use them. Mining operations depend on them. Efficiency stays high.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Bulk material transport</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Quick unloading</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Construction support</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Mining operations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CROSS-BORDER LOGISTICS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Cross-Border Logistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">SADC Coverage</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                We move cargo across SADC countries. Botswana, Zimbabwe, Mozambique, and more. Border procedures stay familiar. We know the rules. Delays stay minimal.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Botswana routes</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Zimbabwe connections</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Mozambique access</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Regional expertise</li>
              </ul>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Border Efficiency</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Border crossings need correct paperwork. We prepare documents properly. Customs officials know us. Clearance happens fast. Your cargo moves quickly.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Complete documentation</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Fast clearance</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Customs relationships</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Reduced delays</li>
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
                <HelpCircle className="w-5 h-5 text-orange-500" />
                Which shipping lines do you work with?
              </h3>
              <p className="text-sm text-gray-400">
                We work with major shipping lines worldwide. Our partnerships include Maersk, MSC, CMA CGM, and others. These relationships give us access to routes, rates, and priority booking that others can't match. We leverage these partnerships for your benefit.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                How long does customs clearing take?
              </h3>
              <p className="text-sm text-gray-400">
                Customs clearing time varies. Standard shipments clear within 24-48 hours. Our expertise and relationships help speed up the process. We prepare all documentation correctly. We avoid common mistakes. This reduces delays significantly.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                Can you handle both imports and exports?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. We handle both imports and exports. We manage import containers from port to delivery. We handle export containers from pickup to port. We coordinate customs clearing for both directions. Complete solutions for international trade.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                What documentation do you handle?
              </h3>
              <p className="text-sm text-gray-400">
                We handle all shipping documentation. Bills of lading, customs declarations, certificates of origin, export permits, and more. Our team ensures everything is correct. We file documents on time. We avoid errors that cause delays.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Ship Globally?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Every international shipment is unique, different destinations, different cargo, different timelines. Let's discuss your specific requirements and explore how our shipping partnerships, customs expertise, and global coverage can simplify your international trade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="px-8 py-4 bg-[#1a1a1a] text-white border border-[#333] rounded-lg font-bold hover:bg-[#252525] transition-colors">
              All Services
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
