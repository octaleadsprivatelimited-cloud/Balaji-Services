import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Flame,
  Zap,
  Droplets,
  Sun,
  Wind,
  UtensilsCrossed,
  Waves,
  Shield,
  Battery,
  Settings,
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { services } from '../data/services';

const Services: React.FC = () => {
  // Function to convert service name to slug
  const getServiceSlug = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
  };

  // Icon mapping for services
  const getServiceIcon = (serviceName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'Chimney': <Flame className="h-16 w-16 text-primary-600" />,
      'Hob': <UtensilsCrossed className="h-16 w-16 text-primary-600" />,
      'Micro Oven': <Zap className="h-16 w-16 text-primary-600" />,
      'Dishwasher Service': <Droplets className="h-16 w-16 text-primary-600" />,
      'Supreme Solar Sales': <Sun className="h-16 w-16 text-primary-600" />,
      'Washing Machine': <Waves className="h-16 w-16 text-primary-600" />,
      'Cooking Range': <Flame className="h-16 w-16 text-primary-600" />,
      'Geyser': <Droplets className="h-16 w-16 text-primary-600" />,
      'Aquaguard Sales': <Shield className="h-16 w-16 text-primary-600" />,
      'Generator Service': <Battery className="h-16 w-16 text-primary-600" />
    };
    return iconMap[serviceName] || <Settings className="h-16 w-16 text-primary-600" />;
  };

  return (
    <>
      <Helmet>
        <title>Our Services | Balaji Services - Home Appliance Installation & Repair Bangalore</title>
        <meta name="description" content="Explore our professional home appliance services in Bangalore - Chimney, Hob, Micro Oven, Dishwasher, Washing Machine, Cooking Range, Geyser, Aquaguard, Solar & Generator installation, repair & maintenance. Call +91-9902730741." />
        <meta name="keywords" content="chimney installation Bangalore, hob service, micro oven repair, dishwasher installation, washing machine service Bangalore, cooking range repair, geyser installation, Aquaguard service, solar installation, generator repair, home appliance services Bangalore" />
        <meta property="og:title" content="Our Services | Balaji Services - Home Appliance Experts" />
        <meta property="og:description" content="Professional home appliance installation, repair & maintenance in Bangalore." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Services | Balaji Services" />
        <meta name="twitter:description" content="Professional home appliance services in Bangalore." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Balaji Services" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white pt-24 pb-12 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/services/chimney.webp')`
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Home Appliances</span> & <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional appliance installation, sales, and service solutions for modern homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive home appliance solutions with unmatched quality and service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Service Image */}
                <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 relative z-10"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                    }}
                  />
                  {/* Fallback background - always visible */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    {getServiceIcon(service.name)}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      {getServiceIcon(service.name)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 5).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Balaji Services?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your trusted partner for all home appliance needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-12 w-12 text-yellow-400" />,
                title: "Expert Installation",
                description: "Professional installation by certified technicians"
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-400" />,
                title: "Quality Assured",
                description: "Top brands and premium quality products"
              },
              {
                icon: <Settings className="h-12 w-12 text-yellow-400" />,
                title: "Quick Service",
                description: "Fast and reliable service and repairs"
              },
              {
                icon: <Battery className="h-12 w-12 text-yellow-400" />,
                title: "After Sales Support",
                description: "Comprehensive warranty and support"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;
