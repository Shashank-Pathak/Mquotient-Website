import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const services = [
  {
    id: "software-development",
    icon: "code",
    title: "Software Development",
    description:
      "Custom software solutions designed to meet your specific business needs, from web and mobile applications to enterprise systems.",
    features: [
      "Full-stack development",
      "API development and integration",
      "UI/UX design and development",
    ],
  },
  {
    id: "cloud-services",
    icon: "cloud",
    title: "Cloud Services",
    description:
      "Comprehensive cloud solutions to optimize your infrastructure, reduce costs, and improve scalability.",
    features: [
      "Cloud migration and optimization",
      "AWS, Azure and GCP expertise",
      "Cloud security and compliance",
    ],
  },
  {
    id: "devops-services",
    icon: "cog",
    title: "DevOps Services",
    description:
      "Streamline your development lifecycle with our DevOps expertise, improve collaboration and accelerate delivery.",
    features: [
      "CI/CD pipeline implementation",
      "Infrastructure as Code (IaC)",
      "Monitoring and observability",
    ],
  },
  {
    id: "ai-ml",
    icon: "brain",
    title: "AI & Machine Learning",
    description:
      "Leverage AI technologies to automate processes, gain insights from data, and create intelligent applications.",
    features: [
      "Predictive analytics solutions",
      "AI-powered chatbots and assistants",
      "Computer vision applications",
    ],
  },
  {
    id: "data-services",
    icon: "database",
    title: "Data Services",
    description:
      "Transform your data into actionable insights with our comprehensive data management solutions.",
    features: [
      "Data architecture and engineering",
      "Business intelligence solutions",
      "Big data processing and analytics",
    ],
  },
  {
    id: "cybersecurity",
    icon: "shield",
    title: "Cybersecurity",
    description:
      "Protect your business with comprehensive security solutions designed to safeguard your assets and data.",
    features: [
      "Security assessment and auditing",
      "Security architecture design",
      "Incident response and recovery",
    ],
  },
];

export const solutions = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Comprehensive strategy and implementation services to help organizations evolve their business models using digital technologies.",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "customer-experience",
    title: "Customer Experience Platforms",
    description:
      "Create seamless, personalized customer journeys across all touchpoints to build loyalty and drive growth.",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "enterprise-analytics",
    title: "Enterprise Analytics",
    description:
      "Leverage your data assets to gain competitive insights, optimize operations, and drive strategic decision-making.",
    image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Modernization",
    description:
      "Seamlessly transition your legacy systems to modern cloud infrastructure with minimal disruption and maximum benefits.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "iot-solutions",
    title: "IoT Solutions",
    description:
      "Connect devices, collect data, and create smart environments that enhance efficiency and create new business opportunities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "secure-enterprise",
    title: "Secure Enterprise",
    description:
      "Comprehensive security solutions to protect your business from cyber threats while ensuring compliance with regulations.",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export const caseStudies = [
  {
    id: "healthcare-provider",
    title: "Healthcare Provider Transformation",
    description:
      "Helped a major healthcare provider modernize their infrastructure, resulting in 40% cost reduction and improved patient experience.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    industry: "Healthcare",
  },
  {
    id: "banking-modernization",
    title: "Banking Application Modernization",
    description:
      "Developed a modern, secure banking platform that improved transaction processing speed by 60% and enhanced user experience.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    industry: "Financial Services",
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce Platform Optimization",
    description:
      "Enhanced a retail client's e-commerce platform resulting in 35% increased conversion rates and 50% faster page load times.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    industry: "Retail",
  },
];

export const testimonials = [
  {
    id: 1,
    text:
      "mquotient's expertise in cloud migration helped us modernize our infrastructure with minimal disruption to our operations. Their team's technical knowledge and project management skills were exceptional.",
    name: "David Mitchell",
    position: "CTO, GlobalHealth Inc.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    text:
      "Working with mquotient on our digital transformation initiative was a game-changer. Their strategic approach and technical execution helped us achieve our goals ahead of schedule and under budget.",
    name: "Sarah Johnson",
    position: "VP of IT, Retail Solutions Co.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    text:
      "The custom software solution developed by mquotient transformed our customer experience and streamlined our operations. Their team's attention to detail and responsiveness made the project a success.",
    name: "Michael Rodriguez",
    position: "CEO, InnovateTech Solutions",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
];

export const companyStats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Successful Projects", value: "100+" },
  { label: "Expert Professionals", value: "50+" },
  { label: "Global Clients", value: "20+" },
];
