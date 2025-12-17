'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
      icon: MapPin,
      title: 'Address',
      content: '83 Main Reef Road, Elandsfontein, Germiston, 1601',
      link: '#',
    },
    {
      icon: Mail,
      title: 'Website',
      content: 'www.vuyelalogistics.co.za',
      link: 'https://www.vuyelalogistics.co.za',
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

      {/* Facility Entrance Image */}
      {/* AI Prompt Goal: Facility Entrance - Image showing the entrance to the Vuyela facility at 83 Main Reef Road */}
      <section className="w-full py-0 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-4xl mx-auto h-64 md:h-96 mb-12"
        >
          <Image
            src="https://placehold.co/800x400/111111/D4AF37?text=Facility+Entrance"
            alt="Vuyela facility entrance"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </motion.div>
      </section>

      {/* Google Maps Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-[#1a1a1a] relative">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Find Us on <span className="text-[#FFD700]">Google Maps</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-2">
              83 Main Reef Road, Elandsfontein, Germiston, 1601
            </p>
            <p className="text-gray-400 text-sm">By Appointment Only</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="rounded-xl overflow-hidden border-2 border-[#3a3a3a] shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.4366703955884!2d28.126469374627135!3d-26.207192664094386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950fdd715c9bb9%3A0x5c412433d96955f6!2sVuyela%20Logistics!5e1!3m2!1sen!2sza!4v1765304451312!5m2!1sen!2sza"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Vuyela Logistics Location"
            />
          </motion.div>
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

            {/* Directors Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center font-poppins">
                <span className="text-[#FFD700]">Directors</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                {[
                  {
                    name: 'Jaco',
                    role: 'Director',
                    email: 'jaco@vuyelalogistics.co.za',
                  },
                  {
                    name: 'Wayne',
                    role: 'Director',
                    email: 'wayne@vuyelalogistics.co.za',
                  },
                ].map((director, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springConfig, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-6 border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <h4 className="text-xl font-bold text-white mb-2 font-poppins">{director.name}</h4>
                    <p className="text-[#FFD700] text-sm font-medium mb-4">{director.role}</p>
                    <div className="space-y-3 pt-4 border-t border-[#3a3a3a]">
                      <a
                        href={`mailto:${director.email}`}
                        className="flex items-center gap-3 text-gray-300 hover:text-[#FFD700] transition-colors text-sm"
                      >
                        <Mail className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                        <span className="break-all">{director.email}</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Team Members Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center font-poppins">
                Our <span className="text-[#FFD700]">Team</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: 'Melissa',
                    role: 'Accounts',
                    email: 'accounts@vuyelalogistics.co.za',
                    phone: '+27 78 592 4123',
                  },
                  {
                    name: 'Verushka',
                    role: 'Administration',
                    email: 'admin@vuyelalogistics.co.za',
                    phone: '+27 82 457 8760',
                  },
                  {
                    name: 'Mala',
                    role: 'Operations',
                    email: 'mala@vuyelalogistics.co.za',
                    phone: '+27 73 490 0317',
                  },
                  {
                    name: 'Martin',
                    role: 'Shipping',
                    email: 'shipping@vuyelalogistics.co.za',
                    phone: '+27 67 881 8419',
                  },
                  {
                    name: 'Aneri',
                    role: 'HR',
                    email: 'aneri@vuyelalogistics.co.za',
                    phone: '+27 82 670 9214',
                  },
                  {
                    name: 'Karina',
                    role: 'Operations',
                    email: 'karina.rossouw@vuyelalogistics.co.za',
                    phone: '+27 83 349 5467',
                  },
                  {
                    name: 'Mike',
                    role: 'Operations',
                    email: 'mike@vuyelalogistics.co.za',
                    phone: '+27 62 848 8623',
                  },
                  {
                    name: 'Deon',
                    role: 'Refuel Operations',
                    email: 'refuel@vuyelalogistics.co.za',
                    phone: '+27 67 209 0841',
                  },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springConfig, delay: index * 0.05 }}
                    className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a] hover:border-[#FFD700]/50 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <h4 className="text-lg font-bold text-white mb-2 font-poppins">{member.name}</h4>
                    <p className="text-[#FFD700] text-sm font-medium mb-4">{member.role}</p>
                    <div className="space-y-2 pt-4 border-t border-[#3a3a3a]">
                      <a
                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-gray-300 hover:text-[#FFD700] transition-colors text-xs"
                      >
                        <Phone className="h-3 w-3 text-[#FFD700] flex-shrink-0" />
                        <span className="truncate">{member.phone}</span>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-gray-300 hover:text-[#FFD700] transition-colors text-xs"
                      >
                        <Mail className="h-3 w-3 text-[#FFD700] flex-shrink-0" />
                        <span className="truncate break-all">{member.email}</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

