"use client"

import { useEffect, useMemo, useRef, type ReactNode } from "react"

interface ParallaxHeroProps {
  imageUrl: string
  imageQuery: string
  title: string
  subtitle?: string
  height?: string
  children?: ReactNode
}

export function ParallaxHero({ imageUrl, imageQuery, title, subtitle, height = "h-screen", children }: ParallaxHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const targetOffsetRef = useRef(0)
  const currentOffsetRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)
  const resolvedImageUrl = useMemo(() => {
    if (imageUrl?.trim()) {
      return imageUrl
    }

    const safeQuery = imageQuery ? encodeURIComponent(imageQuery) : "luxury real estate"
    return `https://source.unsplash.com/1600x1200/?${safeQuery}`
  }, [imageUrl, imageQuery])

  useEffect(() => {
    if (!heroRef.current || !parallaxRef.current) {
      return
    }

    if (typeof window === "undefined") {
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (prefersReducedMotion.matches) {
      parallaxRef.current.style.transform = "translate3d(0, 0, 0) scale(1.05)"
      return
    }

    let viewportHeight = window.innerHeight || 1
    let maxOffset = 160

    const smoothAnimate = () => {
      const target = targetOffsetRef.current
      const current = currentOffsetRef.current
      const next = current + (target - current) * 0.12
      currentOffsetRef.current = next

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(0, ${next}px, 0) scale(1.1)`
      }

      if (Math.abs(target - next) > 0.1) {
        animationFrameRef.current = window.requestAnimationFrame(smoothAnimate)
      } else {
        animationFrameRef.current = null
      }
    }

    const updateTargetOffset = () => {
      if (!heroRef.current) return

      const rect = heroRef.current.getBoundingClientRect()
      viewportHeight = window.innerHeight || 1
      maxOffset = Math.min(rect.height * 0.35, 220)
      const heroCenter = rect.top + rect.height / 2
      const viewportCenter = viewportHeight / 2
      const distanceFromCenter = heroCenter - viewportCenter

      targetOffsetRef.current = Math.max(Math.min((-distanceFromCenter / viewportHeight) * maxOffset, maxOffset), -maxOffset)

      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(smoothAnimate)
      }
    }

    const handleScroll = () => {
      updateTargetOffset()
    }

    const handleResize = () => {
      updateTargetOffset()
    }

    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => updateTargetOffset()) : null
    if (resizeObserver && heroRef.current) {
      resizeObserver.observe(heroRef.current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)
    updateTargetOffset()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      resizeObserver?.disconnect()
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div ref={heroRef} className={`relative ${height} overflow-hidden`}>
      {/* Parallax Background Image */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full"
        style={{
          willChange: "transform",
          transform: "translate3d(0, 0, 0) scale(1.1)"
        }}
      >
        <img
          src={resolvedImageUrl}
          alt={title}
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          {children ?? (
            <>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-balance">{title}</h1>
              {subtitle && <p className="text-lg md:text-xl lg:text-2xl text-white/80 text-balance">{subtitle}</p>}
            </>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}
