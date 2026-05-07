import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const galleryImages = [
  {
    src: "/homepage/gallery 1.webp",
    alt: "Elegant balloon decor in soft pastel tones",
    label: "Pastel Detail",
  },
  {
    src: "/homepage/gallery 2.webp",
    alt: "Stylish balloon arrangement for a first birthday",
    label: "First Birthday",
  },
  {
    src: "/homepage/gallery 4.webp",
    alt: "Soft and elegant balloon setup for a welcome baby event",
    label: "Welcome Baby",
  },
  {
    src: "/homepage/gallery 3.webp",
    alt: "Sophisticated balloon styling for an adult celebration",
    label: "Milestone Event",
  },
]

export function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full bg-background px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      aria-labelledby="gallery-preview-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
              Gallery
            </p>
            <h2
              id="gallery-preview-title"
              className="mt-3 font-heading text-3xl font-medium tracking-[0.1em] text-foreground uppercase sm:text-4xl"
            >
              A preview of our styled celebrations
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex min-h-11 w-fit items-center gap-2 bg-primary px-6 py-3 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            View full gallery
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <Link
              href="/gallery"
              key={image.label}
              className="group relative aspect-[4/5] overflow-hidden bg-muted"
              aria-label={`View full gallery, starting from ${image.label}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent px-4 pt-14 pb-4">
                <span className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
                  {image.label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Browse more balloon arches, backdrop moments, soft palettes, and
              custom celebration details in the full gallery.
            </p>
            <Link
              href="/gallery"
              className="inline-flex w-fit items-center gap-2 text-xs font-semibold tracking-[0.16em] text-primary uppercase transition-opacity hover:opacity-70"
            >
              Explore all images
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export const fullGalleryImages = [
  {
    src: "/homepage/gallery 1.webp",
    alt: "Pastel balloon decor detail for a Cloud Nine Creations celebration",
    title: "Pastel detail",
    category: "Kids parties",
    span: "lg:row-span-2",
  },
  {
    src: "/homepage/gallery 2.webp",
    alt: "Stylish balloon arrangement for a first birthday celebration",
    title: "First birthday",
    category: "Birthdays",
    span: "",
  },
  {
    src: "/homepage/gallery 4.webp",
    alt: "Soft and elegant balloon setup for a welcome baby celebration",
    title: "Welcome baby",
    category: "Baby showers",
    span: "lg:col-span-2",
  },
  {
    src: "/homepage/gallery 3.webp",
    alt: "Sophisticated balloon styling for a milestone event",
    title: "Milestone event",
    category: "Event styling",
    span: "",
  },
  {
    src: "/homepage/about.webp",
    alt: "Elegant celebration setup with balloon styling and event details",
    title: "Styled details",
    category: "Custom setups",
    span: "lg:col-span-2",
  },
  {
    src: "/homepage/hero.webp",
    alt: "Cloud Nine Creations balloon styling installation",
    title: "Signature setup",
    category: "Balloon decor",
    span: "",
  },
]

export function GalleryPage() {
  return (
    <>
      <section className="relative isolate min-h-[520px] overflow-hidden bg-foreground text-primary-foreground">
        <Image
          src="/homepage/gallery 4.webp"
          alt="Cloud Nine Creations soft balloon styling"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/58" aria-hidden="true" />
        <div className="relative flex min-h-[520px] w-full flex-col justify-end px-5 py-12 sm:px-8 lg:px-14 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.28em] text-primary-foreground/80 uppercase">
              Cloud Nine Gallery
            </p>
            <h1 className="mt-4 font-heading text-5xl leading-none font-medium tracking-wide uppercase sm:text-6xl lg:text-7xl">
              Celebration styling
              <span
                className="block pt-2 text-6xl font-normal normal-case sm:text-7xl lg:text-8xl"
                style={{
                  fontFamily: "var(--font-script)",
                  color: "oklch(0.72 0.12 75)",
                }}
              >
                in full view
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/82">
              A closer look at our balloon decor, backdrop moments, and
              thoughtful celebration details across birthdays, showers, and
              custom setups.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 grid gap-4 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
                All images
              </p>
              <h2 className="mt-3 font-heading text-3xl font-medium tracking-[0.1em] text-foreground uppercase sm:text-4xl">
                Browse the full gallery
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
              Use these setups as a starting point for your own palette, theme,
              and venue. Each arrangement is shaped around the event style and
              the space available.
            </p>
          </div>

          <div className="grid auto-rows-[18rem] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {fullGalleryImages.map((image) => (
              <article
                key={image.title}
                className={`group relative overflow-hidden bg-muted ${image.span}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/76 to-transparent px-4 pt-16 pb-4">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase">
                    {image.category}
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-medium text-white">
                    {image.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
                Ready to plan?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-medium tracking-wide text-foreground uppercase">
                Bring your favourite look to life.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/27821234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 bg-primary px-6 py-3 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Enquire now
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center border border-primary px-6 py-3 text-xs font-semibold tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Contact form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
