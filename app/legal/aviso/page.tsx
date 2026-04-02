import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Aviso Legal - MTI Estrategia Inmobiliaria",
    description: "Aviso legal y condiciones de uso de MTI Estrategia Inmobiliaria",
}

export default function AvisoLegalPage() {
    return (
        <main className="min-h-screen pt-20">
            <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Aviso Legal</h1>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6" />
                    <p className="text-white/80 text-lg">Última actualización: 2 de abril de 2026</p>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
                    <h2 className="font-serif text-3xl mb-4">1. Datos Identificativos</h2>
                    <p className="text-muted-foreground">
                        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa al usuario de los siguientes datos:
                    </p>
                    <ul className="text-muted-foreground space-y-1">
                        <li><strong className="text-foreground">Denominación:</strong> MTI Estrategias Inmobiliarias</li>
                        <li><strong className="text-foreground">Actividad:</strong> Asesoría e inversión inmobiliaria</li>
                        <li><strong className="text-foreground">Email:</strong> misiontuinversion@gmail.com</li>
                        <li><strong className="text-foreground">Teléfono:</strong> +34 620 56 86 24</li>
                    </ul>

                    <h2 className="font-serif text-3xl mb-4 mt-12">2. Objeto</h2>
                    <p className="text-muted-foreground">
                        El presente Aviso Legal regula el uso del sitio web de MTI Estrategias Inmobiliarias. El acceso y la navegación en este sitio web atribuyen la condición de usuario, lo que implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">3. Condiciones de Uso</h2>
                    <p className="text-muted-foreground">
                        El usuario se compromete a utilizar el sitio web de forma diligente, correcta y lícita y, en particular, se compromete a abstenerse de:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                        <li>Utilizar el sitio web de forma contraria a la ley, la moral, las buenas costumbres o el orden público.</li>
                        <li>Reproducir, copiar, distribuir, transformar o modificar los contenidos del sitio web sin la autorización previa y por escrito de MTI.</li>
                        <li>Suprimir, eludir o manipular los derechos de propiedad intelectual e industrial y demás datos identificativos de los derechos de MTI.</li>
                        <li>Emplear los contenidos y, en particular, la información obtenida a través del sitio web para remitir publicidad, enviar mensajes con fines de venta o cualquier otro fin comercial no autorizado.</li>
                    </ul>

                    <h2 className="font-serif text-3xl mb-4 mt-12">4. Propiedad Intelectual e Industrial</h2>
                    <p className="text-muted-foreground">
                        Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de MTI o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación.
                    </p>
                    <p className="text-muted-foreground">
                        Las marcas, nombres comerciales y signos distintivos son propiedad de MTI, quedando prohibida su reproducción, imitación, utilización o inserción sin la debida autorización.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">5. Exclusión de Responsabilidad</h2>
                    <p className="text-muted-foreground">
                        MTI no se hace responsable de:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                        <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento del sitio web o de sus servicios y contenidos.</li>
                        <li>La falta de utilidad, adecuación o validez del sitio web o de sus servicios y contenidos para satisfacer necesidades, actividades o resultados concretos del usuario.</li>
                        <li>La existencia de virus, programas maliciosos o lesivos en los contenidos.</li>
                        <li>El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal que los usuarios hagan del sitio web.</li>
                        <li>La falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos.</li>
                    </ul>
                    <p className="text-muted-foreground">
                        La información publicada en este sitio web tiene carácter meramente orientativo e informativo y no constituye en ningún caso asesoramiento profesional vinculante. Las decisiones de inversión deben tomarse siempre con el acompañamiento de un profesional cualificado.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">6. Enlaces a Terceros</h2>
                    <p className="text-muted-foreground">
                        El sitio web puede contener enlaces a páginas de terceros. MTI no asume ninguna responsabilidad por el contenido, información o servicios que pudieran aparecer en dichos sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican relación alguna entre MTI y las personas o entidades titulares de tales contenidos.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">7. Protección de Datos</h2>
                    <p className="text-muted-foreground">
                        En relación con el tratamiento de datos personales, MTI se compromete a cumplir con la normativa vigente en materia de protección de datos. Para más información, consulta nuestra{" "}
                        <a href="/legal/privacidad" className="text-primary hover:text-primary/80">
                            Política de Privacidad
                        </a>.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">8. Legislación Aplicable y Jurisdicción</h2>
                    <p className="text-muted-foreground">
                        Las relaciones entre MTI y el usuario se regirán por la legislación española. Para la resolución de cualquier controversia, las partes se someterán a los Juzgados y Tribunales del domicilio del usuario, conforme a la legislación vigente.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">9. Modificaciones</h2>
                    <p className="text-muted-foreground">
                        MTI se reserva el derecho a modificar el presente Aviso Legal en cualquier momento, siendo vigentes las que se encuentren publicadas en el momento de la navegación por el sitio web.
                    </p>
                </div>
            </section>
        </main>
    )
}
