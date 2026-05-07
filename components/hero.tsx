import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-background"
      style={{ backgroundColor: "oklch(0.965 0.012 75)" }}
    >
      <div className="relative h-[356px] w-full md:hidden">
        <Image
          src="/homepage/hero.webp"
          alt="Cloud Nine Creations balloon styling"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_center]"
        />
      </div>
      <div className="relative grid w-full grid-cols-1 gap-0 md:grid-cols-2">
        {/* Left: Text */}
        <div className="flex flex-col items-center justify-start gap-2.5 px-8 pt-9 pb-5 text-center md:min-h-[560px] md:items-start md:justify-center md:gap-6 md:px-14 md:py-20 md:text-left">
          <h1 className="font-heading text-[1.92rem] leading-[0.98] font-medium tracking-wide text-foreground md:text-5xl md:leading-tight lg:text-6xl">
            <span className="block uppercase">ELEVATED BALLOON</span>
            <span className="block uppercase">STYLING FOR EVERY</span>
            <span
              className="mt-2 block text-[2.85rem] leading-none font-normal italic md:text-6xl lg:text-7xl"
              style={{
                fontFamily: "var(--font-script)",
                color: "oklch(0.72 0.12 75)",
              }}
            >
              celebration
            </span>
          </h1>

          <div
            className="flex w-full max-w-[17rem] items-center gap-3 md:max-w-none md:gap-4"
            aria-hidden="true"
          >
            <div className="h-px flex-1 bg-foreground/40" />
            <svg
              viewBox="0 0 24 24"
              className="size-4 shrink-0 fill-current md:size-5"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <div className="h-px flex-1 bg-foreground/40" />
          </div>

          <p className="max-w-[21rem] font-sans text-[0.82rem] leading-snug text-foreground/75 md:max-w-md md:text-base md:leading-relaxed">
            At Cloud Nine Creations, we design elegant balloon décor that
            transforms your special moments into unforgettable experiences.
          </p>

          <div className="w-full max-w-[21rem] md:w-auto md:max-w-none">
            <a
              href="https://wa.me/27821234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-[3px] px-6 py-2.5 text-xs font-semibold tracking-widest text-primary-foreground transition-opacity hover:opacity-90 md:w-auto md:rounded-none md:py-3"
              style={{ backgroundColor: "oklch(0.51 0.04 142)" }}
            >
              ENQUIRE NOW
              <svg
                viewBox="0 0 20 20"
                className="size-4 fill-current"
                aria-hidden="true"
              >
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
        <div className="relative hidden min-h-[560px] md:block">
          <Image
            src="/homepage/hero.webp"
            alt="Cloud Nine Creations balloon styling"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
