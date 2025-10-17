"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    console.log("Form submitted:", formData)
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSubmitted(false)
      }, 3000)
    }, 800)
  }

  return (
    <section id="contact" className="relative py-20 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="animate-slide-up">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/30 backdrop-blur-xl shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
            >
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-lg bg-background/50 border-2 border-primary/20 focus:border-primary/60 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 placeholder-muted-foreground text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-lg bg-background/50 border-2 border-primary/20 focus:border-primary/60 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 placeholder-muted-foreground text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-lg bg-background/50 border-2 border-primary/20 focus:border-primary/60 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 placeholder-muted-foreground text-sm"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 sm:py-3 rounded-lg bg-background/50 border-2 border-primary/20 focus:border-primary/60 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 resize-none placeholder-muted-foreground text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || submitted}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/60 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-75 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} className="animate-pulse-glow" />
                    Message Sent Successfully!
                  </>
                ) : isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {[
              { icon: Mail, label: "Email", value: "email", href: "ekru6482@gmail.com" },
              { icon: Github, label: "GitHub", value: "github.com", href: "mailto:https://github.com/EkramTofik" },
              { icon: Twitter, label: "Twitter", value: "@twitter", href: "https://x.com/ekru6482" },
            ].map((contact, i) => {
              const Icon = contact.icon
              return (
                <a
                  key={i}
                  href={contact.href}
                  className="p-4 sm:p-6 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-primary to-accent opacity-20 group-hover:opacity-40 transition-all">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{contact.label}</p>
                      <p className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
