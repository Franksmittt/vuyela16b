'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Clock, ShieldCheck, Truck, Warehouse, CheckCircle2, Ship, Fuel, Target, Users, Award, MapPin, Eye, Handshake, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* Hero + Slider Container - Fits exactly in viewport */}
      <div className="w-full bg-[#1a1a1a] flex flex-col" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        {/* Hero Section */}
        <motion.section
          className="w-full pt-6 pb-4 sm:pt-8 sm:pb-6 md:pt-12 md:pb-8 relative overflow-hidden flex-1 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero_1.jpg"
              alt="Vuyela Group Operations"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#1a1a1a]/80" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a]/50 to-[#1a1a1a]/70 pointer-events-none" />
          </div>
          
          <div className="container px-4 sm:px-6 relative z-10 max-w-full">
            <motion.div
              className="flex flex-col items-start space-y-3 sm:space-y-4 text-left max-w-4xl"
              {...fadeIn}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-poppins text-white">
                Locally Invested.
                <br />
                <span className="text-[#FFD700]">Globally Connected.</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
                Premier logistics solutions from the heart of Elandsfontein. 
                We deliver precision logistics, bulk handling, and energy solutions 
                that keep South Africa moving 24/7, on time, every time.
              </p>
              <div className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full sm:w-auto pt-2">
                <Link
                  href="/contact"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#FFD700] px-6 sm:px-8 text-sm sm:text-base font-semibold text-[#1a1a1a] shadow-lg hover:bg-[#1a1a1a] hover:text-[#FFD700] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-6 sm:px-8 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-white/10 hover:border-[#FFD700] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Trust Benefits Slider */}
        <section className="w-full py-4 sm:py-5 bg-[#1a1a1a] border-t border-[#2a2a2a] overflow-hidden flex-shrink-0">
        <div className="relative">
          <div className="flex animate-scroll gap-8 whitespace-nowrap">
            {[
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
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-[#2a2a2a] rounded-full border border-[#3a3a3a] flex-shrink-0"
              >
                <item.icon className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                <span className="text-white text-sm font-medium">{item.text}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
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
            ].map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center gap-3 px-6 py-3 bg-[#2a2a2a] rounded-full border border-[#3a3a3a] flex-shrink-0"
              >
                <item.icon className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                <span className="text-white text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* Services Overview Section */}
      <motion.section
        className="w-full py-16 sm:py-20 md:py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 sm:px-6 max-w-full">
          <motion.div
            className="flex flex-col items-center space-y-4 text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-poppins text-[#1a1a1a]">
              Our <span className="text-[#B8860B]">Services</span>
            </h2>
            <p className="max-w-2xl text-gray-600 text-lg">
              Comprehensive logistics solutions across four specialized divisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Warehouse,
                title: 'Vuyela Bulk',
                subtitle: 'Warehousing & Handling',
                description: 'Strategic warehousing, stockpiling, and containerization at our Elandsfontein facility. SARS Bonded Warehouse with SOLAS certified weighbridges.',
                href: '/services/bulk',
                color: 'bg-[#FFD700]',
              },
              {
                icon: Truck,
                title: 'Vuyela Logistics',
                subtitle: 'Road Freight & Transport',
                description: 'Own fleet operations with 24/7 monitoring. Container logistics, intermodal solutions, and reliable transport across South Africa.',
                href: '/services/logistics',
                color: 'bg-[#FFD700]',
              },
              {
                icon: Ship,
                title: 'Vuyela Freight',
                subtitle: 'Ocean Freight & Customs',
                description: 'Complete freight forwarding and customs clearing. Strategic partnerships with major shipping lines for global trade facilitation.',
                href: '/services/freight',
                color: 'bg-[#FFD700]',
              },
              {
                icon: Fuel,
                title: 'Vuyela Refuel',
                subtitle: 'Energy Solutions',
                description: 'Premium 50ppm diesel supply with rigorous quality testing. Guaranteed pure fuel with our "Pregnancy Test" protocol.',
                href: '/services/refuel',
                color: 'bg-[#FFD700]',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] hover:border-[#FFD700] transition-all duration-300 hover:shadow-xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-[#1a1a1a]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                  {service.title}
                </h3>
                <p className="text-[#FFD700] text-sm font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#FFD700] font-semibold hover:text-white transition-colors duration-200 group/link"
                >
                  Learn More about {service.title}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Vuyela Group Section */}
      <motion.section
        className="w-full py-16 sm:py-20 md:py-24 bg-[#1a1a1a]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 sm:px-6 max-w-full">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="inline-flex items-center gap-2 text-[#FFD700] mb-4">
                  <Target className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">About Us</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
                  Built on the Road,{' '}
                  <span className="text-[#FFD700]">Defined by Excellence</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  The Vuyela story is one of resilience and deliberate growth. We commenced operations with a single truck, transporting commodities for a leading South African mining contractor. That single vehicle represented a promise—a commitment to reliability that formed the bedrock of our company culture.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Today, Vuyela Group is a "new generation logistics company" with over 60 dedicated professionals and a strong operational presence in Elandsfontein. We don't just move cargo; we provide lasting solutions to the South African transport market, ensuring that whether you are moving chrome, manganese, or general freight, you are partnered with a team that treats your business as their own.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-[#FFD700] font-semibold hover:text-white transition-colors duration-200 group/link mb-12"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Stats Grid - 1 row, 4 columns */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a]">
                  <Users className="h-8 w-8 text-[#FFD700] mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-1">60+</h3>
                  <p className="text-gray-400 text-sm">Dedicated Professionals</p>
                </div>
                <div className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a]">
                  <Award className="h-8 w-8 text-[#FFD700] mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-1">24/7</h3>
                  <p className="text-gray-400 text-sm">Operations</p>
                </div>
                <div className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a]">
                  <MapPin className="h-8 w-8 text-[#FFD700] mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-1">2019</h3>
                  <p className="text-gray-400 text-sm">Established</p>
                </div>
                <div className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a]">
                  <Truck className="h-8 w-8 text-[#FFD700] mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-1">Own</h3>
                  <p className="text-gray-400 text-sm">Fleet</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Industries We Serve Section */}
      <motion.section
        className="w-full py-16 sm:py-20 md:py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 sm:px-6 max-w-full">
          <motion.div
            className="flex flex-col items-center space-y-4 text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-poppins text-[#1a1a1a]">
              Industries We <span className="text-[#FFD700]">Serve</span>
            </h2>
            <p className="max-w-2xl text-gray-600 text-lg">
              Specialized logistics solutions for key sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] hover:border-[#FFD700] transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Warehouse className="h-8 w-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-poppins">
                Mining Logistics
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                From pit to port. With well-trained staff possessing years of experience in the commodity sector, we provide practical, real-world solutions for the movement of ores and minerals.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                  <span>Chrome (Concentrate & ROM)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                  <span>Manganese & Iron Ore</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                  <span>Coal & Ferroalloys</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] hover:border-[#FFD700] transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-poppins">
                Agricultural Logistics
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Feeding the future. With more than 7 billion people on the planet, the demand on the African agricultural sector is immense. We understand the seasonality and sensitivity of agricultural products.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                  <span>Flexible transport solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                  <span>Seasonal demand management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                  <span>Reliable supply chain partners</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section
        className="w-full py-16 sm:py-20 md:py-24 bg-[#1a1a1a] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a]/50 to-[#1a1a1a] pointer-events-none" />
        <div className="container px-4 sm:px-6 relative z-10 max-w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
                Ready to Move Your{' '}
                <span className="text-[#FFD700]">Business Forward?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Get in touch with our team to discuss your logistics needs. We're here to provide customized solutions that fit your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#FFD700] px-8 text-base font-semibold text-[#1a1a1a] shadow-lg hover:bg-[#1a1a1a] hover:text-[#FFD700] border-2 border-[#FFD700] transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:border-[#FFD700] transition-all duration-300 hover:scale-105"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section
        className="w-full py-16 sm:py-20 md:py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 sm:px-6 max-w-full">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-poppins text-[#1a1a1a] mb-4">
                Our <span className="text-[#FFD700]">Vision & Mission</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Driving South Africa forward through logistics excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] hover:border-[#FFD700] transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-[#1a1a1a]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To stand as the preeminent logistics partner in South Africa, driving national economic growth through decisive action, sustainable expansion, and the seamless integration of local and international supply chains. We envision a future where Vuyela Group is the pulse of African trade, contributing tangibly to the GDP of South Africa by setting the global standard for reliability in logistics and warehousing.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] hover:border-[#FFD700] transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-[#1a1a1a]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To achieve operational excellence through a customer-centric approach that prioritizes the safety, security, and efficiency of every commodity entrusted to us.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Expertise:</strong> Leveraging decades of collective knowledge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Accountability:</strong> Acting as true custodian of customer product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Partnership:</strong> Treating every interaction as a partnership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Integrity:</strong> Operating with transparency and honesty</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Vuyela Section */}
      <motion.section
        className="w-full py-16 sm:py-20 md:py-24 bg-[#1a1a1a]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 sm:px-6 max-w-full">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-poppins text-white mb-4">
              Why Choose <span className="text-[#FFD700]">Vuyela Group?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              What sets us apart in the logistics industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Handshake,
                title: 'Hands-On Approach',
                description: 'Our directors are involved in daily operations, ensuring promises made are promises kept.',
              },
              {
                icon: ShieldCheck,
                title: 'Custodian of Your Product',
                description: 'We accept full responsibility for the safety, protection, and security of your cargo.',
              },
              {
                icon: Clock,
                title: '24/7 Operations',
                description: 'Live system with full yard camera coverage and continuous monitoring for speed and efficiency.',
              },
              {
                icon: Truck,
                title: 'Own Fleet',
                description: 'Total control over reliability and safety with our own fleet of heavy-duty trucks.',
              },
              {
                icon: Award,
                title: 'Certified Excellence',
                description: 'SOLAS certified weighbridges, NOSA safety standards, and SARS Bonded Warehouse facility.',
              },
              {
                icon: TrendingUp,
                title: 'Strategic Partnerships',
                description: 'Strong relationships with TFR, shipping agents, and road freight companies for seamless operations.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#2a2a2a] rounded-xl p-6 border border-[#3a3a3a] hover:border-[#FFD700] transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-[#FFD700] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
