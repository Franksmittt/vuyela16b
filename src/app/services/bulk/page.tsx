import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { 
  ArrowRight, 
  Warehouse, 
  CheckCircle2,
  ShieldCheck,
  Clock,
  MapPin,
  Package,
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vuyela Bulk - Warehousing & Handling | Vuyela Group',
  description:
    'Strategic warehousing, stockpiling, and containerization at our Elandsfontein facility. SARS Bonded Warehouse with SOLAS certified weighbridges.',
  alternates: {
    canonical: '/services/bulk',
  },
  openGraph: {
    title: 'Vuyela Bulk - Warehousing & Handling',
    description: 'Professional warehousing and bulk handling solutions in Elandsfontein.',
    url: 'https://vuyela.com/services/bulk',
  },
};

const bulkServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vuyela Bulk - Warehousing & Handling',
  description: 'Strategic warehousing, stockpiling, and containerization at our Elandsfontein facility. SARS Bonded Warehouse with SOLAS certified weighbridges.',
  url: 'https://vuyela.com/services/bulk',
  provider: {
    '@type': 'Organization',
    name: 'Vuyela Group',
  },
  serviceType: 'Warehousing & Bulk Handling',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
};

export default function BulkServicePage() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'SARS Bonded Warehouse',
      description: 'When your cargo enters our bonded warehouse, you defer duty payments and streamline cash flow. Our registered bond area means your goods can stay in our secure facility while you prepare export documentation, coordinate vessel bookings, or wait for the right market conditions.',
    },
    {
      icon: ShieldCheck,
      title: 'SOLAS Certified Weighbridges',
      description: 'International shipping demands accuracy. Our SOLAS certified weighbridges are internationally recognized. That means no disputes with shipping lines over weight, no delays at port, and complete confidence that your documentation will pass scrutiny anywhere in the world.',
    },
    {
      icon: Warehouse,
      title: 'Strategic Warehousing',
      description: 'Stockpiling isn\'t just about storage, it\'s about timing. Our dedicated warehouse space gives you the flexibility to build inventory when production is high, then move it to market when conditions are right. Whether you\'re managing seasonal production cycles or coordinating with vessel schedules, our warehousing becomes your strategic advantage.',
    },
    {
      icon: Package,
      title: 'Professional Containerization',
      description: 'There\'s an art to packing containers correctly, and we\'ve mastered it. Our team understands that how you pack a 6m or 12m container affects everything: weight distribution, customs documentation, and vessel loading efficiency. We don\'t just fill containers; we optimize them.',
    },
    {
      icon: Package,
      title: 'Custom Bagging Solutions',
      description: 'Not all commodities travel the same way. Some need bagging for retail markets, others for industrial use, and some require specific packaging for international standards. Our bagging facility adapts to your requirements, whether it\'s grain for export, minerals for processing, or specialized packaging for niche markets.',
    },
    {
      icon: Clock,
      title: 'Always Watching, Always Working',
      description: 'Logistics doesn\'t take weekends off, and neither do we. Our 24/7 operations mean your cargo moves when it needs to move, whether that\'s a midnight container delivery or a Sunday stockpile shift. Full yard camera coverage ensures that even when you can\'t be here, you can see what\'s happening.',
    },
  ];

  const services = [
    'Bulk Warehousing & Storage',
    'Stockpiling Services',
    'Container Packing (6m & 12m)',
    'Bagging Operations',
    'Material Handling',
    'Container Delivery to TFR Terminal',
    'Road Haul to Durban Port',
  ];

  const commodities = [
    'Chrome (Concentrate & ROM)',
    'Manganese',
    'Iron Ore',
    'Coal',
    'Ferrochrome',
    'Ferromanganese',
    'Bagged Cargo',
  ];

  return (
    <>
      <JsonLd data={bulkServiceSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300">
        
        {/* HERO SECTION - H1 IS HERE FOR THE SCANNER */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Vuyela Bulk
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Bulk Cargo <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Transport</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-orange-500/30 pl-6">
            We handle bulk cargo transport. Chrome goes to international markets. Manganese goes to steel production. Iron ore goes to global trade. Our Elandsfontein facility stores these commodities safely. We become their custodians.
          </p>
        </section>

        {/* HERO IMAGE */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our facility handles raw mineral storage. We prepare containers for export. We have over 10,000 square meters of warehouse space. Large stockpiles fit easily. Quality control stays strict. Our bagging operations handle industrial bags. Container packing works for 6-meter and 12-meter containers. SOLAS certified weighbridges verify weights. International shipping needs accurate documentation. We provide it.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                The Problem: Bulk cargo handling is complex. Storage needs proper facilities. Weight documentation must be accurate. Customs procedures require expertise. Export preparation takes time. Many companies struggle with these challenges.
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
                src="/images/bulk-hero.png"
                alt="Warehouse and bulk handling facility"
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
              <h2 className="text-3xl font-bold text-white">Why Choose Vuyela Bulk</h2>
              <p className="text-gray-400 mt-4">We make bulk handling simple and secure.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Certified Infrastructure</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> SARS Bonded Warehouse</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> SOLAS Certified Weighbridges</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> ISO Compliance</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> NOSA Safety Standards</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Warehouse className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Large Capacity</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> 10,000+ Square Meters</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Large Stockpiles</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Flexible Storage</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Scalable Solutions</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Clock className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">24/7 Operations</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Always Available</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Full Yard Camera Coverage</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Continuous Monitoring</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Real-Time Visibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITIES SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Facilities</h2>
          
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a] mb-12">
            <Image
              src="/images/bulk-warehouse-facilities.png"
              alt="Warehouse facilities and infrastructure"
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
        </section>

        {/* IMAGES GRID */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/bulk-bagging-operations.png"
                alt="Bagging operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/bulk-weighbridge.png"
                alt="Weighbridge operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* SERVICES & COMMODITIES */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#141414] rounded-lg p-6 sm:p-8 border border-[#2a2a2a]">
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
                  src="/images/bulk-storage.png"
                  alt="Bulk storage and warehousing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="bg-[#141414] rounded-lg p-6 sm:p-8 border border-[#2a2a2a]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Key <span className="text-orange-500">Commodities</span>
              </h3>
              <ul className="space-y-3 mb-6">
                {commodities.map((commodity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{commodity}</span>
                  </li>
                ))}
              </ul>
              <div className="relative w-full h-56 rounded-lg overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/bulk-commodities.png"
                  alt="Bulk commodities storage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <div className="bg-[#0f0f0f] rounded-lg p-6 sm:p-8 border border-[#222] text-center">
            <div className="w-16 h-16 rounded-lg bg-orange-500 flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Location</h3>
            <p className="text-gray-300 text-lg mb-2 font-semibold">Main Reef Road, Elandsfontein, Gauteng</p>
            <p className="text-gray-400 text-sm mb-6">SARS Bonded Warehouse Facility</p>
            <p className="text-gray-300 text-base max-w-3xl mx-auto leading-relaxed">
              Strategically located in Elandsfontein, our facility offers unparalleled access to major transport routes and industrial hubs. Our position on Main Reef Road provides direct connectivity to the TFR terminal, Durban Port, and key mining regions across South Africa. The SARS Bonded Warehouse status means your cargo benefits from duty deferral and streamlined customs processes, while our SOLAS certified infrastructure ensures international compliance from day one.
            </p>
          </div>
        </section>

        {/* BULK COMMODITY EXPERTISE */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Bulk Commodity Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Coal Handling</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Coal needs careful storage. We prevent moisture damage. Our stockpiles stay dry and secure. We handle thermal coal and coking coal. Each type gets proper treatment.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Thermal coal storage</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Coking coal handling</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Moisture protection</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Dust control measures</li>
              </ul>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Chrome Operations</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Chrome comes in two forms. Concentrate is processed. ROM is raw ore. We handle both. Our weighbridges verify weight accurately. Export documentation stays correct.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Chrome concentrate storage</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> ROM handling</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Accurate weighing</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Export preparation</li>
              </ul>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Iron Ore Management</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Iron ore is heavy. It needs strong storage. We use proper equipment. Our facility handles large volumes. Stockpiling works smoothly. Container packing stays efficient.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Large volume storage</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Heavy equipment handling</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Efficient stockpiling</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Container optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SAFETY COMPLIANCE */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Safety Compliance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">ISO Standards</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                We follow ISO 9001 quality management. Our processes stay consistent. We document everything. Regular audits keep us compliant. Quality never drops.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> ISO 9001:2015 certified</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Quality management systems</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Regular compliance audits</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Documented procedures</li>
              </ul>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">SOLAS Certification</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Our weighbridges meet SOLAS rules. International shipping requires this. Weight documents stay accurate. No disputes at ports. Compliance is guaranteed.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> SOLAS certified weighbridges</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> International shipping compliance</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Accurate weight documentation</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Port acceptance guaranteed</li>
              </ul>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">NOSA Safety</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                We follow NOSA safety standards. Worker safety comes first. Equipment stays maintained. Safety training happens regularly. Accidents stay prevented.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> NOSA safety standards</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Regular safety training</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Equipment maintenance</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Zero accident goal</li>
              </ul>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">SARS Bonded</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Our warehouse is SARS bonded. Customs rules get followed. Duty payments stay deferred. Export processes stay smooth. Documentation stays correct.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> SARS Bonded Warehouse</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Customs compliance</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Duty deferral benefits</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Export documentation</li>
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
                How do you handle hazardous materials?
              </h3>
              <p className="text-sm text-gray-400">
                We follow strict safety rules. Hazardous materials get special handling. Our team receives proper training. Storage areas stay secure. Documentation stays complete. We work with certified handlers. Safety stays our top priority.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                What is your storage capacity?
              </h3>
              <p className="text-sm text-gray-400">
                We have over 10,000 square meters of warehouse space. Large stockpiles fit easily. Our facility handles high volumes. We can scale up when needed. Capacity matches your requirements.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                How long can cargo stay in storage?
              </h3>
              <p className="text-sm text-gray-400">
                Storage time depends on your needs. SARS bonded status helps. Duty payments stay deferred. We offer flexible terms. Long-term storage works fine. We discuss timelines with you.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                What commodities do you handle?
              </h3>
              <p className="text-sm text-gray-400">
                We handle chrome concentrate and ROM. We handle manganese and iron ore. We handle coal and ferroalloys. We handle ferrochrome and ferromanganese. We handle bagged cargo. Our experience covers the full range of bulk commodities.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner with Vuyela Bulk?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Every bulk commodity has unique requirements, from handling specifications to packaging needs to timing constraints. Let's talk about your specific challenges and discover how our Elandsfontein facility can become your strategic advantage in bulk logistics.
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
