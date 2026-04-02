"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

type CookieConsent = {
    necessary: boolean
    analytics: boolean
}

function getCookieConsent(): CookieConsent | null {
    if (typeof window === "undefined") return null
    const raw = localStorage.getItem("cookie_consent")
    if (!raw) return null
    try {
        return JSON.parse(raw)
    } catch {
        return null
    }
}

function setCookieConsent(consent: CookieConsent) {
    localStorage.setItem("cookie_consent", JSON.stringify(consent))
}

export function CookieBanner() {
    const [visible, setVisible] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [analytics, setAnalytics] = useState(true)

    useEffect(() => {
        const consent = getCookieConsent()
        if (!consent) {
            setVisible(true)
        }
    }, [])

    function acceptAll() {
        setCookieConsent({ necessary: true, analytics: true })
        setVisible(false)
    }

    function rejectNonEssential() {
        setCookieConsent({ necessary: true, analytics: false })
        setVisible(false)
    }

    function savePreferences() {
        setCookieConsent({ necessary: true, analytics })
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4">
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl shadow-2xl p-6">
                {!showSettings ? (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h3 className="font-serif text-lg font-medium text-foreground">
                                Usamos cookies
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Utilizamos cookies propias y de terceros para analizar el uso del sitio web y mejorar nuestros servicios. Puedes aceptar todas las cookies, rechazar las no esenciales o configurar tus preferencias.{" "}
                                <Link href="/legal/cookies" className="text-primary hover:text-primary/80 underline">
                                    Política de Cookies
                                </Link>
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={acceptAll}
                                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                            >
                                Aceptar todas
                            </button>
                            <button
                                onClick={rejectNonEssential}
                                className="px-5 py-2.5 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors border border-border"
                            >
                                Rechazar no esenciales
                            </button>
                            <button
                                onClick={() => setShowSettings(true)}
                                className="px-5 py-2.5 text-muted-foreground rounded-lg text-sm font-medium hover:text-foreground transition-colors underline"
                            >
                                Configurar
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-medium text-foreground">
                            Configuración de cookies
                        </h3>

                        <div className="space-y-3">
                            <label className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted/50">
                                <div>
                                    <p className="text-sm font-medium text-foreground">Cookies necesarias</p>
                                    <p className="text-xs text-muted-foreground">Imprescindibles para el funcionamiento del sitio</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked
                                    disabled
                                    className="h-4 w-4 accent-primary"
                                />
                            </label>

                            <label className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted/50 cursor-pointer">
                                <div>
                                    <p className="text-sm font-medium text-foreground">Cookies analíticas</p>
                                    <p className="text-xs text-muted-foreground">Nos ayudan a entender cómo se usa el sitio web</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={analytics}
                                    onChange={(e) => setAnalytics(e.target.checked)}
                                    className="h-4 w-4 accent-primary"
                                />
                            </label>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={savePreferences}
                                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                            >
                                Guardar preferencias
                            </button>
                            <button
                                onClick={() => setShowSettings(false)}
                                className="px-5 py-2.5 text-muted-foreground rounded-lg text-sm font-medium hover:text-foreground transition-colors underline"
                            >
                                Volver
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
