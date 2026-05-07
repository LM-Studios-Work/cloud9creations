export function About() {
  return (
    <section
      id="about"
      className="overflow-hidden"
      style={{ backgroundColor: "oklch(0.965 0.012 75)" }}
    >
      <div className="w-full">
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          {/* Left: Image */}
          <div className="relative h-80 md:h-auto">
            <img
              src="/homepage/about.webp"
              alt="Elegant balloon styling setup for a celebration"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center gap-6 px-8 py-16 md:px-14 md:py-20">
            <p
              className="text-xs font-medium tracking-[0.3em]"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              ABOUT US
            </p>

            <div>
              <h2 className="font-heading text-4xl leading-tight font-medium tracking-wide text-foreground uppercase md:text-5xl">
                CREATING MOMENTS
              </h2>
              <p
                className="mt-1 text-3xl font-normal italic md:text-4xl"
                style={{
                  fontFamily: "var(--font-script)",
                  color: "oklch(0.51 0.04 142)",
                }}
              >
                that feel like cloud nine
              </p>
            </div>

            <div className="flex items-center gap-4" aria-hidden="true">
              <div className="h-px flex-1 bg-foreground/40" />
              <svg
                viewBox="0 0 24 24"
                className="size-5 shrink-0 fill-current"
                style={{ color: "oklch(0.72 0.12 75)" }}
              >
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <div className="h-px flex-1 bg-foreground/40" />
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-sans text-sm leading-relaxed text-foreground/70">
                We believe every celebration deserves to feel special,
                beautiful, and thoughtfully styled.
              </p>
              <p className="font-sans text-sm leading-relaxed text-foreground/70">
                Based in Johannesburg, we specialise in elegant balloon décor
                for kids&apos; parties, baby showers, and intimate events — with
                a vision to grow into luxury event styling for all occasions.
              </p>
              <p className="font-sans text-sm leading-relaxed text-foreground/70">
                Our approach is simple: clean designs, modern colour palettes,
                and attention to every detail.
              </p>
            </div>

            <div>
              <a
                href="#services"
                className="inline-flex items-center border px-6 py-3 text-xs font-semibold tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                style={{
                  borderColor: "oklch(0.51 0.04 142)",
                  color: "oklch(0.51 0.04 142)",
                }}
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
