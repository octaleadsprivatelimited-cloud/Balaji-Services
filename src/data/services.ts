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
    id: "invisible-grill-for-balconies",
    name: "Invisible Grill for Balconies",
    slug: "invisible-grill-for-balconies",
    description: "Premium invisible grills designed specifically for balconies, providing maximum security while maintaining unobstructed views. Our stainless steel grills are available in multiple wire thicknesses (2mm, 2.5mm, 3mm, 3.5mm, and 4mm) to suit your specific safety needs and budget. These nearly invisible cables blend seamlessly with modern architecture, protecting your loved ones without compromising your view.",
    shortDescription: "Premium invisible grills for balconies - Available in 2mm to 4mm wire sizes",
    features: [
      "Available in 5 wire sizes: 2mm, 2.5mm, 3mm, 3.5mm, 4mm",
      "High-grade stainless steel cables",
      "Nearly invisible - maintains your view",
      "Weather & rust resistant",
      "Professional installation included",
      "Customized to fit any balcony size",
      "10+ years durability",
      "Child & pet safe design"
    ],
    applications: [
      "Residential balconies",
      "Apartment balconies",
      "High-rise buildings",
      "Modern homes",
      "Commercial balconies",
      "Penthouse terraces",
      "Duplex balconies",
      "Villa balconies"
    ],
    benefits: [
      "Maximum security protection",
      "Unobstructed views",
      "Modern aesthetic appeal",
      "Child and pet safety",
      "Weather protection",
      "Low maintenance",
      "Long-lasting durability",
      "Value addition to property"
    ],
    materials: [
      "Grade 316 marine-grade stainless steel wires",
      "Wire thickness options: 2mm, 2.5mm, 3mm, 3.5mm, 4mm",
      "High-tensile strength cables (can hold 150+ kg)",
      "Corrosion-resistant mounting hardware",
      "UV-resistant protective coating",
      "Premium aluminum/steel mounting brackets"
    ],
    installation: [
      "Site assessment and measurement",
      "Custom grill sizing",
      "Professional installation",
      "Quality inspection",
      "Safety testing"
    ],
    maintenance: [
      "Regular cleaning with water",
      "Inspection for wear and tear",
      "Lubrication of moving parts",
      "Annual maintenance check",
      "Emergency repair services"
    ],
    warranty: "5 years warranty on materials and workmanship",
    image: "/images/safety-nets/invisible-grill-balconies.jpg",
    heroImage: "/images/safety-nets/invisible-grill-balconies.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill-windows.jpg",
      "/images/safety-nets/invisible-grill-apartments.webp"
    ],
    priceRange: "₹80-120 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "invisible-grill-for-windows",
    name: "Invisible Grill for Windows",
    slug: "invisible-grill-for-windows",
    description: "Elegant invisible grills for windows that provide security without blocking natural light or views. Choose from 5 wire thickness options (2mm, 2.5mm, 3mm, 3.5mm, and 4mm) based on your window size and security requirements. These transparent grills are perfect for modern homes where aesthetics and safety go hand in hand - you get full protection without the cage-like appearance of traditional grills.",
    shortDescription: "Elegant window grills - Available in 2mm to 4mm wire thickness options",
    features: [
      "5 wire size options: 2mm, 2.5mm, 3mm, 3.5mm, 4mm",
      "Nearly invisible - no obstruction to views",
      "Allows 100% natural light & air flow",
      "Rust-proof stainless steel construction",
      "Custom fit for any window size",
      "Easy to clean & maintain",
      "Modern aesthetic appeal",
      "Strong security without bulky look"
    ],
    applications: [
      "Bedroom windows",
      "Living room windows",
      "Kitchen windows",
      "Bathroom windows",
      "Office windows",
      "Commercial windows",
      "High-rise windows",
      "Ground floor windows"
    ],
    benefits: [
      "Unobstructed views",
      "Natural light passage",
      "Enhanced security",
      "Modern appearance",
      "Easy maintenance",
      "Weather protection",
      "Child safety",
      "Property value increase"
    ],
    materials: [
      "Grade 316 marine-grade stainless steel wires",
      "Wire thickness: 2mm, 2.5mm, 3mm, 3.5mm, 4mm",
      "High-tensile strength cables (holds 150+ kg)",
      "Anti-corrosion mounting brackets",
      "Weather & UV resistant coating",
      "Premium mounting hardware"
    ],
    installation: [
      "Window measurement",
      "Custom grill fabrication",
      "Professional installation",
      "Quality inspection",
      "Safety verification"
    ],
    maintenance: [
      "Regular cleaning",
      "Inspection for damage",
      "Hardware maintenance",
      "Annual service check",
      "Emergency repairs"
    ],
    warranty: "5 years warranty on materials and workmanship",
    image: "/images/safety-nets/invisible-grill-windows.jpg",
    heroImage: "/images/safety-nets/invisible-grill-windows.jpg",
    gallery: [
      "/images/safety-nets/invisible-grill-windows.jpg",
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill-apartments.webp"
    ],
    priceRange: "₹70-100 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "invisible-grill-for-apartments",
    name: "Invisible Grill for Apartments",
    slug: "invisible-grill-for-apartments",
    description: "Complete invisible grill solutions for apartment buildings and high-rise complexes. Available in 5 different wire thicknesses (2mm, 2.5mm, 3mm, 3.5mm, and 4mm) to meet various safety requirements and budgets. Our grills provide comprehensive security for all your windows and balconies while maintaining the modern aesthetic of apartment living. Perfect for protecting children and pets in high-rise buildings.",
    shortDescription: "Complete apartment grill solutions - 2mm to 4mm wire sizes available",
    features: [
      "Multiple wire sizes: 2mm, 2.5mm, 3mm, 3.5mm, 4mm",
      "Bulk installation for entire apartment",
      "Uniform look across all windows & balconies",
      "Rust & weather resistant",
      "Professional team installation",
      "Customized for each opening",
      "High-strength stainless steel",
      "Child & pet safety certified"
    ],
    applications: [
      "Apartment balconies",
      "Apartment windows",
      "High-rise buildings",
      "Residential complexes",
      "Penthouse terraces",
      "Duplex apartments",
      "Studio apartments",
      "Commercial apartments"
    ],
    benefits: [
      "Comprehensive security",
      "Modern appearance",
      "Bulk installation discounts",
      "Consistent quality",
      "Easy maintenance",
      "Weather protection",
      "Child safety",
      "Property enhancement"
    ],
    materials: [
      "Grade 316 marine-grade stainless steel wires",
      "Wire options: 2mm, 2.5mm, 3mm, 3.5mm, 4mm thickness",
      "High-tensile cables (150+ kg load capacity)",
      "Rust-proof mounting brackets",
      "UV & weather resistant finish",
      "Professional-grade hardware"
    ],
    installation: [
      "Bulk site assessment",
      "Custom fabrication",
      "Professional installation",
      "Quality inspection",
      "Safety testing"
    ],
    maintenance: [
      "Regular maintenance",
      "Bulk service contracts",
      "Emergency repairs",
      "Annual inspections",
      "Hardware maintenance"
    ],
    warranty: "5 years warranty on materials and workmanship",
    image: "/images/safety-nets/invisible-grill-apartments.webp",
    heroImage: "/images/safety-nets/invisible-grill-apartments.webp",
    gallery: [
      "/images/safety-nets/invisible-grill-apartments.webp",
      "/images/safety-nets/invisible-grill-balconies.jpg",
      "/images/safety-nets/invisible-grill-windows.jpg"
    ],
    priceRange: "₹75-110 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "pull-dry-cloth-hangers",
    name: "Pull & Dry Cloth Hangers",
    slug: "pull-dry-cloth-hangers",
    description: "Modern pull & dry cloth hangers for efficient laundry drying. Available in 5 different sizes (4 feet, 5 feet, 6 feet, 7 feet, and 8 feet) with 3 rods or 6 rods options to match your space and drying needs. Our stainless steel hangers extend smoothly when needed and fold back neatly when not in use - perfect for saving space in your balcony or utility area.",
    shortDescription: "Pull & dry cloth hangers - Available in 4ft to 8ft sizes with 3 or 6 rods",
    features: [
      "Sizes: 4 feet, 5 feet, 6 feet, 7 feet, 8 feet",
      "Choose 3 rods or 6 rods based on your needs",
      "Stainless steel - rust-proof construction",
      "Easy pull & fold mechanism",
      "Space-saving design - extends only when needed",
      "Weather resistant for outdoor use",
      "Easy DIY or professional installation",
      "Modern & sleek appearance"
    ],
    applications: [
      "Balconies",
      "Terraces",
      "Utility areas",
      "Laundry rooms",
      "Apartment balconies",
      "Residential complexes",
      "Commercial spaces",
      "High-rise buildings"
    ],
    benefits: [
      "Multiple size options - fits any space",
      "3 or 6 rods - dry more clothes at once",
      "Space-saving - folds when not in use",
      "Easy to pull out and push back",
      "Dries clothes faster - better air circulation",
      "Long-lasting - won't rust or break",
      "Clean & organized look",
      "Increases property value"
    ],
    materials: [
      "Grade 316 stainless steel rods & frame",
      "Size options: 4ft, 5ft, 6ft, 7ft, 8ft",
      "Rod options: 3 rods or 6 rods configuration",
      "High-quality pullout mechanism",
      "Rust-proof mounting brackets",
      "Weather-resistant coating for outdoor use"
    ],
    installation: [
      "Site assessment",
      "Custom fabrication",
      "Professional installation",
      "Quality inspection",
      "Functionality testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Cable maintenance",
      "Hardware inspection",
      "Annual service",
      "Emergency repairs"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/pull-dry-cloth-hangers.jpg",
    heroImage: "/images/safety-nets/pull-dry-cloth-hangers.jpg",
    gallery: [
      "/images/safety-nets/pull-dry-cloth-hangers.jpg",
      "/images/safety-nets/ceilling-cloth-hangers.jpg",
      "/images/safety-nets/pull-dry-cloth-hangers-for-balconies.jpg"
    ],
    priceRange: "₹40-60 per sq ft",
    category: "Cloth Hangers",
    popular: true
  },
  {
    id: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Hangers",
    slug: "ceiling-cloth-hangers",
    description: "Ceiling-mounted cloth hangers that maximize your drying space. Available in 5 sizes (4 feet, 5 feet, 6 feet, 7 feet, and 8 feet) with 3 rods or 6 rods options. These hangers are perfect when you have limited wall space - they hang from your ceiling and can be lowered for loading clothes and raised back up for drying. Great for balconies, utility rooms, and covered areas.",
    shortDescription: "Ceiling cloth hangers - 4ft to 8ft sizes with 3 or 6 rods options",
    features: [
      "Available in: 4ft, 5ft, 6ft, 7ft, 8ft lengths",
      "3 rods or 6 rods - choose your capacity",
      "Ceiling-mounted - saves wall space",
      "Pulldown mechanism - easy to load",
      "Raise up for drying - better air flow",
      "Rust-proof stainless steel",
      "High load capacity - holds heavy clothes",
      "Modern & space-efficient design"
    ],
    applications: [
      "Utility areas",
      "Laundry rooms",
      "Balconies",
      "Terraces",
      "Commercial spaces",
      "Residential complexes",
      "High-rise buildings",
      "Apartment complexes"
    ],
    benefits: [
      "Saves wall space - uses ceiling area",
      "Multiple sizes - fits your space perfectly",
      "3 or 6 rods - dry more in one go",
      "Easy to lower and raise",
      "Better drying - elevated air circulation",
      "Strong & durable - won't rust",
      "Clean look - no wall clutter",
      "Affordable solution"
    ],
    materials: [
      "Grade 316 stainless steel rods & cables",
      "Length options: 4ft, 5ft, 6ft, 7ft, 8ft",
      "Rod configuration: 3 rods or 6 rods",
      "Heavy-duty pulley mechanism",
      "Strong ceiling mounting brackets",
      "Weather-proof coating"
    ],
    installation: [
      "Ceiling assessment",
      "Custom fabrication",
      "Professional installation",
      "Quality inspection",
      "Load testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Cable maintenance",
      "Hardware inspection",
      "Annual service",
      "Emergency repairs"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/ceiling-cloth-hangers.jpg",
    heroImage: "/images/safety-nets/ceiling-cloth-hangers.jpg",
    gallery: [
      "/images/safety-nets/ceiling-cloth-hangers.jpg",
      "/images/safety-nets/pull-dry-cloth-hangers.jpg",
      "/images/safety-nets/pull-dry-cloth-hangers-balconies.jpg"
    ],
    priceRange: "₹35-55 per sq ft",
    category: "Cloth Hangers",
    popular: false
  },
  {
    id: "pull-dry-cloth-hangers-for-balconies",
    name: "Pull & Dry Cloth Hangers for Balconies",
    slug: "pull-dry-cloth-hangers-for-balconies",
    description: "Specialized pull & dry cloth hangers designed for balconies - perfect for apartment living! Available in 5 convenient sizes (4 feet, 5 feet, 6 feet, 7 feet, and 8 feet) with 3 rods or 6 rods options. These hangers are specifically designed for balcony installation, featuring weather-resistant materials that withstand sun and rain. Pull out when you need to dry clothes, fold back when done - keeps your balcony looking neat and spacious.",
    shortDescription: "Balcony cloth hangers - 4ft to 8ft with 3 or 6 rods, weather-resistant",
    features: [
      "Sizes: 4 feet, 5 feet, 6 feet, 7 feet, 8 feet",
      "3 rods or 6 rods - fits your laundry load",
      "Designed specifically for balconies",
      "Weather-proof - sun & rain resistant",
      "Smooth pull & fold mechanism",
      "Space-saving - extends only when needed",
      "Easy to install on balcony walls",
      "Sleek design - enhances balcony look"
    ],
    applications: [
      "Apartment balconies",
      "Residential balconies",
      "High-rise balconies",
      "Penthouse balconies",
      "Duplex balconies",
      "Studio balconies",
      "Commercial balconies",
      "Villa balconies"
    ],
    benefits: [
      "Perfect fit for balconies - made for outdoor use",
      "Multiple sizes - choose what fits your balcony",
      "3 or 6 rods - handle family laundry easily",
      "Folds away - keeps balcony space free",
      "Sun & rain proof - lasts for years",
      "Easy to use - even kids can operate",
      "Looks modern - adds to balcony aesthetics",
      "Low maintenance - just wipe clean occasionally"
    ],
    materials: [
      "Grade 316 marine-grade stainless steel",
      "Length options: 4ft, 5ft, 6ft, 7ft, 8ft",
      "Rod capacity: 3 rods or 6 rods",
      "Extra weather-resistant coating for balconies",
      "Heavy-duty mounting brackets",
      "Smooth-glide pullout mechanism"
    ],
    installation: [
      "Balcony assessment",
      "Custom fabrication",
      "Professional installation",
      "Quality inspection",
      "Functionality testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Cable maintenance",
      "Hardware inspection",
      "Annual service",
      "Emergency repairs"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/pull-dry-cloth-hangers-balconies.jpg",
    heroImage: "/images/safety-nets/pull-dry-cloth-hangers-balconies.jpg",
    gallery: [
      "/images/safety-nets/pull-dry-cloth-hangers-balconies.jpg",
      "/images/safety-nets/pull-dry-cloth-hangers.jpg",
      "/images/safety-nets/ceiling-cloth-hangers.jpg"
    ],
    priceRange: "₹45-65 per sq ft",
    category: "Cloth Hangers",
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