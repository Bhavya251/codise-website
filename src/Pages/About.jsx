import React from "react";
import { Award, Target, Eye, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay at the forefront of technology to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Every project is built to the highest standards with attention to detail, performance, and user experience."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and honest pricing ensure our clients always know what to expect throughout the project."
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "We build lasting relationships with our clients, becoming their trusted technology partner for long-term success."
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-700 mb-6">
            About Codise
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a passionate team of software engineers, designers, and strategists dedicated to 
            transforming businesses through innovative technology solutions.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="neomorphic rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2019, Codise began as a vision to bridge the gap between complex 
                technology and practical business solutions. What started as a small team of 
                developers has grown into a comprehensive software solutions company.
              </p>
              <p>
                Today, we serve clients across various industries, from startups looking to 
                establish their digital presence to established enterprises seeking to modernize 
                their technology infrastructure.
              </p>
              <p>
                Our commitment to excellence and innovation has earned us the trust of over 50 
                businesses, and we've successfully delivered more than 100 projects that have 
                driven real business growth and digital transformation.
              </p>
            </div>
          </div>

          <div className="neomorphic rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-8">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              "To empower businesses with innovative software solutions that drive growth, 
              efficiency, and competitive advantage in the digital age."
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-gray-700">100+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-700">50+</div>
                <div className="text-gray-600">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-700">5+</div>
                <div className="text-gray-600">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-700">99%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="neomorphic rounded-2xl p-6 text-center neomorphic-hover">
                <div className="neomorphic rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="neomorphic rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience in software development, 
            design, and digital strategy to deliver exceptional results for every project.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="neomorphic-inset rounded-xl p-6">
              <div className="w-20 h-20 neomorphic rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-gray-700 mb-1">Development Team</h3>
              <p className="text-gray-600 text-sm">Full-stack developers and architects</p>
            </div>
            
            <div className="neomorphic-inset rounded-xl p-6">
              <div className="w-20 h-20 neomorphic rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-gray-700 mb-1">Design Team</h3>
              <p className="text-gray-600 text-sm">UI/UX designers and creative directors</p>
            </div>
            
            <div className="neomorphic-inset rounded-xl p-6">
              <div className="w-20 h-20 neomorphic rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-gray-700 mb-1">Strategy Team</h3>
              <p className="text-gray-600 text-sm">Project managers and consultants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}