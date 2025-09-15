import React from "react";
import { ExternalLink, Calendar, Tag } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="neomorphic rounded-2xl overflow-hidden neomorphic-hover group">
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-400 opacity-20"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="neomorphic-inset rounded-lg px-3 py-1 inline-block">
            <span className="text-sm font-medium text-gray-700">{project.category}</span>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-700 group-hover:text-gray-800 transition-colors">
            {project.title}
          </h3>
          <button className="neomorphic-button neomorphic rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{project.year}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Tag className="h-4 w-4" />
            <span>{project.tech}</span>
          </div>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies?.map((tech, index) => (
            <span 
              key={index}
              className="neomorphic-inset rounded-lg px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}