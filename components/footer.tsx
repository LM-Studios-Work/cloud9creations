"use client"

import { ArrowRight, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons"

const pageLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
]

const serviceLinks = [
  { label: "Kids Parties", href: "/services/kids-parties" },
  { label: "Baby Showers & Celebrations", href: "/services/baby-showers" },
  { label: "Event Styling", href: "/services/event-styling" },
  { label: "Custom Setups", href: "/services/custom-setups" },
  { label: "Contact us", href: "/contact" },
]

const contactLinks = [
  {
    label: "082 123 4567",
    href: "https://wa.me/27821234567",
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "hello@cloudninecreations.co.za",
    href: "mailto:hello@cloudninecreations.co.za",
    icon: Mail,
  },
  {
    label: "@cloudnine.creations",
    href: "https://instagram.com/cloudnine.creations",
    icon: InstagramIcon,
    external: true,
  },
]

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail("")
  }

  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-primary text-primary-foreground"
    >
      <Image
        src="/footer-balloons.png"
        alt=""
        fill
        sizes="(min-width: 640px) 100vw, 0px"
        className="pointer-events-none hidden object-cover opacity-70 sm:block"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-primary/35 sm:block" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-10 pb-8 sm:px-8 sm:pt-12 lg:px-10 lg:pt-16 lg:pb-10">
        <div className="grid gap-8 lg:grid-cols-[1.22fr_1.55fr_1fr_1.12fr] lg:items-start lg:gap-9">
          <section className="order-1 mx-auto flex max-w-sm flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <Link
              href="/#home"
              className="relative block h-20 w-60 max-w-full sm:h-24 sm:w-72"
              aria-label="Cloud Nine Creations home"
            >
              <Image
                src="/footer copy.png"
                alt="Cloud Nine Creations"
                fill
                sizes="288px"
                className="object-contain object-center lg:object-left"
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-primary-foreground/82">
              Elegant balloon styling for birthdays, baby showers, intimate
              events, and custom celebrations across Johannesburg.
            </p>
          </section>

          <section className="order-2 mx-auto w-full max-w-sm text-center lg:order-4 lg:mx-0 lg:text-left">
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
            >
              Plan an event
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <form
              onSubmit={handleSubmit}
              className="mt-5 w-full max-w-sm lg:mt-14"
              aria-label="Newsletter signup"
            >
              <label
                htmlFor="footer-newsletter-email"
                className="block text-left text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase"
              >
                Newsletter
              </label>
              <div className="mt-3 grid min-h-12 grid-cols-[1fr_3rem] overflow-hidden bg-primary-foreground shadow-sm">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  required
                  className="min-w-0 px-4 text-sm text-foreground outline-none placeholder:text-foreground/45"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-accent text-foreground transition-opacity hover:opacity-85"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </section>

          <div className="order-3 grid grid-cols-2 gap-6 border-y border-primary-foreground/14 py-7 lg:order-2 lg:grid-cols-[0.8fr_1.2fr] lg:border-y-0 lg:py-0">
            <FooterNav title="Pages" links={pageLinks} />
            <FooterNav title="Enquiries" links={serviceLinks} />
          </div>

          <section className="order-4 mx-auto w-full max-w-sm lg:order-3 lg:mx-0">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-5 space-y-3.5">
              <li>
                <ContactRow icon={MapPin}>
                  <address className="not-italic">
                    Johannesburg, South Africa
                  </address>
                </ContactRow>
              </li>
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group grid grid-cols-[1.25rem_1fr] items-start gap-3 text-sm leading-5 text-primary-foreground/82 transition-colors hover:text-primary-foreground"
                  >
                    <span className="flex size-5 items-center justify-center text-accent">
                      <link.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 break-words">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="relative border-t border-primary-foreground/12">
        <div className="mx-auto flex w-full max-w-7xl justify-center px-5 py-4 text-center text-[11px] leading-5 text-primary-foreground/68 sm:px-8 lg:px-10">
          <p>
            Copyright &copy; 2026. Cloud Nine, South Africa |{" "}
            <Link
              href="/#services"
              className="underline underline-offset-2 transition-colors hover:text-primary-foreground"
            >
              Terms
            </Link>{" "}
            |{" "}
            <Link
              href="/contact"
              className="underline underline-offset-2 transition-colors hover:text-primary-foreground"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterNav({
  title,
  links,
}: {
  title: string
  links: Array<{ label: string; href: string }>
}) {
  return (
    <nav aria-label={title}>
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm leading-5 text-primary-foreground/82 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase">
      {children}
    </h2>
  )
}

function ContactRow({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-[1.25rem_1fr] items-start gap-3 text-sm leading-5 text-primary-foreground/82">
      <span className="flex size-5 items-center justify-center text-accent">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <div className="min-w-0">{children}</div>
    </div>
  )
}
