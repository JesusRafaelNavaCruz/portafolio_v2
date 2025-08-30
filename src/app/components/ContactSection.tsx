"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Send, Github, Linkedin, Mail, MapPin, Phone, Twitter, Instagram } from "lucide-react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">
              ¿Listo para empezar?
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Si buscas un desarrollador que dé vida a tus ideas, estoy aquí para escucharte.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Contacto</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#22D3EE]/10 rounded-full border border-[#22D3EE]/30">
                    <Mail className="text-[#22D3EE]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">jesusrafaelnavacruz@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#8B5CF6]/10 rounded-full border border-[#8B5CF6]/30">
                    <Phone className="text-[#8B5CF6]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Teléfono</p>
                    <p className="text-white">+52 (562) 126-34-17</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#22D3EE]/10 rounded-full border border-[#22D3EE]/30">
                    <MapPin className="text-[#22D3EE]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Ubicación</p>
                    <p className="text-white">Cuernavaca, Morelos, México</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Sígueme</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
                    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
                    { icon: Twitter, href: "#", label: "Email", color: "hover:text-[#22D3EE]" },
                    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#22D3EE]" },
                  ].map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      className={`p-3 bg-gray-800/50 rounded-full border border-gray-700 text-gray-400 ${color} hover:border-current transition-all duration-300 hover:scale-110`}
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] focus:outline-none transition-colors duration-300"
                    placeholder="tu.correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Hablame de tu idea..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#22D3EE]/25 flex items-center justify-center space-x-2"
                >
                  <span>Contactar</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
