import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { 
  ShieldCheck, 
  Zap, 
  Handshake, 
  Target, 
  Eye, 
  HelpCircle, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

// 1. METADATA (CRITICAL FOR SEO)
export const metadata: Metadata = {
  title: 'About Vuyela Group | Premier Logistics & Supply Chain Solutions',
  description:
    'Vuyela Group is South Africa\'s fastest-growing logistics partner. From a single truck in 2019 to a SARS-bonded powerhouse. Discover our story of resilience and compliance.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Vuyela Group | Premier Logistics & Supply Chain Solutions',
    description: 'From humble beginnings to a national logistics network. Read the story of Vuyela Group\'s commitment to reliability and safety.',
    images: ['/images/about-timeline.png'],
    url: 'https://vuyela.com/about',
  },
};

// 2. SCHEMA MARKUP (THE "SECRET WEAPON")
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vuyela Group',
  url: 'https://vuyela.com',
  logo: 'https://vuyela.com/images/og.png',
  description: 'Premier logistics solutions provider in South Africa specializing in warehousing, freight, and energy.',
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Elandsfontein',
    addressCountry: 'ZA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    areaServed: 'ZA',
    availableLanguage: 'English',
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300 selection:bg-orange-500/30">
        
        {/* HERO SECTION - H1 IS HERE FOR THE SCANNER */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Since 2019
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Built on the Road. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Defined by Excellence.
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-orange-500/30 pl-6">
            Vuyela Group is the engine of modern commerce in South Africa. We started with one truck. Now, we manage a national fleet. We value safety, speed, and trust above all else.
          </p>
        </section>

        {/* OUR STORY - EXPANDED CONTENT */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Vuyela Journey</h2>
              <div className="space-y-6 leading-relaxed">
                <p>
                  Vuyela Group began in 2019. We saw a gap in the market. Clients needed a partner who cared about their cargo. We started small, but we thought big. Our first truck was just the beginning.
                </p>
                <p>
                  The year 2020 changed everything. The world stopped, but logistics had to keep moving. We worked harder than ever. We delivered essential goods when others could not. This proved our reliability. It built trust with our very first clients.
                </p>
                <p>
                  We grew quickly but carefully. We did not just buy more trucks. We invested in the right technology. We trained our drivers to be the best. We focused on safety compliance. This allowed us to work with major mining houses and rail operators.
                </p>
                <p>
                  Today, we are a leader in the industry. We operate a SARS Bonded Warehouse. This means we meet the highest standards of customs compliance. We handle international cargo with ease. We are proud of how far we have come, but we are never satisfied. We always want to improve.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                  <div className="text-3xl font-bold text-orange-500 mb-1">60+</div>
                  <div className="text-xs text-gray-500 uppercase">Team Members</div>
                </div>
                <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                  <div className="text-3xl font-bold text-orange-500 mb-1">100%</div>
                  <div className="text-xs text-gray-500 uppercase">Compliance</div>
                </div>
              </div>
            </div>

            {/* TIMELINE */}
            <div className="space-y-10 border-l border-[#2a2a2a] pl-8">
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-orange-500"></div>
                <h3 className="text-xl font-bold text-white mb-2">2019: The Start</h3>
                <p className="text-sm">
                  We launched with a single vehicle. Our focus was on local distribution. We learned the routes. We learned the challenges. We promised to be on time, every time.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#333]"></div>
                <h3 className="text-xl font-bold text-white mb-2">2021: expansion</h3>
                <p className="text-sm">
                  We expanded our fleet. We added side-tipper trailers for bulk cargo. We started moving commodities for the mining sector. We integrated our systems with Transnet Freight Rail.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#333]"></div>
                <h3 className="text-xl font-bold text-white mb-2">2023: Accreditation</h3>
                <p className="text-sm">
                  We achieved SARS Bonded status. This was a major milestone. It allowed us to store uncleared imports. It proved our financial stability and operational discipline to the market.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#333]"></div>
                <h3 className="text-xl font-bold text-white mb-2">2024: Integration</h3>
                <p className="text-sm">
                  We launched our Energy division. We now supply diesel and lubricants. This created a full-circle solution. We fuel our own fleet and our clients' fleets. We control the entire value chain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS - BULLET POINTS FOR READABILITY */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Why Clients Choose Us</h2>
              <p className="text-gray-400 mt-4">We are built on three core pillars.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Safety First</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> 24/7 Satellite Tracking</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Goods in Transit Insurance</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Strict Driver Vetting</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Regular Vehicle Maintenance</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Zap className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Smart Technology</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Real-time Reporting</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Digital Proof of Delivery</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Inventory Management</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Route Optimization</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Handshake className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Dedicated Service</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Personal Account Managers</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Fast Response Times</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Flexible Contracts</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Custom Logistics Plans</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-[#141414] p-10 rounded-2xl border border-[#2a2a2a]">
              <Target className="w-12 h-12 text-orange-500 mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="leading-relaxed">
                Our mission is simple. We want to empower South African businesses. We do this by providing world-class logistics. We reduce transit times. We cut costs. We ensure your cargo arrives safely. We are not just a vendor. We are a partner in your success.
              </p>
            </div>
            <div className="bg-[#141414] p-10 rounded-2xl border border-[#2a2a2a]">
              <Eye className="w-12 h-12 text-blue-500 mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="leading-relaxed">
                We see a bright future. We want to be the leader in African logistics. We will set the standard for compliance and ethics. We will expand into the SADC region. We will continue to innovate. Vuyela Group will be the name you trust for generations.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION - MASSIVE SEO BOOSTER */}
        <section className="py-20 px-6 max-w-4xl mx-auto border-t border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                Are you SARS accredited?
              </h3>
              <p className="text-sm">
                Yes. We run a SARS Bonded Warehouse. This is a secure facility. It lets us store imported goods without paying duty immediately. This helps your cash flow. It is fully compliant with South African law.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                Where do you operate?
              </h3>
              <p className="text-sm">
                We are based in Elandsfontein, Gauteng. However, we work nationally. We go to Durban. We go to Cape Town. We cover all major routes. We also do cross-border transport into neighboring countries.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                Do you handle dangerous goods?
              </h3>
              <p className="text-sm">
                Yes, we do. Our drivers are trained for this. Our trucks have the right permits. We follow all safety regulations. We treat every load with care. Safety is our top priority.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to work with us?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join the leading companies that trust Vuyela Group. Let us handle your logistics. You focus on your business.
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