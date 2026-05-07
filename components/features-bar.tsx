const features = [
  {
    title: "ELEGANT DESIGNS",
    description: "Modern & timeless setups for every occasion",
    icon: HeartIcon,
  },
  {
    title: "PREMIUM QUALITY",
    description: "High quality balloons & attention to detail",
    icon: LeafIcon,
  },
  {
    title: "TAILORED JUST FOR YOU",
    description: "Custom colours & designs to match your vision",
    icon: BalloonIcon,
  },
  {
    title: "MEMORIES THAT LAST",
    description: "We create moments you'll never forget",
    icon: SparkleIcon,
  },
]

export function FeaturesBar() {
  return (
    <section
      className="border-y border-border bg-card px-5 py-5 sm:px-8 md:py-8 lg:px-10"
      aria-label="Our features"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-4 lg:gap-y-0">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="flex items-start gap-3 lg:items-center lg:gap-5 lg:border-r lg:border-border/90 lg:px-10 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
            >
              <div
                className="shrink-0 text-primary"
                aria-hidden="true"
              >
                <feature.icon />
              </div>
              <div>
                <h3 className="font-heading text-[0.7rem] leading-tight font-semibold tracking-[0.08em] text-foreground uppercase md:text-xs md:tracking-[0.16em]">
                  {feature.title}
                </h3>
                <p className="mt-1.5 max-w-[9rem] text-[0.72rem] leading-snug text-muted-foreground md:mt-2 md:max-w-[14rem] md:text-sm md:leading-relaxed">
                  {feature.description}
                </p>
              </div>
              {index % 2 === 0 && (
                <div className="ml-auto hidden h-16 w-px bg-border sm:block lg:hidden" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-8 md:size-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 41S7 31.4 7 17.6C7 11.5 11.8 7 17.6 7c3.4 0 6.1 1.5 7.7 4.1C26.9 8.5 29.6 7 33 7c5.8 0 10 4.5 10 10.6C43 31.4 24 41 24 41Z" />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-8 md:size-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 34c16.5 1.2 25.5-9.8 25-27-13.4 2-23.4 8.8-25 27Z" />
      <path d="M12 34 34 12" />
      <path d="M22.5 23.5h-8" />
      <path d="M28.5 17.5v-8" />
      <path d="M20 36c-3 2-6.7 3-10 3" />
    </svg>
  )
}

function BalloonIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-8 md:size-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="18" cy="19" rx="7" ry="11" />
      <ellipse cx="30" cy="19" rx="7" ry="11" />
      <path d="M18 30v3l-3 4" />
      <path d="M30 30v3l3 4" />
      <path d="M24 29v10" />
      <path d="M18 37c2.2-1.5 4.2-1.5 6 0 1.8-1.5 3.8-1.5 6 0" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-8 md:size-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 5c2.4 9.2 7.8 14.6 17 17-9.2 2.4-14.6 7.8-17 17-2.4-9.2-7.8-14.6-17-17 9.2-2.4 14.6-7.8 17-17Z" />
    </svg>
  )
}
