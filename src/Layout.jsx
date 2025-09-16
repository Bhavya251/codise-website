import React from "react";
import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Code, Home, User, Briefcase, Mail, Monitor } from "lucide-react";
import logo from './assets/CodiseBlue.png';

const navigationItems = [
  { title: "Home", url: createPageUrl("Home"), icon: Home },
  { title: "About", url: createPageUrl("About"), icon: User },
  { title: "Projects", url: createPageUrl("Projects"), icon: Briefcase },
  { title: "Contact", url: createPageUrl("Contact"), icon: Mail },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e0e0e0' }}>
      <style>
        {`
          .neomorphic {
            box-shadow: 
              8px 8px 16px rgba(163, 163, 163, 0.6),
              -8px -8px 16px rgba(255, 255, 255, 0.8);
          }
          
          .neomorphic-inset {
            box-shadow: 
              inset 4px 4px 8px rgba(163, 163, 163, 0.4),
              inset -4px -4px 8px rgba(255, 255, 255, 0.8);
          }
          
          .neomorphic-pressed {
            box-shadow: 
              inset 6px 6px 12px rgba(163, 163, 163, 0.5),
              inset -6px -6px 12px rgba(255, 255, 255, 0.9);
          }
          
          .neomorphic-hover:hover {
            box-shadow: 
              10px 10px 20px rgba(163, 163, 163, 0.7),
              -10px -10px 20px rgba(255, 255, 255, 0.9);
            transform: translateY(-2px);
            color: #0481aa;
          }
          
          .neomorphic-button {
            background: #e0e0e0;
            border: none;
            transition: all 0.3s ease;
            color: #0481aa;
          }
          
          .neomorphic-button:active {
            box-shadow: 
              inset 6px 6px 12px rgba(163, 163, 163, 0.5),
              inset -6px -6px 12px rgba(255, 255, 255, 0.9);
            transform: translateY(1px);
          }
        `}
      </style>
      
      {/* Navigation */}
      <nav className="neomorphic rounded-none border-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <div className="neomorphic rounded-xl h-12 w-12 overflow-hidden flex items-center justify-center">
                {/* <Monitor className="h-8 w-8 text-gray-600" /> */}
                <img
                    src={logo}
                    alt="The Codise Logo"
                    className="h-full w-full object-contain" // 👈 keeps same size as Monitor icon
                />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-700">The Codise</span>
                <p className="text-sm text-gray-500">Software Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl neomorphic-button neomorphic-hover font-medium text-gray-600 transition-all duration-300 ${
                    location.pathname === item.url ? 'neomorphic-pressed text-gray-800' : ''
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="neomorphic-button neomorphic rounded-xl p-3"
                >
                <Code className="h-6 w-6 text-[#00b7d1]" />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#e0e0e0] shadow-lg flex flex-col items-start p-4 space-y-3 md:hidden">
                {navigationItems.map((item) => (
                    <Link
                    key={item.title}
                    to={item.url}
                    className="flex items-center space-x-2 px-4 py-2 w-full rounded-lg neomorphic-button"
                    onClick={() => setIsMobileMenuOpen(false)} // 👈 closes menu on click
                    >
                    <item.icon className="h-5 w-5 text-[#00b7d1]" />
                    <span className="text-[#00b7d1]">{item.title}</span>
                    </Link>
                ))}
                </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet /> {/* <-- Render the matched child route here */}
      </main>

      {/* Footer */}
      <footer className="neomorphic rounded-none border-0 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="neomorphic rounded-xl h-10 w-10 overflow-hidden flex items-center justify-center">
                {/* <Monitor className="h-8 w-8 text-gray-600" /> */}
                <img
                    src={logo}
                    alt="The Codise Logo"
                    className="h-full w-full object-contain" // 👈 keeps same size as Monitor icon
                />
              </div>
                <span className="text-lg font-bold text-gray-700">The Codise</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Delivering innovative software solutions that transform businesses and drive digital growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-700 font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Website Development</li>
                <li>Hosting & Networking</li>
                <li>Mobile Applications</li>
                <li>Custom Software</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-700 font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ready to start your project?<br />
                Get in touch with us today.
              </p>
              <Link 
                to={createPageUrl("Contact")} 
                className="inline-block mt-3 px-4 py-2 neomorphic-button neomorphic rounded-lg text-sm font-medium text-gray-600 neomorphic-hover"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 The Codise Software Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}