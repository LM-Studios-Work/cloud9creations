import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { WhatsAppIcon } from "@/components/social-icons"

interface GalleryImage {
  src: string
  alt: string
}

interface Highlight {
  title: string
  body: string
}

interface FAQ {
  q: string
  a: string
}

interface ServicePageProps {
  tag: string
  headline: string
  script: string
  description: string
  heroImage: string
  heroAlt: string
  highlights: Highlight[]
  galleryImages: GalleryImage[]
  faqs: FAQ[]
  ctaHeadline: string
  whatsappText: string
}

export function ServicePage({
  tag,
  headline,
  script,
  description,
  heroImage,
  heroAlt,
  highlights,
  galleryImages,
  faqs,
  ctaHeadline,
  whatsappText,
}: ServicePageProps) {
  const waHref = `https://wa.me/27821234567?text=${encodeURIComponent(whatsappText)}`

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[580px] overflow-hidden bg-foreground">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" aria-hidden="true" />

        <div className="relative flex min-h-[580px] w-full flex-col justify-end px-5 pb-14 pt-24 sm:px-8 lg:px-14 lg:pb-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-foreground/60">
              <li>
                <Link href="/#services" className="transition-colors hover:text-primary-foreground">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-foreground/90">{tag}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl font-medium leading-none tracking-wide text-primary-foreground uppercase sm:text-6xl lg:text-7xl">
              {headline}
              <span
                className="mt-3 block text-6xl font-normal normal-case sm:text-7xl lg:text-8xl"
                style={{
                  fontFamily: "var(--font-script)",
                  color: "oklch(0.72 0.12 75)",
                }}
              >
                {script}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/82">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
                style={{ backgroundColor: "oklch(0.51 0.04 142)" }}
              >
                ENQUIRE NOW
                <WhatsAppIcon className="size-4" />
              </a>
              <Link
                href="/#gallery"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary-foreground/80 uppercase transition-colors hover:text-primary-foreground"
              >
                VIEW GALLERY
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section
        className="w-full px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
        style={{ backgroundColor: "oklch(0.965 0.012 75)" }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 flex flex-col items-center text-center">
            <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
              What we offer
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-[0.1em] text-foreground uppercase sm:text-4xl">
              {tag}
            </h2>
            <div className="mx-auto mt-2 h-px w-12 bg-accent" aria-hidden="true" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 border border-border bg-card p-6 shadow-[0_8px_30px_oklch(0.22_0.01_60_/_0.05)]"
              >
                <div
                  className="flex size-10 items-center justify-center"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                  aria-hidden="true"
                >
                  <HeartIcon />
                </div>
                <h3 className="font-heading text-sm font-semibold tracking-[0.1em] text-foreground uppercase">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="w-full overflow-hidden bg-foreground">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
              FAQs
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-wide text-foreground uppercase sm:text-4xl">
              Common questions.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Not seeing what you need? Reach out via WhatsApp — we are happy to
              answer anything.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase transition-opacity hover:opacity-70"
            >
              ASK US DIRECTLY
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <dl className="divide-y divide-border">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </dl>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="relative isolate overflow-hidden px-5 py-16 text-center sm:px-8 lg:py-20"
        style={{ backgroundColor: "oklch(0.51 0.04 142)" }}
      >
        <div className="relative mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-primary-foreground/70 uppercase">
            Get in touch
          </p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-wide text-primary-foreground uppercase sm:text-4xl">
            {ctaHeadline}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
            Tell us your date, theme, and vision. We will shape a proposal
            around your space and celebration style.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground px-7 py-3 text-xs font-semibold tracking-widest text-primary uppercase transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="size-4" />
              ENQUIRE ON WHATSAPP
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 px-7 py-3 text-xs font-semibold tracking-widest text-primary-foreground uppercase transition-colors hover:border-primary-foreground"
            >
              CONTACT FORM
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="w-full border-t border-border px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            Explore our other services
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group flex items-center justify-between border border-border bg-card px-5 py-4 text-sm font-semibold tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <span>{svc.label}</span>
                <ArrowRight className="size-4 opacity-40 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const otherServices = [
  { label: "Kids Parties", href: "/services/kids-parties" },
  { label: "Baby Showers & Celebrations", href: "/services/baby-showers" },
  { label: "Event Styling", href: "/services/event-styling" },
  { label: "Custom Setups", href: "/services/custom-setups" },
]

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5 fill-current"
      style={{ color: "oklch(0.72 0.12 75)" }}
      aria-hidden="true"
    >
      <path d="M12 20.2c-.35-.22-.84-.55-1.47-.99a28.75 28.75 0 0 1-3.14-2.55C5.25 14.64 3 11.98 3 8.8 3 6.42 4.95 4.5 7.35 4.5c1.88 0 3.34 1.03 4.1 2.35.1.17.28.27.47.27s.37-.1.47-.27c.76-1.32 2.22-2.35 4.1-2.35C18.96 4.5 21 6.42 21 8.8c0 3.18-2.25 5.84-4.39 7.86a28.75 28.75 0 0 1-3.14 2.55c-.63.44-1.12.77-1.47.99Z" />
    </svg>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group py-5">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <dt className="font-heading text-sm font-semibold tracking-wide text-foreground uppercase">
          {question}
        </dt>
        <ChevronDown
          className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {answer}
      </dd>
    </details>
  )
}
