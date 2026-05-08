import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturesBar } from "@/components/features-bar"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { Footer } from "@/components/footer"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "/#localbusiness",
  name: "Cloud Nine Creations",
  description:
    "Elegant balloon decor and event styling for kids parties, baby showers, intimate events, and custom celebrations in Johannesburg, South Africa.",
  url: "/",
  image: "/homepage/hero.webp",
  logo: "/logo (2).png",
  telephone: "+27821234567",
  email: "hello@cloudninecreations.co.za",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressCountry: "ZA",
  },
  areaServed: {
    "@type": "City",
    name: "Johannesburg",
  },
  sameAs: ["https://share.google/mtT8OyNZ29i15a18Q"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Balloon decor",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Event styling",
      },
    },
  ],
}

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Hero />
      <FeaturesBar />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Footer />
    </main>
  )
}
