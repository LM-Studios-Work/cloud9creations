import type { LucideIcon } from "lucide-react"
import { BadgeCheck, Gem, HeartHandshake, Palette } from "lucide-react"

const features = [
  {
    title: "ELEGANT DESIGNS",
    description: "Balanced palettes, clean shapes, and modern event styling.",
    icon: Palette,
  },
  {
    title: "PREMIUM QUALITY",
    description: "Carefully sourced balloons with a polished installation finish.",
    icon: BadgeCheck,
  },
  {
    title: "TAILORED JUST FOR YOU",
    description: "Custom colour stories and layouts planned around your venue.",
    icon: Gem,
  },
  {
    title: "MEMORIES THAT LAST",
    description: "Photo-ready moments designed to feel personal, not templated.",
    icon: HeartHandshake,
  },
] satisfies {
  title: string
  description: string
  icon: LucideIcon
}[]

export function FeaturesBar() {
  return (
    <section
      className="border-y border-border bg-background px-5 py-8 sm:px-8 lg:px-10"
      aria-label="Our features"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className="group relative overflow-hidden border border-border bg-card px-5 py-6 transition-colors hover:border-primary/35 sm:px-6"
              >
                <div
                  className="absolute right-5 top-5 font-heading text-5xl leading-none text-foreground/[0.035]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative flex items-start gap-4">
                  <div
                    className="flex size-11 shrink-0 items-center justify-center border border-primary/25 bg-primary/[0.06] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    aria-hidden="true"
                  >
                    <Icon className="size-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-heading text-[0.72rem] font-semibold tracking-[0.22em] text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
