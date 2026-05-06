import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ServicePage } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Event Styling | Cloud Nine Creations",
  description:
    "From intimate gatherings to special occasions, Cloud Nine Creations styles events with elegant balloon decor across Johannesburg.",
}

const highlights = [
  {
    title: "Intimate Gatherings",
    body: "Small celebrations deserve big style. We bring the same attention to detail to dinner parties, anniversaries, and milestone dinners.",
  },
  {
    title: "Corporate Events",
    body: "Brand-aligned balloon installations for product launches, office celebrations, and corporate functions.",
  },
  {
    title: "Milestone Birthdays",
    body: "18ths, 21sts, 30ths, 40ths — we create sophisticated setups that mark the occasion in style.",
  },
  {
    title: "Farewell & Achievement",
    body: "Retirement parties, graduations, and farewell celebrations styled with elegance and warmth.",
  },
]

const faqs = [
  {
    q: "What kinds of events do you style?",
    a: "Birthdays, anniversaries, corporate events, graduations, farewells, dinner parties — if it is worth celebrating, we can style it.",
  },
  {
    q: "Can you work within a strict colour scheme?",
    a: "Yes. Brand colours, venue palettes, or personal preferences — we source and build to match.",
  },
  {
    q: "Do you do large-scale installations?",
    a: "We do. From ceiling installs to full venue dressing, we scope larger projects individually. Reach out to discuss your space.",
  },
  {
    q: "Can I see examples before booking?",
    a: "Absolutely. Browse our gallery or reach out via WhatsApp and we will share relevant work for your event type.",
  },
]

export default function Page() {
  return (
    <main>
      <Navbar />
      <ServicePage
        tag="Event Styling"
        headline="From intimate gatherings to"
        script="special occasions"
        description="Whatever you are celebrating, we bring considered balloon styling that elevates your space. Elegant, intentional, and tailored to the moment — from small dinner parties to large milestone events."
        heroImage="/homepage/gallery 3.webp"
        heroAlt="Balloon styling for an elegant event"
        highlights={highlights}
        galleryImages={[
          { src: "/homepage/gallery 3.webp", alt: "Elegant event balloon styling" },
          { src: "/homepage/gallery 1.webp", alt: "Milestone birthday balloon setup" },
          { src: "/homepage/gallery 4.webp", alt: "Corporate event balloon installation" },
          { src: "/homepage/gallery 2.webp", alt: "Anniversary celebration decor" },
        ]}
        faqs={faqs}
        ctaHeadline="Have an event coming up?"
        whatsappText="Hi Cloud Nine Creations! I would like to enquire about Event Styling balloon decor."
      />
      <Footer />
    </main>
  )
}
