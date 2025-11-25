import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Globe, 
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Target,
  Shield,
  Heart,
  Lightbulb,
  Lock,
  BadgeCheck,
  FileCheck,
  MessageCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { number: "5000+", label: "Appliances Installed", icon: <CheckCircle className="h-8 w-8" /> },
    { number: "4500+", label: "Happy Customers", icon: <Users className="h-8 w-8" /> },
    { number: "10+", label: "Service Categories", icon: <Award className="h-8 w-8" /> },
    { number: "15+", label: "Years Experience", icon: <Globe className="h-8 w-8" /> }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We uphold the highest standards, offering only premium brands and quality appliances with warranty coverage and reliable performance.",
      icon: <Award className="h-6 w-6" />,
      color: "accent"
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority — we provide dedicated support, timely service, and comprehensive solutions for all your appliance needs.",
      icon: <Heart className="h-6 w-6" />,
      color: "secondary"
    },
    {
      title: "Expert Service",
      description: "Our certified technicians bring years of experience and stay updated with the latest appliance technologies to deliver superior installation and repair services.",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "primary"
    },
    {
      title: "Reliability",
      description: "We are committed to providing dependable service, genuine parts, and long-term support across all our appliance sales and service offerings.",
      icon: <Shield className="h-6 w-6" />,
      color: "accent"
    }
  ];


  const certifications = [
    "Expert Technicians",
    "Genuine Parts Guarantee",
    "Professional Installation",
    "Comprehensive Warranty",
    "Quality Appliance Brands",
    "Timely Service",
    "Customer Support",
    "Reliable Maintenance"
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Balaji Services</title>
        <meta name="description" content="Learn about Balaji Services - Professional home appliance sales and service in Bangalore. Expert installation and repair for Chimney, Hob, Washing Machine, Geyser, and more." />
        <meta property="og:title" content="About Us | Balaji Services" />
        <meta property="og:description" content="Professional service business in Bangalore." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Us | Balaji Services" />
        <meta name="twitter:description" content="Professional service business in Bangalore." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Balaji Services" />
      </Helmet>
      <div className="pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/services/chimney.webp')`
          }}
        ></div>
        
        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            About Balaji Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto font-medium"
          >
            Balaji Services specializes in providing comprehensive home appliance solutions in Bangalore. From kitchen essentials to laundry and water solutions, we offer expert installation, sales, and reliable service for all your home appliance needs. Quality products and professional service guaranteed.
          </motion.p>
        </div>
      </section>

      {/* Company Story - Redesigned */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-primary-50/20 to-secondary-50/20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-200/10 rounded-full blur-3xl"></div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold">
                <Award className="h-4 w-4 mr-2" />
                Our Journey
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-700">Story</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of excellence, innovation, and unwavering commitment to quality service
            </p>
          </motion.div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Story Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-4 border-accent-500"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-500 rounded-full"></div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Founded with <span className="font-bold text-primary-700">15+ years of experience</span>, Balaji Services began with a clear mission: to provide high-quality home appliances and professional service solutions for homes and businesses across Bangalore.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-4 border-secondary-500"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary-500 rounded-full"></div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      What began as a small team of passionate appliance service experts has grown into one of Bangalore's most trusted home appliance companies, proudly serving over <span className="font-bold text-primary-700">4500+ satisfied customers</span>.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-4 border-primary-500"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Today, we continue to expand our service offerings while upholding our core commitment to quality products, expert installation, reliable service, and exceptional customer satisfaction.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Mission & Vision Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-accent-500 to-accent-600 p-6 sm:p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 border-4 border-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 border-4 border-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                      <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/95">
                    To be Bangalore's most trusted home appliance service provider by delivering quality products, expert installation, and reliable service for all your appliance needs.
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-secondary-500 to-secondary-600 p-6 sm:p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-32 h-32 border-4 border-white rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-20 h-20 border-4 border-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-white/95">
                    To become the leading home appliance service provider in Bangalore, making quality appliances and reliable service accessible to every home and business.
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements - Redesigned */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl"></div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                <Star className="h-4 w-4 mr-2 fill-primary-600" />
                Milestones
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-700">Achievements</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for our success and growth
            </p>
          </motion.div>
          
          {/* Achievements Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Glassmorphism Card */}
                  <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col items-center justify-center">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-transparent to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Decorative Blur Circles */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-200/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary-200/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative mb-4 sm:mb-6 z-10"
                    >
                      <div className="relative">
                        {/* Icon Background Circle with Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <div className="text-white">
                            {React.cloneElement(achievement.icon, { className: "h-8 w-8 sm:h-10 sm:w-10" })}
                          </div>
                        </div>
                        {/* Decorative Ring */}
                        <div className="absolute inset-0 border-2 border-accent-300/50 rounded-full animate-pulse"></div>
                      </div>
                    </motion.div>

                    {/* Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="relative z-10 mb-2 sm:mb-3"
                    >
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-700 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
                        {achievement.number}
                      </div>
                    </motion.div>

                    {/* Label */}
                    <div className="relative z-10 text-center">
                      <p className="text-sm sm:text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {achievement.label}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Redesigned */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-primary-50/20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-secondary-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-200/10 rounded-full blur-3xl"></div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-semibold">
                <Heart className="h-4 w-4 mr-2 fill-secondary-600" />
                What We Stand For
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-700">Core Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const colorClasses = {
                accent: {
                  iconBg: "from-accent-500 to-accent-600",
                  iconBorder: "border-accent-300",
                  iconShadow: "shadow-accent-200/50",
                  accentLine: "bg-accent-500",
                  hoverBg: "group-hover:from-accent-50 group-hover:to-accent-100/50"
                },
                secondary: {
                  iconBg: "from-secondary-500 to-secondary-600",
                  iconBorder: "border-secondary-300",
                  iconShadow: "shadow-secondary-200/50",
                  accentLine: "bg-secondary-500",
                  hoverBg: "group-hover:from-secondary-50 group-hover:to-secondary-100/50"
                },
                primary: {
                  iconBg: "from-primary-500 to-primary-600",
                  iconBorder: "border-primary-300",
                  iconShadow: "shadow-primary-200/50",
                  accentLine: "bg-primary-500",
                  hoverBg: "group-hover:from-primary-50 group-hover:to-primary-100/50"
                }
              };
              
              const colors = colorClasses[value.color as keyof typeof colorClasses] || colorClasses.primary;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <div className="relative h-full bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Hover Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-gray-100/50 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative mb-6 z-10"
                    >
                      <div className="relative inline-block">
                        {/* Icon Background with Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.iconBg} rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300`}></div>
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${colors.iconBg} rounded-xl flex items-center justify-center ${colors.iconShadow} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <div className="text-white">
                            {React.cloneElement(value.icon, { className: "h-8 w-8" })}
                          </div>
                        </div>
                        {/* Decorative Ring */}
                        <div className={`absolute -inset-2 border-2 ${colors.iconBorder} rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.accentLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                    {/* Top Left Accent Dot */}
                    <div className={`absolute top-4 left-4 w-2 h-2 ${colors.accentLine} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Temporarily Hidden */}
      {/* 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your safety success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Experience:</strong> {member.experience}
                </p>
                <p className="text-gray-600">
                  <strong>Expertise:</strong> {member.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Certifications & Standards - Redesigned */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
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
          {/* Section Header */}
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
                <BadgeCheck className="h-4 w-4 mr-2" />
                Quality Assurance
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Certifications & <span className="text-accent-400">Standards</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
              We maintain the highest quality standards and service excellence for all our appliance installations and repairs
            </p>
          </motion.div>
          
          {/* Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 overflow-hidden">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 via-transparent to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary-400/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mb-4 sm:mb-6 z-10 flex justify-center"
                  >
                    <div className="relative">
                      {/* Icon Background with Glow */}
                      <div className="absolute inset-0 bg-accent-400/30 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-accent-400/50 transition-shadow duration-300">
                        {index % 2 === 0 ? (
                          <BadgeCheck className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                        ) : (
                          <FileCheck className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                        )}
                      </div>
                      {/* Decorative Ring */}
                      <div className="absolute -inset-2 border-2 border-accent-300/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    </div>
                  </motion.div>

                  {/* Certification Text */}
                  <div className="relative z-10 text-center">
                    <p className="text-sm sm:text-base lg:text-lg font-semibold text-white leading-relaxed group-hover:text-accent-100 transition-colors duration-300">
                      {cert}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-16 text-center"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Shield className="h-5 w-5 text-accent-400 mr-2" />
              <span className="text-white font-semibold">Certified & Trusted Appliance Solutions</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas - Redesigned */}
      <section id="locations" className="py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-primary-50/20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-accent-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/10 rounded-full blur-3xl"></div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                <MapPin className="h-4 w-4 mr-2 fill-primary-600" />
                Coverage Areas
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Service <span className="text-primary-700">Areas</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve all areas within Bangalore and surrounding regions
            </p>
          </motion.div>
          
          {/* Service Areas Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {['Bangalore Central', 'Indiranagar', 'Koramangala', 'Whitefield', 'Electronic City',
              'MG Road & Brigade Road', 'Marathahalli', 'HSR Layout', 'BTM Layout', 'JP Nagar',
              'Bannerghatta Road', 'Hosur Road', 'Outer Ring Road', 'Sarjapur Road', 'Bellandur',
              'KR Puram', 'Hebbal', 'Yelahanka', 'Rajajinagar', 'Vijayanagar',
              'Malleshwaram', 'Yeshwanthpur', 'Peenya', 'Jalahalli', 'Dasarahalli',
              'Magadi Road', 'Tumkur Road', 'Nelamangala', 'Devanahalli', 'Bangalore Airport',
              'Varthur', 'Kadugodi', 'Hoskote', 'Old Airport Road', 'CV Raman Nagar'].map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col items-center justify-center min-h-[100px] sm:min-h-[120px]">
                  {/* Hover Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-200/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-secondary-200/30 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.15, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mb-2 sm:mb-3 z-10"
                  >
                    <div className="relative">
                      {/* Icon Background with Glow */}
                      <div className="absolute inset-0 bg-accent-400/20 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-accent-400/50 transition-shadow duration-300">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                    </div>
                  </motion.div>

                  {/* City Name */}
                  <div className="relative z-10 text-center">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight group-hover:text-primary-700 transition-colors duration-300">
                      {city}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-16 text-center"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary-50 border border-primary-200">
              <Globe className="h-5 w-5 text-primary-600 mr-2" />
              <span className="text-primary-700 font-semibold text-sm sm:text-base">
                Serving Bangalore & Surrounding Regions
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 right-10 opacity-20">
          <Sparkles className="h-16 w-16 text-accent-400 animate-pulse" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <Star className="h-12 w-12 text-secondary-400 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Section Header */}
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
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Get Started Today
                </span>
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Ready to Work with <span className="text-accent-400">Us?</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Join our growing family of satisfied customers and experience the Balaji Services difference - quality appliances, expert installation, and reliable service
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
            >
              {/* Call Button */}
              <motion.a
                href="tel:+918790839401"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-accent-500/50 overflow-hidden min-w-[200px] sm:min-w-[240px]"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                <span>Call Now</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-accent-400/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/918790839401"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center hover:bg-white/20 overflow-hidden min-w-[200px] sm:min-w-[240px]"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/20 to-secondary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                <span>WhatsApp Us</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-gray-300"
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-400 mr-2" />
                <span className="text-sm sm:text-base">Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-400 mr-2" />
                <span className="text-sm sm:text-base">Quick Response</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-400 mr-2" />
                <span className="text-sm sm:text-base">Expert Service</span>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/10"
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Phone className="h-5 w-5 text-accent-400 mr-3" />
                <span className="text-white font-semibold text-base sm:text-lg">
                  +91 8790839401
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
