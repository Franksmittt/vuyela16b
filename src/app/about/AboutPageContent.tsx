'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Truck, 
  Target, 
  Users, 
  Award, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  TrendingUp,
  Handshake,
  CheckCircle2,
  Eye,
  Heart,
  Zap,
  Globe,
  Building2,
  Route,
  Mail,
  Phone,
  UserCircle,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export function AboutPageContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Premium spring configuration - Critically Damped
  const springConfig = {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
    mass: 0.8,
  };

  // Staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Individual item animation with scale
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: springConfig,
    },
  };

  // Timeline milestones
  const milestones = [
    { year: '2019', title: 'The Beginning', description: 'Started with a single truck, a promise, and unwavering commitment to reliability.' },
    { year: '2020', title: 'Rapid Expansion', description: 'Grew our fleet and established strategic partnerships across South Africa.' },
    { year: '2021', title: 'Facility Launch', description: 'Opened our Elandsfontein facility with SARS Bonded Warehouse certification.' },
    { year: '2022', title: 'SOLAS Certification', description: 'Achieved SOLAS certified weighbridges, setting new industry standards.' },
    { year: '2023', title: 'Network Growth', description: 'Expanded to 60+ professionals and established The Vuyela Network.' },
    { year: '2024', title: 'Industry Leadership', description: 'Recognized as a new generation logistics company driving South African trade.' },
  ];

  // Core values
  const values = [
    {
      icon: Handshake,
      title: 'Partnership First',
      description: 'We treat every interaction as a partnership, ensuring your success is our success.',
    },
    {
      icon: ShieldCheck,
      title: 'Custodian Responsibility',
      description: 'Full accountability for the safety, protection, and security of your cargo.',
    },
    {
      icon: Zap,
      title: 'Operational Excellence',
      description: '24/7 operations with live systems, full yard coverage, and continuous monitoring.',
    },
    {
      icon: Heart,
      title: 'Hands-On Leadership',
      description: 'Directors involved in daily operations, ensuring promises made are promises kept.',
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col w-full overflow-hidden bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 bg-[#1a1a1a]">
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
              <span className="text-sm font-semibold uppercase tracking-wider">Our Story</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-poppins text-white mb-6 leading-tight"
            >
              Built on the Road,
              <br />
              <span className="text-[#FFD700]">Defined by Excellence</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              From a single truck to a new generation logistics company. 
              Our journey is one of resilience, deliberate growth, and unwavering commitment to reliability.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#FFD700] px-8 text-sm font-semibold text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#FFD700] border-2 border-[#FFD700] transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#FFD700] transition-all duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-poppins">
                The Vuyela <span className="text-[#FFD700]">Story</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* First Card - The Beginning */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-2 bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <Truck className="h-5 w-5 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-poppins">The Beginning</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  The Vuyela story is one of resilience and deliberate growth. We commenced operations with a single truck, 
                  transporting commodities for a leading South African mining contractor. That single vehicle represented 
                  a promise, a commitment to reliability that formed the bedrock of our company culture.
                </p>
              </motion.div>

              {/* Second Card - Today */}
              <motion.div
                variants={itemVariants}
                className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-poppins">Today</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Today, Vuyela Group is a "new generation logistics company" with over 60 dedicated professionals and 
                  a strong operational presence in Elandsfontein.
                </p>
              </motion.div>

              {/* Third Card - Our Philosophy */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-3 bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-poppins">Our Philosophy</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    We don't just move cargo; we provide lasting solutions to the South African transport market, ensuring 
                    that whether you are moving chrome, manganese, or general freight, you are partnered with a team that 
                    treats your business as their own.
                  </p>
                  <div className="flex items-center">
                    <p className="text-base sm:text-lg text-white leading-relaxed">
                      Our journey from a single truck to a comprehensive logistics network reflects our core philosophy: 
                      <strong className="text-[#FFD700] block mt-2"> every delivery matters, every relationship counts, and every promise must be kept.</strong>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-poppins">
              Our <span className="text-[#FFD700]">Journey</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Milestones that shaped who we are today
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#2a2a2a]" />
            <div className="absolute left-0 md:left-1/2 top-0 w-0.5 bg-[#FFD700] h-full" style={{ height: '100%' }} />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex flex-col md:flex-row items-start gap-6"
                >
                  {/* Year badge - left side on desktop */}
                  <div className="md:w-32 flex-shrink-0">
                    <div className="flex items-center gap-3 md:flex-col md:items-end">
                      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FFD700] rounded-full border-4 border-[#1a1a1a] z-10" />
                      <span className="text-xl sm:text-2xl font-bold text-[#FFD700] ml-6 md:ml-0 md:mr-4">{milestone.year}</span>
                    </div>
                  </div>

                  {/* Content card - right side on desktop */}
                  <div className="flex-1 md:ml-8">
                    <motion.div
                      className="bg-[#2a2a2a] rounded-lg p-4 sm:p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
                      whileHover={{ x: 4 }}
                      transition={springConfig}
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-poppins">{milestone.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{milestone.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-poppins">
              Our <span className="text-[#FFD700]">Core Values</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              The principles that guide every decision, every delivery, and every interaction
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  transition={springConfig}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center mb-4 flex-shrink-0">
                    <value.icon className="h-6 w-6 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center mb-6 flex-shrink-0">
                <Eye className="h-6 w-6 text-[#1a1a1a]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                To stand as the preeminent logistics partner in South Africa, driving national economic growth through 
                decisive action, sustainable expansion, and the seamless integration of local and international supply chains. 
                We envision a future where Vuyela Group is the pulse of African trade, contributing tangibly to the GDP 
                of South Africa by setting the global standard for reliability in logistics and warehousing.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center mb-6 flex-shrink-0">
                <Target className="h-6 w-6 text-[#1a1a1a]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                To achieve operational excellence through a customer-centric approach that prioritizes the safety, security, 
                and efficiency of every commodity entrusted to us.
              </p>
              <ul className="space-y-3">
                {[
                  'Expertise: Leveraging decades of collective knowledge',
                  'Accountability: Acting as true custodian of customer product',
                  'Partnership: Treating every interaction as a partnership',
                  'Integrity: Operating with transparency and honesty',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              { icon: Users, value: '60+', label: 'Dedicated Professionals' },
              { icon: Clock, value: '24/7', label: 'Operations' },
              { icon: MapPin, value: '2019', label: 'Established' },
              { icon: Truck, value: 'Own', label: 'Fleet' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className="bg-[#2a2a2a] rounded-lg p-4 sm:p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  transition={springConfig}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#FFD700] flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-poppins">{stat.value}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-[#FFD700] mb-6">
              <Users className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-poppins">
              Meet the <span className="text-[#FFD700]">Vuyela Team</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              The dedicated professionals behind our success. From directors to specialists, each team member plays a crucial role in delivering excellence.
            </p>
          </motion.div>

          {/* Directors Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center font-poppins">
              <span className="text-[#FFD700]">Directors</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: 'Jaco',
                  role: 'Director',
                  phone: '+27 72 405 9931',
                  email: 'jaco@vuyelalogistics.co.za',
                  description: 'Co-founder and director, leading strategic operations and business development.',
                },
                {
                  name: 'Wayne',
                  role: 'Director',
                  phone: '+27 73 030 9679',
                  email: 'wayne@vuyelalogistics.co.za',
                  description: 'Co-founder and director, overseeing daily operations and client relationships.',
                },
              ].map((director, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springConfig, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-6 sm:p-8 border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <UserCircle className="h-12 w-12 text-[#1a1a1a]" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 text-center font-poppins">{director.name}</h4>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Briefcase className="h-4 w-4 text-[#FFD700]" />
                      <p className="text-[#FFD700] font-semibold text-sm uppercase tracking-wide">{director.role}</p>
                    </div>
                    <p className="text-gray-300 text-sm text-center mb-6 leading-relaxed">{director.description}</p>
                    <div className="space-y-3 pt-6 border-t border-[#3a3a3a]">
                      <a
                        href={`tel:${director.phone.replace(/\s/g, '')}`}
                        className="flex items-center justify-center gap-3 text-gray-300 hover:text-[#FFD700] transition-colors duration-200 group/item"
                      >
                        <Phone className="h-4 w-4 text-[#FFD700] group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm">{director.phone}</span>
                      </a>
                      <a
                        href={`mailto:${director.email}`}
                        className="flex items-center justify-center gap-3 text-gray-300 hover:text-[#FFD700] transition-colors duration-200 group/item"
                      >
                        <Mail className="h-4 w-4 text-[#FFD700] group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm break-all">{director.email}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Members Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center font-poppins">
              Our <span className="text-[#FFD700]">Team</span>
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  name: 'Melissa',
                  role: 'Accounts',
                  phone: '+27 78 592 4123',
                  email: 'accounts@vuyelalogistics.co.za',
                },
                {
                  name: 'Verushka',
                  role: 'Administration',
                  phone: '+27 82 457 8760',
                  email: 'admin@vuyelalogistics.co.za',
                },
                {
                  name: 'Mala',
                  role: 'Operations',
                  phone: '+27 73 490 0317',
                  email: 'mala@vuyelalogistics.co.za',
                },
                {
                  name: 'Martin',
                  role: 'Shipping',
                  phone: '+27 67 881 8419',
                  email: 'shipping@vuyelalogistics.co.za',
                },
                {
                  name: 'Aneri',
                  role: 'HR',
                  phone: '+27 82 670 9214',
                  email: 'aneri@vuyelalogistics.co.za',
                },
                {
                  name: 'Karina',
                  role: 'Operations',
                  phone: '+27 83 349 5467',
                  email: 'karina.rossouw@vuyelalogistics.co.za',
                },
                {
                  name: 'Mike',
                  role: 'Operations',
                  phone: '+27 62 848 8623',
                  email: 'mike@vuyelalogistics.co.za',
                },
                {
                  name: 'Deon',
                  role: 'Refuel Operations',
                  phone: '+27 67 209 0841',
                  email: 'refuel@vuyelalogistics.co.za',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#2a2a2a] rounded-xl p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300 group"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={springConfig}
                >
                  <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <UserCircle className="h-8 w-8 text-[#1a1a1a]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 text-center font-poppins">{member.name}</h4>
                  <p className="text-[#FFD700] text-sm font-medium text-center mb-4">{member.role}</p>
                  <div className="space-y-2 pt-4 border-t border-[#3a3a3a]">
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors duration-200 text-xs group/item"
                    >
                      <Phone className="h-3 w-3 text-[#FFD700] flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="truncate">{member.phone}</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors duration-200 text-xs group/item"
                    >
                      <Mail className="h-3 w-3 text-[#FFD700] flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="truncate break-all">{member.email}</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-poppins">
              Ready to Partner with <span className="text-[#FFD700]">Vuyela?</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the companies that trust Vuyela Group for their logistics needs. 
              Experience the difference that comes from working with a team that treats your business as their own.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#FFD700] px-8 sm:px-10 text-sm sm:text-base font-semibold text-[#1a1a1a] shadow-lg hover:bg-[#1a1a1a] hover:text-[#FFD700] border-2 border-[#FFD700] transition-all duration-300 hover:scale-105 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 sm:px-10 text-sm sm:text-base font-semibold text-white hover:bg-white/10 hover:border-[#FFD700] transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

