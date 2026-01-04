import { ParallaxHero } from "@/components/parallax-hero"

export default function AcquisitionPage() {
  return (
    <main className="min-h-screen">
      <ParallaxHero
        imageUrl=""
        imageQuery="luxury property real estate modern architecture"
        title="Property Acquisition"
        subtitle="Strategic property sourcing for sophisticated investors"
        height="h-[70vh]"
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              {"Expert Property Acquisition Services"}
            </h2>
            <div className="w-24 h-1 bg-primary mb-8" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Our property acquisition service combines deep market knowledge with strategic analysis to identify and secure premium real estate opportunities. We work closely with each client to understand their investment objectives and risk tolerance."
              }
            </p>

            <h3 className="font-serif text-2xl mt-12 mb-4 text-foreground">{"Our Approach"}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-card border border-border p-6">
                <div className="text-primary mb-3">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Market Research"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {"Comprehensive analysis of market trends, property values, and emerging opportunities."}
                </p>
              </div>

              <div className="bg-card border border-border p-6">
                <div className="text-primary mb-3">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Due Diligence"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {"Thorough property inspections, legal review, and financial analysis before acquisition."}
                </p>
              </div>

              <div className="bg-card border border-border p-6">
                <div className="text-primary mb-3">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Negotiation"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {"Expert negotiation to secure favorable terms and optimal pricing for your investment."}
                </p>
              </div>

              <div className="bg-card border border-border p-6">
                <div className="text-primary mb-3">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Transaction Management"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {"Seamless coordination of all closing processes, ensuring a smooth acquisition."}
                </p>
              </div>
            </div>

            <div className="bg-black text-white p-8 mt-12">
              <h3 className="font-serif text-2xl mb-4">{"Why Choose Our Acquisition Services?"}</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">{"•"}</span>
                  <span>{"Access to exclusive off-market properties and pre-market opportunities"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">{"•"}</span>
                  <span>
                    {"Network of trusted industry professionals including inspectors, attorneys, and lenders"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">{"•"}</span>
                  <span>{"Data-driven market insights and proprietary analysis tools"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">{"•"}</span>
                  <span>{"Personalized service tailored to your specific investment criteria"}</span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-16">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-black font-medium hover:bg-primary/90 transition-colors"
              >
                {"Start Your Property Search"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
