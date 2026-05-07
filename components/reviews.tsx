import { Quote, Star } from "lucide-react"

const reviews = [
  {
    name: "Lerato M.",
    event: "Kids birthday party",
    text: "The balloon setup was soft, polished, and exactly what we pictured. It made the whole room feel special without being overdone.",
  },
  {
    name: "Candice R.",
    event: "Baby shower",
    text: "Beautiful attention to detail from the colour palette to the final styling. Everything looked elegant and photographed so well.",
  },
  {
    name: "Nadia K.",
    event: "Custom celebration setup",
    text: "Professional, creative, and calm from start to finish. The final setup brought the theme together perfectly.",
  },
]

export function Reviews() {
  return (
    <section
      id="reviews"
      className="w-full bg-card px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-accent uppercase">
            Google Reviews
          </p>
          <h2
            id="reviews-heading"
            className="mt-3 font-heading text-3xl leading-tight font-medium tracking-[0.08em] text-foreground uppercase md:text-4xl"
          >
            Kind words from clients
          </h2>
          <div
            className="mx-auto mt-4 flex items-center justify-center gap-1.5 text-accent"
            aria-label="Rated 5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-4 fill-current"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex min-h-72 flex-col border border-border bg-background p-6 shadow-[0_14px_45px_oklch(0.22_0.01_60_/_0.05)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {review.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
                    {review.event}
                  </p>
                </div>
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                  aria-hidden="true"
                >
                  <Quote className="size-4" />
                </span>
              </div>

              <div className="mt-5 flex gap-1 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3.5 fill-current" />
                ))}
              </div>

              <p className="mt-5 flex-1 text-sm leading-7 text-foreground/72">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Google review template
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
