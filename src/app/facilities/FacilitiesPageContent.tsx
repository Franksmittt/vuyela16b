'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight, 
  ShieldCheck,
  Camera,
  Scale,
  Warehouse,
  Clock,
  CheckCircle2,
  Truck,
  Package,
  MapPin,
  Eye,
  Lock,
  Activity,
  FileCheck,
  Zap,
  Building2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export function FacilitiesPageContent() {
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

  const facilities = [
    {
      icon: Scale,
      title: 'SOLAS Certified Weighbridges',
      description: 'Internationally certified weighbridges meeting SOLAS (Safety of Life at Sea) standards for accurate cargo weighing and certification.',
      benefits: [
        'International shipping compliance',
        'Accurate weight documentation',
        'Reduced shipping disputes',
        'Regulatory compliance assurance'
      ],
      certification: 'SOLAS Certified',
      color: 'bg-[#FFD700]'
    },
    {
      icon: Warehouse,
      title: 'SARS Bonded Warehouse',
      description: 'Registered customs bond area providing secure storage with deferred duty payments and customs compliance for international trade.',
      benefits: [
        'Deferred duty payments',
        'Secure customs-controlled storage',
        'Streamlined import/export processes',
        'Reduced financial burden'
      ],
      certification: 'SARS Registered',
      color: 'bg-[#FFD700]'
    },
    {
      icon: Camera,
      title: 'Full Yard Camera Coverage',
      description: 'Comprehensive CCTV surveillance system covering the entire facility with 24/7 monitoring and recording capabilities.',
      benefits: [
        'Complete security visibility',
        '24/7 monitoring and recording',
        'Incident documentation',
        'Peace of mind for clients'
      ],
      certification: '24/7 Monitored',
      color: 'bg-[#FFD700]'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock facility operations ensuring continuous service availability and rapid response to client needs.',
      benefits: [
        'No downtime delays',
        'Flexible scheduling',
        'Emergency response capability',
        'Maximum operational efficiency'
      ],
      certification: 'Always Open',
      color: 'bg-[#FFD700]'
    },
    {
      icon: ShieldCheck,
      title: 'NOSA Safety Standards',
      description: 'Compliance with NOSA (National Occupational Safety Association) standards ensuring workplace safety and operational excellence.',
      benefits: [
        'Certified safety protocols',
        'Reduced workplace incidents',
        'Insurance benefits',
        'Industry best practices'
      ],
      certification: 'NOSA Certified',
      color: 'bg-[#FFD700]'
    },
    {
      icon: Activity,
      title: 'Live System Tracking',
      description: 'Real-time tracking and monitoring systems providing complete visibility into operations, inventory, and cargo movements.',
      benefits: [
        'Real-time status updates',
        'Complete operational transparency',
        'Proactive issue resolution',
        'Enhanced client communication'
      ],
      certification: 'Live Monitoring',
      color: 'bg-[#FFD700]'
    },
    {
      icon: Package,
      title: 'Containerization Facility',
      description: 'Professional container packing services for 6m and 12m containers with proper handling and documentation.',
      benefits: [
        'Professional packing standards',
        'Vessel-ready containers',
        'Proper documentation',
        'Efficient loading processes'
      ],
      certification: 'ISO Compliant',
      color: 'bg-[#FFD700]'
    },
    {
      icon: Package,
      title: 'Bagging Facility',
      description: 'Custom bagging services for various commodities tailored to specific customer requirements and specifications.',
      benefits: [
        'Custom packaging solutions',
        'Commodity-specific handling',
        'Quality packaging materials',
        'Flexible service options'
      ],
      certification: 'Custom Solutions',
      color: 'bg-[#FFD700]'
    },
    {
      icon: Building2,
      title: 'Strategic Warehousing',
      description: 'Dedicated warehouse space for stockpiling and storage of bulk commodities with optimal organization and accessibility.',
      benefits: [
        'Organized storage systems',
        'Easy inventory access',
        'Bulk handling capability',
        'Efficient space utilization'
      ],
      certification: 'Optimized Storage',
      color: 'bg-[#FFD700]'
    },
    {
      icon: Truck,
      title: 'Own Fleet Operations',
      description: 'Dedicated fleet of vehicles ensuring reliable transport services with full control over scheduling and quality.',
      benefits: [
        'Guaranteed availability',
        'Quality-controlled vehicles',
        'Flexible scheduling',
        'Direct operational control'
      ],
      certification: 'Own Assets',
      color: 'bg-[#FFD700]'
    },
    {
      icon: CheckCircle2,
      title: 'Strategic TFR Partnerships',
      description: 'Established partnerships with Transnet Freight Rail (TFR) enabling efficient intermodal transport solutions.',
      benefits: [
        'Rail connectivity',
        'Intermodal solutions',
        'Cost-effective transport',
        'Expanded reach'
      ],
      certification: 'TFR Partner',
      color: 'bg-[#FFD700]'
    },
    {
      icon: Eye,
      title: 'Custodian Responsibility',
      description: 'Full accountability and responsibility for the safety, protection, and security of client cargo throughout operations.',
      benefits: [
        'Complete accountability',
        'Cargo protection guarantee',
        'Risk mitigation',
        'Client peace of mind'
      ],
      certification: 'Full Liability',
      color: 'bg-[#FFD700]'
    },
  ];

  const trustFeatures = [
    {
      icon: Lock,
      title: 'Security First',
      description: 'Multi-layered security systems protecting your valuable cargo at every stage.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Guaranteed',
      description: 'All facilities meet and exceed industry standards and regulatory requirements.',
    },
    {
      icon: Zap,
      title: 'Operational Excellence',
      description: 'State-of-the-art infrastructure designed for maximum efficiency and reliability.',
    },
    {
      icon: AlertCircle,
      title: 'Transparent Operations',
      description: 'Complete visibility into all operations through live tracking and monitoring systems.',
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#1a1a1a]">
      {/* Hero Section */}
      {/* Facility Aerial Security - Large hero image showing aerial view of facility with security features visible */}
      <section className="relative w-full py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-64 md:h-96"
        >
          <Image
            src="/images/Gemini_Generated_Image_yong6oyong6oyong.png"
            alt="Vuyela facility aerial view"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/60" />
        </motion.div>
      </section>
      <section className="relative w-full py-16 sm:py-20 md:py-24 bg-[#1a1a1a]">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 text-[#FFD700] mb-6"
              >
                <Building2 className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Our Infrastructure</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-poppins text-white mb-6 leading-tight"
              >
                World-Class <span className="text-[#FFD700]">Facilities</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8"
              >
                State-of-the-art infrastructure designed for efficiency, security, and compliance. 
                Our Elandsfontein facility combines cutting-edge technology with industry-leading standards 
                to deliver exceptional service.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#FFD700] px-8 sm:px-10 text-sm sm:text-base font-semibold text-[#1a1a1a] shadow-lg hover:bg-[#1a1a1a] hover:text-[#FFD700] border-2 border-[#FFD700] transition-all duration-300 hover:scale-105 group"
                >
                  Schedule a Visit
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 sm:px-10 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-white/10 hover:border-[#FFD700] transition-all duration-300 hover:scale-105"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image 1 */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden border border-[#3a3a3a]"
            >
              <Image
                src="https://placehold.co/600x400/111111/D4AF37?text=Vuyela+Facility"
                alt="Vuyela facility infrastructure"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-12 sm:py-16 bg-[#2a2a2a]">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
              className="bg-[#1a1a1a] rounded-xl p-8 border border-[#3a3a3a]"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-8 w-8 text-[#1a1a1a]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 font-poppins">Elandsfontein Facility</h3>
                  <p className="text-gray-300 text-base sm:text-lg">
                    Main Reef Road, Elandsfontein, Gauteng, South Africa
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Strategically located for optimal access to major transport routes and ports
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Location Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
              className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#3a3a3a]"
            >
              <Image
                src="https://placehold.co/600x400/111111/D4AF37?text=Facility+Location"
                alt="Vuyela facility location and entrance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#1a1a1a]">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Facility <span className="text-[#FFD700]">Features</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive infrastructure designed to meet the highest standards of security, compliance, and operational excellence
            </p>
          </motion.div>

          {/* Facility Image 2 - Before facilities grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="mb-8"
          >
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#3a3a3a]">
              <Image
                src="https://placehold.co/800x400/111111/D4AF37?text=Facility+Infrastructure"
                alt="Vuyela facility infrastructure and operations"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a2a2a] rounded-xl p-6 lg:p-8 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300 group"
                whileHover={{ y: -4 }}
                transition={springConfig}
              >
                <div className={`${facility.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <facility.icon className="h-8 w-8 text-[#1a1a1a]" />
                </div>
                
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-[#1a1a1a] text-[#FFD700] text-xs font-semibold rounded-full mb-3">
                    {facility.certification}
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 font-poppins">
                  {facility.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                  {facility.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-[#FFD700] uppercase tracking-wide mb-3">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {facility.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Facility Image 3 - After facilities grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="mt-8"
          >
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#3a3a3a]">
              <Image
                src="https://placehold.co/800x400/111111/D4AF37?text=Warehouse+Operations"
                alt="Warehouse operations and facility management"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#2a2a2a]">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Why Trust <span className="text-[#FFD700]">Vuyela</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Our facilities are built on a foundation of trust, security, and operational excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...springConfig, delay: index * 0.1 }}
                className="bg-[#1a1a1a] rounded-xl p-8 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-[#FFD700] flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-[#1a1a1a]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust Features Images - 2 images grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
              className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#3a3a3a]"
            >
              <Image
                src="https://placehold.co/600x400/111111/D4AF37?text=Security+Systems"
                alt="Security systems and monitoring"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
              className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-[#3a3a3a]"
            >
              <Image
                src="https://placehold.co/600x400/111111/D4AF37?text=Operations+Center"
                alt="Operations center and monitoring"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-poppins">
              Experience Our <span className="text-[#FFD700]">Facilities</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              See firsthand how our world-class infrastructure can support your logistics needs. 
              Schedule a facility tour or contact us to learn more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#FFD700] px-8 sm:px-10 text-sm sm:text-base font-semibold text-[#1a1a1a] shadow-lg hover:bg-[#1a1a1a] hover:text-[#FFD700] border-2 border-[#FFD700] transition-all duration-300 hover:scale-105 group"
              >
                Schedule a Visit
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 sm:px-10 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-white/10 hover:border-[#FFD700] transition-all duration-300 hover:scale-105"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

