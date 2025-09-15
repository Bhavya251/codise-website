import React, { useState } from "react";
import ProjectCard from "../Components/projects/ProjectCard.jsx";
import { Filter } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Complete online store solution with payment processing, inventory management, and customer analytics. Built with modern technology stack for scalability and performance.",
      category: "Web Development",
      year: "2024",
      tech: "React",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Corporate Website Redesign",
      description: "Modern responsive website for a financial services company with improved user experience and mobile optimization.",
      category: "Web Development", 
      year: "2024",
      tech: "Next.js",
      technologies: ["Next.js", "Tailwind", "CMS", "SEO"]
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Complete cloud migration and infrastructure setup including hosting, security, backup solutions, and monitoring systems.",
      category: "Hosting & Networking",
      year: "2023", 
      tech: "AWS",
      technologies: ["AWS", "Docker", "Kubernetes", "Monitoring"]
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile application for banking services with biometric authentication, real-time transactions, and financial analytics.",
      category: "Mobile Development",
      year: "2023",
      tech: "React Native", 
      technologies: ["React Native", "Firebase", "Biometrics", "API"]
    },
    {
      title: "Inventory Management System",
      description: "Custom software solution for warehouse management with barcode scanning, real-time tracking, and automated reporting.",
      category: "Custom Software",
      year: "2023",
      tech: "Python",
      technologies: ["Python", "PostgreSQL", "Barcode", "Reports"]
    },
    {
      title: "Restaurant POS System",
      description: "Point-of-sale system for restaurant chain with order management, kitchen display, payment processing, and analytics dashboard.",
      category: "Custom Software", 
      year: "2022",
      tech: "Vue.js",
      technologies: ["Vue.js", "Laravel", "MySQL", "Payment"]
    }
  ];

  const categories = ["all", "Web Development", "Hosting & Networking", "Mobile Development", "Custom Software"];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-700 mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful software solutions that have transformed businesses across various industries
          </p>
        </div>

        {/* Filter */}
        <div className="neomorphic rounded-2xl p-6 mb-12">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by Category</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`neomorphic-button rounded-xl px-4 py-2 font-medium transition-all duration-300 ${
                  activeFilter === category 
                    ? 'neomorphic-pressed text-gray-800' 
                    : 'neomorphic text-gray-600 neomorphic-hover'
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="neomorphic rounded-2xl p-12 text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your business with custom software solutions 
            tailored to your specific needs and goals.
          </p>
          <button className="neomorphic-button neomorphic neomorphic-hover rounded-xl px-8 py-4 font-semibold text-gray-700">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}