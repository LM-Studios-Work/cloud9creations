import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ServicePage } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Baby Showers & Celebrations | Cloud Nine Creations",
  description:
    "Elegant balloon decor for a beautiful and memorable baby shower or gender reveal. Cloud Nine Creations styles intimate celebrations across Johannesburg.",
}

const highlights = [
  {
    title: "Soft & Elegant Palettes",
    body: "Muted pastels, earthy neutrals, or classic whites — we curate balloon arrangements that feel refined and beautiful.",
  },
  {
    title: "Gender Reveals",
    body: "Surprise moments styled to perfection, from reveal arches to confetti balloon pops.",
  },
  {
    title: "Table & Centrepiece Styling",
    body: "Coordinated table balloons and floral-inspired clusters that tie the whole look together.",
  },
  {
    title: "Full Venue Styling",
    body: "We dress the entire space — entrance, cake table, seating areas — for a cohesive, editorial feel.",
  },
]

const faqs = [
  {
    q: "Can you incorporate florals or other decor?",
    a: "We specialise in balloon styling but can work alongside your florist or decor team to create a cohesive look.",
  },
  {
    q: "Do you do gender reveals?",
    a: "Yes — we style reveal moments including colour-burst arches, confetti setups, and surprise balloon boxes.",
  },
  {
    q: "How long does setup take?",
    a: "Typically 1–3 hours depending on the scope. We coordinate with your venue to arrive at the right time.",
  },
  {
    q: "Can I choose a colour palette that isn't pink or blue?",
    a: "Of course. We love working with sage green, ivory, terracotta, lilac, and any palette you have in mind.",
  },
]

export default function Page() {
  return (
    <main>
      <Navbar />
      <ServicePage
        tag="Baby Showers & Celebrations"
        headline="Elegant decor for a beautiful &"
        script="memorable celebration"
        description="Soft, considered balloon styling that honours the moment. We design intimate, elegant setups for baby showers and gender reveals that feel as special as the occasion itself."
        heroImage="/homepage/gallery 2.webp"
        heroAlt="Soft elegant balloon setup for a baby shower"
        highlights={highlights}
        galleryImages={[
          { src: "/homepage/gallery 2.webp", alt: "Baby shower balloon arrangement" },
          { src: "/homepage/gallery 4.webp", alt: "Gender reveal balloon arch" },
          { src: "/homepage/gallery 1.webp", alt: "Pastel balloon centrepiece" },
          { src: "/homepage/gallery 3.webp", alt: "Baby shower full venue styling" },
        ]}
        faqs={faqs}
        ctaHeadline="Let us style your special moment."
        whatsappText="Hi Cloud Nine Creations! I would like to enquire about a Baby Shower balloon setup."
      />
      <Footer />
    </main>
  )
}
