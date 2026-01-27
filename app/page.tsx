import { ParallaxHero } from "@/components/parallax-hero"
import { ServiceCard } from "@/components/service-card"
import OperatingInTheWorld, { OperatingRegions } from "@/components/operating-regions"

const services = [
  {
    title: "Personal Shopper Inmobiliario (PSI)",
    description:
      "Un profesional trabaja solo para ti: busca, analiza y negocia propiedades que se ajustan a tus gustos, necesidades y objetivo de rentabilidad, acompañándote desde la selección hasta el cierre.",
    href: "/contact",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3M5 11h14M5 19h14m-9-8v8m4-8v8"
        />
      </svg>
    )
  },
  {
    title: "Rent to Rent",
    description:
      "Alquilamos tu propiedad, gestionamos cada detalle y maximizamos la rentabilidad para que recibas ingresos estables sin preocuparte por inquilinos, mantenimiento o imprevistos.",
    href: "/contact",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13v6l9 4 9-4v-6" />
      </svg>
    )
  },
  {
    title: "Compra - Reforma - Venta",
    description:
      "Detectamos activos con alto potencial, planificamos reformas que elevan su valor y ejecutamos una venta estratégica para transformar tu inversión en resultados controlados y rentables.",
    href: "/contact",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    )
  },
  {
    title: "Asesoría Internacional Inmobiliaria",
    description:
      "Diversifica en República Dominicana, Paraguay, España o Marruecos con un acompañamiento integral que identifica oportunidades antes de que el mercado se sature.",
    href: "/contact",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3a9 9 0 100 18 9 9 0 000-18z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.05 11h19.9M12 2.05v19.9" />
      </svg>
    )
  },
  {
    title: "Asesoría Financiera",
    description:
      "Construimos un plan sólido que prioriza tus necesidades para incrementar tu patrimonio y disparar la rentabilidad anual sin riesgos innecesarios.",
    href: "/contact",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 17l6-6 4 4 8-8"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 7h7v7" />
      </svg>
    )
  },
  {
    title: "Obtención de Hipotecas",
    description:
      "Analizamos tu perfil, negociamos con entidades y estructuramos la operación para aportar el mínimo capital posible logrando mejores condiciones y compras accesibles.",
    href: "/contact",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3l9 6v12H3V9l9-6z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
      </svg>
    )
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="inicio">
        <ParallaxHero imageUrl="/hero-image.png" imageQuery="luxury modern house exterior architecture" title="MTI">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-balance">
                Tomar acción no es una opción, es una obligación.
              </h1>
              <p className="text-lg md:text-xl text-white/85 text-balance">
                Nos adaptamos a ti para hacer crecer tu patrimonio de forma segura.
              </p>
              <p className="text-lg md:text-xl text-white/85 text-balance">
                Te ayudamos a crear un plan paso a paso y 100% acompañado para obtener rentabilidad de tu inversión.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#f9e280] text-[#1a1a1a] font-bold text-lg hover:bg-[#f9e280]/90 hover:shadow-[0_0_30px_rgba(249,226,128,0.7)] hover:scale-105 transition-all duration-300"
              >
                Agenda una cita
              </a>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/80">
                <a href="mailto:misiontuinversion@gmail.com" className="hover:text-white transition-colors">
                  misiontuinversion@gmail.com
                </a>
              </div>
            </div>
          </div>
        </ParallaxHero>
      </section>

      <section id="porque" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-balance">Por qué nace la marca</h2>
          <div className="w-24 h-1 bg-primary mx-auto shadow-[0_0_10px_rgba(249,226,128,0.6)]" />
          <p className="text-lg text-muted-foreground text-balance">
            MTI nace como solución a un problema cada vez más común: la inseguridad de invertir sin claridad.
          </p>
          <p className="text-lg text-muted-foreground text-balance">
            La inseguridad de no saber si estás colocando tu dinero en el lugar correcto, de pagar de más por un inmueble, de asumir riesgos innecesarios o de ver cómo tu patrimonio e ingresos se estancan en lugar de crecer.
          </p>
          <p className="text-lg text-muted-foreground text-balance">
            MTI transforma la duda en estrategia y la incertidumbre en decisiones sólidas.
          </p>
        </div>
      </section>

      <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Servicios MTI</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 shadow-[0_0_10px_rgba(249,226,128,0.6)]" />
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-balance">
              Soluciones integrales para proteger tu capital, multiplicar la rentabilidad y delegar con confianza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="operamos" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Presencia Internacional</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 shadow-[0_0_10px_rgba(249,226,128,0.6)]" />
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-balance">
              Presencia activa en mercados que ofrecen estabilidad, rentabilidad y oportunidades antes de que se saturen.
            </p>
          </div>

          <OperatingInTheWorld />
          <p className="text-muted-foreground text-center text-lg max-w-3xl mx-auto text-balance">
            ¿Quieres saber si operamos en tu país? <a href="#cta" className="text-primary underline hover:text-primary/80 transition-colors">Contáctanos</a>.
          </p>
        </div>
      </section>

      <section id="metodo" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Cómo trabajamos</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 shadow-[0_0_10px_rgba(249,226,128,0.6)]" />
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-balance">
              Trabajamos con un número reducido de clientes para garantizar un servicio exclusivo, rápido y totalmente transparente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Tú nos contactas, agendamos una cita y activamos el plan.", "Diagnóstico detallado y plan a medida para transformar tu idea en una oportunidad.", "Ejecución acompañada de principio a fin para convertir la preocupación en solución."].map(
              (step, index) => (
                <div
                  key={step}
                  className="bg-card border border-border rounded-lg p-8 shadow-sm hover:border-primary/60 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center font-bold mb-6">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="ayudamos" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">A quién ayudamos</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-10 shadow-[0_0_10px_rgba(249,226,128,0.6)]" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-muted-foreground">
            {["Futuros inversores que quieren empezar en el sector inmobiliario con seguridad.", "Inversores con capital pero sin una estrategia sólida.", "Personas con poco tiempo que desean delegar con garantías.", "Inversores experimentados que buscan socios para proyectos en común."].map(
              (item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl text-balance">
            MTI transforma tu idea en oportunidad y tu preocupación en solución.
          </h2>
          <p className="text-white/80 text-lg text-balance">
            Agenda una cita y comencemos a diseñar la estrategia que hará crecer tu patrimonio con seguridad.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-[#f9e280] text-[#1a1a1a] font-bold text-lg hover:bg-[#f9e280]/90 hover:shadow-[0_0_30px_rgba(249,226,128,0.7)] hover:scale-105 transition-all duration-300"
          >
            Agenda una cita ahora
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-white/70">
            <a href="mailto:misiontuinversion@gmail.com" className="hover:text-white transition-colors">
              misiontuinversion@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}