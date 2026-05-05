"use client"

import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <footer
      id="contact"
      style={{ backgroundColor: "oklch(0.51 0.04 142)" }}
      className="text-primary-foreground w-full"
    >
      {/* Main footer content */}
      <div className="w-full px-8 py-16">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3">
          {/* Newsletter - Left */}
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">STAY IN THE LOOP</h3>
                <p className="mt-2 text-xs leading-relaxed opacity-80">
                  Be the first to know about special offers and new setups.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-primary-foreground px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
              />
              <button
                type="submit"
                className="flex size-10 shrink-0 items-center justify-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
                aria-label="Subscribe to newsletter"
              >
                <svg viewBox="0 0 20 20" className="size-5 fill-current text-foreground" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Logo center */}
          <div className="flex flex-col items-center justify-center gap-4">
            <svg viewBox="0 0 200 180" className="w-40" aria-label="Cloud Nine Creations logo">
              <text
                x="50%"
                y="30%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontFamily: "var(--font-heading)", fill: "oklch(0.98 0.005 75)", fontSize: "28px", letterSpacing: "4px", fontWeight: "600" }}
              >
                CLOUD
              </text>
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontFamily: "var(--font-script)", fill: "oklch(0.72 0.12 75)", fontSize: "52px" }}
              >
                nine
              </text>
              <text
                x="50%"
                y="82%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontFamily: "var(--font-heading)", fill: "oklch(0.98 0.005 75)", fontSize: "12px", letterSpacing: "3px", fontWeight: "600" }}
              >
                CREATIONS
              </text>
            </svg>
            <div className="flex items-center gap-4 w-full justify-center">
              <div className="h-px flex-1 max-w-12 bg-primary-foreground/30" aria-hidden="true" />
              <p className="text-center text-[11px] tracking-[0.15em] opacity-70">BALLOONS • PARTIES • MEMORIES</p>
              <div className="h-px flex-1 max-w-12 bg-primary-foreground/30" aria-hidden="true" />
            </div>
          </div>

          {/* Contact - Right */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "oklch(0.98 0.005 75)" }}
            >
              LET&apos;S CREATE SOMETHING BEAUTIFUL
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+27821234567"
                  className="flex items-center gap-3 text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  082 123 4567
                </a>
              </li>
              <li>
                <address className="flex items-center gap-3 text-sm not-italic opacity-80">
                  <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Johannesburg, South Africa
                </address>
              </li>
              <li>
                <a
                  href="https://instagram.com/cloudnine.creations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-current" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @cloudnine.creations
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@cloudninecreations.co.za"
                  className="flex items-center gap-3 text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  hello@cloudninecreations.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-primary-foreground/10">
        <div className="flex w-full items-center justify-between px-8 py-4">
          <p className="text-xs opacity-60">
            &copy; 2024 Cloud Nine Creations. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs opacity-60">
            Designed with
            <svg viewBox="0 0 24 24" className="size-3 fill-current" style={{ color: "oklch(0.72 0.12 75)" }} aria-hidden="true">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </p>
        </div>
      </div>
    </footer>
  )
}
