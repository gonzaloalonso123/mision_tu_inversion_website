import Link from "next/link"

const quickLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Por qué MTI", href: "/#porque" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Cómo trabajamos", href: "/#metodo" },
  { label: "A quién ayudamos", href: "/#ayudamos" },
]

const serviceLinks = [
  "Personal Shopper Inmobiliario",
  "Rent to Rent",
  "Compra - Reforma - Venta",
  "Asesoría Internacional",
  "Asesoría Financiera",
  "Obtención de Hipotecas",
]

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">MTI Estrategias Inmobiliarias</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {"Transformamos la duda en estrategia y acompañamos cada inversión con un plan claro y seguro."}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-primary">{"Secciones"}</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-primary">{"Servicios"}</h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((service) => (
                <li key={service} className="text-white/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-primary">{"Contacto"}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="mailto:misiontuinversion@gmail.com" className="hover:text-primary transition-colors">
                  misiontuinversion@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+34638142619" className="hover:text-primary transition-colors">
                  +34 638 14 26 19
                </a>
              </li>
              <li>Calle Saturno 12</li>
              <li>Tres Cantos, Madrid</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>{"© 2026 MTI. Todos los derechos reservados."}</p>
        </div>
      </div>
    </footer>
  )
}
