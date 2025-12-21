'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight, 
  Truck, 
  CheckCircle2,
  Clock,
  MapPin,
  Route,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

export function LogisticsServiceContent() {
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
      icon: Truck,
      title: 'Our Fleet, Our Responsibility',
      description: 'We don\'t outsource reliability to third-party contractors. Our own fleet means we control maintenance schedules, driver training, and vehicle standards. When you see a Vuyela truck on the road, you\'re seeing our commitment to quality rolling by, well-maintained, professionally driven, and mission-focused. No excuses, no subcontractor issues, just trucks you can count on.',
    },
    {
      icon: Clock,
      title: 'Never-Stop Logistics',
      description: 'Deadlines don\'t respect business hours, and neither do we. Our 24/7 operations mean your cargo moves when it needs to move, whether that\'s a midnight collection or a weekend delivery. With live tracking systems and full yard camera coverage, you\'re never in the dark. We\'ve built our operations around the reality that logistics never sleeps, and neither should your visibility.',
    },
    {
      icon: Route,
      title: 'Port Connections That Matter',
      description: 'Moving containers to and from Durban isn\'t just transport, it\'s timing. Every day, we coordinate with port authorities, shipping lines, and terminal operators to ensure your containers arrive exactly when they need to. We understand vessel schedules, booking deadlines, and the critical timing that separates successful exports from costly delays. Daily port movements aren\'t just routes; they\'re relationships we\'ve built over years.',
    },
    {
      icon: ShieldCheck,
      title: 'Network That Works',
      description: 'Years of working with TFR, shipping agents, and transport partners means we\'ve built relationships that get results. When you need a favor, when standard procedures won\'t work, when you\'re racing against a deadline, that\'s when our network pays dividends. We don\'t just know people; we know how to get things done, even when the system says it can\'t be done.',
    },
    {
      icon: MapPin,
      title: 'Everywhere You Need Us',
      description: 'From Johannesburg to Cape Town, Durban to Bloemfontein, we cover South Africa with the same reliability wherever we operate. Our nationwide coverage doesn\'t mean we\'re spread thin, it means we\'ve built consistent service standards that travel with our trucks. Same quality, same commitment, same reliability, regardless of distance.',
    },
    {
      icon: Clock,
      title: 'Time Is Money',
      description: 'We understand this better than anyone: every hour a truck sits idle is money lost. For you and for us. That\'s why we\'ve optimized our operations for speed and efficiency, from quick turnarounds at our facility to streamlined port processes. Delays aren\'t just inconvenient; they\'re expensive. That understanding drives everything we do, ensuring your cargo moves fast because time costs money for both of us.',
    },
  ];

  const services = [
    'Road Transport Services',
    'Container Logistics',
    'Intermodal Solutions',
    'Secondary Distribution',
    'Local Logistics',
    'Import Container Delivery',
    'Export Container Collection',
    'Stacking Containers at TFR Terminal',
  ];

  const capabilities = [
    'Single Container Movement',
    'Point A to Point B Transport',
    'Breakbulk Transport (Coils, Containers)',
    'Collections & Deliveries',
    'Time-Sensitive Deliveries',
    'Flexible Scheduling',
    '24/7 Operations',
    'Nationwide Coverage',
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
                <Truck className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Vuyela Logistics</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-poppins text-white mb-6 leading-tight"
              >
                Road Freight &{' '}
                <span className="text-[#FFD700]">Transport</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8"
              >
                Every day, our trucks hit the road with one purpose: getting your cargo where it needs to be, when it needs to be there. Our own fleet means we control maintenance, driver standards, and reliability, no third-party excuses, no blame-shifting. Whether it's coils heading to manufacturing plants, containers racing to catch vessel deadlines, or breakbulk cargo with special handling requirements, we move it all. Daily movements between Durban port, TFR terminals, and destinations across South Africa aren't just routes on a map, they're commitments we keep, one delivery at a time.
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
                src="/images/logistics-hero.png"
                alt="Vuyela logistics fleet and transport operations"
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
              Why Choose <span className="text-[#FFD700]">Vuyela Logistics</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Reliable transport solutions backed by our own fleet and strategic partnerships
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
                src="/images/logistics-why-choose.png"
                alt="Vuyela logistics operations and fleet"
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
                src="/images/logistics-features-after.png"
                alt="Container transport and logistics"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services & Capabilities */}
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
                  src="/images/logistics-services.png"
                  alt="Road transport and logistics services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
              className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                Our <span className="text-[#FFD700]">Capabilities</span>
              </h3>
              <ul className="space-y-3 mb-6">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{capability}</span>
                  </li>
                ))}
              </ul>
              {/* Capabilities Image 5 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-56 rounded-lg overflow-hidden border border-[#3a3a3a]"
              >
                <Image
                  src="/images/logistics-capabilities.png"
                  alt="Fleet operations and capabilities"
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
              Need Transport <span className="text-[#FFD700]">Solutions?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're moving containers, coils, breakbulk, or general freight, every transport requirement is unique. Let's discuss your specific needs and explore how our fleet, our network, and our commitment to reliability can become your competitive advantage.
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

