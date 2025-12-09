'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Fuel, 
  CheckCircle2,
  Clock,
  ShieldCheck,
  Droplet,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export function RefuelServiceContent() {
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
      icon: Droplet,
      title: '50ppm Diesel',
      description: 'Premium quality 50ppm diesel supply meeting the highest industry standards.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      description: 'Rigorous quality testing including water test, density test, and "Pregnancy Test" (paraffin check).',
    },
    {
      icon: Droplet,
      title: '80,000Lt Capacity',
      description: 'Large storage capacity with 2 pumping stations for efficient fuel distribution.',
    },
    {
      icon: Clock,
      title: 'Extended Hours',
      description: 'Daily operations 06h00 to 23h00. Weekends and public holidays: 07h00 to 15h00.',
    },
    {
      icon: Zap,
      title: 'High Volume',
      description: 'Currently processing 40,000Lts per week on an ongoing basis.',
    },
    {
      icon: ShieldCheck,
      title: 'Guaranteed Quality',
      description: 'All diesel must pass quality checks before receiving into our tank.',
    },
  ];

  const services = [
    '50ppm Diesel Supply',
    'Bulk Fuel Solutions',
    'Quality Testing Services',
    'Flexible Delivery Options',
    'Extended Operating Hours',
    'High Volume Capacity',
  ];

  const qualityChecks = [
    'Water Test - Ensures no water contamination',
    'Density Test - Verifies fuel density standards',
    'Pregnancy Test - Checks for paraffin contamination',
    'All tests must pass before receiving into tank',
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
              <Fuel className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Vuyela Refuel</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-poppins text-white mb-6 leading-tight"
            >
              Energy <span className="text-[#FFD700]">Solutions</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8"
            >
              Premium 50ppm diesel supply with rigorous quality testing. Established in April 2024, 
              Vuyela Refuel provides guaranteed pure fuel with our comprehensive "Pregnancy Test" protocol, 
              ensuring only the highest quality diesel reaches your operations.
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
              Quality <span className="text-[#FFD700]">Assurance</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Rigorous testing protocols ensure only the highest quality fuel
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

      {/* Services & Quality Checks */}
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

            {/* Quality Checks */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
              className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                Quality <span className="text-[#FFD700]">Testing</span>
              </h3>
              <ul className="space-y-3">
                {qualityChecks.map((check, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{check}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operating Hours Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a]"
          >
            <div className="w-16 h-16 rounded-lg bg-[#FFD700] flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-[#1a1a1a]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-poppins">Operating Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-[#FFD700] font-semibold mb-2">Weekdays</p>
                <p className="text-gray-300">06h00 to 23h00</p>
              </div>
              <div>
                <p className="text-[#FFD700] font-semibold mb-2">Weekends & Public Holidays</p>
                <p className="text-gray-300">07h00 to 15h00</p>
              </div>
            </div>
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
              Need Quality <span className="text-[#FFD700]">Fuel?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us to discuss your diesel supply requirements.
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

