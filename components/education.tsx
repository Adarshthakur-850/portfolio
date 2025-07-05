"use client"

const education = [
  {
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "Since August 2022",
    description:
      "Pursuing comprehensive education in computer science fundamentals, software engineering, and emerging technologies with focus on AI/ML.",
  },
  {
    degree: "Senior Secondary School Certificate (12th Grade)",
    institution: "Kendriya Vidyalaya Paschim Vihar",
    location: "Delhi, India",
    duration: "Jul 2020 – Jul 2021",
    percentage: "75%",
    description: "Completed higher secondary education with focus on science and mathematics.",
  },
  {
    degree: "Secondary School Certificate (10th Grade)",
    institution: "Kendriya Vidyalaya Paschim Vihar",
    location: "Delhi, India",
    duration: "Jul 2018 – Jul 2019",
    percentage: "85%",
    description: "Completed secondary education with strong academic performance.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-[#121212]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">Education</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#888888] via-[#B0B0B0] to-[#E0E0E0]"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-[#888888] rounded-full border-4 border-[#121212] z-10"></div>

                {/* Content */}
                <div className="ml-20 bg-[#444444]/10 p-6 rounded-lg border border-[#444444] hover:border-[#888888] transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#E0E0E0] mb-2">{edu.degree}</h3>
                      <p className="text-[#B0B0B0] font-medium mb-1">{edu.institution}</p>
                      <p className="text-[#888888] text-sm mb-2">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[#B0B0B0] font-medium block">{edu.duration}</span>
                      {edu.percentage && <span className="text-[#E0E0E0] font-semibold">{edu.percentage}</span>}
                    </div>
                  </div>
                  <p className="text-[#B0B0B0] leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
