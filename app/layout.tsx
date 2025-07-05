import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Adarsh Thakur - ML Engineer & Data Scientist Portfolio",
  description:
    "Portfolio of Adarsh Thakur, Machine Learning Engineer and Data Scientist specializing in AI, Deep Learning, and Data Analysis",
  keywords: "Machine Learning Engineer, Data Scientist, AI, Deep Learning, Python, NLP, Computer Vision",
  authors: [{ name: "Adarsh Thakur" }],
  openGraph: {
    title: "Adarsh Thakur - ML Engineer & Data Scientist Portfolio",
    description: "Portfolio of Adarsh Thakur, Machine Learning Engineer and Data Scientist",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono`}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
