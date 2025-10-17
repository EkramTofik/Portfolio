"use client"

import { useEffect, useState } from "react"

export default function Experience() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          } else {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => {
              const newState = [...prev]
              newState[index] = false
              return newState
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll("[data-experience-card]")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

 const experiences = [
  {
    role: "Frontend Developer (Trainee)",
    company: "ALX Africa",
    period: "2024 - Present",
    description:
      "Learning and building real-world projects through the ALX Frontend Web Development program. Developed strong skills in HTML, CSS, JavaScript, and React while applying user-centered design and responsive development principles.",
    highlights: [
      "Responsive Web Design",
      "JavaScript & React Development",
      "Project Collaboration",
    ],
  },
  {
    role: "Frontend Developer | GDG AASTU Tech Group",
    company: "Google Developer Groups AASTU",
    period: "2024",
    description:
      "Completed React training and participated in a GDG Hackathon, where the team built an AI-powered Loyalty & Rewards Platform. Strengthened teamwork, problem-solving, and technical implementation skills.",
    highlights: [
      "React & Tailwind CSS",
      "Hackathon Participation",
      "Team Collaboration",
    ],
  },
  {
    role: "Software Engineering Student | Researcher & Outreach Coordinator",
    company: "Interactive Coding Education Platform (Team Project)",
    period: "2024",
    description:
      "Worked as a researcher and outreach coordinator on a project aimed at improving coding education accessibility. Conducted user research, contributed to requirement gathering, and assisted in frontend design.",
    highlights: [
      "Requirement Analysis",
      "User Research",
      "UX Collaboration",
    ],
  },
  {
    role: "Full Stack Developer (Academic Project)",
    company: "AASTU University Community Web App",
    period: "2023 - 2024",
    description:
      "Designed and developed a role-based web application for students, staff, and faculty to share resources, announcements, and discussions. Implemented secure authentication and role-based access using PHP and MySQL.",
    highlights: [
      "PHP & MySQL",
      "Role-Based Authentication",
      "System Design",
    ],
  },
  {
    role: "System Analyst",
    company: "Software Requirement Engineering Project",
    period: "2023",
    description:
      "Analyzed and documented functional and non-functional requirements for an Online Student Registration System. Focused on clarity, consistency, and traceability in requirement specifications.",
    highlights: [
      "Requirement Engineering",
      "Documentation",
      "System Analysis",
    ],
  },
];


  return (
    <section id="experience" className="relative py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">My journey in the tech industry</p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              data-experience-card
              data-index={i}
              className={`relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-primary/30 hover:border-primary/60 transition-all duration-500 ${
                visibleCards[i] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
              style={{
                transitionDelay: visibleCards[i] ? `${i * 150}ms` : "0ms",
              }}
            >
              {/* Animated timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background animate-pulse-glow shadow-lg shadow-primary/50" />

              {/* Experience card */}
              <div className="group p-6 sm:p-8 rounded-xl bg-gradient-to-br from-card/60 to-card/30 border-2 border-primary/20 group-hover:border-primary/50 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3 sm:gap-0">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-semibold text-base sm:text-lg mt-1">{exp.company}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">{exp.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {exp.highlights.map((highlight, j) => (
                    <span
                      key={j}
                      className="px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30 text-xs sm:text-sm font-medium group-hover:border-primary/60 transition-all duration-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
