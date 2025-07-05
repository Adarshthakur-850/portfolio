"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Calendar, MapPin, Building } from "lucide-react"

const timelineData = [
  {
    year: "2024",
    type: "experience" as const,
    side: "right" as const,
    title: "Data Assistant Task",
    company: "Fiverr Company - Freelancer",
    location: "Remote",
    duration: "Dec 2024 – Mar 2025",
    description:
      "Processed 1M+ data points with 99% accuracy; analyzed 500K+ records using Excel & SQL. Built 10+ interactive dashboards, boosting cross-team decision-making.",
    achievements: [
      "Processed 1M+ data points with 99% accuracy",
      "Analyzed 500K+ records using Excel & SQL",
      "Built 10+ interactive dashboards",
      "Resolved 95% of data issues, improving operational efficiency",
    ],
  },
  {
    year: "2024",
    type: "experience" as const,
    side: "right" as const,
    title: "Machine Learning Task",
    company: "Fiverr Company - Freelancer",
    location: "Remote",
    duration: "May 2024 – Sept 2024",
    description:
      "Developed and fine-tuned 10+ machine learning models for customer segmentation, achieving up to 95% accuracy. Deployed ML solutions in production systems.",
    achievements: [
      "Developed 10+ ML models with 95% accuracy",
      "30% improvement in operational efficiency",
      "F1 scores up to 0.92 in critical use cases",
      "Deployed ML solutions in production systems",
    ],
  },
  {
    year: "2024",
    type: "project" as const,
    side: "left" as const,
    title: "Chess Game Predictor",
    description:
      "Designed and implemented a machine learning model achieving 90%+ accuracy in predicting optimal chess moves, trained on a dataset of over 1 million historical games.",
    tech: ["Python", "Deep Learning", "Reinforcement Learning", "Game AI", "TensorFlow"],
    github: "https://github.com/Adarshthakur-850",
    demo: "#",
    image: "/placeholder.svg?height=200&width=300",
    achievements: [
      "90%+ accuracy in predicting optimal chess moves",
      "Trained on 1M+ historical games dataset",
      "30% enhancement in Elo rating",
      "Advanced reinforcement learning techniques",
    ],
  },
  {
    year: "2024",
    type: "project" as const,
    side: "left" as const,
    title: "Chat Message Analysis",
    description:
      "Engineered an advanced NLP model for sentiment analysis, spam detection, and intent recognition, achieving 95%+ accuracy across various tasks.",
    tech: ["Python", "Scikit-learn", "NLTK", "SpaCy", "TF-IDF", "NLP"],
    github: "https://github.com/Adarshthakur-850",
    demo: "#",
    image: "/placeholder.svg?height=200&width=300",
    achievements: [
      "95%+ accuracy in NLP tasks",
      "Processed over 500K samples",
      "30% boost in robustness via cross-validation",
      "Advanced text preprocessing pipelines",
    ],
  },
  {
    year: "2023",
    type: "project" as const,
    side: "left" as const,
    title: "Movie Recommendation System",
    description:
      "Created a movie recommendation system leveraging facial emotion detection (90%+ accuracy) and poster similarity analysis (85%+ match).",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "Computer Vision", "Deep Learning"],
    github: "https://github.com/Adarshthakur-850",
    demo: "#",
    image: "/placeholder.svg?height=200&width=300",
    achievements: [
      "90%+ accuracy in emotion detection",
      "85%+ match in poster similarity",
      "30% boost in recommendation accuracy",
      "Full-stack implementation with Flask",
    ],
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)

            if (typeof window !== "undefined" && window.gsap) {
              const items = timelineRef.current?.querySelectorAll(".timeline-item")

              if (items) {
                Array.from(items).forEach((item, index) => {
                  const isLeftItem = item.classList.contains("left-item")
                  window.gsap.fromTo(
                    item,
                    {
                      opacity: 0,
                      x: isLeftItem ? -100 : 100,
                      scale: 0.8,
                    },
                    {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: "power2.out",
                    },
                  )
                })
              }

              // Animate timeline line
              const timelineLine = timelineRef.current?.querySelector(".timeline-line")
              if (timelineLine) {
                window.gsap.fromTo(timelineLine, { height: "0%" }, { height: "100%", duration: 2, ease: "power2.out" })
              }
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
    <section id="projects" ref={sectionRef} className="py-20 px-4 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">Projects & Experience</h2>

        <div ref={timelineRef} className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#444444]">
            <div
              className="timeline-line w-full bg-gradient-to-b from-[#888888] to-[#B0B0B0]"
              style={{ height: "0%" }}
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#E0E0E0] rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#E0E0E0] rounded-full"></div>
          </div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${item.side}-item relative flex ${
                  item.side === "left" ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#888888] rounded-full border-4 border-[#121212] z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#E0E0E0] rounded-full"></div>
                </div>

                {/* Year Label */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-[#444444] text-[#E0E0E0] px-3 py-1 rounded-full text-sm font-semibold">
                  {item.year}
                </div>

                {/* Content Card */}
                <div className={`w-full max-w-md ${item.side === "left" ? "mr-8" : "ml-8"}`}>
                  {item.type === "project" ? (
                    <div className="bg-[#444444]/10 p-6 rounded-lg border border-[#444444] hover:border-[#888888] transition-all duration-300">
                      {item.image && (
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                      )}
                      <h3 className="text-xl font-semibold mb-3 text-[#E0E0E0]">{item.title}</h3>
                      <p className="text-[#B0B0B0] mb-4 leading-relaxed">{item.description}</p>

                      {item.tech && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-[#888888]/20 text-[#B0B0B0] rounded text-xs border border-[#888888]/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.achievements && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-[#E0E0E0] mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-[#B0B0B0] flex items-start gap-2">
                                <span className="text-[#888888] mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <a
                          href={item.github}
                          className="flex items-center gap-2 px-3 py-2 bg-[#444444] hover:bg-[#888888] rounded-lg transition-colors duration-300 text-sm text-[#E0E0E0]"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={item.demo}
                          className="flex items-center gap-2 px-3 py-2 bg-[#888888] hover:bg-[#B0B0B0] text-[#121212] rounded-lg transition-colors duration-300 text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#888888]/10 p-6 rounded-lg border border-[#888888] hover:border-[#B0B0B0] transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <Building className="w-5 h-5 text-[#B0B0B0] mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-[#E0E0E0]">{item.title}</h3>
                          <p className="text-[#B0B0B0] font-medium">{item.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-3 text-sm text-[#B0B0B0]">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>

                      <p className="text-[#B0B0B0] mb-4 leading-relaxed">{item.description}</p>

                      {item.achievements && (
                        <div>
                          <h4 className="text-sm font-semibold text-[#E0E0E0] mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-[#B0B0B0] flex items-start gap-2">
                                <span className="text-[#888888] mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
