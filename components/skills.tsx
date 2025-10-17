"use client"

import { Code2, Database, Cloud, Zap, Cpu, Palette } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      color: "from-primary to-secondary",
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
      color: "from-secondary to-accent",
    },
    {
      icon: Cloud,
      title: "DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel"],
      color: "from-accent to-primary",
    },
    {
      icon: Zap,
      title: "Tools",
      skills: ["Git", "Figma", "Jira", "VS Code", "Postman"],
      color: "from-primary to-accent",
    },
    {
      icon: Cpu,
      title: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "LLMs", "RAG", "Prompt Engineering"],
      color: "from-secondary to-primary",
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["UI/UX", "Responsive Design", "Accessibility", "Animation", "Prototyping"],
      color: "from-accent to-secondary",
    },
  ]

  return (
    <section id="skills" className="relative py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, i) => {
            const Icon = category.icon
            return (
              <div
                key={i}
                className="group relative animate-slide-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Main card */}
                <div className="relative p-6 sm:p-8 rounded-2xl border-2 border-primary/20 group-hover:border-primary/60 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 h-full flex flex-col">
                  <div className="mb-6 relative">
                    {/* Icon background - no blur, always visible */}
                    <div
                      className={`relative p-3 sm:p-4 rounded-xl bg-gradient-to-br ${category.color} opacity-70 group-hover:opacity-100 transition-all duration-300 w-fit`}
                    >
                      <Icon
                        size={28}
                        className="sm:w-8 sm:h-8 text-white group-hover:text-accent transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Skills with animated indicators */}
                  <div className="space-y-3 flex-1">
                    {category.skills.map((skill, j) => (
                      <div key={j} className="flex items-center gap-3 group/skill">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover/skill:scale-150 transition-transform duration-300" />
                        <span className="text-xs sm:text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-300" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
