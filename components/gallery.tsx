const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=340",
    alt: "Happy Birthday balloon arch in pastel purple and gold",
    label: "Happy Birthday",
  },
  {
    src: "/placeholder.svg?height=400&width=340",
    alt: "One year birthday balloon arch in sage green and gold",
    label: "1st Birthday",
  },
  {
    src: "/placeholder.svg?height=400&width=340",
    alt: "21st birthday balloon arch in black and gold",
    label: "21st Birthday",
  },
  {
    src: "/placeholder.svg?height=400&width=340",
    alt: "Welcome Baby balloon setup in soft blue and white",
    label: "Welcome Baby",
  },
  {
    src: "/placeholder.svg?height=400&width=340",
    alt: "Bride to be balloon arrangement in pink and cream",
    label: "Bride to Be",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="w-full bg-background" aria-label="Photo gallery">
      <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {galleryImages.map((image) => (
          <div key={image.label} className="group relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-foreground/0 pb-4 opacity-0 transition-all duration-300 group-hover:bg-foreground/20 group-hover:opacity-100">
              <span className="text-xs font-medium tracking-widest text-white">{image.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
