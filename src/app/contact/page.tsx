import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { ContactForm } from './ContactForm';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Users,
  Globe,
  Building2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Vuyela Group',
  description:
    'Contact Vuyela Group for logistics solutions. Visit our HQ in Elandsfontein, call 24/7 support, or use our contact form. We serve South Africa and beyond.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Vuyela Group',
    description: 'Reach out to discuss your logistics requirements with our expert team.',
    url: 'https://vuyela.com/contact',
    images: [
      {
        url: '/images/facility-trucks.png',
        width: 1200,
        height: 630,
        alt: 'Vuyela Group - Contact Us',
      },
    ],
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
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'ZA',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      
      <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-300">
        
        {/* HERO SECTION - H1 IS HERE FOR THE SCANNER */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1f1f1f]">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Get in Touch
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Vuyela Group</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl border-l-2 border-orange-500/30 pl-6">
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
                <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Always Available</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Quick Response Times</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Emergency Support</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Direct Director Access</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Users className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Logistics Specialists</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Custom Solutions</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Industry Experience</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Personal Service</li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#222]">
                <Globe className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Nationwide Reach</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> South Africa Coverage</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> International Connections</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Port Access</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500"/> Cross-Border Services</li>
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

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                  <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-300 text-sm">83 Main Reef Road, Elandsfontein, Germiston, 1601</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                  <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Website</h3>
                    <p className="text-gray-300 text-sm">www.vuyelalogistics.co.za</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                  <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Operating Hours</h3>
                    <p className="text-gray-300 text-sm">24/7 Operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#141414] p-10 rounded-2xl border border-[#2a2a2a]">
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
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> Easy access from N3 and N12 highways</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> Close to OR Tambo International Airport</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> Strategic position for nationwide distribution</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> Secure facility with full CCTV coverage</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What You'll See</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                During your visit, you'll see our SOLAS certified weighbridges. You'll see our SARS Bonded Warehouse. You'll see container handling facilities. You'll see our operations center. Our team will walk you through everything.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> SOLAS certified weighbridge operations</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> SARS Bonded Warehouse facilities</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> Container handling and storage areas</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"/> 24/7 security and monitoring systems</li>
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
              <p className="text-orange-500 text-3xl font-bold mb-2">24/7</p>
              <p className="text-gray-400 text-sm">Our facility operates around the clock. Cargo moves day and night. Weekends and holidays included.</p>
            </div>
            <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a] text-center">
              <h3 className="text-xl font-bold text-white mb-3">Customer Support</h3>
              <p className="text-orange-500 text-3xl font-bold mb-2">24/7</p>
              <p className="text-gray-400 text-sm">Our team is always available. Emergency? Urgent shipment? We answer calls and emails anytime.</p>
            </div>
            <div className="bg-[#141414] p-8 rounded-xl border border-[#2a2a2a] text-center">
              <h3 className="text-xl font-bold text-white mb-3">Office Visits</h3>
              <p className="text-orange-500 text-3xl font-bold mb-2">By Appointment</p>
              <p className="text-gray-400 text-sm">Schedule a visit to our facility. We'll give you a full tour. We'll discuss your logistics needs in person.</p>
            </div>
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
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1"/> Port of Durban operations</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1"/> TFR terminal access nationwide</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1"/> Major city distribution</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1"/> Cross-border capabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">International Connections</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Through our freight division, we connect South Africa to the world. Strategic partnerships with major shipping lines give us access to global routes and ports.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1"/> Asia-Pacific shipping routes</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1"/> European trade connections</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1"/> Americas import/export</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1"/> Global carrier network</li>
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
                How quickly do you respond to inquiries?
              </h3>
              <p className="text-sm text-gray-400">
                We respond to all inquiries within 24 hours during business days. For urgent matters, we respond immediately. Our directors are available for direct contact. Emergency situations get priority attention.
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
                Do you handle international shipments?
              </h3>
              <p className="text-sm text-gray-400">
                Yes. Our freight division handles international shipments. We manage ocean freight. We handle customs clearing. We work with major shipping lines. We connect South Africa to the world.
              </p>
            </div>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
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
            <Link href="/services" className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
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
