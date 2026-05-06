import type { LucideIcon } from "lucide-react"
import {
  Baby,
  Balloon,
  CakeSlice,
  Camera,
  SwatchBook,
  WandSparkles,
} from "lucide-react"

const services = [
  {
    title: "KIDS PARTIES",
    description: "Fun, stylish & unique setups tailored to your theme.",
    icon: CakeSlice,
  },
  {
    title: "BABY SHOWERS & CELEBRATIONS",
    description: "Elegant decor for a beautiful & memorable celebration.",
    icon: Baby,
  },
  {
    title: "EVENT STYLING",
    description: "From intimate gatherings to special occasions, we've got you covered.",
    icon: Camera,
  },
  {
    title: "CUSTOM SETUPS",
    description: "Bespoke designs created just for you and your vision.",
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
      className="w-full px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      style={{ backgroundColor: "oklch(0.965 0.012 75)" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "oklch(0.72 0.12 75)" }}
          >
            Services
          </p>
          <h2 className="mt-2 font-heading text-3xl font-medium uppercase leading-tight tracking-[0.16em] text-foreground md:text-4xl">
            Our Services
          </h2>
          <div className="mt-4 flex justify-center">
            <Balloon className="size-4" style={{ color: "oklch(0.72 0.12 75)" }} aria-hidden="true" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article key={service.title} className="flex gap-4">
                <Icon 
                  className="size-6 flex-shrink-0 text-foreground/60" 
                  strokeWidth={1.3}
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.20em] text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-foreground/70">
                    {service.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
        </div>

        <div className="mt-10 border-t border-border pt-10">
          <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
            <div
              className="flex size-11 items-center justify-center"
              style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
              aria-hidden="true"
            >
              <SwatchBook className="size-5 text-white" strokeWidth={1.7} />
            </div>
            <p className="text-sm leading-relaxed text-foreground/70">
              Have a specific colour palette, venue corner, or theme in mind? We&apos;ll shape the setup around the details you already love.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
              style={{ borderColor: "oklch(0.72 0.12 75)", color: "oklch(0.72 0.12 75)" }}
            >
              Start a brief
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
