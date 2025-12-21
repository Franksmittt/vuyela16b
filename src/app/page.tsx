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
          {/* AI Prompt Goal: Hero Truck Dusk - Full-width hero image showing Vuyela truck at dusk/sunset */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero_1.jpg"
              alt="Vuyela Group Operations"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              quality={85}
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
                {/* Service thumbnail image */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="relative w-full h-48 mb-6 rounded-lg overflow-hidden"
                >
                  <Image
                    src={
                      service.title === 'Vuyela Bulk' 
                        ? '/images/home-service-bulk.png'
                        : service.title === 'Vuyela Logistics'
                        ? '/images/home-service-logistics.png'
                        : service.title === 'Vuyela Refuel'
                        ? '/images/home-service-refuel.png'
                        : service.title === 'Vuyela Freight'
                        ? '/images/home-service-freight.png'
                        : `https://placehold.co/300x200/111111/D4AF37?text=${encodeURIComponent(service.title)}`
                    }
                    alt={`${service.title} service`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
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
                
                {/* Text next to image layout */}
                <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                  {/* First paragraph - flows next to image */}
                  <div className="flex-1">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      It started with one truck and a handshake. In 2019, Jaco and Wayne took a leap of faith, transporting commodities for a leading South African mining contractor. That single vehicle wasn't just transportation, it was their promise. Every delivery, every kilometer driven, was an opportunity to prove that reliability isn't just a service, it's a way of doing business. 
                    </p>
                  </div>
                  {/* Elandsfontein facility aerial view */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full md:w-1/2 flex-shrink-0 h-64 md:h-80 rounded-lg overflow-hidden"
                  >
                    <Image
                      src="/images/home-facility-aerial.png"
                      alt="Elandsfontein facility aerial view"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>

                {/* Remaining text flows full width below image */}
                <div className="mb-8">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    What began as two directors with boots on the ground has grown into something remarkable. Today, our Elandsfontein facility hums with the energy of 60+ dedicated professionals who share that same commitment. We've expanded from that single truck to a comprehensive logistics network, but the philosophy remains unchanged: when your cargo is in our hands, it's treated like our own. Whether it's chrome heading to Durban port or manganese bound for international markets, every shipment carries the weight of our reputation.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    We don't just move cargo from point A to point B. We understand that behind every shipment is a business depending on us. A mining operation waiting for critical supplies, a manufacturer counting on timely deliveries, or an exporter racing against vessel schedules. That understanding drives everything we do, from our 24/7 operations to our hands-on director involvement in daily logistics challenges.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-[#FFD700] font-semibold hover:text-white transition-colors duration-200 group/link"
                  >
                    Discover Our Full Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
              {/* Mining Logistics Image - Ground-level medium shot showing mining logistics operations */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-48 mb-6 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/Mining Logisticshp.jpg"
                  alt="Mining logistics operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Warehouse className="h-8 w-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-poppins">
                Mining Logistics
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                From pit to port, we've been there. Our team didn't learn logistics from textbooks; they learned it on the mine roads, in the weighbridge queues, and during those critical moments when a shipment deadline can't be missed. Years of handling everything from chrome concentrate to ROM means we understand the weight, literally and figuratively, of getting it right the first time. When you're moving ores and minerals, there's no room for learning curves. Just reliable, proven solutions.
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
              {/* Agricultural Logistics Image - Ground-level medium shot showing agricultural logistics operations */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-48 mb-6 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/Gemini_Generated_Image_f386w1f386w1f386.png"
                  alt="Agricultural logistics operations - truck being loaded with grain"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-poppins">
                Agricultural Logistics
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Feeding the future starts with understanding timing. When harvest season peaks, there's no second chance. Grain needs to move while it's fresh, fertilizers must arrive before planting windows close, and produce can't wait. We've worked alongside farmers and agribusinesses long enough to know that agricultural logistics isn't just about transport; it's about respecting the seasons, understanding crop cycles, and ensuring that when the sun sets on harvest day, your product is already moving toward market.
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
                Every successful logistics partnership starts with a conversation. Whether you're moving your first shipment or your thousandth, our team is here to listen to your unique challenges and craft solutions that fit your business like a glove. No cookie-cutter approaches, just tailored logistics that make sense for you.
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
                  We envision Vuyela Group as the backbone of South African commerce: the reliable partner that makes trade flow seamlessly. Every shipment we handle, every container we move, contributes to something bigger: national economic growth, job creation, and South Africa's position in global markets. We're not just aiming to be the best logistics company; we're building the infrastructure of trust that allows businesses to scale, exporters to compete, and the economy to thrive. When international partners think of South African logistics, we want Vuyela to come to mind first, known for reliability that sets the global standard.
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
                  Our mission is simple but profound: treat every shipment as if it's our own. This means that when cargo comes through our gates, it becomes our responsibility: not just to deliver it, but to protect it, track it, and ensure it arrives exactly as promised. We've built our operations around this principle, from our 24/7 monitoring systems to our hands-on director involvement. Excellence isn't a goal we're working toward; it's the standard we've maintained since day one.
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
                title: 'Hands-On Leadership',
                description: 'Jaco and Wayne aren\'t boardroom directors. They\'re in the yard, on the phone, solving problems in real-time. When you work with Vuyela, you get direct access to decision-makers who understand logistics from the ground up. Promises made are promises kept, because the people making them are the same ones executing them.',
              },
              {
                icon: ShieldCheck,
                title: 'Your Cargo, Our Responsibility',
                description: 'When your shipment enters our facility, we become its custodian. That means every kilogram is tracked, every container is monitored, and every delivery is guaranteed. We\'ve built our entire operation around this simple principle: if it\'s in our hands, it\'s our responsibility to get it where it needs to go, exactly as promised.',
              },
              {
                icon: Clock,
                title: 'Never Sleep Logistics',
                description: 'Logistics doesn\'t take weekends off, and neither do we. Our 24/7 operations mean your cargo moves when it needs to move, not when business hours allow. With live tracking systems and full yard camera coverage, you\'re always connected to your shipment, whether it\'s midnight or midday.',
              },
              {
                icon: Truck,
                title: 'Own Fleet, Own Control',
                description: 'We don\'t rely on third-party contractors when reliability matters most. Our own fleet means we control maintenance schedules, driver training, and vehicle standards. When you see a Vuyela truck on the road, you\'re seeing our commitment to quality rolling by: maintained, monitored, and mission-focused.',
              },
              {
                icon: Award,
                title: 'Certified by Choice',
                description: 'SOLAS certified weighbridges, NOSA safety standards, SARS Bonded Warehouse. These aren\'t just certifications on the wall. They\'re proof that we\'ve invested in doing things right, from international shipping compliance to workplace safety. We didn\'t have to meet these standards; we chose to exceed them.',
              },
              {
                icon: TrendingUp,
                title: 'Built on Relationships',
                description: 'Years of working with TFR, shipping lines, and transport partners means we\'ve built relationships that get results. When you need a favor, when you\'re racing a deadline, when standard procedures won\'t work, that\'s when our network pays dividends. We don\'t just know people; we know how to get things done.',
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
