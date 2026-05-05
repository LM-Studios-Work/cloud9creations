export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-background"
      style={{ backgroundColor: "oklch(0.965 0.012 75)" }}
    >
      <div className="grid w-full grid-cols-1 gap-0 md:grid-cols-2">
        {/* Left: Text */}
        <div className="flex flex-col justify-center gap-6 px-8 py-16 md:px-14 md:py-20">
          <h1 className="font-heading text-4xl font-medium leading-tight tracking-wide text-foreground md:text-5xl lg:text-6xl">
            <span className="block uppercase">ELEVATED BALLOON</span>
            <span className="block uppercase">STYLING FOR EVERY</span>
            <span
              className="mt-2 block text-5xl font-normal italic md:text-6xl lg:text-7xl"
              style={{
                fontFamily: "var(--font-script)",
                color: "oklch(0.72 0.12 75)",
              }}
            >
              celebration
            </span>
          </h1>

          <div
            className="flex items-center gap-4"
            aria-hidden="true"
          >
            <div className="h-px flex-1 bg-foreground/40" />
            <svg viewBox="0 0 24 24" className="size-5 fill-current shrink-0" style={{ color: "oklch(0.72 0.12 75)" }}>
              <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <div className="h-px flex-1 bg-foreground/40" />
          </div>

          <p className="max-w-md font-sans text-sm leading-relaxed text-foreground/70 md:text-base">
            At Cloud Nine Creations, we design elegant balloon décor that transforms your special moments into
            unforgettable experiences.
          </p>

          <div>
            <a
              href="https://wa.me/27821234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
              style={{ backgroundColor: "oklch(0.51 0.04 142)" }}
            >
              ENQUIRE NOW
              <svg viewBox="0 0 20 20" className="size-4 fill-current" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative hidden md:block">
          {/* "Let's Celebrate" script overlay */}
          <div
            className="absolute right-8 top-12 z-10 text-4xl font-normal lg:text-5xl"
            style={{
              fontFamily: "var(--font-script)",
              color: "oklch(0.72 0.12 75)",
              lineHeight: 1.2,
            }}
            aria-hidden="true"
          >
            Let&apos;s
            <br />
            Celebrate
          </div>

          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2014.51.11-d3TV77H5C6SXXEG6odlE9ceQf6TZJy.jpeg"
            alt="Elegant balloon arch arrangement in teal, mauve, gold and sage green colours"
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}
