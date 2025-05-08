'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Home() {
  const [binaryPattern, setBinaryPattern] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const pattern = Array.from({ length: 50 }).map(() => 
      Array.from({ length: 100 }).map(() => 
        Math.random() > 0.5 ? '1' : '0'
      ).join(' ')
    );
    setBinaryPattern(pattern);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct the mailto URL with the form data
    const mailtoUrl = `mailto:oricyber@zohomail.eu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open the user's email client
    window.location.href = mailtoUrl;

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container flex flex-col items-center justify-center min-h-[90vh] text-center">
        <h1 className="heading-primary">
          Oresti Meta
          <span className="block text-blue-500 mt-2">Cybersecurity Analyst</span>
        </h1>
        <p className="paragraph max-w-2xl mx-auto mb-8">
          Dedicated to protecting digital assets and securing systems through advanced threat detection and prevention strategies.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/OriMt" target="_blank" rel="noopener noreferrer" className="button-primary flex items-center gap-2">
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/orestis-meta/" target="_blank" rel="noopener noreferrer" className="button-primary flex items-center gap-2">
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container bg-gray-800 relative overflow-hidden">
        {/* Cybersecurity Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* Binary Pattern */}
          <div className="absolute top-0 left-0 w-full h-full text-[8px] text-blue-500/30 overflow-hidden whitespace-nowrap leading-none select-none">
            {binaryPattern.map((line, i) => (
              <div key={i} className="animate-slide">
                {line}
              </div>
            ))}
          </div>
          
          {/* Circuit Lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-blue-500/20" />
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-500/20" />
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-blue-500/20" />
            <div className="absolute left-1/4 top-0 w-[1px] h-full bg-blue-500/20" />
            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-blue-500/20" />
            <div className="absolute left-3/4 top-0 w-[1px] h-full bg-blue-500/20" />
            
            {/* Circuit Nodes */}
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full border border-blue-500/30"
                style={{
                  left: `${(i % 4) * 25 + 25}%`,
                  top: `${Math.floor(i / 4) * 25 + 25}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="absolute inset-1 rounded-full bg-blue-500/10" />
              </div>
            ))}
          </div>

          {/* Security Icons */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 border border-blue-500/20 rounded-full animate-spin-slow" />
            <div className="absolute w-72 h-72 border border-blue-500/15 rounded-full animate-spin-slow-reverse" />
            <div className="absolute w-48 h-48 border border-blue-500/10 rounded-full animate-spin-slow" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="heading-secondary text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="paragraph text-lg leading-relaxed">
              I am a passionate Cybersecurity Analyst actively seeking my first role in the tech industry. With expertise in threat detection, incident response, and security architecture, I am eager to apply my knowledge and contribute to an organization's security posture. My goal is to help protect digital assets and maintain robust security measures while growing professionally in the cybersecurity field.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Core Competencies</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Security Information and Event Management (SIEM)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Incident Response and Threat Hunting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Network Security and Monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Security Architecture and Design
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Focus Areas</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Threat Detection & Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Security Operations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Vulnerability Management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Security Compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container bg-gray-800">
        <h2 className="heading-secondary text-center">Get in Touch</h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Message subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full button-primary flex items-center justify-center gap-2 py-3 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              <FaEnvelope className="text-xl" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-center mt-4">
                Opening your email client with the message...
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
} 