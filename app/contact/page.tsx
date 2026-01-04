"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo muy pronto.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance">{"Contacta con MTI"}</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-white/80 text-lg text-balance">{"Diseñamos contigo la estrategia que tu inversión necesita"}</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl mb-8 text-foreground">{"Información de contacto"}</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-primary flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{"Teléfono"}</h3>
                    <p className="text-muted-foreground">{"+34 638 14 26 19"}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-primary flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{"Email"}</h3>
                    <p className="text-muted-foreground">{"misiontuinversion@gmail.com"}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-primary flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{"Oficina"}</h3>
                    <p className="text-muted-foreground">
                      {"Calle Saturno 12"}
                      <br />
                      {"Tres Cantos, Madrid"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-primary flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{"Horario"}</h3>
                    <p className="text-muted-foreground">
                      {"Lunes a Viernes: 9:00 - 18:00"}
                      <br />
                      {"Sábado: 10:00 - 16:00"}
                      <br />
                      {"Domingo: Cerrado"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-muted p-6 border-l-4 border-primary">
                <h3 className="font-serif text-xl mb-2 text-foreground">{"Agenda una reunión"}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {"Trabajamos con un número reducido de clientes. Reserva una cita y dedicaremos una sesión privada a tu estrategia."}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border p-8">
              <h2 className="font-serif text-3xl mb-6 text-foreground">{"Envíanos un mensaje"}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {"Nombre *"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {"Correo electrónico *"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    {"Teléfono"}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    {"Servicio de interés *"}
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">{"Selecciona un servicio"}</option>
                    <option value="psi">{"Personal Shopper Inmobiliario"}</option>
                    <option value="rent-to-rent">{"Rent to Rent"}</option>
                    <option value="compra-reforma-venta">{"Compra - Reforma - Venta"}</option>
                    <option value="internacional">{"Asesoría Internacional"}</option>
                    <option value="financiera">{"Asesoría Financiera"}</option>
                    <option value="hipotecas">{"Obtención de Hipotecas"}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {"Mensaje *"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-black font-medium hover:bg-primary/90 transition-colors"
                >
                  {"Enviar mensaje"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
