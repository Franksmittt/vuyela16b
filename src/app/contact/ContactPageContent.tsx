'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+27 (0) 11 123 4567',
      link: 'tel:+27111234567',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@vuyela.com',
      link: 'mailto:info@vuyela.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Main Reef Road, Elandsfontein, Gauteng, South Africa',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      content: '24/7 Operations',
      link: '#',
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
              <Mail className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-poppins text-white mb-6 leading-tight"
            >
              Let's Discuss Your
              <br />
              <span className="text-[#FFD700]">Logistics Needs</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to partner with Vuyela Group? Contact our team to discuss how we can help streamline your supply chain and deliver excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
              className="lg:col-span-1 space-y-6"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-poppins">
                  Contact <span className="text-[#FFD700]">Information</span>
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mb-8">
                  Reach out to us through any of these channels. Our team is available 24/7 to assist with your logistics needs.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-[#2a2a2a] rounded-lg border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300 group"
                    whileHover={{ x: 4 }}
                    transition={springConfig}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-[#1a1a1a]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 font-poppins">{info.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
              className="lg:col-span-2"
            >
              <div className="bg-[#2a2a2a] rounded-lg p-6 sm:p-8 border border-[#3a3a3a]">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-poppins">
                  Send us a <span className="text-[#FFD700]">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                        placeholder="+27 (0) 11 123 4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="bulk">Vuyela Bulk - Warehousing & Handling</option>
                      <option value="logistics">Vuyela Logistics - Road Freight & Transport</option>
                      <option value="freight">Vuyela Freight - Ocean Freight & Customs</option>
                      <option value="refuel">Vuyela Refuel - Energy Solutions</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700] transition-colors resize-none"
                      placeholder="Tell us about your logistics needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#FFD700] text-[#1a1a1a] font-semibold hover:bg-[#1a1a1a] hover:text-[#FFD700] border-2 border-[#FFD700] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={springConfig}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                icon: CheckCircle2,
                title: 'Quick Response',
                description: 'We respond to all inquiries within 24 hours during business days.',
              },
              {
                icon: CheckCircle2,
                title: 'Expert Consultation',
                description: 'Our logistics experts are ready to discuss your specific needs.',
              },
              {
                icon: CheckCircle2,
                title: 'Custom Solutions',
                description: 'We tailor our services to meet your unique business requirements.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300 text-center"
                whileHover={{ y: -4 }}
                transition={springConfig}
              >
                <div className="w-12 h-12 rounded-lg bg-[#FFD700] flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-poppins">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Contacts Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
                Contact Our <span className="text-[#FFD700]">Team</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                Reach out to the right person for your specific needs. Our team is here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'General Inquiries',
                  role: 'Main Office',
                  email: 'info@vuyela.com',
                  phone: '+27 (0) 11 123 4567',
                  department: 'All Services',
                },
                {
                  name: 'Vuyela Bulk',
                  role: 'Warehousing & Handling',
                  email: 'bulk@vuyela.com',
                  phone: '+27 (0) 11 123 4568',
                  department: 'Bulk Operations',
                },
                {
                  name: 'Vuyela Logistics',
                  role: 'Road Freight & Transport',
                  email: 'logistics@vuyela.com',
                  phone: '+27 (0) 11 123 4569',
                  department: 'Transport Operations',
                },
                {
                  name: 'Vuyela Freight',
                  role: 'Ocean Freight & Customs',
                  email: 'freight@vuyela.com',
                  phone: '+27 (0) 11 123 4570',
                  department: 'Freight Forwarding',
                },
                {
                  name: 'Vuyela Refuel',
                  role: 'Energy Solutions',
                  email: 'refuel@vuyela.com',
                  phone: '+27 (0) 11 123 4571',
                  department: 'Fuel Supply',
                },
                {
                  name: 'Operations Manager',
                  role: '24/7 Operations',
                  email: 'operations@vuyela.com',
                  phone: '+27 (0) 11 123 4572',
                  department: 'Operations',
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
                  whileHover={{ y: -4 }}
                  transition={springConfig}
                >
                  <h3 className="text-xl font-bold text-white mb-1 font-poppins">{contact.name}</h3>
                  <p className="text-[#FFD700] text-sm font-medium mb-4">{contact.role}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-4">{contact.department}</p>
                  
                  <div className="space-y-3">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-3 text-gray-300 hover:text-[#FFD700] transition-colors text-sm"
                    >
                      <Mail className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                      <span className="break-all">{contact.email}</span>
                    </a>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-gray-300 hover:text-[#FFD700] transition-colors text-sm"
                    >
                      <Phone className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                      <span>{contact.phone}</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

