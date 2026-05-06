import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ServicePage } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Custom Setups | Cloud Nine Creations",
  description:
    "Bespoke balloon designs created just for you and your vision. Cloud Nine Creations brings your unique ideas to life across Johannesburg.",
}

const highlights = [
  {
    title: "Your Vision, Built",
    body: "Bring us a mood board, a colour, or just a feeling — we translate your ideas into a fully realised balloon setup.",
  },
  {
    title: "Sculptural Installations",
    body: "Beyond arches and columns — organic shapes, ceiling clouds, wall art, and large-scale sculptures.",
  },
  {
    title: "Colour Matching",
    body: "We source balloons to match specific Pantone references, brand colours, or fabric swatches you share with us.",
  },
  {
    title: "One-of-a-Kind Pieces",
    body: "No template, no repeat. Every custom setup is designed exclusively for you and your occasion.",
  },
]

const faqs = [
  {
    q: "How does the custom design process work?",
    a: "You share your vision — references, colours, space dimensions — and we develop a concept for your approval before we begin.",
  },
  {
    q: "How much does a custom setup cost?",
    a: "Every setup is priced individually based on complexity, materials, and scale. Reach out with your brief for a quote.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "Custom work requires more lead time — ideally 4+ weeks. For elaborate installations, the earlier the better.",
  },
  {
    q: "Can custom setups be used for commercial shoots or brand events?",
    a: "Yes. We work with photographers, content creators, and brands on styled shoots and commercial installations.",
  },
]

export default function Page() {
  return (
    <main>
      <Navbar />
      <ServicePage
        tag="Custom Setups"
        headline="Bespoke designs created just for"
        script="you"
        description="No templates, no repetition. We work with you from concept to installation to build something entirely your own — whether it is a sculptural centrepiece, a ceiling cloud, or a fully dressed venue."
        heroImage="/homepage/gallery 4.webp"
        heroAlt="Bespoke custom balloon installation"
        highlights={highlights}
        galleryImages={[
          { src: "/homepage/gallery 4.webp", alt: "Custom balloon installation" },
          { src: "/homepage/gallery 3.webp", alt: "Bespoke balloon sculpture" },
          { src: "/homepage/gallery 2.webp", alt: "Large-scale balloon ceiling setup" },
          { src: "/homepage/gallery 1.webp", alt: "Custom colour-matched balloon decor" },
        ]}
        faqs={faqs}
        ctaHeadline="Have something specific in mind?"
        whatsappText="Hi Cloud Nine Creations! I would like to enquire about a Custom balloon setup."
      />
      <Footer />
    </main>
  )
}
