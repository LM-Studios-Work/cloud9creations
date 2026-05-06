import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
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
    title: "KIDS PARTIES",
    description: "Fun, stylish & unique setups tailored to your theme.",
    detail: "Playful palettes, dessert-table moments, and themed balloon pieces.",
    icon: CakeSlice,
  },
  {
    title: "BABY SHOWERS & CELEBRATIONS",
    description: "Elegant decor for a beautiful & memorable celebration.",
    detail: "Soft colour stories, welcome areas, and considered photo corners.",
    icon: Baby,
  },
  {
    title: "EVENT STYLING",
    description:
      "From intimate gatherings to special occasions, we've got you covered.",
    detail: "Statement backdrops, tablescape accents, and cohesive venue styling.",
    icon: Camera,
  },
  {
    title: "CUSTOM SETUPS",
    description: "Bespoke designs created just for you and your vision.",
    detail: "One-off installations shaped around your brief, space, and colours.",
    icon: WandSparkles,
  },
] satisfies {
  title: string
  description: string
  detail: string
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
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end lg:mb-14">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Services
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium uppercase leading-tight tracking-[0.16em] text-foreground md:text-5xl">
              Thoughtful setups for every kind of celebration
            </h2>
          </div>
          <div className="max-w-2xl md:justify-self-end">
            <div className="mb-5 flex items-center gap-3" aria-hidden="true">
              <div className="h-px flex-1 bg-foreground/25" />
              <div className="flex size-9 items-center justify-center border border-accent/40 bg-card text-accent">
                <Sparkles className="size-4" strokeWidth={1.8} />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              From children&apos;s parties to refined milestone events, each
              setup is planned with colour, proportion, and photo moments in
              mind.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group flex min-h-[21rem] flex-col border border-border bg-card p-6 transition-colors hover:border-primary/35 sm:p-7"
              >
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div
                    className="flex size-13 items-center justify-center border border-primary/25 bg-primary/[0.07] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    aria-hidden="true"
                  >
                    <Icon className="size-6" strokeWidth={1.7} />
                  </div>
                  <span className="font-heading text-4xl leading-none text-foreground/[0.08]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {service.description}
                </p>
                <p className="mt-4 border-l border-accent/50 pl-4 text-xs leading-relaxed text-muted-foreground">
                  {service.detail}
                </p>

                <a
                  href="#contact"
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:text-primary"
                >
                  Enquire
                  <ArrowRight
                    className="size-4"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
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
