'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe,
  Handshake,
  Network,
  CheckCircle2,
  ShieldCheck,
  Route
} from 'lucide-react';
import Link from 'next/link';

export function NetworkPageContent() {
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

  const partnerships = [
    {
      category: 'Rail & Infrastructure',
      partners: [
        'Transnet Freight Rail (TFR)',
        'Strategic TFR Partnerships',
        'Rail Terminal Access',
      ],
      description: 'Deep-rooted relationships with Transnet ensuring efficient rail logistics and terminal access.',
      icon: Route,
    },
    {
      category: 'Shipping & Freight',
      partners: [
        'Major Shipping Lines',
        'Shipping Agents',
        'Ship Planners',
        'Global Carrier Network',
      ],
      description: 'Strategic partnerships with major shipping lines ensuring worldwide coverage for all customer requirements.',
      icon: Globe,
    },
    {
      category: 'Road Transport',
      partners: [
        'Registered Road Freight Companies',
        'Strategic Transport Partners',
        'Secondary Distribution Network',
      ],
      description: 'Strong relationships with majority of registered road freight companies for seamless operations.',
      icon: Route,
    },
  ];

  const networkBenefits = [
    {
      icon: Handshake,
      title: 'Strategic Alliances',
      description: 'Long-standing relationships with key players in the logistics industry.',
    },
    {
      icon: Network,
      title: 'Comprehensive Coverage',
      description: 'Access to nationwide and international logistics networks.',
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Partners',
      description: 'Vetted partners who share our commitment to excellence.',
    },
    {
      icon: Route,
      title: 'Multi-Modal Solutions',
      description: 'Seamless integration of rail, road, and sea transport.',
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
              <Network className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Network</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-poppins text-white mb-6 leading-tight"
            >
              The Vuyela <span className="text-[#FFD700]">Network</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Strategic partnerships and relationships that power our logistics network. 
              Strong connections with TFR, shipping agents, road freight companies, and global partners 
              ensure seamless operations for our customers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Network Overview Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="bg-[#2a2a2a] rounded-lg p-8 border border-[#3a3a3a] text-center"
          >
            <div className="w-16 h-16 rounded-lg bg-[#FFD700] flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-[#1a1a1a]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
              Connected Across <span className="text-[#FFD700]">South Africa</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Our network spans from Elandsfontein to major ports, ensuring your cargo moves efficiently 
              through every stage of the supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnerships Section */}
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
              Strategic <span className="text-[#FFD700]">Partnerships</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Key relationships that enable seamless logistics operations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={springConfig}
              >
                <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center mb-4">
                  <partnership.icon className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-poppins">{partnership.category}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{partnership.description}</p>
                <ul className="space-y-2">
                  {partnership.partners.map((partner, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                      <span>{partner}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Network Benefits */}
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
              Network <span className="text-[#FFD700]">Benefits</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              How our strategic network adds value to your operations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {networkBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300 text-center"
                whileHover={{ y: -4 }}
                transition={springConfig}
              >
                <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-poppins">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
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
              Leverage Our <span className="text-[#FFD700]">Network</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Benefit from our strategic partnerships and extensive logistics network. 
              Contact us to see how we can connect your business to seamless logistics solutions.
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

