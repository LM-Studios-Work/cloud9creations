"use client"

import { CalendarDays, Clock, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons"

const contactMethods = [
  {
    label: "WhatsApp",
    value: "082 123 4567",
    href: "https://wa.me/27821234567",
    icon: WhatsAppIcon,
  },
  {
    label: "Email",
    value: "hello@cloudninecreations.co.za",
    href: "mailto:hello@cloudninecreations.co.za",
    icon: Mail,
  },
  {
    label: "Instagram",
    value: "@cloudnine.creations",
    href: "https://instagram.com/cloudnine.creations",
    icon: InstagramIcon,
  },
]

const eventTypes = [
  "Kids party",
  "Baby shower",
  "Birthday celebration",
  "Milestone event",
  "Custom setup",
]

const bookingSteps = [
  "Share your date, location, event type, and palette.",
  "We shape the concept around your space and celebration style.",
  "Your setup is prepared, delivered, and styled on the day.",
]

export function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")?.toString().trim()
    const eventType = formData.get("eventType")?.toString()
    const eventDate = formData.get("eventDate")?.toString()
    const location = formData.get("location")?.toString().trim()
    const message = formData.get("message")?.toString().trim()

    const enquiry = [
      "Hi Cloud Nine Creations, I would like to enquire about balloon styling.",
      name ? `Name: ${name}` : "",
      eventType ? `Event type: ${eventType}` : "",
      eventDate ? `Event date: ${eventDate}` : "",
      location ? `Location: ${location}` : "",
      message ? `Details: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    window.open(
      `https://wa.me/27821234567?text=${encodeURIComponent(enquiry)}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <>
      <section className="relative isolate min-h-[520px] overflow-hidden bg-foreground text-primary-foreground">
        <Image
          src="/homepage/gallery 4.webp"
          alt="Soft balloon styling for a Cloud Nine Creations celebration"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/58" aria-hidden="true" />
        <div className="relative flex min-h-[520px] w-full flex-col justify-end px-5 py-12 sm:px-8 lg:px-14 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.28em] text-primary-foreground/80 uppercase">
              Contact Cloud Nine Creations
            </p>
            <h1 className="mt-4 font-heading text-5xl leading-none font-medium tracking-wide uppercase sm:text-6xl lg:text-7xl">
              Let&apos;s style your next
              <span
                className="block pt-2 text-6xl font-normal normal-case sm:text-7xl lg:text-8xl"
                style={{
                  fontFamily: "var(--font-script)",
                  color: "oklch(0.72 0.12 75)",
                }}
              >
                celebration
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/82">
              Tell us what you are celebrating and we will help shape a polished
              balloon setup for the date, space, and mood.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex min-h-20 items-center gap-4 border border-primary-foreground/20 bg-background/92 px-4 py-3 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center bg-primary text-primary-foreground transition-colors group-hover:bg-primary-foreground group-hover:text-primary"
                  aria-hidden="true"
                >
                  <method.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold tracking-[0.18em] uppercase opacity-60">
                    {method.label}
                  </span>
                  <span className="mt-1 block truncate text-sm font-medium">
                    {method.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
                Start here
              </p>
              <h2 className="mt-3 font-heading text-3xl leading-tight font-medium tracking-wide text-foreground uppercase sm:text-4xl">
                Enquiries are easiest with a few details upfront.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We are based in Johannesburg and style birthdays, showers,
                intimate events, and custom celebrations across nearby areas.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <InfoRow
                icon={MapPin}
                label="Location"
                value="Johannesburg, South Africa"
              />
              <InfoRow
                icon={Clock}
                label="Response time"
                value="Usually within 24 hours"
              />
              <InfoRow
                icon={CalendarDays}
                label="Booking note"
                value="Earlier enquiries help secure your preferred date."
              />
              <InfoRow
                icon={Phone}
                label="Quick contact"
                value="082 123 4567"
                href="tel:+27821234567"
              />
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="bg-card p-5 shadow-[0_16px_45px_oklch(0.22_0.01_60_/_0.08)] sm:p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" id="name">
                <input
                  id="name"
                  name="name"
                  required
                  className="h-12 w-full border border-border bg-background px-4 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                  placeholder="Your name"
                />
              </Field>

              <Field label="Event type" id="eventType">
                <select
                  id="eventType"
                  name="eventType"
                  required
                  className="h-12 w-full border border-border bg-background px-4 text-sm text-foreground transition-colors outline-none focus:border-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {eventTypes.map((eventType) => (
                    <option key={eventType}>{eventType}</option>
                  ))}
                </select>
              </Field>

              <Field label="Event date" id="eventDate">
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  className="h-12 w-full border border-border bg-background px-4 text-sm text-foreground transition-colors outline-none focus:border-primary"
                />
              </Field>

              <Field label="Area or venue" id="location">
                <input
                  id="location"
                  name="location"
                  className="h-12 w-full border border-border bg-background px-4 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                  placeholder="Suburb or venue"
                />
              </Field>
            </div>

            <Field
              label="Tell us about the setup"
              id="message"
              className="mt-5"
            >
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full resize-none border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground transition-colors outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                placeholder="Theme, colours, guest count, preferred style, and any must-have details."
              />
            </Field>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-6 py-3 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-opacity hover:opacity-90 sm:w-auto"
            >
              Send via WhatsApp
              <WhatsAppIcon className="size-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="bg-secondary px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.65fr_1.35fr] md:items-start">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
                How it works
              </p>
              <h2 className="font-heading text-4xl leading-tight font-medium tracking-wide text-foreground uppercase md:text-5xl">
                From idea to
                <br />
                installation.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {bookingSteps.map((step, index) => (
                <article
                  key={step}
                  className="flex flex-col gap-4 border border-border bg-background/70 p-6 backdrop-blur-sm transition-all hover:border-accent hover:bg-background"
                >
                  <span className="font-heading text-4xl font-light tracking-wide text-accent">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    {step}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  id,
  className,
  children,
}: {
  label: string
  id: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold tracking-[0.16em] text-foreground/70 uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}) {
  const content = (
    <>
      <span
        className="flex size-11 shrink-0 items-center justify-center bg-primary text-primary-foreground"
        aria-hidden="true"
      >
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block text-[11px] font-semibold tracking-[0.18em] text-foreground/55 uppercase">
          {label}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-foreground">
          {value}
        </span>
      </span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-4 border border-border bg-card p-4 transition-colors hover:border-primary"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex items-center gap-4 border border-border bg-card p-4">
      {content}
    </div>
  )
}
