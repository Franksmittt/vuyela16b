import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { ContactForm } from './ContactForm';
import { 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Users,
  Globe,
  Warehouse,
  Truck,
  Ship,
  Fuel
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Vuyela Group',
  description:
    'Contact Vuyela Group for logistics solutions. Visit our HQ in Elandsfontein, call 24/7 support, or use our contact form. We serve South Africa and beyond.',
  keywords:
    'contact Vuyela Group, logistics contact, Elandsfontein, South Africa logistics, get quote, logistics inquiry',
  metadataBase: new URL('https://vuyela.com'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Contact Us | Vuyela Group',
    description: 'Reach out to discuss your logistics requirements with our expert team. 24/7 support available.',
    url: 'https://vuyela.com/contact',
    siteName: 'Vuyela Group',
    images: [
      {
        url: '/images/facility-trucks.png',
        width: 1200,
        height: 630,
        alt: 'Vuyela Group - Contact Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Vuyela Group',
    description: 'Contact Vuyela Group for logistics solutions. 24/7 support available.',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Us | Vuyela Group',
  description: 'Get in touch with Vuyela Group for your logistics needs.',
  url: 'https://vuyela.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'Vuyela Group',
    '@id': 'https://vuyela.com/#organization',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'ZA',
    },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly do you respond to inquiries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We respond to all inquiries within 24 hours during business days. For urgent matters, we respond immediately. Our directors are available for direct contact. Emergency situations get priority attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit your facility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We welcome facility visits by appointment. Schedule a tour to see our operations. You\'ll see our weighbridges, warehouse, and security systems. Our team will answer all your questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle international shipments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our freight division handles international shipments. We manage ocean freight. We handle customs clearing. We work with major shipping lines. We connect South Africa to the world.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services can you provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide four main services. Vuyela Bulk handles warehousing. Vuyela Logistics handles transport. Vuyela Freight handles ocean shipping. Vuyela Refuel handles fuel supply. We can combine these services for complete solutions.',
      },
    },
  ],
};

// 1. Define the Interface
interface StaffMember {
  name: string;
  role: string;
  email: string | null;
  phone: string | null;
  image: string;
}

// 2. Strictly typed data array with updated Titles and Phone numbers
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

  // --- YARD MANAGEMENT & LEADERSHIP ---
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

  // --- YARD STAFF & SECURITY ---
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

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={faqSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-xs font-bold uppercase tracking-wider">
            Get in Touch
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#B8860B]">Vuyela Group</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-[#FFD700]/30 pl-6">
            Ready to partner with us? Contact our team. We discuss your logistics needs. We provide solutions. We deliver excellence. Our team operates 24/7. We respond quickly. We solve problems.
          </p>
        </section>

        {/* CORE BENEFITS SECTION */}
        <section className="py-20 bg-[#141414] border-y border-[#1f1f1f]">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Why Contact Us</h2>
              <p className="text-gray-400 mt-4">We make logistics simple.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <ShieldCheck className="w-10 h-10 text-[#FFD700] mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Always Available</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Quick Response Times</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Emergency Support</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Direct Director Access</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Users className="w-10 h-10 text-[#FFD700] mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Logistics Specialists</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Custom Solutions</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Industry Experience</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Personal Service</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Globe className="w-10 h-10 text-[#FFD700] mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Nationwide Reach</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> South Africa Coverage</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> International Connections</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Port Access</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700]"/> Cross-Border Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFORMATION & FORM */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  Reach out through any channel. Our team is available 24/7. We respond quickly. We solve problems.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-300 text-sm">83 Main Reef Road, Elandsfontein, Germiston, 1601</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Website</h3>
                    <p className="text-gray-300 text-sm">www.vuyelalogistics.co.za</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Operating Hours</h3>
                    <p className="text-gray-300 text-sm">24/7 Operations</p>
                  </div>
                </div>

                {/* Our Divisions */}
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-white mb-3">Our Divisions</h3>
                  <div className="space-y-3">
                    <Link href="/services/bulk" className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:border-[#FFD700]/30 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700] transition-colors">
                        <Warehouse className="h-5 w-5 text-[#FFD700] group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm group-hover:text-[#FFD700] transition-colors">Vuyela Bulk</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-[#FFD700] transition-colors" />
                    </Link>

                    <Link href="/services/logistics" className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:border-[#FFD700]/30 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700] transition-colors">
                        <Truck className="h-5 w-5 text-[#FFD700] group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm group-hover:text-[#FFD700] transition-colors">Vuyela Logistics</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-[#FFD700] transition-colors" />
                    </Link>

                    <Link href="/services/freight" className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:border-[#FFD700]/30 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700] transition-colors">
                        <Ship className="h-5 w-5 text-[#FFD700] group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm group-hover:text-[#FFD700] transition-colors">Vuyela Freight</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-[#FFD700] transition-colors" />
                    </Link>

                    <Link href="/services/refuel" className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:border-[#FFD700]/30 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700] transition-colors">
                        <Fuel className="h-5 w-5 text-[#FFD700] group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm group-hover:text-[#FFD700] transition-colors">Vuyela Refuel</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-[#FFD700] transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#141414] p-10 rounded-2xl border border-[#2a2a2a] h-full">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below. We'll respond within 24 hours. For urgent matters, call us directly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION DETAILS */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Visit Our Headquarters</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our Elandsfontein facility is the heart of operations. We're located at 83 Main Reef Road. This location gives us easy access to major transport routes. We're close to the Port of Durban. We're near TFR terminals.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> Easy access from N3 and N12 highways</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> Close to OR Tambo International Airport</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> Strategic position for nationwide distribution</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> Secure facility with full CCTV coverage</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What You'll See</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                During your visit, you'll see our SOLAS certified weighbridges. You'll see our SARS Bonded Warehouse. You'll see container handling facilities. You'll see our operations center. Our team will walk you through everything.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> SOLAS certified weighbridge operations</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> SARS Bonded Warehouse facilities</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> Container handling and storage areas</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5"/> 24/7 security and monitoring systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SUPPORT HOURS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Support Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a] text-center">
              <h3 className="text-xl font-bold text-white mb-3">Operations</h3>
              <p className="text-[#FFD700] text-3xl font-bold mb-2">24/7</p>
              <p className="text-gray-400 text-sm">Our facility operates around the clock. Cargo moves day and night. Weekends and holidays included.</p>
            </div>
            <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a] text-center">
              <h3 className="text-xl font-bold text-white mb-3">Customer Support</h3>
              <p className="text-[#FFD700] text-3xl font-bold mb-2">24/7</p>
              <p className="text-gray-400 text-sm">Our team is always available. Emergency? Urgent shipment? We answer calls and emails anytime.</p>
            </div>
            <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a] text-center">
              <h3 className="text-xl font-bold text-white mb-3">Office Visits</h3>
              <p className="text-[#FFD700] text-3xl font-bold mb-2">By Appointment</p>
              <p className="text-gray-400 text-sm">Schedule a visit to our facility. We'll give you a full tour. We'll discuss your logistics needs in person.</p>
            </div>
          </div>
        </section>

        {/* TEAM SECTION - STAFF MAP */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the dedicated professionals who make Vuyela Group a trusted logistics partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
                    <a href={`mailto:${staff.email}`} className="block hover:text-[#FFD700] transition-colors break-all">
                      {staff.email}
                    </a>
                  ) : (
                     <span className="block text-gray-600">-</span>
                  )}
                  {staff.phone ? (
                    <a href={`tel:${staff.phone.replace(/\s/g, '')}`} className="block hover:text-[#FFD700] transition-colors">
                      {staff.phone}
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GLOBAL REACH */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#141414] border-y border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Global Reach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">South Africa Coverage</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We operate nationwide. We cover all major cities and ports. From Durban to Cape Town. From Johannesburg to Bloemfontein. Our network covers every corner of South Africa.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Port of Durban operations</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> TFR terminal access nationwide</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Major city distribution</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Cross-border capabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">International Connections</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Through our freight division, we connect South Africa to the world. Strategic partnerships with major shipping lines give us access to global routes and ports.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Asia-Pacific shipping routes</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> European trade connections</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Americas import/export</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-1"/> Global carrier network</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#1f1f1f]">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                How quickly do you respond to inquiries?
              </h3>
              <p className="text-sm text-gray-400">
                We respond to all inquiries within 24 hours during business days. For urgent matters, we respond immediately. Our directors are available for direct contact. Emergency situations get priority attention.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                Can I visit your facility?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. We welcome facility visits by appointment. Schedule a tour to see our operations. You'll see our weighbridges, warehouse, and security systems. Our team will answer all your questions.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                Do you handle international shipments?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. Our freight division handles international shipments. We manage ocean freight. We handle customs clearing. We work with major shipping lines. We connect South Africa to the world.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                What services can you provide?
              </h3>
              <p className="text-sm text-gray-400">
                We provide four main services. Vuyela Bulk handles warehousing. Vuyela Logistics handles transport. Vuyela Freight handles ocean shipping. Vuyela Refuel handles fuel supply. We can combine these services for complete solutions.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-[#141414] text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to work with us?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join leading companies that trust Vuyela Group. Let us handle your logistics. You focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" className="px-8 py-4 bg-[#FFD700] text-white rounded-lg font-bold hover:bg-[#FFD700] transition-colors flex items-center justify-center gap-2">
              Our Services <ArrowRight className="w-5 h-5" />
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