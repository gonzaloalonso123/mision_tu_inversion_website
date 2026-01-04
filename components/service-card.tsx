import type React from "react"
import Link from "next/link"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:border-primary hover:shadow-[0_0_20px_rgba(249,226,128,0.3)] transition-all duration-300">
        <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-2xl mb-3 text-foreground transition-colors relative">
          <span className="relative z-10">{title}</span>
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        <span className="text-primary text-sm font-medium inline-flex items-center gap-2">
          {"Conoce más"}
          <svg
            className="w-4 h-4 group-hover:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
