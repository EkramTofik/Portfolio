"use client"

export default function ProfileSection() {
  return (
    <section id="profile" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative animate-slide-up">
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated background circles */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-accent/20 to-secondary/30 rounded-3xl blur-2xl animate-float" />
              <div
                className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl animate-float"
                style={{ animationDelay: "1s" }}
              />

              {/* Image container with hexagon-like shape */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/40 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                <img
                  src="/hijabi-girl-software-engineer-coder-professional.jpg"
                  alt="Hijabi Girl Coder"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg shadow-primary/30 animate-bounce">
                Full Stack Dev
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a deep love for creating beautiful, functional web
              applications. With 5+ years of experience in the tech industry, I've worked on diverse projects ranging
              from startups to enterprise solutions.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As a hijabi woman in tech, I'm committed to breaking barriers and inspiring others to pursue their dreams
              in software engineering. I believe in continuous learning, clean code, and building products that make a
              real difference.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Problem Solver</h4>
                  <p className="text-muted-foreground">
                    Tackling complex challenges with creative and efficient solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-secondary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Team Player</h4>
                  <p className="text-muted-foreground">
                    Collaborating effectively with designers, developers, and stakeholders
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Continuous Learner</h4>
                  <p className="text-muted-foreground">Always exploring new technologies and best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
