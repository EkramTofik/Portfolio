"use client"

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="animate-slide-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
  I'm a dedicated and curious software developer with a strong passion for building responsive, user-friendly, and impactful web applications. My journey began with a deep interest in how technology can solve everyday challenges, and over time, it has grown into a solid foundation in frontend development, software engineering principles, and team collaboration.
</p>
<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
  Through hands-on experience in projects like interactive learning platforms, role-based community web apps, and system requirement analysis, I've developed a problem-solving mindset and a love for clean, efficient code. I’m always eager to learn, adapt, and bring creative ideas to life through technology that empowers others.
</p>

            <div className="space-y-3">
              {[
                "Full-stack web development",
                "Cloud architecture & DevOps",
                "UI/UX implementation",
                "Team leadership & mentoring",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative h-96 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <div className="absolute inset-0 border border-primary/30 rounded-2xl backdrop-blur-sm" />
            <div className="absolute inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
