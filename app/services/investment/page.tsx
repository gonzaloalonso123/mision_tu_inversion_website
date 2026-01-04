import { ParallaxHero } from "@/components/parallax-hero"

export default function InvestmentPage() {
  return (
    <main className="min-h-screen">
      <ParallaxHero
        imageUrl=""
        imageQuery="financial charts investment growth real estate analytics"
        title="Investment Advisory"
        subtitle="Strategic guidance for maximizing real estate returns"
        height="h-[70vh]"
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              {"Comprehensive Investment Advisory"}
            </h2>
            <div className="w-24 h-1 bg-primary mb-8" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {
                "Our investment advisory services provide sophisticated investors with the insights and strategies needed to build and optimize their real estate portfolios. We combine quantitative analysis with qualitative market expertise."
              }
            </p>

            <h3 className="font-serif text-2xl mt-12 mb-4 text-foreground">{"Our Services"}</h3>

            <div className="space-y-8 my-12">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Portfolio Strategy"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Develop customized investment strategies aligned with your financial goals, risk tolerance, and time horizon. We analyze market conditions and identify optimal allocation across different property types and geographic markets."
                  }
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Market Analysis"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Receive detailed market research and forecasting to identify emerging trends and opportunities. Our analysis covers demographic shifts, economic indicators, and supply-demand dynamics."
                  }
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Financial Modeling"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Comprehensive pro forma analysis, cash flow projections, and return calculations. We model various scenarios to help you understand potential outcomes and make informed decisions."
                  }
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-serif text-xl mb-2 text-foreground">{"Risk Assessment"}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Identify and quantify potential risks including market volatility, regulatory changes, and property-specific factors. We develop mitigation strategies to protect your investments."
                  }
                </p>
              </div>
            </div>

            <div className="bg-muted p-8 my-12">
              <h3 className="font-serif text-2xl mb-6 text-foreground">{"Investment Process"}</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-black flex items-center justify-center font-bold">
                    {"1"}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-foreground">{"Discovery & Goal Setting"}</h4>
                    <p className="text-muted-foreground text-sm">
                      {"Understand your objectives, constraints, and preferences"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-black flex items-center justify-center font-bold">
                    {"2"}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-foreground">{"Strategy Development"}</h4>
                    <p className="text-muted-foreground text-sm">
                      {"Create a customized investment plan with specific recommendations"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-black flex items-center justify-center font-bold">
                    {"3"}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-foreground">{"Implementation"}</h4>
                    <p className="text-muted-foreground text-sm">
                      {"Execute the strategy with ongoing guidance and support"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-black flex items-center justify-center font-bold">
                    {"4"}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-foreground">{"Monitoring & Optimization"}</h4>
                    <p className="text-muted-foreground text-sm">
                      {"Regular portfolio reviews and strategy adjustments"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-black font-medium hover:bg-primary/90 transition-colors"
              >
                {"Schedule Strategy Session"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
