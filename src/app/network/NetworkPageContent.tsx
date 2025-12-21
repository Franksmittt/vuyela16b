'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight, 
  Globe,
  Handshake,
  Network,
  CheckCircle2,
  ShieldCheck,
  Route,
  Truck,
  Warehouse,
  MapPin,
  Award,
  Scale,
  Lock,
  Eye,
  FileText,
  Upload,
  Building2,
  Users,
  Calendar,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';

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

  // Carrier Registration Form State
  const [formData, setFormData] = useState({
    // Section 1: Business Identification
    companyName: '',
    registrationNumber: '',
    vatNumber: '',
    yearsInOperation: '',
    // Section 2: Compliance & Documentation
    dotMcNumber: '',
    insuranceFile: null as File | null,
    safetyRating: '',
    // Section 3: Fleet & Equipment
    powerUnits: '',
    equipmentTypes: [] as string[],
    preferredLanes: '',
    // Section 4: References
    reference1Company: '',
    reference1Contact: '',
    reference1Phone: '',
    reference2Company: '',
    reference2Contact: '',
    reference2Phone: '',
    // Contact
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    // Agreement
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'termsAccepted') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        // Handle equipment types
        setFormData(prev => ({
          ...prev,
          equipmentTypes: checked
            ? [...prev.equipmentTypes, value]
            : prev.equipmentTypes.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, insuranceFile: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Application submitted successfully! We will review your registration and contact you within 5-7 business days.');
      setFormData({
        companyName: '',
        registrationNumber: '',
        vatNumber: '',
        yearsInOperation: '',
        dotMcNumber: '',
        insuranceFile: null,
        safetyRating: '',
        powerUnits: '',
        equipmentTypes: [],
        preferredLanes: '',
        reference1Company: '',
        reference1Contact: '',
        reference1Phone: '',
        reference2Company: '',
        reference2Contact: '',
        reference2Phone: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        termsAccepted: false,
      });
      setIsSubmitting(false);
    }, 2000);
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

  const networkStats = [
    { icon: Truck, value: 'Own Fleet', label: 'Active Power Units', description: 'Dedicated fleet operations' },
    { icon: Warehouse, value: '10,000+', label: 'Square Meters', description: 'Warehouse capacity' },
    { icon: Scale, value: 'SOLAS', label: 'Certified Weighbridges', description: 'International compliance' },
    { icon: Globe, value: '24/7', label: 'Operations', description: 'Never-stop logistics' },
  ];

  const keyHubs = [
    { name: 'Elandsfontein Facility', location: 'Gauteng', description: 'Main operations hub with SARS Bonded Warehouse' },
    { name: 'Port of Durban', location: 'KwaZulu-Natal', description: 'Primary port operations and container logistics' },
    { name: 'TFR Terminals', location: 'Nationwide', description: 'Strategic rail terminal access' },
  ];

  const infrastructureFeatures = [
    {
      title: 'SOLAS-Verified Weighbridges',
      description: 'Internationally certified weighbridges meeting SOLAS (Safety of Life at Sea) standards for accurate cargo weighing and international shipping compliance.',
      image: '/images/Gemini_Generated_Image_np7vzanp7vzanp7v.png',
      icon: Scale,
    },
    {
      title: 'SARS Bonded Warehouse',
      description: 'Registered customs bond area providing secure storage with deferred duty payments, streamlined import/export processes, and reduced financial burden.',
      image: '/images/bulk-warehouse-facilities.png',
      icon: Lock,
    },
    {
      title: 'Bulk Cargo Handling',
      description: 'Specialized infrastructure for handling bulk industrial bags (FIBCs), minerals, grain, and containerized cargo with precision and efficiency.',
      image: '/images/bulk-commodities.png',
      icon: Warehouse,
    },
    {
      title: 'Security Checkpoints',
      description: 'Restricted access areas with security checkpoints ensuring cargo safety and compliance with international trade regulations.',
      image: '/images/Gemini_Generated_Image_1is9dc1is9dc1is9.png',
      icon: ShieldCheck,
    },
  ];

  const technologyFeatures = [
    {
      icon: Eye,
      title: 'Real-Time Tracking',
      description: 'Live tracking systems providing complete visibility into cargo location and status throughout the supply chain.',
    },
    {
      icon: ShieldCheck,
      title: 'Full Yard Camera Coverage',
      description: 'Comprehensive CCTV surveillance system with 24/7 monitoring and recording capabilities for complete security visibility.',
    },
    {
      icon: FileText,
      title: 'Live System Monitoring',
      description: 'Continuous monitoring of operations, inventory, and cargo movements with real-time status updates and proactive issue resolution.',
    },
    {
      icon: Network,
      title: 'Integrated Network Systems',
      description: 'Seamless integration with TFR, shipping lines, and transport partners for coordinated logistics operations.',
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
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Strategic partnerships and relationships that power our logistics network. 
              Strong connections with TFR, shipping agents, road freight companies, and global partners 
              ensure seamless operations for our customers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Network Infographic */}
      <section className="w-full py-0 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-4xl mx-auto h-64 md:h-96"
        >
          <Image
            src="/images/network-infographic.png"
            alt="Vuyela logistics network infographic"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </motion.div>
      </section>

      {/* Network Map & Stats Section */}
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
              Operational <span className="text-[#FFD700]">Reach</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Our footprint across South Africa's logistics infrastructure
            </p>
          </motion.div>

          {/* Key Hubs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {keyHubs.map((hub, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={springConfig}
              >
                <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-poppins">{hub.name}</h3>
                <p className="text-[#FFD700] text-sm font-medium mb-2">{hub.location}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{hub.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* By the Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-poppins">
              By the <span className="text-[#FFD700]">Numbers</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {networkStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a] text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-[#1a1a1a]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1 font-poppins">{stat.value}</h4>
                  <p className="text-[#FFD700] text-sm font-medium mb-1">{stat.label}</p>
                  <p className="text-gray-400 text-xs">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialized Infrastructure Section */}
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
              Specialized <span className="text-[#FFD700]">Infrastructure</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              High-end technical capabilities that prove our operational capacity
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {infrastructureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a2a2a] rounded-lg overflow-hidden border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={springConfig}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology & Security Section */}
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
              Technology & <span className="text-[#FFD700]">Security</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Serious partners care about safety and visibility
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {technologyFeatures.map((feature, index) => (
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
                <h3 className="text-lg font-bold text-white mb-3 font-poppins">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
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

      {/* Professional Carrier Registration Form */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-[#FFD700] mb-6">
              <Building2 className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Join Our Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Professional Carrier <span className="text-[#FFD700]">Registration</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              We partner with established, professional carriers who share our commitment to excellence. 
              This application requires business documentation to ensure we work with serious, compliant operators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a]"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section 1: Business Identification */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD700] flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-poppins">Business Identification</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-white mb-2">
                      Registered Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                      placeholder="ABC Transport (Pty) Ltd"
                    />
                  </div>
                  <div>
                    <label htmlFor="registrationNumber" className="block text-sm font-medium text-white mb-2">
                      Company Registration Number *
                    </label>
                    <input
                      type="text"
                      id="registrationNumber"
                      name="registrationNumber"
                      required
                      value={formData.registrationNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                      placeholder="2023/123456/07"
                    />
                  </div>
                  <div>
                    <label htmlFor="vatNumber" className="block text-sm font-medium text-white mb-2">
                      VAT Number *
                    </label>
                    <input
                      type="text"
                      id="vatNumber"
                      name="vatNumber"
                      required
                      value={formData.vatNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                      placeholder="4123456789"
                    />
                  </div>
                  <div>
                    <label htmlFor="yearsInOperation" className="block text-sm font-medium text-white mb-2">
                      Years in Operation *
                    </label>
                    <input
                      type="number"
                      id="yearsInOperation"
                      name="yearsInOperation"
                      required
                      min="2"
                      value={formData.yearsInOperation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                      placeholder="5"
                    />
                    <p className="text-gray-400 text-xs mt-1">Minimum 2 years required</p>
                  </div>
                </div>
              </div>

              {/* Section 2: Compliance & Documentation */}
              <div className="pt-6 border-t border-[#3a3a3a]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD700] flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-poppins">Compliance & Documentation</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="dotMcNumber" className="block text-sm font-medium text-white mb-2">
                      DOT/MC Number or PRDP/Operator Card *
                    </label>
                    <input
                      type="text"
                      id="dotMcNumber"
                      name="dotMcNumber"
                      required
                      value={formData.dotMcNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                      placeholder="MC-123456"
                    />
                  </div>
                  <div>
                    <label htmlFor="insuranceFile" className="block text-sm font-medium text-white mb-2">
                      Certificate of Insurance (PDF) *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="insuranceFile"
                        name="insuranceFile"
                        required
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="insuranceFile"
                        className="flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg cursor-pointer hover:border-[#FFD700] transition-colors"
                      >
                        <Upload className="h-5 w-5 text-[#FFD700]" />
                        <span className="text-white text-sm">
                          {formData.insuranceFile ? formData.insuranceFile.name : 'Upload Insurance Certificate (PDF)'}
                        </span>
                      </label>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">
                      Minimum coverage: R1,000,000 Cargo Liability / R10,000,000 Auto Liability
                    </p>
                  </div>
                  <div>
                    <label htmlFor="safetyRating" className="block text-sm font-medium text-white mb-2">
                      Safety Rating *
                    </label>
                    <select
                      id="safetyRating"
                      name="safetyRating"
                      required
                      value={formData.safetyRating}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                    >
                      <option value="">Select safety rating</option>
                      <option value="satisfactory">Satisfactory</option>
                      <option value="conditional">Conditional</option>
                      <option value="unsatisfactory">Unsatisfactory</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Fleet & Equipment */}
              <div className="pt-6 border-t border-[#3a3a3a]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD700] flex items-center justify-center">
                    <Truck className="h-5 w-5 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-poppins">Fleet & Equipment</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="powerUnits" className="block text-sm font-medium text-white mb-2">
                      Total Number of Power Units (Trucks) *
                    </label>
                    <input
                      type="number"
                      id="powerUnits"
                      name="powerUnits"
                      required
                      min="1"
                      value={formData.powerUnits}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                      placeholder="10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      Equipment Types * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Side-tippers', 'Flatbeds', 'Reefer', 'Skeleton/Container Trailers'].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="equipmentType"
                            value={type}
                            checked={formData.equipmentTypes.includes(type)}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-[#FFD700] bg-[#1a1a1a] border-[#3a3a3a] rounded focus:ring-[#FFD700]"
                          />
                          <span className="text-gray-300 text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="preferredLanes" className="block text-sm font-medium text-white mb-2">
                      Preferred Lanes/Regions *
                    </label>
                    <textarea
                      id="preferredLanes"
                      name="preferredLanes"
                      required
                      rows={3}
                      value={formData.preferredLanes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors resize-none"
                      placeholder="e.g., Johannesburg to Durban, Cape Town to Port Elizabeth"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: References */}
              <div className="pt-6 border-t border-[#3a3a3a]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD700] flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-poppins">Trade References</h3>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  Provide two active trade references. Professional carriers always have these ready.
                </p>
                <div className="space-y-6">
                  <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a]">
                    <h4 className="text-white font-semibold mb-4">Reference 1 *</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="reference1Company" className="block text-sm font-medium text-white mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="reference1Company"
                          name="reference1Company"
                          required
                          value={formData.reference1Company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="reference1Contact" className="block text-sm font-medium text-white mb-2">
                          Contact Person
                        </label>
                        <input
                          type="text"
                          id="reference1Contact"
                          name="reference1Contact"
                          required
                          value={formData.reference1Contact}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                          placeholder="Contact Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="reference1Phone" className="block text-sm font-medium text-white mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="reference1Phone"
                          name="reference1Phone"
                          required
                          value={formData.reference1Phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                          placeholder="+27 11 123 4567"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a]">
                    <h4 className="text-white font-semibold mb-4">Reference 2 *</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="reference2Company" className="block text-sm font-medium text-white mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="reference2Company"
                          name="reference2Company"
                          required
                          value={formData.reference2Company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="reference2Contact" className="block text-sm font-medium text-white mb-2">
                          Contact Person
                        </label>
                        <input
                          type="text"
                          id="reference2Contact"
                          name="reference2Contact"
                          required
                          value={formData.reference2Contact}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                          placeholder="Contact Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="reference2Phone" className="block text-sm font-medium text-white mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="reference2Phone"
                          name="reference2Phone"
                          required
                          value={formData.reference2Phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                          placeholder="+27 11 123 4567"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-6 border-t border-[#3a3a3a]">
                <h3 className="text-xl font-bold text-white mb-6 font-poppins">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-white mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      required
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-medium text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      required
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                      placeholder="+27 11 123 4567"
                    />
                  </div>
                </div>
              </div>

              {/* Terms & Agreement */}
              <div className="pt-6 border-t border-[#3a3a3a]">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    required
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="w-5 h-5 mt-1 text-[#FFD700] bg-[#1a1a1a] border-[#3a3a3a] rounded focus:ring-[#FFD700]"
                  />
                  <label htmlFor="termsAccepted" className="text-gray-300 text-sm leading-relaxed">
                    I certify that all information provided is accurate and complete. I understand that Vuyela Group 
                    will verify all documentation and references. I agree to comply with Vuyela Group's carrier standards 
                    and operational requirements. *
                  </label>
                </div>
                <div className="mt-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <div className="text-gray-300 text-sm">
                      <p className="font-semibold text-white mb-1">Review Process:</p>
                      <p>Applications are reviewed within 5-7 business days. We will contact you via email or phone to discuss 
                      your application and next steps. Only professional, compliant carriers will be accepted into our network.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || !formData.termsAccepted}
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#FFD700] text-[#1a1a1a] font-semibold hover:bg-[#1a1a1a] hover:text-[#FFD700] border-2 border-[#FFD700] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                transition={springConfig}
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Submitting...</span>
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
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
