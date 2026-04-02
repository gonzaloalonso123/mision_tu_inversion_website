import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Política de Privacidad - MTI Estrategia Inmobiliaria",
    description: "Política de privacidad y protección de datos de MTI Estrategia Inmobiliaria",
}

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen pt-20">
            <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Política de Privacidad</h1>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6" />
                    <p className="text-white/80 text-lg">Última actualización: 2 de abril de 2026</p>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
                    <h2 className="font-serif text-3xl mb-4">1. Responsable del Tratamiento</h2>
                    <ul className="text-muted-foreground space-y-1">
                        <li><strong className="text-foreground">Denominación:</strong> MTI Estrategias Inmobiliarias</li>
                        <li><strong className="text-foreground">Email:</strong> misiontuinversion@gmail.com</li>
                        <li><strong className="text-foreground">Teléfono:</strong> +34 620 56 86 24</li>
                    </ul>

                    <h2 className="font-serif text-3xl mb-4 mt-12">2. Finalidad del Tratamiento</h2>
                    <p className="text-muted-foreground">
                        En MTI tratamos los datos personales que nos facilitas con las siguientes finalidades:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                        <li>Gestionar las consultas y solicitudes de información realizadas a través del formulario de contacto.</li>
                        <li>Prestar los servicios de asesoría inmobiliaria, financiera e inversión solicitados.</li>
                        <li>Enviar comunicaciones comerciales sobre nuestros servicios, siempre que hayas dado tu consentimiento expreso.</li>
                        <li>Cumplir con las obligaciones legales aplicables.</li>
                    </ul>

                    <h2 className="font-serif text-3xl mb-4 mt-12">3. Legitimación</h2>
                    <p className="text-muted-foreground">
                        La base legal para el tratamiento de tus datos es:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                        <li><strong className="text-foreground">Consentimiento del interesado:</strong> al enviar el formulario de contacto o solicitar nuestros servicios.</li>
                        <li><strong className="text-foreground">Ejecución de un contrato:</strong> cuando el tratamiento sea necesario para la prestación de los servicios contratados.</li>
                        <li><strong className="text-foreground">Interés legítimo:</strong> para el mantenimiento de la relación comercial y la mejora de nuestros servicios.</li>
                        <li><strong className="text-foreground">Obligación legal:</strong> en cumplimiento de normativa fiscal, mercantil o de prevención de blanqueo de capitales.</li>
                    </ul>

                    <h2 className="font-serif text-3xl mb-4 mt-12">4. Datos Recopilados</h2>
                    <p className="text-muted-foreground">
                        Los datos personales que podemos recopilar incluyen:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                        <li>Nombre y apellidos</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Número de teléfono</li>
                        <li>Mensaje o consulta</li>
                        <li>Datos de navegación (cookies y tecnologías similares, ver nuestra <a href="/legal/cookies" className="text-primary hover:text-primary/80">Política de Cookies</a>)</li>
                    </ul>

                    <h2 className="font-serif text-3xl mb-4 mt-12">5. Destinatarios</h2>
                    <p className="text-muted-foreground">
                        Tus datos personales no serán cedidos a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio contratado. En particular:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                        <li><strong className="text-foreground">Vercel Inc.:</strong> proveedor de alojamiento web (servidores ubicados en la UE/EE.UU., con cláusulas contractuales tipo aprobadas por la Comisión Europea).</li>
                        <li><strong className="text-foreground">Google LLC:</strong> servicio de correo electrónico para gestión de comunicaciones.</li>
                    </ul>

                    <h2 className="font-serif text-3xl mb-4 mt-12">6. Conservación de Datos</h2>
                    <p className="text-muted-foreground">
                        Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar. En particular:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                        <li>Datos de contacto: mientras exista relación comercial y, una vez finalizada, durante los plazos legales de prescripción.</li>
                        <li>Datos fiscales y contables: 6 años conforme al Código de Comercio.</li>
                    </ul>

                    <h2 className="font-serif text-3xl mb-4 mt-12">7. Derechos del Interesado</h2>
                    <p className="text-muted-foreground">
                        De conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPD-GDD), puedes ejercer los siguientes derechos:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                        <li><strong className="text-foreground">Acceso:</strong> conocer qué datos personales tratamos sobre ti.</li>
                        <li><strong className="text-foreground">Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
                        <li><strong className="text-foreground">Supresión:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
                        <li><strong className="text-foreground">Oposición:</strong> oponerte al tratamiento de tus datos en determinadas circunstancias.</li>
                        <li><strong className="text-foreground">Limitación:</strong> solicitar la limitación del tratamiento en determinados supuestos.</li>
                        <li><strong className="text-foreground">Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.</li>
                    </ul>
                    <p className="text-muted-foreground">
                        Para ejercer estos derechos, contacta con nosotros en{" "}
                        <a href="mailto:misiontuinversion@gmail.com" className="text-primary hover:text-primary/80">
                            misiontuinversion@gmail.com
                        </a>
                        , indicando tu identidad y el derecho que deseas ejercer.
                    </p>
                    <p className="text-muted-foreground">
                        Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (
                        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                            www.aepd.es
                        </a>
                        ) si consideras que el tratamiento no se ajusta a la normativa vigente.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">8. Seguridad</h2>
                    <p className="text-muted-foreground">
                        MTI adopta las medidas técnicas y organizativas necesarias para proteger los datos personales frente a su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos y los riesgos a los que están expuestos.
                    </p>

                    <h2 className="font-serif text-3xl mb-4 mt-12">9. Modificaciones</h2>
                    <p className="text-muted-foreground">
                        MTI se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. En caso de cambios significativos, se informará a los usuarios a través de esta página web.
                    </p>
                </div>
            </section>
        </main>
    )
}
