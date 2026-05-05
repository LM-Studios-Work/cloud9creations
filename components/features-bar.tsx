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
    icon: RingIcon,
  },
  {
    title: "MEMORIES THAT LAST",
    description: "We create moments you'll never forget",
    icon: SparkleIcon,
  },
]

export function FeaturesBar() {
  return (
    <section className="border-y border-border bg-card" aria-label="Our features">
      <div className="w-full">
        <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 px-6 py-8"
            >
              <div
                className="mt-0.5 shrink-0"
                style={{ color: "oklch(0.51 0.04 142)" }}
                aria-hidden="true"
              >
                <feature.icon />
              </div>
              <div>
                <h3 className="font-heading text-xs font-semibold tracking-widest text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c0 0-7 4-7 11a7 7 0 0014 0C19 7 12 3 12 3zm0 0v18"
      />
    </svg>
  )
}

function RingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  )
}
