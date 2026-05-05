const services = [
  {
    title: "KIDS PARTIES",
    description: "Fun, stylish & unique setups tailored to your theme.",
    icon: PartyIcon,
  },
  {
    title: "BABY SHOWERS & CELEBRATIONS",
    description: "Elegant décor for a beautiful & memorable celebration.",
    icon: BabyIcon,
  },
  {
    title: "EVENT STYLING",
    description: "From intimate gatherings to special occasions, we've got you covered.",
    icon: CameraIcon,
  },
  {
    title: "CUSTOM SETUPS",
    description: "Bespoke designs created just for you and your vision.",
    icon: FlowerIcon,
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="w-full py-20"
      style={{ backgroundColor: "oklch(0.965 0.012 75)" }}
    >
      <div className="w-full px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-3 text-center">
          <h2 className="font-heading text-3xl font-medium uppercase tracking-[0.2em] text-foreground md:text-4xl">
            OUR SERVICES
          </h2>
          <div
            className="flex items-center gap-4 w-full max-w-md justify-center"
            aria-hidden="true"
          >
            <div className="h-px flex-1 bg-foreground/40" />
            <svg viewBox="0 0 24 24" className="size-5 fill-current shrink-0" style={{ color: "oklch(0.72 0.12 75)" }}>
              <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <div className="h-px flex-1 bg-foreground/40" />
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-0 border border-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 border-border bg-card p-8 transition-shadow hover:shadow-md"
              style={{
                borderRight: index < services.length - 1 ? "1px solid oklch(0.88 0.015 75)" : undefined,
              }}
            >
              <div
                className="flex size-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "oklch(0.51 0.04 142 / 0.1)", color: "oklch(0.51 0.04 142)" }}
                aria-hidden="true"
              >
                <service.icon />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold tracking-widest text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
              <div className="mt-auto">
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-xs font-semibold tracking-wider transition-opacity hover:opacity-70"
                  style={{ color: "oklch(0.72 0.12 75)" }}
                >
                  VIEW MORE
                  <svg viewBox="0 0 20 20" className="size-3.5 fill-current" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PartyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.727 12.727l.707.707M1 12h1m20 0h1M4.22 19.78l.707-.707M18.657 5.343l.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z"
      />
    </svg>
  )
}

function BabyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6M9 15.5c.667.667 3.333.667 4 0"
      />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
      />
    </svg>
  )
}

function FlowerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12c0-2.761 2.239-5 5-5s5 2.239 5 5-2.239 5-5 5M12 12c0-2.761-2.239-5-5-5S2 9.239 2 12s2.239 5 5 5M12 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5M12 12c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5"
      />
    </svg>
  )
}
