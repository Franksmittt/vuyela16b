'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
      title: 'Premium 50ppm Diesel',
      description: '50ppm isn\'t just a specification - it\'s a commitment to cleaner emissions and better engine performance. Our diesel meets and exceeds the highest industry standards, but more importantly, it\'s tested before it ever reaches our storage tanks. When you see "50ppm" on our documentation, you can trust that it\'s not just a label; it\'s a verified standard.',
    },
    {
      icon: ShieldCheck,
      title: 'The Pregnancy Test Protocol',
      description: 'We don\'t just test for water and density - we test for paraffin contamination using what we call the "Pregnancy Test." This simple but effective check ensures that contaminated fuel never makes it into our tanks, and therefore never makes it into your equipment. Every batch is tested, every load is verified, and every delivery comes with our guarantee: pure fuel, or it doesn\'t leave our facility.',
    },
    {
      icon: Droplet,
      title: 'Capacity When You Need It',
      description: 'Our 80,000-liter storage capacity with two pumping stations means we can handle high-volume operations without making you wait. Whether you need a single truck fill or a bulk delivery for your entire fleet, we have the capacity and the infrastructure to make it happen efficiently. Large volumes don\'t mean long waits - they mean streamlined service.',
    },
    {
      icon: Clock,
      title: 'Hours That Match Your Operations',
      description: 'Fleet operations don\'t follow a 9-to-5 schedule, and neither do we. Weekdays from 06h00 to 23h00, weekends and public holidays from 07h00 to 15h00 - these aren\'t arbitrary hours; they\'re designed to match when your vehicles need fuel. Early morning starts, late evening operations, weekend shifts - we\'re here when you need us.',
    },
    {
      icon: Zap,
      title: 'Proven Volume Processing',
      description: 'Currently processing 40,000 liters per week isn\'t just a statistic - it\'s proof that we can handle your volume requirements. This isn\'t a new operation struggling to find its footing; it\'s an established service that\'s already proven its capacity and reliability. High volume doesn\'t mean compromised quality; it means tested, proven, reliable fuel supply.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Gate, Not Quality Check',
      description: 'Quality isn\'t something we verify after receiving fuel - it\'s something we test before it enters our tanks. Every delivery must pass our quality checks before we accept it. This means contaminated fuel never touches our storage, and therefore never reaches your equipment. It\'s not a quality check; it\'s a quality gate that protects your operations and our reputation.',
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
    'Visual Inspection - Checks for clarity and color',
    'Temperature Verification - Ensures proper fuel temperature',
    'All tests must pass before receiving into tank',
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
                Dirty diesel doesn't just affect performance - it destroys engines, damages equipment, and costs money. When we launched Vuyela Refuel in April 2024, we did it with one uncompromising principle: never compromise on fuel quality. This isn't just fuel supply; it's fuel integrity.
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
                src="/images/DSC_2098.JPG"
                alt="Fuel storage tanks and pumping station"
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
              Quality <span className="text-[#FFD700]">Assurance</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Rigorous testing protocols ensure only the highest quality fuel
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
                src="/images/refuel-quality-testing.png"
                alt="Fuel quality testing equipment and laboratory"
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
                src="https://placehold.co/800x400/111111/D4AF37?text=Fuel+Pumping+Station"
                alt="Fuel pumping station operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
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
                  src="https://placehold.co/400x300/111111/D4AF37?text=Bulk+Fuel+Delivery"
                  alt="Bulk fuel delivery truck"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
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
              <ul className="space-y-3 mb-6">
                {qualityChecks.map((check, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{check}</span>
                  </li>
                ))}
              </ul>
              {/* Quality Testing Image 5 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-56 rounded-lg overflow-hidden border border-[#3a3a3a]"
              >
                <Image
                  src="/images/refuel-operations.png"
                  alt="Fuel quality testing in laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operating Hours Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a]"
          >
            <div className="w-16 h-16 rounded-lg bg-[#FFD700] flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-[#1a1a1a]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 text-center font-poppins">Operating Hours</h3>
            <p className="text-gray-400 text-sm sm:text-base text-center mb-8 max-w-2xl mx-auto">
              Our extended operating hours are designed to match your fleet's schedule. Whether you need early morning refueling or late evening service, we're here to keep your operations running.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a] text-center">
                <p className="text-[#FFD700] font-semibold text-lg mb-2">Weekdays</p>
                <p className="text-white text-2xl font-bold mb-1">06h00 - 23h00</p>
                <p className="text-gray-400 text-sm">Monday to Friday</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a] text-center">
                <p className="text-[#FFD700] font-semibold text-lg mb-2">Weekends & Holidays</p>
                <p className="text-white text-2xl font-bold mb-1">07h00 - 15h00</p>
                <p className="text-gray-400 text-sm">Saturday, Sunday & Public Holidays</p>
              </div>
            </div>
            
            {/* Operating Hours Images - 3 images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative w-full h-56 rounded-lg overflow-hidden border border-[#3a3a3a]"
              >
                <Image
                  src="/images/DSC_2100.JPG"
                  alt="Fuel operations facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-full h-56 rounded-lg overflow-hidden border border-[#3a3a3a]"
              >
                <Image
                  src="/images/DSC_2099.JPG"
                  alt="Fuel operations facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative w-full h-56 rounded-lg overflow-hidden border border-[#3a3a3a]"
              >
                <Image
                  src="/images/DSC_2096.JPG"
                  alt="Fuel operations facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
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
              Your fleet depends on clean fuel, and your bottom line depends on reliability. Let's discuss your diesel supply requirements and discover how our quality-assured fuel can keep your operations running smoothly, efficiently, and profitably.
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

