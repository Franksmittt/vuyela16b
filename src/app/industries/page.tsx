import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { 
  Warehouse, 
  Truck,
  CheckCircle2,
  Target,
  ArrowRight,
  HelpCircle,
  Globe,
  ShieldCheck,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve | Vuyela Group',
  description:
    'Specialized logistics solutions for mining and agricultural sectors. From pit to port, we provide practical, real-world solutions for key industries.',
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Industries We Serve | Vuyela Group',
    description: 'Mining and agricultural logistics solutions across South Africa.',
    url: 'https://vuyela.com/industries',
  },
};

const industriesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industry-Specific Logistics Solutions',
  description: 'Specialized logistics solutions for mining and agricultural sectors in South Africa.',
  url: 'https://vuyela.com/industries',
  provider: {
    '@type': 'Organization',
    name: 'Vuyela Group',
  },
  serviceType: ['Mining Logistics', 'Agricultural Logistics'],
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={industriesPageSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300">
        
        {/* HERO SECTION - H1 IS HERE FOR THE SCANNER */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Industries
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Serve</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-orange-500/30 pl-6">
            Every industry has its rhythm. Mining operations don't move on a 9-to-5 schedule. Agricultural harvests don't wait for convenient timing. We've built our expertise by deeply understanding the industries we know best. This isn't generic logistics. It's specialized knowledge. Industry-specific solutions. Partnerships built on understanding.
          </p>
        </section>

        {/* CORE BENEFITS SECTION */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Why Industry Specialization Matters</h2>
              <p className="text-gray-400 mt-4">We understand your sector deeply.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Target className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Industry Expertise</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Deep Sector Knowledge</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Commodity Specifications</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Regulatory Understanding</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Proven Solutions</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Clock className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Timing Expertise</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Seasonal Awareness</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Critical Deadlines</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Vessel Scheduling</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Harvest Windows</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Reliable Partnerships</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> TFR Relationships</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Port Access</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Shipping Line Partners</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Proven Track Record</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MINING LOGISTICS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center">
                  <Warehouse className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Mining Logistics</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                From pit to port, we know this journey intimately. Our team didn't learn mining logistics from manuals. They learned it on the ground. We handle chrome concentrate, manganese ore, and iron ore through every stage of the supply chain. Years of experience in the commodity sector means we understand what others miss.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                We understand the weight of ROM versus concentrate. We know the timing critical to vessel bookings. We handle the documentation required for international trade. When mining companies trust us with their ores and minerals, they're trusting partners who speak their language. We understand their challenges. We deliver practical, real-world solutions that actually work.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Key Commodities</h3>
                  <ul className="space-y-2">
                    {['Chrome (Concentrate & ROM)', 'Manganese & Iron Ore', 'Coal & Ferroalloys', 'Ferrochrome', 'Ferromanganese'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Our Services</h3>
                  <ul className="space-y-2">
                    {['Containerized rail transport', 'Bulk commodity handling', 'Stockpiling & storage', 'Port logistics management', 'Strategic TFR partnerships'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/Mining Logisticshp.jpg"
                alt="Mining logistics operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* AGRICULTURAL LOGISTICS */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a] order-2 lg:order-1">
              <Image
                src="/images/agricultural-grain-loading.png"
                alt="Agricultural logistics - truck being loaded with grain"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Agricultural Logistics</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Feeding the future means understanding timing like no other industry. When harvest season peaks, there's no second chance. Grain needs to move while it's fresh. Fertilizers must arrive before planting windows close. Produce can't wait for convenient shipping schedules.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                We've worked alongside farmers and agribusinesses long enough to understand that agricultural logistics isn't just about transport. It's about respecting nature's calendar. Seasonality isn't an inconvenience. It's the reality that shapes everything we do. We understand the sensitivity of agricultural products. We know the urgency of harvest windows. We recognize the critical importance of getting it right when timing matters most.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Key Commodities</h3>
                  <ul className="space-y-2">
                    {['Grain & Cereals', 'Fresh Produce', 'Agricultural Inputs', 'Fertilizers', 'Bagged Cargo'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Our Services</h3>
                  <ul className="space-y-2">
                    {['Flexible transport solutions', 'Seasonal demand management', 'Reliable supply chain partners', 'Time-sensitive deliveries'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
                Do you handle all types of mining commodities?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. We handle chrome concentrate and ROM. We handle manganese and iron ore. We handle coal and ferroalloys. We handle ferrochrome and ferromanganese. Our experience covers the full range of mining commodities. We understand the specific requirements of each.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                How do you handle seasonal agricultural demands?
              </h3>
              <p className="text-sm text-gray-400">
                We plan for seasonal peaks. We scale our operations to meet harvest demands. We understand that timing is critical. We coordinate with farmers and agribusinesses. We ensure flexible transport solutions. We manage seasonal demand effectively.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                What makes your industry solutions different?
              </h3>
              <p className="text-sm text-gray-400">
                We specialize in mining and agricultural logistics. We don't try to serve everyone. We focus on what we know best. We understand commodity specifications. We know regulatory requirements. We deliver practical, proven solutions.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                Can you handle both domestic and international shipments?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. We handle domestic transport across South Africa. We also manage international shipments through our freight division. We coordinate with shipping lines. We handle customs clearing. We provide complete solutions from pit to port.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Need Industry-Specific Solutions?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Every industry has its own story. Its own challenges. Its own requirements. We've chosen to specialize in mining and agricultural logistics. We understand these sectors deeply. Let's discuss how our specialized expertise can become your competitive advantage.
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
