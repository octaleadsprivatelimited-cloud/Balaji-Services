import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  Star
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xvgerbrw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          serviceType: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91-9902730741", "+91-8123288996"],
      action: "tel:+919902730741",
      color: "accent"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["balajiservice541@gmail.com"],
      action: "mailto:balajiservice541@gmail.com",
      color: "secondary"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["No. 754, Ground Floor, 1st B Cross", "Muthyalamma Nagar", "Bangalore -560054"],
      action: "#",
      color: "primary"
    }
  ];

  const cities = [
    'Bangalore Central', 'Indiranagar', 'Koramangala', 'Whitefield', 'Electronic City',
    'MG Road & Brigade Road', 'Marathahalli', 'HSR Layout', 'BTM Layout', 'JP Nagar',
    'Bannerghatta Road', 'Hosur Road', 'Outer Ring Road', 'Sarjapur Road', 'Bellandur',
    'KR Puram', 'Hebbal', 'Yelahanka', 'Rajajinagar', 'Vijayanagar',
    'Malleshwaram', 'Yeshwanthpur', 'Peenya', 'Jalahalli', 'Dasarahalli',
    'Magadi Road', 'Tumkur Road', 'Nelamangala', 'Devanahalli', 'Bangalore Airport',
    'Varthur', 'Kadugodi', 'Hoskote', 'Old Airport Road', 'CV Raman Nagar'
  ];

  const serviceTypes = [
    'Chimney Installation & Service',
    'Hob Installation & Service',
    'Micro Oven Service',
    'Dishwasher Service',
    'Supreme Solar Sales',
    'Washing Machine Service',
    'Cooking Range Service',
    'Geyser Installation & Service',
    'Aquaguard Sales & Service',
    'Generator Service',
    'Appliance Repair',
    'Appliance Installation',
    'Annual Maintenance Contract',
    'Emergency Service'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Balaji Services</title>
        <meta name="description" content="Contact Balaji Services for professional appliance installation, service, and repair in Bangalore. Call +91-9902730741 or +91-8123288996. Expert service for chimney, hob, washing machine, geyser, and more." />
        <meta property="og:title" content="Contact Us | Balaji Services" />
        <meta property="og:description" content="Contact Balaji Services for professional appliance installation, service, and repair in Bangalore. Expert solutions for all your home appliances." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us | Balaji Services" />
        <meta name="twitter:description" content="Contact Balaji Services for professional appliance installation, service, and repair in Bangalore." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Balaji Services" />
      </Helmet>
      <div className="pt-16">
      {/* Hero Section - Redesigned */}
      <section className="relative text-white py-10 lg:py-16 overflow-hidden min-h-[40vh] sm:min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/services/chimney.webp')`
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
              <MessageCircle className="h-4 w-4 mr-2" />
              Get In Touch
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Contact <span className="text-accent-400">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Get in touch with our appliance service experts for a free consultation and quote. 
            We're here to help you with professional appliance installation, service, and repair!
          </motion.p>
        </div>
      </section>

      {/* Contact Information - Redesigned */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-primary-50/20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-accent-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfo.map((info, index) => {
              const colorClasses = {
                accent: {
                  iconBg: "bg-accent-100",
                  iconColor: "text-accent-600",
                  bg: "from-accent-500 to-accent-600",
                  hoverBg: "hover:from-accent-50 hover:to-accent-100/50",
                  linkColor: "text-accent-600 hover:text-accent-700"
                },
                secondary: {
                  iconBg: "bg-secondary-100",
                  iconColor: "text-secondary-600",
                  bg: "from-secondary-500 to-secondary-600",
                  hoverBg: "hover:from-secondary-50 hover:to-secondary-100/50",
                  linkColor: "text-secondary-600 hover:text-secondary-700"
                },
                primary: {
                  iconBg: "bg-primary-100",
                  iconColor: "text-primary-600",
                  bg: "from-primary-500 to-primary-600",
                  hoverBg: "hover:from-primary-50 hover:to-primary-100/50",
                  linkColor: "text-primary-600 hover:text-primary-700"
                }
              };
              
              const colors = colorClasses[info.color as keyof typeof colorClasses] || colorClasses.accent;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    {/* Hover Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-6 z-10">
                      <div className={`${colors.iconBg} ${colors.iconColor} p-4 rounded-xl inline-flex shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex-grow">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {info.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {info.action !== "#" && (
                        <a
                          href={info.action}
                          className={`inline-flex items-center ${colors.linkColor} font-semibold text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300`}
                        >
                          Contact Now
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map - Redesigned */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100"
            >
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Free Quote
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Get Your Free <span className="text-primary-700">Quote</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Fill out the form below and our appliance service experts will get back to you within 24 hours 
                  with a customized quote and consultation.
                </p>
              </div>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gradient-to-r from-secondary-50 to-secondary-100 border-2 border-secondary-200 text-secondary-800 px-6 py-4 rounded-xl mb-6 flex items-center shadow-lg"
                  >
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                    <p className="font-semibold">Thank you! We'll contact you soon with your appliance service quote.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                      City *
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select your city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select service type</option>
                    {serviceTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us about your specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Get Free Quote
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Quick Contact - Redesigned */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-6 sm:p-8 border border-accent-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Why Choose Us?</h4>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Free site survey and consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Expert appliance solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Genuine parts guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Warranty on service & installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional installation team</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas - Redesigned */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
                <MapPin className="h-4 w-4 mr-2" />
                Coverage Areas
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Service Areas Across <span className="text-accent-400">Bangalore</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              We provide appliance installation, service, and repair across all areas of Bangalore
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center hover:bg-accent-500/20 hover:border-accent-400/50 transition-all duration-300 cursor-pointer"
              >
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-semibold text-sm sm:text-base">{city}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section - Redesigned */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 right-10 opacity-20">
          <Sparkles className="h-16 w-16 text-white animate-pulse" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <Star className="h-12 w-12 text-white animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold">
                <Sparkles className="h-4 w-4 mr-2" />
                Get Started
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white">
              Ready to Upgrade Your <span className="text-accent-400">Home?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Don't wait! Contact us today for a free consultation and get professional appliance installation, service, and repair solutions
            </p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white">Free Consultation</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white">Quick Response</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white">Expert Service</p>
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8"
            >
              <motion.a
                href="tel:+919902730741"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white hover:bg-gray-100 text-primary-700 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-2xl overflow-hidden min-w-[200px] sm:min-w-[240px]"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span>Call Now</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gray-800/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="https://wa.me/919902730741"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white/20 backdrop-blur-md border-2 border-white/50 hover:border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center hover:bg-white/30 overflow-hidden min-w-[200px] sm:min-w-[240px]"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                <span>WhatsApp Us</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-gray-200 mb-6 sm:mb-8"
            >
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-white mr-2" />
                <div>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    +91-9902730741 / +91-8123288996
                  </span>
                  <p className="text-xs text-gray-300">Balaji Services</p>
                </div>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-white mr-2" />
                <span className="text-sm sm:text-base font-semibold text-white">WhatsApp Available</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-white mr-2" />
                <span className="text-sm sm:text-base font-semibold text-white">24/7 Support</span>
              </div>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <Star className="h-5 w-5 text-white mr-2 fill-white" />
              <span className="text-white font-semibold text-sm sm:text-base">
                Trusted by 4500+ Happy Customers
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
