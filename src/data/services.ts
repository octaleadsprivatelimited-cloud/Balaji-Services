export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  features: string[];
  applications: string[];
  benefits: string[];
  materials: string[];
  installation: string[];
  maintenance: string[];
  warranty: string;
  image: string;
  heroImage: string;
  gallery: string[];
  priceRange: string;
  category: string;
  popular: boolean;
}

export const services: Service[] = [
  {
    id: "chimney",
    name: "Chimney",
    slug: "chimney",
    description: "Professional chimney installation, service, and repair for your kitchen. We offer top-quality chimney solutions to keep your kitchen smoke-free and fresh. Expert installation by certified technicians with comprehensive warranty support.",
    shortDescription: "Professional chimney installation, service, and repair solutions",
    features: [
      "Auto-clean technology",
      "Powerful suction capacity",
      "Multiple filter options",
      "Energy-efficient models",
      "LED lighting included",
      "Touch control panels",
      "Stainless steel construction",
      "Professional installation"
    ],
    applications: [
      "Residential kitchens",
      "Commercial kitchens",
      "Restaurants",
      "Hotels",
      "Catering services",
      "Modular kitchens",
      "Open kitchens",
      "Compact kitchens"
    ],
    benefits: [
      "Removes smoke and odors",
      "Clean kitchen environment",
      "Improved air quality",
      "Energy savings",
      "Easy maintenance",
      "Modern appearance",
      "Long-lasting performance",
      "Value for money"
    ],
    materials: [
      "Premium stainless steel",
      "High-quality filters",
      "Advanced motor technology",
      "LED lighting systems",
      "Touch control panels",
      "Durable mounting brackets"
    ],
    installation: [
      "Site inspection",
      "Measurement and planning",
      "Professional installation",
      "Quality testing",
      "Final inspection"
    ],
    maintenance: [
      "Regular cleaning service",
      "Filter replacement",
      "Motor servicing",
      "Annual maintenance",
      "Emergency repairs"
    ],
    warranty: "1-2 years warranty on installation and parts",
    image: "/images/services/chimney.webp",
    heroImage: "/images/services/chimney.webp",
    gallery: [
      "/images/services/chimney.webp"
    ],
    priceRange: "Contact for pricing",
    category: "Kitchen Appliances",
    popular: true
  },
  {
    id: "hob",
    name: "Hob",
    slug: "hob",
    description: "Premium hob installation and service solutions. We provide high-quality gas hobs and induction hobs with professional installation and maintenance services. Choose from various sizes and configurations to match your kitchen needs.",
    shortDescription: "Premium hob installation and service for modern kitchens",
    features: [
      "Gas and induction options",
      "Multiple burner configurations",
      "Auto-ignition system",
      "Safety flame failure device",
      "Easy-to-clean surfaces",
      "Efficient heating",
      "Modern design",
      "Professional installation"
    ],
    applications: [
      "Home kitchens",
      "Modular kitchens",
      "Commercial kitchens",
      "Restaurants",
      "Catering units",
      "Hotels",
      "Residential complexes",
      "Villas"
    ],
    benefits: [
      "Quick and efficient cooking",
      "Energy efficient",
      "Easy to use",
      "Safe operation",
      "Modern appearance",
      "Long-lasting",
      "Low maintenance",
      "Warranty protection"
    ],
    materials: [
      "Stainless steel construction",
      "Tempered glass tops",
      "Premium burners",
      "Safety valves",
      "Quality knobs",
      "Durable frames"
    ],
    installation: [
      "Kitchen assessment",
      "Gas connection setup",
      "Professional installation",
      "Safety testing",
      "Quality check"
    ],
    maintenance: [
      "Regular cleaning",
      "Burner servicing",
      "Gas leak checking",
      "Annual maintenance",
      "Repair services"
    ],
    warranty: "1-2 years warranty on installation and parts",
    image: "/images/services/hob.jpg",
    heroImage: "/images/services/hob.jpg",
    gallery: [
      "/images/services/hob.jpg"
    ],
    priceRange: "Contact for pricing",
    category: "Kitchen Appliances",
    popular: true
  },
  {
    id: "micro-oven",
    name: "Micro Oven",
    slug: "micro-oven",
    description: "Microwave oven installation, service, and repair solutions. We offer a wide range of microwave ovens from top brands with professional installation and comprehensive after-sales support. Keep your kitchen equipped with the latest technology.",
    shortDescription: "Microwave oven installation, service, and repair solutions",
    features: [
      "Multiple capacity options",
      "Auto-cook programs",
      "Defrost function",
      "Grill and convection modes",
      "Child lock safety",
      "Digital display",
      "Easy-to-clean interior",
      "Professional installation"
    ],
    applications: [
      "Home kitchens",
      "Office pantries",
      "Hostels",
      "Hotels",
      "Restaurants",
      "Commercial spaces",
      "Residential complexes",
      "Studio apartments"
    ],
    benefits: [
      "Quick cooking and heating",
      "Energy efficient",
      "Versatile cooking options",
      "Easy to operate",
      "Space-saving design",
      "Modern features",
      "Reliable performance",
      "Warranty coverage"
    ],
    materials: [
      "Stainless steel exterior",
      "Ceramic interior coating",
      "Quality magnetron",
      "Digital controls",
      "Safety door lock",
      "Premium components"
    ],
    installation: [
      "Location assessment",
      "Electrical setup",
      "Professional installation",
      "Functionality testing",
      "User guidance"
    ],
    maintenance: [
      "Regular cleaning service",
      "Interior maintenance",
      "Component servicing",
      "Annual check-ups",
      "Repair services"
    ],
    warranty: "1-2 years warranty on installation and parts",
    image: "/images/services/micro-oven.jpeg",
    heroImage: "/images/services/micro-oven.jpeg",
    gallery: [
      "/images/services/micro-oven.jpeg"
    ],
    priceRange: "Contact for pricing",
    category: "Kitchen Appliances",
    popular: true
  },
  {
    id: "dishwasher-service",
    name: "Dishwasher Service",
    slug: "dishwasher-service",
    description: "Complete dishwasher service, installation, and repair solutions. We provide professional service for all major dishwasher brands. From installation to regular maintenance and emergency repairs, we ensure your dishwasher runs smoothly.",
    shortDescription: "Professional dishwasher service, installation, and repair",
    features: [
      "Installation service",
      "Regular maintenance",
      "Emergency repairs",
      "Parts replacement",
      "Deep cleaning",
      "Water filter service",
      "All major brands",
      "Expert technicians"
    ],
    applications: [
      "Home kitchens",
      "Commercial kitchens",
      "Restaurants",
      "Hotels",
      "Catering services",
      "Residential complexes",
      "Office pantries",
      "Apartments"
    ],
    benefits: [
      "Time-saving convenience",
      "Hygienic cleaning",
      "Water efficiency",
      "Extended appliance life",
      "Regular maintenance",
      "Quick repairs",
      "Expert service",
      "Affordable pricing"
    ],
    materials: [
      "Original spare parts",
      "Quality cleaning agents",
      "Premium filters",
      "Professional tools",
      "Service kits",
      "Replacement components"
    ],
    installation: [
      "Site assessment",
      "Water connection setup",
      "Professional installation",
      "Testing and calibration",
      "User training"
    ],
    maintenance: [
      "Monthly cleaning",
      "Filter replacement",
      "Parts inspection",
      "Annual servicing",
      "Emergency repairs"
    ],
    warranty: "Service warranty on all repairs",
    image: "/images/services/dishwasher.webp",
    heroImage: "/images/services/dishwasher.webp",
    gallery: [
      "/images/services/dishwasher.webp"
    ],
    priceRange: "Contact for service charges",
    category: "Kitchen Appliances",
    popular: false
  },
  {
    id: "supreme-solar-sales",
    name: "Supreme Solar Sales",
    slug: "supreme-solar-sales",
    description: "Supreme quality solar panel sales and installation services. We provide top-grade solar solutions for residential and commercial use. Reduce your electricity bills with our efficient solar systems and expert installation services.",
    shortDescription: "Premium solar panel sales and installation services",
    features: [
      "High-efficiency panels",
      "Grid-tied systems",
      "Off-grid solutions",
      "Battery backup options",
      "Professional installation",
      "Government subsidy support",
      "Maintenance packages",
      "Long warranty"
    ],
    applications: [
      "Residential rooftops",
      "Commercial buildings",
      "Industrial units",
      "Villas",
      "Apartments",
      "Farms",
      "Educational institutions",
      "Hospitals"
    ],
    benefits: [
      "Reduce electricity bills",
      "Clean energy source",
      "Government subsidies",
      "Long-term savings",
      "Low maintenance",
      "Environment friendly",
      "High ROI",
      "Reliable power supply"
    ],
    materials: [
      "Premium solar panels",
      "Quality inverters",
      "Battery systems",
      "Mounting structures",
      "Cables and connectors",
      "Monitoring systems"
    ],
    installation: [
      "Site survey",
      "System design",
      "Professional installation",
      "Grid connection",
      "Commissioning and testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Performance monitoring",
      "Annual servicing",
      "Battery maintenance",
      "Emergency repairs"
    ],
    warranty: "10-25 years warranty on panels and systems",
    image: "/images/services/solar.webp",
    heroImage: "/images/services/solar.webp",
    gallery: [
      "/images/services/solar.webp"
    ],
    priceRange: "Contact for quote",
    category: "Solar Solutions",
    popular: true
  },
  {
    id: "washing-machine",
    name: "Washing Machine",
    slug: "washing-machine",
    description: "Washing machine sales, installation, and service solutions. We offer top brands of fully automatic, semi-automatic, and front-load washing machines with professional installation and comprehensive after-sales support.",
    shortDescription: "Washing machine sales, installation, and service",
    features: [
      "Fully automatic models",
      "Semi-automatic options",
      "Front-load and top-load",
      "Multiple capacity options",
      "Energy-efficient",
      "Quick wash programs",
      "Child lock safety",
      "Professional installation"
    ],
    applications: [
      "Home laundry",
      "Residential complexes",
      "Hostels",
      "Hotels",
      "Commercial laundries",
      "Apartments",
      "Villas",
      "Offices"
    ],
    benefits: [
      "Time-saving",
      "Efficient cleaning",
      "Water conservation",
      "Energy efficient",
      "Easy to use",
      "Multiple programs",
      "Long-lasting",
      "Warranty coverage"
    ],
    materials: [
      "Stainless steel drums",
      "Premium motors",
      "Quality controls",
      "Durable exteriors",
      "Safety features",
      "Modern components"
    ],
    installation: [
      "Location planning",
      "Water and drain setup",
      "Professional installation",
      "Functionality testing",
      "User demonstration"
    ],
    maintenance: [
      "Regular cleaning",
      "Drum maintenance",
      "Filter cleaning",
      "Annual servicing",
      "Repair services"
    ],
    warranty: "1-5 years warranty based on model",
    image: "/images/services/washing-machine.avif",
    heroImage: "/images/services/washing-machine.avif",
    gallery: [
      "/images/services/washing-machine.avif"
    ],
    priceRange: "Contact for pricing",
    category: "Home Appliances",
    popular: true
  },
  {
    id: "cooking-range",
    name: "Cooking Range",
    slug: "cooking-range",
    description: "Premium cooking range installation and service. We provide gas and electric cooking ranges with multiple burners and modern features. Professional installation with safety checks and comprehensive warranty support.",
    shortDescription: "Premium cooking range installation and service",
    features: [
      "Multiple burner options",
      "Gas and electric models",
      "Auto-ignition",
      "Flame failure device",
      "Easy-to-clean surface",
      "Modern design",
      "Efficient heating",
      "Professional installation"
    ],
    applications: [
      "Home kitchens",
      "Modular kitchens",
      "Commercial kitchens",
      "Restaurants",
      "Hotels",
      "Catering services",
      "Residential complexes",
      "Villas"
    ],
    benefits: [
      "Multiple cooking zones",
      "Efficient fuel usage",
      "Quick cooking",
      "Safe operation",
      "Easy maintenance",
      "Modern appearance",
      "Reliable performance",
      "Warranty protection"
    ],
    materials: [
      "Stainless steel body",
      "Premium burners",
      "Safety valves",
      "Quality knobs",
      "Tempered glass tops",
      "Durable frames"
    ],
    installation: [
      "Kitchen assessment",
      "Gas connection setup",
      "Professional installation",
      "Safety testing",
      "Quality verification"
    ],
    maintenance: [
      "Regular cleaning",
      "Burner servicing",
      "Safety checks",
      "Annual maintenance",
      "Repair services"
    ],
    warranty: "1-2 years warranty on installation and parts",
    image: "/images/services/cooking-range.jpg",
    heroImage: "/images/services/cooking-range.jpg",
    gallery: [
      "/images/services/cooking-range.jpg"
    ],
    priceRange: "Contact for pricing",
    category: "Kitchen Appliances",
    popular: true
  },
  {
    id: "geyser",
    name: "Geyser",
    slug: "geyser",
    description: "Geyser installation, service, and repair solutions. We offer storage and instant geysers from leading brands with professional installation and maintenance services. Get hot water solutions for your home with expert service.",
    shortDescription: "Geyser installation, service, and repair solutions",
    features: [
      "Storage and instant options",
      "Multiple capacity choices",
      "Energy-efficient models",
      "Auto shut-off safety",
      "Temperature control",
      "Rust-proof tank",
      "Quick heating",
      "Professional installation"
    ],
    applications: [
      "Residential bathrooms",
      "Kitchens",
      "Hotels",
      "Hostels",
      "Apartments",
      "Villas",
      "Commercial spaces",
      "Office spaces"
    ],
    benefits: [
      "Hot water on demand",
      "Energy efficient",
      "Safe operation",
      "Easy installation",
      "Low maintenance",
      "Long-lasting",
      "Temperature control",
      "Warranty coverage"
    ],
    materials: [
      "Rust-proof tanks",
      "Quality heating elements",
      "Thermostat controls",
      "Safety valves",
      "Premium insulation",
      "Durable exteriors"
    ],
    installation: [
      "Location assessment",
      "Electrical and plumbing setup",
      "Professional installation",
      "Safety testing",
      "Functional check"
    ],
    maintenance: [
      "Regular descaling",
      "Element replacement",
      "Tank cleaning",
      "Annual servicing",
      "Emergency repairs"
    ],
    warranty: "1-5 years warranty based on model",
    image: "/images/services/geyser.webp",
    heroImage: "/images/services/geyser.webp",
    gallery: [
      "/images/services/geyser.webp"
    ],
    priceRange: "Contact for pricing",
    category: "Home Appliances",
    popular: true
  },
  {
    id: "aquaguard-sales",
    name: "Aquaguard Sales",
    slug: "aquaguard-sales",
    description: "Aquaguard water purifier sales and installation. We provide premium water purification systems with advanced filtration technology. Ensure safe and clean drinking water for your family with our certified installation and service.",
    shortDescription: "Aquaguard water purifier sales and installation",
    features: [
      "RO purification",
      "UV sterilization",
      "UF filtration",
      "TDS control",
      "Multi-stage filtration",
      "Storage tank options",
      "Digital display",
      "Professional installation"
    ],
    applications: [
      "Home kitchens",
      "Offices",
      "Schools",
      "Hospitals",
      "Restaurants",
      "Hotels",
      "Residential complexes",
      "Commercial spaces"
    ],
    benefits: [
      "Pure drinking water",
      "Removes impurities",
      "Health protection",
      "Cost-effective",
      "Low maintenance",
      "Advanced technology",
      "Reliable performance",
      "Warranty support"
    ],
    materials: [
      "Premium RO membranes",
      "UV lamps",
      "Activated carbon filters",
      "Sediment filters",
      "Storage tanks",
      "Quality components"
    ],
    installation: [
      "Site inspection",
      "Water connection setup",
      "Professional installation",
      "System testing",
      "User training"
    ],
    maintenance: [
      "Filter replacement",
      "Membrane cleaning",
      "UV lamp replacement",
      "Annual servicing",
      "Emergency repairs"
    ],
    warranty: "1-2 years warranty on installation and parts",
    image: "/images/services/aquaguard.jpg",
    heroImage: "/images/services/aquaguard.jpg",
    gallery: [
      "/images/services/aquaguard.jpg"
    ],
    priceRange: "Contact for pricing",
    category: "Water Solutions",
    popular: true
  },
  {
    id: "generator-service",
    name: "Generator Service",
    slug: "generator-service",
    description: "Complete generator service, installation, and repair solutions. We provide professional service for all types of generators - diesel, petrol, and inverter generators. From installation to maintenance and emergency repairs, we ensure uninterrupted power supply.",
    shortDescription: "Professional generator service, installation, and repair",
    features: [
      "Installation service",
      "Regular maintenance",
      "Emergency repairs",
      "Parts replacement",
      "Oil and filter change",
      "Load testing",
      "All generator types",
      "Expert technicians"
    ],
    applications: [
      "Residential backup",
      "Commercial backup",
      "Industrial use",
      "Hospitals",
      "Hotels",
      "Office buildings",
      "Shops",
      "Warehouses"
    ],
    benefits: [
      "Uninterrupted power",
      "Backup during outages",
      "Extended generator life",
      "Fuel efficiency",
      "Regular maintenance",
      "Quick repairs",
      "Expert service",
      "Affordable rates"
    ],
    materials: [
      "Original spare parts",
      "Quality oils and filters",
      "Professional tools",
      "Service kits",
      "Replacement components",
      "Maintenance supplies"
    ],
    installation: [
      "Site assessment",
      "Foundation setup",
      "Professional installation",
      "Electrical connection",
      "Testing and commissioning"
    ],
    maintenance: [
      "Monthly servicing",
      "Oil and filter change",
      "Battery check",
      "Load testing",
      "Emergency repairs"
    ],
    warranty: "Service warranty on all repairs",
    image: "/images/services/generator.jpg",
    heroImage: "/images/services/generator.jpg",
    gallery: [
      "/images/services/generator.jpg"
    ],
    priceRange: "Contact for service charges",
    category: "Power Solutions",
    popular: true
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = (): Service[] => {
  return services.filter(service => service.popular);
};
