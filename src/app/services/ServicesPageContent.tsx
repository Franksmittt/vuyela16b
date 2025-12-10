'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Warehouse, 
  Truck, 
  Ship, 
  Fuel,
  CheckCircle2,
  ShieldCheck,
  Clock,
  MapPin,
  Target
} from 'lucide-react';
import Link from 'next/link';

export function ServicesPageContent() {
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

  const services = [
    {
      icon: Warehouse,
      title: 'Vuyela Bulk',
      subtitle: 'Warehousing & Handling',
      description: 'Strategic warehousing, stockpiling, and containerization at our Elandsfontein facility. SARS Bonded Warehouse with SOLAS certified weighbridges.',
      href: '/services/bulk',
      features: [
        'SARS Bonded Warehouse',
        'SOLAS Certified Weighbridges',
        'Stockpiling & Storage',
        'Container Packing (6m & 12m)',
        'Bagging Facility',
        'Full Yard Camera Coverage',
      ],
      color: 'bg-[#FFD700]',
    },
    {
      icon: Truck,
      title: 'Vuyela Logistics',
      subtitle: 'Road Freight & Transport',
      description: 'Own fleet operations with 24/7 monitoring. Container logistics, intermodal solutions, and reliable transport across South Africa.',
      href: '/services/logistics',
      features: [
        'Own Fleet Operations',
        '24/7 Live System Tracking',
        'Container Logistics',
        'Intermodal Solutions',
        'Secondary Distribution',
        'Strategic TFR Partnerships',
      ],
      color: 'bg-[#FFD700]',
    },
    {
      icon: Ship,
      title: 'Vuyela Freight',
      subtitle: 'Ocean Freight & Customs',
      description: 'Complete freight forwarding and customs clearing. Strategic partnerships with major shipping lines for global trade facilitation.',
      href: '/services/freight',
      features: [
        'Ocean Freight Management',
        'Customs Clearing',
        'Import & Export Containers',
        'Strategic Shipping Line Partnerships',
        'Border Clearance Services',
        'Documentation & Acquittals',
      ],
      color: 'bg-[#FFD700]',
    },
    {
      icon: Fuel,
      title: 'Vuyela Refuel',
      subtitle: 'Energy Solutions',
      description: 'Premium 50ppm diesel supply with rigorous quality testing. Guaranteed pure fuel with our "Pregnancy Test" protocol.',
      href: '/services/refuel',
      features: [
        '50ppm Diesel Supply',
        'Quality Assurance Testing',
        '80,000Lt Storage Capacity',
        '2 Pumping Stations',
        'Extended Operating Hours',
        'Bulk Fuel Solutions',
      ],
      color: 'bg-[#FFD700]',
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a]">
        <div className="container px-4 sm:px-6 max-w-5xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-[#FFD700] mb-6"
            >
              <Target className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Services</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-poppins text-white mb-6 leading-tight"
            >
              Complete Logistics
              <br />
              <span className="text-[#FFD700]">Solutions</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Four specialized divisions working together to provide comprehensive logistics solutions 
              that keep South Africa moving 24/7, on time, every time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="bg-[#2a2a2a] rounded-lg p-8 border border-[#3a3a3a] hover:border-[#FFD700] transition-all duration-300 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={springConfig}
                >
                  {/* AI Prompt Goal: Icon {service.title} - Square icon/thumbnail representing the service division */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-48 mb-6 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={`https://placehold.co/200x200/111111/D4AF37?text=Icon+${encodeURIComponent(service.title)}`}
                      alt={`${service.title} icon`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                  <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-[#1a1a1a]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                    {service.title}
                  </h3>
                  <p className="text-[#FFD700] text-sm font-medium mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-[#FFD700] font-semibold hover:text-white transition-colors duration-200 group/link mt-auto"
                  >
                    Learn More about {service.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
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
              Ready to Get <span className="text-[#FFD700]">Started?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss your logistics needs and discover how Vuyela Group can help streamline your supply chain.
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

