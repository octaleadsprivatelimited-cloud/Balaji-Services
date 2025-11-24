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
  Award
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
      title: "Invisible Grill Installation",
      icon: <Shield className="h-6 w-6" />,
      color: "accent",
      questions: [
        {
          question: "How long does invisible grill installation take?",
          answer: "Installation time varies by project size. Simple balcony grills take 2-4 hours, while large apartment complexes may take 1-3 days. We provide accurate timelines during our free consultation."
        },
        {
          question: "What types of invisible grills do you offer?",
          answer: "We offer comprehensive invisible grill solutions including balcony grills, window grills, apartment grills, stainless steel grills, and custom-designed grills for all types of properties."
        },
        {
          question: "Do you provide custom sizing?",
          answer: "Yes, we provide custom sizing for all our invisible grill services. Our team takes precise measurements and creates grills tailored to your specific requirements and space constraints."
        }
      ]
    },
    {
      title: "Safety & Quality",
      icon: <Award className="h-6 w-6" />,
      color: "secondary",
      questions: [
        {
          question: "Are your invisible grills certified and tested?",
          answer: "Yes, all our invisible grills meet international safety standards and are tested for strength, durability, and weather resistance. We use certified materials and follow strict quality control processes."
        },
        {
          question: "What materials are used in your invisible grills?",
          answer: "We use high-quality materials including marine-grade stainless steel cables (316 S.S.), UV-resistant nylon coating, and specialized grill materials. All materials are weather-resistant, durable, and designed for long-term outdoor use."
        },
        {
          question: "Can invisible grills withstand harsh weather?",
          answer: "Our invisible grills are designed to withstand various weather conditions including rain, wind, and UV exposure. They're made from weather-resistant materials and are tested for durability in different climates."
        }
      ]
    },
    {
      title: "General Questions",
      icon: <HelpCircle className="h-6 w-6" />,
      color: "primary",
      questions: [
        {
          question: "What are invisible grills and why do I need them?",
          answer: "Invisible grills are protective barriers made from high-strength stainless steel cables designed to provide security while maintaining unobstructed views. They're essential for balconies, windows, apartments, and areas where safety and aesthetics are both important."
        },
        {
          question: "How long do invisible grills last?",
          answer: "Our high-quality invisible grills typically last 10-15 years depending on usage and environmental conditions. We provide warranties ranging from 5-10 years and offer maintenance services to extend their lifespan."
        },
        {
          question: "Do invisible grills require maintenance?",
          answer: "Invisible grills require minimal maintenance. We recommend annual inspections to check for wear, damage, or loose fittings. Our team provides professional maintenance services to ensure optimal performance."
        }
      ]
    },
    {
      title: "Cloth Hangers & Support",
      icon: <Settings className="h-6 w-6" />,
      color: "accent",
      questions: [
        {
          question: "What types of cloth hangers do you provide?",
          answer: "We provide various cloth hanger solutions including pull & dry cloth hangers, ceiling cloth hangers, balcony cloth hangers, and custom-designed hanger systems for all your drying needs."
        },
        {
          question: "What warranty do you provide?",
          answer: "We provide comprehensive warranties ranging from 3-5 years depending on the service type. Our warranty covers material defects, workmanship, and includes free repairs or replacement for covered issues."
        },
        {
          question: "Do you offer emergency services?",
          answer: "Yes, we provide 24/7 emergency support for urgent invisible grill repairs or installations. Our emergency team can respond quickly to ensure your security needs are met immediately."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | Balaji Services</title>
        <meta name="description" content="Frequently asked questions about Balaji Services." />
        <meta property="og:title" content="FAQ - Frequently Asked Questions | Balaji Services" />
        <meta property="og:description" content="Frequently asked questions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FAQ - Frequently Asked Questions | Balaji Services" />
        <meta name="twitter:description" content="Frequently asked questions." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Balaji Services" />
      </Helmet>
      <div className="pt-16">
      {/* Hero Section - Redesigned */}
      <section className="relative text-white py-10 lg:py-16 overflow-hidden min-h-[40vh] sm:min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('/images/safety-nets/invisible-grill-balconies.jpg')`
        }}></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        
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
            Get answers to common questions about invisible grills, cloth hangers, installation, and maintenance. 
            Everything you need to know about Balaji Services.
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
                      const itemIndex = categoryIndex * 3 + questionIndex;
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
              Can't find the answer you're looking for? Our invisible grill experts are here to help.
            </p>
            
            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
              <motion.a
                href="tel:+917893987771"
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
                href="https://wa.me/917893987771"
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