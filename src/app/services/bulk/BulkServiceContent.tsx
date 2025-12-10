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
      description: 'Registered bond area ensuring secure storage and customs compliance for your commodities.',
    },
    {
      icon: ShieldCheck,
      title: 'SOLAS Certified Weighbridges',
      description: 'Accurate weighing and certification meeting international shipping standards.',
    },
    {
      icon: Warehouse,
      title: 'Strategic Warehousing',
      description: 'Dedicated warehouse space for stockpiling and storage of bulk commodities.',
    },
    {
      icon: Package,
      title: 'Containerization',
      description: 'Professional packing of 6m and 12m containers for vessel bookings.',
    },
    {
      icon: Package,
      title: 'Bagging Facility',
      description: 'Custom bagging services for various commodities based on customer requirements.',
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Full yard camera coverage and continuous monitoring for security and efficiency.',
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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
              Strategic warehousing, stockpiling, and containerization at our Elandsfontein facility. 
              SARS Bonded Warehouse with SOLAS certified weighbridges, ensuring secure and compliant 
              storage for your bulk commodities.
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
              className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden"
            >
              <Image
                src="/images/Gemini_Generated_Image_umq2vsumq2vsumq2.png"
                alt="Bagging operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Weighbridge Action - Image showing weighbridge operations with trucks and containers */}
            <motion.div
              variants={itemVariants}
              className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden"
            >
              <Image
                src="/images/Gemini_Generated_Image_jjm28ajjm28ajjm2.png"
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
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{service}</span>
                  </li>
                ))}
              </ul>
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
              <ul className="space-y-3">
                {commodities.map((commodity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{commodity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-4xl mx-auto">
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
            <p className="text-gray-300 text-lg mb-2">Main Reef Road, Elandsfontein, Gauteng</p>
            <p className="text-gray-400 text-sm">SARS Bonded Warehouse Facility</p>
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
              Contact us to discuss your warehousing and bulk handling needs.
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

