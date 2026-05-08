"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { WhatsAppIcon } from "@/components/social-icons"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/#about" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT", href: "/contact" },
]

const serviceLinks = [
  { label: "Kids Parties", href: "/services/kids-parties" },
  { label: "Baby Showers & Celebrations", href: "/services/baby-showers" },
  { label: "Event Styling", href: "/services/event-styling" },
  { label: "Custom Setups", href: "/services/custom-setups" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 right-0 left-0 z-50 overflow-visible border-b border-border bg-background shadow-sm md:bg-background/95 md:backdrop-blur-sm">
      <div className="relative flex h-20 w-full items-center justify-between px-6 md:h-auto md:px-8 md:py-4">
        {/* Logo */}
        <Link href="/" className="absolute top-2 left-5 z-10 flex items-center gap-3 md:static">
          <div className="relative h-24 w-24 rounded-full bg-background shadow-[0_8px_22px_rgb(66_49_34_/_0.06)] md:h-20 md:w-24 md:rounded-none md:bg-transparent md:shadow-none">
            <Image
              src="/logo (2).png"
              alt="Cloud Nine Creations"
              fill
              sizes="(min-width: 768px) 96px, 80px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          <NavLink link={navLinks[0]} pathname={pathname} />
          <NavLink link={navLinks[1]} pathname={pathname} />
          <ServicesDropdown pathname={pathname} />
          <NavLink link={navLinks[2]} pathname={pathname} />
          <NavLink link={navLinks[3]} pathname={pathname} />
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
          className="absolute top-1/2 right-5 z-20 flex size-12 -translate-y-1/2 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={34} strokeWidth={2.1} color="#7d6a50" />
          ) : (
            <Menu size={34} strokeWidth={2.1} color="#7d6a50" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="absolute top-full right-0 left-0 border-t border-border bg-background px-6 py-4 shadow-lg md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            <MobileLink
              link={navLinks[0]}
              pathname={pathname}
              onClick={() => setMobileOpen(false)}
            />
            <MobileLink
              link={navLinks[1]}
              pathname={pathname}
              onClick={() => setMobileOpen(false)}
            />
            <li>
              <Link
                href="/#services"
                className={cn(
                  "block py-3 text-sm font-medium tracking-widest text-foreground/70 transition-colors hover:text-foreground",
                  isServicesActive(pathname) && "text-foreground"
                )}
                style={{
                  color: isServicesActive(pathname)
                    ? "oklch(0.72 0.12 75)"
                    : undefined,
                }}
                onClick={(event) => {
                  handleHashClick("/#services")(event)
                  setMobileOpen(false)
                }}
              >
                SERVICES
              </Link>
              <ul className="border-l border-border pl-4">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 text-xs font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <MobileLink
              link={navLinks[2]}
              pathname={pathname}
              onClick={() => setMobileOpen(false)}
            />
            <MobileLink
              link={navLinks[3]}
              pathname={pathname}
              onClick={() => setMobileOpen(false)}
            />
            <li className="pt-2">
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

function ServicesDropdown({ pathname }: { pathname: string }) {
  const active = isServicesActive(pathname)

  return (
    <div className="group relative">
      <Link
        href="/#services"
        onClick={handleHashClick("/#services")}
        className={cn(
          "flex items-center gap-1 text-xs font-medium tracking-widest text-foreground/70 transition-colors hover:text-foreground",
          active && "border-b border-gold pb-0.5 text-foreground"
        )}
        style={{ color: active ? "oklch(0.72 0.12 75)" : undefined }}
        aria-haspopup="true"
      >
        SERVICES
        <ChevronDown
          className="size-3.5 transition-transform group-hover:rotate-180"
          aria-hidden="true"
        />
      </Link>
      <div className="invisible absolute top-full left-1/2 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="border border-border bg-background p-2 shadow-lg">
          <Link
            href="/#services"
            onClick={handleHashClick("/#services")}
            className="block px-4 py-2.5 text-xs font-medium tracking-widest text-foreground/65 uppercase transition-colors hover:bg-secondary hover:text-foreground"
          >
            All Services
          </Link>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 text-xs font-medium tracking-widest text-foreground/65 uppercase transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
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
      onClick={handleHashClick(link.href)}
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

function MobileLink({
  link,
  pathname,
  onClick,
}: {
  link: (typeof navLinks)[number]
  pathname: string
  onClick: () => void
}) {
  const active = isActiveLink(link, pathname)

  return (
    <li>
      <Link
        href={link.href}
        onClick={(event) => {
          handleHashClick(link.href)(event)
          onClick()
        }}
        className={cn(
          "block py-3 text-sm font-medium tracking-widest text-foreground/70 transition-colors hover:text-foreground",
          active && "text-foreground"
        )}
        style={{
          color: active ? "oklch(0.72 0.12 75)" : undefined,
        }}
      >
        {link.label}
      </Link>
    </li>
  )
}

function isActiveLink(link: (typeof navLinks)[number], pathname: string) {
  if (link.href === "/") {
    return pathname === "/"
  }

  if (link.href.startsWith("/#")) {
    return false
  }

  return pathname === link.href || pathname.startsWith(`${link.href}/`)
}

function isServicesActive(pathname: string) {
  return pathname.startsWith("/services")
}

function handleHashClick(href: string) {
  return (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("/#") || window.location.pathname !== "/") {
      return
    }

    const target = document.getElementById(href.slice(2))

    if (!target) {
      return
    }

    event.preventDefault()
    window.history.pushState(null, "", href)

    const headerHeight =
      document.querySelector("header")?.getBoundingClientRect().height ?? 0

    window.scrollTo({
      top: Math.max(
        target.getBoundingClientRect().top + window.scrollY - headerHeight,
        0
      ),
      behavior: "smooth",
    })
  }
}
