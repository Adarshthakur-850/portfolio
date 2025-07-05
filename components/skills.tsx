"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "Python", level: 95, category: "Programming" },
  { name: "JavaScript", level: 90, category: "Programming" },
  { name: "C++", level: 85, category: "Programming" },
  { name: "Java", level: 80, category: "Programming" },
  { name: "Machine Learning", level: 95, category: "AI/ML" },
  { name: "Deep Learning", level: 90, category: "AI/ML" },
  { name: "NLP", level: 88, category: "AI/ML" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Node.js", level: 82, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "MySQL", level: 85, category: "Database" },
]

const categories = [
  {
    title: "Programming Languages",
    skills: ["C++", "JavaScript", "C", "Python", "Java"],
    icon: "💻",
  },
  {
    title: "AI & Machine Learning",
    skills: ["Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning", "TensorFlow", "Scikit-learn"],
    icon: "🧠",
  },
  {
    title: "Web Development",
    skills: ["HTML & CSS", "Bootstrap", "React", "Node.js", "Flask"],
    icon: "🌐",
  },
  {
    title: "Data & Tools",
    skills: ["MySQL", "MongoDB", "Excel", "SQL", "NLTK", "SpaCy", "OpenCV"],
    icon: "📊",
  },
]

const softSkills = [
  "Project Management",
  "Team Collaboration",
  "Leadership",
  "Innovative Thinking",
  "Data-Driven Decision Making",
  "Problem Solving",
  "Model Optimization",
  "Research & Development",
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const skillBarsRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)

            if (typeof window !== "undefined" && window.gsap) {
              // Animate skill bars
              skills.forEach((skill, index) => {
                const skillElement = skillBarsRef.current?.children[index]
                const bar = skillElement?.querySelector(".skill-bar") as HTMLElement
                if (bar) {
                  window.gsap.fromTo(
                    bar,
                    { width: "0%" },
                    { width: `${skill.level}%`, duration: 1.5, delay: index * 0.1, ease: "power2.out" },
                  )
                }
              })

              // Animate category cards
              const categoriesChildren = categoriesRef.current?.children
              if (categoriesChildren) {
                window.gsap.fromTo(
                  Array.from(categoriesChildren),
                  { opacity: 0, y: 30, rotationY: 45 },
                  { opacity: 1, y: 0, rotationY: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.5 },
                )
              }
            } else {
              // Fallback CSS animations
              skills.forEach((skill, index) => {
                const skillElement = skillBarsRef.current?.children[index]
                const bar = skillElement?.querySelector(".skill-bar") as HTMLElement
                if (bar) {
                  setTimeout(() => {
                    bar.style.width = `${skill.level}%`
                  }, index * 100)
                }
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-[#121212] relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">Skills & Expertise</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-[#E0E0E0]">Technical Proficiency</h3>
            <div ref={skillBarsRef} className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[#E0E0E0] font-medium">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#B0B0B0] bg-[#444444] px-2 py-1 rounded">{skill.category}</span>
                      <span className="text-[#B0B0B0]">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-[#444444] rounded-full h-3 overflow-hidden">
                    <div
                      className="skill-bar h-3 rounded-full bg-gradient-to-r from-[#888888] to-[#B0B0B0] transition-all duration-1000 ease-out"
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-[#E0E0E0]">Technical Stack</h3>
            <div ref={categoriesRef} className="space-y-4">
              {categories.map((category, index) => (
                <div
                  key={category.title}
                  className="bg-[#444444]/10 p-6 rounded-lg border border-[#444444] hover:border-[#888888] transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h4 className="text-xl font-semibold text-[#E0E0E0]">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#444444]/20 text-[#B0B0B0] rounded-full text-sm border border-[#444444] hover:border-[#888888] hover:text-[#E0E0E0] transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-[#E0E0E0] text-center">Soft Skills</h3>
          <div className="bg-gradient-to-r from-[#444444]/20 to-[#888888]/20 p-8 rounded-lg border border-[#444444]">
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#444444]/30 text-[#E0E0E0] rounded-full text-sm border border-[#444444] hover:border-[#888888] hover:bg-[#444444]/50 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
