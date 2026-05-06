import type { LucideIcon } from "lucide-react"
import {
  Baby,
  Balloon,
  CakeSlice,
  Camera,
  Sparkles,
  SwatchBook,
  WandSparkles,
} from "lucide-react"

const services = [
  {
    title: "ELEGANT DESIGNS",
    description: "Balanced palettes, clean shapes, and modern event styling.",
    icon: CakeSlice,
  },
  {
    title: "PREMIUM QUALITY",
    description: "Carefully sourced balloons with a polished installation finish.",
    icon: Baby,
  },
  {
    title: "TAILORED JUST FOR YOU",
    description: "Custom colour stories and layouts planned around your venue.",
    icon: Camera,
  },
  {
    title: "MEMORIES THAT LAST",
    description: "Photo-ready moments designed to feel personal, not templated.",
    icon: WandSparkles,
  },
] satisfies {
  title: string
  description: string
  icon: LucideIcon
}[]

export function Services() {
  return (
    <section
      id="services"
      className="w-full border-y border-border px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      style={{ backgroundColor: "oklch(0.965 0.012 75)" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 text-center lg:mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "oklch(0.72 0.12 75)" }}
          >
            Our Services
          </p>
          <h2 className="mt-3 font-heading text-3xl font-medium uppercase leading-tight tracking-[0.16em] text-foreground md:text-5xl">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4 border-l border-r border-border">
          {services.map((service, index) => {
            const Icon = service.icon
            const isLastCol = (index + 1) % 4 === 0

            return (
              <article
                key={service.title}
                className={`flex flex-col items-center gap-5 px-6 py-10 text-center ${
                  !isLastCol ? "border-r border-border" : ""
                } ${index >= 2 ? "" : "border-b border-border lg:border-b-0"}`}
              >
                <Icon 
                  className="size-8 text-foreground" 
                  strokeWidth={1.3}
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    {service.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-5 grid gap-4 border border-border bg-card p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6">
          <div
            className="flex size-11 items-center justify-center bg-secondary text-primary"
            aria-hidden="true"
          >
            <SwatchBook className="size-5" strokeWidth={1.7} />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Have a specific colour palette, venue corner, or theme in mind?
            We&apos;ll shape the setup around the details you already love.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Start a brief
            <Balloon className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
