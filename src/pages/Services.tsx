import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HardHat, 
  Target, 
  TreePine, 
  Settings, 
  Wrench, 
  Shield, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { openWhatsAppQuote } from '../utils/whatsapp';

const Services: React.FC = () => {
  // Function to convert service title to slug
  const getServiceSlug = (title: string): string => {
    const slugMap: { [key: string]: string } = {
      "Invisible Grill for Balconies": "invisible-grill-for-balconies",
      "Invisible Grill for Windows": "invisible-grill-for-windows", 
      "Invisible Grill for Apartments": "invisible-grill-for-apartments",
      "Pull & Dry Cloth Hangers": "pull-dry-cloth-hangers",
      "Ceiling Cloth Hangers": "ceiling-cloth-hangers",
      "Pull & Dry Cloth Hangers for Balconies": "pull-dry-cloth-hangers-for-balconies"
    };
    return slugMap[title] || title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
  };
  
  const services = [
    {
      icon: <Shield className="h-16 w-16 text-primary-600" />,
      image: "/images/safety-nets/invisible-grill-balconies.jpg",
      title: "Invisible Grill for Balconies",
      description: "Premium invisible grills for balconies. Choose from 5 wire sizes (2mm, 2.5mm, 3mm, 3.5mm, 4mm) - thicker wires for more strength, thinner for better invisibility",
      features: [
        "Available in 2mm, 2.5mm, 3mm, 3.5mm, 4mm",
        "Nearly invisible design",
        "Weather & rust resistant",
        "Child & pet safe",
        "Maintains your view"
      ],
    },
    {
      icon: <Target className="h-16 w-16 text-primary-600" />,
      image: "/images/safety-nets/invisible-grill-windows.jpg",
      title: "Invisible Grill for Windows",
      description: "Elegant window grills with 5 wire thickness options (2mm, 2.5mm, 3mm, 3.5mm, 4mm). Provides security without blocking sunlight or views - you won't even notice they're there!",
      features: [
        "Wire sizes: 2mm, 2.5mm, 3mm, 3.5mm, 4mm",
        "100% light & air passage",
        "Rust-proof stainless steel",
        "Custom fit any window",
        "Strong yet invisible"
      ],
    },
    {
      icon: <HardHat className="h-16 w-16 text-primary-600" />,
      image: "/images/safety-nets/invisible-grill-apartments.webp",
      title: "Invisible Grill for Apartments",
      description: "Complete apartment grill solutions available in 2mm, 2.5mm, 3mm, 3.5mm, and 4mm wire sizes. Perfect for high-rise safety - protects children and pets without blocking your beautiful view",
      features: [
        "Multiple sizes: 2mm to 4mm wires",
        "Bulk installation discounts",
        "Uniform appearance",
        "Weather & rust proof",
        "Professional team installation"
      ],
    },
    {
      icon: <Settings className="h-16 w-16 text-primary-600" />,
      image: "/images/safety-nets/pull-dry-cloth-hangers.jpg",
      title: "Pull & Dry Cloth Hangers",
      description: "Space-saving pull & dry hangers. Available in 4ft, 5ft, 6ft, 7ft, 8ft sizes with 3 or 6 rods - pull out to dry, fold back when done!",
      features: [
        "Sizes: 4ft, 5ft, 6ft, 7ft, 8ft",
        "3 rods or 6 rods options",
        "Rust-proof stainless steel",
        "Space-saving fold design",
        "Weather resistant"
      ],
    },
    {
      icon: <Wrench className="h-16 w-16 text-primary-600" />,
      image: "/images/safety-nets/ceiling-cloth-hangers.jpg",
      title: "Ceiling Cloth Hangers",
      description: "Ceiling hangers that save wall space! Choose from 4ft to 8ft lengths with 3 or 6 rods. Lower to load clothes, raise to dry - smart solution!",
      features: [
        "Lengths: 4ft, 5ft, 6ft, 7ft, 8ft",
        "3 or 6 rods capacity",
        "Ceiling-mounted - saves wall space",
        "Pulldown & raise mechanism",
        "Weather resistant"
      ],
    },
    {
      icon: <TreePine className="h-16 w-16 text-primary-600" />,
      image: "/images/safety-nets/pull-dry-cloth-hangers-balconies.jpg",
      title: "Pull & Dry Cloth Hangers for Balconies",
      description: "Balcony-specific hangers in 4ft to 8ft sizes with 3 or 6 rods. Extra weather-resistant for outdoor balcony use. Perfect for apartments!",
      features: [
        "Sizes: 4ft, 5ft, 6ft, 7ft, 8ft",
        "3 or 6 rods for laundry capacity",
        "Made for outdoor balconies",
        "Sun & rain resistant",
        "Space-saving fold design"
      ],
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Balaji Services</title>
        <meta name="description" content="Balaji Services - Professional service business in Hyderabad." />
        <meta property="og:title" content="Our Services | Balaji Services" />
        <meta property="og:description" content="Professional service business in Hyderabad." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Services | Balaji Services" />
        <meta name="twitter:description" content="Professional service business in Hyderabad." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Balaji Services" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Invisible Grill</span> & <span className="text-yellow-400">Cloth Hanger</span> Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional invisible grill installation and cloth hanger solutions for modern homes and apartments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openWhatsAppQuote}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Free Quote
              </button>
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
              We provide comprehensive invisible grill and cloth hanger solutions with unmatched quality and service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Service Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    {service.icon}
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/services/${getServiceSlug(service.title)}`}
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive invisible grill and cloth hanger solutions with unmatched quality and service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-yellow-400" />,
                title: "Quality First",
                description: "We uphold the highest standards, using only premium materials and components to ensure maximum security and durability for invisible grills."
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-yellow-400" />,
                title: "Customer Satisfaction",
                description: "Your security is our priority — we provide dedicated support, reliable service, and comprehensive invisible grill solutions."
              },
              {
                icon: <Settings className="h-12 w-12 text-yellow-400" />,
                title: "Innovation",
                description: "We continuously embrace the latest invisible grill technologies and industry best practices to deliver superior security solutions."
              },
              {
                icon: <HardHat className="h-12 w-12 text-yellow-400" />,
                title: "Security Commitment",
                description: "We are committed to protecting homes and ensuring security across all our invisible grill installations and services."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Home?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation and customized invisible grill solution quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917893987771"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call Now: +91 7893987771
              </a>
              <a
                href="https://wa.me/917893987771"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white hover:bg-white hover:text-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;