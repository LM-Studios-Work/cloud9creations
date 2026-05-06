import Link from "next/link"

const services = [
  {
    title: "KIDS PARTIES",
    description: "Fun, stylish & unique setups tailored to your theme.",
    icon: PartyHatIcon,
  },
  {
    title: "BABY SHOWERS & CELEBRATIONS",
    description: "Elegant decor for a beautiful & memorable celebration.",
    icon: OnesieIcon,
  },
  {
    title: "EVENT STYLING",
    description:
      "From intimate gatherings to special occasions, we've got you covered.",
    icon: CameraIcon,
  },
  {
    title: "CUSTOM SETUPS",
    description: "Bespoke designs created just for you and your vision.",
    icon: BalloonClusterIcon,
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="w-full px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      style={{ backgroundColor: "oklch(0.965 0.012 75)" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-heading text-2xl font-medium tracking-[0.12em] text-foreground uppercase md:text-3xl">
            OUR SERVICES
          </h2>
          <div
            className="mx-auto mt-1 flex w-8 justify-center text-accent"
            aria-hidden="true"
          >
            <HeartDividerIcon />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid min-h-40 grid-cols-[5.5rem_1fr] gap-5 bg-card px-5 py-6 shadow-[0_10px_35px_oklch(0.22_0.01_60_/_0.04)]"
            >
              <div
                className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground"
                aria-hidden="true"
              >
                <service.icon />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading text-sm leading-snug font-semibold tracking-[0.11em] text-foreground uppercase">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-auto inline-flex w-fit items-center gap-1.5 pt-3 text-xs font-semibold tracking-[0.12em] text-accent uppercase transition-colors hover:text-primary"
                >
                  View more
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeartDividerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M12 20.2c-.35-.22-.84-.55-1.47-.99a28.75 28.75 0 0 1-3.14-2.55C5.25 14.64 3 11.98 3 8.8 3 6.42 4.95 4.5 7.35 4.5c1.88 0 3.34 1.03 4.1 2.35.1.17.28.27.47.27s.37-.1.47-.27c.76-1.32 2.22-2.35 4.1-2.35C18.96 4.5 21 6.42 21 8.8c0 3.18-2.25 5.84-4.39 7.86a28.75 28.75 0 0 1-3.14 2.55c-.63.44-1.12.77-1.47.99Z" />
    </svg>
  )
}

function PartyHatIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 39 23 9l14 30H15Z" />
      <path d="M19 25h11" />
      <path d="M17 32h16" />
      <path d="M23 9c2.8 4.8 5 9.8 6.5 15" />
      <path d="M18 17h8" />
      <path d="M20 8 16 4" />
      <path d="M26 7 29 3" />
      <path d="M31 12 36 9" />
    </svg>
  )
}

function OnesieIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8c1.1 3.2 3.1 4.8 6 4.8S28.9 11.2 30 8l8 5.5-4.8 9-4.2-2V38H19V20.5l-4.2 2-4.8-9L18 8Z" />
      <path d="M20.5 8h7" />
      <path d="M21 32h6" />
      <path d="M24 32v6" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17h6l3-5h7l3 5h5a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V21a4 4 0 0 1 4-4Z" />
      <circle cx="24" cy="28" r="7" />
      <path d="M34 21h.1" />
    </svg>
  )
}

function BalloonClusterIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="18" cy="20" rx="7" ry="9" />
      <ellipse cx="30" cy="20" rx="7" ry="9" />
      <ellipse cx="24" cy="15" rx="7" ry="9" />
      <path d="M18 29v4l6 7" />
      <path d="M30 29v4l-6 7" />
      <path d="M24 24v16" />
      <path d="M16 36c4.2-2.4 7-1.2 8 4" />
      <path d="M32 36c-4.2-2.4-7-1.2-8 4" />
    </svg>
  )
}
