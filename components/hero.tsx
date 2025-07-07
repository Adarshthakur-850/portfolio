"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Download } from "lucide-react"
import ThreeModel from "./three-model"

export default function Hero() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isClient, setIsClient] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [gsapLoaded, setGsapLoaded] = useState(false)

  const words = ["ML Engineer", "Data Scientist", "Full Stack Developer", "Problem Solver"]

  // Generate consistent particle positions
  const particlePositions = useRef<
    Array<{
      left: string
      top: string
      animationDelay: string
      animationDuration: string
    }>
  >([])

  useEffect(() => {
    setIsClient(true)

    // Generate particle positions only on client side
    if (particlePositions.current.length === 0) {
      particlePositions.current = Array.from({ length: 30 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }))
    }
  }, [])

  useEffect(() => {
    // Check if GSAP is loaded
    const checkGSAP = () => {
      if (typeof window !== "undefined" && window.gsap) {
        setGsapLoaded(true)
        const tl = window.gsap.timeline()

        tl.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }).fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.8, rotation: -10 },
          { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
          "-=0.5",
        )
      } else {
        // Fallback CSS animation
        if (heroRef.current) {
          heroRef.current.style.opacity = "1"
          heroRef.current.style.transform = "translateY(0)"
        }
        if (imageRef.current) {
          imageRef.current.style.opacity = "1"
          imageRef.current.style.transform = "scale(1) rotate(0deg)"
        }
      }
    }

    // Try immediately, then with a delay
    checkGSAP()
    const timer = setTimeout(checkGSAP, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length
      const fullText = words[current]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words])

  const handleDownloadCV = () => {
    // For now, we'll create a simple alert since we don't have the actual PDF file
    // In a real implementation, you would:
    // 1. Add your CV PDF file to the public folder as "adarsh-thakur-cv.pdf"
    // 2. Uncomment the code below

    alert(
      "CV download feature is ready! Please add your CV PDF file to the public folder as 'adarsh-thakur-cv.pdf' to enable downloads.",
    )

    // Uncomment this when you add the PDF file:
    
    const link = document.createElement("a")
    link.href = "/adarsh-thakur-cv.pdf" // Adjust the path as necessary
    link.download = "Adarsh_Thakur_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-[#121212] overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div
          ref={heroRef}
          className="text-center md:text-left z-10 opacity-0 transform translate-y-12 transition-all duration-1000"
          style={{ transitionDelay: gsapLoaded ? "0ms" : "200ms" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#E0E0E0]">Adarsh Thakur</h1>
          <div className="text-2xl md:text-4xl mb-8 h-12">
            <span className="text-[#B0B0B0]">I'm a </span>
            <span className="text-[#E0E0E0] font-semibold">
              {text}
              <span className="animate-pulse text-[#888888]">|</span>
            </span>
          </div>
          <p className="text-xl text-[#B0B0B0] max-w-2xl mb-12">
            Passionate about machine learning, data science, and building intelligent solutions with cutting-edge AI
            technologies
          </p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="#about"
              className="px-6 py-3 bg-[#444444] hover:bg-[#888888] text-[#E0E0E0] rounded-lg transition-colors duration-300 text-center"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#444444] hover:border-[#888888] text-[#E0E0E0] rounded-lg transition-colors duration-300 text-center"
            >
              Get In Touch
            </a>
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 bg-[#888888] hover:bg-[#B0B0B0] text-[#121212] rounded-lg transition-colors duration-300 flex items-center gap-2 font-medium hover:scale-105 transform transition-transform"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>

        {/* 3D Geometric Model */}
        <div
          ref={imageRef}
          className="flex justify-center opacity-0 transform scale-75 transition-all duration-1000"
          style={{ transitionDelay: gsapLoaded ? "0ms" : "500ms" }}
        >
          <div className="relative">
            <ThreeModel />
            {/* Floating elements around image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#888888] rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#B0B0B0] rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-[#444444] rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#888888]" />
      </div>

      {/* Background particles effect - only render on client */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particlePositions.current.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#444444] rounded-full opacity-40 animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
