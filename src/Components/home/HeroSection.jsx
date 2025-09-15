import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, Code, Zap, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-700 mb-6 leading-tight">
            Crafting Digital
            <br />
            <span className="text-gray-600">Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge software solutions. We specialize in web development, 
            hosting, networking, and custom applications that drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={createPageUrl("Projects")}
              className="neomorphic-button neomorphic neomorphic-hover rounded-xl px-8 py-4 flex items-center justify-center space-x-2 text-gray-700 font-semibold"
            >
              <span>View Our Work</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to={createPageUrl("Contact")}
              className="neomorphic-button neomorphic neomorphic-hover rounded-xl px-8 py-4 flex items-center justify-center space-x-2 text-gray-700 font-semibold"
            >
              <span>Start Your Project</span>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="neomorphic rounded-2xl p-8 text-center neomorphic-hover">
            <div className="neomorphic rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">100+</h3>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
          
          <div className="neomorphic rounded-2xl p-8 text-center neomorphic-hover">
            <div className="neomorphic rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">50+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          
          <div className="neomorphic rounded-2xl p-8 text-center neomorphic-hover">
            <div className="neomorphic rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">5+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}