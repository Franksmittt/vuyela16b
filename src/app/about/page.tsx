import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { 
  ShieldCheck, 
  Zap, 
  Handshake, 
  Target, 
  Eye, 
  HelpCircle, 
  ArrowRight,
  CheckCircle2,
  Truck,
  Warehouse,
  Ship,
  Fuel,
  Users,
  Award,
  MapPin,
  Clock,
  TrendingUp,
  Building2,
  Globe,
  Mail,
  Phone
} from 'lucide-react';

// 1. METADATA
export const metadata: Metadata = {
  title: 'About Vuyela Group | Premier Logistics & Supply Chain Solutions',
  description:
    'Vuyela Group is South Africa\'s fastest-growing logistics partner. From a single truck in 2019 to a SARS-bonded powerhouse. Discover our story of resilience, compliance, and commitment to excellence.',
  keywords:
    'about Vuyela Group, logistics company history, South Africa logistics, Elandsfontein, SARS bonded, SOLAS certified, logistics story',
  metadataBase: new URL('https://vuyela.com'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'About Vuyela Group | Premier Logistics & Supply Chain Solutions',
    description: 'From humble beginnings to a national logistics network. Read the story of Vuyela Group\'s commitment to reliability and safety.',
    url: 'https://vuyela.com/about',
    siteName: 'Vuyela Group',
    images: [
      {
        url: '/images/home-facility-aerial.png',
        width: 1200,
        height: 630,
        alt: 'Vuyela Group - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vuyela Group | Premier Logistics & Supply Chain Solutions',
    description: 'From a single truck in 2019 to a SARS-bonded powerhouse. Discover our story of resilience and excellence.',
  },
};

// 2. SCHEMA MARKUP
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are you SARS accredited?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We run a SARS Bonded Warehouse. This is a secure facility that allows us to store imported goods without paying duty immediately. This helps your cash flow and is fully compliant with South African law. Our bonded status means we\'ve met rigorous financial and operational standards set by SARS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do you operate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are based in Elandsfontein, Gauteng, strategically located on Main Reef Road. However, we work nationally, covering all major routes from Durban to Cape Town, Johannesburg to Bloemfontein. We also provide cross-border transport services into neighboring SADC countries, leveraging our network of trusted partners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle dangerous goods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we do. Our drivers are trained and certified for handling dangerous goods. Our trucks have the right permits and comply with all safety regulations. We treat every load with the care and attention it requires. Safety is our top priority, and we maintain strict protocols for all cargo types.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Vuyela different from other logistics companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several things set us apart: We own our fleet, so we control quality. Our directors are hands-on and accessible. We operate 24/7. We have certified infrastructure (SOLAS, SARS Bonded). Most importantly, we treat every shipment as if it\'s our own. This combination of ownership, accessibility, and commitment is rare in the logistics industry.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ensure cargo safety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use multiple layers of security: 24/7 satellite tracking on all vehicles, full yard CCTV coverage, controlled access to our facility, security guard patrols, and comprehensive insurance coverage. When your cargo enters our facility, we become its custodian, and we take that responsibility seriously.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit your facility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We welcome facility visits by appointment. Schedule a tour to see our operations firsthand our weighbridges, warehouse, security systems, and fleet. Our team will walk you through everything and answer all your questions. Seeing is believing, and we\'re proud to show what we\'ve built.',
      },
    },
  ],
};

// 3. STAFF DATA INTERFACE
interface StaffMember {
  name: string;
  role: string;
  email: string | null;
  phone: string | null;
  image: string;
}

// 4. CLEAN DATA ARRAY
const staffMembers: StaffMember[] = [
  // --- DIRECTORS ---
  {
    name: 'Jaco Nagel',
    role: 'Director',
    email: null,
    phone: null,
    image: '/images/staff/Jaco.jpg'
  },
  {
    name: 'Wayne Johnson',
    role: 'Director',
    email: null,
    phone: null,
    image: '/images/staff/wayne.jpg'
  },
  
  // --- ADMINISTRATION & HR ---
  {
    name: 'Melissa Johnson',
    role: 'Accounts Manager',
    email: null,
    phone: null,
    image: '/images/staff/Melissa.jpg'
  },
  {
    name: 'Aneri Nagel',
    role: 'HR Manager',
    email: null,
    phone: null,
    image: '/images/staff/Aneri.jpeg' // Updated to .jpeg
  },

  // --- MANAGEMENT ---
  {
    name: 'Martin Jacobs',
    role: 'Shipping Manager',
    email: 'shipping@vuyelalogistics.co.za',
    phone: '+27 67 881 8419',
    image: '/images/staff/Martin.jpg'
  },
  {
    name: 'Verushka Rossouw',
    role: 'Administration',
    email: null,
    phone: null,
    image: '/images/staff/verushka.jpg'
  },

  // --- OPERATIONS ---
  {
    name: 'Mala Dorsamy',
    role: 'Operations',
    email: 'mala@vuyelalogistics.co.za',
    phone: '+27 73 490 0317',
    image: '/images/staff/mala.png'
  },
  {
    name: 'Mike Dorsamy',
    role: 'Operations',
    email: null,
    phone: null,
    image: '/images/staff/mike.png'
  },
  {
    name: 'Karina Rossouw',
    role: 'Operations',
    email: null,
    phone: null,
    image: '/images/staff/karina.jpg' // Updated to .jpg
  },
  {
    name: 'Deon Rossouw',
    role: 'Refuel Operations',
    email: 'refuel@vuyelalogistics.co.za',
    phone: '+27 67 209 0841',
    image: '/images/staff/deon.jpg'
  },

  // --- YARD MANAGEMENT & STAFF ---
  {
    name: 'Reinhard Strydom',
    role: 'Yard Manager',
    email: null,
    phone: '+27 76 436 7823',
    image: '/images/staff/reinhardt.jpg'
  },
  {
    name: 'Sipho Shabalala',
    role: 'Team Leader',
    email: null,
    phone: null,
    image: '/images/staff/sipho.png'
  },
  {
    name: 'Shine Lombard',
    role: 'Admin',
    email: null,
    phone: null,
    image: '/images/staff/shine.jpg'
  },
  {
    name: 'Alan Kirkhoff',
    role: 'Security',
    email: 'alan@vuyelalogistics.co.za',
    phone: '+27 71 650 0115',
    image: '/images/staff/alan.jpg'
  },
  {
    name: 'Charmaine Erasmus',
    role: 'Clerk',
    email: null,
    phone: null,
    image: '/images/staff/charmaine.png'
  }
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300 selection:bg-[#FFD700]/30">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-xs font-bold uppercase tracking-wider">
            Since 2019
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Built on the Road. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#B8860B]">
              Defined by Excellence.
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-[#FFD700]/30 pl-6">
            Vuyela Group is the engine of modern commerce in South Africa. We started with one truck. Now, we manage a national fleet. We value safety, speed, and trust above all else. Every kilometer driven, every shipment handled, every relationship built this is our story.
          </p>
        </section>

        {/* HERO IMAGE GALLERY */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative w-full h-64 rounded-lg overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/home-facility-aerial.png"
                alt="Vuyela Group Elandsfontein facility aerial view"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={75}
              />
            </div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/facility-trucks.png"
                alt="Vuyela Group fleet and trucks at facility"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={75}
              />
            </div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/warehouse-interior.png"
                alt="Vuyela Group warehouse interior and operations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={75}
              />
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">The Vuyela Journey</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                From a single truck to a comprehensive logistics network our story is one of commitment, growth, and unwavering dedication to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6 leading-relaxed">
                <p className="text-gray-300 text-lg">
                  Vuyela Group began in 2019 with a simple vision: to be the logistics partner that actually cares about your cargo. Jaco and Wayne, our founding directors, didn't come from corporate boardrooms. They came from the road. They understood logistics because they lived it every weighbridge queue, every port deadline, every critical delivery that couldn't wait.
                </p>
                <p className="text-gray-300 text-lg">
                  That first truck wasn't just a vehicle; it was a promise. A promise to be on time, every time. A promise to treat every shipment as if it were our own. A promise to build relationships, not just complete transactions. When we transported commodities for a leading South African mining contractor, we didn't just move cargo we proved that reliability isn't just a service, it's a way of doing business.
                </p>
                <p className="text-gray-300 text-lg">
                  The year 2020 tested everyone. The world stopped, but logistics couldn't. While others struggled, we worked harder. We delivered essential goods when others couldn't. We kept supply chains moving when they needed to move most. This wasn't just business it was our commitment to South Africa. It proved our reliability to our very first clients, and that trust became the foundation of everything we've built since.
                </p>
              </div>

              <div className="relative w-full h-96 rounded-lg overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/facilities-aerial-view.png"
                  alt="Vuyela Group facilities and operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={75}
                />
              </div>
            </div>

            <div className="space-y-6 leading-relaxed mb-12">
              <p className="text-gray-300 text-lg">
                Growth came quickly, but it came carefully. We didn't just buy more trucks we invested in the right technology. We didn't just hire drivers we trained them to be the best. We didn't just expand we focused on safety compliance, operational excellence, and building the infrastructure that would allow us to work with major mining houses, rail operators, and international traders.
              </p>
              <p className="text-gray-300 text-lg">
                Today, we stand as a leader in the industry. Our Elandsfontein facility operates as a SARS Bonded Warehouse, meeting the highest standards of customs compliance. We handle international cargo with the expertise that comes from years of experience. We've expanded from that single truck to a comprehensive logistics network, but the philosophy remains unchanged: when your cargo is in our hands, it's treated like our own.
              </p>
              <p className="text-gray-300 text-lg">
                We're proud of how far we've come, but we're never satisfied. We always want to improve. Every day, we ask ourselves: How can we be better? How can we serve our clients more effectively? How can we contribute to South Africa's economic growth? This drive for continuous improvement is what sets Vuyela apart and it's what will keep us at the forefront of logistics excellence for years to come.
              </p>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a] text-center">
                <Users className="h-8 w-8 text-[#FFD700] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#FFD700] mb-1">60+</div>
                <div className="text-xs text-gray-500 uppercase">Team Members</div>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a] text-center">
                <Award className="h-8 w-8 text-[#FFD700] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#FFD700] mb-1">24/7</div>
                <div className="text-xs text-gray-500 uppercase">Operations</div>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a] text-center">
                <MapPin className="h-8 w-8 text-[#FFD700] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#FFD700] mb-1">2019</div>
                <div className="text-xs text-gray-500 uppercase">Established</div>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a] text-center">
                <Truck className="h-8 w-8 text-[#FFD700] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#FFD700] mb-1">Own</div>
                <div className="text-xs text-gray-500 uppercase">Fleet</div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">Our Growth Timeline</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Key milestones that shaped Vuyela Group into the logistics leader we are today
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {/* 2019 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  <div className="relative w-full min-h-[300px] rounded-lg overflow-hidden border border-[#2a2a2a] order-2 md:order-1">
                    <Image
                      src="/images/logistics-hero.png"
                      alt="Vuyela Group early operations"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20">
                      <span className="text-[#FFD700] text-sm font-bold">2019</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">The Beginning</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We launched with a single vehicle and an unwavering commitment. Our focus was on local distribution, learning every route, understanding every challenge. We promised to be on time, every time and we kept that promise. This foundation of reliability became the cornerstone of everything we've built.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Single truck operation</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Local distribution focus</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Foundation of reliability</li>
                    </ul>
                  </div>
                </div>

                {/* 2021 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20">
                      <span className="text-[#FFD700] text-sm font-bold">2021</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Strategic Expansion</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We expanded our fleet strategically, adding side-tipper trailers for bulk cargo operations. We began moving commodities for the mining sector, understanding the unique requirements of ore transport. Most importantly, we integrated our systems with Transnet Freight Rail, building relationships that would become central to our operations.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Fleet expansion</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Mining sector focus</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> TFR integration</li>
                    </ul>
                  </div>
                  <div className="relative w-full min-h-[300px] rounded-lg overflow-hidden border border-[#2a2a2a]">
                    <Image
                      src="/images/bulk-warehouse-facilities.png"
                      alt="Vuyela Group warehouse and bulk operations"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                    />
                  </div>
                </div>

                {/* 2023 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  <div className="relative w-full min-h-[300px] rounded-lg overflow-hidden border border-[#2a2a2a] order-2 md:order-1">
                    <Image
                      src="/images/weighbridge-solas.png"
                      alt="Vuyela Group SOLAS certified weighbridge"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20">
                      <span className="text-[#FFD700] text-sm font-bold">2023</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Major Accreditation</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We achieved SARS Bonded Warehouse status a major milestone that transformed our capabilities. This accreditation allowed us to store uncleared imports, providing significant cash flow benefits to our clients. More importantly, it proved our financial stability and operational discipline to the market. We also achieved SOLAS certification for our weighbridges, ensuring international shipping compliance.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> SARS Bonded Warehouse</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> SOLAS certification</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> International compliance</li>
                    </ul>
                  </div>
                </div>

                {/* 2024 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20">
                      <span className="text-[#FFD700] text-sm font-bold">2024</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Complete Integration</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We launched our Energy division, Vuyela Refuel, creating a full-circle logistics solution. We now supply premium 50ppm diesel and lubricants, fueling not just our own fleet but our clients' fleets as well. This integration means we control the entire value chain from warehousing to transport to fuel supply. We've become a true one-stop logistics partner.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Energy division launch</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Complete value chain</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> One-stop solutions</li>
                    </ul>
                  </div>
                  <div className="relative w-full min-h-[300px] rounded-lg overflow-hidden border border-[#2a2a2a]">
                    <Image
                      src="/images/refuel-operations.png"
                      alt="Vuyela Refuel energy operations"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR VALUES & CULTURE */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">Our Values & Culture</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                The principles that guide everything we do at Vuyela Group
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center">
                    <Handshake className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Hands-On Leadership</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Jaco and Wayne aren't boardroom directors. They're in the yard, on the phone, solving problems in real-time. When you work with Vuyela, you get direct access to decision-makers who understand logistics from the ground up. Promises made are promises kept, because the people making them are the same ones executing them.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This hands-on approach means we understand your challenges because we face them ourselves. We don't delegate problems we solve them. We don't make excuses we deliver results.
                </p>
              </div>

              <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center">
                    <ShieldCheck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Your Cargo, Our Responsibility</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When your shipment enters our facility, we become its custodian. That means every kilogram is tracked, every container is monitored, and every delivery is guaranteed. We've built our entire operation around this simple principle: if it's in our hands, it's our responsibility to get it where it needs to go, exactly as promised.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This isn't just a slogan it's our operational philosophy. We treat every shipment as if it were our own, because we understand that behind every cargo is a business depending on us.
                </p>
              </div>

              <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Never-Stop Operations</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Logistics doesn't take weekends off, and neither do we. Our 24/7 operations mean your cargo moves when it needs to move, not when business hours allow. With live tracking systems and full yard camera coverage, you're always connected to your shipment, whether it's midnight or midday.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We understand that deadlines don't respect business hours. Vessel schedules don't wait for Monday morning. That's why we operate around the clock, ensuring your cargo is always moving forward.
                </p>
              </div>

              <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Continuous Improvement</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We're proud of how far we've come, but we're never satisfied. We always want to improve. Every day, we ask ourselves: How can we be better? How can we serve our clients more effectively? This drive for continuous improvement is what sets Vuyela apart.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We invest in technology, train our team, upgrade our facilities, and refine our processes not because we have to, but because we want to be the best. Excellence isn't a destination; it's a journey we're committed to every single day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITIES SHOWCASE */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">Our World-Class Facilities</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                State-of-the-art infrastructure that powers our operations
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="relative w-full h-80 rounded-lg overflow-hidden border border-[#2a2a2a]">
                  <Image
                    src="/images/facilities-aerial-view.png"
                    alt="Vuyela Group facilities aerial view"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Elandsfontein Facility</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our main operations hub in Elandsfontein is more than just a warehouse it's a strategic logistics center. Strategically located on Main Reef Road, we have easy access to major transport routes, TFR terminals, and the Port of Durban. Our facility combines cutting-edge technology with hands-on expertise.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                      <span>10,000+ square meters of warehouse space</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                      <span>SOLAS certified weighbridges for international compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                      <span>SARS Bonded Warehouse for deferred duty payments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                      <span>Full yard CCTV coverage for complete security</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-[#2a2a2a]">
                  <Image
                    src="/images/weighbridge-checkpoint.png"
                    alt="SOLAS certified weighbridge checkpoint"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                  />
                </div>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-[#2a2a2a]">
                  <Image
                    src="/images/bulk-warehouse-facilities.png"
                    alt="Bulk warehouse facilities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                  />
                </div>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-[#2a2a2a]">
                  <Image
                    src="/images/warehouse-interior.png"
                    alt="Warehouse interior operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">Why Clients Choose Us</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                We are built on three core pillars that define our approach to logistics excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a]">
                <ShieldCheck className="w-12 h-12 text-[#FFD700] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Safety First</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Safety isn't just a priority it's our foundation. Every operation, every process, every decision starts with safety. We've invested in the certifications, training, and infrastructure that prove our commitment.
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> 24/7 Satellite Tracking</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Goods in Transit Insurance</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Strict Driver Vetting</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Regular Vehicle Maintenance</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> NOSA Safety Standards</li>
                </ul>
              </div>

              <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a]">
                <Zap className="w-12 h-12 text-[#FFD700] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Smart Technology</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We leverage technology to provide transparency, efficiency, and control. Our systems give you real-time visibility into every aspect of your shipment, from collection to delivery.
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Real-time Reporting</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Digital Proof of Delivery</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Inventory Management</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Route Optimization</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Live System Tracking</li>
                </ul>
              </div>

              <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a]">
                <Handshake className="w-12 h-12 text-[#FFD700] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Dedicated Service</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We don't believe in one-size-fits-all solutions. Every client is unique, and every shipment has its own requirements. We build relationships, not just complete transactions.
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Personal Account Managers</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Fast Response Times</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Flexible Contracts</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Custom Logistics Plans</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0"/> Hands-On Director Access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">Our Team</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Meet the dedicated professionals who make Vuyela Group a trusted logistics partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {staffMembers.map((staff, index) => (
                <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] text-center hover:border-[#FFD700]/30 transition-colors">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#FFD700] bg-gray-800">
                    <Image
                      src={staff.image}
                      alt={`${staff.name} - ${staff.role}`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{staff.name}</h3>
                  <p className="text-[#FFD700] text-sm font-medium mb-3">{staff.role}</p>
                  <div className="space-y-1 text-sm text-gray-400">
                    {staff.email ? (
                      <a href={`mailto:${staff.email}`} className="flex items-center justify-center gap-2 hover:text-[#FFD700] transition-colors break-all">
                        <Mail className="w-3 h-3 flex-shrink-0" />
                        {staff.email}
                      </a>
                    ) : (
                      <span className="flex items-center justify-center gap-2 text-gray-600">
                        <Mail className="w-3 h-3 flex-shrink-0" /> -
                      </span>
                    )}
                    {staff.phone ? (
                      <a href={`tel:${staff.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 hover:text-[#FFD700] transition-colors">
                        <Phone className="w-3 h-3 flex-shrink-0" />
                        {staff.phone}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR DIVISIONS */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">Our Four Divisions</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Four specialized divisions working together to provide complete logistics solutions
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#2a2a2a]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center">
                      <Warehouse className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Vuyela Bulk</h3>
                      <p className="text-[#FFD700] text-sm">Warehousing & Handling</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Strategic warehousing, stockpiling, and containerization at our Elandsfontein facility. Our SARS Bonded Warehouse with SOLAS certified weighbridges ensures international compliance and operational excellence.
                  </p>
                  <Link href="/services/bulk" className="inline-flex items-center text-[#FFD700] font-semibold hover:text-white transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#2a2a2a]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center">
                      <Truck className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Vuyela Logistics</h3>
                      <p className="text-[#FFD700] text-sm">Road Freight & Transport</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Own fleet operations with 24/7 monitoring. Container logistics, intermodal solutions, and reliable transport across South Africa. We control our fleet, so we control quality.
                  </p>
                  <Link href="/services/logistics" className="inline-flex items-center text-[#FFD700] font-semibold hover:text-white transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#2a2a2a]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center">
                      <Ship className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Vuyela Freight</h3>
                      <p className="text-[#FFD700] text-sm">Ocean Freight & Customs</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Complete freight forwarding and customs clearing. Strategic partnerships with major shipping lines for global trade facilitation. We connect South Africa to the world.
                  </p>
                  <Link href="/services/freight" className="inline-flex items-center text-[#FFD700] font-semibold hover:text-white transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#2a2a2a]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center">
                      <Fuel className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Vuyela Refuel</h3>
                      <p className="text-[#FFD700] text-sm">Energy Solutions</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Premium 50ppm diesel supply with rigorous quality testing. Guaranteed pure fuel with our "Pregnancy Test" protocol. We fuel our fleet and yours with the same commitment to quality.
                  </p>
                  <Link href="/services/refuel" className="inline-flex items-center text-[#FFD700] font-semibold hover:text-white transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">Our Mission & Vision</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                The principles that guide our journey forward
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-[#141414] p-10 rounded-2xl border border-[#2a2a2a]">
                <Target className="w-12 h-12 text-[#FFD700] mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our mission is simple but profound: treat every shipment as if it's our own. This means that when cargo comes through our gates, it becomes our responsibility: not just to deliver it, but to protect it, track it, and ensure it arrives exactly as promised.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We've built our operations around this principle, from our 24/7 monitoring systems to our hands-on director involvement. Excellence isn't a goal we're working toward; it's the standard we've maintained since day one.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We want to empower South African businesses by providing world-class logistics. We reduce transit times. We cut costs. We ensure your cargo arrives safely. We are not just a vendor. We are a partner in your success.
                </p>
              </div>
              <div className="bg-[#141414] p-10 rounded-2xl border border-[#2a2a2a]">
                <Eye className="w-12 h-12 text-[#FFD700] mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We envision Vuyela Group as the backbone of South African commerce: the reliable partner that makes trade flow seamlessly. Every shipment we handle, every container we move, contributes to something bigger: national economic growth, job creation, and South Africa's position in global markets.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We're not just aiming to be the best logistics company; we're building the infrastructure of trust that allows businesses to scale, exporters to compete, and the economy to thrive. When international partners think of South African logistics, we want Vuyela to come to mind first.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We will set the standard for compliance and ethics. We will expand into the SADC region. We will continue to innovate. Vuyela Group will be the name you trust for generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & CERTIFICATIONS */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">Our Achievements & Certifications</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Certifications and achievements that prove our commitment to excellence
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#0f0f0f] p-6 rounded-xl border border-[#2a2a2a] text-center">
                  <ShieldCheck className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">SOLAS Certified</h3>
                  <p className="text-gray-400 text-sm">Internationally recognized weighbridge certification for accurate cargo weighing</p>
                </div>
                <div className="bg-[#0f0f0f] p-6 rounded-xl border border-[#2a2a2a] text-center">
                  <Building2 className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">SARS Bonded</h3>
                  <p className="text-gray-400 text-sm">Customs bond warehouse status enabling deferred duty payments</p>
                </div>
                <div className="bg-[#0f0f0f] p-6 rounded-xl border border-[#2a2a2a] text-center">
                  <Award className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">NOSA Standards</h3>
                  <p className="text-gray-400 text-sm">Occupational health and safety standards compliance</p>
                </div>
                <div className="bg-[#0f0f0f] p-6 rounded-xl border border-[#2a2a2a] text-center">
                  <Globe className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">International Trade</h3>
                  <p className="text-gray-400 text-sm">Full compliance with international shipping and customs regulations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#1f1f1f]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 text-center font-poppins">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                  Are you SARS accredited?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. We run a SARS Bonded Warehouse. This is a secure facility that allows us to store imported goods without paying duty immediately. This helps your cash flow and is fully compliant with South African law. Our bonded status means we've met rigorous financial and operational standards set by SARS.
                </p>
              </div>
              <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                  Where do you operate?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We are based in Elandsfontein, Gauteng, strategically located on Main Reef Road. However, we work nationally, covering all major routes from Durban to Cape Town, Johannesburg to Bloemfontein. We also provide cross-border transport services into neighboring SADC countries, leveraging our network of trusted partners.
                </p>
              </div>
              <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                  Do you handle dangerous goods?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes, we do. Our drivers are trained and certified for handling dangerous goods. Our trucks have the right permits and comply with all safety regulations. We treat every load with the care and attention it requires. Safety is our top priority, and we maintain strict protocols for all cargo types.
                </p>
              </div>
              <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                  What makes Vuyela different from other logistics companies?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Several things set us apart: We own our fleet, so we control quality. Our directors are hands-on and accessible. We operate 24/7. We have certified infrastructure (SOLAS, SARS Bonded). Most importantly, we treat every shipment as if it's our own. This combination of ownership, accessibility, and commitment is rare in the logistics industry.
                </p>
              </div>
              <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                  How do you ensure cargo safety?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We use multiple layers of security: 24/7 satellite tracking on all vehicles, full yard CCTV coverage, controlled access to our facility, security guard patrols, and comprehensive insurance coverage. When your cargo enters our facility, we become its custodian, and we take that responsibility seriously.
                </p>
              </div>
              <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                  Can I visit your facility?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Absolutely. We welcome facility visits by appointment. Schedule a tour to see our operations firsthand our weighbridges, warehouse, security systems, and fleet. Our team will walk you through everything and answer all your questions. Seeing is believing, and we're proud to show what we've built.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">Ready to Work With Us?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Join the leading companies that trust Vuyela Group. Let us handle your logistics. You focus on your business. Every successful partnership starts with a conversation let's start yours today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-[#FFD700] text-white rounded-lg font-bold hover:bg-[#B8860B] transition-colors flex items-center justify-center gap-2">
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