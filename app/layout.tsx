import type React from "react"
import type { Metadata } from "next"
import { Lora, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const lora = Lora({ subsets: ["latin"], weight: ["400"], variable: "--font-lora" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "MTI - Estrategia Inmobiliaria",
  description: "Soluciones para invertir con seguridad y rentabilidad",
  generator: "Gonzalo Alonso",
  icons: {
    icon: [
      {
        url: "/isotipo-black.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/isotipo-white.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/isotipo-black.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${lora.variable} ${montserrat.variable}`}>
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
