import { ParallaxHero } from "@/components/parallax-hero"

export default function ManagementPage() {
  return (
    <main className="min-h-screen">
      <ParallaxHero
        imageUrl=""
        imageQuery="luxury property maintenance professional building management"
        title="Property Management"
        subtitle="Comprehensive care for your real estate investments"
        height="h-[70vh]"
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              {"Professional Property Management"}
            </h2>
            <div className="w-24 h-1 bg-primary mb-8" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Our property management services ensure your investments are maintained to the highest standards while maximizing their financial performance. We handle all aspects of property operations so you can focus on growing your portfolio."
              }
            </p>

            <h3 className="font-serif text-2xl mt-12 mb-4 text-foreground">{"Core Services"}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="bg-card border border-border p-6">
                <div className="text-primary mb-3">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Tenant Relations"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {"Screening, placement, and ongoing communication with tenants to ensure satisfaction and retention."}
                </p>
              </div>

              <div className="bg-card border border-border p-6">
                <div className="text-primary mb-3">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Maintenance & Repairs"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {"Preventive maintenance programs and rapid response to repair needs with vetted contractors."}
                </p>
              </div>

              <div className="bg-card border border-border p-6">
                <div className="text-primary mb-3">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Financial Management"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {"Rent collection, expense tracking, and detailed financial reporting for tax purposes."}
                </p>
              </div>

              <div className="bg-card border border-border p-6">
                <div className="text-primary mb-3">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Legal Compliance"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {"Ensuring adherence to all local, state, and federal regulations governing rental properties."}
                </p>
              </div>
            </div>

            <div className="bg-black text-white p-8 my-12">
              <h3 className="font-serif text-2xl mb-4">{"Management Benefits"}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="text-4xl font-serif text-primary mb-2">{"24/7"}</div>
                  <p className="text-sm text-white/80">{"Emergency Response"}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif text-primary mb-2">{"98%"}</div>
                  <p className="text-sm text-white/80">{"Average Occupancy Rate"}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif text-primary mb-2">{"15+"}</div>
                  <p className="text-sm text-white/80">{"Years Experience"}</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {
                "Our hands-on approach combines technology-driven efficiency with personalized service. We use advanced property management software to provide real-time updates and transparent communication, while our experienced team ensures every property receives the attention it deserves."
              }
            </p>

            <div className="text-center mt-16">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-black font-medium hover:bg-primary/90 transition-colors"
              >
                {"Discuss Management Solutions"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
