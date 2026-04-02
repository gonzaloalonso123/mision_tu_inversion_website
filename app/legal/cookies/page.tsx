import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Política de Cookies - MTI Estrategia Inmobiliaria",
    description: "Política de cookies de MTI Estrategia Inmobiliaria",
}

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen pt-20">
            <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Política de Cookies</h1>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6" />
                    <p className="text-white/80 text-lg">Última actualización: 2 de abril de 2026</p>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
                    <h2 className="font-serif text-3xl mb-4">1. ¿Qué son las Cookies?</h2>
                    <p className="text-muted-foreground">
                        Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador, tableta o móvil) cuando los visitas. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">2. ¿Qué Cookies Utilizamos?</h2>

                    <h3 className="font-serif text-xl mb-2 mt-8">Cookies Técnicas (Necesarias)</h3>
                    <p className="text-muted-foreground">
                        Son imprescindibles para el funcionamiento del sitio web. Sin ellas, el sitio no podría funcionar correctamente.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-muted-foreground">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-2 pr-4 text-foreground">Cookie</th>
                                    <th className="text-left py-2 pr-4 text-foreground">Finalidad</th>
                                    <th className="text-left py-2 text-foreground">Duración</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 pr-4">cookie_consent</td>
                                    <td className="py-2 pr-4">Almacena tus preferencias de cookies</td>
                                    <td className="py-2">365 días</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="font-serif text-xl mb-2 mt-8">Cookies Analíticas</h3>
                    <p className="text-muted-foreground">
                        Nos permiten medir y analizar el comportamiento de los usuarios en el sitio web para mejorar nuestros servicios.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-muted-foreground">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-2 pr-4 text-foreground">Cookie</th>
                                    <th className="text-left py-2 pr-4 text-foreground">Proveedor</th>
                                    <th className="text-left py-2 pr-4 text-foreground">Finalidad</th>
                                    <th className="text-left py-2 text-foreground">Duración</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 pr-4">va</td>
                                    <td className="py-2 pr-4">Vercel Analytics</td>
                                    <td className="py-2 pr-4">Analítica web anónima</td>
                                    <td className="py-2">Sesión</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="font-serif text-3xl mb-4 mt-12">3. Base Legal</h2>
                    <p className="text-muted-foreground">
                        La base legal para el uso de cookies técnicas es el interés legítimo del responsable del sitio web (artículo 6.1.f del RGPD). Para las cookies analíticas y de terceros, la base legal es el consentimiento del usuario (artículo 6.1.a del RGPD), obtenido a través del banner de cookies que se muestra en tu primera visita.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">4. ¿Cómo Gestionar las Cookies?</h2>
                    <p className="text-muted-foreground">
                        Puedes configurar tus preferencias de cookies en cualquier momento a través del banner de cookies que aparece en el sitio web. También puedes gestionar las cookies directamente desde tu navegador:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                        <li>
                            <strong className="text-foreground">Chrome:</strong>{" "}
                            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                                Configuración de cookies en Chrome
                            </a>
                        </li>
                        <li>
                            <strong className="text-foreground">Firefox:</strong>{" "}
                            <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                                Configuración de cookies en Firefox
                            </a>
                        </li>
                        <li>
                            <strong className="text-foreground">Safari:</strong>{" "}
                            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                                Configuración de cookies en Safari
                            </a>
                        </li>
                        <li>
                            <strong className="text-foreground">Edge:</strong>{" "}
                            <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                                Configuración de cookies en Edge
                            </a>
                        </li>
                    </ul>
                    <p className="text-muted-foreground">
                        Ten en cuenta que deshabilitar algunas cookies puede afectar a la funcionalidad del sitio web.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">5. Transferencias Internacionales</h2>
                    <p className="text-muted-foreground">
                        Algunos de nuestros proveedores de cookies pueden estar ubicados fuera del Espacio Económico Europeo. En estos casos, garantizamos que existen salvaguardas adecuadas, como cláusulas contractuales tipo aprobadas por la Comisión Europea.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">6. Contacto</h2>
                    <p className="text-muted-foreground">
                        Si tienes dudas sobre nuestra Política de Cookies, puedes contactarnos en{" "}
                        <a href="mailto:misiontuinversion@gmail.com" className="text-primary hover:text-primary/80">
                            misiontuinversion@gmail.com
                        </a>.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">7. Modificaciones</h2>
                    <p className="text-muted-foreground">
                        MTI se reserva el derecho a modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
                    </p>
                </div>
            </section>
        </main>
    )
}
