"use client"

import { ArrowRight, Code2 } from "lucide-react"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleScroll = () => {
    setActiveSection("about")
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Code2 size={16} className="text-primary" />
              <span className="text-xs sm:text-sm text-primary font-medium">Welcome to my portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Software Engineer
              </span>
              <br />
              <span className="text-foreground">Building the Future</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
             I'm a dedicated and curious software developer passionate about building meaningful, user-centered digital solutions. With a strong foundation in frontend development, problem-solving, and teamwork, I enjoy turning ideas into clean, functional, and responsive web experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://github.com/EkramTofik"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                Explore My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.canva.com/design/DAGoEosEvfI/aTeurHkjbvSlph2GC4UZ-g/view?utm_content=DAGoEosEvfI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=heccb30714b"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base text-center"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right side - Floating stats */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              {[
                { label: "Projects", value: "15+" },
                { label: "Experience", value: "5+ Years" },
                { label: "Technologies", value: "20+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-6 rounded-xl bg-card/50 border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  )
}