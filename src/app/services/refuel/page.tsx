import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { 
  ArrowRight, 
  Fuel, 
  CheckCircle2,
  Clock,
  ShieldCheck,
  Droplet,
  Zap,
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vuyela Refuel - Energy Solutions | Vuyela Group',
  description:
    'Premium 50ppm diesel supply with rigorous quality testing. Guaranteed pure fuel with our "Pregnancy Test" protocol.',
  alternates: {
    canonical: '/services/refuel',
  },
  openGraph: {
    title: 'Vuyela Refuel - Energy Solutions',
    description: 'Quality-assured diesel supply with comprehensive testing protocols.',
    url: 'https://vuyela.com/services/refuel',
  },
};

const refuelServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vuyela Refuel - Energy Solutions',
  description: 'Premium 50ppm diesel supply with rigorous quality testing. Guaranteed pure fuel with comprehensive testing protocols.',
  url: 'https://vuyela.com/services/refuel',
  provider: {
    '@type': 'Organization',
    name: 'Vuyela Group',
  },
  serviceType: 'Energy Solutions - Diesel Supply',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
};

export default function RefuelServicePage() {
  const features = [
    {
      icon: Droplet,
      title: 'Premium 50ppm Diesel',
      description: '50ppm isn\'t just a specification - it\'s a commitment to cleaner emissions and better engine performance. Our diesel meets and exceeds the highest industry standards, but more importantly, it\'s tested before it ever reaches our storage tanks. When you see "50ppm" on our documentation, you can trust that it\'s not just a label; it\'s a verified standard.',
    },
    {
      icon: ShieldCheck,
      title: 'The Pregnancy Test Protocol',
      description: 'We don\'t just test for water and density - we test for paraffin contamination using what we call the "Pregnancy Test." This simple but effective check ensures that contaminated fuel never makes it into our tanks, and therefore never makes it into your equipment. Every batch is tested, every load is verified, and every delivery comes with our guarantee: pure fuel, or it doesn\'t leave our facility.',
    },
    {
      icon: Droplet,
      title: 'Capacity When You Need It',
      description: 'Our 80,000-liter storage capacity with two pumping stations means we can handle high-volume operations without making you wait. Whether you need a single truck fill or a bulk delivery for your entire fleet, we have the capacity and the infrastructure to make it happen efficiently.',
    },
    {
      icon: Clock,
      title: 'Hours That Match Your Operations',
      description: 'Fleet operations don\'t follow a 9-to-5 schedule, and neither do we. Weekdays from 06h00 to 23h00, weekends and public holidays from 07h00 to 15h00 - these aren\'t arbitrary hours; they\'re designed to match when your vehicles need fuel.',
    },
    {
      icon: Zap,
      title: 'Proven Volume Processing',
      description: 'Currently processing 40,000 liters per week isn\'t just a statistic - it\'s proof that we can handle your volume requirements. This isn\'t a new operation struggling to find its footing; it\'s an established service that\'s already proven its capacity and reliability.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Gate, Not Quality Check',
      description: 'Quality isn\'t something we verify after receiving fuel - it\'s something we test before it enters our tanks. Every delivery must pass our quality checks before we accept it. This means contaminated fuel never touches our storage, and therefore never reaches your equipment.',
    },
  ];

  const services = [
    '50ppm Diesel Supply',
    'Bulk Fuel Solutions',
    'Quality Testing Services',
    'Flexible Delivery Options',
    'Extended Operating Hours',
    'High Volume Capacity',
  ];

  const qualityChecks = [
    'Water Test - Ensures no water contamination',
    'Density Test - Verifies fuel density standards',
    'Pregnancy Test - Checks for paraffin contamination',
    'Visual Inspection - Checks for clarity and color',
    'Temperature Verification - Ensures proper fuel temperature',
    'All tests must pass before receiving into tank',
  ];

  return (
    <>
      <JsonLd data={refuelServiceSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300">
        
        {/* HERO SECTION - H1 IS HERE FOR THE SCANNER */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Vuyela Refuel
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            On-Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Refueling Services</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-orange-500/30 pl-6">
            Dirty diesel destroys engines. It damages equipment. It costs money. We launched Vuyela Refuel in April 2024. Our principle is simple. Never compromise on fuel quality. This isn't just fuel supply. It's fuel integrity.
          </p>
        </section>

        {/* HERO IMAGE */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Every delivery gets tested. Our "Pregnancy Test" protocol checks quality. Water tests find contamination. Density tests verify standards. Paraffin tests detect problems. Visual inspections confirm clarity. All tests must pass. Fuel enters your tank only after passing.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                The Problem: Contaminated fuel shuts down operations. Equipment breaks. Repairs cost thousands. Many suppliers skip quality checks. Companies suffer the consequences.
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
                src="/images/DSC_2098.JPG"
                alt="Fuel storage tanks and pumping station"
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
              <h2 className="text-3xl font-bold text-white">Why Choose Vuyela Refuel</h2>
              <p className="text-gray-400 mt-4">We guarantee fuel quality.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Quality Testing</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Pregnancy Test Protocol</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Water Contamination Tests</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Density Verification</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Visual Inspections</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Droplet className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Premium 50ppm</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Cleaner Emissions</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Better Engine Performance</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Industry Standards</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Verified Quality</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Clock className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Extended Hours</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Weekdays: 06h00-23h00</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Weekends: 07h00-15h00</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Matches Your Schedule</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Always Available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY ASSURANCE */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Quality Assurance</h2>
          
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#2a2a2a] mb-12">
            <Image
              src="/images/refuel-quality-testing.png"
              alt="Fuel quality testing equipment and laboratory"
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

        {/* SERVICES & QUALITY CHECKS */}
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
            </div>

            <div className="bg-[#0f0f0f] rounded-lg p-6 sm:p-8 border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quality <span className="text-orange-500">Testing</span>
              </h3>
              <ul className="space-y-3 mb-6">
                {qualityChecks.map((check, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{check}</span>
                  </li>
                ))}
              </ul>
              <div className="relative w-full h-56 rounded-lg overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/refuel-operations.png"
                  alt="Fuel quality testing in laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OPERATING HOURS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="bg-[#141414] rounded-lg p-6 sm:p-8 border border-[#2a2a2a]">
            <div className="w-16 h-16 rounded-lg bg-orange-500 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Operating Hours</h3>
            <p className="text-gray-400 text-sm sm:text-base text-center mb-8 max-w-2xl mx-auto">
              Our extended operating hours are designed to match your fleet's schedule. Whether you need early morning refueling or late evening service, we're here to keep your operations running.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222] text-center">
                <p className="text-orange-500 font-semibold text-lg mb-2">Weekdays</p>
                <p className="text-white text-2xl font-bold mb-1">06h00 - 23h00</p>
                <p className="text-gray-400 text-sm">Monday to Friday</p>
              </div>
              <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222] text-center">
                <p className="text-orange-500 font-semibold text-lg mb-2">Weekends & Holidays</p>
                <p className="text-white text-2xl font-bold mb-1">07h00 - 15h00</p>
                <p className="text-gray-400 text-sm">Saturday, Sunday & Public Holidays</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative w-full h-56 rounded-lg overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/DSC_2100.JPG"
                  alt="Fuel operations facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="relative w-full h-56 rounded-lg overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/DSC_2099.JPG"
                  alt="Fuel operations facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="relative w-full h-56 rounded-lg overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/DSC_2096.JPG"
                  alt="Fuel operations facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ON-SITE REFUELING BENEFITS */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">On-Site Refueling Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">Cost Savings</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                On-site refueling cuts costs. Trucks don't drive to stations. Driver time stays productive. Fuel prices stay competitive. Bulk delivery saves money.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Reduced travel costs</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Competitive fuel prices</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Bulk delivery discounts</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Lower operational expenses</li>
              </ul>
            </div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">Downtime Reduction</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Trucks refuel on-site. No trips to stations. Operations keep running. Productivity stays high. Time waste disappears.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> No station trips</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Continuous operations</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Higher productivity</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Time savings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FUEL QUALITY ASSURANCE */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Fuel Quality Assurance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Testing Protocol</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Every delivery gets tested. Water tests check contamination. Density tests verify standards. Pregnancy tests find paraffin. Visual checks confirm clarity. All tests must pass.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Water contamination test</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Density verification</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Paraffin detection</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Visual inspection</li>
              </ul>
            </div>
            <div className="bg-[#141414] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-white mb-4">Quality Guarantee</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                We guarantee fuel quality. Contaminated fuel never ships. Equipment stays protected. Engines run smoothly. Problems get prevented.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Quality guarantee</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Equipment protection</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Engine performance</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"/> Problem prevention</li>
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
                What is the "Pregnancy Test" protocol?
              </h3>
              <p className="text-sm text-gray-400">
                The "Pregnancy Test" is our paraffin contamination check. We test every fuel delivery for paraffin before it enters our tanks. This simple but effective test ensures contaminated fuel never reaches your equipment. It's called the "Pregnancy Test" because it detects contamination that other tests might miss.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                What are your operating hours?
              </h3>
              <p className="text-sm text-gray-400">
                Weekdays: 06h00 to 23h00. Weekends and public holidays: 07h00 to 15h00. These hours match when your fleet needs fuel. Early morning starts work. Late evening operations work. Weekend shifts work. We're here when you need us.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                What is your storage capacity?
              </h3>
              <p className="text-sm text-gray-400">
                We have 80,000 liters of storage capacity. Two pumping stations handle high volumes. We currently process 40,000 liters per week. Large volumes don't mean long waits. We handle bulk deliveries efficiently.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                How do you ensure fuel quality?
              </h3>
              <p className="text-sm text-gray-400">
                We test every delivery before it enters our tanks. Water tests check contamination. Density tests verify standards. Pregnancy tests find paraffin. Visual inspections confirm clarity. Temperature checks verify proper fuel temperature. All tests must pass. Contaminated fuel never ships.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Need Quality Fuel?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Your fleet depends on clean fuel, and your bottom line depends on reliability. Let's discuss your diesel supply requirements and discover how our quality-assured fuel can keep your operations running smoothly, efficiently, and profitably.
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
