'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Truck,
  Warehouse,
  CheckCircle2,
  Ship,
  Fuel,
  Target,
  Users,
  Award,
  MapPin,
  Eye,
  Handshake,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

const trustItems = [
  { icon: Clock, text: '24/7 Operations' },
  { icon: ShieldCheck, text: 'SOLAS Certified' },
  { icon: Warehouse, text: 'SARS Bonded Warehouse' },
  { icon: CheckCircle2, text: 'Full Yard Camera Coverage' },
  { icon: Truck, text: 'Own Fleet' },
  { icon: ShieldCheck, text: 'NOSA Safety Standards' },
  { icon: CheckCircle2, text: 'Strategic TFR Partnerships' },
  { icon: Clock, text: 'Live System Tracking' },
  { icon: ShieldCheck, text: 'Custodian of Your Product' },
  { icon: CheckCircle2, text: 'Hands-On Directors' },
];

const services = [
  {
    icon: Warehouse,
    title: 'Vuyela Bulk',
    subtitle: 'Warehousing & Handling',
    description:
      'Strategic warehousing, stockpiling, and containerization at our Elandsfontein facility. SARS Bonded Warehouse with SOLAS certified weighbridges.',
    href: '/services/bulk',
    image: '/images/home-service-bulk.png',
  },
  {
    icon: Truck,
    title: 'Vuyela Logistics',
    subtitle: 'Road Freight & Transport',
    description:
      'Own fleet operations with 24/7 monitoring. Container logistics, intermodal solutions, and reliable transport across South Africa.',
    href: '/services/logistics',
    image: '/images/home-service-logistics.png',
  },
  {
    icon: Ship,
    title: 'Vuyela Freight',
    subtitle: 'Ocean Freight & Customs',
    description:
      'Complete freight forwarding and customs clearing. Strategic partnerships with major shipping lines for global trade facilitation.',
    href: '/services/freight',
    image: '/images/home-service-freight.png',
  },
  {
    icon: Fuel,
    title: 'Vuyela Refuel',
    subtitle: 'Energy Solutions',
    description:
      'Premium 50ppm diesel supply with rigorous quality testing. Guaranteed pure fuel with our "Pregnancy Test" protocol.',
    href: '/services/refuel',
    image: '/images/home-service-refuel.png',
  },
];

const whyChoose = [
  {
    icon: Handshake,
    title: 'Hands-On Leadership',
    description:
      "Jaco and Wayne aren't boardroom directors. They're in the yard, on the phone, solving problems in real-time. When you work with Vuyela, you get direct access to decision-makers who understand logistics from the ground up. Promises made are promises kept, because the people making them are the same ones executing them.",
  },
  {
    icon: ShieldCheck,
    title: 'Your Cargo, Our Responsibility',
    description:
      "When your shipment enters our facility, we become its custodian. That means every kilogram is tracked, every container is monitored, and every delivery is guaranteed. We've built our entire operation around this simple principle: if it's in our hands, it's our responsibility to get it where it needs to go, exactly as promised.",
  },
  {
    icon: Clock,
    title: 'Never Sleep Logistics',
    description:
      "Logistics doesn't take weekends off, and neither do we. Our 24/7 operations mean your cargo moves when it needs to move, not when business hours allow. With live tracking systems and full yard camera coverage, you're always connected to your shipment, whether it's midnight or midday.",
  },
  {
    icon: Truck,
    title: 'Own Fleet, Own Control',
    description:
      "We don't rely on third-party contractors when reliability matters most. Our own fleet means we control maintenance schedules, driver training, and vehicle standards. When you see a Vuyela truck on the road, you're seeing our commitment to quality rolling by: maintained, monitored, and mission-focused.",
  },
  {
    icon: Award,
    title: 'Certified by Choice',
    description:
      "SOLAS certified weighbridges, NOSA safety standards, SARS Bonded Warehouse. These aren't just certifications on the wall. They're proof that we've invested in doing things right, from international shipping compliance to workplace safety. We didn't have to meet these standards; we chose to exceed them.",
  },
  {
    icon: TrendingUp,
    title: 'Built on Relationships',
    description:
      "Years of working with TFR, shipping lines, and transport partners means we've built relationships that get results. When you need a favor, when you're racing a deadline, when standard procedures won't work, that's when our network pays dividends. We don't just know people; we know how to get things done.",
  },
];

export default function HomePageClient() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://vuyela.com/#website',
    name: 'Vuyela Group',
    url: 'https://vuyela.com',
    description:
      'Premier logistics solutions provider in South Africa specializing in warehousing, freight, bulk handling, containerization, and energy solutions.',
    publisher: {
      '@id': 'https://vuyela.com/#organization',
    },
    inLanguage: 'en-ZA',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vuyela.com',
      },
    ],
  };

  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex flex-col items-center w-full overflow-hidden">
        {/* Full-bleed hero */}
        <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[#141414]">
          <div className="absolute inset-0">
            <Image
              src="/images/hero_1.jpg"
              alt="Vuyela Group truck hauling bulk commodities"
              fill
              className="object-cover animate-hero-kenburns"
              priority
              fetchPriority="high"
              quality={80}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/90 via-[#141414]/70 to-[#141414]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/80 via-transparent to-[#141414]/30" />
          </div>

          <div className="container relative z-10 px-4 sm:px-6 py-16 md:py-24 max-w-full">
            <div className="max-w-3xl">
              <p className="animate-hero-fade-up text-[#FFD700] font-display text-sm sm:text-base font-semibold tracking-[0.22em] uppercase mb-4">
                Vuyela Group
              </p>
              <h1 className="animate-hero-fade-up-delay text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display text-white uppercase leading-[0.95]">
                Locally Invested.
                <br />
                <span className="text-[#FFD700]">Globally Connected.</span>
              </h1>
              <p className="animate-hero-fade-up-delay-2 mt-6 text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
                Precision logistics, bulk handling, and energy solutions from
                Elandsfontein — keeping South Africa moving 24/7.
              </p>
              <div className="animate-hero-fade-up-delay-2 mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 sm:h-14 items-center justify-center bg-[#FFD700] px-7 sm:px-8 text-sm sm:text-base font-semibold tracking-wide uppercase text-[#141414] hover:bg-white transition-colors duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 sm:h-14 items-center justify-center border border-white/35 bg-transparent px-7 sm:px-8 text-sm sm:text-base font-semibold tracking-wide uppercase text-white hover:border-[#FFD700] hover:text-[#FFD700] transition-colors duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip — below the first viewport composition */}
        <section className="w-full py-4 sm:py-5 bg-[#141414] border-y border-[#2e2e2e] overflow-hidden">
          <div className="relative">
            <div className="flex animate-scroll gap-10 whitespace-nowrap">
              {[...trustItems, ...trustItems].map((item, index) => (
                <div
                  key={`${item.text}-${index}`}
                  className="flex items-center gap-2.5 flex-shrink-0 px-2"
                >
                  <item.icon className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                  <span className="text-white/85 text-sm font-medium tracking-wide">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <motion.section
          className="w-full py-14 sm:py-16 md:py-20 bg-[#f7f6f3]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.35 }}
        >
          <div className="container px-4 sm:px-6 max-w-full">
            <div className="flex flex-col items-start md:items-center text-left md:text-center mb-12 max-w-3xl md:mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display text-[#141414] uppercase">
                Our <span className="text-[#c4a000]">Services</span>
              </h2>
              <p className="mt-3 max-w-2xl text-gray-600 text-lg">
                Comprehensive logistics solutions across four specialized
                divisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-[#141414] group overflow-hidden border border-transparent hover:border-[#FFD700]/50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} service`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      quality={75}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-7 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <service.icon className="h-6 w-6 text-[#FFD700]" />
                      <p className="text-[#FFD700] text-xs font-semibold tracking-[0.16em] uppercase">
                        {service.subtitle}
                      </p>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-display uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-[#FFD700] font-semibold hover:text-white transition-colors duration-200 group/link"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          className="w-full py-14 sm:py-16 md:py-20 bg-[#141414]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.35 }}
        >
          <div className="container px-4 sm:px-6 max-w-full">
            <div className="max-w-6xl mx-auto">
              <div className="inline-flex items-center gap-2 text-[#FFD700] mb-4">
                <Target className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-display uppercase tracking-tight">
                Built on the Road,{' '}
                <span className="text-[#FFD700]">Defined by Excellence</span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  It started with one truck and a handshake. In 2019, Jaco and
                  Wayne took a leap of faith, transporting commodities for a
                  leading South African mining contractor. That single vehicle
                  wasn't just transportation, it was their promise. Every
                  delivery, every kilometer driven, was an opportunity to prove
                  that reliability isn't just a service, it's a way of doing
                  business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                {[
                  {
                    src: '/images/home-facility-aerial.png',
                    alt: 'Elandsfontein facility aerial view',
                  },
                  {
                    src: '/images/facility-trucks.png',
                    alt: 'Vuyela fleet and trucks at facility',
                  },
                  {
                    src: '/images/warehouse-interior.png',
                    alt: 'Vuyela warehouse interior and operations',
                  },
                ].map((image, index) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="relative w-full h-64 overflow-hidden"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      quality={75}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mb-10">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  What began as two directors with boots on the ground has grown
                  into something remarkable. Today, our Elandsfontein facility
                  hums with the energy of 60+ dedicated professionals who share
                  that same commitment. We've expanded from that single truck to
                  a comprehensive logistics network, but the philosophy remains
                  unchanged: when your cargo is in our hands, it's treated like
                  our own. Whether it's chrome heading to Durban port or
                  manganese bound for international markets, every shipment
                  carries the weight of our reputation.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  We don't just move cargo from point A to point B. We
                  understand that behind every shipment is a business depending
                  on us. A mining operation waiting for critical supplies, a
                  manufacturer counting on timely deliveries, or an exporter
                  racing against vessel schedules. That understanding drives
                  everything we do, from our 24/7 operations to our hands-on
                  director involvement in daily logistics challenges.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-[#FFD700] font-semibold hover:text-white transition-colors duration-200 group/link"
                >
                  Discover Our Full Story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {
                    icon: Users,
                    value: '60+',
                    label: 'Dedicated Professionals',
                  },
                  { icon: Award, value: '24/7', label: 'Operations' },
                  { icon: MapPin, value: '2019', label: 'Established' },
                  { icon: Truck, value: 'Own', label: 'Fleet' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#1a1a1a] p-6 border border-[#2e2e2e]"
                  >
                    <stat.icon className="h-7 w-7 text-[#FFD700] mb-3" />
                    <h3 className="text-2xl font-bold text-white mb-1 font-display">
                      {stat.value}
                    </h3>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Industries */}
        <motion.section
          className="w-full py-14 sm:py-16 md:py-20 bg-[#f7f6f3]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.35 }}
        >
          <div className="container px-4 sm:px-6 max-w-full">
            <div className="flex flex-col items-start md:items-center text-left md:text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display text-[#141414] uppercase">
                Industries We <span className="text-[#c4a000]">Serve</span>
              </h2>
              <p className="mt-3 max-w-2xl text-gray-600 text-lg">
                Specialized logistics solutions for key sectors
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <motion.div
                className="bg-[#141414] overflow-hidden border border-transparent hover:border-[#FFD700]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src="/images/Mining Logisticshp.jpg"
                    alt="Mining logistics operations"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Warehouse className="h-6 w-6 text-[#FFD700]" />
                    <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide">
                      Mining Logistics
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    From pit to port, we've been there. Our team didn't learn
                    logistics from textbooks; they learned it on the mine roads,
                    in the weighbridge queues, and during those critical moments
                    when a shipment deadline can't be missed. Years of handling
                    everything from chrome concentrate to ROM means we
                    understand the weight, literally and figuratively, of
                    getting it right the first time.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    {[
                      'Chrome (Concentrate & ROM)',
                      'Manganese & Iron Ore',
                      'Coal & Ferroalloys',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#141414] overflow-hidden border border-transparent hover:border-[#FFD700]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 }}
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src="/images/agricultural-grain-loading.png"
                    alt="Agricultural logistics operations - truck being loaded with grain"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="h-6 w-6 text-[#FFD700]" />
                    <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide">
                      Agricultural Logistics
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Feeding the future starts with understanding timing. When
                    harvest season peaks, there's no second chance. Grain needs
                    to move while it's fresh, fertilizers must arrive before
                    planting windows close, and produce can't wait. We've worked
                    alongside farmers and agribusinesses long enough to know
                    that agricultural logistics isn't just about transport; it's
                    about respecting the seasons.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    {[
                      'Flexible transport solutions',
                      'Seasonal demand management',
                      'Reliable supply chain partners',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="w-full py-16 sm:py-20 md:py-24 bg-[#141414] relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.45 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.08),_transparent_55%)] pointer-events-none" />
          <div className="container px-4 sm:px-6 relative z-10 max-w-full">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 font-display uppercase tracking-tight">
                Ready to Move Your{' '}
                <span className="text-[#FFD700]">Business Forward?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Every successful logistics partnership starts with a
                conversation. Whether you're moving your first shipment or your
                thousandth, our team is here to listen and craft solutions that
                fit your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center bg-[#FFD700] px-8 text-base font-semibold tracking-wide uppercase text-[#141414] hover:bg-white transition-colors duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-14 items-center justify-center border border-white/30 px-8 text-base font-semibold tracking-wide uppercase text-white hover:border-[#FFD700] hover:text-[#FFD700] transition-colors duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Vision & Mission */}
        <motion.section
          className="w-full py-14 sm:py-16 md:py-20 bg-[#f7f6f3]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.35 }}
        >
          <div className="container px-4 sm:px-6 max-w-full">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display text-[#141414] mb-3 uppercase">
                  Our <span className="text-[#c4a000]">Vision & Mission</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Driving South Africa forward through logistics excellence
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#141414] p-8 border-l-4 border-[#FFD700]">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-6 w-6 text-[#FFD700]" />
                    <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We envision Vuyela Group as the backbone of South African
                    commerce: the reliable partner that makes trade flow
                    seamlessly. Every shipment we handle, every container we
                    move, contributes to something bigger: national economic
                    growth, job creation, and South Africa's position in global
                    markets. We're not just aiming to be the best logistics
                    company; we're building the infrastructure of trust that
                    allows businesses to scale, exporters to compete, and the
                    economy to thrive.
                  </p>
                </div>

                <div className="bg-[#141414] p-8 border-l-4 border-[#FFD700]">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-6 w-6 text-[#FFD700]" />
                    <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our mission is simple but profound: treat every shipment as
                    if it's our own. This means that when cargo comes through
                    our gates, it becomes our responsibility — not just to
                    deliver it, but to protect it, track it, and ensure it
                    arrives exactly as promised. Excellence isn't a goal we're
                    working toward; it's the standard we've maintained since day
                    one.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    {[
                      [
                        'Expertise',
                        'Leveraging decades of collective knowledge',
                      ],
                      [
                        'Accountability',
                        'Acting as true custodian of customer product',
                      ],
                      [
                        'Partnership',
                        'Treating every interaction as a partnership',
                      ],
                      ['Integrity', 'Operating with transparency and honesty'],
                    ].map(([title, text]) => (
                      <li key={title} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-white">{title}:</strong>{' '}
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose */}
        <motion.section
          className="w-full py-14 sm:py-16 md:py-20 bg-[#141414]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.35 }}
        >
          <div className="container px-4 sm:px-6 max-w-full">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display text-white mb-3 uppercase">
                  Why Choose{' '}
                  <span className="text-[#FFD700]">Vuyela Group?</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  What sets us apart in the logistics industry
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {whyChoose.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-[#1a1a1a] p-6 border border-[#2e2e2e] hover:border-[#FFD700]/60 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                  >
                    <feature.icon className="h-7 w-7 text-[#FFD700] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3 font-display uppercase tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-[15px]">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
