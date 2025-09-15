import React from "react";
import { Globe, Server, Smartphone, ShoppingCart, Settings, Users } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom responsive websites built with modern technologies and optimized for performance.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
  },
  {
    icon: Server,
    title: "Hosting & Networking",
    description: "Reliable hosting solutions and network infrastructure to keep your business online 24/7.",
    features: ["99.9% Uptime", "SSL Certificates", "Daily Backups", "24/7 Support"]
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that engage users and drive business growth.",
    features: ["iOS & Android", "Cross-platform", "App Store Ready", "Push Notifications"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online stores with payment processing, inventory management, and analytics.",
    features: ["Payment Integration", "Inventory System", "Order Management", "Analytics"]
  },
  {
    icon: Settings,
    title: "Custom Software",
    description: "Tailored software solutions designed to solve your specific business challenges.",
    features: ["Custom Development", "API Integration", "Database Design", "Scalable Architecture"]
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert guidance on technology strategy, digital transformation, and system optimization.",
    features: ["Technology Strategy", "System Analysis", "Performance Optimization", "Team Training"]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="neomorphic rounded-2xl p-8 neomorphic-hover group">
              <div className="neomorphic rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:neomorphic-pressed transition-all duration-300">
                <service.icon className="h-8 w-8 text-gray-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-700 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}