import React from "react";
import ContactForm from "../components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (403) 918-9459", "+1 (519) 580-4427"],
      subtitle: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail, 
      title: "Email",
      details: ["hello@codise.com", "projects@codise.com"],
      subtitle: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["148 Breckenridge Drive", "Kitchener, ON N2B2N9"],
      subtitle: "By appointment only"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
      subtitle: "EST Timezone"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-700 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge software solutions? 
            Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="neomorphic rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-700 mb-6">
                Start Your Project
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="neomorphic rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-700 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="neomorphic rounded-lg p-3 flex-shrink-0">
                      <info.icon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                      <p className="text-gray-500 text-xs mt-1">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="neomorphic rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-gray-700 mb-4">Quick Response</h3>
              <div className="neomorphic-inset rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gray-600" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We typically respond to all inquiries within 24 hours. 
                For urgent projects, call us directly for immediate assistance.
              </p>
            </div>

            {/* Consultation */}
            {/* <div className="neomorphic rounded-2xl p-8 text-center">
              <h3 className="text-lg font-bold text-gray-700 mb-4">Free Consultation</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Schedule a complimentary 30-minute consultation to discuss 
                your project requirements and get expert advice.
              </p>
              <button className="neomorphic-button neomorphic neomorphic-hover rounded-xl px-4 py-2 font-medium text-gray-700 text-sm">
                Schedule Call
              </button>
            </div> */}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="neomorphic rounded-2xl p-12 mt-20">
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">How long does a typical project take?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Project timelines vary based on complexity. Simple websites take 2-4 weeks, 
                while custom software can take 2-6 months. We provide detailed timelines during consultation.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Do you provide ongoing support?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, we offer comprehensive maintenance and support packages to ensure your 
                software remains secure, updated, and performing optimally.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Can you work with existing systems?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely! We specialize in integrating with existing systems and can help 
                modernize legacy applications while maintaining data integrity.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">What about hosting and deployment?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We provide complete hosting solutions including setup, security, monitoring, 
                and ongoing maintenance for optimal performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}