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
import Image from 'next/image';
import { useRef } from 'react';

export default function AboutPageContent() {
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
    { 
      year: '2019', 
      title: 'The Beginning', 
      description: 'One truck, two directors, one contract. That\'s how it started. Jaco and Wayne took a leap of faith, betting everything on a simple principle: if you deliver consistently, clients will trust you with more. That first truck didn\'t just transport commodities—it carried the weight of their vision. Every kilometer driven, every delivery completed, was proof that reliability builds reputation.' 
    },
    { 
      year: '2020', 
      title: 'Building Trust', 
      description: 'Year two wasn\'t about rapid growth—it was about earning trust. We expanded our fleet carefully, choosing partners who shared our values. Every new truck meant new capacity, but more importantly, it meant new opportunities to prove ourselves. We established relationships with TFR and shipping lines that would become the foundation of our network. Growth came, but it came through reputation, not marketing.' 
    },
    { 
      year: '2021', 
      title: 'A Home Base', 
      description: 'The Elandsfontein facility wasn\'t just a warehouse—it was a statement. By achieving SARS Bonded Warehouse certification, we were telling the market: we\'re serious about international trade. This was our commitment to being more than a transport company; we were becoming a complete logistics solution. The facility became the heart of our operations, where cargo, containers, and commodities flowed through our hands with precision.' 
    },
    { 
      year: '2022', 
      title: 'Raising Standards', 
      description: 'SOLAS certification wasn\'t necessary for our business—we pursued it anyway. Why? Because excellence isn\'t about meeting minimum standards; it\'s about exceeding them. Our certified weighbridges meant international shipping compliance, reduced disputes, and absolute confidence in weight documentation. We weren\'t just investing in equipment; we were investing in credibility that would open doors globally.' 
    },
    { 
      year: '2023', 
      title: 'The Vuyela Family', 
      description: 'Reaching 60+ professionals wasn\'t just about numbers—it was about finding the right people. Each team member who joined us brought expertise, commitment, and alignment with our values. The Vuyela Network became more than a logistics operation; it became a community of professionals who understood that in logistics, reputation is everything. We didn\'t just hire employees; we built a team.' 
    },
    { 
      year: '2024', 
      title: 'Leading the Way', 
      description: 'Five years in, we\'re recognized as a new generation logistics company—but we haven\'t forgotten where we started. We still operate with the same principles: hands-on leadership, personal accountability, and unwavering reliability. The difference? Now we have the infrastructure, team, and network to deliver on a scale that matches our ambition. The journey continues, but the foundation remains the same.' 
    },
  ];

  // Core values
  const values = [
    {
      icon: Handshake,
      title: 'Partnership, Not Transactions',
      description: 'We don\'t see ourselves as a vendor; we see ourselves as your logistics partner. When you succeed, we succeed. When you face a challenge, we face it with you. This isn\'t just a business relationship—it\'s a commitment to your long-term success. That\'s why clients come back year after year, and why referrals make up a significant portion of our business. Partnership means we\'re invested in your outcome, not just our invoice.',
    },
    {
      icon: ShieldCheck,
      title: 'Custodian of Your Cargo',
      description: 'The moment your cargo enters our facility or our trucks, we become its custodian. That word—custodian—carries weight. It means we\'re not just handling your shipment; we\'re protecting it, tracking it, and taking full responsibility for its safety and security. We\'ve built our entire operation around this principle: if it\'s in our hands, it\'s our responsibility. No excuses, no exceptions.',
    },
    {
      icon: Zap,
      title: 'Excellence in Motion',
      description: 'Logistics never stops, and neither do we. Our 24/7 operations aren\'t just a service feature—they\'re a reflection of how seriously we take our responsibility. With live tracking systems, full yard camera coverage, and continuous monitoring, you\'re never in the dark about where your cargo is. We\'ve invested in technology not to replace personal service, but to enhance it—giving you visibility while maintaining the human touch.',
    },
    {
      icon: Heart,
      title: 'Leadership by Example',
      description: 'Jaco and Wayne didn\'t build Vuyela from a distance—they built it from the front lines. Even today, you\'ll find them in the yard, on the phone with clients, solving problems in real-time. This hands-on approach isn\'t just about control; it\'s about culture. When directors are personally involved, it sends a message: no job is too small, no problem is too complex, and no promise is too difficult to keep. Leadership by example, every single day.',
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
              What happens when two logistics professionals decide to build something different? They start with one truck, one contract, and one unshakeable belief: reliability isn't negotiable. Five years later, that same principle has grown into a company that moves millions of tons of cargo, employs over 60 people, and never forgets where it started. This is our story—told through every delivery, every partnership, and every promise kept.
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
                  Every great company has a moment when it all begins. For Vuyela, that moment came in 2019 when Jaco and Wayne made a decision that would change everything: they would start their own logistics company, but they'd do it differently. No shortcuts, no empty promises—just one truck, one client, and a commitment to reliability that would become our DNA. That first contract with a leading South African mining contractor wasn't just business; it was a test. Could they deliver on time, every time? Could they build trust through consistent performance? The answer, it turned out, was yes—and that single vehicle became the foundation for everything we've built since.
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
                  Today, Vuyela Group has grown far beyond that first truck, but the spirit remains the same. Our Elandsfontein facility is home to over 60 professionals who've chosen to build their careers with us—each one understanding that reliability isn't a company slogan, it's a daily practice. We're a "new generation logistics company" because we combine old-school values (handshakes, accountability, personal service) with modern capabilities (live tracking, SOLAS certification, SARS bonding). The result? A company that's both human and high-tech, personal and professional.
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
                    We don't see ourselves as just another logistics provider. When a mining company needs chrome moved to port, we understand that their entire operation depends on that shipment reaching the vessel on time. When an exporter is racing against a booking deadline, we know that their international reputation is on the line. This understanding changes how we operate—we're not moving boxes and containers; we're moving businesses, livelihoods, and opportunities. That's why we've built our company around a simple but powerful philosophy: treat every client's business as if it's our own.
                  </p>
                  <div className="flex items-center">
                    <p className="text-base sm:text-lg text-white leading-relaxed">
                      Our journey from a single truck to a comprehensive logistics network wasn't accidental—it was intentional. Every expansion, every new service, every team member we've hired has been chosen because they share our core belief: 
                      <strong className="text-[#FFD700] block mt-2"> every delivery matters, every relationship counts, and every promise must be kept. No exceptions. No excuses.</strong>
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

          {/* Timeline Graphic - Visual timeline graphic showing company growth from 2019-2024 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden"
          >
            <Image
              src="/images/about-timeline.png"
              alt="Company timeline graphic"
              fill
              className="object-cover"
              sizes="100vw"
            />
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
        {/* AI Prompt Goal: Global Map Dark - Dark themed world map showing global logistics network */}
        <div className="absolute inset-0">
          <Image
            src="/images/network-infographic.png"
            alt="Global logistics network map"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
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
                Our vision is ambitious but grounded: to be the logistics partner that South African businesses choose not because they have to, but because they want to. We see ourselves as more than a service provider—we're a critical link in the supply chains that drive national economic growth. Every shipment we handle contributes to something bigger: job creation, export revenue, and South Africa's position in global markets. When international partners think of reliable South African logistics, we want Vuyela to be the name that comes to mind first—a company that sets the global standard for what logistics excellence looks like, built right here in Elandsfontein.
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
                Our mission is elegantly simple: treat every shipment as if it's our own. This isn't a marketing slogan—it's how we've operated since day one. When cargo comes through our gates or into our trucks, it becomes our responsibility. Not just to deliver it, but to protect it, track it, and ensure it arrives exactly as promised, when promised. We've built everything—from our 24/7 monitoring systems to our hands-on director involvement—around this single principle: operational excellence isn't a goal we're working toward; it's the standard we've maintained since that first truck hit the road.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    label: 'Expertise',
                    text: 'Our team brings decades of collective experience in logistics, warehousing, and supply chain management—knowledge that comes from doing, not just learning.'
                  },
                  {
                    label: 'Accountability',
                    text: 'When your cargo is in our hands, we accept full responsibility. No passing the buck, no excuses—just complete ownership of the outcome.'
                  },
                  {
                    label: 'Partnership',
                    text: 'We don\'t see clients as transactions; we see them as partners in success. Your challenges become our challenges, and your wins become our wins.'
                  },
                  {
                    label: 'Integrity',
                    text: 'Transparency and honesty aren\'t just policies—they\'re non-negotiables. You\'ll always know where your cargo is, what\'s happening, and why.'
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">
                      <strong className="text-white">{item.label}:</strong> {item.text}
                    </span>
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
                  email: 'jaco@vuyelalogistics.co.za',
                  description: 'Co-founder and director, leading strategic operations and business development.',
                  image: '/images/staff/Jaco.jpg',
                },
                {
                  name: 'Wayne',
                  role: 'Director',
                  email: 'wayne@vuyelalogistics.co.za',
                  description: 'Co-founder and director, overseeing daily operations and client relationships.',
                  image: '/images/staff/wayne.jpg',
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
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#FFD700] mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 relative">
                      <Image
                        src={director.image}
                        alt={`${director.name} - ${director.role}`}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 text-center font-poppins">{director.name}</h4>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Briefcase className="h-4 w-4 text-[#FFD700]" />
                      <p className="text-[#FFD700] font-semibold text-sm uppercase tracking-wide">{director.role}</p>
                    </div>
                    <p className="text-gray-300 text-sm text-center mb-6 leading-relaxed">{director.description}</p>
                    <div className="space-y-3 pt-6 border-t border-[#3a3a3a]">
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
                  image: '/images/staff/ukn02.jpg',
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
                  image: '/images/staff/Martin.jpg',
                },
                {
                  name: 'Aneri',
                  role: 'HR',
                  phone: '+27 82 670 9214',
                  email: 'aneri@vuyelalogistics.co.za',
                  image: '/images/staff/Aneri.jpg',
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
                  image: '/images/staff/deon.jpg',
                },
                {
                  name: 'Shine',
                  role: 'Operations',
                  phone: '+27 71 234 5678',
                  email: 'shine@vuyelalogistics.co.za',
                  image: '/images/staff/shine.jpg',
                },
                {
                  name: 'Sipho',
                  role: 'Logistics',
                  phone: '+27 82 345 6789',
                  email: 'sipho@vuyelalogistics.co.za',
                  image: '/images/staff/sipho.png',
                },
                {
                  name: 'Alan',
                  role: 'Operations',
                  phone: '+27 83 456 7890',
                  email: 'alan@vuyelalogistics.co.za',
                  image: '/images/staff/alan.jpg',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#2a2a2a] rounded-xl p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300 group"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={springConfig}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFD700] mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 relative">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#FFD700] flex items-center justify-center">
                        <UserCircle className="h-8 w-8 text-[#1a1a1a]" />
                      </div>
                    )}
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
              Every successful partnership starts with a conversation. Whether you're moving your first shipment or your thousandth, we're here to listen, understand your unique challenges, and craft logistics solutions that actually make sense for your business. Join the companies that have discovered what it means to work with a team that treats your cargo, your deadlines, and your business as if they were our own.
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

