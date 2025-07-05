"use client"

const certifications = [
  {
    title: "Cloud Computing - NPTEL",
    issuer: "NPTEL",
    date: "Aug 2024 – Nov 2024",
    description:
      "Comprehensive certification covering cloud computing fundamentals, architecture, services, and deployment models.",
  },
  {
    title: "Complete Java Certificates",
    issuer: "Lovely Professional University",
    date: "May 2024 – Jun 2024",
    description:
      "Complete Java programming certification covering object-oriented programming, data structures, and application development.",
  },
  {
    title: "Machine Learning Certificates",
    issuer: "Academe's",
    date: "May 2024 – Jun 2024",
    description:
      "Comprehensive machine learning certification covering algorithms, model development, and practical implementation.",
  },
  {
    title: "Data Science Certificates",
    issuer: "LinkedIn",
    date: "May 2024 – Jun 2024",
    description:
      "Data science fundamentals covering data analysis, visualization, statistical methods, and data-driven insights.",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-[#121212]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">Certifications</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#888888] via-[#B0B0B0] to-[#E0E0E0]"></div>

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-[#888888] rounded-full border-4 border-[#121212] z-10"></div>

                {/* Content */}
                <div className="ml-20 bg-[#444444]/10 p-6 rounded-lg border border-[#444444] hover:border-[#888888] transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#E0E0E0] mb-2 md:mb-0">{cert.title}</h3>
                    <span className="text-[#B0B0B0] font-medium">{cert.date}</span>
                  </div>
                  <p className="text-[#B0B0B0] font-medium mb-3">{cert.issuer}</p>
                  <p className="text-[#B0B0B0] leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
