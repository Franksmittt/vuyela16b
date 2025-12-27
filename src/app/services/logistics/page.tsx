import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { 
  ArrowRight, 
  Truck, 
  CheckCircle2,
  Clock,
  MapPin,
  Route,
  ShieldCheck,
  HelpCircle,
  Warehouse
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vuyela Logistics | Road Freight & Transport',
  description:
    'Own fleet operations with 24/7 monitoring. Container logistics, intermodal solutions, and reliable transport across South Africa.',
  alternates: {
    canonical: '/services/logistics',
  },
  openGraph: {
    title: 'Vuyela Logistics - Road Freight & Transport',
    description: 'Professional road freight and transport solutions with own fleet operations.',
    url: 'https://vuyela.com/services/logistics',
  },
};

const logisticsServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vuyela Logistics - Road Freight & Transport',
  description: 'Own fleet operations with 24/7 monitoring. Container logistics, intermodal solutions, and reliable transport across South Africa.',
  url: 'https://vuyela.com/services/logistics',
  provider: {
    '@type': 'Organization',
    name: 'Vuyela Group',
  },
  serviceType: 'Road Freight & Transport',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
};

export default function LogisticsServicePage() {
  const features = [
    {
      icon: Truck,
      title: 'Our Fleet, Our Responsibility',
      description: 'We don\'t outsource reliability to third-party contractors. Our own fleet means we control maintenance schedules, driver training, and vehicle standards. When you see a Vuyela truck on the road, you\'re seeing our commitment to quality rolling by, well-maintained, professionally driven, and mission-focused.',
    },
    {
      icon: Clock,
      title: 'Never-Stop Logistics',
      description: 'Deadlines don\'t respect business hours, and neither do we. Our 24/7 operations mean your cargo moves when it needs to move, whether that\'s a midnight collection or a weekend delivery. With live tracking systems and full yard camera coverage, you\'re never in the dark.',
    },
    {
      icon: Route,
      title: 'Port Connections That Matter',
      description: 'Moving containers to and from Durban isn\'t just transport, it\'s timing. Every day, we coordinate with port authorities, shipping lines, and terminal operators to ensure your containers arrive exactly when they need to. We understand vessel schedules, booking deadlines, and the critical timing that separates successful exports from costly delays.',
    },
    {
      icon: ShieldCheck,
      title: 'Network That Works',
      description: 'Years of working with TFR, shipping agents, and transport partners means we\'ve built relationships that get results. When you need a favor, when standard procedures won\'t work, when you\'re racing against a deadline, that\'s when our network pays dividends.',
    },
    {
      icon: MapPin,
      title: 'Everywhere You Need Us',
      description: 'From Johannesburg to Cape Town, Durban to Bloemfontein, we cover South Africa with the same reliability wherever we operate. Our nationwide coverage doesn\'t mean we\'re spread thin, it means we\'ve built consistent service standards that travel with our trucks.',
    },
    {
      icon: Clock,
      title: 'Time Is Money',
      description: 'We understand this better than anyone: every hour a truck sits idle is money lost. For you and for us. That\'s why we\'ve optimized our operations for speed and efficiency, from quick turnarounds at our facility to streamlined port processes.',
    },
  ];

  const services = [
    'Road Transport Services',
    'Container Logistics',
    'Intermodal Solutions',
    'Secondary Distribution',
    'Local Logistics',
    'Import Container Delivery',
    'Export Container Collection',
    'Stacking Containers at TFR Terminal',
  ];

  const capabilities = [
    'Single Container Movement',
    'Point A to Point B Transport',
    'Breakbulk Transport (Coils, Containers)',
    'Collections & Deliveries',
    'Time-Sensitive Deliveries',
    'Flexible Scheduling',
    '24/7 Operations',
    'Nationwide Coverage',
  ];

  return (
    <>
      <JsonLd data={logisticsServiceSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300">
        
        {/* HERO SECTION - H1 IS HERE FOR THE SCANNER */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Vuyela Logistics
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Logistics <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Management</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-orange-500/30 pl-6">
            Our trucks hit the road daily. We get your cargo where it needs to go. Timing matters. We deliver on time. Our own fleet means we control everything. Maintenance stays regular. Driver standards stay high. Reliability stays consistent.
          </p>
        </section>

        {/* HERO IMAGE */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 leading-relaxed mb-6">
                We move coils to manufacturing plants. Containers race to catch vessel deadlines. Breakbulk cargo gets special handling. We move it all. Daily movements happen between Durban port and TFR terminals. Destinations across South Africa get covered. These aren't just routes. They're commitments we keep.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                The Problem: Road transport is unreliable. Third-party contractors cause delays. Maintenance gets skipped. Driver standards vary. Companies struggle with these issues.
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
                src="/images/logistics-hero.png"
                alt="Vuyela logistics fleet and transport operations"
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
              <h2 className="text-3xl font-bold text-white">Why Choose Vuyela Logistics</h2>
              <p className="text-gray-400 mt-4">We make road transport reliable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Truck className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Own Fleet Control</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> We Own Our Trucks</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> We Control Maintenance</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> We Train Our Drivers</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> No Third-Party Excuses</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Clock className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">24/7 Operations</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Never Stop Moving</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Weekend Deliveries</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Urgent Shipments</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Always Available</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Route className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Nationwide Coverage</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> All Major Cities</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Port Connections</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> TFR Terminal Access</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Consistent Service</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Vuyela Logistics</h2>
          
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a] mb-12">
            <Image
              src="/images/logistics-why-choose.png"
              alt="Vuyela logistics operations and fleet"
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
              src="/images/logistics-features-after.png"
              alt="Container transport and logistics"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </section>

        {/* SERVICES & CAPABILITIES */}
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
                  src="/images/logistics-services.png"
                  alt="Road transport and logistics services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="bg-[#0f0f0f] rounded-lg p-6 sm:p-8 border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our <span className="text-orange-500">Capabilities</span>
              </h3>
              <ul className="space-y-3 mb-6">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{capability}</span>
                  </li>
                ))}
              </ul>
              <div className="relative w-full h-56 rounded-lg overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/logistics-capabilities.png"
                  alt="Fleet operations and capabilities"
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Vuyela Logistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Own Fleet Control</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We own our trucks. We control maintenance, driver training, and vehicle standards. No third-party delays or excuses. When we promise delivery, we deliver.
              </p>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">24/7 Operations</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Logistics never stops. Neither do we. Our trucks run day and night. Weekend deliveries? No problem. Urgent shipments? We handle them.
              </p>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Live Tracking</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Know where your cargo is every minute. Our tracking systems show real-time location. No guessing, no waiting for updates.
              </p>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Nationwide Coverage</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                From Durban to Cape Town, Johannesburg to Bloemfontein. We cover all of South Africa with the same reliability everywhere we go.
              </p>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Process</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3">Step 1: Booking</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                You tell us what needs moving, where, and when. We confirm capacity and schedule. Simple booking, clear communication.
              </p>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3">Step 2: Collection</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Our truck arrives on time. Driver handles loading safely. We verify cargo and paperwork. Then we hit the road.
              </p>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3">Step 3: Transport</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Cargo moves safely to destination. You track progress in real-time. Our team monitors every mile. We keep you informed.
              </p>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3">Step 4: Delivery</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We arrive on schedule. Unload cargo carefully. Get delivery confirmation. Job done, promise kept.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-3">Fleet Types</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Container Trucks</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Flatbed Trucks</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Refrigerated Trucks</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Breakbulk Transport</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Coil Carriers</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Specialized Equipment</li>
              </ul>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-3">Service Routes</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Port to Factory</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> TFR Terminal Access</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Intercity Transport</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Cross-border Routes</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Local Distribution</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Nationwide Coverage</li>
              </ul>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-3">Service Features</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> 24/7 Operations</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Real-time GPS Tracking</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Full Insurance Coverage</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Flexible Scheduling</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Time-sensitive Delivery</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Professional Drivers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WAREHOUSING & DISTRIBUTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Warehousing & Distribution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">Secure Storage</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Our warehouse keeps cargo safe. CCTV cameras watch everything. Access stays controlled. Security guards patrol regularly. Your goods stay protected day and night.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> 24/7 CCTV monitoring</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Controlled access</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Security patrols</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Fire protection systems</li>
              </ul>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">Fast Distribution</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                We move cargo quickly. Trucks load fast. Routes stay optimized. Delivery happens on time. Speed matters to us.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Quick loading</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Optimized routes</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> On-time delivery</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Efficient processes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* REAL-TIME TRACKING TECHNOLOGY */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Real-Time Tracking Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">GPS Systems</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Every truck has GPS. Location updates every minute. You track cargo in real-time. No guessing where it is.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Live GPS tracking</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Minute-by-minute updates</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Route visibility</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> ETA calculations</li>
              </ul>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Mobile Apps</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Our app shows cargo status. Check it on your phone. Alerts notify you. Information stays accessible.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Mobile app access</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Push notifications</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Status updates</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Easy interface</li>
              </ul>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Yard Cameras</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Cameras cover our yard. You watch cargo loading. Security stays visible. Operations stay transparent.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Full yard coverage</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Live camera feeds</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Security monitoring</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Operation visibility</li>
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
                Do you own your fleet?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. We own our fleet. We don't use third-party contractors. This means we control maintenance, driver training, and vehicle standards. No excuses. No blame-shifting. Just reliable transport when you need it.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                Can you handle urgent shipments?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. We operate 24/7. Urgent shipments get priority. Weekend deliveries work fine. We understand that timing matters. We move cargo when it needs to move.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                How do you track cargo?
              </h3>
              <p className="text-sm text-gray-400">
                We use GPS tracking systems. Every truck has GPS. Location updates every minute. You can track cargo in real-time through our systems. We also have full yard camera coverage. You see operations as they happen.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                What areas do you cover?
              </h3>
              <p className="text-sm text-gray-400">
                We cover all of South Africa. From Durban to Cape Town. From Johannesburg to Bloemfontein. We also handle cross-border transport into SADC countries. Our network covers major routes and ports.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Need Transport Solutions?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Whether you're moving containers, coils, breakbulk, or general freight, every transport requirement is unique. Let's discuss your specific needs and explore how our fleet, our network, and our commitment to reliability can become your competitive advantage.
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
