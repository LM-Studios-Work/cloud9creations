"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { WhatsAppIcon } from "@/components/social-icons"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "HOME", href: "/#home" },
  { label: "ABOUT", href: "/#about" },
  { label: "SERVICES", href: "/#services", hasDropdown: true },
  { label: "GALLERY", href: "/#gallery" },
  { label: "CONTACT", href: "/contact" },
]

const serviceDropdown = [
  { label: "Kids Parties", href: "/services/kids-parties" },
  { label: "Baby Showers & Celebrations", href: "/services/baby-showers" },
  { label: "Event Styling", href: "/services/event-styling" },
  { label: "Custom Setups", href: "/services/custom-setups" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
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
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 text-xs font-medium tracking-widest text-foreground/70 transition-colors hover:text-foreground",
                    (pathname.startsWith("/services") || pathname === "/") &&
                      pathname !== "/contact" &&
                      "text-foreground"
                  )}
                  style={{
                    color: pathname.startsWith("/services")
                      ? "oklch(0.72 0.12 75)"
                      : undefined,
                  }}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "size-3 transition-transform",
                      servicesOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 z-50 mt-2 w-56 -translate-x-1/2 border border-border bg-background shadow-lg">
                    <div className="py-1">
                      <Link
                        href="/#services"
                        className="block px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                      >
                        All Services
                      </Link>
                      <div className="my-1 border-t border-border" />
                      {serviceDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm text-foreground/75 transition-colors hover:bg-muted hover:text-foreground",
                            pathname === item.href && "font-medium text-foreground"
                          )}
                          style={{
                            color:
                              pathname === item.href
                                ? "oklch(0.72 0.12 75)"
                                : undefined,
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={link.href} link={link} pathname={pathname} />
            )
          )}
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
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.hasDropdown ? (
                  <div>
                    <Link
                      href={link.href}
                      className={cn(
                        "block py-3 text-sm font-medium tracking-widest text-foreground/70 transition-colors hover:text-foreground",
                        pathname.startsWith("/services") && "text-foreground"
                      )}
                      style={{
                        color: pathname.startsWith("/services")
                          ? "oklch(0.72 0.12 75)"
                          : undefined,
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    <ul className="mb-2 ml-4 flex flex-col gap-1 border-l border-border pl-4">
                      {serviceDropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "block py-1.5 text-sm text-foreground/65 transition-colors hover:text-foreground",
                              pathname === item.href && "font-medium"
                            )}
                            style={{
                              color:
                                pathname === item.href
                                  ? "oklch(0.72 0.12 75)"
                                  : undefined,
                            }}
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 text-sm font-medium tracking-widest text-foreground/70 transition-colors hover:text-foreground",
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
                )}
              </li>
            ))}
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
