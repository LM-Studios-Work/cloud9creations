"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "GALLERY", href: "#gallery" },
  { label: "PACKAGES", href: "#packages" },
  { label: "CONTACT", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex w-full items-center justify-between px-8 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="relative h-16 w-20 md:h-20 md:w-24">
            <Image
              src="/logo (2).png"
              alt="Cloud Nine Creations"
              fill
              sizes="(min-width: 768px) 96px, 80px"
              className="object-contain"
              priority
            />
            <svg viewBox="0 0 120 120" className="hidden" aria-hidden="true">
              <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/40" />
              <path
                d="M 30 60 Q 60 20 90 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-foreground/40"
              />
              <text
                x="50%"
                y="44%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-foreground font-heading text-[10px] font-semibold tracking-[0.25em]"
                style={{ fontFamily: "var(--font-heading)" }}
                fontSize="10"
                letterSpacing="3"
              >
                CLOUD
              </text>
              <text
                x="50%"
                y="56%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontFamily: "var(--font-script)", fill: "oklch(0.72 0.12 75)", fontSize: "16px" }}
              >
                nine
              </text>
              <text
                x="50%"
                y="68%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontFamily: "var(--font-heading)" }}
                className="fill-foreground"
                fontSize="8"
                letterSpacing="2"
              >
                CREATIONS
              </text>
              <text
                x="50%"
                y="79%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontFamily: "var(--font-sans)" }}
                className="fill-foreground/60"
                fontSize="5"
                letterSpacing="1.5"
              >
                BALLOONS • PARTIES • MEMORIES
              </text>
            </svg>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-medium tracking-widest text-foreground/70 transition-colors hover:text-foreground",
                link.label === "HOME" && "border-b border-gold pb-0.5 text-foreground"
              )}
              style={{ color: link.label === "HOME" ? "oklch(0.72 0.12 75)" : undefined }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://wa.me/27821234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            style={{ backgroundColor: "oklch(0.51 0.04 142)" }}
          >
            <WhatsAppIcon />
            ENQUIRE NOW
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="absolute left-0 right-0 top-full border-t border-border bg-background/95 px-6 py-4 shadow-lg backdrop-blur-sm md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-widest text-foreground/70 transition-colors hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/27821234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider text-primary-foreground"
                style={{ backgroundColor: "oklch(0.51 0.04 142)" }}
              >
                <WhatsAppIcon />
                ENQUIRE NOW
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
