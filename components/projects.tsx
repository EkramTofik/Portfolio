"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "AASTU Community Web App",
      description: "Role-based university platform connecting students, staff, and faculty with forums, events, and resource sharing.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      image: "/image.png",
      codeLink: "https://github.com/EkramTofik",
      liveLink: "https://community-web-app-2.vercel.app/"
    },
    {
      title: "Data Exchange Portal",
      description: "Government internship project developing secure data sharing platform for inter-agency information exchange.",
      tags: ["React", "Node.js", "MongoDB", "TypeScript"],
      image: "/modern-ecommerce-dashboard.png",
      codeLink: "https://github.com/EkramTofik",
      liveLink: "https://dataexchangeportal-b6fb.vercel.app/"
    },
    {
      title: "Dynamic Todo List",
      description: "A web-based application that allows users to efficiently manage their daily tasks. Built with JavaScript, HTML, and CSS, it features:",
      tags: ["html","css","javascript"],
      image: "/modern-ecommerce-dashboard.jpg",
      codeLink: "https://github.com/EkramTofik",
      liveLink: "https://dynamic-to-do-list-js-one.vercel.app/"
    },
    {
      title: "React Capstone Project",
      description: "Built interactive UI components using React and styled them with Tailwind CSS for responsive and modern layouts.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      image: "/devops-pipeline-diagram.jpg",
      codeLink: "https://github.com/EkramTofik",
      liveLink: "https://react-capstone-project-beta.vercel.app/"
    },
    {
      title: "Task manager",
      description: "A comprehensive task management tool designed to help users organize, prioritize, and track tasks effectively.",
      tags: ["vite react"],
      image: "/backend-architecture-diagram.jpg",
      codeLink: "https://github.com/EkramTofik",
      liveLink: "https://task-manager-gamma-sand-75.vercel.app/"
    },
    {
      title: " RippleUp",
      description: "A smart platform for booking and managing service-based packages powered by AI, loyalty rewards, and community trust.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
      image: "/design-system-components.png",
      codeLink: "https://github.com/EkramTofik",
      liveLink: "https://rippleup.netlify.app/"
    },
  ]

  return (
    <section id="projects" className="relative py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications and technical solutions I've built
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 perspective">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(selectedProject === i ? null : i)}
              className={`group rounded-xl overflow-hidden bg-card/50 border backdrop-blur-sm transition-all duration-300 cursor-pointer animate-slide-up ${
                selectedProject === i
                  ? "border-primary/80 shadow-2xl shadow-primary/50 scale-110 relative z-50"
                  : "border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 hover:z-40"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    selectedProject === i ? "scale-110" : "group-hover:scale-110"
                  }`}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
