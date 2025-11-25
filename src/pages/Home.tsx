import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Shield,
  HardHat,
  Target,
  CheckCircle,
  Users,
  TrendingUp,
  Globe,
  ArrowRight,
  Award,
  MapPin,
  Phone,
  MessageCircle
} from 'lucide-react';
import { openWhatsAppQuote } from '../utils/whatsapp';
import { getPopularServices } from '../data/services';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);


  const features = [
    {
      icon: <Shield className="h-12 w-12 text-primary-600" />,
      title: "Expert Installation",
      description: "Professional installation by certified technicians ensuring proper setup and safety"
    },
    {
      icon: <HardHat className="h-12 w-12 text-primary-600" />,
      title: "Quality Products",
      description: "Top brands and premium quality appliances with warranty coverage and reliable performance"
    },
    {
      icon: <Award className="h-12 w-12 text-accent-600" />,
      title: "Comprehensive Service",
      description: "Complete solutions including sales, installation, maintenance, and repair services"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-secondary-600" />,
      title: "After Sales Support",
      description: "Dedicated customer support with regular maintenance and emergency repair services"
    }
  ];

  const stats = [
    { number: "5000+", label: "Appliances Installed", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "4500+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> },
    { number: "10+", label: "Service Categories", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "15+", label: "Years Experience", icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Balaji Services</title>
        <meta name="description" content="Balaji Services - Professional home appliance sales and service in Bangalore. Chimney, Hob, Micro Oven, Washing Machine, Geyser, Aquaguard, Solar, Generator installation and repair services." />
        <meta property="og:title" content="Balaji Services" />
        <meta property="og:description" content="Professional service business in Bangalore." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Balaji Services" />
        <meta name="twitter:description" content="Professional service business in Bangalore." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Balaji Services" />
      </Helmet>
      <div className="pt-16">
      {/* Hero Section with Background Image */}
      <motion.section 
        className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden"
      >
            {/* Hero Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/hero/hero.jpg')`
              }}
            ></div>
        
        {/* Strong Black Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70"></div>
        
        {/* Static Safety Elements - Optimized */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 opacity-20">
            <Shield className="h-16 w-16 text-accent-400" />
          </div>
          
          <div className="absolute top-40 right-20 opacity-15">
            <HardHat className="h-12 w-12 text-accent-300" />
          </div>
          
          <div className="absolute bottom-40 left-20 opacity-10">
            <Target className="h-14 w-14 text-secondary-300" />
          </div>
          
          <div className="absolute bottom-20 right-10 opacity-20">
            <CheckCircle className="h-10 w-10 text-secondary-400" />
          </div>
        </div>
        
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ 
                opacity: 1,
                x: 0,
                transition: { duration: 0.8 }
              }}
            >
                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white"
                    style={{ 
                      textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileInView={{ 
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8 }
                    }}
                  >
                Home Appliances & 
                  <span className="text-accent-400 font-semibold"> Services</span>
              </motion.h1>
              
              {/* Company Tagline with Moving Background Effect */}
              <div className="relative mb-4 sm:mb-6">
                    <motion.div
                      className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-accent-400 mb-2 sm:mb-3"
                      style={{
                        textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      whileInView={{ 
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8 }
                      }}
                    >
                  THE LEADING HOME APPLIANCE SALES AND SERVICE PROVIDERS
                </motion.div>
                <motion.div
                  className="text-base sm:text-lg lg:text-xl text-gray-200 mt-1 sm:mt-2"
                  style={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8 }
                  }}
                >
                  Professional Appliance Installation, Sales & Service Solutions
                </motion.div>
              </div>
              
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileInView={{ 
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 }
                }}
              >
                    <button
                      onClick={openWhatsAppQuote}
                      className="bg-accent-600 hover:bg-accent-700 text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl w-full sm:w-auto"
                    >
                      Get Free Quote
                      <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                
                    <Link
                      to="/services"
                      className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-secondary-500 hover:border-secondary-600 w-full sm:w-auto"
                    >
                      <Shield className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                      View Our Services
                    </Link>
                    
                    <a
                      href="/about#locations"
                      className="bg-primary-700 hover:bg-primary-800 text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-primary-600 hover:border-primary-700 cursor-pointer w-full sm:w-auto"
                    >
                      <MapPin className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                      View Locations
                    </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
            </motion.div>
          </div>
        </div>
      </motion.section>

          {/* Home Appliances Showcase */}
          <motion.section 
            className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Premium Home Appliance Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your one-stop solution for all home appliance needs - Kitchen (Chimney, Hob, Micro Oven, Cooking Range), Laundry (Washing Machine), Water Solutions (Geyser, Aquaguard), Solar Power, and Generator Services. Expert installation, reliable service, and genuine parts guaranteed.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {getPopularServices().slice(0, 5).map((service, index) => (
              <Link key={service.id} to={`/services/${service.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-primary-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="h-32 sm:h-40 md:h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                      backgroundImage: `url('${service.image}')`,
                      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }}></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40"></div>
                    
                    <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center px-2">
                      <h3 className="text-xs sm:text-sm md:text-base font-semibold drop-shadow-lg group-hover:scale-110 transition-transform duration-300" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{service.name}</h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          
          {/* View More Services Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View More Services
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

          {/* Features Section - Redesigned */}
          <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-200/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Header Section */}
              <motion.div 
                className="text-center mb-16 lg:mb-20"
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
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold">
                    <Award className="h-4 w-4 mr-2" />
                    Why Choose Us
                  </span>
                </motion.div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Why Choose <span className="text-primary-700">Balaji Services?</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Your trusted partner for premium home appliances in Bangalore. We offer sales, installation, and comprehensive service for Chimney, Hob, Micro Oven, Dishwasher, Washing Machine, Cooking Range, Geyser, Aquaguard, Solar Solutions, and Generator services. Professional technicians, genuine parts, and timely service guaranteed.
                </p>
              </motion.div>

              {/* Features Grid - Single Row on Desktop */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Card Container */}
                    <div className="relative h-full bg-white rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 overflow-hidden">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-50/0 group-hover:from-primary-50/30 group-hover:to-accent-50/20 transition-all duration-300"></div>
                      
                      <div className="relative z-10">
                        {/* Badge */}
                        <div className="inline-flex items-center mb-2 sm:mb-3 md:mb-4">
                          <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold">
                            Feature {index + 1}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-700 transition-colors duration-300">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                          {feature.description}
                        </p>
                      </div>

                      {/* Corner Accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-100/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Trust Indicators - Removed duplicate stats */}
            </div>
          </section>

          {/* Stats Section - Redesigned */}
          <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 lg:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Our Achievements
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Trusted by thousands of satisfied customers across Bangalore
                </p>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Card Container */}
                    <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-accent-400/50 transition-all duration-300 hover:bg-white/15 hover:shadow-2xl hover:shadow-accent-500/20 overflow-hidden">
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-secondary-500/0 group-hover:from-accent-500/20 group-hover:to-secondary-500/10 transition-all duration-300"></div>
                      
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-2 right-2 w-16 h-16 border-2 border-white rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-10 h-10 border-2 border-white rounded-full"></div>
                      </div>

                      <div className="relative z-10 text-center">
                        {/* Icon Container */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-accent-500/20 to-secondary-500/20 mb-2 sm:mb-3 group-hover:from-accent-500/30 group-hover:to-secondary-500/30 transition-all duration-300 shadow-lg"
                        >
                          <div className="text-white group-hover:text-accent-300 transition-colors duration-300 text-sm sm:text-base">
                            {stat.icon}
                          </div>
                        </motion.div>

                        {/* Number */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
                          viewport={{ once: true }}
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent group-hover:from-accent-300 group-hover:via-white group-hover:to-accent-300 transition-all duration-300"
                        >
                          {stat.number}
                        </motion.div>

                        {/* Label */}
                        <div className="text-xs sm:text-sm md:text-base text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                          {stat.label}
                        </div>

                        {/* Decorative Line */}
                        <div className="mt-2 sm:mt-3 flex justify-center">
                          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-accent-400 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>

                      {/* Corner Accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-400/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

      {/* CTA Section - Redesigned */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-400/5 rounded-full blur-3xl"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 border border-accent-400/30 text-accent-300 text-sm font-semibold backdrop-blur-sm">
                <Award className="h-4 w-4 mr-2" />
                Get Started Today
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Ready to Upgrade Your <span className="text-accent-400">Home?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your home with premium appliances from Balaji Services. From kitchen essentials like chimneys, hobs, and microwaves to washing machines, geysers, and solar solutions - we provide complete sales, installation, and service support. Get expert installation and reliable after-sales service for all your home appliance needs in Bangalore.
            </motion.p>

            {/* CTA Buttons Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
            >
              {/* Call Button */}
              <motion.a
                href="tel:+918790839401"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-accent-500/50 flex items-center justify-center min-w-[200px]"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Call Now
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              {/* WhatsApp Button */}
              <motion.button
                onClick={openWhatsAppQuote}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-secondary-500/50 flex items-center justify-center min-w-[200px]"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Request Quote
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              {/* Services Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-accent-400/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center min-w-[200px]"
                >
                  <Shield className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  View Our Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-400 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-500"></div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-400 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-500"></div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-400 mr-2" />
                <span>Quality Assured</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
