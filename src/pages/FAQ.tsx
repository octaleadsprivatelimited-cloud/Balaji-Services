import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  Lightbulb,
  Zap,
  Shield,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Settings,
  Award,
  Wrench,
  Droplets,
  Sun,
  Battery
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Kitchen Appliances",
      icon: <Settings className="h-6 w-6" />,
      color: "accent",
      questions: [
        {
          question: "How long does chimney installation take?",
          answer: "Chimney installation typically takes 2-4 hours depending on the model and kitchen setup. Our certified technicians ensure proper fitting and testing. For hob installation, it takes 1-2 hours, while dishwasher installation can take 2-3 hours including plumbing and electrical connections."
        },
        {
          question: "Do you provide warranty for kitchen appliances?",
          answer: "Yes, we provide comprehensive warranties on all kitchen appliances. Chimney and hob come with manufacturer warranty plus our service warranty. Dishwasher installation includes warranty on installation work and connections. We also offer extended warranty options for peace of mind."
        },
        {
          question: "What brands of kitchen appliances do you service?",
          answer: "We service and install all major brands including Elica, Hindware, Faber, Bosch, IFB, LG, Samsung, Whirlpool, and more. Our technicians are trained to work with various brands and models. We also provide genuine spare parts for repairs and maintenance."
        },
        {
          question: "How often should I service my kitchen chimney?",
          answer: "We recommend professional chimney service every 6 months for regular use, or every 3-4 months for heavy cooking. Regular servicing includes filter cleaning, motor inspection, and maintenance of auto-clean systems. This ensures optimal performance and longevity of your chimney."
        }
      ]
    },
    {
      title: "Service & Maintenance",
      icon: <Wrench className="h-6 w-6" />,
      color: "secondary",
      questions: [
        {
          question: "Do you provide emergency repair services?",
          answer: "Yes, we offer 24/7 emergency repair services for urgent appliance breakdowns. Our emergency team can respond quickly to address issues with washing machines, geysers, generators, and other critical appliances. Call us anytime for immediate assistance."
        },
        {
          question: "What is included in your appliance service?",
          answer: "Our comprehensive service includes thorough inspection, cleaning, lubrication of moving parts, replacement of worn components, testing of all functions, and preventive maintenance. We also provide genuine spare parts and detailed service reports. Our technicians are trained and certified."
        },
        {
          question: "How much does appliance service cost?",
          answer: "Service costs vary based on the appliance type and work required. We offer free diagnostic visits, and our service charges are transparent with no hidden costs. Regular maintenance packages are available at discounted rates. Contact us for detailed pricing based on your specific needs."
        }
      ]
    },
    {
      title: "Water Solutions",
      icon: <Droplets className="h-6 w-6" />,
      color: "primary",
      questions: [
        {
          question: "What types of geysers do you install and service?",
          answer: "We install and service all types of geysers including storage geysers, instant geysers, solar geysers, and gas geysers. We work with all major brands like AO Smith, Havells, Bajaj, Racold, and more. Our services include installation, repair, maintenance, and replacement."
        },
        {
          question: "What is Aquaguard and why do I need it?",
          answer: "Aquaguard water purifiers provide clean, safe drinking water by removing impurities, bacteria, viruses, and harmful chemicals. We offer Aquaguard sales and installation services. Regular maintenance ensures optimal filtration and extends the life of your water purifier."
        },
        {
          question: "How often should I service my water purifier?",
          answer: "Water purifier service is recommended every 6 months for optimal performance. This includes filter replacement, UV lamp checking, RO membrane inspection, and sanitization. Regular service ensures clean, safe drinking water and prevents health issues."
        }
      ]
    },
    {
      title: "Power Solutions",
      icon: <Battery className="h-6 w-6" />,
      color: "accent",
      questions: [
        {
          question: "What types of generators do you service?",
          answer: "We service all types of generators including diesel generators, petrol generators, inverter generators, and standby generators. Our services include installation, regular maintenance, repairs, fuel system cleaning, battery replacement, and load testing. We ensure your generator is always ready when you need it."
        },
        {
          question: "How often should I service my generator?",
          answer: "Generator service should be done every 3-6 months depending on usage. Regular service includes oil change, filter replacement, battery check, fuel system inspection, and load testing. This ensures reliable performance during power cuts and extends the generator's lifespan."
        },
        {
          question: "Do you provide generator installation services?",
          answer: "Yes, we provide professional generator installation services. Our certified technicians ensure proper installation including electrical connections, exhaust system setup, fuel line connections, and safety compliance. We also provide installation warranty and post-installation support."
        }
      ]
    },
    {
      title: "General Questions",
      icon: <HelpCircle className="h-6 w-6" />,
      color: "primary",
      questions: [
        {
          question: "Do you service appliances in Bangalore?",
          answer: "Yes, we provide appliance installation, service, and repair throughout Bangalore. Our service areas include all major localities in Bangalore. We offer same-day service for urgent repairs and scheduled appointments for installations and regular maintenance."
        },
        {
          question: "What are your service charges?",
          answer: "We offer competitive and transparent pricing. Service charges vary based on the appliance type and work required. We provide free diagnosis and quotes before starting any work. No hidden charges - you pay only for the services you need. Contact us for specific pricing."
        },
        {
          question: "Are your technicians certified?",
          answer: "Yes, all our technicians are certified, trained, and experienced. They undergo regular training to stay updated with the latest appliances and technologies. We ensure quality service, proper installation, and reliable repairs. Your satisfaction and safety are our top priorities."
        },
        {
          question: "Do you provide genuine spare parts?",
          answer: "Yes, we use only genuine OEM spare parts for all repairs and replacements. We maintain a stock of commonly required parts for quick service. Using genuine parts ensures optimal performance, maintains warranty, and extends the life of your appliances."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | Balaji Services</title>
        <meta name="description" content="Frequently asked questions about Balaji Services - Appliance installation, service, and repair in Bangalore. Get answers about kitchen appliances, water solutions, solar systems, and generator services." />
        <meta property="og:title" content="FAQ - Frequently Asked Questions | Balaji Services" />
        <meta property="og:description" content="Get answers about appliance installation, service, and repair in Bangalore. Expert solutions for kitchen appliances, washing machines, geysers, water purifiers, solar systems, and generators." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FAQ - Frequently Asked Questions | Balaji Services" />
        <meta name="twitter:description" content="Get answers about appliance installation, service, and repair in Bangalore." />
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
              <HelpCircle className="h-4 w-4 mr-2" />
              Help Center
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Frequently Asked <span className="text-accent-400">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Get answers to common questions about appliance installation, service, repair, and maintenance. 
            Everything you need to know about Balaji Services in Bangalore.
          </motion.p>
        </div>
      </section>

      {/* FAQ Categories - Redesigned */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-primary-50/20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-accent-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {faqCategories.map((category, categoryIndex) => {
              const colorClasses = {
                accent: {
                  bg: "from-accent-500 to-accent-600",
                  iconBg: "bg-accent-100",
                  iconColor: "text-accent-600",
                  answerBg: "bg-accent-50",
                  border: "border-accent-200",
                  hoverBg: "hover:bg-accent-50"
                },
                secondary: {
                  bg: "from-secondary-500 to-secondary-600",
                  iconBg: "bg-secondary-100",
                  iconColor: "text-secondary-600",
                  answerBg: "bg-secondary-50",
                  border: "border-secondary-200",
                  hoverBg: "hover:bg-secondary-50"
                },
                primary: {
                  bg: "from-primary-500 to-primary-600",
                  iconBg: "bg-primary-100",
                  iconColor: "text-primary-600",
                  answerBg: "bg-primary-50",
                  border: "border-primary-200",
                  hoverBg: "hover:bg-primary-50"
                }
              };
              
              const colors = colorClasses[category.color as keyof typeof colorClasses] || colorClasses.primary;
              
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${colors.bg} text-white p-6 sm:p-8`}>
                    <div className="flex items-center space-x-4">
                      <div className={`${colors.iconBg} ${colors.iconColor} p-3 rounded-xl shadow-lg`}>
                        {category.icon}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold">{category.title}</h2>
                    </div>
                  </div>
                  
                  {/* Questions */}
                  <div className="p-6 sm:p-8">
                    {category.questions.map((item, questionIndex) => {
                      // Calculate unique index by summing questions in previous categories
                      let itemIndex = 0;
                      for (let i = 0; i < categoryIndex; i++) {
                        itemIndex += faqCategories[i].questions.length;
                      }
                      itemIndex += questionIndex;
                      const isOpen = openItems.includes(itemIndex);
                      
                      return (
                        <div key={questionIndex} className="mb-4 last:mb-0">
                          <motion.button
                            onClick={() => toggleItem(itemIndex)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full text-left p-4 sm:p-5 bg-gray-50 ${colors.hoverBg} rounded-xl transition-all duration-300 flex items-center justify-between border ${colors.border} group`}
                          >
                            <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base leading-relaxed">
                              {item.question}
                            </span>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className={`flex-shrink-0 ${colors.iconColor}`}
                            >
                              <ChevronDown className="h-5 w-5" />
                            </motion.div>
                          </motion.button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className={`mt-3 p-4 sm:p-5 ${colors.answerBg} rounded-xl border ${colors.border}`}>
                                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                    {item.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Help Section - Redesigned */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
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
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
                <Lightbulb className="h-4 w-4 mr-2" />
                Need More Help?
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Still Have <span className="text-accent-400">Questions?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Can't find the answer you're looking for? Our appliance service experts are here to help. Contact us for expert advice on installation, repair, and maintenance.
            </p>
            
            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
              <motion.a
                href="tel:+919902730741"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-accent-500/50 overflow-hidden min-w-[200px] sm:min-w-[240px]"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span>Call Our Experts</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.a>
              
              <motion.a
                href="https://wa.me/919902730741"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center hover:bg-white/20 overflow-hidden min-w-[200px] sm:min-w-[240px]"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                <span>WhatsApp Us</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-6 text-gray-300"
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-400 mr-2" />
                <span className="text-sm sm:text-base">24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-400 mr-2" />
                <span className="text-sm sm:text-base">Expert Advice</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-400 mr-2" />
                <span className="text-sm sm:text-base">Quick Response</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default FAQ;