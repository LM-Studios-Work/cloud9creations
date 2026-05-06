import Image from "next/image"

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
  {
    src: "/homepage/gallery 4.webp",
    alt: "Soft and elegant balloon setup for a welcome baby event",
    label: "Soft Celebration",
  },
]

export function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full bg-background"
      aria-label="Photo gallery"
    >
      <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {galleryImages.map((image) => (
          <div key={image.label} className="group relative overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={420}
              height={360}
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-foreground/0 pb-4 opacity-0 transition-all duration-300 group-hover:bg-foreground/20 group-hover:opacity-100">
              <span className="text-xs font-medium tracking-widest text-white">
                {image.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
