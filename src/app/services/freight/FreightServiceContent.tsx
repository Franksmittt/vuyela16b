'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight, 
  Ship, 
  CheckCircle2,
  Globe,
  ShieldCheck,
  FileText,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

export function FreightServiceContent() {
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
      icon: Ship,
      title: 'Partnerships That Open Doors',
      description: 'Our relationships with major shipping lines aren\'t just business connections, they\'re partnerships built on trust and performance. When you need space on a vessel, we don\'t just make phone calls; we leverage relationships that we\'ve cultivated over years. This means better rates, priority booking, and access to routes that others can\'t guarantee. Worldwide coverage isn\'t a promise; it\'s a reality built on real relationships with real shipping lines.',
    },
    {
      icon: Globe,
      title: 'From Asia to Everywhere',
      description: 'While Asia remains a primary trade corridor for South African exports, our capabilities extend far beyond. We\'ve facilitated shipments to Europe, the Americas, the Middle East, and beyond. The question isn\'t "Can we ship there?", it\'s "When do you need it there?" Our network of shipping partners ensures that no destination is out of reach, and no requirement is too complex.',
    },
    {
      icon: ShieldCheck,
      title: 'Customs Made Simple',
      description: 'Border clearance isn\'t just paperwork, it\'s navigating complex regulations, understanding tariff codes, and knowing which procedures apply when. Our customs expertise comes from years of handling everything from straightforward exports to complex imports with special requirements. We don\'t just file documentation; we understand the system, anticipate challenges, and solve problems before they become delays. South African borders, neighboring countries, or international destinations, we handle it all.',
    },
    {
      icon: FileText,
      title: 'Documentation That Works',
      description: 'Shipping documentation can make or break an export. Get it wrong, and your cargo sits at port while you fix errors. Get it right, and everything flows smoothly. We handle all documentation, from bills of lading to certificates of origin, from customs declarations to export permits. Our team understands that documentation isn\'t just paperwork; it\'s the foundation of successful international trade. We get it right the first time, every time.',
    },
    {
      icon: Ship,
      title: 'Flexibility That Fits',
      description: 'Not every shipment is a full container, and not every route is standard. We understand that your cargo volumes, timelines, and destinations vary. That\'s why we offer flexible shipping solutions, whether you need one container or one hundred, standard routes or specialized handling. Competitive rates don\'t mean one-size-fits-all; they mean solutions that fit your specific needs and budget. Large volumes or small, we make it work.',
    },
    {
      icon: ShieldCheck,
      title: 'Experience You Can Trust',
      description: 'Decades of combined experience means we\'ve seen it all, from standard container shipments to oversized cargo, from perishable goods to hazardous materials. Our network of carriers isn\'t just a list; it\'s a curated selection of partners we trust with our clients\' cargo. This experience becomes your advantage: we know what works, what doesn\'t, and how to handle challenges before they become problems.',
    },
  ];

  const services = [
    'Ocean Freight Management',
    'Import Container Management',
    'Export Container Management',
    'Customs Clearing & Forwarding',
    'Border Clearance Services',
    'Documentation & Acquittals',
    'Freight Booking Services',
  ];

  const benefits = [
    'Competitive Pricing',
    'Flexible Shipping Routes',
    'Personalized Solutions',
    'Senior Management Involvement',
    'Prompt Service',
    'Multi-Modal Transportation',
    'Global Network Access',
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
                <Ship className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Vuyela Freight</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-poppins text-white mb-6 leading-tight"
              >
                Ocean Freight &{' '}
                <span className="text-[#FFD700]">Customs</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8"
              >
                Ocean freight isn't just about booking space on a vessel, it's about understanding routes, rates, regulations, and relationships. Our strategic partnerships with major shipping lines didn't happen overnight; they were built through years of consistent performance and reliability. Whether you're exporting chrome to Asia, importing machinery from Europe, or moving commodities to any corner of the globe, we have the coverage, the expertise, and the relationships to make it happen. We're not just your average freight forwarder; we're your logistics partner in global trade.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#FFD700] px-8 text-sm font-semibold text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#FFD700] border-2 border-[#FFD700] transition-all duration-300 group"
                >
                  Contact Us
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
                src="/images/freight-port-durban.png"
                alt="Aerial view of Vuyela truck at Port of Durban with Maersk container ship"
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
              Why Choose <span className="text-[#FFD700]">Vuyela Freight</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Trusted South African freight booking agent with decades of experience
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
                src="/images/freight-container-loading.png"
                alt="Reach stacker loading container onto Vuyela truck at port"
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
          {/* Feature Image 3 - After features grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="mt-8"
          >
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#3a3a3a]">
              <Image
                src="/images/freight-shipping-yard.png"
                alt="Reach stacker precision-loading container in shipping yard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services & Benefits */}
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
                  src="/images/weighbridge-checkpoint.png"
                  alt="Vuyela truck on weighbridge with security checkpoint"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
              className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                Customer <span className="text-[#FFD700]">Benefits</span>
              </h3>
              <ul className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
              {/* Benefits Image 5 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-56 rounded-lg overflow-hidden border border-[#3a3a3a]"
              >
                <Image
                  src="/images/freight-container-terminal.png"
                  alt="Volvo truck with refrigerated trailer at container terminal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          </div>
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
              Ready to Ship <span className="text-[#FFD700]">Globally?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Every international shipment is unique, different destinations, different cargo, different timelines. Let's discuss your specific requirements and explore how our shipping partnerships, customs expertise, and global coverage can simplify your international trade.
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

