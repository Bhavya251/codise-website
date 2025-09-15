import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Contact  from "../../Entities/Contact.json";
import { Button } from "../../Components/ui/button.jsx";
import { Input } from "../../Components/ui/input.jsx";
import { Textarea } from "../../Components/ui/textarea.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../Components/ui/select.jsx";
import { CheckCircle, Send, User, Mail, Phone, Building } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    time: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const SERVICE_ID = "service_tf55xwl";
    const TEMPLATE_ID = "template_fj4pmtz";
    const PUBLIC_KEY = "MqrJLn9lNMRYFtkWP";

    const now = new Date();
    const formattedDateTime = now.toLocaleString(); 


    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setIsSubmitted(true);
        setFormData({
          name: "",
          time: formattedDateTime,
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: ""
        });
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (isSubmitted) {
    return (
      <div className="neomorphic rounded-2xl p-8 text-center">
        <div className="neomorphic rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          We've received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="neomorphic-button neomorphic neomorphic-hover rounded-xl px-6 py-3 font-medium text-gray-700"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <User className="h-4 w-4" />
            <span>Full Name *</span>
          </label>
          <Input
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Your full name"
            required
            className="neomorphic-inset rounded-xl border-0 bg-transparent text-gray-700 focus:neomorphic-pressed"
          />
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Mail className="h-4 w-4" />
            <span>Email Address *</span>
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="your.email@company.com"
            required
            className="neomorphic-inset rounded-xl border-0 bg-transparent text-gray-700 focus:neomorphic-pressed"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Phone className="h-4 w-4" />
            <span>Phone Number</span>
          </label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="neomorphic-inset rounded-xl border-0 bg-transparent text-gray-700 focus:neomorphic-pressed"
          />
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Building className="h-4 w-4" />
            <span>Company Name</span>
          </label>
          <Input
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            placeholder="Your company name"
            className="neomorphic-inset rounded-xl border-0 bg-transparent text-gray-700 focus:neomorphic-pressed"
          />
        </div>
      </div>

      {/* Service Needed */}
        <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 mb-2 block">
            Service Needed *
        </label>
        <select
            value={formData.service}
            onChange={(e) => handleInputChange('service', e.target.value)}
            required
            className="neomorphic-inset rounded-xl border-0 px-4 py-2 w-full bg-transparent text-gray-700 focus:neomorphic-pressed"
        >
            <option value="">Select a service</option>
            <option value="website_development">Website Development</option>
            <option value="hosting_networking">Hosting & Networking</option>
            <option value="mobile_apps">Mobile Applications</option>
            <option value="ecommerce">E-Commerce Solutions</option>
            <option value="custom_software">Custom Software</option>
            <option value="consulting">Consulting Services</option>
        </select>
        </div>

        {/* Project Budget */}
        <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 mb-2 block">
            Project Budget
        </label>
        <select
            value={formData.budget}
            onChange={(e) => handleInputChange('budget', e.target.value)}
            className="neomorphic-inset rounded-xl border-0 px-4 py-2 w-full bg-transparent text-gray-700 focus:neomorphic-pressed"
        >
            <option value="">Select budget range</option>
            <option value="under_5k">Under $5,000</option>
            <option value="5k_15k">$5,000 - $15,000</option>
            <option value="15k_50k">$15,000 - $50,000</option>
            <option value="50k_plus">$50,000+</option>
        </select>
        </div>


      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Project Details *
        </label>
        <Textarea
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          placeholder="Tell us about your project, requirements, timeline, and any specific features you need..."
          rows={6}
          required
          className="neomorphic-inset rounded-xl border-0 bg-transparent text-gray-700 resize-none focus:neomorphic-pressed"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="neomorphic-button neomorphic neomorphic-hover rounded-xl w-full py-4 font-semibold text-gray-700 flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></div>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>Send Message</span>
          </>
        )}
      </Button>
    </form>
  );
}