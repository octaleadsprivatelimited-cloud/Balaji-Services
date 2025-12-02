import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Download, 
  Eye,
  Flame,
  UtensilsCrossed,
  Zap,
  Droplets,
  Sun,
  Waves,
  Settings,
  Shield,
  Battery,
  X,
  ZoomIn,
  ArrowRight,
  Sparkles,
  Grid3x3,
  Image as ImageIcon,
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  Award,
  Clock
} from 'lucide-react';
import { services } from '../data/services';

const Gallery: React.FC = () => {
  // Organize services into gallery categories
  const galleryCategories = [
    {
      title: "Kitchen Appliances",
      icon: <Flame className="h-6 w-6" />,
      color: "accent",
      services: services.filter(s => s.category === "Kitchen Appliances")
    },
    {
      title: "Home Appliances",
      icon: <Waves className="h-6 w-6" />,
      color: "secondary",
      services: services.filter(s => s.category === "Home Appliances")
    },
    {
      title: "Water Solutions",
      icon: <Droplets className="h-6 w-6" />,
      color: "primary",
      services: services.filter(s => s.category === "Water Solutions")
    },
    {
      title: "Solar & Power",
      icon: <Sun className="h-6 w-6" />,
      color: "accent",
      services: services.filter(s => s.category === "Solar Solutions" || s.category === "Power Solutions")
    }
  ];

  // Convert services to gallery images format
  const galleryCategoriesWithImages = galleryCategories.map(category => ({
    ...category,
    images: category.services.map(service => ({
      src: service.image,
      alt: service.name,
      title: service.name
    }))
  })).filter(category => category.images.length > 0);

  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Balaji Services - Home Appliance Installation Photos Bangalore</title>
        <meta name="description" content="View our gallery of professional home appliance installations and service projects in Bangalore. See our quality work on Chimney, Hob, Washing Machine, Geyser, Solar panels & Generator installations." />
        <meta name="keywords" content="appliance installation gallery, chimney installation photos, hob installation images, washing machine service photos, geyser installation gallery, solar panel installation Bangalore, home appliance work samples, Balaji Services portfolio" />
        <meta property="og:title" content="Gallery | Balaji Services - Our Work Portfolio" />
        <meta property="og:description" content="View our gallery of professional home appliance installations in Bangalore." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Gallery | Balaji Services" />
        <meta name="twitter:description" content="View our home appliance installation gallery." />
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
              <Camera className="h-4 w-4 mr-2" />
              Our Work
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Photo <span className="text-accent-400">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Explore our professional appliance installations and quality service work across Bangalore. 
            See the difference our expertise makes in home appliances and professional service.
          </motion.p>
        </div>
      </section>

      {/* Gallery Categories - Redesigned */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-primary-50/20 relative overflow-hidden">
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
                <Grid3x3 className="h-4 w-4 mr-2" />
                Browse Collections
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Explore Photo <span className="text-primary-700">Gallery</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our extensive collection of completed projects showcasing our expertise in home appliance installation and service
            </p>
          </motion.div>

          {galleryCategoriesWithImages.map((category, categoryIndex) => {
            const colorClasses = {
              accent: {
                bg: "from-accent-500 to-accent-600",
                iconBg: "bg-accent-100",
                iconColor: "text-accent-600",
                border: "border-accent-200",
                hoverBg: "group-hover:from-accent-50 group-hover:to-accent-100/50"
              },
              secondary: {
                bg: "from-secondary-500 to-secondary-600",
                iconBg: "bg-secondary-100",
                iconColor: "text-secondary-600",
                border: "border-secondary-200",
                hoverBg: "group-hover:from-secondary-50 group-hover:to-secondary-100/50"
              },
              primary: {
                bg: "from-primary-500 to-primary-600",
                iconBg: "bg-primary-100",
                iconColor: "text-primary-600",
                border: "border-primary-200",
                hoverBg: "group-hover:from-primary-50 group-hover:to-primary-100/50"
              }
            };
            
            const colors = colorClasses[category.color as keyof typeof colorClasses] || colorClasses.accent;
            
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="mb-16 lg:mb-20"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8 lg:mb-12">
                  <div className={`${colors.iconBg} ${colors.iconColor} p-3 rounded-xl mr-4 shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <div className={`h-1 w-20 bg-gradient-to-r ${colors.bg} rounded-full`}></div>
                  </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {category.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                      onClick={() => openModal(image.src)}
                    >
                      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                        {/* Image Container */}
                        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                          {/* Fallback content if image fails - shown when image errors */}
                          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                            <div className="text-white text-center p-4 opacity-20">
                              {category.icon}
                            </div>
                          </div>
                          
                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20`}></div>
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              whileHover={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                              <div className={`bg-gradient-to-br ${colors.bg} rounded-full p-4 shadow-xl`}>
                                <ZoomIn className="h-6 w-6 text-white" />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                        
                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                          <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-accent-200 transition-colors duration-300">
                            {image.title}
                          </h4>
                        </div>

                        {/* Top Right Badge */}
                        <div className={`absolute top-3 right-3 ${colors.iconBg} ${colors.iconColor} px-2 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                          View
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Image Modal - Redesigned */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage}
                  alt="Gallery Image"
                  className="max-w-full max-h-[85vh] w-full h-auto object-contain"
                />
                
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-3 transition-all shadow-lg border border-white/20"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </motion.button>

                {/* Download Button */}
                <motion.a
                  href={selectedImage}
                  download
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white rounded-full p-3 transition-all shadow-lg flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="h-5 w-5" />
                  <span className="text-sm font-semibold hidden sm:inline">Download</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Get Started Section - Redesigned */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl"></div>
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
                  Get Started
                </span>
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Ready to Upgrade Your <span className="text-accent-400">Home?</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Contact us today for a free consultation and see how our quality home appliances and professional service can enhance your home or office. Get expert installation and reliable service for all your appliance needs.
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white">Free Consultation</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white">Quick Response</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center mb-3">
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
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
            >
              {/* Get Free Quote Button */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-accent-500/50 overflow-hidden min-w-[200px] sm:min-w-[240px]"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-accent-400/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              {/* Call Now Button */}
              <motion.a
                href="tel:+919902730741"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center hover:bg-white/20 overflow-hidden min-w-[200px] sm:min-w-[240px]"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span>Call Now</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-12"
            >
              <a
                href="https://wa.me/919902730741"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-4 sm:px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 mr-2 text-secondary-400" />
                <span className="text-sm sm:text-base font-semibold text-white">WhatsApp</span>
              </a>
              <a
                href="tel:+919902730741"
                className="group flex items-center px-4 sm:px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2 text-accent-400" />
                <span className="text-sm sm:text-base font-semibold text-white">
                  +91-9902730741 / +91-8123288996
                </span>
              </a>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <Star className="h-5 w-5 text-accent-400 mr-2 fill-accent-400" />
              <span className="text-white font-semibold text-sm sm:text-base">
                Trusted by 4500+ Happy Customers
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Gallery;
