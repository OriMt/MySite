'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaNetworkWired, FaServer, FaShieldAlt } from 'react-icons/fa'
import { useState } from 'react'

interface Project {
  title: string;
  description: string;
  icon: JSX.Element;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "pfSense Home Network Setup",
    description: "A comprehensive guide for implementing a secure home network infrastructure using pfSense. Features detailed walkthroughs of firewall configuration, network segmentation, VLANs, and intrusion detection system (IDS) setup for maximum security.",
    icon: <FaNetworkWired className="text-5xl text-blue-400" />,
    technologies: ["pfSense", "Network Security", "Firewall", "IDS/IPS", "VLANs"],
    liveUrl: "https://secretive-shirt-b81.notion.site/pfsense-home-Network-installation-and-configuration-tutorial-edfdcf8288d643f6a2f91fdb5755eacc"
  },
  {
    title: "DHCP Server Configuration Guide",
    description: "In-depth documentation on secure DHCP server implementation, including DHCP snooping, IP source guard, and dynamic ARP inspection. Demonstrates best practices for preventing DHCP-based attacks and ensuring network integrity.",
    icon: <FaServer className="text-5xl text-blue-400" />,
    technologies: ["DHCP Security", "Network Administration", "IP Management", "Security Hardening"],
    liveUrl: "https://secretive-shirt-b81.notion.site/DHCP-Configuration-e523e5eef8114e19bddd0deefc996552"
  },
  {
    title: "Digital Forensics Investigation Project",
    description: "A comprehensive Digital Forensics and Incident Response (DFIR) project showcasing advanced investigation methodologies, malware analysis, and threat hunting techniques. Includes practical applications of forensic tools and incident response procedures.",
    icon: <FaShieldAlt className="text-5xl text-blue-400" />,
    technologies: ["Digital Forensics", "Incident Response", "Malware Analysis", "Threat Detection"],
    liveUrl: "https://secretive-shirt-b81.notion.site/My-DFIR-Project-1032d92e737580008215cebbafa2fec3"
  }
]

export default function Projects() {
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({})

  return (
    <main className="min-h-screen py-16">
      <div className="section-container">
        <h1 className="heading-primary text-center mb-12">My Projects</h1>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project Icon/Visual */}
                <div className="relative h-[300px] md:h-[400px] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors duration-200">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    </h2>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary flex items-center gap-2 hover:scale-105 transition-transform duration-200"
                      >
                        <FaGithub />
                        View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary flex items-center gap-2 hover:scale-105 transition-transform duration-200"
                      >
                        <FaExternalLinkAlt />
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 