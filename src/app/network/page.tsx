import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { CarrierRegistrationForm } from './CarrierRegistrationForm';
import { 
  Globe,
  Handshake,
  Network,
  CheckCircle2,
  ShieldCheck,
  Route,
  Truck,
  Warehouse,
  MapPin,
  Scale,
  Lock,
  Eye,
  FileText,
  Building2,
  ArrowRight,
  HelpCircle,
  Activity
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Vuyela Network | Vuyela Group',
  description:
    'Strategic partnerships and relationships that power our logistics network. Strong connections with TFR, shipping agents, road freight companies, and global partners.',
  alternates: {
    canonical: '/network',
  },
  openGraph: {
    title: 'The Vuyela Network | Vuyela Group',
    description: 'Our strategic partnerships and logistics network across South Africa and beyond.',
    url: 'https://vuyela.com/network',
  },
};

const networkPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vuyela Network',
  description: 'Strategic logistics network with partnerships across South Africa and globally.',
  url: 'https://vuyela.com/network',
  memberOf: {
    '@type': 'Organization',
    name: 'Vuyela Group',
  },
};

export default function NetworkPage() {
  return (
    <>
      <JsonLd data={networkPageSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300">
        
        {/* HERO SECTION - H1 IS HERE FOR THE SCANNER */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Our Network
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Network</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-orange-500/30 pl-6">
            Strategic partnerships power our logistics network. Strong connections with TFR, shipping agents, road freight companies, and global partners ensure seamless operations. The Vuyela Network isn't just contacts. It's a carefully cultivated ecosystem of trusted partners who share our commitment to excellence.
          </p>
        </section>

        {/* NETWORK INFOGRAPHIC */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border border-[#2a2a2a]">
            <Image
              src="/images/network-infographic.png"
              alt="Vuyela logistics network infographic"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
        </section>

        {/* CORE BENEFITS SECTION */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Why Our Network Matters</h2>
              <p className="text-gray-400 mt-4">Strategic partnerships that deliver results.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Handshake className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Strategic Alliances</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Long-standing Relationships</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> TFR Partnerships</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Shipping Line Access</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Road Freight Network</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Network className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Comprehensive Coverage</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Nationwide Reach</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> International Connections</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Multi-Modal Solutions</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Port Access</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Reliable Partners</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Vetted Carriers</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Quality Standards</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Proven Track Record</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Shared Commitment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* OPERATIONAL REACH */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Operational Reach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: 'Elandsfontein Facility', location: 'Gauteng', description: 'Main operations hub with SARS Bonded Warehouse' },
              { name: 'Port of Durban', location: 'KwaZulu-Natal', description: 'Primary port operations and container logistics' },
              { name: 'TFR Terminals', location: 'Nationwide', description: 'Strategic rail terminal access' },
            ].map((hub, index) => (
              <div key={index} className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{hub.name}</h3>
                <p className="text-orange-500 text-sm font-medium mb-2">{hub.location}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{hub.description}</p>
              </div>
            ))}
          </div>

          {/* By the Numbers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">By the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Truck, value: 'Own Fleet', label: 'Active Power Units', description: 'Dedicated fleet operations' },
                { icon: Warehouse, value: '10,000+', label: 'Square Meters', description: 'Warehouse capacity' },
                { icon: Scale, value: 'SOLAS', label: 'Certified Weighbridges', description: 'International compliance' },
                { icon: Globe, value: '24/7', label: 'Operations', description: 'Never-stop logistics' },
              ].map((stat, index) => (
                <div key={index} className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a] text-center">
                  <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-orange-500 text-sm font-medium mb-1">{stat.label}</p>
                  <p className="text-gray-400 text-xs">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIALIZED INFRASTRUCTURE */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Specialized Infrastructure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'SOLAS-Verified Weighbridges',
                description: 'Internationally certified weighbridges meeting SOLAS standards for accurate cargo weighing and international shipping compliance.',
                image: '/images/weighbridge-solas.png',
                icon: Scale,
              },
              {
                title: 'SARS Bonded Warehouse',
                description: 'Registered customs bond area providing secure storage with deferred duty payments, streamlined import/export processes.',
                image: '/images/bulk-warehouse-facilities.png',
                icon: Lock,
              },
              {
                title: 'Bulk Cargo Handling',
                description: 'Specialized infrastructure for handling bulk industrial bags, minerals, grain, and containerized cargo with precision.',
                image: '/images/bulk-commodities.png',
                icon: Warehouse,
              },
              {
                title: 'Security Checkpoints',
                description: 'Restricted access areas with security checkpoints ensuring cargo safety and compliance with international trade regulations.',
                image: '/images/weighbridge-checkpoint.png',
                icon: ShieldCheck,
              },
            ].map((feature, index) => (
              <div key={index} className="bg-[#0f0f0f] rounded-lg overflow-hidden border border-[#222]">
                <div className="relative w-full h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY & SECURITY */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technology & Security</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: 'Real-Time Tracking',
                description: 'Live tracking systems providing complete visibility into cargo location and status throughout the supply chain.',
              },
              {
                icon: ShieldCheck,
                title: 'Full Yard Camera Coverage',
                description: 'Comprehensive CCTV surveillance system with 24/7 monitoring and recording capabilities for complete security visibility.',
              },
              {
                icon: FileText,
                title: 'Live System Monitoring',
                description: 'Continuous monitoring of operations, inventory, and cargo movements with real-time status updates and proactive issue resolution.',
              },
              {
                icon: Network,
                title: 'Integrated Network Systems',
                description: 'Seamless integration with TFR, shipping lines, and transport partners for coordinated logistics operations.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STRATEGIC PARTNERSHIPS */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Strategic Partnerships</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'Rail & Infrastructure',
                partners: ['Transnet Freight Rail (TFR)', 'Strategic TFR Partnerships', 'Rail Terminal Access'],
                description: 'Deep-rooted relationships with Transnet ensuring efficient rail logistics and terminal access.',
                icon: Route,
              },
              {
                category: 'Shipping & Freight',
                partners: ['Major Shipping Lines', 'Shipping Agents', 'Ship Planners', 'Global Carrier Network'],
                description: 'Strategic partnerships with major shipping lines ensuring worldwide coverage for all customer requirements.',
                icon: Globe,
              },
              {
                category: 'Road Transport',
                partners: ['Registered Road Freight Companies', 'Strategic Transport Partners', 'Secondary Distribution Network'],
                description: 'Strong relationships with majority of registered road freight companies for seamless operations.',
                icon: Route,
              },
            ].map((partnership, index) => (
              <div key={index} className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                  <partnership.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{partnership.category}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{partnership.description}</p>
                <ul className="space-y-2">
                  {partnership.partners.map((partner, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{partner}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CARRIER REGISTRATION */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-orange-500 mb-6">
              <Building2 className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Join Our Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Carrier <span className="text-orange-500">Registration</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              We partner with established, professional carriers who share our commitment to excellence. 
              This application requires business documentation to ensure we work with serious, compliant operators.
            </p>
          </div>

          <div className="bg-[#141414] rounded-lg p-6 sm:p-8 border border-[#2a2a2a]">
            <CarrierRegistrationForm />
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-6 max-w-4xl mx-auto border-t border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                How do you select network partners?
              </h3>
              <p className="text-sm text-gray-400">
                We select partners carefully. We require business documentation. We verify compliance. We check safety ratings. We review trade references. We only work with professional, compliant carriers who share our commitment to excellence.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                What are the benefits of joining your network?
              </h3>
              <p className="text-sm text-gray-400">
                Network partners get access to our client base. They benefit from our TFR relationships. They access our shipping line partnerships. They work with a company that values quality and reliability. They become part of a trusted logistics ecosystem.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                How long does the registration process take?
              </h3>
              <p className="text-sm text-gray-400">
                Applications are reviewed within 5-7 business days. We verify all documentation. We check references. We assess compliance. We contact you via email or phone to discuss your application and next steps.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                What partnerships do you have?
              </h3>
              <p className="text-sm text-gray-400">
                We have partnerships with Transnet Freight Rail. We work with major shipping lines. We partner with registered road freight companies. We have relationships with shipping agents and ship planners. These partnerships enable seamless logistics operations.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Leverage Our Network</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Benefit from our strategic partnerships and extensive logistics network. Contact us to see how we can connect your business to seamless logistics solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="px-8 py-4 bg-[#1a1a1a] text-white border border-[#333] rounded-lg font-bold hover:bg-[#252525] transition-colors">
              Our Services
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
