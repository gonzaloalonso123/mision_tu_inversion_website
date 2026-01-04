"use client"

import { useActionState, useEffect, useRef } from "react"
import { submitContactForm } from "./actions"
import { toast } from "sonner"

const initialState = {
  success: false,
  message: "",
  errors: {},
}

export default function ContactPage() {
  const [state, action, pending] = useActionState(submitContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message)
        formRef.current?.reset()
      } else {
        toast.error(state.message)
      }
    }
  }, [state])

  // Helper to get error message for a field
  const getError = (field: string) => {
    return state.errors?.[field as keyof typeof state.errors]?.[0]
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Contacta con MTI</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-white/80 text-lg text-balance">Diseñamos contigo la estrategia que tu inversión necesita</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl mb-8 text-foreground">Información de contacto</h2>

              <div className="space-y-8">
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
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">misiontuinversion@gmail.com</p>
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
                    <h3 className="font-medium text-foreground mb-1">Horario</h3>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 9:00 - 18:00
                      <br />
                      Sábado: 10:00 - 16:00
                      <br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-muted p-6 border-l-4 border-primary">
                <h3 className="font-serif text-xl mb-2 text-foreground">Agenda una reunión</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Trabajamos con un número reducido de clientes. Reserva una cita y dedicaremos una sesión privada a tu
                  estrategia.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border p-8">
              <h2 className="font-serif text-3xl mb-6 text-foreground">Envíanos un mensaje</h2>

              <form ref={formRef} action={action} className="space-y-6">
                {state.success ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                    <h3 className="text-xl font-medium mb-2">¡Mensaje enviado!</h3>
                    <p className="mb-4">{state.message}</p>
                    <button
                      type="button"
                      onClick={() => window.location.reload()}
                      className="text-sm underline hover:no-underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        aria-describedby="name-error"
                      />
                      {getError("name") && (
                        <p id="name-error" className="mt-1 text-sm text-red-500">
                          {getError("name")}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        aria-describedby="email-error"
                      />
                      {getError("email") && (
                        <p id="email-error" className="mt-1 text-sm text-red-500">
                          {getError("email")}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Servicio de interés *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        aria-describedby="service-error"
                      >
                        <option value="" disabled>
                          Selecciona un servicio
                        </option>
                        <option value="psi">Personal Shopper Inmobiliario</option>
                        <option value="rent-to-rent">Rent to Rent</option>
                        <option value="compra-reforma-venta">Compra - Reforma - Venta</option>
                        <option value="internacional">Asesoría Internacional</option>
                        <option value="financiera">Asesoría Financiera</option>
                        <option value="hipotecas">Obtención de Hipotecas</option>
                      </select>
                      {getError("service") && (
                        <p id="service-error" className="mt-1 text-sm text-red-500">
                          {getError("service")}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                        aria-describedby="message-error"
                      />
                      {getError("message") && (
                        <p id="message-error" className="mt-1 text-sm text-red-500">
                          {getError("message")}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={pending}
                      className="w-full px-8 py-4 bg-primary text-black font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {pending ? "Enviando..." : "Enviar mensaje"}
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main >
  )
}

