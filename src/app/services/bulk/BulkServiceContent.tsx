'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight, 
  Warehouse, 
  CheckCircle2,
  ShieldCheck,
  Clock,
  MapPin,
  Package,
  Truck
} from 'lucide-react';
import Link from 'next/link';

export function BulkServiceContent() {
  const springConfig = {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
    mass: 0.8,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springConfig,
    },
  };

  const features = [
    {
      icon: ShieldCheck,
      title: 'SARS Bonded Warehouse',
      description: 'When your cargo enters our bonded warehouse, you\'re not just storing commodities, you\'re deferring duty payments and streamlining your cash flow. Our registered bond area means your goods can stay in our secure facility while you prepare export documentation, coordinate vessel bookings, or wait for the right market conditions. It\'s logistics that works with your business cycle, not against it.',
    },
    {
      icon: ShieldCheck,
      title: 'SOLAS Certified Weighbridges',
      description: 'International shipping demands accuracy that goes beyond "good enough." Our SOLAS certified weighbridges aren\'t just precise, they\'re internationally recognized. That means no disputes with shipping lines over weight, no delays at port, and complete confidence that your documentation will pass scrutiny anywhere in the world. We didn\'t have to get certified; we chose to because reliability requires it.',
    },
    {
      icon: Warehouse,
      title: 'Strategic Warehousing',
      description: 'Stockpiling isn\'t just about storage, it\'s about timing. Our dedicated warehouse space gives you the flexibility to build inventory when production is high, then move it to market when conditions are right. Whether you\'re managing seasonal production cycles or coordinating with vessel schedules, our warehousing becomes your strategic advantage, not just a storage solution.',
    },
    {
      icon: Package,
      title: 'Professional Containerization',
      description: 'There\'s an art to packing containers correctly, and we\'ve mastered it. Our team understands that how you pack a 6m or 12m container affects everything: weight distribution, customs documentation, and vessel loading efficiency. We don\'t just fill containers; we optimize them, ensuring every cubic meter and every kilogram is accounted for, documented, and ready for international shipping.',
    },
    {
      icon: Package,
      title: 'Custom Bagging Solutions',
      description: 'Not all commodities travel the same way. Some need bagging for retail markets, others for industrial use, and some require specific packaging for international standards. Our bagging facility adapts to your requirements, whether it\'s grain for export, minerals for processing, or specialized packaging for niche markets. Tell us what you need, and we\'ll make it happen.',
    },
    {
      icon: Clock,
      title: 'Always Watching, Always Working',
      description: 'Logistics doesn\'t take weekends off, and neither do we. Our 24/7 operations mean your cargo moves when it needs to move, whether that\'s a midnight container delivery or a Sunday stockpile shift. Full yard camera coverage ensures that even when you can\'t be here, you can see what\'s happening. Continuous monitoring means we\'re always aware, always responsive, always ready.',
    },
  ];

  const services = [
    'Bulk Warehousing & Storage',
    'Stockpiling Services',
    'Container Packing (6m & 12m)',
    'Bagging Operations',
    'Material Handling',
    'Container Delivery to TFR Terminal',
    'Road Haul to Durban Port',
  ];

  const commodities = [
    'Chrome (Concentrate & ROM)',
    'Manganese',
    'Iron Ore',
    'Coal',
    'Ferrochrome',
    'Ferromanganese',
    'Bagged Cargo',
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a]">
        <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 text-[#FFD700] mb-6"
              >
                <Warehouse className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Vuyela Bulk</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-poppins text-white mb-6 leading-tight"
              >
                Warehousing &{' '}
                <span className="text-[#FFD700]">Handling</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8"
              >
                Every bulk commodity tells a story, chrome heading to international markets, manganese destined for steel production, iron ore bound for global trade. At our Elandsfontein facility, we don't just store these commodities; we become their custodians. Our SARS Bonded Warehouse and SOLAS certified weighbridges aren't just certifications, they're our commitment to handling your cargo with the precision, security, and compliance that international trade demands. This is where commodities transform from stockpiles into shipments, where bulk becomes export-ready.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#FFD700] px-8 text-sm font-semibold text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#FFD700] border-2 border-[#FFD700] transition-all duration-300 group"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#FFD700] transition-all duration-300"
                >
                  All Services
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Hero Image 1 */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden border border-[#3a3a3a]"
            >
              <Image
                src="/images/Gemini_Generated_Image_ucwgxsucwgxsucwg.png"
                alt="Warehouse and bulk handling facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Our <span className="text-[#FFD700]">Facilities</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              State-of-the-art infrastructure designed for efficiency and security
            </p>
          </motion.div>

          {/* Feature Image 2 - Before features grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="mb-8"
          >
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#3a3a3a]">
              <Image
                src="/images/Gemini_Generated_Image_z6blgez6blgez6bl.png"
                alt="Warehouse facilities and infrastructure"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={springConfig}
              >
                <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-poppins">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Images Grid Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Loading Bags - Image showing bagging operations with workers loading bags */}
            <motion.div
              variants={itemVariants}
              className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-[#3a3a3a]"
            >
              <Image
                src="/images/Gemini_Generated_Image_ctn26ectn26ectn2.png"
                alt="Bagging operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Weighbridge Action - Image showing weighbridge operations with trucks and containers */}
            <motion.div
              variants={itemVariants}
              className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-[#3a3a3a]"
            >
              <Image
                src="/images/Gemini_Generated_Image_x2ws1x2ws1x2ws1x.png"
                alt="Weighbridge operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services & Commodities */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services Offered */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
              className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                Services <span className="text-[#FFD700]">Offered</span>
              </h3>
              <ul className="space-y-3 mb-6">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{service}</span>
                  </li>
                ))}
              </ul>
              {/* Services Image 4 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-56 rounded-lg overflow-hidden border border-[#3a3a3a]"
              >
                <Image
                  src="/images/Gemini_Generated_Image_l58myil58myil58m.png"
                  alt="Bulk storage and warehousing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            {/* Key Commodities */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
              className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                Key <span className="text-[#FFD700]">Commodities</span>
              </h3>
              <ul className="space-y-3 mb-6">
                {commodities.map((commodity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{commodity}</span>
                  </li>
                ))}
              </ul>
              {/* Commodities Image 5 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-56 rounded-lg overflow-hidden border border-[#3a3a3a]"
              >
                <Image
                  src="/images/Gemini_Generated_Image_kwix6tkwix6tkwix.png"
                  alt="Bulk commodities storage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a] text-center"
          >
            <div className="w-16 h-16 rounded-lg bg-[#FFD700] flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-[#1a1a1a]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">Our Location</h3>
            <p className="text-gray-300 text-lg mb-2 font-semibold">Main Reef Road, Elandsfontein, Gauteng</p>
            <p className="text-gray-400 text-sm mb-6">SARS Bonded Warehouse Facility</p>
            <p className="text-gray-300 text-base max-w-3xl mx-auto leading-relaxed">
              Strategically located in Elandsfontein, our facility offers unparalleled access to major transport routes and industrial hubs. Our position on Main Reef Road provides direct connectivity to the TFR terminal, Durban Port, and key mining regions across South Africa. The SARS Bonded Warehouse status means your cargo benefits from duty deferral and streamlined customs processes, while our SOLAS certified infrastructure ensures international compliance from day one. This isn't just a warehouse location, it's a strategic advantage positioned at the heart of South Africa's logistics network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Ready to Partner with <span className="text-[#FFD700]">Vuyela Bulk?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Every bulk commodity has unique requirements, from handling specifications to packaging needs to timing constraints. Let's talk about your specific challenges and discover how our Elandsfontein facility can become your strategic advantage in bulk logistics.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#FFD700] px-8 sm:px-10 text-sm sm:text-base font-semibold text-[#1a1a1a] shadow-lg hover:bg-[#1a1a1a] hover:text-[#FFD700] border-2 border-[#FFD700] transition-all duration-300 hover:scale-105 group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

