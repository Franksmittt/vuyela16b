import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { 
  ShieldCheck,
  Camera,
  Scale,
  Warehouse,
  Clock,
  CheckCircle2,
  Package,
  MapPin,
  Activity,
  FileCheck,
  Zap,
  Building2,
  Lock,
  Eye,
  ArrowRight,
  HelpCircle,
  Truck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Facilities | Vuyela Group',
  description:
    'State-of-the-art facilities in Elandsfontein. SOLAS certified weighbridges, SARS bonded warehouse, full CCTV coverage, and 24/7 operations.',
  keywords:
    'logistics facilities, SOLAS certified, SARS bonded warehouse, weighbridges, CCTV coverage, Elandsfontein, warehousing, containerization, South Africa logistics',
  alternates: {
    canonical: '/facilities',
  },
  openGraph: {
    title: 'Facilities | Vuyela Group',
    description: 'State-of-the-art logistics facilities in Elandsfontein with SOLAS certified weighbridges and SARS bonded warehouse.',
    url: 'https://vuyela.com/facilities',
    images: [
      {
        url: '/images/facilities-aerial-view.png',
        width: 1200,
        height: 630,
        alt: 'Vuyela Group Facilities - Elandsfontein',
      },
    ],
  },
};

const facilitiesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  name: 'Vuyela Group Facilities',
  description: 'State-of-the-art logistics facilities in Elandsfontein with SOLAS certified weighbridges and SARS bonded warehouse.',
  url: 'https://vuyela.com/facilities',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Elandsfontein',
    addressCountry: 'ZA',
  },
  containsPlace: {
    '@type': 'Place',
    name: 'Elandsfontein Facility',
    description: 'Main operations hub with SARS Bonded Warehouse and SOLAS certified weighbridges.',
  },
};

export default function FacilitiesPage() {
  return (
    <>
      <JsonLd data={facilitiesPageSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300">
        
        {/* HERO SECTION - H1 IS HERE FOR THE SCANNER */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Our Infrastructure
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Our Facilities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Infrastructure</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-orange-500/30 pl-6">
            Our infrastructure works efficiently. Security stays strong. Compliance gets met. Our Elandsfontein facility uses modern technology. Industry standards get followed. Service stays exceptional.
          </p>
        </section>

        {/* HERO IMAGE */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border border-[#2a2a2a]">
            <Image
              src="/images/facilities-aerial-view.png"
              alt="Vuyela facility aerial view"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
            />
          </div>
        </section>

        {/* CORE BENEFITS SECTION */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Why Our Facilities Matter</h2>
              <p className="text-gray-400 mt-4">We invest in infrastructure that delivers results.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Certified Compliance</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> SOLAS Certified Weighbridges</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> SARS Bonded Warehouse</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> NOSA Safety Standards</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> ISO Compliant Operations</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Camera className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Complete Security</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Full Yard CCTV Coverage</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> 24/7 Monitoring</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Controlled Access</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Security Guard Patrols</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Clock className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">24/7 Operations</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Always Available</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> No Downtime</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Emergency Response</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Flexible Scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITY DETAILS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Elandsfontein Facility</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We're located on Main Reef Road. Our facility is the heart of Vuyela Group. SOLAS certified weighbridges ensure international compliance. SARS Bonded Warehouse status helps customs. CCTV cameras monitor 24/7. Every part supports your logistics needs.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                We handle bulk commodity storage. Containerization works smoothly. Road freight coordination happens here. Everything works under one roof. Reliability and security stay guaranteed.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> Main Reef Road, Elandsfontein, Gauteng</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> Strategic location for transport routes</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> Close to Port of Durban</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> Near TFR terminals</li>
              </ul>
            </div>

            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/warehouse-interior.png"
                alt="Vuyela facility infrastructure"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Detailed Facility Specs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Detailed Facility Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
                <h3 className="text-xl font-bold text-white mb-4">Workshop Facilities</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Our workshop maintains our fleet. Trucks get serviced regularly. Repairs happen quickly. Equipment stays maintained. Downtime stays minimal.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Full service bay</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Equipment storage</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Parts inventory</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Qualified mechanics</li>
                </ul>
              </div>
              <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
                <h3 className="text-xl font-bold text-white mb-4">Wash Bay Operations</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Our wash bay cleans trucks. Containers get washed before export. Equipment stays clean. Standards get met. Presentation stays professional.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> High-pressure washing</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Container cleaning</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Equipment maintenance</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Quality standards</li>
                </ul>
              </div>
              <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
                <h3 className="text-xl font-bold text-white mb-4">Depot Security</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Security protects our depot. Access gets controlled. CCTV monitors everything. Guards patrol regularly. Cargo stays safe.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Controlled access gates</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Security guard patrols</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> CCTV monitoring</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Alarm systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITY FEATURES GRID */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Facility Features</h2>
          
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a] mb-12">
            <Image
              src="/images/facilities-aerial-view.png"
              alt="Vuyela facility infrastructure and operations"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Scale,
                title: 'SOLAS Certified Weighbridges',
                description: 'Our weighbridges meet SOLAS standards. They weigh cargo accurately. International shipping accepts these weights. No disputes happen.',
                benefits: ['International shipping compliance', 'Accurate weight documentation', 'Reduced shipping disputes', 'Regulatory compliance assurance']
              },
              {
                icon: Warehouse,
                title: 'SARS Bonded Warehouse',
                description: 'We are a SARS bonded warehouse. Duty payments get deferred. Secure storage works here. Customs compliance stays guaranteed.',
                benefits: ['Deferred duty payments', 'Secure customs-controlled storage', 'Streamlined import/export processes', 'Reduced financial burden']
              },
              {
                icon: Camera,
                title: 'Full Yard Camera Coverage',
                description: 'CCTV cameras cover our entire facility. Monitoring happens 24/7. Recording captures everything. Security stays visible.',
                benefits: ['Complete security visibility', '24/7 monitoring and recording', 'Incident documentation', 'Peace of mind for clients']
              },
              {
                icon: Clock,
                title: '24/7 Operations',
                description: 'Our facility operates 24/7. Service stays available always. We respond to client needs quickly. No downtime delays happen.',
                benefits: ['No downtime delays', 'Flexible scheduling', 'Emergency response capability', 'Maximum operational efficiency']
              },
              {
                icon: ShieldCheck,
                title: 'NOSA Safety Standards',
                description: 'We follow NOSA safety standards. Workplace safety stays guaranteed. Operations stay excellent. Workers stay protected.',
                benefits: ['Certified safety protocols', 'Reduced workplace incidents', 'Insurance benefits', 'Industry best practices']
              },
              {
                icon: Activity,
                title: 'Live System Tracking',
                description: 'Our tracking systems work in real-time. You see operations clearly. Inventory stays visible. Cargo movements get tracked.',
                benefits: ['Real-time status updates', 'Complete operational transparency', 'Proactive issue resolution', 'Enhanced client communication']
              },
              {
                icon: Package,
                title: 'Containerization Facility',
                description: 'We pack containers professionally. Six-meter and twelve-meter containers work fine. Handling stays proper. Documentation stays correct.',
                benefits: ['Professional packing standards', 'Vessel-ready containers', 'Proper documentation', 'Efficient loading processes']
              },
              {
                icon: Package,
                title: 'Bagging Facility',
                description: 'We provide custom bagging services. Different commodities get different bags. Customer requirements get met. Specifications stay followed.',
                benefits: ['Custom packaging solutions', 'Commodity-specific handling', 'Quality packaging materials', 'Flexible service options']
              },
              {
                icon: Building2,
                title: 'Strategic Warehousing',
                description: 'Dedicated warehouse space for stockpiling and storage of bulk commodities with optimal organization and accessibility.',
                benefits: ['Organized storage systems', 'Easy inventory access', 'Bulk handling capability', 'Efficient space utilization']
              }
            ].map((facility, index) => (
              <div key={index} className="bg-[#0f0f0f] rounded-xl p-6 border border-[#222]">
                <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center mb-6">
                  <facility.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm">{facility.description}</p>
                <ul className="space-y-2">
                  {facility.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST BUILDING */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Trust Vuyela</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Lock,
                title: 'Security First',
                description: 'Multi-layered security systems protecting your valuable cargo at every stage.'
              },
              {
                icon: FileCheck,
                title: 'Compliance Guaranteed',
                description: 'All facilities meet and exceed industry standards and regulatory requirements.'
              },
              {
                icon: Zap,
                title: 'Operational Excellence',
                description: 'State-of-the-art infrastructure designed for maximum efficiency and reliability.'
              },
              {
                icon: Eye,
                title: 'Transparent Operations',
                description: 'Complete visibility into all operations through live tracking and monitoring systems.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[#141414] rounded-xl p-8 border border-[#2a2a2a]">
                <div className="w-14 h-14 rounded-lg bg-orange-500 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/weighbridge-checkpoint.png"
                alt="Security systems and monitoring"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/weighbridge-solas.png"
                alt="Operations center and monitoring"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
                What certifications do your facilities have?
              </h3>
              <p className="text-sm text-gray-400">
                Our facilities have multiple certifications. SOLAS certified weighbridges ensure international shipping compliance. SARS Bonded Warehouse status allows deferred duty payments. NOSA safety standards protect workers. ISO compliance ensures quality operations.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                How secure is your facility?
              </h3>
              <p className="text-sm text-gray-400">
                Our facility is highly secure. CCTV cameras cover the entire yard. Monitoring happens 24/7. Access is controlled through gates. Security guards patrol regularly. Alarm systems protect against unauthorized access.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                Can I visit your facility?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. We welcome facility visits by appointment. Schedule a tour to see our operations. You'll see our weighbridges, warehouse, and security systems. Our team will answer all your questions.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                What services are available at your facility?
              </h3>
              <p className="text-sm text-gray-400">
                Our facility offers multiple services. We handle bulk commodity storage. We provide containerization. We offer bagging services. We coordinate road freight. We maintain our fleet. Everything works under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Experience Our Facilities</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            See firsthand how our world-class infrastructure can support your logistics needs. Schedule a facility tour or contact us to learn more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
              Schedule a Visit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="px-8 py-4 bg-[#1a1a1a] text-white border border-[#333] rounded-lg font-bold hover:bg-[#252525] transition-colors">
              View Our Services
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
