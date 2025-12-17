'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight, 
  Warehouse, 
  Truck,
  CheckCircle2,
  Target,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export function IndustriesPageContent() {
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

  const industries = [
    {
      icon: Warehouse,
      title: 'Mining Logistics',
      description: 'From pit to port—we know this journey intimately. Our team didn\'t learn mining logistics from manuals; they learned it on the ground, handling chrome concentrate, manganese ore, and iron ore through every stage of the supply chain. Years of experience in the commodity sector means we understand what others miss: the weight of ROM versus concentrate, the timing critical to vessel bookings, the documentation required for international trade. When mining companies trust us with their ores and minerals, they\'re trusting partners who speak their language, understand their challenges, and deliver practical, real-world solutions that actually work.',
      commodities: [
        'Chrome (Concentrate & ROM)',
        'Manganese & Iron Ore',
        'Coal & Ferroalloys',
        'Ferrochrome',
        'Ferromanganese',
      ],
      services: [
        'Containerized rail transport',
        'Bulk commodity handling',
        'Stockpiling & storage',
        'Port logistics management',
        'Strategic TFR partnerships',
      ],
    },
    {
      icon: Truck,
      title: 'Agricultural Logistics',
      description: 'Feeding the future means understanding timing like no other industry. When harvest season peaks, there\'s no second chance—grain needs to move while it\'s fresh, fertilizers must arrive before planting windows close, and produce can\'t wait for convenient shipping schedules. We\'ve worked alongside farmers and agribusinesses long enough to understand that agricultural logistics isn\'t just about transport; it\'s about respecting nature\'s calendar. Seasonality isn\'t an inconvenience—it\'s the reality that shapes everything we do. We understand the sensitivity of agricultural products, the urgency of harvest windows, and the critical importance of getting it right when timing matters most.',
      commodities: [
        'Grain & Cereals',
        'Fresh Produce',
        'Agricultural Inputs',
        'Fertilizers',
        'Bagged Cargo',
      ],
      services: [
        'Flexible transport solutions',
        'Seasonal demand management',
        'Reliable supply chain partners',
        'Time-sensitive deliveries',
      ],
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
              <span className="text-sm font-semibold uppercase tracking-wider">Industries</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-poppins text-white mb-6 leading-tight"
            >
              Industries We <span className="text-[#FFD700]">Serve</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Every industry has its rhythm, its challenges, and its critical requirements. Mining operations don't move on a 9-to-5 schedule, and agricultural harvests don't wait for convenient timing. We've built our expertise not by trying to serve everyone, but by deeply understanding the industries we know best. This isn't generic logistics adapted to different sectors—it's specialized knowledge, industry-specific solutions, and partnerships built on understanding what really matters to your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={springConfig}
              >
                {/* AI Prompt Goal: Header image for {industry.title} - {industry.title === 'Mining Logistics' ? 'Ore Stockpiles' : 'Grain Silos'} */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-48 mb-6 rounded-lg overflow-hidden"
                >
                  <Image
                    src={`https://placehold.co/600x300/111111/D4AF37?text=${encodeURIComponent(industry.title === 'Mining Logistics' ? 'Ore Stockpiles' : 'Grain Silos')}`}
                    alt={`${industry.title} header image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <industry.icon className="h-6 w-6 text-[#1a1a1a]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-poppins">
                    {industry.title}
                  </h2>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                  {industry.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Key Commodities</h3>
                    <ul className="space-y-2">
                      {industry.commodities.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Our Services</h3>
                    <ul className="space-y-2">
                      {industry.services.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#FFD700] font-semibold hover:text-white transition-colors duration-200 group"
                >
                  Discuss Your Needs
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
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
              Need Industry-Specific <span className="text-[#FFD700]">Solutions?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Every industry has its own story, its own challenges, and its own requirements. We've chosen to specialize in mining and agricultural logistics because we understand these sectors deeply—not as outsiders looking in, but as partners who've been there, done that, and know what works. Let's discuss how our specialized expertise can become your competitive advantage.
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

