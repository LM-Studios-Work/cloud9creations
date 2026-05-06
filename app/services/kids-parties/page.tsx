import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ServicePage } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Kids Parties | Cloud Nine Creations",
  description:
    "Fun, stylish & unique balloon setups tailored to your child's theme. Cloud Nine Creations creates magical party decor for kids in Johannesburg.",
}

const highlights = [
  {
    title: "Theme-Led Design",
    body: "From unicorns to superheroes, we build every setup around your child's favourite world — colours, characters, and all.",
  },
  {
    title: "Balloon Arches & Columns",
    body: "Statement arches and balloon columns that frame the space and create the perfect photo backdrop.",
  },
  {
    title: "Personalised Touches",
    body: "Name banners, age numbers, and custom centrepieces make the birthday child feel truly special.",
  },
  {
    title: "Safe & Child-Friendly",
    body: "We use high-quality, non-toxic materials and secure all installations with the little ones in mind.",
  },
]

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend at least 2–3 weeks ahead, especially for weekends. Popular dates book out fast.",
  },
  {
    q: "Do you deliver and set up?",
    a: "Yes — we handle full delivery, setup, and styling on the day so you can focus on celebrating.",
  },
  {
    q: "Can you match a specific colour palette?",
    a: "Absolutely. Share your colours and theme and we will source balloons to match as closely as possible.",
  },
  {
    q: "What areas do you cover?",
    a: "We are based in Johannesburg and travel to surrounding suburbs. Contact us to confirm your area.",
  },
]

export default function Page() {
  return (
    <main>
      <Navbar />
      <ServicePage
        tag="Kids Parties"
        headline="Fun & stylish setups your little one"
        script="will love"
        description="From bold arches to whimsical centrepieces, we create playful, polished party decor that brings your child's favourite theme to life — and gives parents something beautiful to photograph."
        heroImage="/homepage/gallery 1.webp"
        heroAlt="Colourful balloon setup for a kids birthday party"
        highlights={highlights}
        galleryImages={[
          { src: "/homepage/gallery 1.webp", alt: "Kids party balloon arch" },
          { src: "/homepage/gallery 2.webp", alt: "Birthday balloon column setup" },
          { src: "/homepage/gallery 3.webp", alt: "Themed balloon centrepiece" },
          { src: "/homepage/gallery 4.webp", alt: "Custom birthday party decor" },
        ]}
        faqs={faqs}
        ctaHeadline="Ready to make their day magical?"
        whatsappText="Hi Cloud Nine Creations! I would like to enquire about a Kids Party balloon setup."
      />
      <Footer />
    </main>
  )
}
