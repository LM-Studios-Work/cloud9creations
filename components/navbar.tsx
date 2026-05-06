"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { WhatsAppIcon } from "@/components/social-icons"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "HOME", href: "/#home" },
  { label: "ABOUT", href: "/#about" },
  { label: "SERVICES", href: "/#services" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "PACKAGES", href: "/#packages" },
  { label: "CONTACT", href: "/contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 right-0 left-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="flex w-full items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-3">
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
              <circle
                cx="60"
                cy="60"
                r="56"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-foreground/40"
              />
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
                style={{
                  fontFamily: "var(--font-script)",
                  fill: "oklch(0.72 0.12 75)",
                  fontSize: "16px",
                }}
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
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink key={link.href} link={link} pathname={pathname} />
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
            <WhatsAppIcon className="size-4" />
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
          className="absolute top-full right-0 left-0 border-t border-border bg-background/95 px-6 py-4 shadow-lg backdrop-blur-sm md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-widest text-foreground/70 transition-colors hover:text-foreground",
                    isActiveLink(link, pathname) && "text-foreground"
                  )}
                  style={{
                    color: isActiveLink(link, pathname)
                      ? "oklch(0.72 0.12 75)"
                      : undefined,
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
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
                <WhatsAppIcon className="size-4" />
                ENQUIRE NOW
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

function NavLink({
  link,
  pathname,
}: {
  link: (typeof navLinks)[number]
  pathname: string
}) {
  const active = isActiveLink(link, pathname)

  return (
    <Link
      href={link.href}
      className={cn(
        "text-xs font-medium tracking-widest text-foreground/70 transition-colors hover:text-foreground",
        active && "border-b border-gold pb-0.5 text-foreground"
      )}
      style={{ color: active ? "oklch(0.72 0.12 75)" : undefined }}
    >
      {link.label}
    </Link>
  )
}

function isActiveLink(link: (typeof navLinks)[number], pathname: string) {
  if (pathname === "/contact") {
    return link.href === "/contact"
  }

  return pathname === "/" && link.href === "/#home"
}
