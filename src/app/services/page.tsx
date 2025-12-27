import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { 
  ArrowRight, 
  Warehouse, 
  Truck, 
  Ship, 
  Fuel,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Target,
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Vuyela Group',
  description:
    'Comprehensive logistics solutions across four specialized divisions: Vuyela Bulk, Logistics, Freight, and Refuel. Complete warehousing, transport, and energy services.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our Services | Vuyela Group',
    description: 'Complete logistics solutions for warehousing, transport, freight, and energy needs.',
    url: 'https://vuyela.com/services',
  },
};

const servicesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vuyela Group Services',
  description: 'Comprehensive logistics solutions including warehousing, freight, bulk handling, and energy solutions.',
  url: 'https://vuyela.com/services',
  provider: {
    '@type': 'Organization',
    name: 'Vuyela Group',
  },
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Vuyela Group Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vuyela Bulk - Warehousing & Handling',
          url: 'https://vuyela.com/services/bulk',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vuyela Logistics - Road Freight & Transport',
          url: 'https://vuyela.com/services/logistics',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vuyela Freight - Ocean Freight & Customs',
          url: 'https://vuyela.com/services/freight',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vuyela Refuel - Energy Solutions',
          url: 'https://vuyela.com/services/refuel',
        },
      },
    ],
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: Warehouse,
      title: 'Vuyela Bulk',
      subtitle: 'Warehousing & Handling',
      description: 'Strategic warehousing, stockpiling, and containerization at our Elandsfontein facility. SARS Bonded Warehouse with SOLAS certified weighbridges.',
      href: '/services/bulk',
      features: [
        'SARS Bonded Warehouse',
        'SOLAS Certified Weighbridges',
        'Stockpiling & Storage',
        'Container Packing (6m & 12m)',
        'Bagging Facility',
        'Full Yard Camera Coverage',
      ],
      image: '/images/home-service-bulk.png',
    },
    {
      icon: Truck,
      title: 'Vuyela Logistics',
      subtitle: 'Road Freight & Transport',
      description: 'Own fleet operations with 24/7 monitoring. Container logistics, intermodal solutions, and reliable transport across South Africa.',
      href: '/services/logistics',
      features: [
        'Own Fleet Operations',
        '24/7 Live System Tracking',
        'Container Logistics',
        'Intermodal Solutions',
        'Secondary Distribution',
        'Strategic TFR Partnerships',
      ],
      image: '/images/home-service-logistics.png',
    },
    {
      icon: Ship,
      title: 'Vuyela Freight',
      subtitle: 'Ocean Freight & Customs',
      description: 'Complete freight forwarding and customs clearing. Strategic partnerships with major shipping lines for global trade facilitation.',
      href: '/services/freight',
      features: [
        'Ocean Freight Management',
        'Customs Clearing',
        'Import & Export Containers',
        'Strategic Shipping Line Partnerships',
        'Border Clearance Services',
        'Documentation & Acquittals',
      ],
      image: '/images/home-service-freight.png',
    },
    {
      icon: Fuel,
      title: 'Vuyela Refuel',
      subtitle: 'Energy Solutions',
      description: 'Premium 50ppm diesel supply with rigorous quality testing. Guaranteed pure fuel with our "Pregnancy Test" protocol.',
      href: '/services/refuel',
      features: [
        '50ppm Diesel Supply',
        'Quality Assurance Testing',
        '80,000Lt Storage Capacity',
        '2 Pumping Stations',
        'Extended Operating Hours',
        'Bulk Fuel Solutions',
      ],
      image: '/images/home-service-refuel.png',
    },
  ];

  return (
    <>
      <JsonLd data={servicesPageSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300">
        
        {/* HERO SECTION - H1 IS HERE FOR THE SCANNER */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Our Services
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Logistics Services</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-orange-500/30 pl-6">
            Four divisions. One mission. We keep South Africa moving. Vuyela Bulk handles warehousing. Vuyela Logistics runs our fleet. Vuyela Freight manages ocean shipping. Vuyela Refuel supplies premium diesel. These services work together. They create a complete logistics solution.
          </p>
        </section>

        {/* CORE BENEFITS SECTION */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Why Choose Our Services?</h2>
              <p className="text-gray-400 mt-4">We make logistics simple and reliable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Complete Solutions</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Four Integrated Services</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> One Partner</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> No Multiple Vendors</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Seamless Coordination</li>
                </ul>
              </div>

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
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Always Available</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Real-Time Tracking</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Full Visibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission & Vision</h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            <p>
              We started with one truck in 2019. Today we move millions of tons. Our mission is simple. We treat every shipment like our own. When cargo enters our facility, we become its custodian. We protect it. We track it. We deliver it on time.
            </p>
            <p>
              Our vision is bigger. We want to be South Africa's most trusted logistics partner. We combine hands-on leadership with modern infrastructure. We operate 24/7. We never stop moving. We never stop improving.
            </p>
            <p>
              Four divisions serve one purpose. They solve your logistics challenges. From warehousing to transport. From ocean freight to fuel supply. We provide complete solutions. We eliminate the need for multiple vendors. One partner. One point of contact. One commitment to excellence.
            </p>
          </div>
        </section>

        {/* PROCESS/METHODOLOGY */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How We Deliver Results</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                Consultation & Planning
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We start by understanding your needs. We discuss your cargo. We review your timelines. We identify challenges. Then we create a custom plan. This plan fits your business. It addresses your specific requirements.
              </p>
            </div>

            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                Service Selection
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We match your needs to our services. Need warehousing? Vuyela Bulk handles it. Need transport? Vuyela Logistics moves it. Need ocean freight? Vuyela Freight manages it. Need fuel? Vuyela Refuel supplies it. Often, you need multiple services. We coordinate them seamlessly.
              </p>
            </div>

            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                Execution & Monitoring
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We execute your plan with precision. Our team handles every detail. We track your cargo in real-time. We monitor operations 24/7. We update you regularly. You stay informed. You stay in control.
              </p>
            </div>

            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
                Delivery & Follow-Up
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We deliver on time. Every time. After delivery, we follow up. We ensure satisfaction. We address any concerns. We learn from each shipment. We improve continuously. This builds long-term partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Service Divisions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#141414] rounded-lg p-8 border border-[#2a2a2a] hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} service`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="w-16 h-16 rounded-lg bg-orange-500 flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-orange-500 text-sm font-medium mb-4">
                  {service.subtitle}
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-white transition-colors duration-200 group/link mt-auto"
                >
                  Learn More about {service.title}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-6 max-w-4xl mx-auto border-t border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                Can I use multiple services together?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. Many clients use multiple services. For example, you might need warehousing from Vuyela Bulk, transport from Vuyela Logistics, and ocean freight from Vuyela Freight. We coordinate all services seamlessly. One partner. One point of contact. Complete solutions.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                Do you operate outside South Africa?
              </h3>
              <p className="text-sm text-gray-400">
                Our facility is in Elandsfontein, South Africa. We handle domestic transport across the country. For international shipping, Vuyela Freight manages ocean freight and customs clearing. We work with global shipping partners. We facilitate trade worldwide.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                What makes your services different from competitors?
              </h3>
              <p className="text-sm text-gray-400">
                We offer four integrated services. We own our fleet. We operate 24/7. Our directors are hands-on. We have certified infrastructure. We provide real-time tracking. Most importantly, we treat every shipment like our own. This combination is rare in logistics.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                How do I get started?
              </h3>
              <p className="text-sm text-gray-400">
                Contact us. We'll discuss your needs. We'll explain our services. We'll create a custom plan. Then we execute. It's that simple. No complicated processes. No long wait times. Just direct communication and reliable service.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Every business has unique logistics challenges. Every challenge has a solution. Let's discuss your needs. We'll show you how our four divisions work together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
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
