"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { label: "Inicio", href: "/#inicio" },
    { label: "Por qué MTI", href: "/#porque" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Cómo trabajamos", href: "/#metodo" },
    { label: "A quién ayudamos", href: "/#ayudamos" },
    { label: "Mercados", href: "/#operamos" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-serif text-2xl text-white tracking-wider hover:text-primary transition-colors">
            <Image src="/logo-white.png" alt="Logo" width={120} height={30} priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <Link
              href="/#cta"
              className="px-6 py-2 rounded-lg bg-[#f9e280] text-[#1a1a1a] font-semibold hover:bg-[#f9e280]/90 hover:shadow-[0_0_15px_rgba(249,226,128,0.6)] transition-all"
            >
              {"Agenda una cita"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#cta"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-2 rounded-lg bg-[#f9e280] text-[#1a1a1a] font-semibold hover:bg-[#f9e280]/90 hover:shadow-[0_0_15px_rgba(249,226,128,0.6)] transition-all text-center"
            >
              {"Agenda una cita"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
