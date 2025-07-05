"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from "@/app/actions/send-email"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await sendEmail(formData)
      if (result.success) {
        setMessage("Message sent successfully!")
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setMessage("Failed to send message. Please try again.")
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage(""), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#E0E0E0]">Let's Connect</h3>
              <p className="text-[#B0B0B0] text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative ML projects, or collaborating on
                exciting data science challenges. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#888888] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#E0E0E0]" />
                </div>
                <div>
                  <p className="text-[#B0B0B0]">Email</p>
                  <p className="text-[#E0E0E0]">thakuradarsh8368@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#E0E0E0]" />
                </div>
                <div>
                  <p className="text-[#B0B0B0]">Mobile</p>
                  <p className="text-[#E0E0E0]">+91-8882026112</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#E0E0E0]" />
                </div>
                <div>
                  <p className="text-[#B0B0B0]">Location</p>
                  <p className="text-[#E0E0E0]">Punjab, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-[#E0E0E0]">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/adarsh-thakur0408/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#444444] hover:bg-[#888888] p-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <Linkedin className="w-6 h-6 text-[#E0E0E0]" />
                  <ExternalLink className="w-3 h-3 text-[#B0B0B0]" />
                </a>
                <a
                  href="https://github.com/Adarshthakur-850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#444444] hover:bg-[#888888] p-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <Github className="w-6 h-6 text-[#E0E0E0]" />
                  <ExternalLink className="w-3 h-3 text-[#B0B0B0]" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#444444]/10 p-8 rounded-lg border border-[#444444]">
            <form id="contact-form" action={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#B0B0B0] mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-[#444444] border-[#444444] text-[#E0E0E0] focus:border-[#888888]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#B0B0B0] mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-[#444444] border-[#444444] text-[#E0E0E0] focus:border-[#888888]"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#B0B0B0] mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="bg-[#444444] border-[#444444] text-[#E0E0E0] focus:border-[#888888]"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#B0B0B0] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="bg-[#444444] border-[#444444] text-[#E0E0E0] focus:border-[#888888]"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#888888] hover:bg-[#B0B0B0] text-[#E0E0E0] py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>

              {message && (
                <p className={`text-center ${message.includes("success") ? "text-green-400" : "text-red-400"}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
